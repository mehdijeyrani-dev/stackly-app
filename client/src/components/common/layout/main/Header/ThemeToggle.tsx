import Button from "@/components/ui/Button";
import { useThemeStore } from "@/stores/themeStore";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <Button
      variant="outline"
      color="secondary"
      className="size-6 md:size-8 hover:bg-surface-secondary rounded-md border-surface-border p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          strokeWidth={1}
          className="shrink-0 size-fit xs:size-4 md:size-auto"
        />
      ) : (
        <Moon
          size={20}
          strokeWidth={1}
          className="shrink-0 size-fit xs:size-4 md:size-auto"
        />
      )}
    </Button>
  );
};

export default ThemeToggle;
