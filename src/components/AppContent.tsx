'use client';

import { ActionButtons } from './ActionButtons';
import { BuildingManagementIntro } from './BuildingManagementIntro';
import { CafeOnlineIntro } from './CafeOnlineIntro';
import { CompanyFooter } from './CompanyFooter';
import { FamilyTreeIntro } from './FamilyTreeIntro';
import { FleetManagementIntro } from './FleetManagementIntro';
import { FloatingContact } from './FloatingContact';
import { FundOnlineIntro } from './FundOnlineIntro';
import { HealthIndexIntro } from './HealthIndexIntro';
import { HomeAIHeader } from './HomeAIHeader';
import { OnlineSalesIntro } from './OnlineSalesIntro';
import { ServiceCards } from './ServiceCards';
import { CVOnlineIntro } from './CVOnlineIntro';
import { Toaster } from './ui/sonner';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext';

function AppContentInner() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-[#0f1f2e] dark:via-[#0a1929] dark:to-[#0f1f2e] transition-colors">
      <HomeAIHeader />

      {/* Spacer for fixed header */}
      <div className="h-36 sm:h-40 md:h-44 lg:h-48" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
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

        {/* Service Cards */}
        <ServiceCards />
      </main>

      {/* Company Footer */}
      <CompanyFooter />

      {/* Floating Contact Button */}
      <FloatingContact />

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


