import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fungsi untuk scroll instan
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Gunakan scrollIntoView dengan behavior: 'auto' untuk scroll instan
            element.scrollIntoView({ behavior: 'auto' });
            setMobileMenuOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <>
            <motion.nav 
                className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md ${
                    scrolled ? 'bg-[#0a0a0a99]' : 'bg-transparent'
                } transition-all duration-300 mx-auto max-w-7xl`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center">
                    <button 
                        onClick={() => scrollToSection('home')}
                        className="px-2 text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 cursor-pointer"
                    >
                        humamafif
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer text-sm font-medium">About</button>
                    <button onClick={() => scrollToSection('technologies')} className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer text-sm font-medium">Technologies</button>
                    <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer text-sm font-medium">Projects</button>
                    <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer text-sm font-medium">Experience</button>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer text-sm font-medium">Contact</button>
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex items-center justify-center gap-4 text-xl text-white">
                    <a href="https://linkedin.com/in/humam-afif-al-mahbubi-98522024b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/humamafif" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com/humamafif__" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                        <FaInstagram />
                    </a>
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileMenuOpen ? 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                    </svg>
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0aee] backdrop-blur-md border-b border-gray-800 md:hidden"
                >
                    <div className="flex flex-col py-4 px-6 space-y-3">
                        <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors">About</button>
                        <button onClick={() => scrollToSection('technologies')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors">Technologies</button>
                        <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors">Projects</button>
                        <button onClick={() => scrollToSection('github-activity')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors">GitHub Activity</button>
                        <button onClick={() => scrollToSection('experience')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors">Experience</button>
                        <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-300 hover:text-purple-400 transition-colors">Contact</button>
                        {/* ...existing social icons... */}

                        <div className="flex items-center gap-4 pt-2 text-xl text-white">
                            <a href="https://linkedin.com/in/humam-afif-al-mahbubi-98522024b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/humamafif" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                                <FaGithub />
                            </a>
                            <a href="https://instagram.com/humamafif__" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};