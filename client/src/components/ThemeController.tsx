import { useLayoutEffect } from "react";
import { useThemeStore } from "../stores/themeStore";

function ThemeController() {
  const theme = useThemeStore((state) => state.theme);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      root.classList.add("theme-changing");

      const resolvedTheme =
        theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;

      root.dataset.theme = resolvedTheme;

      // Re-enable animations after the theme update.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.remove("theme-changing");
        });
      });
    };

    applyTheme();

    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }, [theme]);

  return null;
}

export default ThemeController;
