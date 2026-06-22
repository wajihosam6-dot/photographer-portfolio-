import { motion } from 'framer-motion';

export default function AboutSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663785791235/98PZcqGFv6KmqFmy42BtVJ/about_photographer-WVd3uEhjDqf79rvwcsScXm.webp"
                alt="About Photographer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                I Capture
                <br />
                <span className="text-gray-500">Moments</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
              With over a decade of experience in professional photography, I have
              dedicated my career to capturing the essence of life&apos;s most precious
              moments. From intimate portraits to grand landscapes, every image tells a
              story worth preserving.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed"
            >
              My approach combines technical mastery with artistic vision, ensuring
              that every photograph transcends the ordinary. I believe in the power of
              visual storytelling and the transformative impact of exceptional imagery.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xl">10+</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Years of Experience</p>
                  <p className="text-gray-500 text-sm">Professional photography</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xl">500+</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Projects Completed</p>
                  <p className="text-gray-500 text-sm">Satisfied clients worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-xl">15+</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Awards & Recognition</p>
                  <p className="text-gray-500 text-sm">International accolades</p>
                </div>
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gray-500 text-black font-semibold uppercase tracking-widest hover:bg-gray-400 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
