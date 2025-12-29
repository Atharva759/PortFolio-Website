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
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl
                      backdrop-blur-lg bg-white/5 border border-white/10
                      shadow-md hover:shadow-cyan-500/20 transition-all duration-300">
        {/* Icon */}
        <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-cyan-900/20 rounded-full flex items-center justify-center">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            {role}
          </h2>

          {/* Date */}
          {date && (
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-xs sm:text-sm text-white font-medium">
              {date}
            </span>
          )}

          {/* Meta */}
          {meta && (
            <div className="flex flex-wrap gap-2 mt-3">
              {meta.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200 text-xs sm:text-sm"
                >
                  <item.icon className="text-cyan-300" />
                  {item.label}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          {desc && (
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
