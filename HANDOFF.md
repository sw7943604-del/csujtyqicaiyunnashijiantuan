# HANDOFF — 七彩云南·铁脉同行 净室重构：后续工作交接单

> 读者：接手本项目的下一个模型/开发者。
> 本文档是唯一工作依据。读完本文件再动手。违反第 1 章边界的产出一律返工。

---

## 1. 净室边界（最高优先级）

1. **唯一内容输入**：`H:\codes\website_creat\七彩云南-kimi-step0.0` 中的
   `README-纯内容说明.md`、`media-slots.json`、`placeholders/`（4 张中性 SVG）。
   前两者已复制到本仓 `src/data/media-slots.json` 与 `public/placeholders/`，直接用副本即可。
2. **禁止读取**：任何其他"七彩云南"目录、旧站源码/截图/CSS/组件/构建产物/Git 历史/预览地址；
   本仓 `_archive/`（前次产出封存，只许存在、不许读取）；上层目录的 `DESIGN.md`。
3. **媒体纪律**：只用 `media-slots.json` 的稳定 slot ID + `public/placeholders/` 中性占位图。
   不用真实照片/视频、网络图库、AI 生成图。替换真实素材时不得改页面结构（只换 src/srcset/alt）。
4. **内容纪律**：
   - 不读取、不引用、不新建 `data.js`。
   - 2026 暑期三项目（重走足迹/法治科普/语路通达）恒为"筹备中"：禁现场纪实、采访、成果、虚构数据；
     筹备视觉必须带 caption「筹备主题视觉，非 2026 年暑期现场记录」（MediaSlot 已自动处理）。
   - 团队页：只许按阶段分组的批准姓名；禁职位/分工/简介/头像卡/联系方式；名单未到 → 真实空状态。
   - 成果页：严格分「已形成 / 正在整理 / 未来计划」，预期不得写成已取得。
5. **工程纪律**：UTF-8；中文注释；不动 `_archive/`；不装业务无关依赖（当前仅 `astro`）；
   不 commit、不 push、不部署（除非主人另行指示）。
6. **流程纪律**（来自上层 AGENTS.md）：每次前端修改后执行 design-review（`H:\codes\website_creat\skills\design-review\SKILL.md`）
   并输出修改报告；通用 UI/UX 规则参考 `H:\codes\website_creat\skills\ui-ux\SKILL.md`。

## 2. 当前状态（已完成）

- 技术栈：Astro 5（静态 MPA + ClientRouter 视图转场），base 由 `SITE_BASE` 环境变量控制（默认 `/`）。
- 已完成：脚手架、`src/styles/tokens.css` + `global.css`（深浅双态设计系统）、
  全部核心组件、**首页样板（已交付待验收）**、11 个占位页（导航不 404）。
- 首页结构：序厅(home.hero 21:9) → 展线总图(RailMap) → 展厅Ⅰ/Ⅱ(深色, stage lead 16:9 满幅出血 + 门牌)
  → 展厅Ⅲ(筹备, 纸面虚线施工视觉) → 尾声(档案/成果入口) → 页脚(关于)。
- 构建验证通过（13 页）；1440/375 两档整页截图自查通过。

### 2026-08-16 接续进度

- **批次 C 已完成，待主人验收**：`timeline.astro`、项目总览、六个 A/B 型项目详情页均已由占位页替换。
- 新增共享组件：`Breadcrumb.astro`、`EmptyState.astro`、`GalleryWall.astro`、`Lightbox.astro`、`RailMini.astro`；`ProjectPlate.astro` 新增 `full` 完整名称模式。
- 已开展详情页包含：主视觉、概述草稿标记、过程真实空态、6 格占位影像墙与可访问灯箱、成果真实空态、团队/阶段出口。
- 筹备详情页只包含：强制 caption 的筹备视觉、五个策划模块真实空态、阶段出口；无影像墙、灯箱、过程纪实或成果模块。
- 新增 `tests/batch-c.test.mjs`，5 项结构与内容纪律测试通过；`npm run build` 通过，仍为 13 页。
- 响应式复审：375/768/1024/1440 三个代表页无横向溢出；修复了已开展详情主视觉满幅出血造成的 8px 文档宽度溢出。
- 灯箱实测：打开后焦点在关闭按钮，左右键切换计数，Esc 关闭并返回触发按钮；控制台无错误或警告。
- **批次 C 已由主人验收。**
- **批次 D 已完成，待主人验收**：影像档案、成果、团队、关于四页均已由占位页替换。
- 新增 `src/data/media.ts` 空媒体登记模型；只有 `verified: true` 的登记项可渲染，当前数组按要求为空。
- 档案页已具备阶段 × 项目 × 媒介类型三组 AND 筛选、选中状态、重置、初始空态与筛选无结果态；视频使用 controls + metadata，禁止自动播放。
- 成果页严格分为「已形成成果 / 正在整理 / 未来计划或预期成果」并分别显示真实空态。
- 团队页按三个阶段呈现纯文字名录墙空态，无人物卡、个人说明或联系方式；关于页完成项目背景、授权隐私、净室重构三节说明。
- 新增 `tests/batch-d.test.mjs`；批次 C+D 共 11 项测试通过，`npm run build` 通过（13 页）。
- 375/768/1024/1440 四档复审：四个代表页均无横向溢出；档案筛选触控高度 44px；控制台无错误或警告。
- **批次 E 已完成，待主人最终验收**：新增 `check:privacy`、`check:content`、`check:links`、`test`、`verify` 命令。
- `npm run verify` 通过：15 项测试、13 页构建、隐私检查、内容纪律与内部链接检查均为零失败。
- `SITE_BASE=/qicai/` 子路径构建通过，导航与资源 URL 均带正确前缀；随后已恢复默认根路径构建。
- 全站 13 页 × 375/768/1024/1440 共 52 组复审无横向溢出；终审修复首页阶段媒体满幅出血造成的 8px 文档宽度溢出。
- 移动抽屉实测：打开后焦点进入关闭按钮，Esc 关闭后焦点返回菜单；灯箱左右键、Esc 与焦点返回再次通过；reduced-motion 规则已加载。
- 对比度实测：正文 14.23–14.94:1；六项目 tint 对 `--ink` 为 6.29–7.87:1；控制台无错误或警告。

## 3. 运行方式

```powershell
cd H:\codes\website_creat\七彩云南-kimi-rebuild
npm install        # 首次
npm run dev        # 开发 http://localhost:4321
npm run build      # 产物到 dist/
npm run preview    # 预览 dist，http://localhost:4321
# 子路径部署：$env:SITE_BASE="/子路径/"; npm run build
```

## 4. 已锁定的设计决策（不得推翻，可微调）

1. 概念：「铁脉展线」——网站是一场沿铁路的影像展；阶段=展厅、项目=展间；筹备=施工中的展厅。
2. 深浅双态：媒体章节用 `--ink` 展厅墨，阅读章节用 `--paper` 档案纸。
3. 签名装置：展线（首页 RailMap 总图 / 桌面 RailSpine 脊柱 / 移动顶部进度条 / 详情页 RailMini）。
4. 媒体呈现：一律走 `MediaSlot.astro`（定比装裱框+展签）；未注册 slot ID 会构建报错——这是特性，不要绕过。
5. 六项目色归属固定（tokens.css 顶部），主色 Hex 不动；深底小字用对应 `*-tint`。
6. 状态双编码：StatusBadge 实心点=已开展 / 虚线空心点=筹备中 + 永远有文字。
7. 动效：transform/opacity only；`.reveal` 由 `html.js` 门控（无 JS 内容恒可见）；
   `prefers-reduced-motion` 下全部降级（global.css 底部已有范式）。
8. 文案：真实克制；凡未经项目组确认的句子必须在数据中 `draft: true` 并在页面带 `.draft-mark` 标注。

## 5. 设计系统速查

- 令牌全在 `src/styles/tokens.css`：底色/六色/字阶/间距(4-8 节奏)/动效时长。组件内禁写裸 hex。
- 字体：`--font-display`（宋，标题）、`--font-body`（黑，正文）、`--font-label`（等宽，展签/编号/状态）。
- 常用类：`tone-ink/tone-paper`、`container`、`reading`、`eyebrow`、`section-head`、`draft-mark`、`reveal`。
- 数据：`src/data/site.ts`（导航六项+页脚关于）、`stages.ts`（三阶段）、`projects.ts`（六项目，含颜色变量与摘要）、
  `media-slots.json`（插槽注册表）。路径一律走 `src/utils/paths.ts` 的 `href()`（子路径兼容）。

---

## 6. 批次 C：三类页面（核心工作量）

> 状态：**已完成，待主人验收。** 下列条目保留为实现与验收依据。

### C1 实践脉络 `src/pages/timeline.astro`
- 目标（README 4.2）：表达三阶段的时间关系、状态、项目归属；不得退化成新闻列表。
- 做法：纵向展线叙事页。左侧/中央一条纵向展线（复用 RailMap 的视觉语言：圆=展厅、方=展台、六色），
  自上而下 Ⅰ→Ⅱ→Ⅲ；每阶段块含：展厅序号、阶段名、StatusBadge、阶段概述（取 `stages.ts`，带 draft 标）、
  其下项目列表（名+状态+链接到详情）、「返回首页对应展厅」锚点互链。
- 筹备阶段块用虚线/线框视觉（参照 `.plate--prep` 与 `.chapter--prep` 既有样式）。
- 本页**不新增媒体插槽**（图+文即可；如想复用 stage lead 图，需主人确认，因为一图两页涉及素材登记）。

### C2 项目总览 `src/pages/projects/index.astro`
- 目标（README 4.3）：按阶段分三节，每项目入口含：完整名称、所属阶段、状态、一句准确摘要、识别色、链接。
  **禁止六张平级卡片**。
- 做法：三节（每节=阶段头：展厅序号+阶段名+状态+一条展线段）；阶段内用既有 `ProjectPlate`，
  但显示**完整名称**（`project.name`，plate 当前用 shortName——给 ProjectPlate 加 `full?: boolean` 属性切换）。
- 每节头部可放该阶段在展线上的局部线段（小 SVG），强化归属。

### C3 项目详情 `src/pages/projects/[slug].astro`（A/B 双型，按 project.status 分流）
- 公共骨架：面包屑（阶段 › 项目，链接回 `timeline`/`projects` 对应锚点）+ 门牌区（项目全名、识别色条、
  StatusBadge、所属阶段链接）+ 页尾 RailMini（三站六台缩略线，高亮当前项目）+ 出口链接
  （已开展：本阶段团队名录 `team/#stage-<id>` + 返回阶段；筹备：返回阶段）。
- **A 型·已开展**（铁脉逐光/滇中寻红/滇南薪传，README 4.4 模块）：
  1. 主视觉墙：`MediaSlot id="project.<slug>.hero"`（16:9 满幅出血，沿用 lead 出血样式）
  2. 项目概述（纸面阅读区 `reading`；无正式文案 → 显示既有 draft 摘要）
  3. 实践过程（文字章节；无内容 → 诚实空状态「过程记录整理中」）
  4. 主题影像墙：新建 `GalleryWall.astro`，读 `project.<slug>.gallery`（4:3，recommendedCount 6–14）。
     占位期渲染 6 张 `editorial-4x3.svg` 灰框（每张展签标「待插入真实影像 i/6」）以验证网格+灯箱；
     真实媒体登记后以数据驱动替换。
  5. 已形成成果（列表；无数据 → 空状态）
- **B 型·筹备中**（重走足迹/法治科普/语路通达，README 4.5 模块）：
  全页线框视觉；醒目「筹备中」缎带；`MediaSlot id="project.<slug>.preparation"`（自动带强制 caption）；
  模块：拟开展方向 / 主题问题（问句墙）/ 初步路线与工作框架 / 准备事项清单 / 风险与待确认——
  内容未到一律诚实空状态「待项目组确认」。**无影像墙、无灯箱、无成果模块。**
- 新增组件建议：`Breadcrumb.astro`、`RailMini.astro`、`GalleryWall.astro`、`Lightbox.astro`、
  `EmptyState.astro`（统一的「待确认/整理中」空态）。

### C4 灯箱 `Lightbox.astro`（C3 与 D1 共用）
- 触发：带 `data-lightbox` 的图；同组可翻页。
- 行为：焦点陷阱、Esc 关闭、←/→ 切换、关闭后焦点返回触发元素、`aria-modal`、遮罩点击关闭。
- 样式：深色遮罩 + 居中图 + mono 计数（如 3/6）+ 关闭/前后按钮（≥44px 触控区）。
- 动效：淡入+轻微缩放，reduced-motion 下瞬时。

## 7. 批次 D：四个页面

> 状态：**已完成，待主人验收。** 下列条目保留为实现与验收依据。

### D1 影像档案 `src/pages/archive.astro`（README 4.6，要求最多）
- 数据源：新建 `src/data/media.ts` 导出空数组（媒体登记表，字段：id/stage/project/type/src/alt/宽高等）。
  **当前恒为空 → 页面初始空状态**（"档案室待媒体登记后开放"），这是 README 明确要求，不是缺陷。
- 筛选 UI 先行：阶段 × 项目 × 媒介类型 三组筛选（`button[aria-pressed]` 或 checkbox 组），
  AND 逻辑、一键重置、筛选无结果状态；类型含「图片/视频」（视频为预留类型，当前恒空）。
- 有数据时：4:3 缩略图网格（`archive.image.thumbnail` 模板槽）+ C4 灯箱（仅当前可见集可翻页）。
- 视频规则：不自动播放；未核验不公开（在数据模型里加 `verified: boolean`，false 不渲染）。

### D2 成果 `src/pages/outcomes.astro`
- 三态分区：已形成成果 / 正在整理 / 未来计划或预期成果（README 4.7）。
- 当前无数据 → 每区空状态；严禁虚构获奖、报道、人数、社会影响。

### D3 团队 `src/pages/team.astro`
- 按 2025 暑期 / 2026 寒假 / 2026 暑期三组的**名录墙**（纯文字姓名，等距排版，禁卡片化）。
- 名单未到 → 每组空状态「名单待确认后公布」。
- `team.stage.group-photo` 槽：默认不渲染；仅当媒体登记明确标注为对应阶段组照时才出现。

### D4 关于 `src/pages/about.astro`
- 项目背景（README §1 事实）、素材授权与隐私说明（README §7）、净室重构说明。
- 页脚已有入口；保持克制，一页纸长度。

## 8. 批次 E：质量与交付

> 状态：**已完成，待主人最终验收。** 下列条目保留为实现与验收依据。

1. **校验脚本**（放 `scripts/`，Node 无依赖，接入 package.json scripts）：
   - `check:privacy`：扫 `src/` 与 `dist/`，正则命中手机号/邮箱/18 位身份证/学号模式即退出码 1。
   - `check:content`：校验数据纪律——筹备项目无成果字段、强制 caption 存在、六色归属未被交换、
     媒体引用全部命中 `media-slots.json` 注册表。
   - `check:links`：解析 `dist/` HTML 的内部 href/src，验证文件存在。
   - `verify`：`build` + 上述三项串联。
2. **四档视口实拍复审**（375/768/1024/1440）：CDP 截图法——
   启动 `chrome --headless=new --remote-debugging-port=9222`，用 Node 内置 WebSocket 连
   `http://localhost:9222/json`，`Emulation.setDeviceMetricsOverride`（高 900，<500 设 mobile:true）、
   模拟 `prefers-reduced-motion: reduce`（让 `.reveal` 立即可见），
   `Page.captureScreenshot { captureBeyondViewport: true }`。
   参考实现曾在 `C:\Users\17296\AppData\Local\Temp\opencode\shot.mjs`（若已被清理则按上述重写，约 60 行）。
   注意：URL 锚点截图在此环境会出空白页，须用整页截图后裁剪（PowerShell System.Drawing 每进程只能稳切一张，
   逐张调用 `crop.ps1` 模式）。
3. **打磨**：抽屉开合过渡、RailMini 当前态、对比度抽测（tint 色在 `--ink` 上 ≥3:1，正文 ≥4.5:1）、
   键盘路径走查（Tab 顺序、抽屉/灯箱焦点）。
4. **终审**：按 design-review SKILL 输出最终报告；更新本 HANDOFF（把已完成项勾掉）。

## 9. 每批次完成后的强制动作

1. `npm run build` 必须通过；2. 四档截图自查关键页；3. 输出 Design Review Report
（范围/依据/结论/发现表/已修复/保留风险/后续建议）；4. 向主人汇报并等确认再进下一批次。

## 10. 总验收清单

- [x] 主导航六项 + 页脚关于；全站 13+ 页面无 404
- [x] 首页五段叙事完整；三阶段六项目层级处处可见（展线/面包屑/RailMini）
- [x] 六详情页 A/B 型结构分流正确；筹备页无纪实模块、强制 caption 在
- [x] 档案页：初始空态、AND 筛选、重置、无结果态、灯箱（Esc/左右/焦点返回）、视频不自动播放
- [x] 成果三态；团队三阶段名录墙空态；关于一页
- [x] 媒体 100% 走 MediaSlot/注册表；无站外/AI/真实媒体；无 data.js
- [x] 无横向溢出（375/768/1024/1440）；reduced-motion 可用；键盘可达；焦点可见
- [x] `npm run verify` 全绿；支持 SITE_BASE 子路径构建

## 11. 待主人确认项（接手者不得编造）

1. 首页样板是否验收通过；2. 9 处 draft 文案的正式版（总述×1、阶段概述×3、项目摘要×6）；
3. 六色 tint 微调值确认；4. 中文字体 CDN vs 自托管；5. 团队名单/成果条目/筹备项目三要素内容；
6. 真实媒体登记信息（届时才接入媒体，接入前档案页保持空态）。

## 12. 净室执行声明（上一任留）

本仓所有代码为净室原创：未读取旧站任何材料、未读取 `_archive/`、未读取 `DESIGN.md`；
仅使用了 Step 0.0 允许的三项输入与通用设计规则库。请接手者继续保持。

## 13. 2026-08-16 授权素材接入更新（覆盖第 7、10、11 节的旧空状态说明）

- 用户明确授权读取并公开使用 `D:\Download` 与指定社会实践材料目录中的非敏感内容、照片、视频及团队姓名。
- 严格排除安全承诺、家长同意、签名、证件、电话、邮箱、票据等敏感材料；`npm run check:privacy` 已通过。
- 已将 27 张人工选定照片/文创插画生成网页专用 WebP 派生文件，原素材未改动；登记在 `src/data/media.ts`。
- 首页、2025 暑期、2026 寒假及三个已开展项目详情已接入真实影像；三组影像墙和档案筛选可用。
- `src/data/projects.ts` 已加入已开展项目的过程/成果和 2026 暑期项目的方向/路线/准备事项；暑期项目仍为“筹备中”，无现场媒体、无已形成成果。
- `src/data/team.ts` 仅登记三个阶段的公开姓名，不登记其他个人信息；团队页已呈现纯姓名墙。
- 成果页已呈现核验后的已形成成果，并将筹备方向单列为未来计划。
- 三段授权视频原文件约 360 MB、472 MB、1.2 GB，本轮未直接发布；后续需先生成网页码率版本，再登记到 `media.ts`。
- 新增 `scripts/prepare-authorized-media.py`，用于从明确选择的源文件可重复生成 WebP；新增授权内容测试。
- 最新 `npm run verify`：19/19 测试、13 页构建、隐私/内容/链接检查全部通过。
- 设计复审：用 Edge 无头模式抽查首页、已开展项目、筹备项目、团队、档案页的 1440×1000 与 390×844 截图；真实主图、移动端裁切、姓名墙与筹备占位标识未发现阻断问题。

## 14. 访客统计、图片方向与视频待办

- 页脚已接入不蒜子 3.6.9 的全站 UV/PV：展示“累计访客”和“累计访问”；服务加载失败、返回非数字错误或本地域名不可计数时统一降级为“暂不可用”。
- 页脚已注明统计由第三方匿名计数服务提供。该方案依赖 `cdn.busuanzi.cc`；若未来需要完全自主掌控数据，应在明确部署平台后改为自建 API + 数据库。
- `creative-2.webp`、`creative-3.webp`、`creative-4.webp` 已在派生流程中逆时针旋转 90°，尺寸更新为 853×1280；原始 PNG 未修改。
- `GalleryWall.astro` 不再把全部图片强裁成 4:3 横图，而是按原始宽高比展示；长页截图确认三幅竖向文创插画方向及三列排版正常。
- 视频仍是未完成项：原 MP4 可以播放，但文件约 360 MB、472 MB、1.2 GB。后续应保留 MP4 容器，转为 H.264/AAC 网页版本、生成封面，再登记进 `media.ts`；详情页与档案页均禁止自动播放。
- 本轮新增 `tests/visitor-and-orientation.test.mjs`；最新完整验证为 22/22 测试通过，13 页构建及隐私/内容/链接检查通过。

## 15. 2026-08-16 视频、文字成果与团队合影更新（覆盖第 13、14 节的视频待办）

- 视频待办已完成：使用 `H:\tools\ffmpeg\ffmpeg-9.0.1-essentials_build\bin` 转出三段 H.264/AAC 网页 MP4，并开启 faststart。
  - `linan-red-memory.mp4`：1280×720，约 86.1 MB，时长 306.55 秒。
  - `jianshui-red-memory.mp4`：720×1280，约 26.6 MB，时长 178.24 秒。
  - `theme-microcourse.mp4`：720×1280，约 73.7 MB，时长 453.21 秒。
- 三段视频均生成 JPG 封面，登记于 `src/data/media.ts`；“滇南薪传”详情页新增视频展映区，档案页可按视频类型筛选。全部视频使用 controls、playsinline、preload=metadata，禁止自动播放。
- 新增 `scripts/prepare-authorized-videos.ps1`，可从获授权原片重复生成网页视频与封面，原片不覆盖。
- `creative-1.webp` 也已逆时针旋转 90°；四幅文创插画现均为 853×1280 的正确竖向版本。
- 新增 `src/data/text-outcomes.ts`；成果页增加“文字成果”板块，单列调研报告、新闻稿、建议材料和成果登记，仅展示公开摘要，不直接暴露内部源文件。
- 团队页在 2025 暑期、2026 寒假姓名墙下方展示对应阶段授权合影；2026 暑期尚未开展，明确显示“尚无现场合影”。
- 最新 `npm run verify`：25/25 测试通过，13 页构建成功，隐私、内容与内部链接检查全部通过。

## 16. 影像墙与档案媒体溢出修复

- 根因：`GalleryWall` 与档案页使用 `repeat(..., 1fr)`，图片/视频的固有最小内容宽度会把 Grid 轨道撑出容器；此前仅修正图片方向与高度，没有解除 Grid 子项默认的 `min-width:auto`。
- 两处网格轨道均改为 `minmax(0, 1fr)`；断点下的 2 列和 1 列规则同步处理。
- 网格直接子项加入 `width:100%`、`min-width:0`、`max-width:100%`；图片与视频加入 `max-width:100%` 和自适应高度。
- 档案页不再把所有媒体强裁成 4:3，图片按完整原始比例展示；视频使用 contain 且限制最大视口高度。
- 影像墙展签加入 `overflow-wrap:anywhere`，避免长标题撑宽卡片。
- 新增 `tests/media-overflow.test.mjs` 两项回归测试；最新 `npm run verify` 为 27/27 测试通过，13 页构建及隐私/内容/链接检查通过。
- 本轮无头 Edge 未能产出复审截图，未将截图列为通过证据；需在下一次可用的浏览器会话中补做 390/768/1440 三档实拍确认。

## 17. 2026-08-16 最终建站收尾（覆盖前文所有“待验收 / 占位 / 草稿 / 视频待办”说明）

- 网站建立工作已完成；前文批次 C–E 与第 13–16 节中描述的旧空状态、待验收和视频待办仅保留为历史记录，以本节为最终状态。
- 首页 `RailMap.astro` 的阶段状态文字区域加入断线净空，连接线不再穿过“已开展 / 筹备中”文字；对应回归测试已加入 `tests/finalization.test.mjs`。
- 2025 年暑期三集爱国主义教育微课已从获授权源文件转为 H.264/AAC、720×1280、`yuv420p`、faststart 网页 MP4，并生成 JPG 封面：
  - `microcourse-1.mp4`：约 40.5 MB，时长 246.20 秒；
  - `microcourse-2.mp4`：约 37.5 MB，时长 188.31 秒；
  - `microcourse-3.mp4`：约 34.5 MB，时长 212.67 秒。
- 三集视频登记于 `src/data/media.ts`，归入 2025 年暑期“滇中寻红”项目；详情页与影像档案均可展示和播放，仍保持禁止自动播放。
- `scripts/prepare-authorized-videos.ps1` 已扩展为同时支持 2025 暑期三集微课与 2026 寒假三段视频的可重复派生。
- 已清理所有正式页面可见的“净室重构”“样板”“草稿 / 待确认 / 待插入”旧口径；关于页改为面向访客的“内容说明”，页脚英文标识改为 `PRACTICE ARCHIVE`。筹备项目中如实说明尚未开展、正在筹备的内容不属于旧草稿口径，继续保留。
- 最终验证：`npm run verify` 全绿——30/30 测试通过，13 个静态页面构建成功，隐私、内容纪律与内部链接检查均通过；三集视频的编码、方向、像素格式与时长均经 `ffprobe` 核验。
- `data.js` 未修改；授权源文件未覆盖，站内均使用网页派生副本。

## 18. 影像档案项目化分组

- 影像档案由原先的平铺网格改为“项目 → 媒介 Part → 具体媒体”三级结构。
- 每个有已核验媒体的项目先显示完整项目题目与对应项目识别色，再按“微课视频”“纪实照片”分区；没有某类素材时不渲染空分区。
- 阶段、项目、媒介类型三组筛选继续采用 AND 逻辑；筛选后没有可见媒体的 Part 和项目会自动隐藏。
- 浏览器实测“视频”筛选仅显示“滇中寻红”“滇南薪传”及各自微课区，共 6 条视频；移动端页面 `scrollWidth === clientWidth`，无横向溢出，控制台无警告或错误。
- 新增 `tests/archive-grouping.test.mjs`；最新 `npm run verify` 为 33/33 测试通过，13 页构建及隐私、内容、链接检查全部通过。

## 19. GitHub Pages 部署

- 公开仓库：`https://github.com/sw7943604-del/csujtyqicaiyunnashijiantuan`
- 线上站点：`https://sw7943604-del.github.io/csujtyqicaiyunnashijiantuan/`
- `.github/workflows/deploy-pages.yml` 在 `main` 分支推送后自动使用 `SITE_BASE=/csujtyqicaiyunnashijiantuan/` 验证、构建并部署 `dist`。
- Pages 发布源为 GitHub Actions，HTTPS 已启用；线上首页、子路径导航、主图和样式资源均已实测加载成功，控制台无错误。
- `scripts/check-links.mjs` 已支持 `SITE_BASE` 仓库子路径映射；最新子路径完整验证为 34/34 测试、13 页构建、隐私/内容/链接检查全部通过。
- `csujtyqicaiyunnashijiantuan` 当前是仓库名，不是独立域名。若后续购买或已有域名，需要在仓库 Pages 设置中填写完整域名，并在域名服务商处配置 DNS。

## 20. 访客统计更换为 Vercount

- 不蒜子对 `sw7943604-del.github.io` 返回“域名过长，已被禁用”，因此旧统计始终降级为“暂不可用”；这不是 GitHub Pages 或页面元素故障。
- 已用 Vercount 替换不蒜子：页脚继续显示“累计访客 / 累计访问”，加载失败仍降级为“暂不可用”。
- Vercount 脚本位于页脚计数节点之后，并带 `data-astro-rerun`，确保 Astro 客户端页面转场后重新绑定并记录新页面访问。
- 当前 GitHub Pages URL 已直接请求 Vercount API 验证成功，返回数值型 `site_uv/site_pv/page_pv`，没有域名长度限制。
- 新服务从零开始累计，旧服务未成功建立的数字无法迁移；最新仓库子路径完整验证为 34/34 测试通过。
