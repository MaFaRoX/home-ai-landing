import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              {t('hero.badge')}
            </div>
            
            <h1 className="text-gray-900">
              {t('hero.heading')}
            </h1>
            
            <p className="text-gray-600 max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                {t('hero.cta.primary')}
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play size={20} />
                {t('hero.cta.secondary')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-gray-900">5000+</div>
                <div className="text-gray-600">{t('hero.stats.customers')}</div>
              </div>
              <div>
                <div className="text-gray-900">98%</div>
                <div className="text-gray-600">{t('hero.stats.satisfaction')}</div>
              </div>
              <div>
                <div className="text-gray-900">24/7</div>
                <div className="text-gray-600">{t('hero.stats.support')}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMzY1NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Technology"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

