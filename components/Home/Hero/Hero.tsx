"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particlebackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <Particlebackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-30" />
          <Image
            src="/images/s1.jpg"
            alt="Atharva Khadake"
            width={150}
            height={150}
            className="relative rounded-full border-4 border-cyan-400/40"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          Building scalable{" "}
          <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            web products
          </span>
          <br />& impactful digital experiences
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-2xl font-medium flex flex-wrap items-center justify-center gap-2"
        >
          Hi, I’m <span className="text-cyan-300 font-semibold">Atharva</span> -
          a
          <span className="font-bold text-cyan-300">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Backend Engineer",
                  "Problem Solver",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
              }}
            />
          </span>
        </motion.h2>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-4 rounded-full text-lg font-medium
          bg-blue-700 hover:bg-blue-800 transition shadow-lg
          shadow-blue-700/30 flex items-center gap-2"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          See my work
          <BsArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
