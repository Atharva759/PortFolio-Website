"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="relative pt-28 pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-transparent" />
      <div
        className="
          absolute top-1/3 left-1/2 -translate-x-1/2
          w-150 h-150
          bg-blue-500/10 blur-[140px] rounded-full
        "
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <p className="text-cyan-300/80 uppercase tracking-widest text-sm mb-3">
          Services
        </p>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-white">
          What I build & work with
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="relative z-10 w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20"
      >
        {[
          {
            tech: "react",
            name: "Frontend Engineering",
            desc:
              "Building responsive, accessible interfaces with React and Tailwind, focused on performance and clean UX.",
          },
          {
            tech: "node",
            name: "Backend & APIs",
            desc:
              "Designing secure, scalable backends using Spring Boot and Node.js with robust REST APIs.",
          },
          {
            tech: "postgresql",
            name: "Databases & Cloud",
            desc:
              "Optimizing data layers with PostgreSQL, MongoDB, MySQL, and deploying on AWS.",
          },
          {
            tech: "springboot",
            name: "Scalable Systems",
            desc:
              "Architecting production-ready systems with microservices, gateways, and real-world deployments.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
