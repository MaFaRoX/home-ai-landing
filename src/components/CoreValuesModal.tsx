import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Sparkles, Heart, TrendingUp, Lightbulb, X, Edit2, Save, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
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
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [coreValues, setCoreValues] = useState<CoreValue[]>(defaultCoreValues);
  const [editingValues, setEditingValues] = useState<CoreValue[]>(defaultCoreValues);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('coreValues');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Restore icons
        const restored = parsed.map((val: any) => ({
          ...val,
          icon: defaultCoreValues.find(d => d.id === val.id)?.icon || Sparkles,
        }));
        setCoreValues(restored);
        setEditingValues(restored);
      } catch (e) {
        console.error('Error loading core values:', e);
      }
    }
  }, []);

  const handleSave = () => {
    setCoreValues(editingValues);
    // Save to localStorage (without icon functions)
    const toSave = editingValues.map(({ icon, ...rest }) => rest);
    localStorage.setItem('coreValues', JSON.stringify(toSave));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingValues(coreValues);
    setIsEditing(false);
  };

  const handleFieldChange = (id: number, field: keyof CoreValue, value: string) => {
    setEditingValues(prev =>
      prev.map(val => (val.id === id ? { ...val, [field]: value } : val))
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        hideCloseButton
        className="w-[100vw] h-[80vh] max-w-none bg-white text-black border-gray-200 p-0 overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="relative bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-black">
              <Sparkles className="text-teal-500" size={22} strokeWidth={1.8} />
              <span>{t('coreValues.title')}</span>
            </DialogTitle>
            <DialogDescription className="text-black/70 mt-0.5 text-sm">
              {t('coreValues.subtitle')}
            </DialogDescription>
          </DialogHeader>
          
          {/* Admin Controls */}
          <div className="absolute right-14 top-3 flex items-center gap-2">
            {isAdminMode && (
              <>
                {isEditing ? (
                  <>
                    <button
                      onClick={handleCancel}
                      className="px-3 py-1.5 text-black/70 hover:text-black transition-colors border border-gray-300 rounded-lg text-sm"
                    >
                      {t('coreValues.cancel')}
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-3 py-1.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg flex items-center gap-1 transition-colors text-sm"
                    >
                      <Save size={16} />
                      {t('coreValues.save')}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-1 transition-colors text-sm"
                  >
                    <Edit2 size={16} />
                    {t('coreValues.edit')}
                  </button>
                )}
              </>
            )}
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`p-2 rounded-lg transition-colors ${
                isAdminMode
                  ? 'bg-orange-500 text-white'
                  : 'text-black/40 hover:text-black/70'
              }`}
              title="Admin Mode"
            >
              <Settings size={18} />
            </button>
          </div>

          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-black/60 hover:text-black transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content - 4 Columns Layout */}
        <div className="flex-1 overflow-hidden bg-white">
          <div className="h-full grid grid-cols-4 gap-0">
            {(isEditing ? editingValues : coreValues).map((value, index) => {
              const Icon = value.icon;
              const isLast = index === coreValues.length - 1;
              
              return (
                <div
                  key={value.id}
                  className={`${!isLast ? 'border-r border-gray-200' : ''} px-6 py-6 flex flex-col justify-start overflow-y-auto bg-white`}
                >
                  {/* Header with Icon, Number and Title */}
                  <div className="mb-4">
                    <div className="flex items-start justify-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0 border border-gray-200">
                        <Icon className={value.iconColor.replace('text-', 'text-')} size={20} strokeWidth={1.8} />
                      </div>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 border border-gray-200">
                        <span className="text-black text-xs">{value.id}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="w-full">
                      {isEditing ? (
                        <input
                          type="text"
                          value={value.title}
                          onChange={(e) => handleFieldChange(value.id, 'title', e.target.value)}
                          className="w-full text-center text-black bg-white px-2 py-1.5 rounded-lg border border-gray-300 text-sm"
                        />
                      ) : (
                        <h3 className="text-center text-black">
                          {'translationKeys' in value ? t(value.translationKeys.titleKey) : value.title}
                        </h3>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    {isEditing ? (
                        <textarea
                        value={value.description}
                        onChange={(e) => handleFieldChange(value.id, 'description', e.target.value)}
                        className="w-full text-black bg-white px-2 py-1.5 rounded-lg border border-gray-300 min-h-[60px] resize-none text-xs"
                      />
                    ) : (
                      <p className="text-black text-xs leading-relaxed">
                        <strong>{t('coreValues.label')}</strong> {'translationKeys' in value ? t(value.translationKeys.descKey) : value.description}
                      </p>
                    )}
                  </div>

                  {/* Details */}
                  <div>
                    {isEditing ? (
                        <textarea
                        value={value.details}
                        onChange={(e) => handleFieldChange(value.id, 'details', e.target.value)}
                        className="w-full text-black/80 bg-white px-2 py-1.5 rounded-lg border border-gray-300 min-h-[60px] resize-none text-xs"
                      />
                    ) : (
                      <p className="text-black/80 text-xs leading-relaxed">
                        {'translationKeys' in value ? t(value.translationKeys.detailKey) : value.details}
                      </p>
                    )}
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

