import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  created_at: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

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

// Add loading skeleton component
const LoadingSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((n) => (
      <motion.div
        key={n}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#0a0118]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/20"
      >
        <div className="aspect-video bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse" />
        <div className="p-6 space-y-4">
          <div className="h-4 w-3/4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded animate-pulse" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-6 w-16 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"
              />
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// Add error state component
const ErrorState = ({ message }: { message: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center py-12"
  >
    <div className="mb-4 text-red-400">
      <svg
        className="w-16 h-16 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
    <p className="text-red-400 text-lg font-medium mb-2">{message}</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.location.reload()}
      className="text-purple-400 hover:text-purple-300 transition-colors"
    >
      Try Again
    </motion.button>
  </motion.div>
);

export default function Portfolio() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MDTOUFIQUE623/repos');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        
        const data = await response.json();
        // Sort by creation date, newest first
        const sortedRepos = data.sort((a: Repository, b: Repository) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        
        // Convert GitHub repos to project format
        const projects = sortedRepos.map((repo: Repository) => ({
          title: repo.name,
          description: repo.description || 'No description available',
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          technologies: repo.topics.length > 0 ? repo.topics : ['Not specified'],
          githubLink: repo.html_url,
          liveLink: repo.homepage || undefined
        }));

        setRepos(projects);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Function to refresh GitHub activity
  const refreshActivity = () => {
    const activityImg = document.getElementById('github-activity') as HTMLImageElement;
    if (activityImg) {
      // Add timestamp to force refresh
      activityImg.src = `https://ghchart.rshah.org/0e4429/MDTOUFIQUE623?${Date.now()}`;
    }
  };

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
          Here are my latest projects from GitHub, automatically updated as I create new repositories.
        </p>
      </motion.div>

      {loading ? (
        <LoadingSkeleton />
      ) : error ? (
        <ErrorState message={error} />
      ) : repos.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">No repositories found.</p>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo: Repository) => {
            const project: Project = {
              title: repo.name,
              description: repo.description || 'No description available',
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
              technologies: repo.topics.length > 0 ? repo.topics : ['Not specified'],
              githubLink: repo.html_url,
              liveLink: repo.homepage || undefined
            };
            return <ProjectCard key={project.title} project={project} />;
          })}
        </div>
      )}

      {/* GitHub Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="p-6 rounded-xl bg-[#0a0118]/80 backdrop-blur-sm border border-purple-900/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
            <div className="flex items-center gap-4">
              <motion.button
                onClick={refreshActivity}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Refresh
              </motion.button>
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
          </div>
          
          <div className="rounded-xl overflow-hidden bg-[#0a0118] p-6 mb-6 border border-purple-900/20">
            <img 
              id="github-activity"
              src={`https://ghchart.rshah.org/0e4429/MDTOUFIQUE623?${Date.now()}`}
              alt="MD TOUFIQUE's GitHub Contribution Graph"
              className="w-full mix-blend-lighten"
              style={{
                filter: 'brightness(0.8) contrast(1.2) hue-rotate(230deg)',
                backgroundColor: '#0a0118',
              }}
            />
          </div>

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