'use client';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiGit,
  SiGithub,
  SiPostman,
  SiJunit5,
  SiFigma,
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

import Tilt from 'react-parallax-tilt';

const skills = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'JUnit5', icon: SiJunit5, color: '#25A162' },
  { name: 'Figma', icon: SiFigma, color: '#DDA0DD' },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white pt-24 pb-24">
      <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill) => (
          <Tilt
            key={skill.name}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.05}
            transitionSpeed={500}
          >
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl
              bg-white/5 backdrop-blur-md border border-white/10
              hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Small Icon */}
              <skill.icon
                size={22}
                color={skill.color}
              />

              {/* Name */}
              <span className="text-sm font-medium">
                {skill.name}
              </span>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
