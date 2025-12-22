"use client";

import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="pt-24 pb-24">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        What I build & work with
      </motion.h1>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <ServiceCard
            icon="/images/s2.png"
            name="Frontend Engineering"
            desc="Building responsive, user-friendly interfaces using React.js and Tailwind CSS with a strong focus on usability and performance."
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <ServiceCard
            icon="/images/s3.png"
            name="Backend & APIs"
            desc="Developing secure and scalable backend systems using Spring Boot and Node.js, including REST APIs, authentication, and business logic."
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <ServiceCard
            icon="/images/s1.png"
            name="Databases & Cloud"
            desc="Working with PostgreSQL, MongoDB, and MySQL, optimizing queries, managing data efficiently, and deploying on cloud platforms like AWS."
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
          <ServiceCard
            icon="/images/s4.png"
            name="Scalable Systems"
            desc="Designing production-ready applications using microservices architecture, service discovery, API gateways, and real-world deployment practices."
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
