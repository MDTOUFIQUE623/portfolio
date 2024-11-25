import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Passpic",
    description: "Passpic lets you get your passport ready picture in seconds",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "React", "Node.js"],
    githubLink: "https://github.com/MDTOUFIQUE623/passpic",
    liveLink: "https://passpic1.vercel.app"
  },
  {
    title: "Cake Web",
    description: "A modern web application for cake ordering and customization",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "React", "Node.js"],
    githubLink: "https://github.com/MDTOUFIQUE623/cake-web"
  }
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-[#0a0118]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/20"
  >
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/50 to-transparent" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-purple-500/5 text-purple-400 border border-purple-500/10"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FiGithub />
            <span>Code</span>
          </a>
        )}
        {project.liveLink && (
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FiExternalLink />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Recent
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {' '}Projects
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project is unique and demonstrates different aspects of my skills and expertise.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Simplified GitHub Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="p-6 rounded-xl bg-[#0a0118]/80 backdrop-blur-sm border border-purple-900/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
            <motion.a
              href="https://github.com/MDTOUFIQUE623"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 bg-purple-500/5 px-4 py-2 rounded-lg border border-purple-500/10"
            >
              <FiGithub className="w-5 h-5" />
              <span>@MDTOUFIQUE623</span>
            </motion.a>
          </div>
          
          {/* GitHub Activity Graph */}
          <div className="rounded-xl overflow-hidden bg-[#0a0118] p-6 mb-6 border border-purple-900/20">
            <img 
              src="https://ghchart.rshah.org/0e4429/MDTOUFIQUE623" 
              alt="MD TOUFIQUE's GitHub Contribution Graph"
              className="w-full mix-blend-lighten"
              style={{
                filter: 'brightness(0.8) contrast(1.2) hue-rotate(230deg)',
                backgroundColor: '#0a0118',
              }}
            />
            <style>
              {`
                rect[data-level="0"] {
                  fill: #161b22 !important;
                }
              `}
            </style>
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            whileHover={{ y: -2 }}
            className="flex justify-center"
          >
            <a
              href="https://github.com/MDTOUFIQUE623"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl border border-purple-500/20 text-white transition-all duration-300 group"
            >
              <FiGithub className="w-6 h-6 group-hover:text-purple-400" />
              <span className="font-bold group-hover:text-purple-400 transition-colors">View GitHub Profile</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}