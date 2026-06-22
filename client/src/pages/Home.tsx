import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CinematicDivider from '@/components/CinematicDivider';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import StatsSection from '@/components/StatsSection';
import LatestWorkSection from '@/components/LatestWorkSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import AwardsSection from '@/components/AwardsSection';
import BehindTheScenesSection from '@/components/BehindTheScenesSection';
import CollaborationSection from '@/components/CollaborationSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <PortfolioGallery />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <LatestWorkSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <ProcessSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <StatsSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <TestimonialsSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <PricingSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <ExpertiseSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <AwardsSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <BehindTheScenesSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <CollaborationSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <FAQSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <AboutSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <ServicesSection />
        <div className="py-8 px-4">
          <CinematicDivider />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
