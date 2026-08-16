import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('package.json 接入四个质量命令', async () => {
  const pkg = JSON.parse(await read('package.json'));
  for (const name of ['check:privacy', 'check:content', 'check:links', 'verify']) assert.equal(typeof pkg.scripts[name], 'string');
});

test('隐私检查覆盖手机号、邮箱、身份证和学号', async () => {
  const source = await read('scripts/check-privacy.mjs');
  for (const marker of ['mobile', 'email', 'identity', 'student']) assert.match(source, new RegExp(marker));
});

test('内容检查覆盖插槽、筹备说明和固定色归属', async () => {
  const source = await read('scripts/check-content.mjs');
  assert.match(source, /media-slots\.json/);
  assert.match(source, /筹备主题视觉，非 2026 年暑期现场记录/);
  assert.match(source, /c-tiemai/);
  assert.match(source, /MediaSlot/);
});

test('链接检查解析构建 HTML 的 href 与 src', async () => {
  const source = await read('scripts/check-links.mjs');
  assert.match(source, /href\|src/);
  assert.match(source, /dist/);
});

test('链接检查支持 GitHub Pages 仓库子路径', async () => {
  const source = await read('scripts/check-links.mjs');
  assert.match(source, /process\.env\.SITE_BASE/);
  assert.match(source, /startsWith\(siteBase\)/);
  assert.match(source, /slice\(siteBase\.length/);
});
