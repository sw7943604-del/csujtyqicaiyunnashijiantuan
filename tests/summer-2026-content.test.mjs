import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('2026 暑期阶段和三个项目均切换为已开展', async () => {
  const [stages, projects] = await Promise.all([
    read('src/data/stages.ts'),
    read('src/data/projects.ts'),
  ]);
  assert.match(stages, /id:\s*'2026-summer'[\s\S]{0,180}status:\s*'conducted'/);
  for (const slug of ['chongzou-zuji', 'fazhi-kepu', 'yulu-tongda']) {
    const block = projects.match(new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?(?=\\n  \\{|\\n\\];)`))?.[0] ?? '';
    assert.match(block, /status:\s*'conducted'/);
    assert.doesNotMatch(block, /筹备中/);
  }
});

test('三个暑期项目均登记照片和视频', async () => {
  const media = await read('src/data/media.ts');
  assert.match(media, /stage:\s*'2026-summer'/);
  for (const slug of ['chongzou-zuji', 'fazhi-kepu', 'yulu-tongda']) {
    assert.match(media, new RegExp(`project:\\s*'${slug}'[\\s\\S]{0,260}type:\\s*'video'|type:\\s*'video'[\\s\\S]{0,260}project:\\s*'${slug}'`));
    assert.match(media, new RegExp(`slotId:\\s*'project\\.${slug}\\.gallery'`));
  }
});

test('成果页不再把 2026 暑期描述为未来计划', async () => {
  const outcomes = await read('src/pages/outcomes.astro');
  assert.doesNotMatch(outcomes, /以下仅为 2026 年暑期筹备方向/);
});

test('页脚与关于页不再沿用 2026 暑期筹备口径', async () => {
  const [footer, about] = await Promise.all([
    read('src/components/SiteFooter.astro'),
    read('src/pages/about.astro'),
  ]);
  for (const source of [footer, about]) {
    assert.doesNotMatch(source, /2026 年暑期[\s\S]{0,80}(?:筹备阶段|仅为策划方向)/);
  }
  assert.match(footer, /六个实践项目均已开展/);
  assert.match(about, /三个实践阶段均已开展/);
});
