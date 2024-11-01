import { motion } from 'framer-motion';
import profilePic from '../assets/Profile.png';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    vidble: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});
export const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35 h-screen'>
            <div className="flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(1)} initial="hidden" animate="vidble"
                            className="pb-2 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Humam Afif</motion.h1>
                        <motion.span variants={container(1.5)} initial="hidden" animate="vidble" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight text-transparent text-4xl bg-clip-text">
                            Web & Mobile Enthusiast
                        </motion.span>
                        <motion.p variants={container(2)} initial="hidden" animate="vidble" className="my-2 max-w-xl py-4 font-light -tracking-tight">
                            I am an Informatics Engineering student at UIN Malang with a passion for Web and Mobile Development. Focused on creating seamless and impactful digital experiences, I am driven by a love for innovation and continuous learning. Let’s connect and build something extraordinary together!</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/3 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                            src={profilePic} alt="" className='rounded-3xl shadow-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}