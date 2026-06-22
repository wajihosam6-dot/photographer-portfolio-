import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-gray-700/30'
          : 'bg-black/40 backdrop-blur-md border-b border-gray-700/20'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logo_mark.png"
            alt="Lumière Photography"
            className="w-10 h-10"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-100 tracking-widest font-playfair">
              LUMIÈRE
            </h1>
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Photography
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#E0E0E0' }}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-200 transition-colors font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#A0A0A0' }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:block px-6 py-2 border border-gray-600 text-gray-200 text-xs uppercase tracking-widest hover:bg-gray-700/50 transition-all duration-300 font-medium"
        >
          Book Session
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/80 border-t border-gray-700/30"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 border border-gray-600 text-gray-200 text-xs uppercase tracking-widest hover:bg-gray-700/50 transition-all font-medium">
              Book Session
            </button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
