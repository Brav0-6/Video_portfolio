import React from 'react';
import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-between relative">
        {/* Main Heading */}
        <FadeIn delay={0.15} y={40} className="overflow-hidden px-4 sm:px-6 md:px-8">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-6 sm:mt-4 md:-mt-5 text-center"
            style={{ fontSize: 'clamp(3rem, 14vw, 17.5vw)' }}
          >
            Hi, I&apos;m Joel
          </h1>
        </FadeIn>

        {/* Hero Portrait - Centered */}
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="absolute left-1/2 -translate-x-1/2 z-10 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Joel - Wedding Videographer"
              className="w-full h-auto object-cover drop-shadow-2xl"
            />
          </Magnet>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-light font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a wedding videographer driven by crafting cinematic and unforgettable moments
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default HeroSection;
