import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';

const packages = [
  {
    id: 1,
    name: 'Essential',
    price: '$2,500',
    description: 'Perfect for small projects and personal milestones',
    features: [
      '4 hours of shooting',
      '50 edited images',
      'Digital delivery',
      'Basic color grading',
      'One revision round',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '$5,000',
    description: 'Ideal for events and commercial projects',
    features: [
      '8 hours of shooting',
      '150 edited images',
      '4K video highlights',
      'Advanced color grading',
      'Unlimited revisions',
      'Album design included',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Cinematic',
    price: '$10,000+',
    description: 'Premium experience for your most important moments',
    features: [
      'Full day coverage',
      '300+ edited images',
      'Cinematic video production',
      'Premium color grading',
      'Unlimited revisions',
      'Album + prints included',
      'Second photographer',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="pricing" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-600 text-sm uppercase tracking-widest mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Transparent <span className="text-amber-600">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your needs. All packages include unlimited creativity.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(pkg.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -20 }}
              className={`relative p-8 rounded-lg transition-all duration-300 ${
                pkg.popular
                  ? 'md:scale-105 bg-gradient-to-br from-amber-900/40 to-black border-2 border-amber-600 shadow-2xl shadow-amber-600/30'
                  : 'bg-gradient-to-br from-amber-900/10 to-black border border-amber-600/20 hover:border-amber-600/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-amber-600 text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-white mb-2 font-playfair">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

              {/* Price */}
              <motion.div
                className="mb-8"
                animate={hoveredId === pkg.id ? { scale: 1.1 } : { scale: 1 }}
              >
                <span className="text-4xl font-bold text-amber-600">{pkg.price}</span>
                <span className="text-gray-400 text-sm ml-2">per project</span>
              </motion.div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check size={20} className="text-amber-600 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-amber-600 text-black hover:bg-amber-500'
                    : 'border border-amber-600 text-amber-600 hover:bg-amber-600/10'
                }`}
              >
                Get Started
              </motion.button>

              {/* Shine effect on hover */}
              {hoveredId === pkg.id && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-amber-900/20 to-black border border-amber-600/30 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-3 font-playfair">Custom Package?</h3>
          <p className="text-gray-400 mb-6">
            Have a unique project in mind? Let's discuss a custom package tailored to your needs.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-black font-semibold rounded hover:bg-amber-500 transition-colors duration-300">
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
