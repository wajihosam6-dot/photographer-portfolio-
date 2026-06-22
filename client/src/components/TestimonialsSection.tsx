import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Anderson',
    role: 'Creative Director',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_fashion_portrait-HC3c5saLUQKT7PvygKCumE.webp',
    text: 'The attention to detail and artistic vision is unparalleled. Every shot tells a story that transcends the ordinary.',
    rating: 5,
    company: 'Creative Studios',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Event Organizer',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/about_photographer-WVd3uEhjDqf79rvwcsScXm.webp',
    text: 'Working with this photographer transformed our event coverage. The cinematic quality elevated our brand presence significantly.',
    rating: 5,
    company: 'Luxe Events',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Brand Manager',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/hero_fashion_portrait-HC3c5saLUQKT7PvygKCumE.webp',
    text: 'Professional, creative, and incredibly responsive. The final deliverables exceeded all our expectations and client requirements.',
    rating: 5,
    company: 'Global Brands Inc',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section id="testimonials" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-amber-600 text-sm uppercase tracking-widest mb-4">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Trusted by <span className="text-amber-600">Visionaries</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from clients who transformed their vision into reality through our cinematic storytelling
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setActiveIndex(index)}
              className={`relative p-8 rounded-lg cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-br from-amber-900/30 to-black border border-amber-600/60 shadow-2xl shadow-amber-600/20'
                  : 'bg-gradient-to-br from-amber-900/10 to-black border border-amber-600/20 hover:border-amber-600/40'
              }`}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={16} className="fill-amber-600 text-amber-600" />
                  </motion.div>
                ))}
              </div>

              {/* Quote Text */}
              <motion.p
                className="text-gray-300 mb-6 text-sm leading-relaxed italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                "{testimonial.text}"
              </motion.p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-600/30"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-amber-600 text-xs">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Active Indicator */}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-amber-600 text-black font-semibold rounded hover:bg-amber-500 transition-colors duration-300">
            Read More Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
