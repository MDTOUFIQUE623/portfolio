import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/MDTOUFIQUE623',
    color: 'hover:text-purple-400'
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/md-toufique-0b2b2b1b9/',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:mdtoufiq6231@outlook.com',
    color: 'hover:text-green-400'
  }
];

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-gray-800 relative">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="absolute -top-5 right-5 p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 text-purple-400 hover:text-white transition-colors"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Section - About */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20"
            >
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white mb-4 inline-block"
              >
                MD TOUFIQUE
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gray-400 max-w-md"
              >
                A passionate full-stack developer focused on creating modern and efficient web solutions.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20"
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-6 rounded-xl bg-[#0a0118]/50 backdrop-blur-sm border border-purple-900/20"
            >
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`text-gray-400 ${social.color} transition-all`}
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 text-sm"
          >
            {new Date().getFullYear()} MD TOUFIQUE. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}