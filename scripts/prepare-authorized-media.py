"""将人工选定且获授权的原始素材生成网页专用 WebP 副本。"""

from pathlib import Path
from PIL import Image, ImageOps


ROOT_2025 = Path(r"D:\Download\01-2025年暑假社会实践\照片导出原素材")
ROOT_WINTER = Path(
    r"D:\Download\02-2026年寒假社会实践\中南大学交通运输工程学院临时团支部赴云南省红河州文化传承与科普寒假社会实践团-李科毅\实践证明材料"
)
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "media"

FILES = {
    "2025/home-hero.webp": ROOT_2025 / "IMG_20250901_183142.jpg",
    "2025/stage-lead.webp": ROOT_2025 / "IMG_20250830_123937.jpg",
    "2025/tiemai-hero.webp": ROOT_2025 / "IMG_20250831_164430.jpg",
    "2025/tiemai-interview.webp": ROOT_2025 / "DJI_20250830101807_0[00_00_02][20250903-094034].png",
    "2025/tiemai-railway.webp": ROOT_2025 / "DJI_20250831153540_0[00_00_06][20250904-162258].png",
    "2025/tiemai-museum-1.webp": ROOT_2025 / "IMG_20250829_100135.jpg",
    "2025/tiemai-museum-2.webp": ROOT_2025 / "IMG_20250829_103203.jpg",
    "2025/tiemai-green-train.webp": ROOT_2025 / "IMG_20250830_123937.jpg",
    "2025/tiemai-bisezhai.webp": ROOT_2025 / "IMG_20250901_175906.jpg",
    "2025/xunhong-hero.webp": ROOT_2025 / "IMG_20250901_101544.jpg",
    "2025/xunhong-site-1.webp": ROOT_2025 / "IMG_20250901_091350.jpg",
    "2025/xunhong-site-2.webp": ROOT_2025 / "IMG_20250901_091838.jpg",
    "2025/xunhong-site-3.webp": ROOT_2025 / "IMG_20250901_093050.jpg",
    "2025/xunhong-bookstore.webp": ROOT_2025 / "IMG_20250901_140559.jpg",
    "2025/xunhong-university-1.webp": ROOT_2025 / "IMG_20250901_145208.jpg",
    "2025/xunhong-university-2.webp": ROOT_2025 / "IMG_20250901_151650.jpg",
    "2026-winter/stage-lead.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在双龙桥前合影.jpg",
    "2026-winter/xinchuan-hero.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在朱德旧居进行访谈.jpg",
    "2026-winter/xianghui-bridge.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在乡会桥前合影.jpg",
    "2026-winter/jianmin-study.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在建民中学学习.jpg",
    "2026-winter/jianmin-memorial.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在建民中学烈士纪念碑前合影.jpg",
    "2026-winter/league-meeting.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在建水县团委座谈（1）.jpg",
    "2026-winter/zhude-group.webp": ROOT_WINTER / "交通运输工程学院+团队+团队在朱德旧居前合影.jpg",
    "2026-winter/creative-1.webp": ROOT_WINTER / "交通运输工程学院+团队+团队设计文创插画（1）.png",
    "2026-winter/creative-2.webp": ROOT_WINTER / "交通运输工程学院+团队+团队设计文创插画（2）.png",
    "2026-winter/creative-3.webp": ROOT_WINTER / "交通运输工程学院+团队+团队设计文创插画（3）.png",
    "2026-winter/creative-4.webp": ROOT_WINTER / "交通运输工程学院+团队+团队设计文创插画（4）.png",
}

# 这三幅原图的像素方向横躺且没有可用的 EXIF 方向信息。
ROTATE_COUNTERCLOCKWISE = {
    "2026-winter/creative-1.webp",
    "2026-winter/creative-2.webp",
    "2026-winter/creative-3.webp",
    "2026-winter/creative-4.webp",
}


def prepare(relative: str, source: Path, target: Path) -> None:
    if not source.is_file():
        raise FileNotFoundError(source)
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as raw:
        image = ImageOps.exif_transpose(raw)
        if relative in ROTATE_COUNTERCLOCKWISE:
            image = image.rotate(90, expand=True)
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        image.save(target, "WEBP", quality=84, method=6)
        print(f"{target.relative_to(OUTPUT.parent)}\t{image.width}x{image.height}\t{target.stat().st_size}")


for relative, source in FILES.items():
    prepare(relative, source, OUTPUT / relative)
