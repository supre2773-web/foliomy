import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      technologies: ['NodeJS', 'Express', 'MongoDB', 'React'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: null
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: 'https://upa.mg'
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: null
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      technologies: ['React', 'Framer Motion', 'TailwindCSS', 'Three.js'],
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: 'https://swdevmg.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-red-600/20 group-hover:border-red-600/50 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white"
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-red-600">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-sm rounded-full bg-red-600/20 border border-red-600/30 text-red-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
