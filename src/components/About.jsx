import { motion } from 'framer-motion';
import aboutImage from '../assets/About.jpg';

export const About = () => {
    return (
        <div className="border-b border-neutral-900 py-1 h-screen">
            <h2 className="my-20 text-center text-4xl">About
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={aboutImage} alt="" className='rounded-2xl shadow-2xl' />
                    </div>
                </motion.div>
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='flex justify-center lg:justify-start' >
                        <p className='my-2 max-w-xl py-6'>
                            Hello! I am a dedicated Informatics Engineering student at UIN Malang, passionate about the world of Web and Mobile Development. My journey in tech has been shaped by a curiosity for innovative solutions and a commitment to creating intuitive digital experiences. With each project, I strive to merge functionality and creativity, ensuring that every digital product I develop meets both user needs and high standards of quality. Outside of coding, I am always eager to learn and explore new trends in technology.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}