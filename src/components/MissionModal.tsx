import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Target, Home, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MissionModal({ isOpen, onClose }: MissionModalProps) {
  const { t } = useLanguage();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        hideCloseButton
        className="w-[85vw] h-[70vh] max-w-5xl bg-white text-black border-gray-200 p-0 overflow-hidden flex flex-col sm:max-w-5xl"
      >
        {/* Header */}
        <div className="relative bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-black">
              <Target className="text-teal-500" size={22} strokeWidth={1.8} />
              <span>{t('mission.title')}</span>
            </DialogTitle>
            <DialogDescription className="text-black/70 mt-0.5 text-sm">
              {t('mission.subtitle')}
            </DialogDescription>
          </DialogHeader>

          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-black/60 hover:text-black transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content - 2 Columns Layout */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full grid grid-cols-2 gap-0 py-4">
            {/* Column 1: Easy-to-use AI */}
            <div className="bg-white border-r border-gray-200 px-8 py-4 flex flex-col justify-start">
              {/* Header with Icon and Number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Target className="text-blue-500" size={24} strokeWidth={1.8} />
                </div>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="text-black text-xs">1</span>
                </div>
                <h3 className="text-black flex-1">
                  {t('mission.easyAI')}
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-black text-sm leading-relaxed">
                  <strong>{t('mission.easyAI.label')}</strong> {t('mission.easyAI.text')}
                </p>

                <p className="text-black text-sm leading-relaxed">
                  {t('mission.easyAI.detail')}
                </p>
              </div>
            </div>

            {/* Column 2: Home efficiency */}
            <div className="bg-white px-8 py-4 flex flex-col justify-start">
              {/* Header with Icon and Number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Home className="text-emerald-500" size={24} strokeWidth={1.8} />
                </div>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="text-black text-xs">2</span>
                </div>
                <h3 className="text-black flex-1">
                  {t('mission.homeEfficiency')}
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-black text-sm leading-relaxed">
                  <strong>{t('mission.homeEfficiency.label')}</strong> {t('mission.homeEfficiency.text')}
                </p>

                <p className="text-black text-sm leading-relaxed">
                  {t('mission.homeEfficiency.detail')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

