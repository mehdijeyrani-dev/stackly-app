function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="rounded-xl border border-border bg-card p-6">
        <h1 className="text-2xl font-bold">Theme Test</h1>

        <p className="mt-2 text-muted-foreground">
          Testing theme colors with Tailwind CSS v4.
        </p>

        <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
          Primary Button
        </button>
      </div>
    </main>
  );
}

export default App;
