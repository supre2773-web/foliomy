import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-red-600/20">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-red-600">
                  {t.contact.letConnect}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t.contact.description}
                </p>

                <div className="space-y-4">
                  <motion.a
                    href="https://github.com/willy903"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-red-600/10 border border-red-600/30 hover:border-red-600/50 transition-all"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600">
                      <FaGithub className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <p className="text-white font-semibold">@willy903</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/willy-jacquino-heriniaina-6b6465111/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-red-600/10 border border-red-600/30 hover:border-red-600/50 transition-all"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600">
                      <FaLinkedin className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <p className="text-white font-semibold">Willy Jacquino</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-red-600/20">
              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-red-600/30 focus:border-red-600 outline-none text-white transition-all"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-red-600/30 focus:border-red-600 outline-none text-white transition-all"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-red-600/30 focus:border-red-600 outline-none text-white transition-all resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-red-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-red-700 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      ></motion.div>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      {t.contact.send}
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                  >
                    {t.contact.success}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
