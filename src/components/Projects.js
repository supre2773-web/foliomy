import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Plateforme Gestion de Stagiaire',
      description: 'Application permettant de gérer les stagiaires, leurs tâches et leurs projets.',
      technologies: ['NodeJS', 'Express', 'MongoDB', 'React'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: null,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Site Web Université Ambohidratrimo',
      description: 'Site web institutionnel moderne pour l\'université avec système de gestion de contenu.',
      technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: 'https://upa.mg',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'WriteControl Mobile App',
      description: 'Application mobile pour la gestion et le contrôle d\'écriture avec synchronisation cloud.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Material Design'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: null,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Portfolio Web',
      description: 'Portfolio personnel moderne avec design futuriste et animations 3D.',
      technologies: ['React', 'Framer Motion', 'TailwindCSS', 'Three.js'],
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/willy903',
      demo: 'https://swdevmg.netlify.app/',
      gradient: 'from-orange-500 to-red-500'
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>

              <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/50 transition-all">
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
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    >
                      <FaGithub className="text-2xl" />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
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
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
