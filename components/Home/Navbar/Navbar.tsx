"use client";
import { FaCode } from "react-icons/fa";
import { NavLinks } from "@/constant/contant";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-10000 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/*LOGO*/}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            ATHARVA
          </h1>
        </div>
        {/*Navlinks*/}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
              >
                <p> {link.label}</p>
              </Link>
            );
          })}
        </div>
        {/*buttons*/}
        <div className="flex items-center space-x-4">
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
          {/*Burger Menu*/}
          <HiBars3BottomRight
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      {/*Mobile Nav*/}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[60%] bg-[#0f142e] z-10001 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-8 space-y-8">
          <button
            className="text-white text-right"
            onClick={() => setOpen(false)}
          >
            ✕ Close
          </button>
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
          <button className="mt-6 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-transparent z-10000"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
