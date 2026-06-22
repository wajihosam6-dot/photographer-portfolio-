import { motion } from 'framer-motion';
import { Camera, Lightbulb, Edit3, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We discuss your vision, goals, and creative direction to understand your unique story.',
    icon: Lightbulb,
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 2,
    title: 'Pre-Production',
    description: 'Detailed planning, location scouting, and creative preparation for the perfect shoot.',
    icon: Camera,
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 3,
    title: 'Production',
    description: 'Capturing cinematic moments with professional equipment and artistic excellence.',
    icon: Camera,
    color: 'from-red-600 to-pink-600',
  },
  {
    id: 4,
    title: 'Post-Production',
    description: 'Expert editing, color grading, and refinement to deliver stunning final images.',
    icon: Edit3,
    color: 'from-pink-600 to-purple-600',
  },
  {
    id: 5,
    title: 'Delivery',
    description: 'Premium quality files delivered in your preferred format with full satisfaction guaranteed.',
    icon: CheckCircle,
    color: 'from-purple-600 to-amber-600',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="process" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #B8860B 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
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
          <p className="text-amber-600 text-sm uppercase tracking-widest mb-4">Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            The Creative <span className="text-amber-600">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to delivery, we follow a meticulous process to ensure excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600/20 via-amber-600/50 to-amber-600/20 transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveStep(index)}
                  className="relative cursor-pointer"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    className={`relative z-20 w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-amber-600 to-orange-600 shadow-2xl shadow-amber-600/50'
                        : 'bg-gradient-to-br from-amber-900/30 to-black border-2 border-amber-600/30 hover:border-amber-600/60'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon
                      size={40}
                      className={`${isActive ? 'text-black' : 'text-amber-600'}`}
                    />
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    className={`text-center transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 font-playfair">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Step Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="stepIndicator"
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">Ready to start your creative journey?</p>
          <button className="px-8 py-3 bg-amber-600 text-black font-semibold rounded hover:bg-amber-500 transition-colors duration-300">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
