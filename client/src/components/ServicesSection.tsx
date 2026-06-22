import { motion } from 'framer-motion';
import { Camera, Users, Zap } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Users,
    title: 'Portrait Sessions',
    description:
      'Authentic portraits that capture your essence with timeless elegance and artistry.',
    features: ['Studio & Location', 'Professional Editing', 'Digital Copies'],
  },
  {
    id: 2,
    icon: Camera,
    title: 'Commercial Photography',
    description:
      'Impactful imagery that elevates your brand and drives meaningful connections.',
    features: ['Product Photography', 'Brand Shoots', 'Corporate Events'],
  },
  {
    id: 3,
    icon: Zap,
    title: 'Event Coverage',
    description:
      'Candid moments and unforgettable memories, beautifully documented.',
    features: ['Weddings', 'Celebrations', 'Corporate Events'],
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="services" className="min-h-screen bg-black py-20 px-4">
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
            What I Offer
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional photography services tailored to tell your story with artistry
            and excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(184, 134, 11, 0.2)' }}
                className="bg-gradient-to-br from-gray-800/10 to-black border border-gray-500/30 p-8 rounded-lg hover:border-gray-500/60 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-gray-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 border border-gray-500 text-gray-500 text-sm uppercase tracking-widest hover:bg-gray-500 hover:text-black transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to create something extraordinary?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-500 text-black font-semibold uppercase tracking-widest hover:bg-gray-400 transition-all"
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
