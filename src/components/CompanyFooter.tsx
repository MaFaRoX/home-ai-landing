import { MapPin, Phone, Mail, Building2, FileText, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export function CompanyFooter() {
  const { t } = useLanguage();

  const companyInfo = [
    {
      icon: Building2,
      label: t('company.info.heading'),
      value: 'HOME.AI Technology Co., Ltd.',
      iconColor: 'text-blue-400',
      lightIconColor: 'light:text-blue-600',
      bgColor: 'bg-blue-500/10',
      lightBgColor: 'light:bg-blue-50',
    },
    {
      icon: MapPin,
      label: t('company.info.address.label'),
      value: t('company.info.address.value'),
      iconColor: 'text-emerald-400',
      lightIconColor: 'light:text-emerald-600',
      bgColor: 'bg-emerald-500/10',
      lightBgColor: 'light:bg-emerald-50',
    },
    {
      icon: FileText,
      label: 'Tax ID',
      value: '2301366805',
      iconColor: 'text-purple-400',
      lightIconColor: 'light:text-purple-600',
      bgColor: 'bg-purple-500/10',
      lightBgColor: 'light:bg-purple-50',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0982000568',
      link: 'tel:0982000568',
      iconColor: 'text-orange-400',
      lightIconColor: 'light:text-orange-600',
      bgColor: 'bg-orange-500/10',
      lightBgColor: 'light:bg-orange-50',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'support@home-ai.com.vn',
      link: 'mailto:support@home-ai.com.vn',
      iconColor: 'text-cyan-400',
      lightIconColor: 'light:text-cyan-600',
      bgColor: 'bg-cyan-500/10',
      lightBgColor: 'light:bg-cyan-50',
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      color: 'hover:bg-blue-600',
      lightColor: 'light:hover:bg-blue-600',
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://tiktok.com',
      color: 'hover:bg-pink-600',
      lightColor: 'light:hover:bg-pink-600',
    },
    {
      name: 'Zalo',
      icon: MessageCircle,
      url: 'https://zalo.me',
      color: 'hover:bg-blue-500',
      lightColor: 'light:hover:bg-blue-500',
    },
  ];

  return (
    <footer className="relative mt-16 border-t border-white/10 dark:border-white/10 light:border-gray-200">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-purple-900/10 dark:via-blue-900/5 dark:to-purple-900/10 light:via-blue-50/50 light:to-purple-50/50 pointer-events-none" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] light:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Logo & Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40 border-2 border-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50"></div>
                <span className="relative text-white text-[10px] tracking-tighter leading-none text-center whitespace-nowrap px-0.5">
                  HOME.AI
                </span>
              </div>
              <div>
                <h3 className="text-gray-900 dark:text-white tracking-wide">HOME.AI</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('company.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {t('company.description')}
            </p>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              {t('company.info.heading')}
            </h4>
            
            {/* Single Card Container */}
            <div className="bg-[#d1d5db] rounded-xl p-3 border border-gray-400 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                {companyInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      className={`flex items-start gap-2 p-2 rounded-lg hover:bg-white transition-all duration-200 group ${info.link ? 'cursor-pointer' : ''}`}
                    >
                      <div className="w-6 h-6 bg-white border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`${info.iconColor}`} size={13} strokeWidth={2} />
                      </div>
                      <p className="text-black text-xs break-words flex-1 leading-tight pt-0.5">{info.value}</p>
                    </motion.div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-200 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 dark:text-gray-300 text-sm mr-2">{t('company.connect')}</span>
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} ${social.lightColor} hover:text-white transition-all duration-200 border border-gray-200 dark:border-white/10 hover:border-transparent`}
                    title={`Home.AI ${social.name}`}
                  >
                    <SocialIcon />
                  </motion.a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-gray-600 dark:text-gray-300 text-sm text-center md:text-right">
              <p dangerouslySetInnerHTML={{ __html: t('company.copyright') }} />
              <p className="text-xs mt-1 opacity-75">{t('company.powered')}</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>
    </footer>
  );
}

