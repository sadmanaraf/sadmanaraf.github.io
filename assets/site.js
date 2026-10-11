// Plain English / Technical switch on the case-study pages.
(function () {
  var buttons = document.querySelectorAll(".view-toggle button");
  if (!buttons.length) return;

  function setView(view) {
    document.documentElement.dataset.view = view;
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.view === view));
    });
    // Storage can be blocked (private windows); the switch still works without it.
    try { localStorage.setItem("view", view); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("view"); } catch (e) {}
  setView(saved === "technical" ? "technical" : "plain");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () { setView(button.dataset.view); });
  });
})();
