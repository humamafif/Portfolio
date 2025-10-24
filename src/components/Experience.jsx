import { motion } from "framer-motion";
import experiences from "../constants/experience";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useState, useMemo } from "react";

export const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  // Sort biar yang terbaru di atas
  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const getYear = (duration) =>
        parseInt(duration.split("–")[0].trim().split(" ").pop());
      return getYear(b.duration) - getYear(a.duration);
    });
  }, []);

  const displayedExperiences = showAll
    ? sortedExperiences
    : sortedExperiences.slice(0, 2);

  return (
    <div className="border-b border-neutral-900 pb-24 flex flex-col">
      <h2 className="my-20 text-center text-4xl">Experience</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-500" />

        <div className="space-y-12">
          {displayedExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#13131f] z-10" />

              {/* Card */}
              <div className="ml-16 bg-[#13131f] border border-gray-800 hover:border-purple-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-xl font-extrabold text-white">
                    {exp.title}
                  </h3>
                  <div className="hidden md:block h-2 w-2 rounded-full bg-gray-500" />
                  <p className="text-gray-200 font-medium">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <FaCalendarAlt className="text-sm" />
                  <span className="text-sm">{exp.duration}</span>
                </div>

                {Array.isArray(exp.roles) && exp.roles.length > 0 ? (
                  <div className="space-y-4">
                    {exp.roles.map((role, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-gray-800/60 p-4"
                      >
                        <div className="flex items-start md:items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-white font-semibold">
                            <FaBriefcase className="opacity-80" />
                            <span>{role.position}</span>
                          </div>
                          <span className="text-xs text-gray-400">
                            {role.period}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-300">{role.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {exp.description?.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                        <p className="text-gray-300">{desc}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / less button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            {showAll ? "Show Less" : "Show All Experience"}
          </button>
        </div>
      </div>
    </div>
  );
};
