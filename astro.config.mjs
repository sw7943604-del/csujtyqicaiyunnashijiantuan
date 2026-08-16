import { defineConfig } from 'astro/config';

// 支持站点根路径与仓库子路径部署：
// 默认 base 为 '/'；部署到子路径时设置环境变量 SITE_BASE=/子路径/ 再构建即可
export default defineConfig({
  base: process.env.SITE_BASE ?? '/',
  output: 'static',
});
