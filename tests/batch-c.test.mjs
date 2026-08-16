import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('批次 C 页面不再使用占位页', async () => {
  for (const path of ['src/pages/timeline.astro', 'src/pages/projects/index.astro', 'src/pages/projects/[slug].astro']) {
    const source = await read(path);
    assert.doesNotMatch(source, /StubPage/);
  }
});

test('项目总览使用完整名称模式并保留阶段层级', async () => {
  const [page, plate] = await Promise.all([
    read('src/pages/projects/index.astro'),
    read('src/components/ProjectPlate.astro'),
  ]);
  assert.match(page, /full/);
  assert.match(page, /projectsByStage/);
  assert.match(plate, /full\s*\?/);
});

test('详情页按状态分流且筹备页不渲染影像墙与成果模块', async () => {
  const source = await read('src/pages/projects/[slug].astro');
  assert.match(source, /project\.status\s*===\s*['"]conducted['"]/);
  assert.match(source, /GalleryWall/);
  assert.match(source, /MediaSlot/);
  assert.match(source, /RailMini/);
  assert.match(source, /project\.process/);
  assert.match(source, /筹备中/);
  assert.match(source, /不代表活动已经开展或成果已经形成/);
});

test('共享灯箱提供对话框语义、关闭路径与键盘导航', async () => {
  const source = await read('src/components/Lightbox.astro');
  assert.match(source, /aria-modal="true"/);
  assert.match(source, /Escape/);
  assert.match(source, /ArrowLeft/);
  assert.match(source, /ArrowRight/);
  assert.match(source, /focus/);
});

test('实践脉络提供三个阶段锚点与返回首页展厅链接', async () => {
  const source = await read('src/pages/timeline.astro');
  assert.match(source, /stages\.map/);
  assert.match(source, /timeline-stage-/);
  assert.match(source, /stage-\$\{stage\.id\}/);
});
