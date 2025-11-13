import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

interface ButtonConfig {
  labelKey: string;
  color: string;
  lightColor: string;
  borderColor: string;
  shadowColor: string;
}

export function ActionButtons() {
  const { t } = useLanguage();

  const topButtons: ButtonConfig[] = [
    { 
      labelKey: 'action.familyTree', 
      color: 'bg-blue-500 hover:bg-blue-600',
      lightColor: 'light:bg-gradient-to-br light:from-blue-500 light:to-blue-600',
      borderColor: 'border-blue-400 dark:border-blue-400 light:border-blue-300',
      shadowColor: 'shadow-blue-500/50 hover:shadow-blue-500/70 light:shadow-blue-400/60 light:hover:shadow-blue-500/80'
    },
    { 
      labelKey: 'action.healthIndex', 
      color: 'bg-orange-500 hover:bg-orange-600',
      lightColor: 'light:bg-gradient-to-br light:from-orange-500 light:to-orange-600',
      borderColor: 'border-orange-400 dark:border-orange-400 light:border-orange-300',
      shadowColor: 'shadow-orange-500/50 hover:shadow-orange-500/70 light:shadow-orange-400/60 light:hover:shadow-orange-500/80'
    },
    { 
      labelKey: 'action.onlineSales', 
      color: 'bg-emerald-500 hover:bg-emerald-600',
      lightColor: 'light:bg-gradient-to-br light:from-emerald-500 light:to-emerald-600',
      borderColor: 'border-emerald-400 dark:border-emerald-400 light:border-emerald-300',
      shadowColor: 'shadow-emerald-500/50 hover:shadow-emerald-500/70 light:shadow-emerald-400/60 light:hover:shadow-emerald-500/80'
    },
    { 
      labelKey: 'action.cvOnline', 
      color: 'bg-purple-500 hover:bg-purple-600',
      lightColor: 'light:bg-gradient-to-br light:from-purple-500 light:to-purple-600',
      borderColor: 'border-purple-400 dark:border-purple-400 light:border-purple-300',
      shadowColor: 'shadow-purple-500/50 hover:shadow-purple-500/70 light:shadow-purple-400/60 light:hover:shadow-purple-500/80'
    },
  ];

  const bottomButtons: ButtonConfig[] = [
    { 
      labelKey: 'action.familyFund', 
      color: 'bg-cyan-500 hover:bg-cyan-600',
      lightColor: 'light:bg-gradient-to-br light:from-cyan-500 light:to-cyan-600',
      borderColor: 'border-cyan-400 dark:border-cyan-400 light:border-cyan-300',
      shadowColor: 'shadow-cyan-500/50 hover:shadow-cyan-500/70 light:shadow-cyan-400/60 light:hover:shadow-cyan-500/80'
    },
    { 
      labelKey: 'action.cafeOnline', 
      color: 'bg-gray-600 hover:bg-gray-700',
      lightColor: 'light:bg-gradient-to-br light:from-gray-600 light:to-gray-700',
      borderColor: 'border-gray-500 dark:border-gray-500 light:border-gray-400',
      shadowColor: 'shadow-gray-600/50 hover:shadow-gray-600/70 light:shadow-gray-500/60 light:hover:shadow-gray-600/80'
    },
    { 
      labelKey: 'action.buildingOnline', 
      color: 'bg-rose-500 hover:bg-rose-600',
      lightColor: 'light:bg-gradient-to-br light:from-rose-500 light:to-rose-600',
      borderColor: 'border-rose-400 dark:border-rose-400 light:border-rose-300',
      shadowColor: 'shadow-rose-500/50 hover:shadow-rose-500/70 light:shadow-rose-400/60 light:hover:shadow-rose-500/80'
    },
    { 
      labelKey: 'action.fleetOnline', 
      color: 'bg-indigo-500 hover:bg-indigo-600',
      lightColor: 'light:bg-gradient-to-br light:from-indigo-500 light:to-indigo-600',
      borderColor: 'border-indigo-400 dark:border-indigo-400 light:border-indigo-300',
      shadowColor: 'shadow-indigo-500/50 hover:shadow-indigo-500/70 light:shadow-indigo-400/60 light:hover:shadow-indigo-500/80'
    },
  ];

  return (
    <div className="space-y-4 mb-12">
      {/* Top Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topButtons.map((button, index) => (
          <motion.button
            key={index}
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`${button.color} ${button.lightColor} ${button.borderColor} ${button.shadowColor} text-white dark:text-black py-3 px-6 rounded-xl border-2 shadow-lg transition-all uppercase tracking-wide relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/10 to-white/20 opacity-0 hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
            <span className="relative z-10">{t(button.labelKey)}</span>
          </motion.button>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bottomButtons.map((button, index) => (
          <motion.button
            key={index}
            whileHover={{ 
              scale: 1.05, 
              y: -4,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`${button.color} ${button.lightColor} ${button.borderColor} ${button.shadowColor} text-white dark:text-black py-3 px-6 rounded-xl border-2 shadow-lg transition-all uppercase tracking-wide relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/10 to-white/20 opacity-0 hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
            <span className="relative z-10">{t(button.labelKey)}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

