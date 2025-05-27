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
        <div className='border-b border-neutral-900/50 pb-16 pt-40 flex items-center min-h-screen'>
            <div className="flex flex-wrap justify-between items-center w-full">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                            variants={container(1)} 
                            initial="hidden" 
                            animate="vidble"
                            className="pb-2 text-5xl md:text-6xl font-thin tracking-tight lg:text-7xl text-white"
                        >
                            Humam Afif
                        </motion.h1>
                        <motion.span 
                            variants={container(1.5)} 
                            initial="hidden" 
                            animate="vidble" 
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight text-transparent text-2xl md:text-3xl lg:text-4xl bg-clip-text font-medium"
                        >
                            Web & Mobile Enthusiast
                        </motion.span>
                        <motion.p 
                            variants={container(2)} 
                            initial="hidden" 
                            animate="vidble" 
                            className="my-2 max-w-xl py-6 font-light tracking-tight text-gray-300 text-center lg:text-left"
                        >
                            I am an Informatics Engineering student at UIN Malang with a passion for Web and Mobile Development. Focused on creating seamless and impactful digital experiences, I am driven by a love for innovation and continuous learning. Let's connect and build something extraordinary together!
                        </motion.p>
                        
                        <motion.div
                            variants={container(2.5)}
                            initial="hidden"
                            animate="vidble"
                            className="flex gap-4 mt-2"
                        >
                            <button 
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'auto' })}
                                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-purple-500/25"
                            >
                                Contact Me
                            </button>
                            <button 
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'auto' })}
                                className="px-6 py-3 border border-purple-500/30 text-white rounded-lg hover:bg-purple-500/10 transition-all"
                            >
                                View Projects
                            </button>
                        </motion.div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3 mt-16 lg:mt-0'>
                    <div className='flex justify-center'>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                            className="relative"
                        >
                            {/* Enhanced glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <img 
                                src={profilePic} 
                                alt="Humam Afif" 
                                className='rounded-full shadow-2xl relative z-10 border-2 border-purple-500/20 max-w-full h-auto' 
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}