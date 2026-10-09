// Sets the document language before the board paints.
// Resolution: ?lang= wins, then the saved choice, then the browser language.
(function () {
  var KEY = "backlot.lang";
  var q = new URLSearchParams(location.search).get("lang");
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var lang = (q === "zh" || q === "zh-CN" || q === "zh-Hans") ? "zh"
    : (q === "en") ? "en"
    : (stored === "zh" || stored === "en") ? stored
    : ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.lang = lang;
  try { localStorage.setItem(KEY, lang); } catch (e) {}
})();
