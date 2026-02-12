export type Tech = {
  name: string;
  group: "Frontend" | "Backend" | "Tools";
  icon: string; // ruta dentro de /public
};

export const techStack: Tech[] = [
  { name: "Next.js", group: "Frontend", icon: "/icons/nextdotjs.svg" },
  { name: "React", group: "Frontend", icon: "/icons/react.svg" },
  { name: "TypeScript", group: "Frontend", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", group: "Frontend", icon: "/icons/tailwindcss.svg" },

  { name: "Git", group: "Tools", icon: "/icons/git.svg" },
  { name: "GitHub", group: "Tools", icon: "/icons/github.svg" },
  { name: "Vercel", group: "Tools", icon: "/icons/vercel.svg" },
];

