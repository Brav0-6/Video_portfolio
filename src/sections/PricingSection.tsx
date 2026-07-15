import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const pricingTiers = [
  {
    name: 'Essential',
    price: '$1,500',
    description: 'Perfect for intimate ceremonies and small gatherings',
    features: [
      '4 Hours Coverage',
      '1 Videographer',
      '3-5 Minute Highlight Reel',
      'Cinematic Color Grading',
      'Licensed Music',
      'Digital Delivery',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$3,500',
    description: 'Full ceremony and reception coverage for your perfect day',
    features: [
      '8 Hours Coverage',
      '2 Videographers',
      '8-10 Minute Highlight Film',
      'Full Ceremony Edit',
      'Drone Aerial Footage',
      'Cinematic Color Grading',
      'Licensed Music',
      'USB Delivery + Digital',
    ],
    popular: true,
  },
  {
    name: 'Cinematic',
    price: '$6,000',
    description: 'The ultimate cinematic wedding film experience',
    features: [
      'Full Day Coverage',
      '2+ Videographers',
      '15-20 Min Cinematic Film',
      'Full Ceremony + Reception Edit',
      'Drone Aerial Footage',
      'Same-Day Edit Screening',
      'Pre-Wedding Session',
      'Raw Footage Archive',
      'Cinematic Color Grading',
      'Premium USB Box + Digital',
    ],
    popular: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section
      id="pricing"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight text-dark mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Pricing
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-center text-dark/50 font-light max-w-xl mx-auto mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}>
          Every love story is unique. Choose a package that fits your vision, or contact us for a custom quote.
        </p>
      </FadeIn>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {pricingTiers.map((tier, i) => (
          <FadeIn key={tier.name} delay={i * 0.12} y={40}>
            <div
              className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col ${
                tier.popular
                  ? 'bg-dark text-light shadow-2xl shadow-dark/30 scale-[1.02] md:scale-105'
                  : 'bg-white text-dark border border-dark/10 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest text-white px-6 py-2 rounded-full"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-lg sm:text-xl font-semibold uppercase tracking-wider mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl font-black">{tier.price}</span>
              </div>

              {/* Description */}
              <p className={`text-sm font-light leading-relaxed mb-8 ${tier.popular ? 'text-light/60' : 'text-dark/50'}`}>
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${tier.popular ? 'bg-light/10' : 'bg-dark/5'}`}>
                      <Check size={14} className={tier.popular ? 'text-light' : 'text-dark'} />
                    </div>
                    <span className={`text-sm font-light ${tier.popular ? 'text-light/80' : 'text-dark/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full rounded-full font-medium uppercase tracking-widest py-4 text-sm transition-all duration-300 ${
                  tier.popular
                    ? 'text-white hover:opacity-90'
                    : 'bg-dark text-white hover:bg-dark/90'
                }`}
                style={
                  tier.popular
                    ? {
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25)',
                      }
                    : undefined
                }
              >
                Book Now
              </button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
