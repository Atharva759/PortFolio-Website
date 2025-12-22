import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900/20 border-t border-white/10">
      <div className="w-[90%] md:w-[80%] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-white/60 text-center sm:text-left">
          © {new Date().getFullYear()} Atharva Khadake. All rights reserved.
        </p>

        <p className="text-sm text-white/60">
          Built with <span className="text-cyan-300">Next.js</span> &{" "}
          <span className="text-cyan-300">TypeScript</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
