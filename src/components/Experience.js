import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const experiences = [
    {
      type: 'work',
      title: t.experience.work1.title,
      role: t.experience.work1.role,
      period: t.experience.work1.period,
      description: t.experience.work1.description,
      icon: FaBriefcase
    }
  ];

  const education = [
    {
      type: 'education',
      institution: t.experience.edu1.institution,
      degree: t.experience.edu1.degree,
      period: t.experience.edu1.period,
      description: t.experience.edu1.description,
      icon: FaGraduationCap
    },
    {
      type: 'education',
      institution: t.experience.edu2.institution,
      degree: t.experience.edu2.degree,
      period: t.experience.edu2.period,
      description: t.experience.edu2.description,
      icon: FaGraduationCap
    },
    {
      type: 'education',
      institution: t.experience.edu3.institution,
      degree: t.experience.edu3.degree,
      period: t.experience.edu3.period,
      description: t.experience.edu3.description,
      icon: FaGraduationCap
    }
  ];

  const TimelineItem = ({ item, index, isLeft }) => (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-12`}
    >
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-red-600/20 hover:border-red-600/50 transition-all"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-red-600">
              {item.title || item.institution}
            </h3>
            {item.role && (
              <h4 className="text-xl text-gray-300 mb-2">{item.role}</h4>
            )}
            {item.degree && (
              <h4 className="text-xl text-gray-300 mb-2">{item.degree}</h4>
            )}
            <p className="text-red-500 mb-3 font-semibold">{item.period}</p>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600"
        >
          <item.icon className="text-white text-2xl" />
        </motion.div>
        <div className="absolute w-1 h-full bg-red-600/50 -z-10"></div>
      </div>

      <div className="flex-1 hidden md:block"></div>
    </motion.div>
  );

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-red-600">
              {t.experience.workExperience}
            </h3>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                item={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-red-600">
              {t.experience.education}
            </h3>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
