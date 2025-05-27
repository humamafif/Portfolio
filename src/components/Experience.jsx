import { motion } from "framer-motion"
import experiences from "../constants/experience"
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa"

export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-500 hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#13131f] z-10"></div>
              
              {/* Content */}
              <div className="ml-0 md:ml-16 bg-[#13131f] border border-gray-800 hover:border-purple-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-xl font-extrabold text-white">{exp.title}</h3>
                  <div className="hidden md:block h-2 w-2 rounded-full bg-gray-500"></div>
                  <p className="text-gray-200 font-medium">{exp.organization}</p>
                </div>
                
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <FaCalendarAlt className="text-sm" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <p className="text-gray-300">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}