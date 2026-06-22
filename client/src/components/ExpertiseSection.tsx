import { motion } from 'framer-motion';
import { Lightbulb, Palette, Zap, Eye } from 'lucide-react';

const expertise = [
  {
    id: 1,
    title: 'Conceptualization',
    description: 'Strategic planning and creative ideation for every project',
    icon: Lightbulb,
    skills: ['Storyboarding', 'Art Direction', 'Creative Strategy'],
    percentage: 95,
  },
  {
    id: 2,
    title: 'Visual Composition',
    description: 'Masterful framing and aesthetic excellence',
    icon: Palette,
    skills: ['Color Theory', 'Lighting Design', 'Composition'],
    percentage: 98,
  },
  {
    id: 3,
    title: 'Technical Mastery',
    description: 'Advanced equipment and technical expertise',
    icon: Zap,
    skills: ['4K/8K Production', 'Drone Photography', 'Post-Processing'],
    percentage: 96,
  },
  {
    id: 4,
    title: 'Visual Storytelling',
    description: 'Narrative-driven imagery that captivates',
    icon: Eye,
    skills: ['Narrative Design', 'Emotional Impact', 'Brand Storytelling'],
    percentage: 97,
  },
];

export default function ExpertiseSection() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="expertise" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Mastery in Every <span className="text-gray-300">Frame</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skills spanning conceptualization to final delivery
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {expertise.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-lg bg-gradient-to-br from-gray-900/30 to-black border border-gray-700/30 hover:border-gray-600/60 transition-all duration-300 overflow-hidden relative"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/5 to-gray-600/0"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-block p-3 rounded-lg bg-gray-900/50 border border-gray-700/50"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent size={32} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-playfair">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>

                  {/* Skill Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-3 py-1 text-xs bg-gray-900/50 border border-gray-700/50 text-gray-300 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Skill Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-gray-500">Proficiency</span>
                      <span className="text-sm font-semibold text-gray-300">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-900/50 rounded-full overflow-hidden border border-gray-700/30">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gray-600 to-gray-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Ready to elevate your visual storytelling?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600 text-gray-200 font-semibold uppercase tracking-widest text-sm hover:bg-gray-700/50 transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
