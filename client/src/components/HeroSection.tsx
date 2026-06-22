import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_cinematic_landscape-jbYVXtiCxrf89e8B4ft3zd.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.div
          variants={itemVariants}
          className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-medium"
        >
          Welcome to Lumière Photography
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-playfair"
        >
          Capturing
          <br />
          <span className="text-gray-300">Eternity</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Timeless moments. Eternal stories. Professional photography that transcends
          the ordinary and celebrates the extraordinary in every frame.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-600 text-white font-semibold uppercase tracking-widest text-sm hover:bg-gray-500 transition-all"
          >
            Explore Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-500 text-gray-200 font-semibold uppercase tracking-widest text-sm hover:bg-gray-700/50 transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-gray-400" size={32} />
      </motion.div>
    </section>
  );
}
