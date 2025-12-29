"use client";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particlebackground from "./ParticleBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background layers */}
      <Particlebackground />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          Building{" "}
          <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            scalable web products
          </span>
          <br className="hidden sm:block" /> & impactful digital experiences
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/80 flex flex-wrap items-center justify-center gap-2"
        >
          Hi, I’m{" "}
          <span className="text-cyan-300 font-medium">Atharva</span> 
          <span className="font-semibold text-cyan-300">
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
        <Link href="#projects">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="
              mt-10 px-8 py-4 rounded-full text-base font-medium
              backdrop-blur-md bg-white/10 border border-white/20
              hover:bg-white/20 transition
              flex items-center gap-3
              shadow-lg shadow-cyan-500/20 cursor-pointer
            "
          >
            See my work
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
