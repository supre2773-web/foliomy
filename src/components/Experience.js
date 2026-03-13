import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'YAS Madagascar',
      role: 'Full Stack Developer',
      period: 'Août 2024',
      description: 'Création d\'une application de gestion de stagiaires avec NodeJS.',
      icon: FaBriefcase,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const education = [
    {
      type: 'education',
      institution: 'Université Privée d\'Ambohidratrimo',
      degree: 'Licence professionnelle',
      period: '2025',
      description: 'Formation en développement web et applications',
      icon: FaGraduationCap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'education',
      institution: 'Sayna Academy',
      degree: 'Certificat Développement Frontend',
      period: '2022',
      description: 'Spécialisation en React et développement moderne',
      icon: FaGraduationCap,
      color: 'from-green-500 to-teal-500'
    },
    {
      type: 'education',
      institution: 'Orange Digital Center',
      degree: 'Certificat UX/UI Design',
      period: '2024',
      description: 'Design d\'interfaces et expérience utilisateur',
      icon: FaGraduationCap,
      color: 'from-orange-500 to-red-500'
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
          className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl blur-xl"></div>

          <div className="relative z-10">
            <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
              {item.title || item.institution}
            </h3>
            {item.role && (
              <h4 className="text-xl text-gray-300 mb-2">{item.role}</h4>
            )}
            {item.degree && (
              <h4 className="text-xl text-gray-300 mb-2">{item.degree}</h4>
            )}
            <p className="text-blue-400 mb-3 font-semibold">{item.period}</p>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute -top-6 ${isLeft ? '-left-6' : '-right-6'} w-24 h-24 bg-gradient-to-br ${item.color} opacity-20 rounded-full blur-2xl`}
          ></motion.div>
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-lg`}
        >
          <item.icon className="text-white text-2xl" />
        </motion.div>
        <div className="absolute w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 -z-10"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Work Experience
              </span>
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
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Education & Certifications
              </span>
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
