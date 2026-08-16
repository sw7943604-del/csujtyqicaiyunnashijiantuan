import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('真实媒体通过插槽和影像组绑定，不再固定渲染六张占位图', async () => {
  const [slot, gallery] = await Promise.all([
    read('src/components/MediaSlot.astro'),
    read('src/components/GalleryWall.astro'),
  ]);
  assert.match(slot, /mediaForSlot/);
  assert.match(gallery, /mediaForSlot/);
  assert.doesNotMatch(gallery, /Array\.from\(\{ length: 6 \}/);
});

test('项目数据区分已核验过程成果和筹备计划', async () => {
  const source = await read('src/data/projects.ts');
  for (const field of ['process', 'outcomes', 'direction', 'route', 'preparation']) {
    assert.match(source, new RegExp(`${field}:`));
  }
  assert.match(source, /draft:\s*false/);
});

test('2026 暑期项目保持筹备状态，不登记现场媒体', async () => {
  const [projects, media] = await Promise.all([
    read('src/data/projects.ts'),
    read('src/data/media.ts'),
  ]);
  assert.match(projects, /stageId:\s*'2026-summer'[\s\S]{0,240}status:\s*'preparing'/);
  assert.doesNotMatch(media, /stage:\s*'2026-summer'/);
});

test('团队数据仅登记姓名与阶段', async () => {
  const source = await read('src/data/team.ts');
  assert.match(source, /teamByStage/);
  assert.match(source, /李科毅/);
  assert.match(source, /白一飞/);
  assert.doesNotMatch(source, /phone|email|职位|联系方式/);
});
