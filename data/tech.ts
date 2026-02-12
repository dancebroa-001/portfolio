export type Tech = {
  name: string;
  group: "Frontend" | "Backend" | "Tools";
};

export const techStack: Tech[] = [
  { name: "Next.js", group: "Frontend" },
  { name: "React", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "shadcn/ui", group: "Frontend" },
  { name: "Framer Motion", group: "Frontend" },

  { name: "Git", group: "Tools" },
  { name: "GitHub", group: "Tools" },
  { name: "Vercel", group: "Tools" },
];
