import { Activity, Shield, Filter, Heart, Zap, FlaskConical, HeartPulse, Users, Star, Award, TrendingUp, CheckCircle, Smartphone } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export function HealthIndexIntro() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Activity,
      titleKey: 'healthIndex.feature1.title',
      descKey: 'healthIndex.feature1.desc',
      iconColor: 'text-red-400',
      lightIconColor: 'light:text-red-600',
      bgColor: 'bg-red-500/10',
      lightBgColor: 'light:bg-red-50',
    },
    {
      icon: Shield,
      titleKey: 'healthIndex.feature2.title',
      descKey: 'healthIndex.feature2.desc',
      iconColor: 'text-green-400',
      lightIconColor: 'light:text-green-600',
      bgColor: 'bg-green-500/10',
      lightBgColor: 'light:bg-green-50',
    },
    {
      icon: Filter,
      titleKey: 'healthIndex.feature3.title',
      descKey: 'healthIndex.feature3.desc',
      iconColor: 'text-blue-400',
      lightIconColor: 'light:text-blue-600',
      bgColor: 'bg-blue-500/10',
      lightBgColor: 'light:bg-blue-50',
    },
    {
      icon: Heart,
      titleKey: 'healthIndex.feature4.title',
      descKey: 'healthIndex.feature4.desc',
      iconColor: 'text-pink-400',
      lightIconColor: 'light:text-pink-600',
      bgColor: 'bg-pink-500/10',
      lightBgColor: 'light:bg-pink-50',
    },
    {
      icon: Zap,
      titleKey: 'healthIndex.feature5.title',
      descKey: 'healthIndex.feature5.desc',
      iconColor: 'text-yellow-400',
      lightIconColor: 'light:text-yellow-600',
      bgColor: 'bg-yellow-500/10',
      lightBgColor: 'light:bg-yellow-50',
    },
    {
      icon: FlaskConical,
      titleKey: 'healthIndex.feature6.title',
      descKey: 'healthIndex.feature6.desc',
      iconColor: 'text-purple-400',
      lightIconColor: 'light:text-purple-600',
      bgColor: 'bg-purple-500/10',
      lightBgColor: 'light:bg-purple-50',
    },
    {
      icon: HeartPulse,
      titleKey: 'healthIndex.feature7.title',
      descKey: 'healthIndex.feature7.desc',
      iconColor: 'text-orange-400',
      lightIconColor: 'light:text-orange-600',
      bgColor: 'bg-orange-500/10',
      lightBgColor: 'light:bg-orange-50',
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
          className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border border-rose-500/20 dark:border-rose-500/20 light:border-rose-200 shadow-sm"
          style={{
            background:
              'linear-gradient(90deg, rgba(254,226,226,0.75), rgba(252,165,165,0.9))',
          }}
        >
          <Activity className="text-red-600 dark:text-red-400" size={28} />
          <h2 className="text-gray-900 dark:text-black tracking-wide">
            {t('healthIndex.title')}
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
        >
          {t('healthIndex.subtitle')}
        </motion.p>
      </div>

      {/* Main Content with Sidebars - 3 Column Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar - Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* User Stats Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-blue-500/20 dark:border-blue-500/20 light:border-blue-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-blue-400 dark:text-blue-400 light:text-blue-600" size={20} />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">50K+</div>
                  <div className="text-xs text-gray-600">{t('healthIndex.sidebar.users.label')}</div>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-amber-500/20 dark:border-amber-500/20 light:border-amber-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-500/20 dark:bg-amber-500/20 light:bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="text-amber-400 dark:text-amber-400 light:text-amber-600" size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900">4.8/5</div>
                  <div className="text-xs text-gray-600">{t('healthIndex.sidebar.rating.label')}</div>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-white dark:bg-white light:bg-white border border-purple-500/20 dark:border-purple-500/20 light:border-purple-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="text-purple-400 dark:text-purple-400 light:text-purple-600" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-900">{t('healthIndex.sidebar.award.title')}</div>
                  <div className="text-xs text-gray-600">{t('healthIndex.sidebar.award.desc')}</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 dark:from-red-500/20 dark:to-pink-500/20 light:from-red-100 light:to-pink-100 rounded-full blur-2xl opacity-50" />
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
                          'linear-gradient(90deg, rgba(254,226,226,0.75), rgba(252,165,165,0.9))',
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

          {/* Right Sidebar - Features Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* App Preview Card */}
            <div className="bg-white dark:bg-white light:bg-white border border-emerald-500/20 dark:border-emerald-500/20 light:border-emerald-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/20 dark:bg-emerald-500/20 light:bg-emerald-100 rounded-full flex items-center justify-center">
                  <Smartphone className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('healthIndex.sidebar.mobile.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('healthIndex.sidebar.mobile.desc')}
              </p>
            </div>

            {/* AI Features */}
            <div className="bg-white dark:bg-white light:bg-white border border-violet-500/20 dark:border-violet-500/20 light:border-violet-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-500/20 dark:bg-violet-500/20 light:bg-violet-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-violet-400 dark:text-violet-400 light:text-violet-600" size={20} />
                </div>
                <div className="text-sm text-gray-900">{t('healthIndex.sidebar.ai.title')}</div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {t('healthIndex.sidebar.ai.desc')}
              </p>
            </div>

            {/* Quick Benefits List */}
            <div className="bg-white dark:bg-white light:bg-white border border-rose-500/20 dark:border-rose-500/20 light:border-rose-200 rounded-xl p-4 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-rose-400 dark:text-rose-400 light:text-rose-600" size={14} />
                  <span className="text-xs text-gray-700">{t('healthIndex.sidebar.benefits.detailReports')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-rose-400 dark:text-rose-400 light:text-rose-600" size={14} />
                  <span className="text-xs text-gray-700">{t('healthIndex.sidebar.benefits.smartReminders')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-rose-400 dark:text-rose-400 light:text-rose-600" size={14} />
                  <span className="text-xs text-gray-700">{t('healthIndex.sidebar.benefits.secureStorage')}</span>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 light:from-cyan-100 light:to-blue-100 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent rounded-full"
      />
    </motion.div>
  );
}

