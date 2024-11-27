import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Passpic",
    description: "Passpic lets you get your passport ready picture in seconds. A web application for quick passport photo processing.",
    technologies: ["JavaScript", "React", "Image Processing"],
    github: "https://github.com/MDTOUFIQUE623/passpic",
    live: "https://passpic1.vercel.app",
    gradient: "from-purple-500/10 to-blue-500/10"
  },
  {
    title: "Cake Web",
    description: "A modern web application for a cake shop, featuring a beautiful UI and responsive design.",
    technologies: ["JavaScript", "React", "TailwindCSS"],
    github: "https://github.com/MDTOUFIQUE623/cake-web",
    live: "#",
    gradient: "from-blue-500/10 to-green-500/10"
  },
  {
    title: "Portfolio",
    description: "A modern portfolio website built with React, TypeScript, and Three.js for 3D elements.",
    technologies: ["TypeScript", "React", "Three.js", "TailwindCSS"],
    github: "https://github.com/MDTOUFIQUE623/portfolio",
    live: "#",
    gradient: "from-green-500/10 to-purple-500/10"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {' '}Portfolio
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects showcasing my skills and experience
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
          >
            <div className={`h-48 relative bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8`}>
              <div className="text-6xl text-white/20">✨</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <FiGithub />
                  GitHub
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}