"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constant/techStack"; 

type TechKey = keyof typeof TECH_STACK;

type Props = {
  tech: TechKey;
  name: string;
  desc: string;
};

const ServiceCard = ({ tech, name, desc }: Props) => {
  const { icon: Icon, color } = TECH_STACK[tech];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className="
        group relative h-full overflow-hidden rounded-2xl p-8
        backdrop-blur-xl bg-white/4
        border border-white/10
        transition-all duration-300
      "
    >
      {/* Colored glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(circle at top right, ${color}33, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className="
          relative w-14 h-14 flex items-center justify-center rounded-xl
          bg-white/5 border border-white/10
        "
      >
        <Icon
          className="w-7 h-7 transition-transform group-hover:scale-110"
          style={{ color }}
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {desc}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
