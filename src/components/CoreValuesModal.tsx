import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Sparkles, Heart, TrendingUp, Lightbulb, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface CoreValuesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CoreValue {
  id: number;
  title: string;
  icon: any;
  iconColor: string;
  bgColor: string;
  description: string;
  details: string;
  translationKeys?: CoreValueTranslationKeys;
}

interface CoreValueTranslationKeys {
  titleKey: string;
  descKey: string;
  detailKey: string;
}

const defaultCoreValues: (CoreValue & { translationKeys: CoreValueTranslationKeys })[] = [
  {
    id: 1,
    title: 'SIMPLIFY',
    icon: Sparkles,
    iconColor: 'text-teal-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20 light:bg-teal-50',
    description: 'Making ease of use the top priority.',
    details: 'We eliminate complexity so technology feels intuitive for everyone.',
    translationKeys: {
      titleKey: 'coreValues.simplify',
      descKey: 'coreValues.simplify.desc',
      detailKey: 'coreValues.simplify.detail',
    },
  },
  {
    id: 2,
    title: 'UNDERSTAND',
    icon: Heart,
    iconColor: 'text-pink-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20 light:bg-pink-50',
    description: "Always listen and put ourselves in the users' position.",
    details: 'Our products solve real problems and fit everyday habits.',
    translationKeys: {
      titleKey: 'coreValues.understand',
      descKey: 'coreValues.understand.desc',
      detailKey: 'coreValues.understand.detail',
    },
  },
  {
    id: 3,
    title: 'REAL PERFORMANCE',
    icon: TrendingUp,
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20 light:bg-emerald-50',
    description: 'Focus on solutions that deliver clear, measurable results.',
    details: 'Every feature aims to optimise efficiency and reduce costs.',
    translationKeys: {
      titleKey: 'coreValues.performance',
      descKey: 'coreValues.performance.desc',
      detailKey: 'coreValues.performance.detail',
    },
  },
  {
    id: 4,
    title: 'TRUST & SUSTAINABILITY',
    icon: Lightbulb,
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20 light:bg-amber-50',
    description: 'Build products that are reliable, stable, and secure.',
    details: 'We commit to lasting quality and long-term support to earn total trust.',
    translationKeys: {
      titleKey: 'coreValues.trust',
      descKey: 'coreValues.trust.desc',
      detailKey: 'coreValues.trust.detail',
    },
  },
];

export function CoreValuesModal({ isOpen, onClose }: CoreValuesModalProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        hideCloseButton
        className="w-[95vw] h-[90vh] md:w-[85vw] md:h-[80vh] max-w-5xl bg-white text-black border-gray-200 p-0 overflow-hidden flex flex-col sm:max-w-5xl"
      >
        {/* Header */}
        <div className="relative bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex-shrink-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-black">
              <Sparkles className="text-teal-500" size={22} strokeWidth={1.8} />
              <span>{t('coreValues.title')}</span>
            </DialogTitle>
            <DialogDescription className="text-black/70 mt-0.5 text-sm">
              {t('coreValues.subtitle')}
            </DialogDescription>
          </DialogHeader>

          <button
            onClick={onClose}
            className="absolute right-3 md:right-4 top-3 text-black/60 hover:text-black transition-colors"
          >
            <X size={20} className="md:w-[22px] md:h-[22px]" />
          </button>
        </div>

        {/* Content - Responsive Grid Layout */}
        <div className="flex-1 overflow-hidden bg-white">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {defaultCoreValues.map((value, index) => {
              const Icon = value.icon;
              const isLast = index === defaultCoreValues.length - 1;
              
              // Border logic for responsive layout
              // Mobile (1 col): bottom border for items 0,1,2 (not last)
              // Tablet (2 cols): right border for left column (0,2), bottom border for first row (0,1)
              // Desktop (4 cols): right border for items 0,1,2 (not last)
              const borderClasses = [
                !isLast ? 'border-b md:border-b-0' : '', // Mobile: bottom border for all except last
                (index === 0 || index === 2) ? 'md:border-r' : '', // Tablet: right border for left column
                (index < 2) ? 'md:border-b lg:border-b-0' : '', // Tablet: bottom border for first row
                !isLast ? 'lg:border-r' : '', // Desktop: right border for all except last
              ].filter(Boolean).join(' ');
              
              return (
                <div
                  key={value.id}
                  className={`${borderClasses} border-gray-200 px-4 md:px-6 py-4 md:py-6 flex flex-col justify-start overflow-y-auto bg-white`}
                >
                  {/* Header with Icon, Number and Title */}
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <Icon className={`${value.iconColor.replace('text-', 'text-')} w-5 h-5 md:w-6 md:h-6`} strokeWidth={1.8} />
                    </div>
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-black text-xs">{value.id}</span>
                    </div>
                    <h3 className="text-black flex-1 text-sm md:text-base">
                      {t(value.translationKeys.titleKey)}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <p className="text-black text-sm leading-relaxed">
                      <strong>{t('coreValues.label')}</strong> {t(value.translationKeys.descKey)}
                    </p>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-black/80 text-sm leading-relaxed">
                      {t(value.translationKeys.detailKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

