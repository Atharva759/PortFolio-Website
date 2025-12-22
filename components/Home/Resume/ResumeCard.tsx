import React from "react";
import { IconType } from "react-icons";

type MetaItem = {
  icon: IconType;
  label: string;
};

type Props = {
  Icon: IconType;
  role: string;
  date?: string;
  desc?: string;
  meta?: MetaItem[];
};

const ResumeCard = ({ Icon, role, date, desc, meta }: Props) => {
  return (
    <div className="mb-8">
      <div className="flex items-start space-x-6 bg-blue-950/20 hover:bg-blue-950/30 transition-all duration-300 p-4 sm:p-8 rounded-xl">
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
          <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-cyan-200" />
        </div>

        <div className="flex-1">
          <h1 className="text-gray-100 text-xl sm:text-2xl font-semibold">
            {role}
          </h1>

          {/* Date */}
          {date && (
            <div className="mt-3">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-900/60 text-cyan-200 text-xs sm:text-sm font-medium">
                {date}
              </span>
            </div>
          )}

          {/* Meta Info (CGPA / Percentage) */}
          {meta && (
            <div className="flex flex-wrap gap-3 mt-4">
              {meta.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 rounded-full
                  bg-white/5 border border-white/10 text-gray-200
                  text-xs sm:text-sm"
                >
                  <item.icon className="text-cyan-300" />
                  {item.label}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {desc && (
            <p className="text-gray-300 text-sm sm:text-base pt-4 leading-relaxed">
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
