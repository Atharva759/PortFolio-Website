"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "@/constant/contant";
import { TECH_STACK } from "@/constant/techStack";
const cvdrive = process.env.NEXT_PUBLIC_CV_LINK_URL;

const Navbar = () => {
  const ICONS = Object.values(TECH_STACK);
  const [iconIndex, setIconIndex] = useState(0);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % ICONS.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [ICONS.length]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-3 w-full z-10000 transition-all duration-300
         rounded-full border border-white/10 backdrop-blur-2xl bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        "
      >
        <div className="h-[11vh] w-[90%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-15 h-15 rounded-full
     backdrop-blur-xl 
    flex items-center justify-center
    shadow-md overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={iconIndex}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.4 }}
                >
                  {(() => {
                    const {icon:Icon,color} = ICONS[iconIndex];
                    return (<Icon className="w-10 h-10 text-black" style={{color}} />);
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            <span className="hidden sm:block text-xl font-semibold text-white">
              Atharva&apos;s Portfolio
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="relative text-white font-medium group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href={cvdrive}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full
                                      bg-blue-700 hover:bg-blue-800 transition text-white text-sm w-fit"
            >
              <BiDownload className="w-5 h-5" />
              Download CV
            </a>
            <HiBars3BottomRight
              className="w-8 h-8 text-white cursor-pointer lg:hidden"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-9999"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[70%] sm:w-[60%]
              bg-[#0f142e] z-10000 p-8"
            >
              <button
                className="text-white mb-10"
                onClick={() => setOpen(false)}
              >
                ✕ Close
              </button>

              <div className="flex flex-col gap-8">
                {NavLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white hover:text-cyan-300 transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="/Atharva_Khadake_CV_v2.pdf"
                  download
                  className="mt-6 flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-blue-700 hover:bg-blue-800 transition text-white"
                >
                  <BiDownload className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
