import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('批次 D 四页不再使用占位页', async () => {
  for (const name of ['archive', 'outcomes', 'team', 'about']) assert.doesNotMatch(await read(`src/pages/${name}.astro`), /StubPage/);
});

test('媒体登记模型包含公开核验字段且登记获授权媒体', async () => {
  const source = await read('src/data/media.ts');
  assert.match(source, /verified:\s*boolean/);
  assert.match(source, /slotId\??:\s*string/);
  assert.match(source, /export const media[^=]*=\s*\[/);
  assert.match(source, /2025-summer/);
  assert.match(source, /2026-winter/);
});

test('档案页提供三组筛选、重置和空状态', async () => {
  const source = await read('src/pages/archive.astro');
  assert.match(source, /data-filter-stage/);
  assert.match(source, /data-filter-project/);
  assert.match(source, /data-filter-type/);
  assert.match(source, /data-filter-reset/);
  assert.match(source, /档案室待媒体登记后开放/);
});

test('成果页严格分为三种状态', async () => {
  const source = await read('src/pages/outcomes.astro');
  for (const title of ['已形成成果', '正在整理', '未来计划或预期成果']) assert.match(source, new RegExp(title));
});

test('团队页按三个阶段提供纯姓名墙且无人物卡或联系方式', async () => {
  const source = await read('src/pages/team.astro');
  assert.match(source, /stages\.map/);
  assert.match(source, /teamByStage/);
  assert.match(source, /name-wall__item/);
  assert.doesNotMatch(source, /头像|职位|联系方式|team-card/);
});

test('关于页包含项目背景、授权隐私与内容说明', async () => {
  const source = await read('src/pages/about.astro');
  for (const title of ['项目背景', '素材授权与隐私', '内容说明']) assert.match(source, new RegExp(title));
});
