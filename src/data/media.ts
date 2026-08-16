export interface MediaRecord {
  id: string;
  slotId?: string;
  stage: '2025-summer' | '2026-winter';
  project: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  width: number;
  height: number;
  verified: boolean;
  caption?: string;
  poster?: string;
}

const image = (record: Omit<MediaRecord, 'type' | 'verified'>): MediaRecord => ({ ...record, type: 'image', verified: true });

/** 仅登记已获授权、完成内容与隐私核验的媒体派生文件。 */
export const media: MediaRecord[] = [
  image({ id: 'home-bisezhai', slotId: 'home.hero', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/home-hero.webp', alt: '夕阳下的碧色寨铁路与站区建筑', width: 1800, height: 1350, caption: '2025 年暑期，团队沿云南铁路脉络开展实地调研。' }),
  image({ id: 'stage-2025-group', slotId: 'stage.2025-summer.lead', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/stage-lead.webp', alt: '实践团队在绿色列车旁合影', width: 1800, height: 1350, caption: '2025 年暑期实践阶段纪实。' }),
  image({ id: 'tiemai-hero', slotId: 'project.tiemai-zhuguang.hero', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-hero.webp', alt: '建水米轨小火车停靠在站台旁', width: 1800, height: 1350, caption: '沿米轨线路观察铁路遗产与当代文旅利用。' }),
  image({ id: 'tiemai-interview', slotId: 'project.tiemai-zhuguang.gallery', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-interview.webp', alt: '团队成员在列车车厢内开展访谈', width: 1800, height: 1013, caption: '在列车上记录乘客与铁路的真实联系。' }),
  image({ id: 'tiemai-railway', slotId: 'project.tiemai-zhuguang.gallery', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-railway.webp', alt: '团队成员在铁路沿线观察并记录', width: 1800, height: 1013, caption: '铁路沿线实地观察。' }),
  image({ id: 'tiemai-museum-1', slotId: 'project.tiemai-zhuguang.gallery', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-museum-1.webp', alt: '团队在云南铁路博物馆参观机车展陈', width: 1800, height: 1350, caption: '云南铁路博物馆调研。' }),
  image({ id: 'tiemai-museum-2', slotId: 'project.tiemai-zhuguang.gallery', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-museum-2.webp', alt: '讲解员向团队介绍铁路历史展品', width: 1800, height: 1350, caption: '通过展陈与讲解梳理云南铁路发展脉络。' }),
  image({ id: 'tiemai-green-train', slotId: 'project.tiemai-zhuguang.gallery', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-green-train.webp', alt: '实践团队在绿色列车旁合影', width: 1800, height: 1350, caption: '公益慢火车线路调研记录。' }),
  image({ id: 'tiemai-bisezhai', slotId: 'project.tiemai-zhuguang.gallery', stage: '2025-summer', project: 'tiemai-zhuguang', src: 'media/2025/tiemai-bisezhai.webp', alt: '碧色寨铁路建筑与站区环境', width: 1350, height: 1800, caption: '碧色寨铁路历史空间记录。' }),
  image({ id: 'xunhong-hero', slotId: 'project.dianzhong-xunhong.hero', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-hero.webp', alt: '团队在中共云南一大会址相关纪念地合影', width: 1800, height: 1350, caption: '在历史现场开展红色文化寻访。' }),
  image({ id: 'xunhong-site-1', slotId: 'project.dianzhong-xunhong.gallery', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-site-1.webp', alt: '团队走进查尼皮历史纪念地参观学习', width: 1800, height: 1350, caption: '查尼皮历史现场学习。' }),
  image({ id: 'xunhong-site-2', slotId: 'project.dianzhong-xunhong.gallery', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-site-2.webp', alt: '团队在纪念场馆内听取讲解', width: 1800, height: 1350, caption: '结合现场讲解梳理历史线索。' }),
  image({ id: 'xunhong-site-3', slotId: 'project.dianzhong-xunhong.gallery', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-site-3.webp', alt: '团队在历史旧址内查看展陈资料', width: 1800, height: 1350, caption: '通过文献与展陈开展资料研究。' }),
  image({ id: 'xunhong-bookstore', slotId: 'project.dianzhong-xunhong.gallery', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-bookstore.webp', alt: '团队在西南联大先锋书店参观', width: 1800, height: 1350, caption: '西南联大先锋书店寻访。' }),
  image({ id: 'xunhong-university-1', slotId: 'project.dianzhong-xunhong.gallery', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-university-1.webp', alt: '团队在西南联大蒙自分校纪念馆参观', width: 1800, height: 1350, caption: '西南联大蒙自分校纪念馆调研。' }),
  image({ id: 'xunhong-university-2', slotId: 'project.dianzhong-xunhong.gallery', stage: '2025-summer', project: 'dianzhong-xunhong', src: 'media/2025/xunhong-university-2.webp', alt: '团队在西南联大相关展陈前记录资料', width: 1800, height: 1350, caption: '记录纪念馆中的历史资料。' }),
  { id: 'microcourse-2025-1', stage: '2025-summer', project: 'dianzhong-xunhong', type: 'video', src: 'media/2025/videos/microcourse-1.mp4', poster: 'media/2025/videos/microcourse-1.jpg', alt: '2025 年暑期爱国主义教育微课第一集', width: 720, height: 1280, verified: true, caption: '爱国主义教育微课·第一集' },
  { id: 'microcourse-2025-2', stage: '2025-summer', project: 'dianzhong-xunhong', type: 'video', src: 'media/2025/videos/microcourse-2.mp4', poster: 'media/2025/videos/microcourse-2.jpg', alt: '2025 年暑期爱国主义教育微课第二集', width: 720, height: 1280, verified: true, caption: '爱国主义教育微课·第二集' },
  { id: 'microcourse-2025-3', stage: '2025-summer', project: 'dianzhong-xunhong', type: 'video', src: 'media/2025/videos/microcourse-3.mp4', poster: 'media/2025/videos/microcourse-3.jpg', alt: '2025 年暑期爱国主义教育微课第三集', width: 720, height: 1280, verified: true, caption: '爱国主义教育微课·第三集' },
  image({ id: 'stage-winter-group', slotId: 'stage.2026-winter.lead', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/stage-lead.webp', alt: '实践团队在双龙桥前合影', width: 1800, height: 1350, caption: '2026 年寒假，团队在建水开展文化传承实践。' }),
  image({ id: 'xinchuan-hero', slotId: 'project.diannan-xinchuan.hero', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/xinchuan-hero.webp', alt: '团队成员在朱德旧居开展现场访谈', width: 1800, height: 1013, caption: '围绕红色记忆与地方文化开展访谈。' }),
  image({ id: 'xinchuan-xianghui', slotId: 'project.diannan-xinchuan.gallery', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/xianghui-bridge.webp', alt: '实践团队在乡会桥前合影', width: 1800, height: 1350, caption: '乡会桥历史空间走访。' }),
  image({ id: 'xinchuan-study', slotId: 'project.diannan-xinchuan.gallery', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/jianmin-study.webp', alt: '团队在建民中学室内观看学习资料', width: 1800, height: 1350, caption: '在建民中学开展学习交流。' }),
  image({ id: 'xinchuan-memorial', slotId: 'project.diannan-xinchuan.gallery', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/jianmin-memorial.webp', alt: '团队在建民中学烈士纪念碑前合影', width: 1800, height: 1350, caption: '建民中学烈士纪念碑现场学习。' }),
  image({ id: 'xinchuan-meeting', slotId: 'project.diannan-xinchuan.gallery', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/league-meeting.webp', alt: '团队与建水县团委工作人员座谈交流', width: 1800, height: 1013, caption: '与建水县团委开展座谈。' }),
  image({ id: 'xinchuan-zhude', slotId: 'project.diannan-xinchuan.gallery', stage: '2026-winter', project: 'diannan-xinchuan', src: 'media/2026-winter/zhude-group.webp', alt: '实践团队在朱德旧居前合影', width: 1800, height: 1350, caption: '朱德旧居现场寻访。' }),
  ...[1, 2, 3, 4].map((number) => image({ id: `xinchuan-creative-${number}`, slotId: 'project.diannan-xinchuan.gallery', stage: '2026-winter', project: 'diannan-xinchuan', src: `media/2026-winter/creative-${number}.webp`, alt: `团队设计的云南文化主题水彩文创插画 ${number}`, width: 853, height: 1280, caption: '团队文创插画成果。' })),
  { id: 'video-linan', stage: '2026-winter', project: 'diannan-xinchuan', type: 'video', src: 'media/2026-winter/videos/linan-red-memory.mp4', poster: 'media/2026-winter/videos/linan-red-memory.jpg', alt: '《临安红迹·薪火相传：青春的脚步与信仰的回响》视频', width: 1280, height: 720, verified: true, caption: '临安红迹·薪火相传：青春的脚步与信仰的回响' },
  { id: 'video-jianshui', stage: '2026-winter', project: 'diannan-xinchuan', type: 'video', src: 'media/2026-winter/videos/jianshui-red-memory.mp4', poster: 'media/2026-winter/videos/jianshui-red-memory.jpg', alt: '《建水红迹，薪火永传》视频', width: 720, height: 1280, verified: true, caption: '建水红迹，薪火永传' },
  { id: 'video-microcourse', stage: '2026-winter', project: 'diannan-xinchuan', type: 'video', src: 'media/2026-winter/videos/theme-microcourse.mp4', poster: 'media/2026-winter/videos/theme-microcourse.jpg', alt: '滇南薪传主题微课视频', width: 720, height: 1280, verified: true, caption: '滇南薪传主题微课' },
];

export const mediaForSlot = (slotId: string): MediaRecord[] =>
  media.filter((item) => item.verified && item.slotId === slotId);

export const projectVideos = (project: string): MediaRecord[] =>
  media.filter((item) => item.verified && item.project === project && item.type === 'video');
