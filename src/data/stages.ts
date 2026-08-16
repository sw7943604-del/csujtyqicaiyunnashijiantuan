/**
 * 三个实践阶段的事实数据。
 * 阶段概述依据获授权的实践材料与申报材料整理。
 */

export type StageStatus = 'conducted' | 'preparing';

export interface Stage {
  /** 阶段 ID，与 media-slots.json 中的 stage 字段一致 */
  id: '2025-summer' | '2026-winter' | '2026-summer';
  /** 展厅序号（罗马数字，表达真实先后顺序） */
  numeral: 'Ⅰ' | 'Ⅱ' | 'Ⅲ';
  /** 阶段名称 */
  name: string;
  /** 阶段状态 */
  status: StageStatus;
  /** 阶段引导影像插槽 ID */
  leadSlot: string;
  /** 阶段概述（草稿，待项目组确认） */
  summary: string;
  /** 概述是否为待确认草稿 */
  draft: boolean;
}

export const stages: Stage[] = [
  {
    id: '2025-summer',
    numeral: 'Ⅰ',
    name: '2025 年暑期实践',
    status: 'conducted',
    leadSlot: 'stage.2025-summer.lead',
    summary:
      '“铁脉逐光”沿云南铁路观察交通遗产与时代发展，“滇中寻红”走进红色旧址与西南联大相关场馆；本阶段的过程影像与已形成成果现已按授权范围呈现。',
    draft: false,
  },
  {
    id: '2026-winter',
    numeral: 'Ⅱ',
    name: '2026 年寒假实践',
    status: 'conducted',
    leadSlot: 'stage.2026-winter.lead',
    summary:
      '“滇南薪传”在蒙自、建水开展历史现场学习、访谈与地方交流，并形成主题微课、文创插画和实践报道。',
    draft: false,
  },
  {
    id: '2026-summer',
    numeral: 'Ⅲ',
    name: '2026 年暑期实践',
    status: 'preparing',
    leadSlot: 'stage.2026-summer.preparation',
    summary:
      '本阶段包含“重走足迹”“法治科普”“语路通达”三个项目，目前处于筹备阶段，仅呈现策划方向、主题问题、路线框架与准备事项。',
    draft: false,
  },
];

export const statusLabel: Record<StageStatus, string> = {
  conducted: '已开展',
  preparing: '筹备中',
};
