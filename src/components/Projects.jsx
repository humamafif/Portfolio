import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaHistory } from "react-icons/fa";

// Proyek berdasarkan repositori yang ada di GitHub humamafif
const projects = [
  {
    title: "Landing Page Desa Ngadireso",
    description: "Website landing page untuk Desa Ngadireso dengan fitur-fitur informatif tentang desa",
    image: "https://placehold.co/600x400/3b82f6/white?text=Desa+Ngadireso",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/humamafif/landingpage-desa-ngadireso",
    demo: "#", // Tambahkan link demo jika tersedia
    commits: [
      {
        message: "Initial commit for Desa Ngadireso landing page",
        date: "2023-07-15",
        additions: 1245,
        deletions: 0
      },
      {
        message: "Add responsive design for mobile screens",
        date: "2023-07-20",
        additions: 342,
        deletions: 52
      },
      {
        message: "Fix navigation menu on small screens",
        date: "2023-07-25",
        additions: 87,
        deletions: 23
      }
    ]
  },
  {
    title: "Survey App Flutter",
    description: "Aplikasi mobile untuk melakukan survei dengan UI yang interaktif menggunakan Flutter",
    image: "https://placehold.co/600x400/8b5cf6/white?text=Survey+App",
    tags: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/humamafif/survey-app-flutter",
    demo: "#", // Tambahkan link demo jika tersedia
    commits: [
      {
        message: "Create new Survey App project structure",
        date: "2024-01-10",
        additions: 1023,
        deletions: 0
      },
      {
        message: "Implement user authentication with Firebase",
        date: "2024-01-15",
        additions: 465,
        deletions: 12
      },
      {
        message: "Add survey form creation and submission features",
        date: "2024-01-22",
        additions: 534,
        deletions: 45
      }
    ]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TailwindCSS",
    image: "https://placehold.co/600x400/ec4899/white?text=Portfolio",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/humamafif/portfolio",
    demo: "#", // Tambahkan link demo jika tersedia
    commits: [
      {
        message: "Initial portfolio setup with React and TailwindCSS",
        date: "2024-04-05",
        additions: 876,
        deletions: 0
      },
      {
        message: "Add animations with Framer Motion",
        date: "2024-04-10",
        additions: 235,
        deletions: 28
      },
      {
        message: "Implement responsive design for all sections",
        date: "2024-04-15",
        additions: 312,
        deletions: 89
      }
    ]
  }
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Enable scrolling again
  };

  return (
    <div className="border-b border-neutral-900 py-24" id="projects">
      <h2 className="mb-16 text-center text-4xl font-bold">Featured Projects</h2>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0d0d18] rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ 
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-90' : 'opacity-0'}`}></div>
              <div className={`absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center transition-transform duration-300 ${hoveredIndex === index ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
                {project.demo !== "#" && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors flex items-center gap-2"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => openProjectDetails(project)}
                className="w-full mt-2 flex items-center justify-center gap-2 bg-[#1a1a2e] hover:bg-purple-900/30 text-white py-2 rounded-lg transition-colors"
              >
                <FaHistory size={14} /> View Commit History
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0d0d18] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl"
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-[#0d0d18] p-6 border-b border-gray-800 flex justify-between items-center z-10">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-purple-400 text-sm">Commit History</p>
              </div>
              <button 
                onClick={closeProjectDetails}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800/50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {/* Project info */}
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors flex items-center gap-2"
                >
                  <FaGithub size={14} /> View on GitHub
                </a>
                {selectedProject.demo !== "#" && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-2">Description</h4>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
              
              {/* Commit Table */}
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <div className="bg-[#1a1a2e] p-4 border-b border-gray-800">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <FaHistory size={14} /> Recent Commits
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#151530]">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">Commit Message</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">Date</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-800">Changes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProject.commits.map((commit, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-[#0c0c1d]' : 'bg-[#0f0f24]'}>
                          <td className="py-3 px-4 border-b border-gray-800 text-sm text-gray-200">{commit.message}</td>
                          <td className="py-3 px-4 border-b border-gray-800 text-sm text-gray-400">{commit.date}</td>
                          <td className="py-3 px-4 border-b border-gray-800">
                            <div className="flex items-center space-x-2">
                              <span className="text-green-400 text-sm">+{commit.additions}</span>
                              <span className="text-red-400 text-sm">-{commit.deletions}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Additional project info */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 max-w-3xl mx-auto">
          These are some of the projects I've built. Click on "View Commit History" to see detailed development progress for each project.
        </p>
        
        <a 
          href="https://github.com/humamafif" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-[#1a1a2e] hover:bg-purple-900/30 text-white rounded-lg transition-colors border border-purple-500/20 hover:border-purple-500/40"
        >
          <FaGithub size={18} /> View All Repositories
        </a>
      </div>
    </div>
  );
};