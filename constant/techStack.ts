import {
  FaJava,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiAmazon,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiJunit5,
  SiFigma,
  SiFirebase
} from "react-icons/si";

export const TECH_STACK = {
  java: {
    label: "Java",
    icon: FaJava,
    color: "#ED8B00",
  },
  cpp: {
    label: "C++",
    icon: SiCplusplus,
    color: "#00599C",
  },
  javascript: {
    label: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  typescript: {
    label: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  html: {
    label: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  css: {
    label: "CSS",
    icon: SiCss3,
    color: "#1572B6",
  },
  react: {
    label: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  nextjs: {
    label: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  tailwind: {
    label: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  node: {
    label: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  springboot: {
    label: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
  },
  aws: {
    label: "AWS",
    icon: SiAmazon,
    color: "#FF9900",
  },
  mysql: {
    label: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  mongodb: {
    label: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  postgresql: {
    label: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  git: {
    label: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  github: {
    label: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  postman: {
    label: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
  },
  junit: {
    label: "JUnit 5",
    icon: SiJunit5,
    color: "#25A162",
  },
  figma: {
    label: "Figma",
    icon: SiFigma,
    color: "#DDA0DD",
  },
  firebase:{
    label:"Firebase",
    icon:SiFirebase,
    color:"EED202"
  }
} as const;
