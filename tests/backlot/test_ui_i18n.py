"""Backlot chrome stays English by default and has a Chinese board."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


REPO = Path(__file__).resolve().parents[2]
SCRIPT = r"""
globalThis.document = {
  documentElement: { dataset: {}, lang: "" },
  head: { append() {} },
  getElementById() { return null; },
  createElement() { return { id: "", rel: "", href: "" }; },
};
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
};
globalThis.location = { search: "", href: "http://127.0.0.1/", pathname: "/" };
globalThis.history = { replaceState() {} };
const mod = await import("./backlot/ui/i18n.js");
const { t, setLang, stageLabel, artifactLabel } = mod;
const required = [
  ["pending_approval", "PENDING APPROVAL"],
  ["open_artifact", "OPEN FULL ARTIFACT"],
  ["project_not_found", "PROJECT NOT FOUND"],
  ["library", "Library"],
  ["empty_projects", "No projects yet — run a production and it will appear here."],
];
for (const [key, expected] of required) {
  const got = t(key);
  if (got !== expected) throw new Error(`${key}: ${got}`);
}
if (t("scenes_done", { n: 1 }) !== "1 scene done") throw new Error("singular scene");
if (t("scenes_done", { n: 2 }) !== "2 scenes done") throw new Error("plural scenes");
setLang("zh");
const zh = [
  t("library"),
  t("storyboard"),
  t("pending_approval"),
  t("open_artifact"),
  t("project_not_found"),
  stageLabel("script"),
  artifactLabel("research_brief"),
  t("ready_review", { name: stageLabel("proposal") }),
];
for (const value of zh) {
  if (!/[\u4e00-\u9fff]/.test(value)) throw new Error(`missing Chinese: ${value}`);
}
if (stageLabel("not_a_stage") !== "not_a_stage") throw new Error("unknown stage translated");
console.log("ok");
"""


def test_backlot_board_chinese_keeps_english_contract():
    completed = subprocess.run(
        ["node", "--input-type=module", "--eval", SCRIPT],
        cwd=REPO,
        check=False,
        capture_output=True,
        text=True,
    )
    if completed.returncode != 0:
        sys.stderr.write(completed.stderr)
        sys.stderr.write(completed.stdout)
    assert completed.returncode == 0
    assert "ok" in completed.stdout
