import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

const benefitKeys = [
  'about.benefits.0',
  'about.benefits.1',
  'about.benefits.2',
  'about.benefits.3',
  'about.benefits.4',
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MjM1MDY5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Office Team"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-gray-900">{t('about.projects')}</div>
                  <div className="text-gray-600">{t('about.projects.subtitle')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
              {t('about.badge')}
            </div>
            
            <h2 className="text-gray-900">
              {t('about.heading')}
            </h2>
            
            <p className="text-gray-600">
              {t('about.description')}
            </p>

            <ul className="space-y-3">
              {benefitKeys.map((key, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700">{t(key)}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg">{t('about.cta')}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

