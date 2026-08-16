"""为授权照片生成内部审查联系表，不修改原图。"""
from __future__ import annotations

import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


def main() -> None:
    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    output.mkdir(parents=True, exist_ok=True)
    files = sorted(
        path for path in source.rglob("*")
        if path.is_file() and path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
    )
    cols, rows, thumb_w, thumb_h, label_h = 5, 6, 280, 190, 34
    per_sheet = cols * rows
    font = ImageFont.load_default()
    for page, start in enumerate(range(0, len(files), per_sheet), start=1):
        canvas = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + label_h)), "#f4f1ea")
        draw = ImageDraw.Draw(canvas)
        for offset, path in enumerate(files[start:start + per_sheet]):
            index = start + offset
            x = (offset % cols) * thumb_w
            y = (offset // cols) * (thumb_h + label_h)
            try:
                with Image.open(path) as image:
                    image = ImageOps.exif_transpose(image).convert("RGB")
                    image.thumbnail((thumb_w - 8, thumb_h - 8))
                    px = x + (thumb_w - image.width) // 2
                    py = y + (thumb_h - image.height) // 2
                    canvas.paste(image, (px, py))
            except Exception:
                draw.rectangle((x + 4, y + 4, x + thumb_w - 4, y + thumb_h - 4), outline="#a63a32")
            draw.text((x + 6, y + thumb_h + 6), f"{index:03d}  {path.name[:28]}", fill="#1c1e21", font=font)
        canvas.save(output / f"contact-{page:02d}.jpg", quality=88)
    (output / "index.txt").write_text("\n".join(f"{index:03d}\t{path.name}" for index, path in enumerate(files)), encoding="utf-8")


if __name__ == "__main__":
    main()
