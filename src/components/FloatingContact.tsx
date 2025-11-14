import { useState } from 'react';
import { MessageCircle, X, Send, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

export function FloatingContact() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || !message) {
      toast.error(t('floatingContact.error'));
      return;
    }

    // Simulate sending message (replace with actual API call)
    console.log('Contact submission:', { phone, message });
    
    toast.success(t('floatingContact.success'));
    
    // Reset form
    setPhone('');
    setMessage('');
    setIsOpen(false);
  };

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
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[90vw] max-w-md"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 light:from-white light:to-gray-50 rounded-2xl shadow-2xl border border-blue-500/30 dark:border-blue-500/30 light:border-blue-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600 light:from-blue-600 light:to-blue-700 p-6 relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <h3 className="text-white">
                      {t('floatingContact.title')}
                    </h3>
                  </div>
                  <p className="text-blue-100 dark:text-blue-100 light:text-white/90">
                    {t('floatingContact.subtitle')}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Phone Input */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      <Phone size={18} className="text-blue-400 dark:text-blue-400 light:text-blue-600" />
                      {t('floatingContact.phone')}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t('floatingContact.phonePlaceholder')}
                      className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 light:bg-gray-100 border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      <MessageSquare size={18} className="text-blue-400 dark:text-blue-400 light:text-blue-600" />
                      {t('floatingContact.message')}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('floatingContact.messagePlaceholder')}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 light:bg-gray-100 border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600 light:from-blue-600 light:to-blue-700 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    {t('floatingContact.send')}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

