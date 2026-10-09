import { el, fmtAgo, getJSON, subscribe, thumbURL } from "/ui/lib.js";
import { lang, setLang, stageLabel, statusLabel, t } from "/ui/i18n.js";

const grid = document.getElementById("grid");
const THEME_KEY = "backlot.theme";
let currentTheme = localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";

function applyTheme(theme) {
  currentTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = currentTheme;
  localStorage.setItem(THEME_KEY, currentTheme);
}

function renderThemeToggle() {
  const next = currentTheme === "light" ? "dark" : "light";
  const title = t(next === "light" ? "theme_to_light" : "theme_to_dark");
  return el("button", {
    class: "theme-toggle",
    type: "button",
    title,
    "aria-label": title,
    "aria-pressed": currentTheme === "light" ? "true" : "false",
    onclick: () => {
      applyTheme(next);
      render().catch(console.error);
    },
  }, el("span", { class: "theme-toggle-icon", "aria-hidden": "true" }, currentTheme === "light" ? "☾" : "☀"));
}

function renderLangToggle() {
  const title = t("switch_lang");
  return el("button", {
    class: "lang-toggle",
    type: "button",
    title,
    "aria-label": title,
    onclick: () => {
      setLang(lang === "zh" ? "en" : "zh");
      render().catch(console.error);
    },
  }, t("lang_toggle_label"));
}

function mountChrome() {
  document.title = t("library_title");
  document.querySelector(".slate h1").textContent = t("library");
  document.getElementById("empty").textContent = t("empty_projects");
  const live = document.getElementById("liveBadge");
  document.querySelectorAll(".theme-toggle, .lang-toggle").forEach((node) => node.remove());
  live.before(renderLangToggle(), renderThemeToggle());
}

applyTheme(currentTheme);
mountChrome();

function miniRail(states) {
  const rail = el("div", { class: "mini-rail" });
  for (const s of states) {
    const cls = s.status === "completed" ? "d"
      : s.status === "in_progress" ? "a"
      : s.status === "awaiting_human" ? "w" : "";
    rail.append(el("i", { class: cls, title: `${stageLabel(s.name)}: ${statusLabel(s.status)}` }));
  }
  return rail;
}

function card(p) {
  const poster = el("div", { class: "lib-poster" });
  if (p.poster) {
    poster.append(el("img", { src: thumbURL(p.project_id, p.poster, 640), loading: "lazy", alt: "" }));
  } else {
    poster.append(el("span", { class: "lp-txt" }, t("no_media")));
  }
  if (p.live && p.active_stage) {
    const stage = lang === "zh" ? stageLabel(p.active_stage) : p.active_stage.toUpperCase();
    poster.append(el("span", { class: "lp-live" },
      el("span", { class: "dot" }),
      p.awaiting_human ? t("awaiting_you") : t("live_stage", { stage })));
  } else if (p.awaiting_human) {
    poster.append(el("span", { class: "lp-live" }, t("awaiting_you")));
  }

  const meta = el("div", { class: "lb-meta" },
    el("span", { class: "chip" }, p.pipeline_type || t("unknown")),
    p.scene_count ? el("span", { class: "chip" }, t("n_scenes", { n: p.scene_count })) : null,
    p.render_count ? el("span", { class: "chip" }, t("n_renders", { n: p.render_count })) : null,
    el("span", { class: "when" }, fmtAgo(p.last_activity)),
  );

  const params = new URLSearchParams();
  if (new URLSearchParams(location.search).has("static")) params.set("static", "1");
  params.set("lang", lang);
  return el("a", { class: `lib-card${p.live ? " live-card" : ""}`, href: `/p/${p.project_id}?${params}`, style: "text-decoration:none;color:inherit" },
    poster,
    el("div", { class: "lib-body" },
      el("h3", {}, (p.title || p.project_id).toUpperCase()),
      meta,
      p.stage_states.length ? miniRail(p.stage_states) : null,
    ),
  );
}

async function render() {
  mountChrome();
  const projects = await getJSON("/api/projects");
  document.getElementById("count").textContent = t("n_projects", { n: projects.length });
  const liveCount = projects.filter((p) => p.live).length;
  const badge = document.getElementById("liveBadge");
  badge.classList.toggle("idle", liveCount === 0);
  document.getElementById("liveText").textContent = liveCount ? t("n_live", { n: liveCount }) : t("idle");
  grid.innerHTML = "";
  document.getElementById("empty").style.display = projects.length ? "none" : "block";
  for (const p of projects) grid.append(card(p));
}

render().catch(console.error);
if (!new URLSearchParams(location.search).has("static")) {
  subscribe("/api/library/events", () => render().catch(console.error));
}
