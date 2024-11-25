import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiGitBranch } from 'react-icons/fi';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20 hover:border-purple-500/20 transition-colors"
  >
    <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-purple-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function About() {
  const features = [
    {
      icon: FiCode,
      title: "Web Development",
      description: "Building modern web applications with React, Next.js, and TypeScript."
    },
    {
      icon: FiServer,
      title: "Backend",
      description: "Creating robust APIs and server-side solutions with Node.js."
    },
    {
      icon: FiLayout,
      title: "UI/UX",
      description: "Designing intuitive interfaces with TailwindCSS and Framer Motion."
    },
    {
      icon: FiGitBranch,
      title: "Version Control",
      description: "Managing code with Git, following best practices and workflows."
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          About
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {' '}Me
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A passionate full-stack developer crafting modern web experiences
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>

      {/* Code Preview with TypeScript types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <pre className="text-sm text-gray-300 overflow-x-auto">
          <code>
            {`interface Developer {
  name: string;
  age: number;
  skills: string[];
  focus: string;
}

const me: Developer = {
  name: "MD TOUFIQUE",
  age: 19,
  skills: [
    "React", "TypeScript",
    "Node.js", "Next.js",
    "MongoDB", "TailwindCSS"
  ],
  focus: "Building scalable web apps"
};`}
          </code>
        </pre>
      </motion.div>
    </section>
  );
}