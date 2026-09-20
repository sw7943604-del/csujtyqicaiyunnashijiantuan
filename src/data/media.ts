export interface MediaRecord {
  id: string;
  slotId?: string;
  stage: '2025-summer' | '2026-winter' | '2026-summer';
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
  image({ id: 'stage-summer-2026-group', slotId: 'stage.2026-summer.lead', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/stage-lead.webp', alt: '2026 年暑期实践团队在甸尾乡卫生监督点前合影', width: 1800, height: 1351, caption: '2026 年暑期实践阶段纪实。' }),
  image({ id: 'chongzou-hero', slotId: 'project.chongzou-zuji.hero', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-hero.webp', alt: '中老铁路列车停靠在站台', width: 1800, height: 1351, caption: '沿中老铁路记录云南交通发展。' }),
  image({ id: 'chongzou-train', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-train.webp', alt: '绿色涂装的中老铁路列车', width: 1800, height: 1351, caption: '中老铁路列车与站区观察。' }),
  image({ id: 'chongzou-station', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-station.webp', alt: '玉溪站站台与铁路线路', width: 1800, height: 1351, caption: '中老铁路沿线站场记录。' }),
  image({ id: 'chongzou-old-street', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-old-street.webp', alt: '团队走访建水临安老街', width: 1800, height: 1351, caption: '交通线路之外的地方生活观察。' }),
  image({ id: 'chongzou-exhibition', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-exhibition.webp', alt: '团队查看铁路与地方发展主题展板', width: 1800, height: 1351, caption: '铁路主题资料学习。' }),
  image({ id: 'chongzou-meeting', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-meeting.webp', alt: '团队在建水开展校地座谈', width: 1800, height: 1351, caption: '建水校地座谈交流。' }),
  image({ id: 'chongzou-exchange', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/chongzou-exchange.webp', alt: '团队成员在座谈会上发言', width: 1800, height: 1351, caption: '围绕地方发展与青年实践交流。' }),
  image({ id: 'chongzou-creative-transport', slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: 'media/2026-summer/creative/chongzou-transport.webp', alt: '团队设计的交通主题文创插画', width: 1440, height: 1080, caption: '中老铁路交通主题文创。' }),
  ...[1, 2, 3, 4, 5].map((number) => image({ id: `chongzou-creative-jianshui-${number}`, slotId: 'project.chongzou-zuji.gallery', stage: '2026-summer', project: 'chongzou-zuji', src: `media/2026-summer/creative/chongzou-jianshui-${number}.webp`, alt: `团队设计的建水主题文创插画 ${number}`, width: 1080, height: 1620, caption: '建水地方文化主题文创。' })),
  { id: 'chongzou-railway-course', stage: '2026-summer', project: 'chongzou-zuji', type: 'video', src: 'media/2026-summer/videos/chongzou-railway-course.mp4', poster: 'media/2026-summer/videos/chongzou-railway-course.jpg', alt: '中老铁路主题微课', width: 1280, height: 720, verified: true, caption: '一路向南·从速度到同心——中老铁路主题微课' },
  { id: 'chongzou-documentary', stage: '2026-summer', project: 'chongzou-zuji', type: 'video', src: 'media/2026-summer/videos/chongzou-documentary.mp4', poster: 'media/2026-summer/videos/chongzou-documentary.jpg', alt: '七彩云南暑期实践纪实视频', width: 960, height: 544, verified: true, caption: '七彩云南·2026 年暑期实践纪实' },
  image({ id: 'fazhi-hero', slotId: 'project.fazhi-kepu.hero', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-hero.webp', alt: '实践团队展示法治入万家主题横幅', width: 1800, height: 1351, caption: '在金鸡寨开展基层法治科普。' }),
  image({ id: 'fazhi-talk', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-talk.webp', alt: '团队成员面向村民开展普法讲解', width: 1800, height: 1351, caption: '面向基层群众开展法治知识讲解。' }),
  image({ id: 'fazhi-materials', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-materials.webp', alt: '普法宣传材料陈列在服务桌上', width: 1800, height: 1351, caption: '通俗化普法宣传材料。' }),
  image({ id: 'fazhi-children', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-children.webp', alt: '团队成员与儿童交流法治知识', width: 1800, height: 1351, caption: '以互动方式面向青少年开展科普。' }),
  image({ id: 'fazhi-service', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-service.webp', alt: '团队与村民共同展示法治宣传展板', width: 1800, height: 1351, caption: '面对面普法服务。' }),
  image({ id: 'fazhi-group', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-group.webp', alt: '团队与参与活动的村民合影', width: 1800, height: 1351, caption: '金鸡寨普法活动合影。' }),
  image({ id: 'fazhi-dialogue', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/fazhi-dialogue.webp', alt: '村民围坐交流法治问题', width: 1800, height: 1351, caption: '结合真实生活场景交流法律问题。' }),
  image({ id: 'fazhi-creative', slotId: 'project.fazhi-kepu.gallery', stage: '2026-summer', project: 'fazhi-kepu', src: 'media/2026-summer/creative/fazhi-poster.webp', alt: '团队设计的法治科普主题插画', width: 1448, height: 1086, caption: '法治科普主题文创插画。' }),
  { id: 'fazhi-course', stage: '2026-summer', project: 'fazhi-kepu', type: 'video', src: 'media/2026-summer/videos/fazhi-course.mp4', poster: 'media/2026-summer/videos/fazhi-course.jpg', alt: '法治科普主题微课', width: 960, height: 544, verified: true, caption: '普法主题微课' },
  image({ id: 'yulu-hero', slotId: 'project.yulu-tongda.hero', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-hero.webp', alt: '实践团队在甸尾乡服务点前合影', width: 1800, height: 1351, caption: '在甸尾乡开展推普与语言服务实践。' }),
  image({ id: 'yulu-interview', slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-interview.webp', alt: '团队成员在集市与居民交流', width: 1800, height: 1351, caption: '在公共空间开展语言使用情况访谈。' }),
  image({ id: 'yulu-survey', slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-survey.webp', alt: '团队成员向居民介绍语言调查内容', width: 1800, height: 1351, caption: '语言国情调查现场。' }),
  image({ id: 'yulu-materials', slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-materials.webp', alt: '居民查看推普宣传材料', width: 1800, height: 1351, caption: '推普宣传与互动讲解。' }),
  image({ id: 'yulu-youth', slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-youth.webp', alt: '团队与少年共同展示推普展板', width: 1800, height: 1351, caption: '面向青少年开展国家通用语言文字推广。' }),
  image({ id: 'yulu-senior', slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-senior.webp', alt: '团队成员与老年居民交流', width: 1800, height: 1351, caption: '倾听不同年龄居民的语言使用体验。' }),
  image({ id: 'yulu-home-visit', slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: 'media/2026-summer/yulu-home-visit.webp', alt: '团队成员入户开展语言访谈', width: 1800, height: 1351, caption: '入户交流与语言服务。' }),
  ...[[1024,1536],[1024,1536],[1080,1080],[1086,1448],[992,1586],[1111,1415],[1536,1024],[1122,1402],[1536,1024]].map(([width, height], index) => image({ id: `yulu-creative-puer-${index + 1}`, slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: `media/2026-summer/creative/yulu-puer-${index + 1}.webp`, alt: `团队设计的普洱主题明信片 ${index + 1}`, width, height, caption: '普洱地方文化主题明信片。' })),
  ...[[1437,1095],[1254,1254],[1433,1098],[1024,1536]].map(([width, height], index) => image({ id: `yulu-creative-food-${index + 1}`, slotId: 'project.yulu-tongda.gallery', stage: '2026-summer', project: 'yulu-tongda', src: `media/2026-summer/creative/yulu-food-${index + 1}.webp`, alt: `团队设计的云南美食冰箱贴 ${index + 1}`, width, height, caption: '云南美食主题冰箱贴文创。' })),
  { id: 'yulu-course', stage: '2026-summer', project: 'yulu-tongda', type: 'video', src: 'media/2026-summer/videos/yulu-course.mp4', poster: 'media/2026-summer/videos/yulu-course.jpg', alt: '语路通达推普主题微课', width: 1280, height: 720, verified: true, caption: '语路通达·桥连山海——推普主题微课' },
];

export const mediaForSlot = (slotId: string): MediaRecord[] =>
  media.filter((item) => item.verified && item.slotId === slotId);

export const projectVideos = (project: string): MediaRecord[] =>
  media.filter((item) => item.verified && item.project === project && item.type === 'video');
