import { useState } from 'react';
import { ELibrarySection } from './components/ELibrarySection';
import { EventsSection } from './components/EventsSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InfoModal } from './components/InfoModal';
import { ServicesSection } from './components/ServicesSection';
import { VisitContactSection } from './components/VisitContactSection';

export default function App() {
  const [printingModalOpen, setPrintingModalOpen] = useState(false);
  const [selectedEnquiryTopic, setSelectedEnquiryTopic] = useState('General Question');

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1B2024]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#1B4D3E] focus:text-white focus:font-medium"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <ServicesSection
          onOpenPrintingGuide={() => setPrintingModalOpen(true)}
          onSelectEnquiryTopic={(topic) => setSelectedEnquiryTopic(topic)}
        />
        <EventsSection
          onSelectEnquiryTopic={(topic) => setSelectedEnquiryTopic(topic)}
        />
        <ELibrarySection
          onSelectEnquiryTopic={(topic) => setSelectedEnquiryTopic(topic)}
        />
        <VisitContactSection preselectedTopic={selectedEnquiryTopic} />
      </main>

      <Footer />

      <InfoModal
        isOpen={printingModalOpen}
        onClose={() => setPrintingModalOpen(false)}
      />
    </div>
  );
}
