import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const behindTheScenes = [
  {
    id: 1,
    title: 'Studio Setup',
    description: 'Professional lighting configuration for portrait sessions',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_cinematic_landscape-jbYVXtiCxrf89e8B4ft3zd.webp',
    category: 'Studio',
  },
  {
    id: 2,
    title: 'Location Scouting',
    description: 'Finding the perfect backdrop for your story',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_urban_night-8W3LACppkmdwbzFdi9TUPe.webp',
    category: 'Location',
  },
  {
    id: 3,
    title: 'Equipment Mastery',
    description: 'State-of-the-art gear for exceptional results',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_fashion_portrait-HC3c5saLUQKT7PvygKCumE.webp',
    category: 'Equipment',
  },
  {
    id: 4,
    title: 'Team Collaboration',
    description: 'Working with talented professionals',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/gallery_thumbnail_wildlife-gQ2cXEu8dJuszNCdKjRqWR.webp',
    category: 'Team',
  },
  {
    id: 5,
    title: 'Post-Production Magic',
    description: 'Editing and color grading for perfection',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/about_photographer-WVd3uEhjDqf79rvwcsScXm.webp',
    category: 'Post-Production',
  },
  {
    id: 6,
    title: 'Client Moments',
    description: 'Capturing authentic interactions',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_cinematic_landscape-jbYVXtiCxrf89e8B4ft3zd.webp',
    category: 'Client',
  },
];

export default function BehindTheScenesSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Studio', 'Location', 'Equipment', 'Team', 'Post-Production', 'Client'];
  const filteredImages = filter === 'All' ? behindTheScenes : behindTheScenes.filter(item => item.category === filter);

  const handlePrevious = () => {
    const currentIndex = behindTheScenes.findIndex(item => item.id === selectedImage);
    const previousIndex = currentIndex === 0 ? behindTheScenes.length - 1 : currentIndex - 1;
    setSelectedImage(behindTheScenes[previousIndex].id);
  };

  const handleNext = () => {
    const currentIndex = behindTheScenes.findIndex(item => item.id === selectedImage);
    const nextIndex = currentIndex === behindTheScenes.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(behindTheScenes[nextIndex].id);
  };

  return (
    <section id="behind-scenes" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">Behind The Lens</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Behind The <span className="text-gray-300">Scenes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the creative process and the artistry that goes into every project
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 uppercase text-xs tracking-widest transition-all font-medium rounded-full ${
                filter === cat
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
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredImages.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage(item.id)}
              className="group relative h-72 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white font-playfair mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute top-4 right-4 px-3 py-1 text-xs bg-black/60 backdrop-blur-md text-gray-300 rounded-full"
              >
                {item.category}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Image */}
              <img
                src={behindTheScenes.find(item => item.id === selectedImage)?.image}
                alt="Full view"
                className="w-full h-auto rounded-lg"
              />

              {/* Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white font-playfair mb-2">
                  {behindTheScenes.find(item => item.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-400">
                  {behindTheScenes.find(item => item.id === selectedImage)?.description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-600/50 hover:bg-gray-600 transition-all"
              >
                <ChevronLeft size={24} className="text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-600/50 hover:bg-gray-600 transition-all"
              >
                <ChevronRight size={24} className="text-white" />
              </motion.button>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-600/50 hover:bg-gray-600 transition-all"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
