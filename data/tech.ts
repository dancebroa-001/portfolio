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
};

export const techStack: Tech[] = [
  { name: "Next.js", Icon: SiNextdotjs, group: "Frontend" },
  { name: "React", Icon: SiReact, group: "Frontend" },
  { name: "TypeScript", Icon: SiTypescript, group: "Frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, group: "Frontend" },
  { name: "Git", Icon: SiGit, group: "Tools" },
  { name: "GitHub", Icon: SiGithub, group: "Tools" },
  { name: "Vercel", Icon: SiVercel, group: "Tools" },
];


