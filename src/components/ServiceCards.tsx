import { Users, Calendar, DollarSign, Globe, ShoppingCart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ServiceConfig {
  icon: typeof Users;
  titleKey: string;
  color: string;
  hoverColor: string;
  lightColor: string;
  lightHoverColor: string;
  lightIconBg: string;
}

export function ServiceCards() {
  const { t } = useLanguage();

  const services: ServiceConfig[] = [
    {
      icon: Users,
      titleKey: 'serviceCard.familyTree',
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
      lightColor: 'light:bg-white light:border light:border-blue-100',
      lightHoverColor: 'light:hover:shadow-xl light:hover:border-blue-200',
      lightIconBg: 'light:bg-gradient-to-br light:from-teal-400 light:to-teal-500',
    },
    {
      icon: Calendar,
      titleKey: 'serviceCard.familyCalendar',
      color: 'bg-emerald-600',
      hoverColor: 'hover:bg-emerald-700',
      lightColor: 'light:bg-white light:border light:border-blue-100',
      lightHoverColor: 'light:hover:shadow-xl light:hover:border-blue-200',
      lightIconBg: 'light:bg-gradient-to-br light:from-emerald-500 light:to-emerald-600',
    },
    {
      icon: DollarSign,
      titleKey: 'serviceCard.familyFund',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      lightColor: 'light:bg-white light:border light:border-blue-100',
      lightHoverColor: 'light:hover:shadow-xl light:hover:border-blue-200',
      lightIconBg: 'light:bg-gradient-to-br light:from-green-400 light:to-green-500',
    },
    {
      icon: Globe,
      titleKey: 'serviceCard.fundOnline',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600',
      lightColor: 'light:bg-white light:border light:border-blue-100',
      lightHoverColor: 'light:hover:shadow-xl light:hover:border-blue-200',
      lightIconBg: 'light:bg-gradient-to-br light:from-cyan-400 light:to-cyan-500',
    },
    {
      icon: ShoppingCart,
      titleKey: 'serviceCard.onlineSales',
      color: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700',
      lightColor: 'light:bg-white light:border light:border-blue-100',
      lightHoverColor: 'light:hover:shadow-xl light:hover:border-blue-200',
      lightIconBg: 'light:bg-gradient-to-br light:from-indigo-500 light:to-indigo-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className={`${service.color} ${service.lightColor} rounded-2xl p-6 flex flex-col items-center text-center transition-all ${service.hoverColor} ${service.lightHoverColor} light:shadow-md`}
          >
            <div className={`w-16 h-16 bg-white/20 ${service.lightIconBg} rounded-full flex items-center justify-center mb-4 light:shadow-lg`}>
              <Icon className="text-white" size={32} />
            </div>
            <h3 className="text-white dark:text-white light:bg-gradient-to-r light:from-gray-700 light:to-gray-900 light:bg-clip-text light:text-transparent mb-4">{t(service.titleKey)}</h3>
            <button className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-900 light:bg-gradient-to-r light:from-blue-600 light:to-teal-500 light:hover:from-blue-700 light:hover:to-teal-600 text-white px-6 py-2 rounded-lg transition-all w-full light:shadow-md light:hover:shadow-lg">
              {t('service.download')}
            </button>
          </div>
        );
      })}
    </div>
  );
}

