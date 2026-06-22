import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const works = [
  {
    id: 1,
    title: 'Mountain Wilderness',
    category: 'Landscape',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_cinematic_landscape-jbYVXtiCxrf89e8B4ft3zd.webp',
    date: 'June 2024',
    description: 'A breathtaking journey through untamed landscapes and golden hour magic.',
  },
  {
    id: 2,
    title: 'Urban Nights',
    category: 'Street',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_urban_night-8W3LACppkmdwbzFdi9TUPe.webp',
    date: 'May 2024',
    description: 'Capturing the vibrant energy and moody aesthetics of city life after dark.',
  },
  {
    id: 3,
    title: 'Fashion Editorial',
    category: 'Portrait',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_fashion_portrait-HC3c5saLUQKT7PvygKCumE.webp',
    date: 'April 2024',
    description: 'High-fashion storytelling with dramatic lighting and artistic direction.',
  },
];

export default function LatestWorkSection() {
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
    <section id="latest-work" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-600 text-sm uppercase tracking-widest mb-4">Recent Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Latest <span className="text-amber-600">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our most recent cinematic creations and storytelling projects
          </p>
        </motion.div>

        {/* Works Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(work.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 rounded-lg overflow-hidden mb-6">
                {/* Image */}
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  animate={hoveredId === work.id ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  animate={
                    hoveredId === work.id
                      ? { opacity: 1 }
                      : { opacity: 0.3 }
                  }
                  transition={{ duration: 0.3 }}
                />

                {/* Content Overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white"
                  animate={hoveredId === work.id ? { y: 0 } : { y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-amber-600 text-xs uppercase tracking-widest mb-2">
                    {work.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 font-playfair">{work.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{work.description}</p>

                  {/* View More Link */}
                  <motion.div
                    className="flex items-center gap-2 text-amber-600 font-semibold"
                    animate={hoveredId === work.id ? { x: 5 } : { x: 0 }}
                  >
                    View Project
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.div>

                {/* Date Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs text-gray-300"
                  animate={hoveredId === work.id ? { scale: 1.1 } : { scale: 1 }}
                >
                  {work.date}
                </motion.div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-amber-600 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded hover:bg-amber-600 hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
