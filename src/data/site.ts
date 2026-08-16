/** 站点元信息：导航固定为六项，"关于"只在页脚 */
export const site = {
  name: '七彩云南·铁脉同行',
  tagline: '高校社会实践成果展示 · 影像展',
  nav: [
    { label: '首页', path: '' },
    { label: '实践脉络', path: 'timeline/' },
    { label: '实践项目', path: 'projects/' },
    { label: '影像档案', path: 'archive/' },
    { label: '成果', path: 'outcomes/' },
    { label: '团队', path: 'team/' },
  ],
  about: { label: '关于', path: 'about/' },
} as const;
