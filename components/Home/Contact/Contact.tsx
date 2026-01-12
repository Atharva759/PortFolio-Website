'use client';

import { BiEnvelope, BiMap, BiDownload } from "react-icons/bi";
import { SiCodeforces } from "react-icons/si";

const cvdrive = process.env.NEXT_PUBLIC_CV_LINK_URL;

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-24 pb-24 min-h-screen flex items-center justify-center"
    >
      <div className="w-[90%] md:w-[80%] lg:w-[70%] text-center space-y-10">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100">
          Let’s connect and build something <span className="text-cyan-300">meaningful</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          I’m open to internships, full-time opportunities, collaborations, and technical discussions. Feel free to reach out—I’d love to talk.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
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
            <span className="text-lg text-gray-300">Pune, Maharashtra, India</span>
          </div>

          {cvdrive && (
            <a
              href={cvdrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-cyan-700 hover:bg-cyan-600 transition text-white text-sm"
            >
              <BiDownload className="w-5 h-5" />
              Download CV
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/atharvakhadake/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-blue-950/60 border border-white/10
                       hover:bg-cyan-700 transition"
          >
            <svg viewBox="0 0 128 128" className="w-8 h-8">
              <path fill="#0076b2" d="M116 3H12a9 9 0 00-9 8.8v104.42A9 9 0 0012 125h104a9 9 0 009-8.81V11.77A9 9 0 00116 3z" />
              <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 110 21 10.5 10.5 0 010-21M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
            </svg>
            <span className="font-bold text-xl text-white">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Atharva759"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-blue-950/60 border border-white/10
                       hover:bg-gray-700 transition"
          >
            <svg viewBox="0 0 128 128" className="w-8 h-8">
              <path fill="#fff" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" />
            </svg>
            <span className="font-bold text-xl text-white">GitHub</span>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/atharvakhadake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-blue-950/60 border border-white/10
                       hover:bg-gray-700 transition"
          >
            <svg viewBox="0 0 128 128" className="w-8 h-8">
              <path fill="#e7a41f" d="M18.79 96.996L41.793 120.26c5.19 5.221 12.363 7.744 20.283 7.744s15.094-2.73 20.294-7.968l13.803-14.065c2.72-2.741 2.624-7.28-.208-10.133-2.832-2.854-7.333-2.95-10.048-.208L71.645 109.53c-2.465 2.49-5.878 3.53-9.649 3.53s-7.179-1.04-9.653-3.53L29.419 86.26c-2.47-2.49-3.712-6.133-3.712-9.936s1.243-7.238 3.712-9.728l22.854-23.361c2.47-2.49 5.952-3.44 9.718-3.44s7.179 1.04 9.648 3.53l14.273 13.9c2.72 2.746 7.221 2.65 10.053-.203 2.832-2.859 2.928-7.398.208-10.14L82.37 32.825a26.64 26.64 0 0 0-12.758-7.094l-.18-.037 13.05-13.35c2.73-2.741 2.635-7.285-.197-10.139S74.945-.74 72.22 2.002L18.79 55.87c-5.19 5.237-7.905 12.464-7.905 20.454S13.6 91.77 18.79 96.996"></path>
            </svg>
            <span className="font-bold text-xl text-white">LeetCode</span>
          </a>

          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/atharvakhadake759"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-blue-950/60 border border-white/10
                       hover:bg-gray-700 transition"
          >
            <SiCodeforces className="w-8 h-8 text-white" />
            <span className="font-bold text-xl text-white">Codeforces</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
