import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border-2 border-sky-300 dark:border-sky-400"
          aria-label="Back to top"
        >
          <motion.div
            animate={{ 
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowUp size={20} className="sm:w-6 sm:h-6 text-sky-500 dark:text-sky-400 group-hover:-translate-y-1 transition-transform" />
          </motion.div>
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-sky-300 dark:bg-sky-400 animate-ping opacity-20"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

