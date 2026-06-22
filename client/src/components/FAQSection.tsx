import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Typically, a standard commercial shoot takes 2-4 weeks from initial consultation to final delivery. Larger campaigns may require 6-12 weeks. We provide detailed timelines during the planning phase.',
  },
  {
    id: 2,
    question: 'Do you offer retouching and post-production services?',
    answer: 'Absolutely! Post-production is an integral part of our process. We provide professional color grading, retouching, and editing to ensure your images meet the highest standards. All revisions are included in our package.',
  },
  {
    id: 3,
    question: 'What equipment do you use?',
    answer: 'We utilize state-of-the-art professional equipment including high-end DSLRs, mirrorless cameras, drone systems, and specialized lenses. Our kit is regularly updated to incorporate the latest technology in photography.',
  },
  {
    id: 4,
    question: 'Can you work with specific brand guidelines?',
    answer: 'Yes, we specialize in maintaining brand consistency. We work closely with your brand guidelines and creative direction to ensure all deliverables align perfectly with your visual identity and messaging.',
  },
  {
    id: 5,
    question: 'What is included in your packages?',
    answer: 'Our packages include pre-production planning, professional shoot, post-production editing, color grading, and final delivery in multiple formats. Custom packages are available based on your specific needs.',
  },
  {
    id: 6,
    question: 'Do you offer international shoots?',
    answer: 'Yes, we regularly undertake international projects. We have experience shooting in over 15 countries and handle all logistics, permits, and coordination required for seamless international production.',
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="faq" className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-medium">Questions?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Frequently Asked <span className="text-gray-300">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group"
            >
              <motion.button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full text-left p-6 rounded-lg bg-gradient-to-r from-gray-900/30 to-black border border-gray-700/30 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-between group-hover:bg-gray-900/40"
                whileHover={{ paddingLeft: 24 }}
              >
                <span className="text-lg font-semibold text-white font-playfair pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      exit={{ y: -20 }}
                      className="p-6 bg-gray-900/20 border border-gray-700/30 border-t-0 rounded-b-lg"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-lg bg-gradient-to-r from-gray-900/20 to-black border border-gray-700/30"
        >
          <p className="text-gray-400 mb-4">Didn't find what you're looking for?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600 text-gray-200 font-semibold uppercase tracking-widest text-sm hover:bg-gray-700/50 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
