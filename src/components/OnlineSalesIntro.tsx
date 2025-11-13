import { TrendingUp, Flame, Package, UserCheck, Zap, ShoppingCart, DollarSign, Users, Bell, BarChart3, Target } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export function OnlineSalesIntro() {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      titleKey: 'onlineSales.feature1.title',
      descKey: 'onlineSales.feature1.desc',
      iconColor: 'text-blue-400',
      lightIconColor: 'light:text-blue-600',
      bgColor: 'bg-blue-500/10',
      lightBgColor: 'light:bg-blue-50',
    },
    {
      icon: Flame,
      titleKey: 'onlineSales.feature2.title',
      descKey: 'onlineSales.feature2.desc',
      iconColor: 'text-orange-400',
      lightIconColor: 'light:text-orange-600',
      bgColor: 'bg-orange-500/10',
      lightBgColor: 'light:bg-orange-50',
    },
    {
      icon: Package,
      titleKey: 'onlineSales.feature3.title',
      descKey: 'onlineSales.feature3.desc',
      iconColor: 'text-purple-400',
      lightIconColor: 'light:text-purple-600',
      bgColor: 'bg-purple-500/10',
      lightBgColor: 'light:bg-purple-50',
    },
    {
      icon: UserCheck,
      titleKey: 'onlineSales.feature4.title',
      descKey: 'onlineSales.feature4.desc',
      iconColor: 'text-emerald-400',
      lightIconColor: 'light:text-emerald-600',
      bgColor: 'bg-emerald-500/10',
      lightBgColor: 'light:bg-emerald-50',
    },
    {
      icon: Zap,
      titleKey: 'onlineSales.feature5.title',
      descKey: 'onlineSales.feature5.desc',
      iconColor: 'text-amber-400',
      lightIconColor: 'light:text-amber-600',
      bgColor: 'bg-amber-500/10',
      lightBgColor: 'light:bg-amber-50',
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
          className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border border-orange-500/20 dark:border-orange-500/20 light:border-orange-200 shadow-sm"
          style={{
            background:
              'linear-gradient(90deg, rgba(254,215,170,0.75), rgba(253,164,175,0.9))',
          }}
        >
          <ShoppingCart className="text-orange-600 dark:text-orange-400" size={28} />
          <h2 className="text-gray-900 dark:text-black tracking-wide">
            {t('onlineSales.title')}
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
        >
          {t('onlineSales.subtitle')}
        </motion.p>
      </div>

      {/* Main Content with Sidebars - 3 Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar - Sales Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Orders Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-blue-500/20 dark:border-blue-500/20 light:border-blue-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="text-blue-400 dark:text-blue-400 light:text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">1000+</div>
                  <div className="text-xs text-gray-600">{t('onlineSales.sidebar.orders')}</div>
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-emerald-500/20 dark:border-emerald-500/20 light:border-emerald-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/20 dark:bg-emerald-500/20 light:bg-emerald-100 rounded-full flex items-center justify-center">
                  <DollarSign className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">500M+</div>
                  <div className="text-xs text-gray-600">{t('onlineSales.sidebar.revenue')}</div>
                </div>
              </div>
            </div>

            {/* Customers Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-violet-500/20 dark:border-violet-500/20 light:border-violet-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500/20 dark:bg-violet-500/20 light:bg-violet-100 rounded-full flex items-center justify-center">
                  <Users className="text-violet-400 dark:text-violet-400 light:text-violet-600" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-900">5000+</div>
                  <div className="text-xs text-gray-600">{t('onlineSales.sidebar.customers')}</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 dark:from-orange-500/20 dark:to-red-500/20 light:from-orange-100 light:to-red-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>

          {/* Center - Features Table */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-white light:bg-white border border-white/10 dark:border-white/10 light:border-gray-200 rounded-xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className="border-b border-white/10 dark:border-white/10 light:border-gray-200"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(254,215,170,0.75), rgba(253,164,175,0.9))',
                      }}
                    >
                      <th className="px-6 py-4 text-left text-gray-900 whitespace-nowrap">{t('table.icon')}</th>
                      <th className="px-6 py-4 text-left text-gray-900 whitespace-nowrap">{t('table.feature')}</th>
                      <th className="px-6 py-4 text-left text-gray-900">{t('table.description')}</th>
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
                          {/* Column 1: Icon */}
                          <td className="px-3 py-2 w-16">
                            <div className={`w-8 h-8 ${feature.bgColor} ${feature.lightBgColor} rounded-lg flex items-center justify-center`}>
                              <Icon className={`${feature.iconColor} ${feature.lightIconColor}`} size={16} strokeWidth={2} />
                            </div>
                          </td>

                          {/* Column 2: Title */}
                          <td className="px-3 py-2 w-48">
                            <div className="text-gray-900 text-sm">
                              {t(feature.titleKey)}
                            </div>
                          </td>

                          {/* Column 3: Description */}
                          <td className="px-3 py-2">
                            <p className="text-gray-700 text-xs leading-relaxed">
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

          {/* Right Sidebar - Features & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* AI Analytics Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 dark:bg-cyan-500/20 light:bg-cyan-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('onlineSales.sidebar.analytics.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('onlineSales.sidebar.analytics.desc')}
              </p>
            </div>

            {/* Real-time Notifications */}
            <div className="bg-white dark:bg-white light:bg-white border border-rose-500/20 dark:border-rose-500/20 light:border-rose-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-rose-500/20 dark:bg-rose-500/20 light:bg-rose-100 rounded-full flex items-center justify-center">
                  <Bell className="text-rose-400 dark:text-rose-400 light:text-rose-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('onlineSales.sidebar.notifications.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('onlineSales.sidebar.notifications.desc')}
              </p>
            </div>

            {/* Smart Reports */}
            <div className="bg-white dark:bg-white light:bg-white border border-amber-500/20 dark:border-amber-500/20 light:border-amber-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-500/20 dark:bg-amber-500/20 light:bg-amber-100 rounded-full flex items-center justify-center">
                  <Target className="text-amber-400 dark:text-amber-400 light:text-amber-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('onlineSales.sidebar.reports.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('onlineSales.sidebar.reports.desc')}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/20 to-red-500/20 dark:from-orange-500/20 dark:to-red-500/20 light:from-orange-100 light:to-red-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent rounded-full"
      />
    </motion.div>
  );
}

