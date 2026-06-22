import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'Luxury Brands', category: 'Fashion & Luxury' },
  { id: 2, name: 'Tech Innovators', category: 'Technology' },
  { id: 3, name: 'Travel & Tourism', category: 'Hospitality' },
  { id: 4, name: 'Real Estate Elite', category: 'Architecture' },
  { id: 5, name: 'Editorial Houses', category: 'Publishing' },
  { id: 6, name: 'Production Studios', category: 'Media' },
];

export default function CollaborationSection() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="collaboration" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">Partnerships</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Trusted by <span className="text-gray-300">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Collaborating with world-class brands and organizations
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative p-8 rounded-lg bg-gradient-to-br from-gray-900/30 to-black border border-gray-700/30 hover:border-gray-600/60 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center min-h-48"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/10 to-gray-600/0"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Logo placeholder with animation */}
              <motion.div
                className="relative z-10 w-20 h-20 rounded-lg bg-gray-900/50 border border-gray-700/50 flex items-center justify-center mb-4 group-hover:bg-gray-800/50 transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-12 h-12 rounded-full border-2 border-gray-600/30 border-t-gray-400"
                />
              </motion.div>

              {/* Partner Name */}
              <h3 className="text-xl font-bold text-white text-center font-playfair mb-2">{partner.name}</h3>

              {/* Category */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-sm text-center"
              >
                {partner.category}
              </motion.p>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600/0 via-gray-600 to-gray-600/0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Collaboration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-gray-900/20 to-black border border-gray-700/30 p-12 rounded-lg"
        >
          {[
            { number: '50+', label: 'Global Brands' },
            { number: '100+', label: 'Successful Projects' },
            { number: '15+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-4xl font-bold text-gray-300 font-playfair mb-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Interested in collaborating with us?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600 text-gray-200 font-semibold uppercase tracking-widest text-sm hover:bg-gray-700/50 transition-all duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
