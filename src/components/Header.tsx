import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-gray-900">TechVision</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('header.home')}
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('header.features')}
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('header.about')}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('header.contact')}
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">{t('header.login')}</Button>
            <Button>{t('header.getStarted')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.home')}
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.features')}
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.about')}
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.contact')}
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                  {t('header.login')}
                </Button>
                <Button onClick={() => setIsMenuOpen(false)}>{t('header.getStarted')}</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

