import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import AboutImage from "../assets/About1.webp";

export const About = () => {
  const photoTransition = {
    type: "spring",
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  };
  const textTransition = {
    type: "spring",
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  };

  return (
    <section
      id="about"
      className="relative py-24 border-b border-neutral-900 w-full overflow-visible" // <- jangan hidden
    >
      <h2 className="mb-12 text-center text-4xl">About</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={photoTransition}
          viewport={{ once: true, amount: 0.4 }} // mulai sedikit lebih awal
          className="relative transform-gpu" // render halus
          style={{ willChange: "transform" }}
        >
          <div className="rounded-2xl overflow-hidden bg-transparent">
            <div
              className="h-[420px] w-full animate-rotate-border"
              style={{
                background:
                  "conic-gradient(from var(--border-angle), transparent 0deg, #9333EA 120deg, transparent 240deg)",
              }}
            >
              <img
                src={AboutImage}
                alt="Humam Afif teaching / presenting"
                className="w-full h-[420px] rounded-2xl object-cover p-2"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 left-6 shadow-lg">
            <a
              href="/humamafif-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-white shadow-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              <FaDownload className="animate-bounce" /> My Resume
            </a>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={textTransition}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6 transform-gpu"
          style={{ willChange: "transform" }}
        >
          <p className="text-lg text-gray-200 font-light text-start">
            I am an Informatics Engineering student at UIN Malang with a strong
            focus on Web and Mobile Development, specializing in Flutter and
            React. I combine technical expertise with a user-focused mindset to
            build digital products that are not only functional but also deliver
            a seamless experience. My portfolio includes mobile apps, web
            platforms, and internal systems, where I have contributed in areas
            such as UI/UX implementation and performance optimization. I excel
            in collaborating with cross-functional teams, translating business
            needs into scalable solutions, and delivering projects with high
            attention to detail. I am passionate about continuous learning and
            staying updated with emerging technologies, ensuring that every
            solution I create is relevant, efficient, and impactful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
