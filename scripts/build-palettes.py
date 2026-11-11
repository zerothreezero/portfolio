"""Refresh the public color index locally. Requires Python 3 and Pillow."""
from concurrent.futures import ThreadPoolExecutor
from io import BytesIO
import json
from pathlib import Path
import re
from urllib.parse import urlencode
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data/palettes.json"
HANDLE = "zerothreezero.bsky.social"
DID = "did:plc:peerdka6xgmy6dglaswqrw6b"
THUMB = re.compile(r"https://cdn\.bsky\.app/img/feed_thumbnail/plain/" + re.escape(DID) + r"/(baf[a-z2-7]{32,120})(?:@[a-z]+)?$")
API = "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed"


def read(url, limit):
    with urlopen(Request(url, headers={"User-Agent": "030-portfolio-palette-builder"}), timeout=20) as response:
        data = response.read(limit + 1)
        if len(data) > limit:
            raise ValueError("Response too large")
        return data


def thumbnails():
    result, seen, cursor = {}, set(), ""
    for _ in range(10):
        query = {"actor": HANDLE, "filter": "posts_with_media", "limit": 100, "includePins": "false"}
        if cursor:
            query["cursor"] = cursor
        page = json.loads(read(API + "?" + urlencode(query), 5_000_000))
        for entry in page["feed"]:
            post = entry.get("post", {})
            if entry.get("reason") or post.get("record", {}).get("reply") or post.get("author", {}).get("did") != DID:
                continue
            embed = post.get("embed", {})
            for image in embed.get("images", embed.get("media", {}).get("images", [])):
                url = image.get("thumb", "")
                match = THUMB.fullmatch(url)
                if match:
                    result[match[1]] = url
        cursor = page.get("cursor")
        if not cursor or cursor in seen:
            break
        seen.add(cursor)
    return result


def palette(row):
    cid, url = row
    with Image.open(BytesIO(read(url, 2_000_000))) as source:
        small = source.convert("RGBA").resize((32, 32), Image.Resampling.LANCZOS)
    bins = {}
    pixels = small.get_flattened_data() if hasattr(small, "get_flattened_data") else small.getdata()
    for r, g, b, a in pixels:
        if a < 128:
            continue
        group = bins.setdefault((r >> 5, g >> 5, b >> 5), [0, 0, 0, 0])
        for i, v in enumerate((r, g, b, 1)):
            group[i] += v
    colors = []
    for r, g, b, count in sorted(bins.values(), key=lambda v: -v[3]):
        rgb = tuple(round(x / count) for x in (r, g, b))
        if all(sum((a - b) ** 2 for a, b in zip(rgb, prev)) > 48 ** 2 for prev in colors):
            colors.append(rgb)
            if len(colors) == 5:
                break
    return cid, ["#%02x%02x%02x" % color for color in colors]


if __name__ == "__main__":
    urls = thumbnails()
    if not urls:
        raise SystemExit("No artwork thumbnails found")
    existing = json.loads(OUTPUT.read_text(encoding="utf-8")) if OUTPUT.exists() else {}
    result = {k: existing[k] for k in urls if k in existing}
    with ThreadPoolExecutor(max_workers=3) as pool:
        result.update(pool.map(palette, ((k, u) for k, u in urls.items() if k not in result)))
    OUTPUT.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"Indexed {len(result)} images")

