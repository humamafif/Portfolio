import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectsData } from "../constants/projects";

export const Projects = () => {
  const projects = ProjectsData.projects;
  const categories =
    ProjectsData.categories && ProjectsData.categories.length > 0
      ? ProjectsData.categories
      : Array.from(new Set(projects.map((p) => p.category))).sort();

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const preferredTop3 = useMemo(
    () => ["IT Feedback", "Desa Ngadireso", "VS Code Theme"],
    []
  );

  useEffect(() => {
    setShowAll(false);
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === filter));
    }
  }, [filter, projects]);

  const displayedProjects = useMemo(() => {
    if (filter !== "all" || showAll) return filteredProjects;

    const mapByTitle = new Map(filteredProjects.map((p) => [p.title, p]));
    const top = preferredTop3.map((t) => mapByTitle.get(t)).filter(Boolean);
    return top;
  }, [filter, showAll, filteredProjects, preferredTop3]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="border-b border-neutral-900 pb-24 flex flex-col">
      <div className="container mx-auto px-4">
        <div className="my-20">
          <h2 className=" text-center text-4xl">Projects</h2>
          {/* Filter by Category */}
          <div className="my-5">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  filter === "all"
                    ? "bg-purple-600 text-white"
                    : "bg-[#1a1a2e] text-gray-300 hover:bg-purple-900/30"
                }`}
              >
                All
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                    filter === cat
                      ? "bg-purple-600 text-white"
                      : "bg-[#1a1a2e] text-gray-300 hover:bg-purple-900/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="bg-gradient-to-b from-[#0d0d18] to-[#0a0a14] rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image || (project.images?.[0] ?? "")}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1a1a2e] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-colors flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={12} /> Link
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.type && (
                    <span className="text-[10px] italic tracking-wide text-purple-200 px-2 py-0.5 rounded">
                      {project.type}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tech_stack || []).slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.tech_stack || []).length > 3 && (
                    <span className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full">
                      +{project.tech_stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-16 bg-[#0d0d18] rounded-xl mt-8">
            <p className="text-gray-400">
              No projects match the selected category.
            </p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Show All
            </button>
          </div>
        )}

        {/* Toggle Show All (only for All filter) */}
        {filter === "all" && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              {showAll ? "Show Less" : "Show All Projects"}
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-[#0d0d18] to-[#0a0a14] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* header */}
              <div className="sticky top-0 bg-[#0d0d18] p-6 border-b border-gray-800 flex justify-between items-start z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-purple-400 text-sm">
                    {selectedProject.category}
                    {selectedProject.type ? ` • ${selectedProject.type}` : ""}
                  </p>
                </div>
                <motion.button
                  onClick={closeProjectDetails}
                  className="text-gray-400 hover:text-white rounded-full transition-colors"
                  whileHover={{ rotate: 180 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  ✕
                </motion.button>
              </div>

              {/* body */}
              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={
                      selectedProject.image ||
                      (selectedProject.images?.[0] ?? "")
                    }
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg mb-6"
                  />

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(selectedProject.tech_stack || []).map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6 flex-wrap">
                    {selectedProject.repo && (
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors flex items-center gap-2"
                      >
                        <FaGithub size={14} /> GitHub
                      </a>
                    )}
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <FaExternalLinkAlt size={12} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Description
                  </h4>
                  {Array.isArray(selectedProject.description) ? (
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      {selectedProject.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300">
                      {selectedProject.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
