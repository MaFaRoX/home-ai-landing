import { Building2, Bell, MessageSquare, Share2, DollarSign, Users, FileText, ShieldCheck, Wrench, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export function BuildingManagementIntro() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bell,
      titleKey: 'buildingMgmt.feature1.title',
      descKey: 'buildingMgmt.feature1.desc',
      iconColor: 'text-red-400',
      lightIconColor: 'light:text-red-600',
      bgColor: 'bg-red-500/10',
      lightBgColor: 'light:bg-red-50',
    },
    {
      icon: MessageSquare,
      titleKey: 'buildingMgmt.feature2.title',
      descKey: 'buildingMgmt.feature2.desc',
      iconColor: 'text-blue-400',
      lightIconColor: 'light:text-blue-600',
      bgColor: 'bg-blue-500/10',
      lightBgColor: 'light:bg-blue-50',
    },
    {
      icon: Share2,
      titleKey: 'buildingMgmt.feature3.title',
      descKey: 'buildingMgmt.feature3.desc',
      iconColor: 'text-purple-400',
      lightIconColor: 'light:text-purple-600',
      bgColor: 'bg-purple-500/10',
      lightBgColor: 'light:bg-purple-50',
    },
    {
      icon: DollarSign,
      titleKey: 'buildingMgmt.feature4.title',
      descKey: 'buildingMgmt.feature4.desc',
      iconColor: 'text-emerald-400',
      lightIconColor: 'light:text-emerald-600',
      bgColor: 'bg-emerald-500/10',
      lightBgColor: 'light:bg-emerald-50',
    },
    {
      icon: Users,
      titleKey: 'buildingMgmt.feature5.title',
      descKey: 'buildingMgmt.feature5.desc',
      iconColor: 'text-cyan-400',
      lightIconColor: 'light:text-cyan-600',
      bgColor: 'bg-cyan-500/10',
      lightBgColor: 'light:bg-cyan-50',
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
          className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border border-indigo-500/20 dark:border-indigo-500/20 light:border-indigo-200 shadow-sm"
          style={{
            background:
              'linear-gradient(90deg, rgba(199,210,254,0.75), rgba(165,180,252,0.9))',
          }}
        >
          <Building2 className="text-indigo-600 dark:text-indigo-400" size={28} />
          <h2 className="text-gray-900 dark:text-black tracking-wide">
            {t('buildingMgmt.title')}
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
        >
          {t('buildingMgmt.subtitle')}
        </motion.p>
      </div>

      {/* Main Content with Sidebars - 3 Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar - Building Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Buildings Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-indigo-500/20 dark:border-indigo-500/20 light:border-indigo-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-500/20 dark:bg-indigo-500/20 light:bg-indigo-100 rounded-full flex items-center justify-center">
                  <Building2 className="text-indigo-400 dark:text-indigo-400 light:text-indigo-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">{t('buildingMgmt.sidebar.buildings')}</div>
                </div>
              </div>
            </div>

            {/* Residents Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-cyan-500/20 dark:border-cyan-500/20 light:border-cyan-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 dark:bg-cyan-500/20 light:bg-cyan-100 rounded-full flex items-center justify-center">
                  <Users className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">5000+</div>
                  <div className="text-xs text-gray-600">{t('buildingMgmt.sidebar.residents')}</div>
                </div>
              </div>
            </div>

            {/* Satisfaction Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-green-500/20 dark:border-green-500/20 light:border-green-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 dark:bg-green-500/20 light:bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-green-400 dark:text-green-400 light:text-green-600" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-900">98%</div>
                  <div className="text-xs text-gray-600">{t('buildingMgmt.sidebar.satisfaction')}</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 dark:from-indigo-500/20 dark:to-blue-500/20 light:from-indigo-100 light:to-blue-100 rounded-full blur-2xl opacity-50" />
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
                              'linear-gradient(90deg, rgba(199,210,254,0.75), rgba(165,180,252,0.9))',
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
            {/* Maintenance Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-orange-500/20 dark:border-orange-500/20 light:border-orange-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500/20 dark:bg-orange-500/20 light:bg-orange-100 rounded-full flex items-center justify-center">
                  <Wrench className="text-orange-400 dark:text-orange-400 light:text-orange-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('buildingMgmt.sidebar.maintenance.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('buildingMgmt.sidebar.maintenance.desc')}
              </p>
            </div>

            {/* Events Calendar */}
            <div className="bg-white dark:bg-white light:bg-white border border-violet-500/20 dark:border-violet-500/20 light:border-violet-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-500/20 dark:bg-violet-500/20 light:bg-violet-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-violet-400 dark:text-violet-400 light:text-violet-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('buildingMgmt.sidebar.events.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('buildingMgmt.sidebar.events.desc')}
              </p>
            </div>

            {/* Security & Privacy */}
            <div className="bg-white dark:bg-white light:bg-white border border-rose-500/20 dark:border-rose-500/20 light:border-rose-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-rose-500/20 dark:bg-rose-500/20 light:bg-rose-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-rose-400 dark:text-rose-400 light:text-rose-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('buildingMgmt.sidebar.security.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('buildingMgmt.sidebar.security.desc')}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 to-blue-500/20 dark:from-indigo-500/20 dark:to-blue-500/20 light:from-indigo-100 light:to-blue-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent rounded-full"
      />
    </motion.div>
  );
}

