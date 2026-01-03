import { TECH_STACK } from "@/constant/techStack";

type TechKey = keyof typeof TECH_STACK;

export const PROJECTS: {
  images: string[];
  title: string;
  desc: string;
  tech: TechKey[];
  github?: string;
  live?: string;
}[] = [
  {
    images: ["/images/urlshort/u1.png","/images/urlshort/u2.png",],
    title: "URL Shortner",
    desc:
      "Built a URL shortener that generates compact links from long URLs, ensuring efficient redirection and a clean user experience.",
    tech: ["java","react", "springboot", "postgresql","systemdesign"],
    github: "https://github.com/Atharva759/URL-Shortner-App",
    live: "https://make-short.vercel.app/",
  },
  {
    images: ["/images/aiquiz/p1.png","/images/aiquiz/p2.png","/images/aiquiz/p3.png"],
    title: "AI-Powered Quiz Generator",
    desc:
      "A scalable quiz generation platform powered by GenAI, built using Spring Boot microservices with secure authentication and PostgreSQL logging.",
    tech: ["springboot", "postgresql", "java","gemini"],
    github: "https://github.com/Atharva759/AI-Quiz-Project",
  },
  {
    images: ["/images/ems/e1.png","/images/ems/e2.png","/images/ems/e3.png","/images/ems/e4.png"],
    title: "Employee Management System",
    desc:
      "A full-stack employee portal for attendance, leave management, and approvals with JWT-based authentication and optimized database queries.",
    tech: ["java","react", "springboot", "postgresql"],
    github: "https://github.com/Atharva759/Employee-Management-System",
    live: "https://employee-management-sys-afk.vercel.app/",
  },
  {
    images: ["/images/pwm/pwm1.png","/images/pwm/pwm2.png"],
    title: "Password Manager",
    desc:
      "A secure and responsive password manager with authentication, real-time sync, and modern UI.",
    tech: ["react", "tailwind","firebase"],
    github: "https://github.com/Atharva759/Password-Manager",
    live: "https://passwordmanager-psi.vercel.app/",
  },
];
