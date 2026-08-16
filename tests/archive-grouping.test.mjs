import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readArchive = () => readFile(new URL('../src/pages/archive.astro', import.meta.url), 'utf8');

test('影像档案按项目建立一级成果分组', async () => {
  const source = await readArchive();
  assert.match(source, /data-archive-project/);
  assert.match(source, /project\.name/);
  assert.match(source, /project\.color\.base/);
});

test('项目内部分为微课视频与纪实照片', async () => {
  const source = await readArchive();
  assert.match(source, /微课视频/);
  assert.match(source, /纪实照片/);
  assert.match(source, /data-archive-part/);
});

test('筛选后隐藏没有可见媒体的分类和项目', async () => {
  const source = await readArchive();
  assert.match(source, /part\.hidden\s*=\s*!part\.querySelector\('\[data-archive-item\]:not\(\[hidden\]\)'\)/);
  assert.match(source, /projectGroup\.hidden\s*=\s*!projectGroup\.querySelector\('\[data-archive-item\]:not\(\[hidden\]\)'\)/);
});
