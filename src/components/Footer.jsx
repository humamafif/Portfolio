import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-neutral-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white">Humam Afif</h2>
            <p className="text-gray-400 mt-2">Web & Mobile Enthusiast</p>
          </div>
            <a href="mailto:afifalmahbubi04@gmail.com" className="text-gray-400 hover:text-white transition-colors">afifalmahbubi04@gmail.com</a>
          
          <div className="flex space-x-6 text-xl">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/humamafif" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© {currentYear} Humam Afif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};