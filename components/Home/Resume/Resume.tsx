"use client";

import React from "react";
import { FaBook, FaDatabase, FaGraduationCap, FaPercentage } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="w-[90%] sm:w-[70%] mx-auto">

        {/* EXPERIENCE */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            My <span className="text-cyan-200">Experience</span>
          </h1>

          <ResumeCard
            Icon={FaDatabase}
            role="Machine Learning Intern – Baellchen Technologies"
            date="Sep 2025 – Nov 2025"
            desc="Built a demand forecasting system using a hybrid machine learning approach combining Transformer models with XGBoost. Designed and deployed a robust end-to-end pipeline that handled data preprocessing, feature engineering, model inference, and prediction delivery, enabling accurate and scalable forecasting for real-world datasets."
          />
        </div>

        {/* EDUCATION */}
        <div className="mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <ResumeCard
            Icon={BiBadge}
            role="B.Tech – Electronics & Telecommunication Engineering, VIIT Pune"
            date="Aug 2023 – May 2027"
            meta={[
              { icon: FaGraduationCap, label: "CGPA: 8.79" },
            ]}
            desc="Relevant coursework includes Data Structures, Object-Oriented Programming, Operating Systems, Machine Learning and Design & Analysis of Algorithms."
          />

          <ResumeCard
            Icon={FaBook}
            role="Higher Secondary Certificate (HSC) – Maharashtra Board"
            date="Jun 2021 – Mar 2023"
            meta={[
              { icon: FaPercentage, label: "77.67%" },
            ]}
            desc="Completed higher secondary education with a focus on science and mathematics."
          />
        </div>

      </div>
    </section>
  );
};

export default Resume;
