/* Tailwind Play CDN config — maps utilities onto the semantic OKLCH
   tokens defined in assets/theme.css so `bg-brand`, `text-ink`, etc.
   stay theme-aware. Loaded immediately after the CDN script. */
const withAlpha = (t) => `oklch(var(${t}) / <alpha-value>)`;

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        "surface-2": withAlpha("--surface-2"),
        line: withAlpha("--line"),
        ink: withAlpha("--ink"),
        "ink-soft": withAlpha("--ink-soft"),
        "ink-mute": withAlpha("--ink-mute"),
        brand: withAlpha("--brand"),
        "brand-strong": withAlpha("--brand-strong"),
        ocean: withAlpha("--ocean"),
        "ocean-strong": withAlpha("--ocean-strong"),
        coal: withAlpha("--coal"),
        "coal-2": withAlpha("--coal-2"),
        "ink-rev": withAlpha("--ink-rev"),
        "on-brand": withAlpha("--on-brand"),
        "on-solid": withAlpha("--on-solid"),
        live: withAlpha("--live"),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { container: "var(--container)", prose: "68ch" },
      letterSpacing: { tightest: "-0.04em" },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};
