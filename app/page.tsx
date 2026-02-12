import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

import { Badge } from "@/components/ui/badge";
import { techStack } from "@/data/tech";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Daniel · Portfolio
        </h1>

        <p className="mt-4 max-w-xl text-muted-foreground">
          Portfolio en construcción. Aquí irán mis proyectos, tecnologías y enlaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
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
      </section>

      <section className="mx-auto mt-14 max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight">Tecnologías</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Herramientas con las que construyo mis proyectos.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <Badge key={t.name} variant="secondary">
              {t.name}
            </Badge>
          ))}
        </div>
      </section>

      <section id="proyectos" className="mx-auto mt-14 max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight">
          Proyectos
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Una selección de cosas que he construido.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="h-full">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {p.githubUrl && (
                    <Button variant="secondary" asChild>
                      <a href={p.githubUrl} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                  {p.liveUrl && (
                    <Button asChild>
                      <a href={p.liveUrl} target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}


