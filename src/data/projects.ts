/**
 * 六个实践项目的事实数据。
 * 颜色归属固定；正文依据获授权的申报书、计划、实践报告与成果登记表整理。
 */
import type { StageStatus } from './stages';

export interface Project {
  /** 与 media-slots.json 中 project 字段一致 */
  slug: string;
  /** 项目全名 */
  name: string;
  /** 去掉“七彩云南·”前缀的短名（用于线路图等紧凑场景） */
  shortName: string;
  /** 所属阶段 ID */
  stageId: '2025-summer' | '2026-winter' | '2026-summer';
  status: StageStatus;
  /** 识别色 CSS 变量三元组：主色 / 深底提亮 tint / 辅色 */
  color: { base: string; tint: string; sub: string };
  /** 项目色语义（源自内容说明） */
  colorSemantics: string;
  summary: string;
  process: string[];
  outcomes: string[];
  direction: string[];
  route: string[];
  preparation: string[];
  draft: boolean;
}

export const projects: Project[] = [
  {
    slug: 'tiemai-zhuguang',
    name: '七彩云南·铁脉逐光',
    shortName: '铁脉逐光',
    stageId: '2025-summer',
    status: 'conducted',
    color: { base: 'var(--c-tiemai)', tint: 'var(--c-tiemai-tint)', sub: 'var(--c-tiemai-sub)' },
    colorSemantics: '铁路、工程、秩序、时代脉络',
    summary: '沿云南铁路脉络追踪交通遗产、公共服务与区域发展，在历史线路与当代铁路之间建立可阅读的时代坐标。',
    process: ['走访云南铁路博物馆、碧色寨与建水米轨线路，结合展陈、讲解与现场观察梳理铁路历史。', '乘坐公益慢火车并开展车厢访谈，记录铁路与沿线居民出行、生活之间的联系。', '前往中老铁路磨憨站等点位，观察云南铁路从历史米轨到国际通道的延展。'],
    outcomes: ['形成铁路主题系列微课与新闻稿件。', '完成纪录片《从时光重叠中见云南发展》。', '围绕铁路文化开展文创内容整理。'],
    direction: [], route: [], preparation: [],
    draft: false,
  },
  {
    slug: 'dianzhong-xunhong',
    name: '七彩云南·滇中寻红',
    shortName: '滇中寻红',
    stageId: '2025-summer',
    status: 'conducted',
    color: { base: 'var(--c-xunhong)', tint: 'var(--c-xunhong-tint)', sub: 'var(--c-xunhong-sub)' },
    colorSemantics: '红色记忆、历史寻访、档案温度',
    summary: '以历史现场、纪念场馆与文献资料为线索，寻访云南红色记忆及西南联大在滇办学留下的精神印记。',
    process: ['走访查尼皮中共云南一大会址，通过现场讲解、访谈和资料查阅追溯历史脉络。', '参访西南联大蒙自分校纪念馆与先锋书店，记录教育救国与文化传承的空间线索。', '在碧色寨等历史空间开展影像记录，将铁路遗产与红色文化线索交叉整理。'],
    outcomes: ['形成主题微课《滇中红脉，红色云岭》。', '完成实践新闻稿件与历史资料整理。', '基于走访形成红色文化传播优化建议。'],
    direction: [], route: [], preparation: [],
    draft: false,
  },
  {
    slug: 'diannan-xinchuan',
    name: '七彩云南·滇南薪传',
    shortName: '滇南薪传',
    stageId: '2026-winter',
    status: 'conducted',
    color: { base: 'var(--c-xinchuan)', tint: 'var(--c-xinchuan-tint)', sub: 'var(--c-xinchuan-sub)' },
    colorSemantics: '传承、口述、文化延续',
    summary: '以“奔腾红河·共铸芳华”为主题，在蒙自、建水走访红色文化与历史建筑现场，连接青年实践、地方记忆和文化传播。',
    process: ['在建民中学开展现场学习，在烈士纪念碑前回望地方红色记忆。', '走访双龙桥、乡会桥、朝阳楼与朱德旧居，并通过访谈和影像记录整理历史文化线索。', '与建水县团委座谈，交流地方文化传播与青年社会实践。'],
    outcomes: ['完成主题微课视频和实践影像记录。', '形成四幅云南文化主题文创插画。', '实践动态获得地方、学校及学院媒体报道。'],
    direction: [], route: [], preparation: [],
    draft: false,
  },
  {
    slug: 'chongzou-zuji',
    name: '七彩云南·重走足迹',
    shortName: '重走足迹',
    stageId: '2026-summer',
    status: 'preparing',
    color: { base: 'var(--c-zuji)', tint: 'var(--c-zuji-tint)', sub: 'var(--c-zuji-sub)' },
    colorSemantics: '回望、追踪、路线和历史层次',
    summary: '筹备中：计划重走习近平总书记考察云南相关足迹，将现场学习、基层调研与青年阐释相结合。',
    process: [], outcomes: [],
    direction: ['围绕考察足迹与地方发展变化开展现场学习。', '以青年视角整理可传播的学习材料与实践记录。'],
    route: ['具体点位与行程以最终对接结果为准。', '路线安排将同步评估交通、安全和接待条件。'],
    preparation: ['完成点位对接、资料预研和采访提纲。', '明确影像授权、应急预案与每日复盘机制。'],
    draft: false,
  },
  {
    slug: 'fazhi-kepu',
    name: '七彩云南·法治科普',
    shortName: '法治科普',
    stageId: '2026-summer',
    status: 'preparing',
    color: { base: 'var(--c-fazhi)', tint: 'var(--c-fazhi-tint)', sub: 'var(--c-fazhi-sub)' },
    colorSemantics: '理性、可信、公共知识',
    summary: '筹备中：计划面向基层实际需求开展法治科普，把通用法律知识转化为清晰、易用的公共传播内容。',
    process: [], outcomes: [],
    direction: ['围绕基层常见法律议题开展需求调研与普法宣传。', '探索普通话推广与法治科普相结合的表达方式。'],
    route: ['根据基层单位和服务对象需求确定宣讲点位。', '在正式开展前完成内容审核与场景适配。'],
    preparation: ['整理权威法律依据并设计通俗化材料。', '准备互动问答、反馈表与风险边界说明。'],
    draft: false,
  },
  {
    slug: 'yulu-tongda',
    name: '七彩云南·语路通达',
    shortName: '语路通达',
    stageId: '2026-summer',
    status: 'preparing',
    color: { base: 'var(--c-yulu)', tint: 'var(--c-yulu-tint)', sub: 'var(--c-yulu-sub)' },
    colorSemantics: '语言沟通、连接、服务和成长',
    summary: '筹备中：计划以推广国家通用语言文字为主线，结合语言国情调查、普法宣传与数字化内容共创。',
    process: [], outcomes: [],
    direction: ['采用“推普+语言国情调查”“推普+普法宣传”“推普+数智赋能”的融合路径。', '通过共同创作增强语言服务内容的在地性和可持续性。'],
    route: ['拟按“融入—深耕—共创—延续”四个阶段推进。', '具体服务点位与十日安排以最终获批和当地对接为准。'],
    preparation: ['完善语言调查工具、微课脚本与双语普法材料。', '开展团队培训，确认教学、拍摄、数据和安全规范。'],
    draft: false,
  },
];

export const projectsByStage = (stageId: Project['stageId']): Project[] =>
  projects.filter((p) => p.stageId === stageId);
