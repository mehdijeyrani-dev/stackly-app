import { useEffect } from "react";

export function useScrollbarGutter() {
  useEffect(() => {
    const root = document.documentElement;

    const updateScrollbarGutter = () => {
      const hasVerticalScroll = root.scrollHeight > root.clientHeight;

      root.style.scrollbarGutter = hasVerticalScroll ? "stable" : "auto";
    };

    const observer = new ResizeObserver(updateScrollbarGutter);

    observer.observe(root);

    window.addEventListener("resize", updateScrollbarGutter);
    root.style.removeProperty("scrollbar-gutter");
  }, []);
}
