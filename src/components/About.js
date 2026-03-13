import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-red-600/20"
            >
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                {t.about.description1}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-red-600/20"
            >
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                {t.about.description2}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: FaMapMarkerAlt, label: t.about.location, value: t.about.locationValue },
              { icon: FaEnvelope, label: t.about.email, value: t.about.emailValue },
              { icon: FaPhone, label: t.about.phone, value: t.about.phoneValue }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-red-600/20 hover:border-red-600/50 transition-all"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600">
                  <item.icon className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white text-lg font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-red-600/10 backdrop-blur-sm border border-red-600/30 overflow-hidden"
            >
              <p className="text-center text-2xl font-bold text-red-600 relative z-10">
                {t.about.cta}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
