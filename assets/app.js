/* Shared behavior: theme toggle, mobile nav, scroll reveals, hero entrance.
   The `js` class and pre-paint theme are set by an inline head script so
   there is no flash; this file wires up interaction after DOM is ready. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme toggle ---------- */
  function setMeta(dark) {
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", dark ? "#1f2a30" : "#ffffff");
  }
  function syncToggle(btn, dark) {
    if (!btn) return;
    btn.setAttribute("aria-pressed", String(dark));
    btn.setAttribute("aria-label", dark ? "Mudar para tema claro" : "Mudar para tema escuro");
  }
  var themeBtns = document.querySelectorAll("[data-theme-toggle]");
  themeBtns.forEach(function (btn) {
    syncToggle(btn, root.classList.contains("dark"));
    btn.addEventListener("click", function () {
      root.classList.add("theme-transition");
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
      setMeta(dark);
      themeBtns.forEach(function (b) { syncToggle(b, dark); });
      window.setTimeout(function () { root.classList.remove("theme-transition"); }, 400);
    });
  });

  /* ---------- mobile nav ---------- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var open = false;
    var setOpen = function (state) {
      open = state;
      menu.classList.toggle("hidden", !open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      toggle.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () { setOpen(!open); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && open) setOpen(false);
    });
  }

  /* ---------- hero entrance ---------- */
  var hero = document.querySelector("[data-hero]");
  if (hero) {
    if (reduceMotion) hero.classList.add("hero-in");
    else requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add("hero-in"); });
    });
  }

  /* ---------- scroll reveals ---------- */
  var reveals = document.querySelectorAll(".reveal");
  function revealAll() { reveals.forEach(function (el) { el.classList.add("in"); }); }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
    /* failsafe: never leave content hidden (headless / no-scroll contexts) */
    window.setTimeout(revealAll, 2500);
  }
})();
