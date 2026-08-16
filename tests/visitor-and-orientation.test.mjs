import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('页脚接入全站访客数与访问量并提供加载失败降级', async () => {
  const [footer, layout] = await Promise.all([
    read('src/components/SiteFooter.astro'),
    read('src/layouts/BaseLayout.astro'),
  ]);
  assert.match(footer, /busuanzi_site_uv/);
  assert.match(footer, /busuanzi_site_pv/);
  assert.match(footer, /暂不可用/);
  assert.match(footer, /MutationObserver/);
  assert.match(footer, /normalizeVisitorCount/);
  assert.match(layout, /cdn\.busuanzi\.cc/);
});

test('影像墙保留图片原始方向而非强制裁成横图', async () => {
  const source = await read('src/components/GalleryWall.astro');
  assert.match(source, /aspect-ratio:\s*auto/);
  assert.match(source, /height:\s*auto/);
  assert.doesNotMatch(source, /aspect-ratio:\s*4\s*\/\s*3/);
});

test('媒体预处理对四幅方向异常的文创插画执行方向修正', async () => {
  const source = await read('scripts/prepare-authorized-media.py');
  assert.match(source, /ROTATE_COUNTERCLOCKWISE/);
  for (const number of [1, 2, 3, 4]) assert.match(source, new RegExp(`creative-${number}\\.webp`));
});

test('已开展项目提供点击播放的视频展映且禁止自动播放', async () => {
  const [page, media] = await Promise.all([
    read('src/pages/projects/[slug].astro'),
    read('src/data/media.ts'),
  ]);
  assert.match(page, /VIDEO ARCHIVE/);
  assert.match(page, /projectVideos/);
  assert.match(page, /controls/);
  assert.doesNotMatch(page, /autoplay/);
  assert.match(media, /type:\s*'video'/);
  assert.match(media, /poster/);
});

test('成果页单列调研报告、新闻稿等文字成果', async () => {
  const [page, data] = await Promise.all([
    read('src/pages/outcomes.astro'),
    read('src/data/text-outcomes.ts'),
  ]);
  assert.match(page, /文字成果/);
  assert.match(page, /textOutcomes/);
  for (const type of ['调研报告', '新闻稿', '建议材料']) assert.match(data, new RegExp(type));
});

test('团队页为已开展阶段显示对应合影且筹备阶段不伪造现场照片', async () => {
  const source = await read('src/pages/team.astro');
  assert.match(source, /teamPhotoByStage/);
  assert.match(source, /阶段合影/);
  assert.match(source, /尚无现场合影/);
});
