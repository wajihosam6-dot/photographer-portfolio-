import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: 'International Photography Excellence',
    year: '2024',
    organization: 'Global Photography Awards',
    category: 'Landscape Photography',
    icon: Trophy,
  },
  {
    id: 2,
    title: 'Best Commercial Campaign',
    year: '2023',
    organization: 'Creative Excellence Awards',
    category: 'Commercial & Editorial',
    icon: Star,
  },
  {
    id: 3,
    title: 'Portrait Photographer of the Year',
    year: '2023',
    organization: 'International Portrait Society',
    category: 'Portrait Photography',
    icon: Medal,
  },
  {
    id: 4,
    title: 'Innovation in Visual Storytelling',
    year: '2022',
    organization: 'Digital Media Awards',
    category: 'Emerging Technology',
    icon: Trophy,
  },
  {
    id: 5,
    title: 'Architectural Photography Master',
    year: '2022',
    organization: 'Architecture & Design Awards',
    category: 'Architectural Photography',
    icon: Star,
  },
  {
    id: 6,
    title: 'Editorial Excellence Award',
    year: '2021',
    organization: 'Publishing Excellence Awards',
    category: 'Editorial Photography',
    icon: Medal,
  },
];

export default function AwardsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="awards" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gray-600/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-gray-600/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Awards & <span className="text-gray-300">Accolades</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognized excellence by leading international photography and creative organizations
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={award.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-lg bg-gradient-to-br from-gray-900/40 to-black border border-gray-700/30 hover:border-gray-600/60 transition-all duration-300 overflow-hidden"
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-600/0 via-gray-600/20 to-gray-600/0 opacity-0 group-hover:opacity-100"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Year */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/50"
                    >
                      <IconComponent size={28} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-sm font-bold text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full"
                    >
                      {award.year}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 font-playfair leading-tight">{award.title}</h3>

                  {/* Organization */}
                  <p className="text-gray-400 text-sm mb-3">{award.organization}</p>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="inline-block px-3 py-1 text-xs bg-gray-900/50 border border-gray-700/50 text-gray-300 rounded-full"
                  >
                    {award.category}
                  </motion.div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600/0 via-gray-600 to-gray-600/0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline view */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="relative py-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white font-playfair">Recognition Timeline</h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-600/0 via-gray-600/50 to-gray-600/0 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[2024, 2023, 2022, 2021].map((year, idx) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <p className="text-gray-400 text-sm">{awards.filter(a => a.year === year.toString()).length} Awards</p>
                    <p className="text-2xl font-bold text-white font-playfair">{year}</p>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-4 h-4 rounded-full bg-gray-600 border-4 border-black cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
