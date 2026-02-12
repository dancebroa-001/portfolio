import Image from "next/image";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { projects } from "@/data/projects";
import { techStack } from "@/data/tech";

import { Separator } from "@/components/ui/separator";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-12 md:px-10">
        <section id="inicio" className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Daniel · Portfolio
          </h1>

          <p className="mt-4 max-w-xl text-muted-foreground">
            Portfolio en construcción. Aquí irán mis proyectos, tecnologías y
            enlaces.
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

        <section id="tecnologias" className="mx-auto mt-14 max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight">Tecnologías</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Herramientas con las que construyo mis proyectos.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <Badge
                key={t.name}
                variant="outline"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-muted/40 hover:bg-muted/70 dark:bg-muted/20 dark:hover:bg-muted/30"
              >
                <t.Icon className="h-4 w-4 text-foreground" />
                {t.name}
              </Badge>
            ))}
          </div>

        </section>

        <section id="proyectos" className="mx-auto mt-14 max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight">Proyectos</h2>
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

        <section id="contacto" className="mx-auto mt-16 max-w-5xl pb-20">
          <hr className="my-10 border-border/60" />



          <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Si quieres hablar sobre algún proyecto o colaborar, escríbeme.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="mailto:daniel@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="https://github.com/dancebroa-001"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/daniel-ceballos-roales-22b539346/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <SiLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          
        </section>
      </main>
    </>
  );
}
