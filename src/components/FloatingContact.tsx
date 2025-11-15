import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export function FloatingContact() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Gmail Icon Component
  const GmailIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.563-9-6.563V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
    </svg>
  );

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border-2 border-sky-300 dark:border-sky-400"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <MessageCircle size={24} className="sm:w-7 sm:h-7 text-sky-500 dark:text-sky-400 group-hover:rotate-12 transition-transform" />
        </motion.div>
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-sky-300 dark:bg-sky-400 animate-ping opacity-20"></span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 light:from-white light:to-gray-50 rounded-2xl shadow-2xl border border-blue-500/30 dark:border-blue-500/30 light:border-blue-200 overflow-hidden p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-2">
                      <MessageCircle size={20} className="text-blue-400 dark:text-blue-400 light:text-blue-600" />
                    </div>
                    <h3 className="text-white dark:text-white light:text-gray-900 text-sm font-semibold">
                      {t('floatingContact.title')}
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 rounded-full p-1 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {/* Gmail Button */}
                  <motion.a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 dark:from-red-500 dark:to-red-600 light:from-red-600 light:to-red-700 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <GmailIcon className="w-5 h-5" />
                    <span className="font-medium">Gmail</span>
                  </motion.a>

                  {/* Zalo Button */}
                  <motion.a
                    href="https://chat.zalo.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600 light:from-blue-600 light:to-blue-700 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium">Zalo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

