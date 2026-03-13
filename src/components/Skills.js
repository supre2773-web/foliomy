import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaWordpress, FaCamera } from 'react-icons/fa';
import { SiFlutter, SiSpringboot } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React', level: 90, icon: FaReact },
        { name: 'Flutter', level: 85, icon: SiFlutter },
        { name: 'HTML', level: 95, icon: FaHtml5 },
        { name: 'CSS', level: 90, icon: FaCss3Alt },
        { name: 'UX/UI Design', level: 80, icon: FaFigma }
      ]
    },
    {
      title: t.skills.backend,
      skills: [
        { name: 'NodeJS', level: 90, icon: FaNodeJs },
        { name: 'Spring Boot', level: 85, icon: SiSpringboot },
        { name: 'PHP', level: 80, icon: FaPhp },
        { name: 'Python', level: 75, icon: FaPython }
      ]
    },
    {
      title: t.skills.tools,
      skills: [
        { name: 'Git', level: 90, icon: FaGitAlt },
        { name: 'Figma', level: 85, icon: FaFigma },
        { name: 'Photoshop', level: 80, icon: FaCamera },
        { name: 'WordPress', level: 85, icon: FaWordpress }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.skills.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-red-600/20 hover:border-red-600/50 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-red-600">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="text-xl text-red-600" />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>

                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                          className="h-full bg-red-600 rounded-full relative"
                        >
                          <motion.div
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          ></motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
