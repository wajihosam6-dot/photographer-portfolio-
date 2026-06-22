import { motion } from 'framer-motion';

interface CinematicDividerProps {
  className?: string;
}

export default function CinematicDivider({ className = '' }: CinematicDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent ${className}`}
    />
  );
}
