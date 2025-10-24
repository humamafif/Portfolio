import { motion, useReducedMotion } from "framer-motion";
import { RiFlutterFill, RiReactjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

const DURATION = 5.0;
const AMPLITUDE = 12;

const iconVariants = (dir, prefersReduced) => ({
  initial: { y: 0 },
  animate: {
    y: prefersReduced
      ? 0
      : dir === "up"
      ? [0, -AMPLITUDE, 0, AMPLITUDE, 0]
      : [0, AMPLITUDE, 0, -AMPLITUDE, 0],
    transition: prefersReduced
      ? { duration: 0.3 }
      : {
          duration: DURATION,
          ease: "linear",
          repeat: Infinity,
        },
  },
});

export const Technologies = () => {
  const prefersReduced = useReducedMotion();
  const ICONS = [
    { el: RiFlutterFill, className: "text-sky-500" },
    { el: RiReactjsFill, className: "text-cyan-400" },
    { el: SiExpress, className: "text-white" },
    { el: SiLaravel, className: "text-red-500" },
    { el: SiTailwindcss, className: "text-sky-400" },
    { el: SiMysql, className: "text-amber-500" },
    { el: SiFirebase, className: "text-yellow-400" },
    { el: SiSupabase, className: "text-green-500" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24 mx-auto flex-col flex">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {ICONS.map(({ el: Icon, className }, idx) => {
          const dir = idx % 2 === 0 ? "up" : "down"; // genap: up, ganjil: down
          return (
            <motion.div
              key={idx}
              variants={iconVariants(dir, prefersReduced)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <Icon className={`text-7xl ${className}`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
