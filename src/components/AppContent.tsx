'use client';

import { ActionButtons } from './ActionButtons';
import { BuildingManagementIntro } from './BuildingManagementIntro';
import { CafeOnlineIntro } from './CafeOnlineIntro';
import { CompanyFooter } from './CompanyFooter';
import { FamilyTreeIntro } from './FamilyTreeIntro';
import { FleetManagementIntro } from './FleetManagementIntro';
import { FloatingContact } from './FloatingContact';
import { BackToTop } from './BackToTop';
import { FundOnlineIntro } from './FundOnlineIntro';
import { HealthIndexIntro } from './HealthIndexIntro';
import { HomeAIHeader } from './HomeAIHeader';
import { OnlineSalesIntro } from './OnlineSalesIntro';
import { CVOnlineIntro } from './CVOnlineIntro';
import { Toaster } from './ui/sonner';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext';

function AppContentInner() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-50 dark:from-[#0a0e1a] dark:via-[#1a2a3a] dark:to-[#0a1929] transition-colors relative">
      {/* Subtle radial glow for depth in both modes */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(147,197,253,0.15)_0%,_transparent_100%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(59,130,246,0.1)_0%,_transparent_100%)]" />
      
      <HomeAIHeader />

      {/* Spacer for fixed header */}
      <div className="h-52 sm:h-48 md:h-56 lg:h-48 xl:h-48" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 sm:pt-4 md:pt-6 lg:pt-4">
        {/* Action Buttons */}
        <ActionButtons />

        {/* Family Tree Introduction */}
        <FamilyTreeIntro />

        {/* Health Index Introduction */}
        <HealthIndexIntro />

        {/* Online Sales Introduction */}
        <OnlineSalesIntro />

        {/* CV Online Introduction */}
        <CVOnlineIntro />

        {/* Fund Online Introduction */}
        <FundOnlineIntro />

        {/* Cafe Online Introduction */}
        <CafeOnlineIntro />

        {/* Building Management Introduction */}
        <BuildingManagementIntro />

        {/* Fleet Management Introduction */}
        <FleetManagementIntro />
      </main>

      {/* Company Footer */}
      <CompanyFooter />

      {/* Floating Contact Button */}
      <FloatingContact />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Toast Notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}

export function AppContent() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContentInner />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default AppContent;


