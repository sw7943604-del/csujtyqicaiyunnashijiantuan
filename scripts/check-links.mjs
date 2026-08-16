import { access, readdir, readFile } from 'node:fs/promises';
import { dirname, extname, join, normalize, resolve } from 'node:path';

async function htmlFiles(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await htmlFiles(path));
    else if (extname(entry.name) === '.html') output.push(path);
  }
  return output;
}

const distRoot = resolve('dist');
const configuredBase = process.env.SITE_BASE ?? '/';
const siteBase = `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');
const errors = [];
for (const html of await htmlFiles(distRoot)) {
  const source = await readFile(html, 'utf8');
  for (const match of source.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(raw)) continue;
    const clean = decodeURIComponent(raw.split(/[?#]/)[0]);
    const localPath = clean.startsWith(siteBase) ? `/${clean.slice(siteBase.length)}` : clean;
    let target = localPath.startsWith('/') ? join(distRoot, localPath) : resolve(dirname(html), localPath);
    target = normalize(target);
    if (!target.startsWith(distRoot)) { errors.push(`${html}: 路径越界 ${raw}`); continue; }
    const candidates = extname(target) ? [target] : [target, join(target, 'index.html'), `${target}.html`];
    let found = false;
    for (const candidate of candidates) { try { await access(candidate); found = true; break; } catch {} }
    if (!found) errors.push(`${html}: 缺失 ${raw}`);
  }
}
if (errors.length) { console.error(`链接检查失败（${errors.length} 项）：\n${errors.join('\n')}`); process.exit(1); }
console.log('链接检查通过：dist 内部 href|src 均可解析到构建文件。');
