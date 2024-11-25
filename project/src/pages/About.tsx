import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        About
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          {' '}Me
        </span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <p className="text-gray-300">
            I'm a 19-year-old passionate developer with a strong drive for creating innovative web solutions. My journey in coding started early, and I've been constantly learning and growing in the world of web development.
          </p>
          <p className="text-gray-300">
            I specialize in modern web technologies like React, TypeScript, and Three.js, combining technical expertise with creative design to build engaging digital experiences.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '10+', text: 'Projects Completed' },
              { number: '1+', text: 'Years Coding' },
              { number: '5+', text: 'Technologies' },
              { number: '8+', text: 'Happy Clients' }
            ].map((stat) => (
              <div key={stat.text} className="text-center glass-effect p-4 rounded-xl">
                <div className="text-3xl font-bold text-purple-400">{stat.number}</div>
                <div className="text-gray-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative h-[400px] rounded-xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            alt="Developer Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#030014]/80 via-transparent to-transparent" />
        </motion.div>
      </div>
    </div>
  );
} 