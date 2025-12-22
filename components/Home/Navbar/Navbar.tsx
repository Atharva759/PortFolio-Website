"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks } from "@/constant/contant";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        className={`fixed top-0 w-full z-10000 transition-all duration-300
        ${
          scrolled
            ? "bg-[#0f142ed9] backdrop-blur-lg shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="h-[11vh] w-[90%] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <FaCode className="text-black w-5 h-5" />
            </div>
            <h1 className="hidden sm:block text-2xl font-bold text-white tracking-wide">
              ATHARVA
            </h1>
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
              href="/Atharva_Khadake_CV_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-lg
              bg-blue-700 hover:bg-blue-800 transition text-white text-sm"
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
