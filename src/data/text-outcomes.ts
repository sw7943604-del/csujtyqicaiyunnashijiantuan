export interface TextOutcome {
  project: 'tiemai-zhuguang' | 'dianzhong-xunhong' | 'diannan-xinchuan';
  year: '2025' | '2026';
  type: '调研报告' | '新闻稿' | '建议材料' | '成果登记';
  title: string;
  summary: string;
}

export const textOutcomes: TextOutcome[] = [
  { project: 'tiemai-zhuguang', year: '2025', type: '调研报告', title: '云南铁路历史、公共服务与区域发展实践调研报告', summary: '根据铁路博物馆、公益慢火车、米轨线路、磨憨站与碧色寨等点位的实地材料整理。' },
  { project: 'tiemai-zhuguang', year: '2025', type: '新闻稿', title: '“铁脉逐光”系列实践新闻稿', summary: '记录铁路沿线走访、车厢访谈与交通文化传播过程。' },
  { project: 'dianzhong-xunhong', year: '2025', type: '调研报告', title: '滇中红色文化寻访实践报告', summary: '围绕查尼皮、西南联大蒙自分校纪念馆、先锋书店与碧色寨等历史现场整理。' },
  { project: 'dianzhong-xunhong', year: '2025', type: '建议材料', title: '红色文化传播优化建议', summary: '基于现场观察、访谈和文献资料形成的传播建议材料。' },
  { project: 'dianzhong-xunhong', year: '2025', type: '新闻稿', title: '“滇中寻红”实践新闻稿', summary: '记录红色旧址寻访、西南联大历史学习和主题微课制作。' },
  { project: 'diannan-xinchuan', year: '2026', type: '新闻稿', title: '“奔腾红河·共铸芳华”寒假实践新闻稿', summary: '记录建民中学学习、建水历史空间走访、朱德旧居访谈与团委座谈。' },
  { project: 'diannan-xinchuan', year: '2026', type: '成果登记', title: '2026 年寒假社会实践成果及宣传报道登记', summary: '汇总地方、学校及学院媒体发布情况与阶段成果。' },
];
