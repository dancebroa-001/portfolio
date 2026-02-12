export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Breve descripción de lo que hace y qué aprendiste.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/dancebroa-001",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Proyecto 2",
    description: "Otro proyecto (puede ser placeholder por ahora).",
    tech: ["React", "CSS"],
    githubUrl: "https://github.com/dancebroa-001",
  },
];
