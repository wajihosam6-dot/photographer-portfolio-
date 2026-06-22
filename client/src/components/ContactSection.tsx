import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you. Let&apos;s discuss how we
            can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-gray-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a
                  href="mailto:hello@lumiere.com"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  hello@lumiere.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-gray-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-gray-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Berlin, Germany</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center hover:bg-gray-500/40 transition-all"
                  >
                    <Icon className="text-gray-500" size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-500/10 border border-gray-500/30 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-gray-500/10 border border-gray-500/30 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Subject"
                className="w-full bg-gray-500/10 border border-gray-500/30 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full bg-gray-500/10 border border-gray-500/30 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                required
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-8 py-3 bg-gray-500 text-black font-semibold uppercase tracking-widest hover:bg-gray-400 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
