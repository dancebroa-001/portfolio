export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold tracking-tight">Daniel · Portfolio</h1>

      <p className="mt-4 max-w-xl text-base text-neutral-400">
        Portfolio en construcción. Aquí irán mis proyectos, tecnologías y enlaces.
      </p>

      <div className="mt-8 flex gap-3">
        <a
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          href="https://github.com/dancebroa-001"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/5"
          href="#proyectos"
        >
          Ver proyectos
        </a>
      </div>
    </main>
  );
}
