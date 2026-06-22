import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CinematicDivider from '@/components/CinematicDivider';

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
