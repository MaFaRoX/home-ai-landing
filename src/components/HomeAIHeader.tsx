import { ChevronDown, Sun, Moon, Sparkles, Users, Heart, GitBranch, Activity, ArrowRight, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LoginModal } from './LoginModal';
import { CoreValuesModal } from './CoreValuesModal';
import { MissionModal } from './MissionModal';
import { useTheme } from './ThemeContext';
import { useLanguage, availableLanguages } from './LanguageContext';
import type { Language } from '../locales';
import { motion } from 'motion/react';
import { Card } from './ui/card';

export function HomeAIHeader() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isCoreValuesOpen, setIsCoreValuesOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThemeSelect = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
    setIsThemeOpen(false);
  };

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsLanguageOpen(false);
  };

  // Typing animation effect
  const welcomeText = t('hero.welcome');
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [welcomeText]);

  useEffect(() => {
    if (currentIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + welcomeText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, welcomeText]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0f1f2e]/95 backdrop-blur-md border-b border-blue-100 dark:border-gray-800 transition-colors shadow-lg dark:shadow-none">
      {/* LEFT BANNER - Family Tree */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-2 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.03, x: 5 }}
          className="relative group cursor-pointer"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 rounded-xl blur-lg"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Banner Card */}
          <div className="relative w-28 xs:w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-br from-emerald-900/95 via-teal-900/95 to-cyan-900/95 dark:from-emerald-900/95 dark:via-teal-900/95 dark:to-cyan-900/95 light:from-emerald-50 light:via-teal-50 light:to-cyan-50 backdrop-blur-md rounded-xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 border border-emerald-500/40 dark:border-emerald-500/40 light:border-emerald-300 shadow-xl overflow-hidden">
            {/* Icon with Animation */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-1 sm:mb-1.5">
              <motion.div
                className="relative flex-shrink-0"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-500 dark:to-teal-500 light:from-emerald-400 light:to-teal-400 rounded-lg flex items-center justify-center shadow-lg relative">
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <GitBranch className="text-white" size={12} />
                </div>
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white dark:text-white light:text-emerald-900 text-[10px] sm:text-xs md:text-sm truncate" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}>
                  {t('banner.family.title')}
                </h3>
                <motion.div
                  className="flex items-center gap-0.5 sm:gap-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600" size={8} />
                  <span className="text-emerald-300 dark:text-emerald-300 light:text-emerald-600 text-[8px] sm:text-[9px] md:text-[10px] truncate">{t('banner.family.tagline')}</span>
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-500 dark:to-teal-500 light:from-emerald-600 light:to-teal-600 text-white py-1 sm:py-1.5 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 shadow-lg"
            >
              <span className="text-[9px] sm:text-[10px] md:text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
                {t('banner.common.explore')}
              </span>
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={10} />
              </motion.div>
            </motion.button>

            {/* Floating Particles */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-emerald-400/60 rounded-full"
                style={{
                  left: `${30 + i * 40}%`,
                  bottom: '30%',
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT BANNER - Health Index */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-2 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.03, x: -5 }}
          className="relative group cursor-pointer"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-500/30 via-pink-500/30 to-red-500/30 rounded-xl blur-lg"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Banner Card */}
          <div className="relative w-28 xs:w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 bg-gradient-to-br from-rose-900/95 via-pink-900/95 to-red-900/95 dark:from-rose-900/95 dark:via-pink-900/95 dark:to-red-900/95 light:from-rose-50 light:via-pink-50 light:to-red-50 backdrop-blur-md rounded-xl p-1.5 sm:p-2 md:p-2.5 lg:p-3 border border-rose-500/40 dark:border-rose-500/40 light:border-rose-300 shadow-xl overflow-hidden">
            {/* Icon with Animation */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-1 sm:mb-1.5">
              <motion.div
                className="relative flex-shrink-0"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-rose-500 to-pink-500 dark:from-rose-500 dark:to-pink-500 light:from-rose-400 light:to-pink-400 rounded-lg flex items-center justify-center shadow-lg relative">
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="text-white" size={12} fill="currentColor" />
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white dark:text-white light:text-rose-900 text-[10px] sm:text-xs md:text-sm truncate" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}>
                  {t('banner.health.title')}
                </h3>
                <motion.div
                  className="flex items-center gap-0.5 sm:gap-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Activity className="text-rose-400 dark:text-rose-400 light:text-rose-600" size={8} />
                  <span className="text-rose-300 dark:text-rose-300 light:text-rose-600 text-[8px] sm:text-[9px] md:text-[10px] truncate">{t('banner.health.tagline')}</span>
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-500 dark:to-pink-500 light:from-rose-600 light:to-pink-600 text-white py-1 sm:py-1.5 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 shadow-lg"
            >
              <span className="text-[9px] sm:text-[10px] md:text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600 }}>
                {t('banner.common.explore')}
              </span>
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight size={10} />
              </motion.div>
            </motion.button>

            {/* Heartbeat Line Animation */}
            <div className="absolute bottom-1 left-2 right-2 h-4 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <motion.path
                  d="M0,10 L20,10 L25,5 L30,15 L35,10 L100,10"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-rose-400"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>

            {/* Floating Particles */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-rose-400/60 rounded-full"
                style={{
                  right: `${30 + i * 40}%`,
                  bottom: '30%',
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: -10,
              opacity: 0 
            }}
            animate={{ 
              y: '110vh',
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 sm:pt-12 md:pt-8 lg:pt-4">
        {/* Welcome Title with Tech Animation */}
        <div className="pt-4 pb-4 text-center px-20 sm:px-24 md:px-28 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/40 via-teal-500/40 to-purple-500/40 dark:from-blue-500/40 dark:via-teal-500/40 dark:to-purple-500/40 light:from-blue-300/30 light:via-teal-300/30 light:to-purple-300/30 animate-pulse" />
            
            {/* Main Title - Tech Font - Smaller for one line */}
            <h1 className="relative text-base sm:text-xl md:text-2xl lg:text-3xl text-white dark:text-white light:bg-gradient-to-r light:from-blue-600 light:to-teal-500 light:bg-clip-text light:text-transparent tracking-wide transition-colors whitespace-nowrap" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}>
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 dark:from-blue-400 dark:via-teal-400 dark:to-blue-400 light:from-blue-600 light:via-teal-500 light:to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #60a5fa, #2dd4bf, #60a5fa)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite',
                  textShadow: '0 0 30px rgba(96, 165, 250, 0.5), 0 0 60px rgba(45, 212, 191, 0.3)',
                }}
              >
                {displayedText}
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-0.5 h-5 sm:h-7 md:h-8 lg:h-10 bg-teal-400 ml-1 align-middle"
                style={{ boxShadow: '0 0 10px rgba(45, 212, 191, 0.8)' }}
              />
            </h1>

            {/* Sparkle Icons */}
            <motion.div
              className="absolute -top-3 -right-6 md:-right-8"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="text-teal-400 dark:text-teal-400 light:text-blue-500" size={16} style={{ filter: 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.6))' }} />
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -left-6 md:-left-8"
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Sparkles className="text-blue-400 dark:text-blue-400 light:text-teal-500" size={14} style={{ filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.6))' }} />
            </motion.div>
          </motion.div>

          {/* Subtitle Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-2 flex items-center justify-center gap-2"
          >
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500 }}>
              AI-Powered Solutions
            </span>
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 py-2 sm:py-3 border-t border-gray-800/30 dark:border-gray-800/30 light:border-blue-100/50">
          {/* Logo in Navigation */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 sm:gap-2 mr-1 sm:mr-2"
          >
            <motion.div 
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40 border-2 border-white/20 relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50"></div>
              <span className="relative text-white text-[6px] sm:text-[7px] md:text-[8px] tracking-tighter leading-none text-center whitespace-nowrap px-0.5">
                HOME.AI
              </span>
            </motion.div>
            <span className="text-sm sm:text-base md:text-lg text-black dark:text-white" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 600 }}>HOME.AI</span>
          </motion.div>

          {/* Vertical Divider */}
          <div className="h-5 sm:h-6 w-px bg-gray-700 dark:bg-gray-700 light:bg-blue-200" />
          
          <Card className="bg-blue-600 dark:bg-blue-600 border-blue-500 p-0 overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMissionOpen(true)}
              className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 transition-all relative group w-full"
            >
              {t('nav.mission')}
            </motion.button>
          </Card>
          
          <Card className="bg-blue-600 dark:bg-blue-600 border-blue-500 p-0 overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCoreValuesOpen(true)}
              className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 transition-all relative group w-full"
            >
              {t('nav.coreValues')}
            </motion.button>
          </Card>
          
          <Card className="bg-blue-600 dark:bg-blue-600 border-blue-500 p-0 overflow-hidden">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 transition-all relative group block w-full"
            >
              {t('nav.support')}
            </motion.a>
          </Card>
          
          <Card className="bg-blue-600 dark:bg-blue-600 border-blue-500 p-0 overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoginOpen(true)}
              className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 transition-all relative group w-full"
            >
              {t('nav.login')}
            </motion.button>
          </Card>
          
          {/* Theme Dropdown */}
          <div className="relative">
            <Card className="bg-blue-600 dark:bg-blue-600 border-blue-500 p-0 overflow-hidden">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 transition-all flex items-center gap-1 w-full"
              >
                {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                <ChevronDown size={12} className={`transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
              </motion.button>
            </Card>
            
            {isThemeOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsThemeOpen(false)}
                />
                
                {/* Dropdown Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-[#0f1f2e] dark:bg-[#0f1f2e] light:bg-white border border-gray-700 dark:border-gray-700 light:border-blue-100 rounded-lg shadow-lg light:shadow-xl overflow-hidden z-20"
                >
                  <button
                    onClick={() => handleThemeSelect('light')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-blue-50 transition-colors flex items-center gap-2 ${
                      theme === 'light' ? 'text-teal-400 light:text-blue-600 light:bg-blue-50' : 'text-gray-300 dark:text-gray-300 light:text-gray-700'
                    }`}
                  >
                    <Sun size={16} />
                    {t('theme.light')}
                  </button>
                  <button
                    onClick={() => handleThemeSelect('dark')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-blue-50 transition-colors flex items-center gap-2 ${
                      theme === 'dark' ? 'text-teal-400 light:text-blue-600 light:bg-blue-50' : 'text-gray-300 dark:text-gray-300 light:text-gray-700'
                    }`}
                  >
                    <Moon size={16} />
                    {t('theme.dark')}
                  </button>
                </motion.div>
              </>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <Card className="bg-blue-600 dark:bg-blue-600 border-blue-500 p-0 overflow-hidden">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="text-xs sm:text-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 transition-all flex items-center gap-1 w-full"
              >
                {t('nav.language')}
                <ChevronDown size={12} className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </motion.button>
            </Card>
            {isLanguageOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsLanguageOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-[#0f1f2e] dark:bg-[#0f1f2e] light:bg-white border border-gray-700 dark:border-gray-700 light:border-blue-100 rounded-lg shadow-lg light:shadow-xl overflow-hidden z-20"
                >
                  {availableLanguages.map(({ code }) => {
                    const label = code === 'vi' ? t('lang.vietnamese') : t('lang.english');
                    const isActive = language === code;
                    return (
                      <button
                        key={code}
                        onClick={() => handleLanguageSelect(code as Language)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-blue-50 transition-colors ${
                          isActive ? 'text-teal-400 light:text-blue-600 light:bg-blue-50' : 'text-gray-300 dark:text-gray-300 light:text-gray-700'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </motion.div>
              </>
            )}
          </div>
        </nav>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      
      {/* Mission Modal */}
      <MissionModal isOpen={isMissionOpen} onClose={() => setIsMissionOpen(false)} />
      
      {/* Core Values Modal */}
      <CoreValuesModal isOpen={isCoreValuesOpen} onClose={() => setIsCoreValuesOpen(false)} />

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
}

