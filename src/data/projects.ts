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
    status: 'conducted',
    color: { base: 'var(--c-zuji)', tint: 'var(--c-zuji-tint)', sub: 'var(--c-zuji-sub)' },
    colorSemantics: '回望、追踪、路线和历史层次',
    summary: '沿中老铁路与建水实践点位观察交通基础设施、区域联通和地方发展，以现场走访、校地座谈与青年影像记录呈现新时代云南交通变迁。',
    process: ['走进中老铁路相关站区与沿线空间，记录列车、站场和区域交通面貌。', '在建水开展校地座谈，围绕实践需求、地方发展和青年参与进行交流。', '整理现场素材，完成中老铁路主题微课、纪实视频与交通主题文创。'],
    outcomes: ['完成《一路向南·从速度到同心》中老铁路微课。', '完成七彩云南暑期实践纪实视频。', '形成《重走足迹再学习》调研报告、系列新闻稿与交通主题文创。'],
    direction: [], route: [], preparation: [],
    draft: false,
  },
  {
    slug: 'fazhi-kepu',
    name: '七彩云南·法治科普',
    shortName: '法治科普',
    stageId: '2026-summer',
    status: 'conducted',
    color: { base: 'var(--c-fazhi)', tint: 'var(--c-fazhi-tint)', sub: 'var(--c-fazhi-sub)' },
    colorSemantics: '理性、可信、公共知识',
    summary: '面向金鸡寨等基层实践点位开展通俗化法治宣传，通过集中讲解、资料发放与面对面答疑，把常用法律知识带入真实生活场景。',
    process: ['在金鸡寨设置法治科普服务点，结合展板和宣传材料开展集中讲解。', '面向村民与青少年开展互动答疑，根据不同年龄和生活场景解释法律知识。', '记录现场反馈，整理普法微课、法治主题文创与调研材料。'],
    outcomes: ['完成法治科普主题微课。', '形成《法治科普行》调研报告及系列普法新闻稿。', '完成法治主题插画与基层宣传材料。'],
    direction: [], route: [], preparation: [],
    draft: false,
  },
  {
    slug: 'yulu-tongda',
    name: '七彩云南·语路通达',
    shortName: '语路通达',
    stageId: '2026-summer',
    status: 'conducted',
    color: { base: 'var(--c-yulu)', tint: 'var(--c-yulu-tint)', sub: 'var(--c-yulu-sub)' },
    colorSemantics: '语言沟通、连接、服务和成长',
    summary: '在甸尾乡开展国家通用语言文字推广与语言使用情况调查，通过街巷走访、入户交流和共创材料连接语言服务与基层生活。',
    process: ['在甸尾乡公共空间设置推普服务点，展示语言学习与普通话推广材料。', '通过面对面访谈和入户交流了解当地语言使用情况，并提供针对性讲解。', '整理调查观察与影像素材，制作推普微课、地方文化明信片和冰箱贴文创。'],
    outcomes: ['完成《语路通达·桥连山海》推普微课。', '形成语言国情调查资料与系列推普新闻稿。', '完成普洱主题明信片、地方美食冰箱贴等系列文创。'],
    direction: [], route: [], preparation: [],
    draft: false,
  },
];

export const projectsByStage = (stageId: Project['stageId']): Project[] =>
  projects.filter((p) => p.stageId === stageId);
