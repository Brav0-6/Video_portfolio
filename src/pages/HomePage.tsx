import React from 'react';
import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ShowcaseSection from '../sections/ShowcaseSection';
import PricingSection from '../sections/PricingSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';

const HomePage: React.FC = () => {
  return (
    <main style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ShowcaseSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomePage;
