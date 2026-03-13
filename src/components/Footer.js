import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2026 HERINIAINA WILLY JACQUINO – Full Stack Developer
          </p>
          <motion.p
            className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2"
          >
            Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span> using React & Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
