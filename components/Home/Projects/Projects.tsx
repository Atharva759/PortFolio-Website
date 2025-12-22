"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constant/projects";

const Projects = () => {
  return (
    <section className="pt-24 pb-24" id="projects">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        A selection of my recent <br />
        <span className="text-cyan-300">Projects</span>
      </motion.h1>

      {/* Grid */}
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
