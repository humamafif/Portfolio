import { motion } from "framer-motion";
import { RiReactjsFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { SiExpress, SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const iconVariants = (duration) => ({
    hidden: { y: -10, opacity: 0 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(Math.random() * (3 - 2) + 2)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiFlutterFill className="text-7xl text-sky-700"></RiFlutterFill>
                </motion.div>
                <motion.div
                    variants={iconVariants(Math.random() * (2 - 1) + 1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiExpress className="text-7xl text-white"></SiExpress>
                </motion.div>
                <motion.div variants={iconVariants(Math.random() * (3 - 2) + 2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsFill className="text-7xl text-cyan-500"></RiReactjsFill>
                </motion.div>
                <motion.div variants={iconVariants(Math.random() * (2 - 1) + 1)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-amber-600"></SiMysql>
                </motion.div>
                <motion.div variants={iconVariants(Math.random() * (3 - 2) + 2)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPrisma className="text-7xl text-white" ></SiPrisma>
                </motion.div>
            </div>
        </div>
    )
}