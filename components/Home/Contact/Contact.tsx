"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="pt-24 pb-24" id="contact">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100">
            Let’s connect and build something meaningful
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            I’m open to internships, full-time opportunities, collaborations,
            and technical discussions. Feel free to reach out — I’d love to
            talk.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <BiPhone className="w-7 h-7 text-cyan-300" />
              <span className="text-lg text-gray-300">+91 9356784729</span>
            </div>

            <div className="flex items-center gap-4">
              <BiEnvelope className="w-7 h-7 text-cyan-300" />
              <a
                href="mailto:atharvakhadake759@gmail.com"
                className="text-lg text-gray-300 hover:text-cyan-300 transition"
              >
                atharvakhadake759@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <BiMap className="w-7 h-7 text-cyan-300" />
              <span className="text-lg text-gray-300">
                Pune, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/atharvakhadake/"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-950/60
              flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaLinkedin className="text-white w-5 h-5" />
            </a>

            <a
              href="https://github.com/Atharva759"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-950/60
              flex items-center justify-center hover:bg-gray-700 transition"
            >
              <FaGithub className="text-white w-5 h-5" />
            </a>

            <a
              href="https://leetcode.com/atharvakhadake"
              target="_blank"
              className="w-12 h-12 rounded-full bg-blue-950/60
              flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaCode className="text-white w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="p-6 sm:p-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#363659]
              text-white rounded-md outline-none placeholder:text-white/60"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#363659]
              text-white rounded-md outline-none placeholder:text-white/60"
            />

            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 h-36 bg-[#363659]
              text-white rounded-md outline-none placeholder:text-white/60 resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full font-medium text-white
              bg-blue-700 hover:bg-blue-800 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
