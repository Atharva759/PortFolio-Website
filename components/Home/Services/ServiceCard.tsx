"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  icon: string;
  name: string;
  desc: string;
};

const ServiceCard = ({ icon, name, desc }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md
      border border-white/10 hover:border-cyan-400/40
      shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <Image src={icon} width={55} height={55} alt={name} />

      <h1 className="mt-6 text-xl md:text-2xl font-semibold text-white">
        {name}
      </h1>

      <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
