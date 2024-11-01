import { motion } from "framer-motion"
import experiences from "../constants/experience"
export const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <motion.div whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <h3 className="text-xl font-extrabold ">{exp.title}</h3>
            <p className="text-gray-200 font-extralight">{exp.organization}</p>
            <p className="text-sm text-gray-200 font-extralight">{exp.duration}</p>
            <ul className="list-disc list-inside mt-2 text-gray-400 font-light">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  )
}