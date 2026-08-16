import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('线路图状态文字上下留出断线空间', async () => {
  const source = await read('src/components/RailMap.astro');
  assert.match(source, /STATUS_GAP_TOP/);
  assert.match(source, /STATUS_GAP_BOTTOM/);
  assert.doesNotMatch(source, /x1=\{x\}\s+y1=\{MAIN_Y \+ 10\}\s+x2=\{x\}\s+y2=\{FORK_Y\}/);
});

test('2025 年三集微课全部登记为网页视频', async () => {
  const source = await read('src/data/media.ts');
  for (const id of ['microcourse-2025-1', 'microcourse-2025-2', 'microcourse-2025-3']) assert.match(source, new RegExp(id));
});

test('正式页面不再出现净室、样板或草稿口径', async () => {
  const files = ['src/pages/about.astro', 'src/pages/index.astro', 'src/pages/projects/index.astro', 'src/pages/timeline.astro', 'src/components/SiteFooter.astro'];
  for (const file of files) {
    const source = await read(file);
    assert.doesNotMatch(source, /净室|重构样板|样板阶段|草稿|待确认|待插入/);
  }
});
