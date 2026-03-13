import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/10 to-black"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-48 h-48 mx-auto relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-30"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-6xl font-bold text-white">
              WJ
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-white">
            {t.hero.title}
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-red-600 mb-6 font-semibold"
        >
          {t.hero.subtitle}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-600 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
          >
            {t.hero.viewProjects}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-red-600 rounded-full text-white font-semibold flex items-center gap-2 hover:bg-red-600/20"
          >
            <FaDownload /> {t.hero.downloadCV}
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://github.com/willy903"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-3xl text-gray-400 hover:text-red-600 transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/willy-jacquino-heriniaina-6b6465111/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-3xl text-gray-400 hover:text-red-600 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-red-600 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
