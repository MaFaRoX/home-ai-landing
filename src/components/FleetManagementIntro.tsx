import { Truck, Fuel, Wrench, AlertTriangle, Users, TrendingDown, Settings, Navigation, Calendar, Shield, BarChart3, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export function FleetManagementIntro() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Fuel,
      titleKey: 'fleetMgmt.feature1.title',
      descKey: 'fleetMgmt.feature1.desc',
      iconColor: 'text-amber-400',
      lightIconColor: 'light:text-amber-600',
      bgColor: 'bg-amber-500/10',
      lightBgColor: 'light:bg-amber-50',
    },
    {
      icon: AlertTriangle,
      titleKey: 'fleetMgmt.feature2.title',
      descKey: 'fleetMgmt.feature2.desc',
      iconColor: 'text-red-400',
      lightIconColor: 'light:text-red-600',
      bgColor: 'bg-red-500/10',
      lightBgColor: 'light:bg-red-50',
    },
    {
      icon: Users,
      titleKey: 'fleetMgmt.feature3.title',
      descKey: 'fleetMgmt.feature3.desc',
      iconColor: 'text-blue-400',
      lightIconColor: 'light:text-blue-600',
      bgColor: 'bg-blue-500/10',
      lightBgColor: 'light:bg-blue-50',
    },
    {
      icon: TrendingDown,
      titleKey: 'fleetMgmt.feature4.title',
      descKey: 'fleetMgmt.feature4.desc',
      iconColor: 'text-green-400',
      lightIconColor: 'light:text-green-600',
      bgColor: 'bg-green-500/10',
      lightBgColor: 'light:bg-green-50',
    },
    {
      icon: Settings,
      titleKey: 'fleetMgmt.feature5.title',
      descKey: 'fleetMgmt.feature5.desc',
      iconColor: 'text-purple-400',
      lightIconColor: 'light:text-purple-600',
      bgColor: 'bg-purple-500/10',
      lightBgColor: 'light:bg-purple-50',
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
          className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border border-slate-500/20 dark:border-slate-500/20 light:border-slate-200 shadow-sm"
          style={{
            background:
              'linear-gradient(90deg, rgba(226,232,240,0.75), rgba(203,213,225,0.9))',
          }}
        >
          <Truck className="text-slate-600 dark:text-slate-400" size={28} />
          <h2 className="text-gray-900 dark:text-black tracking-wide">
            {t('fleetMgmt.title')}
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
        >
          {t('fleetMgmt.subtitle')}
        </motion.p>
      </div>

      {/* Main Content with Sidebars - 3 Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar - Fleet Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Vehicles Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-slate-500/20 dark:border-slate-500/20 light:border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-500/20 dark:bg-slate-500/20 light:bg-slate-100 rounded-full flex items-center justify-center">
                  <Truck className="text-slate-400 dark:text-slate-400 light:text-slate-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">120+</div>
                  <div className="text-xs text-gray-600">{t('fleetMgmt.sidebar.vehicles')}</div>
                </div>
              </div>
            </div>

            {/* Distance Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-blue-500/20 dark:border-blue-500/20 light:border-blue-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 rounded-full flex items-center justify-center">
                  <Navigation className="text-blue-400 dark:text-blue-400 light:text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">50K+</div>
                  <div className="text-xs text-gray-600">{t('fleetMgmt.sidebar.distance')}</div>
                </div>
              </div>
            </div>

            {/* Cost Savings Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-green-500/20 dark:border-green-500/20 light:border-green-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 dark:bg-green-500/20 light:bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingDown className="text-green-400 dark:text-green-400 light:text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-900">-30%</div>
                  <div className="text-xs text-gray-600">{t('fleetMgmt.sidebar.costReduction')}</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 dark:from-slate-500/20 dark:to-gray-500/20 light:from-slate-100 light:to-gray-100 rounded-full blur-2xl opacity-50" />
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
                              'linear-gradient(90deg, rgba(226,232,240,0.75), rgba(203,213,225,0.9))',
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
            {/* Maintenance Schedule */}
            <div className="bg-white dark:bg-white light:bg-white border border-orange-500/20 dark:border-orange-500/20 light:border-orange-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500/20 dark:bg-orange-500/20 light:bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-orange-400 dark:text-orange-400 light:text-orange-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('fleetMgmt.sidebar.maintenance.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('fleetMgmt.sidebar.maintenance.desc')}
              </p>
            </div>

            {/* Real-time Tracking */}
            <div className="bg-white dark:bg-white light:bg-white border border-teal-500/20 dark:border-teal-500/20 light:border-teal-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-500/20 dark:bg-teal-500/20 light:bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="text-teal-400 dark:text-teal-400 light:text-teal-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('fleetMgmt.sidebar.tracking.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('fleetMgmt.sidebar.tracking.desc')}
              </p>
            </div>

            {/* Analytics & Reports */}
            <div className="bg-white dark:bg-white light:bg-white border border-violet-500/20 dark:border-violet-500/20 light:border-violet-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-500/20 dark:bg-violet-500/20 light:bg-violet-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-violet-400 dark:text-violet-400 light:text-violet-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('fleetMgmt.sidebar.reports.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('fleetMgmt.sidebar.reports.desc')}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-bl from-slate-500/20 to-gray-500/20 dark:from-slate-500/20 dark:to-gray-500/20 light:from-slate-100 light:to-gray-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-slate-500/50 to-transparent rounded-full"
      />
    </motion.div>
  );
}

