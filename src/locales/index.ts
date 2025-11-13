import { en } from './en';
import { vi } from './vi';
import { Language, Translations } from './types';

export type { Language, Translations } from './types';

export const translations: Record<Language, Translations> = {
  vi,
  en,
};

export const availableLanguages: { code: Language; name: string }[] = [
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'en', name: 'English' },
];

export const getTranslation = (language: Language, key: string): string => {
  return translations[language]?.[key] ?? key;
};
