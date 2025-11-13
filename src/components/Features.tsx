import { Zap, Shield, TrendingUp, Users, Clock, Globe } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from './LanguageContext';

interface FeatureConfig {
  icon: typeof Zap;
  titleKey: string;
  descKey: string;
}

const features: FeatureConfig[] = [
  {
    icon: Zap,
    titleKey: 'features.items.highPerformance.title',
    descKey: 'features.items.highPerformance.desc',
  },
  {
    icon: Shield,
    titleKey: 'features.items.security.title',
    descKey: 'features.items.security.desc',
  },
  {
    icon: TrendingUp,
    titleKey: 'features.items.growth.title',
    descKey: 'features.items.growth.desc',
  },
  {
    icon: Users,
    titleKey: 'features.items.collaboration.title',
    descKey: 'features.items.collaboration.desc',
  },
  {
    icon: Clock,
    titleKey: 'features.items.time.title',
    descKey: 'features.items.time.desc',
  },
  {
    icon: Globe,
    titleKey: 'features.items.global.title',
    descKey: 'features.items.global.desc',
  },
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
            {t('features.badge')}
          </div>
          <h2 className="text-gray-900 mb-4">
            {t('features.heading')}
          </h2>
          <p className="text-gray-600">
            {t('features.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-600">{t(feature.descKey)}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

