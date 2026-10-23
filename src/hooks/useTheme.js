import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const BROWSER_BAR_COLOR = { light: "#ffffff", dark: "#031a1d" };

// index.html already set data-theme (saved choice, otherwise light) before the
// page painted, so we simply start from that value.
function getInitialTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // keep the <html> attribute and the phone browser bar colour in sync
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", BROWSER_BAR_COLOR[theme]);
  }, [theme]);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // smooth colour change, only while switching
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("theme-transition");
      setTimeout(() => root.classList.remove("theme-transition"), 500);
    }

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — the theme still changes for this visit */
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
