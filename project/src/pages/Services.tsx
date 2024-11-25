import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiDatabase, FiSmartphone, FiGlobe, FiServer } from 'react-icons/fi';

interface Service {
  icon: any;
  title: string;
  description: string;
  technologies: string[];
}

const services: Service[] = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern web technologies.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Next.js"]
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description: "Creating robust server-side applications and RESTful APIs.",
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    icon: FiDatabase,
    title: "Database Management",
    description: "Designing and managing databases for optimal performance.",
    technologies: ["MongoDB", "MySQL", "Firebase", "Redis"]
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user experiences.",
    technologies: ["Figma", "Responsive Design", "Material UI", "Framer Motion"]
  },
  {
    icon: FiSmartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications.",
    technologies: ["React Native", "Expo", "Mobile-First Design"]
  },
  {
    icon: FiGlobe,
    title: "Web Optimization",
    description: "Optimizing web applications for performance and SEO.",
    technologies: ["SEO", "Performance", "Analytics", "Web Vitals"]
  }
];

const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20"
  >
    <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
      <service.icon className="w-6 h-6 text-purple-400" />
    </div>
    
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-gray-400 mb-4">{service.description}</p>
    
    <div className="flex flex-wrap gap-2">
      {service.technologies.map((tech) => (
        <span 
          key={tech}
          className="px-2 py-1 text-xs rounded-full bg-purple-500/5 text-purple-400 border border-purple-500/10"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {' '}Services
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer a comprehensive range of web development services, focusing on creating modern, scalable, and user-friendly applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* Code Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <pre className="text-sm text-gray-300 overflow-x-auto">
          <code>
            {`// Example of a service implementation
const createWebApp = async (requirements) => {
  const stack = {
    frontend: ['React', 'TypeScript', 'TailwindCSS'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    deployment: ['Vercel', 'Docker', 'CI/CD']
  };

  const features = [
    'Responsive Design',
    'API Integration',
    'Database Management',
    'Performance Optimization'
  ];

  return {
    result: 'High-quality web application',
    timeline: 'Efficient delivery',
    support: '24/7 maintenance'
  };
};`}
          </code>
        </pre>
      </motion.div>
    </div>
  );
} 