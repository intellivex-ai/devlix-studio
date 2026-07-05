import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#projects' },
  { name: 'Our Method', href: '#process' },
  { name: 'Why Devlix', href: '#why-us' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const FloatingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // High-performance IntersectionObserver for lag-free active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-4 transition-all duration-500">
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full px-6 md:px-8 ${
            isScrolled
              ? 'py-3 bg-white/70 backdrop-blur-md shadow-premium border border-black/5'
              : 'py-5 bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <div className="w-8 h-8 rounded-full bg-primaryGreen border border-black/10 flex items-center justify-center shadow-sm">
              <span className="font-display font-extrabold text-white text-[16px]">D</span>
            </div>
            <span className="font-display font-bold text-[19px] tracking-tight text-dark">
              Devlix<span className="text-primaryGreen">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1 items-center bg-secondaryBg/80 p-1.5 rounded-full border border-black/[0.04] relative">
            {navItems.map(item => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-2 text-[13px] font-medium text-dark/70 hover:text-dark uppercase tracking-wider relative transition-colors duration-200"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Sliding capsule indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-black/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator */}
                  {!isActive && hoveredItem === item.name && (
                    <motion.div
                      layoutId="hoverTab"
                      className="absolute inset-0 bg-black/[0.03] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-dark hover:bg-black/5 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 px-6 bg-white/95 backdrop-blur-lg border-b border-black/5 z-30 shadow-premium flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`py-3.5 text-[16px] font-semibold uppercase tracking-wider border-b border-black/[0.04] transition-colors flex items-center min-h-[44px] ${
                    activeSection === item.href ? 'text-primaryGreen' : 'text-dark/80'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection('#contact')}
              className="w-full btn-green"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default FloatingNavbar;
