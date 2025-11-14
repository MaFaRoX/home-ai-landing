import { Wallet, Edit, PieChart, Share2, Eye, Layers, DollarSign, Users, TrendingUp, Lock, Bell } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export function FundOnlineIntro() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Layers,
      titleKey: 'fundOnline.feature1.title',
      descKey: 'fundOnline.feature1.desc',
      iconColor: 'text-emerald-400',
      lightIconColor: 'light:text-emerald-600',
      bgColor: 'bg-emerald-500/10',
      lightBgColor: 'light:bg-emerald-50',
    },
    {
      icon: Edit,
      titleKey: 'fundOnline.feature2.title',
      descKey: 'fundOnline.feature2.desc',
      iconColor: 'text-cyan-400',
      lightIconColor: 'light:text-cyan-600',
      bgColor: 'bg-cyan-500/10',
      lightBgColor: 'light:bg-cyan-50',
    },
    {
      icon: PieChart,
      titleKey: 'fundOnline.feature3.title',
      descKey: 'fundOnline.feature3.desc',
      iconColor: 'text-blue-400',
      lightIconColor: 'light:text-blue-600',
      bgColor: 'bg-blue-500/10',
      lightBgColor: 'light:bg-blue-50',
    },
    {
      icon: Share2,
      titleKey: 'fundOnline.feature4.title',
      descKey: 'fundOnline.feature4.desc',
      iconColor: 'text-violet-400',
      lightIconColor: 'light:text-violet-600',
      bgColor: 'bg-violet-500/10',
      lightBgColor: 'light:bg-violet-50',
    },
    {
      icon: Eye,
      titleKey: 'fundOnline.feature5.title',
      descKey: 'fundOnline.feature5.desc',
      iconColor: 'text-teal-400',
      lightIconColor: 'light:text-teal-600',
      bgColor: 'bg-teal-500/10',
      lightBgColor: 'light:bg-teal-50',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border border-emerald-500/20 dark:border-emerald-500/20 light:border-emerald-200 shadow-sm"
          style={{
            background:
              'linear-gradient(90deg, rgba(209,250,229,0.75), rgba(167,243,208,0.9))',
          }}
        >
          <Wallet className="text-emerald-600 dark:text-emerald-400" size={28} />
          <h2 className="text-gray-900 dark:text-black tracking-wide">
            {t('fundOnline.title')}
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
        >
          {t('fundOnline.subtitle')}
        </motion.p>
      </div>

      {/* Main Content with Sidebars - 3 Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar - Fund Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Fund Types Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-emerald-500/20 dark:border-emerald-500/20 light:border-emerald-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/20 dark:bg-emerald-500/20 light:bg-emerald-100 rounded-full flex items-center justify-center">
                  <Layers className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">4+</div>
                  <div className="text-xs text-gray-600">{t('fundOnline.sidebar.types')}</div>
                </div>
              </div>
            </div>

            {/* Total Fund Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 dark:bg-cyan-500/20 light:bg-cyan-100 rounded-full flex items-center justify-center">
                  <DollarSign className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">100M+</div>
                  <div className="text-xs text-gray-600">{t('fundOnline.sidebar.volume')}</div>
                </div>
              </div>
            </div>

            {/* Members Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-violet-500/20 dark:border-violet-500/20 light:border-violet-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500/20 dark:bg-violet-500/20 light:bg-violet-100 rounded-full flex items-center justify-center">
                  <Users className="text-violet-400 dark:text-violet-400 light:text-violet-600" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-900">2000+</div>
                  <div className="text-xs text-gray-600">{t('fundOnline.sidebar.members')}</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/20 dark:to-teal-500/20 light:from-emerald-100 light:to-teal-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>

          {/* Center - Features Table */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-white light:bg-white border border-white/10 dark:border-white/10 light:border-gray-200 rounded-xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr
                          className="border-b border-white/10 dark:border-white/10 light:border-gray-200"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(209,250,229,0.75), rgba(167,243,208,0.9))',
                          }}
                        >
                          <th className="hidden md:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-gray-900 text-xs sm:text-sm whitespace-nowrap">{t('table.icon')}</th>
                          <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-gray-900 text-xs sm:text-sm whitespace-nowrap">{t('table.feature')}</th>
                          <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-gray-900 text-xs sm:text-sm">{t('table.description')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {features.map((feature, index) => {
                          const Icon = feature.icon;
                          return (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.3 }}
                              className="border-b border-white/5 dark:border-white/5 light:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-100 light:hover:bg-gray-50 transition-colors duration-200"
                            >
                              {/* Column 1: Icon - Hidden on mobile */}
                              <td className="hidden md:table-cell px-2 sm:px-3 md:px-4 py-2 sm:py-3 w-12 sm:w-16">
                                <div className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.bgColor} ${feature.lightBgColor} rounded-lg flex items-center justify-center`}>
                                  <Icon className={`${feature.iconColor} ${feature.lightIconColor}`} size={14} strokeWidth={2} />
                                </div>
                              </td>

                              {/* Column 2: Title - More space on mobile, no width restriction */}
                              <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 min-w-[140px] md:min-w-[150px]">
                                <div className="text-gray-900 text-xs sm:text-sm font-medium">
                                  {t(feature.titleKey)}
                                </div>
                              </td>

                              {/* Column 3: Description - More space on mobile */}
                              <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3">
                                <p className="text-gray-700 text-[10px] sm:text-xs leading-relaxed">
                                  {t(feature.descKey)}
                                </p>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Features & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Security Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-green-500/20 dark:border-green-500/20 light:border-green-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500/20 dark:bg-green-500/20 light:bg-green-100 rounded-full flex items-center justify-center">
                  <Lock className="text-green-400 dark:text-green-400 light:text-green-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('fundOnline.sidebar.security.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('fundOnline.sidebar.security.desc')}
              </p>
            </div>

            {/* Auto Reports */}
            <div className="bg-white dark:bg-white light:bg-white border border-blue-500/20 dark:border-blue-500/20 light:border-blue-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-blue-400 dark:text-blue-400 light:text-blue-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('fundOnline.sidebar.reports.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('fundOnline.sidebar.reports.desc')}
              </p>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-white light:bg-white border border-amber-500/20 dark:border-amber-500/20 light:border-amber-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-500/20 dark:bg-amber-500/20 light:bg-amber-100 rounded-full flex items-center justify-center">
                  <Bell className="text-amber-400 dark:text-amber-400 light:text-amber-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('fundOnline.sidebar.notifications.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('fundOnline.sidebar.notifications.desc')}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/20 dark:to-teal-500/20 light:from-emerald-100 light:to-teal-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent rounded-full"
      />
    </motion.div>
  );
}

