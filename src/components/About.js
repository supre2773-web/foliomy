import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
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
              className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20"
              style={{
                boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl blur-xl"></div>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Je suis développeur web passionné par le design UX/UI et le développement d'applications web performantes et sécurisées.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20"
              style={{
                boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.15)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-2xl blur-xl"></div>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Je me spécialise dans la création d'API robustes, d'architectures backend solides et d'interfaces utilisateur modernes.
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
              { icon: FaMapMarkerAlt, label: 'Location', value: 'Antananarivo, Madagascar' },
              { icon: FaEnvelope, label: 'Email', value: 'willyjacquino@gmail.com' },
              { icon: FaPhone, label: 'Phone', value: '+261 34 50 557 68' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                  <item.icon className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white text-lg font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 overflow-hidden"
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"
              ></motion.div>
              <p className="text-center text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent relative z-10">
                Let's Build Something Amazing Together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
