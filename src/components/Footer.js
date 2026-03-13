import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="relative py-8 border-t border-red-600/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            {t.footer.copyright}
          </p>
          <motion.p
            className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2"
          >
            {t.footer.madeWith} <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-600" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
