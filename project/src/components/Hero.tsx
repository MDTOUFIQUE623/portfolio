import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const FloatingShape = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-3xl ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% auto' }}
            >
              MD TOUFIQUE
            </motion.span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-400">Full Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl mb-12"
          >
            Transforming ideas into elegant digital solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button 
              onClick={() => navigate('/portfolio')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white flex items-center justify-center gap-2 group cursor-pointer"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500 rounded-lg text-white hover:bg-purple-500/10 transition-colors cursor-pointer"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="h-[500px] relative"
        >
          {/* Decorative shapes */}
          <FloatingShape className="w-64 h-64 top-10 right-10" />
          <FloatingShape className="w-48 h-48 bottom-20 left-10 rotate-45" />
          
          {/* Code snippet display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute inset-10 rounded-xl bg-gray-900/50 backdrop-blur-sm p-6 border border-gray-700/50 overflow-hidden"
          >
            <pre className="text-sm text-gray-300">
              <code>
                {`const Developer = {
  name: "MD TOUFIQUE",
  role: "Full Stack Developer",
  skills: [
    "React", "TypeScript",
    "Node.js", "Next.js",
    "MongoDB", "TailwindCSS"
  ],
  passion: "Building scalable web apps",
  
  code: () => {
    while (true) {
      learn();
      create();
      innovate();
    }
  }
};`}
              </code>
            </pre>
            
            {/* Glowing dots */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}