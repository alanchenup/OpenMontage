// Backlot chrome strings. Project titles, narration, and pipeline ids stay as data.

const LANG_KEY = "backlot.lang";

const STAGE_ZH = {
  research: "调研",
  proposal: "提案",
  idea: "构思",
  script: "剧本",
  scene_plan: "分镜",
  assets: "素材",
  edit: "剪辑",
  compose: "合成",
  publish: "发布",
  character_design: "角色设计",
};

const ARTIFACT_ZH = {
  research_brief: "调研简报",
  proposal_packet: "制作提案",
  brief: "创意简报",
  script: "剧本",
  scene_plan: "分镜计划",
  asset_manifest: "素材清单",
  edit_decisions: "剪辑决定",
  render_report: "渲染报告",
  publish_log: "发布记录",
  final_review: "终审",
  decision_log: "决策记录",
  character_design: "角色设计",
};

const STATUS_ZH = {
  completed: "已完成",
  in_progress: "进行中",
  awaiting_human: "待确认",
  failed: "失败",
  pending: "未开始",
  unknown: "未知",
};

const STRINGS = {
  en: {
    library: "Library",
    library_title: "Backlot — Library",
    empty_projects: "No projects yet — run a production and it will appear here.",
    n_projects: ({ n }) => `${n} projects`,
    n_live: ({ n }) => `${n} LIVE`,
    idle: "IDLE",
    idle_ago: "IDLE · {ago}",
    just_now: "just now",
    minutes_ago: ({ n }) => `${n}m ago`,
    hours_ago: ({ n }) => `${n}h ago`,
    days_ago: ({ n }) => `${n}d ago`,
    no_media: "NO MEDIA YET",
    awaiting_you: "◈ AWAITING YOU",
    live: "LIVE",
    live_stage: "LIVE · {stage}",
    unknown: "unknown",
    n_scenes: ({ n }) => `${n} scenes`,
    n_renders: ({ n }) => `${n} renders`,
    theme_to_light: "Switch to light theme",
    theme_to_dark: "Switch to dark theme",
    lang_toggle_label: "中文",
    switch_lang: "使用中文",
    pipeline_chip: "{name} pipeline",
    scenes_duration: "{n} scenes · {dur}",
    stalled: "⚠ STALLED?",
    generation_spend: "generation spend",
    awaiting_approval: "awaiting your approval\nreply in chat to continue",
    stalled_minutes: "stalled? no activity for {n}m\nask the agent for status",
    scenes_done: ({ n }) => `${n} scene${Number(n) === 1 ? "" : "s"} done`,
    in_progress: "in progress",
    failed: "failed",
    approved_suffix: " · approved",
    undeclared_title: "\"{name}\" ran but isn't declared by this pipeline's manifest",
    unlisted: "unlisted",
    n_critical: ({ n }) => `${n} critical`,
    n_suggestions: ({ n }) => `${n} suggestion${Number(n) === 1 ? "" : "s"}`,
    n_nitpicks: ({ n }) => `${n} nitpicks`,
    review_focus: "review focus {v}",
    stage_pending: "This stage hasn't run yet.",
    no_artifact: "No canonical artifact found on disk for this stage.",
    close: "CLOSE ✕",
    gate_skipped: "⚑ GATE SKIPPED",
    section_fallback: "Section",
    more_sections: "… {n} more sections",
    approved: "APPROVED",
    pending_approval: "PENDING APPROVAL",
    drafting: "DRAFTING",
    click_expand_script: "Click to expand full script",
    script_meta: "script · {dur} · {n} sections",
    expand_script: "⤢ EXPAND SCRIPT",
    item_n: "Item {n}",
    selected: "SELECTED",
    n_items: ({ n }) => `${n} item${Number(n) === 1 ? "" : "s"}`,
    why_concept: "WHY THIS CONCEPT  ",
    fact_platform: "platform",
    fact_duration: "duration",
    fact_tone: "tone",
    fact_style: "style",
    fact_runtime: "runtime",
    fact_pipeline: "pipeline",
    fact_estimated_cost: "estimated cost",
    fact_concepts: "concepts",
    fact_sources: "sources",
    fact_data_points: "data points",
    fact_angles: "angles",
    fact_sections: "sections",
    fact_scenes: "scenes",
    fact_assets: "assets",
    fact_types: "types",
    fact_generation_cost: "generation cost",
    fact_cuts: "cuts",
    fact_outputs: "outputs",
    fact_destinations: "destinations",
    guidance_script: "The complete script preview is shown directly below.",
    guidance_scene: "Review timing and shot coverage in the storyboard below.",
    guidance_assets: "Inspect every generated take in the filmstrip below before approving compose.",
    publish_destination: "Publish destination",
    production_proposal: "Production proposal",
    research_brief_title: "Research brief",
    scene_plan_title: "Scene plan",
    generated_assets: "Generated assets",
    edit_decisions_title: "Edit decisions",
    render_report_title: "Render report",
    publish_plan: "Publish plan",
    nothing_reviewable: "Nothing reviewable was found. ",
    checkpoint_declares: "The {stage} checkpoint declares {names}, but Backlot could not load it.",
    checkpoint_empty: "The {stage} checkpoint does not declare an artifact.",
    review_gate: "REVIEW GATE",
    ready_review: "{name} is ready for your review",
    review_then_chat: "Review the artifact here, then reply in chat to approve it or request changes.",
    self_review: "SELF-REVIEW  ",
    approval_unlocks: "Approval unlocks {name}.",
    final_gate: "This is the final approval gate.",
    open_artifact: "OPEN FULL ARTIFACT",
    esc_close: "ESC · CLOSE",
    end: "END",
    intent: "Intent — {text}",
    revised: " · revised",
    also_considered: "also considered: ",
    decision_fallback: "decision",
    decisions: "Decisions",
    running: "● running",
    activity: "Activity",
    hero: "★ HERO",
    generating: "◉ GENERATING",
    asset_unavailable: "asset unavailable",
    snapshot: "snapshot",
    bespoke: "◆ BESPOKE",
    hand_authored: "hand-authored composition",
    asset_missing: "asset in manifest, file missing",
    no_asset: "no asset yet",
    take_n: "take {n}",
    n_takes: "{n} TAKES",
    click_narration: "Click to read the full narration",
    play_narration: "Play narration",
    storyboard: "Storyboard",
    storyboard_meta: "{scenes} · card width ∝ duration",
    root_suffix: " · root",
    renders: "Renders",
    n_versions: ({ n }) => `${n} version${Number(n) === 1 ? "" : "s"}`,
    watcher_found: "What the watcher found",
    snapshots_meta: "snapshots / verification frames",
    no_pipeline: "No pipeline state. ",
    no_checkpoints: "This project has no checkpoints — Backlot is showing what it found on disk. ",
    checkpoint_protocol: "Runs that follow the checkpoint protocol get the full board.",
    stage_waiting: "The {name} stage is waiting for your review. ",
    agent_paused_before: "The agent is paused at this gate — reply ",
    in_chat: "in chat",
    agent_paused_after: " to approve or request changes.",
    scrub_run: "scrub the whole run",
    replay_run: "▶ REPLAY RUN",
    back_to_live: "✕ LIVE",
    project_not_found: "PROJECT NOT FOUND",
    board_title: "Backlot — {title}",
  },
  zh: {
    library: "项目库",
    library_title: "Backlot — 项目库",
    empty_projects: "还没有项目。跑一次制作后，会出现在这里。",
    n_projects: ({ n }) => `${n} 个项目`,
    n_live: ({ n }) => `${n} 个进行中`,
    idle: "空闲",
    idle_ago: "空闲 · {ago}",
    just_now: "刚刚",
    minutes_ago: ({ n }) => `${n} 分钟前`,
    hours_ago: ({ n }) => `${n} 小时前`,
    days_ago: ({ n }) => `${n} 天前`,
    no_media: "还没有画面",
    awaiting_you: "◈ 待你确认",
    live: "进行中",
    live_stage: "进行中 · {stage}",
    unknown: "未知",
    n_scenes: ({ n }) => `${n} 个镜头`,
    n_renders: ({ n }) => `${n} 个成片`,
    theme_to_light: "切换到浅色",
    theme_to_dark: "切换到深色",
    lang_toggle_label: "EN",
    switch_lang: "Switch to English",
    pipeline_chip: "{name} 流程",
    scenes_duration: "{n} 个镜头 · {dur}",
    stalled: "⚠ 可能停滞",
    generation_spend: "生成花费",
    awaiting_approval: "等待你确认\n在对话里回复后继续",
    stalled_minutes: "可能停滞：已 {n} 分钟无活动\n可向代理询问进度",
    scenes_done: ({ n }) => `已完成 ${n} 个镜头`,
    in_progress: "进行中",
    failed: "失败",
    approved_suffix: " · 已确认",
    undeclared_title: "「{name}」已运行，但当前流程清单未声明这个阶段",
    unlisted: "未列入清单",
    n_critical: ({ n }) => `${n} 个严重问题`,
    n_suggestions: ({ n }) => `${n} 条建议`,
    n_nitpicks: ({ n }) => `${n} 处细节`,
    review_focus: "审查重点 {v}",
    stage_pending: "这个阶段还没开始。",
    no_artifact: "磁盘上没有这个阶段的正式产物。",
    close: "关闭 ✕",
    gate_skipped: "⚑ 已跳过关卡",
    section_fallback: "段落",
    more_sections: "… 还有 {n} 段",
    approved: "已通过",
    pending_approval: "待确认",
    drafting: "撰写中",
    click_expand_script: "点击展开完整剧本",
    script_meta: "剧本 · {dur} · {n} 段",
    expand_script: "⤢ 展开剧本",
    item_n: "条目 {n}",
    selected: "已选",
    n_items: ({ n }) => `${n} 项`,
    why_concept: "为什么选这个方案  ",
    fact_platform: "平台",
    fact_duration: "时长",
    fact_tone: "调性",
    fact_style: "风格",
    fact_runtime: "运行时",
    fact_pipeline: "流程",
    fact_estimated_cost: "预估费用",
    fact_concepts: "方案",
    fact_sources: "来源",
    fact_data_points: "数据点",
    fact_angles: "角度",
    fact_sections: "段落",
    fact_scenes: "镜头",
    fact_assets: "素材",
    fact_types: "类型",
    fact_generation_cost: "生成费用",
    fact_cuts: "剪辑点",
    fact_outputs: "输出",
    fact_destinations: "去向",
    guidance_script: "完整剧本预览就在下方。",
    guidance_scene: "请在下方分镜里核对时间和镜头覆盖。",
    guidance_assets: "确认合成前，请在下方胶片条里检查每一条成片。",
    publish_destination: "发布去向",
    production_proposal: "制作提案",
    research_brief_title: "调研简报",
    scene_plan_title: "分镜计划",
    generated_assets: "已生成素材",
    edit_decisions_title: "剪辑决定",
    render_report_title: "渲染报告",
    publish_plan: "发布计划",
    nothing_reviewable: "没有找到可审阅的内容。",
    checkpoint_declares: "{stage} 检查点声明了 {names}，但看板没能加载。",
    checkpoint_empty: "{stage} 检查点没有声明产物。",
    review_gate: "审阅关卡",
    ready_review: "{name}已可审阅",
    review_then_chat: "在这里审阅产物，然后在对话里回复：通过，或要求修改。",
    self_review: "自审  ",
    approval_unlocks: "确认后将进入{name}。",
    final_gate: "这是最后一道确认关。",
    open_artifact: "打开完整产物",
    esc_close: "ESC · 关闭",
    end: "完",
    intent: "意图 — {text}",
    revised: " · 已修订",
    also_considered: "也曾考虑：",
    decision_fallback: "决策",
    decisions: "决策",
    running: "● 进行中",
    activity: "动态",
    hero: "★ 主镜",
    generating: "◉ 生成中",
    asset_unavailable: "素材不可用",
    snapshot: "截帧",
    bespoke: "◆ 手工",
    hand_authored: "手工编排的画面",
    asset_missing: "清单里有这条素材，文件缺失",
    no_asset: "还没有素材",
    take_n: "第 {n} 条",
    n_takes: "{n} 条备选",
    click_narration: "点击阅读完整旁白",
    play_narration: "播放旁白",
    storyboard: "分镜看板",
    storyboard_meta: "{scenes} · 卡片宽度按时长",
    root_suffix: " · 根目录",
    renders: "成片",
    n_versions: ({ n }) => `${n} 个版本`,
    watcher_found: "监视器发现的画面",
    snapshots_meta: "截帧 / 校验画面",
    no_pipeline: "还没有流程状态。",
    no_checkpoints: "这个项目没有检查点，看板只展示磁盘上找到的内容。",
    checkpoint_protocol: "按检查点协议运行的项目会显示完整看板。",
    stage_waiting: "{name}阶段正在等你审阅。",
    agent_paused_before: "代理停在这一关，请",
    in_chat: "在对话里",
    agent_paused_after: "回复：通过，或要求修改。",
    scrub_run: "拖动回放整次制作",
    replay_run: "▶ 回放",
    back_to_live: "✕ 回到现在",
    project_not_found: "找不到项目",
    board_title: "Backlot — {title}",
  },
};

function readPreset() {
  const preset = document.documentElement.dataset.lang;
  if (preset === "zh" || preset === "en") return preset;
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "zh" || q === "zh-CN" || q === "zh-Hans") return "zh";
  if (q === "en") return "en";
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "zh" || stored === "en") return stored;
  } catch { /* private mode */ }
  return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
}

export let lang = readPreset();

function ensureZhFont() {
  if (lang !== "zh" || document.getElementById("backlot-zh-font")) return;
  const link = document.createElement("link");
  link.id = "backlot-zh-font";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@500;700&display=swap";
  document.head.append(link);
}

export function applyDocumentLang() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.lang = lang;
  ensureZhFont();
}

export function setLang(next) {
  lang = next === "zh" ? "zh" : "en";
  try { localStorage.setItem(LANG_KEY, lang); } catch { /* private mode */ }
  const url = new URL(location.href);
  if (url.searchParams.has("lang")) {
    url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  }
  applyDocumentLang();
}

export function t(key, vars = {}) {
  const table = STRINGS[lang] || STRINGS.en;
  let value = table[key];
  if (value == null) value = STRINGS.en[key];
  if (value == null) return key;
  if (typeof value === "function") return value(vars);
  return String(value).replace(/\{(\w+)\}/g, (_, name) => (vars[name] == null ? "" : String(vars[name])));
}

export function stageLabel(name) {
  if (!name) return "";
  if (lang === "zh" && STAGE_ZH[name]) return STAGE_ZH[name];
  return name;
}

export function statusLabel(status) {
  if (!status) return "";
  if (lang === "zh" && STATUS_ZH[status]) return STATUS_ZH[status];
  return status;
}

export function artifactLabel(name) {
  const raw = String(name || "");
  if (!raw) return lang === "zh" ? "产物" : "artifact";
  if (lang === "zh" && ARTIFACT_ZH[raw]) return ARTIFACT_ZH[raw];
  return raw.replaceAll("_", " ");
}

applyDocumentLang();
