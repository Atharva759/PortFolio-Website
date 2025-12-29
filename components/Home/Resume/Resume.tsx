"use client";

import {
  FaBook,
  FaDatabase,
  FaGraduationCap,
  FaPercentage,
} from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section className="relative pt-28 pb-32 overflow-hidden" id="about">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-175 bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 w-[90%] sm:w-[75%] mx-auto">
        {/* ABOUT */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-6 w-1 bg-cyan-400 rounded-full" />
            <h2 className="text-sm uppercase tracking-widest text-cyan-300">
              About
            </h2>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-8">
            A little about <span className="text-cyan-300">me</span>
          </h1>

          <div className="space-y-5 max-w-3xl">
            <p className="text-white/80 text-lg leading-relaxed">
              I’m a B.Tech student and an aspiring{" "}
              <span className="text-cyan-300 font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong interest in{" "}
              <span className="text-cyan-300 font-medium">
                Machine Learning
              </span>{" "}
              and scalable systems.
            </p>

            <p className="text-white/75 text-lg leading-relaxed">
              I enjoy working across the stack, exploring new technologies, and
              building solutions that create real-world impact with clean,
              maintainable architecture.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              I’m driven by continuous learning, collaboration, and solving
              technically challenging problems.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-6 w-1 bg-cyan-400 rounded-full" />
            <h2 className="text-sm uppercase tracking-widest text-cyan-300">
              Experience
            </h2>
          </div>

          <ResumeCard
            Icon={FaDatabase}
            role="Machine Learning Intern – Baellchen Technologies"
            date="Sep 2025 – Nov 2025"
            desc="Built a demand forecasting system using a hybrid machine learning approach combining Transformer models with XGBoost. Designed and deployed a robust end-to-end pipeline covering preprocessing, feature engineering, inference, and prediction delivery."
          />
        </section>

        {/* EDUCATION */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-6 w-1 bg-cyan-400 rounded-full" />
            <h2 className="text-sm uppercase tracking-widest text-cyan-300">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            <ResumeCard
              Icon={BiBadge}
              role="B.Tech – Electronics & Telecommunication Engineering, VIIT Pune"
              date="Aug 2023 – May 2027"
              meta={[{ icon: FaGraduationCap, label: "CGPA: 8.79" }]}
              desc="Relevant coursework includes Data Structures, OOP, Operating Systems, Machine Learning, and Design & Analysis of Algorithms."
            />

            <ResumeCard
              Icon={FaBook}
              role="Higher Secondary Certificate (HSC) – Maharashtra Board"
              date="Jun 2021 – Mar 2023"
              meta={[{ icon: FaPercentage, label: "77.67%" }]}
              desc="Completed higher secondary education with a strong foundation in science and mathematics."
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Resume;
