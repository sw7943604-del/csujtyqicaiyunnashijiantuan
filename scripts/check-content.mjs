import { access, readFile } from 'node:fs/promises';

const slots = JSON.parse(await readFile('src/data/media-slots.json', 'utf8'));
const projects = await readFile('src/data/projects.ts', 'utf8');
const tokens = await readFile('src/styles/tokens.css', 'utf8');
const detail = await readFile('src/pages/projects/[slug].astro', 'utf8');
const errors = [];
const requiredCaption = '筹备主题视觉，非 2026 年暑期现场记录';

const slotIds = new Set(slots.slots.map((slot) => slot.id));
for (const slot of slots.slots.filter((item) => item.type === 'preparation-visual')) {
  if (slot.requiredCaption !== requiredCaption) errors.push(`筹备插槽 ${slot.id} 缺少强制 caption`);
}

const fixedColors = {
  'c-tiemai': '#1f4e79', 'c-xunhong': '#a63a32', 'c-xinchuan': '#c46a2b',
  'c-zuji': '#665487', 'c-fazhi': '#087e8b', 'c-yulu': '#3f7d5a',
};
for (const [name, value] of Object.entries(fixedColors)) {
  if (!tokens.includes(`--${name}: ${value}`)) errors.push(`固定色归属变化：--${name}`);
  if (!projects.includes(`var(--${name})`)) errors.push(`项目未引用固定色：--${name}`);
}

for (const match of detail.matchAll(/<MediaSlot\s+id="([^"]+)"/g)) {
  if (!slotIds.has(match[1])) errors.push(`MediaSlot 未登记：${match[1]}`);
}
for (const project of ['tiemai-zhuguang','dianzhong-xunhong','diannan-xinchuan']) {
  for (const suffix of ['hero','gallery']) if (!slotIds.has(`project.${project}.${suffix}`)) errors.push(`缺少项目插槽：project.${project}.${suffix}`);
}
for (const project of ['chongzou-zuji','fazhi-kepu','yulu-tongda']) {
  if (!slotIds.has(`project.${project}.preparation`)) errors.push(`缺少筹备插槽：project.${project}.preparation`);
}
if (
  !detail.includes("project.status === 'conducted'") ||
  !detail.includes('project.direction') ||
  !detail.includes('不代表活动已经开展或成果已经形成')
) errors.push('详情页未保持 A/B 状态分流');
try { await access('src/data.js'); errors.push('禁止存在 src/data.js'); } catch {}

if (errors.length) { console.error(`内容检查失败（${errors.length} 项）：\n${errors.join('\n')}`); process.exit(1); }
console.log(`内容检查通过：${slotIds.size} 个媒体插槽、6 个固定色归属及筹备内容纪律有效。`);
