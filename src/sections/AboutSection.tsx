import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative Corner Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none float-animation">
        <img
          src="/assets/about/tripod.png"
          alt="Tripod"
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-60"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none float-animation-delayed">
        <img
          src="/assets/about/video-camera.png"
          alt="Video Camera"
          className="w-[100px] sm:w-[140px] md:w-[180px] opacity-60"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none float-animation-delayed">
        <img
          src="/assets/about/instagram-icon.png"
          alt="Instagram"
          className="w-[120px] sm:w-[160px] md:w-[210px] opacity-60"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none float-animation">
        <img
          src="/assets/about/dslr-camera.png"
          alt="DSLR Camera"
          className="w-[130px] sm:w-[170px] md:w-[220px] opacity-60"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10 w-full max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Animated Text - Increased max-width for better alignment under huge title */}
        <AnimatedText
          text="With more than five years of experience in wedding videography, I focus on cinematic storytelling, capturing raw emotions, and creating timeless films. I truly enjoy working with couples who want their love story told in the most beautiful way. From intimate ceremonies to grand celebrations, every moment is crafted with care. Let's create something incredible together!"
          className="text-light font-medium text-center leading-relaxed max-w-3xl"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      {/* Buttons - Better alignment and consistent padding */}
      <div className="mt-16 sm:mt-20 md:mt-24 relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
        <FadeIn delay={0.2} y={20}>
          <ContactButton className="w-full sm:w-auto flex justify-center" />
        </FadeIn>
        <FadeIn delay={0.35} y={20}>
          <Link
            to="/profile"
            className="w-full sm:w-auto rounded-full border border-light/30 text-light font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:bg-light/10 transition-all duration-300 flex items-center justify-center gap-2.5 hover:border-light/50"
          >
            <User size={16} />
            View Full Profile
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
