import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold tracking-tight">
        Daniel · Portfolio
      </h1>

      <p className="mt-4 max-w-xl text-muted-foreground">
        Portfolio en construcción. Aquí irán mis proyectos, tecnologías y enlaces.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <a
            href="https://github.com/dancebroa-001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a href="#proyectos">Ver proyectos</a>
        </Button>
      </div>
    </main>
  );
}

