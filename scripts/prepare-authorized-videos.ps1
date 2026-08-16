$ErrorActionPreference = 'Stop'
$ffmpeg = 'H:\tools\ffmpeg\ffmpeg-9.0.1-essentials_build\bin\ffmpeg.exe'
$videos = @(
  @{ Source = 'D:\Download\02-2026年寒假社会实践\“青春学习堂”短视频大赛\临安红迹·薪火相传：青春的脚步与信仰的回响.mp4'; Folder = '2026-winter'; Name = 'linan-red-memory'; Filter = 'scale=1280:-2' },
  @{ Source = 'D:\Download\02-2026年寒假社会实践\“青春学习堂”短视频大赛\建水红迹，薪火永传.mp4'; Folder = '2026-winter'; Name = 'jianshui-red-memory'; Filter = 'scale=720:-2' },
  @{ Source = 'D:\Download\02-2026年寒假社会实践\中南大学交通运输工程学院临时团支部赴云南省红河州文化传承与科普寒假社会实践团-李科毅\实践证明材料\交通运输工程学院+团队+主题微课视频.mp4'; Folder = '2026-winter'; Name = 'theme-microcourse'; Filter = 'scale=720:-2' },
  @{ Source = 'D:\Download\01-2025年暑假社会实践\实践成果\微课\第一集.mp4'; Folder = '2025'; Name = 'microcourse-1'; Filter = 'scale=720:-2' },
  @{ Source = 'D:\Download\01-2025年暑假社会实践\实践成果\微课\第二集.mp4'; Folder = '2025'; Name = 'microcourse-2'; Filter = 'scale=720:-2' },
  @{ Source = 'D:\Download\01-2025年暑假社会实践\实践成果\微课\第三集.mp4'; Folder = '2025'; Name = 'microcourse-3'; Filter = 'scale=720:-2' }
)

foreach ($video in $videos) {
  $output = Join-Path $PSScriptRoot "..\public\media\$($video.Folder)\videos"
  New-Item -ItemType Directory -Path $output -Force | Out-Null
  $target = Join-Path $output "$($video.Name).mp4"
  $poster = Join-Path $output "$($video.Name).jpg"
  & $ffmpeg -y -i $video.Source -map_metadata -1 -vf $video.Filter -c:v libx264 -preset medium -crf 25 -maxrate 2500k -bufsize 5000k -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart $target
  if ($LASTEXITCODE -ne 0) { throw "视频转码失败：$($video.Name)" }
  & $ffmpeg -y -ss 8 -i $target -frames:v 1 -q:v 3 $poster
  if ($LASTEXITCODE -ne 0) { throw "视频封面生成失败：$($video.Name)" }
}
