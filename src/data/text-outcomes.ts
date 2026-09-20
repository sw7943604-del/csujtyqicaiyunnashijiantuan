export interface TextOutcome {
  project: 'tiemai-zhuguang' | 'dianzhong-xunhong' | 'diannan-xinchuan' | 'chongzou-zuji' | 'fazhi-kepu' | 'yulu-tongda';
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
  { project: 'chongzou-zuji', year: '2026', type: '调研报告', title: '《重走足迹再学习》调研报告', summary: '结合中老铁路沿线观察、建水校地座谈和交通发展资料形成的实践调研成果。' },
  { project: 'chongzou-zuji', year: '2026', type: '新闻稿', title: '中老铁路与建水实践系列新闻稿', summary: '记录铁路现场走访、地方发展观察和校地交流过程。' },
  { project: 'fazhi-kepu', year: '2026', type: '调研报告', title: '《法治科普行》调研报告', summary: '根据金鸡寨普法宣讲、互动答疑和基层需求观察整理。' },
  { project: 'fazhi-kepu', year: '2026', type: '新闻稿', title: '金鸡寨基层普法系列新闻稿', summary: '记录法治科普服务、宣传材料展示和村民互动。' },
  { project: 'yulu-tongda', year: '2026', type: '新闻稿', title: '甸尾乡推普与语言调查系列新闻稿', summary: '记录推普服务点、语言使用情况访谈和入户交流。' },
  { project: 'yulu-tongda', year: '2026', type: '成果登记', title: '2026 年暑期微课、文创与实践成果登记', summary: '汇总中老铁路、普法、推普微课及地方文化文创成果。' },
];
