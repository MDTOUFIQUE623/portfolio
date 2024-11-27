import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="py-5">
      <div className="flex justify-between items-center">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-2xl font-bold"
          >
            My Portfolio
          </motion.div>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <motion.span
                className={`text-gray-300 hover:text-white transition-colors ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              <div className="py-2 text-gray-300 hover:text-white transition-colors">
                {item.name}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}