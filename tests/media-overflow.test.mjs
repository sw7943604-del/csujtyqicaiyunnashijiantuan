import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('影像墙网格允许轨道收缩且媒体不超过卡片宽度', async () => {
  const source = await read('src/components/GalleryWall.astro');
  assert.match(source, /minmax\(0,\s*1fr\)/);
  assert.match(source, /min-width:\s*0/);
  assert.match(source, /max-width:\s*100%/);
  assert.match(source, /overflow-wrap:\s*anywhere/);
});

test('影像档案的图片和视频均受容器宽度约束', async () => {
  const source = await read('src/pages/archive.astro');
  assert.match(source, /minmax\(0,\s*1fr\)/);
  assert.match(source, /\.archive-grid\s*>\s*\*/);
  assert.match(source, /min-width:\s*0/);
  assert.match(source, /max-width:\s*100%/);
  assert.match(source, /height:\s*auto/);
});
