import { TECH_STACK } from "@/constant/techStack";

type TechKey = keyof typeof TECH_STACK;

export const PROJECTS: {
  image: string;
  title: string;
  desc: string;
  tech: TechKey[];
  github?: string;
  live?: string;
}[] = [
  {
    image: "/images/p1.jpg",
    title: "AI-Powered Quiz Generator",
    desc:
      "A scalable quiz generation platform powered by GenAI, built using Spring Boot microservices with secure authentication and PostgreSQL logging.",
    tech: ["springboot", "postgresql", "java"],
    github: "https://github.com/Atharva759/AI-Quiz-Project",
  },
  {
    image: "/images/p2.jpg",
    title: "Employee Management System",
    desc:
      "A full-stack employee portal for attendance, leave management, and approvals with JWT-based authentication and optimized database queries.",
    tech: ["java","react", "springboot", "postgresql"],
    github: "https://github.com/Atharva759/Employee-Management-System",
    live: "https://employee-management-sys-afk.vercel.app/",
  },
  {
    image: "/images/p3.jpg",
    title: "Password Manager",
    desc:
      "A secure and responsive password manager with authentication, real-time sync, and modern UI.",
    tech: ["react", "tailwind","firebase"],
    github: "https://github.com/Atharva759/Password-Manager",
    live: "https://passwordmanager-psi.vercel.app/",
  },
];
