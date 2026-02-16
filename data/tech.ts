import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export type Tech = {
  name: string;
  Icon: IconType;
  group?: "Frontend" | "Tools";
  url: string;
};

export const techStack: Tech[] = [
  { name: "Next.js", Icon: SiNextdotjs, group: "Frontend", url: "https://nextjs.org/" },
  { name: "React", Icon: SiReact, group: "Frontend", url: "https://react.dev/" },
  { name: "TypeScript", Icon: SiTypescript, group: "Frontend", url: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, group: "Frontend", url: "https://tailwindcss.com/" },
  { name: "Git", Icon: SiGit, group: "Tools", url: "https://git-scm.com/" },
  { name: "GitHub", Icon: SiGithub, group: "Tools", url: "https://github.com/" },
  { name: "Vercel", Icon: SiVercel, group: "Tools", url: "https://vercel.com/" },
];


