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
      className="size-6 md:size-8 rounded-md p-0 [&_svg]:size-4 md:[&_svg]:size-5"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun strokeWidth={1} /> : <Moon strokeWidth={1} />}
    </Button>
  );
};

export default ThemeToggle;
