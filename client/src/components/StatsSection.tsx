import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Camera, Users, Award, Zap } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Projects Completed',
    value: 250,
    suffix: '+',
    icon: Camera,
  },
  {
    id: 2,
    label: 'Happy Clients',
    value: 180,
    suffix: '+',
    icon: Users,
  },
  {
    id: 3,
    label: 'Awards Won',
    value: 35,
    suffix: '',
    icon: Award,
  },
  {
    id: 4,
    label: 'Years Experience',
    value: 12,
    suffix: '+',
    icon: Zap,
  },
];

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  inView: boolean;
}

function AnimatedCounter({ target, duration = 2, inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, inView]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const [isInView, setIsInView] = useState(false);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="stats"
      className="min-h-screen bg-black py-20 px-4 relative overflow-hidden"
      onMouseEnter={() => setIsInView(true)}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #A0A0A0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          className="absolute inset-0"
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
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">By The Numbers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Our <span className="text-gray-300">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A testament to our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative p-8 rounded-lg bg-gradient-to-br from-gray-900/20 to-black border border-gray-700/30 hover:border-gray-600/60 transition-all duration-300 group overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/0 via-gray-600/10 to-gray-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <IconComponent size={40} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </motion.div>

                  {/* Counter */}
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <span className="text-5xl font-bold text-gray-300 font-playfair">
                      <AnimatedCounter target={stat.value} inView={isInView} />
                      {stat.suffix}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
                </div>

                {/* Bottom accent line */}
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

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900/20 to-black border border-gray-700/30 p-12 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
            Featured in Top Photography Publications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-400">
            {['National Geographic', 'Vogue', 'Harper\'s Bazaar', 'Architectural Digest'].map(
              (publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-semibold hover:text-gray-200 transition-colors"
                >
                  {publication}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
