import { useCallback, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "codexys-theme";

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage unavailable (private mode) — theme still applies for the session
    }
  }, [theme]);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion) {
      root.classList.add("theme-transition");
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current);
      }
      transitionTimer.current = window.setTimeout(() => {
        root.classList.remove("theme-transition");
        transitionTimer.current = null;
      }, 320);
    }

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
