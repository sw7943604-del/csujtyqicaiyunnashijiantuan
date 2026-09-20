"""生成 2026 暑期实践网页媒体副本；源文件只读、不覆盖。"""

from pathlib import Path
import subprocess

from PIL import Image, ImageOps

PHOTO_ROOT = Path(r"C:\Users\17296\Desktop\实践照片")
CREATIVE_ROOT = Path(r"C:\Users\17296\Desktop\26暑期实践文创")
OUTPUT = Path(__file__).resolve().parent.parent / "public" / "media" / "2026-summer"
FFMPEG = Path(r"H:\tools\ffmpeg\ffmpeg-9.0.1-essentials_build\bin\ffmpeg.exe")

PHOTOS = {
    "stage-lead.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2738.JPG",
    "chongzou-hero.webp": PHOTO_ROOT / "中老铁路" / "IMG_2435.JPG",
    "chongzou-train.webp": PHOTO_ROOT / "中老铁路" / "IMG_2441.JPG",
    "chongzou-station.webp": PHOTO_ROOT / "中老铁路" / "IMG_2444.JPG",
    "chongzou-old-street.webp": PHOTO_ROOT / "中老铁路" / "IMG_2387.JPG",
    "chongzou-exhibition.webp": PHOTO_ROOT / "中老铁路" / "IMG_2416.JPG",
    "chongzou-meeting.webp": PHOTO_ROOT / "建水座谈会" / "IMG_2461.JPG",
    "chongzou-exchange.webp": PHOTO_ROOT / "建水座谈会" / "IMG_2508.JPG",
    "fazhi-hero.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2624.JPG",
    "fazhi-talk.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2525.JPG",
    "fazhi-materials.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2534.JPG",
    "fazhi-children.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2556.JPG",
    "fazhi-service.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2594.JPG",
    "fazhi-group.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2601.JPG",
    "fazhi-dialogue.webp": PHOTO_ROOT / "金鸡寨" / "IMG_2634.JPG",
    "yulu-hero.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2738.JPG",
    "yulu-interview.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2692.JPG",
    "yulu-survey.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2698.JPG",
    "yulu-materials.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2702.JPG",
    "yulu-youth.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2708.JPG",
    "yulu-senior.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2726.JPG",
    "yulu-home-visit.webp": PHOTO_ROOT / "甸尾乡" / "IMG_2754.JPG",
}

CREATIVES = {
    "creative/chongzou-transport.webp": CREATIVE_ROOT / "大插1交通" / "成图改.jpg",
    "creative/fazhi-poster.webp": CREATIVE_ROOT / "大插2法制" / "成图.png",
    **{
        f"creative/chongzou-jianshui-{index}.webp": path
        for index, path in enumerate(sorted((CREATIVE_ROOT / "建水记新增4" / "成图").glob("*.png")), 1)
    },
    **{
        f"creative/yulu-puer-{index}.webp": path
        for index, path in enumerate(sorted((CREATIVE_ROOT / "普洱记明信片4" / "普洱明信片成图").glob("*.*")), 1)
        if path.suffix.lower() in {".png", ".jpg", ".jpeg"}
    },
    **{
        f"creative/yulu-food-{index}.webp": path
        for index, path in enumerate(sorted((CREATIVE_ROOT / "美食冰箱贴4" / "成图").glob("*.png")), 1)
    },
}

VIDEOS = [
    (Path(r"D:\Download\中老铁路\中老铁路微课.mp4"), "videos/chongzou-railway-course", 8),
    (Path(r"D:\Download\纪实视频.mp4"), "videos/chongzou-documentary", 8),
    (Path(r"D:\Download\普法微课.mp4"), "videos/fazhi-course", 8),
    (Path(r"D:\Download\推普微课.mp4"), "videos/yulu-course", 8),
]


def prepare_image(relative: str, source: Path) -> None:
    if not source.is_file():
        raise FileNotFoundError(source)
    target = OUTPUT / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as raw:
        image = ImageOps.exif_transpose(raw).convert("RGB")
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
        print(f"IMAGE\t{relative}\t{image.width}x{image.height}\t{target.stat().st_size}")


def prepare_video(source: Path, stem: str, poster_second: int) -> None:
    if not source.is_file():
        raise FileNotFoundError(source)
    target = OUTPUT / f"{stem}.mp4"
    poster = OUTPUT / f"{stem}.jpg"
    target.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run([
        str(FFMPEG), "-y", "-i", str(source), "-map_metadata", "-1",
        "-vf", "scale='min(1280,iw)':-2", "-c:v", "libx264", "-preset", "veryfast",
        "-crf", "27", "-maxrate", "1800k", "-bufsize", "3600k", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "112k", "-movflags", "+faststart", str(target),
    ], check=True)
    subprocess.run([
        str(FFMPEG), "-y", "-ss", str(poster_second), "-i", str(target),
        "-frames:v", "1", "-q:v", "3", str(poster),
    ], check=True)
    print(f"VIDEO\t{stem}\t{target.stat().st_size}\t{poster.stat().st_size}")


for relative, source in {**PHOTOS, **CREATIVES}.items():
    prepare_image(relative, source)

for source, stem, poster_second in VIDEOS:
    prepare_video(source, stem, poster_second)
