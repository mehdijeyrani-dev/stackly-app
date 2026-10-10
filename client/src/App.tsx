import ThemeController from "./components/ThemeController";
import { useThemeStore } from "./stores/themeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <>
      <ThemeController />

      <main className="min-h-screen bg-background text-foreground p-8">
        <div className="rounded-xl border border-border bg-card p-6">
          <h1 className="text-2xl font-bold">Theme Test</h1>

          <p className="mt-2 text-muted-foreground">
            Testing theme colors with Tailwind CSS v4.
          </p>

          <div className="flex items-center gap-2">
            <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
              Primary Button
            </button>

            <button
              onClick={() => setTheme("system")}
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground"
            >
              System
            </button>
            <button
              onClick={() => setTheme("light")}
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground"
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="mt-4 px-4 py-2 rounded-lg bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-50 capitalize"
            >
              {theme}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
