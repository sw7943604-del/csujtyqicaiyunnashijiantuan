import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const roots = ['src', 'dist'];
const textExtensions = new Set(['.astro', '.css', '.html', '.js', '.json', '.mjs', '.ts']);
const rules = {
  mobile: /(?<!\d)1[3-9]\d{9}(?!\d)/g,
  email: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
  identity: /(?<!\d)\d{17}[\dXx](?!\d)/g,
  student: /(?:学号|student\s*id)\s*[:：]?\s*[A-Z0-9-]{6,20}/gi,
};

async function files(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await files(path));
    else if (textExtensions.has(extname(entry.name))) output.push(path);
  }
  return output;
}

const findings = [];
for (const root of roots) {
  for (const file of await files(root)) {
    const text = await readFile(file, 'utf8');
    for (const [name, pattern] of Object.entries(rules)) {
      pattern.lastIndex = 0;
      for (const match of text.matchAll(pattern)) findings.push(`${relative('.', file)}: ${name} -> ${match[0]}`);
    }
  }
}
if (findings.length) {
  console.error(`隐私检查失败（${findings.length} 项）：\n${findings.join('\n')}`);
  process.exit(1);
}
console.log('隐私检查通过：未发现手机号、邮箱、身份证或学号模式。');
