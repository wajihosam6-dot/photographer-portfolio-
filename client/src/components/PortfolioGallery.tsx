import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Dolomites, Italy',
    category: 'Landscape',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_cinematic_landscape-jbYVXtiCxrf89e8B4ft3zd.webp',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Portrait Series',
    category: 'Portrait',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_fashion_portrait-HC3c5saLUQKT7PvygKCumE.webp',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Iceland Coast',
    category: 'Landscape',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_urban_night-8W3LACppkmdwbzFdi9TUPe.webp',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'After the Rain',
    category: 'Macro',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/gallery_thumbnail_wildlife-gQ2cXEu8dJuszNCdKjRqWR.webp',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    title: 'Kyoto Nights',
    category: 'Street',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_urban_night-QmCGwUdQYUcaJttQTysEYA.png',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 6,
    title: 'Studio Portrait',
    category: 'Portrait',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/about_photographer-WVd3uEhjDqf79rvwcsScXm.webp',
    span: 'col-span-2 row-span-1',
  },
];

export default function PortfolioGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Landscape', 'Portrait', 'Street', 'Macro'];

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
    <section ref={ref} id="portfolio" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">
            Our Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of our finest work, showcasing moments that matter
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 uppercase text-xs tracking-widest transition-all font-medium ${
                selectedCategory === cat
                  ? 'bg-gray-600 text-white'
                  : 'border border-gray-600 text-gray-400 hover:text-gray-200 hover:border-gray-500'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          style={{ scale }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`${item.span} relative overflow-hidden group cursor-pointer`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent transition-all duration-300 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-500 text-gray-500 font-semibold uppercase tracking-widest hover:bg-gray-500 hover:text-black transition-all"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
