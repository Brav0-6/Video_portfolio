import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-light/10 px-5 sm:px-8 md:px-10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="text-light font-bold text-2xl tracking-wider uppercase inline-block mb-4">
              Joel<span className="text-sm font-light ml-1 opacity-60">films</span>
            </Link>
            <p className="text-light/40 font-light text-sm leading-relaxed max-w-xs">
              Crafting cinematic wedding films that capture the magic of your most unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-light/40 mb-5 font-medium">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Showcase', href: '#showcase' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(link.href.replace('#', ''));
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-light/50 font-light text-sm hover:text-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/works" className="text-light/50 font-light text-sm hover:text-light transition-colors duration-300">
                  All Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-light/40 mb-5 font-medium">Services</h4>
            <ul className="space-y-3">
              {['Wedding Films', 'Engagement Sessions', 'Event Coverage', 'Pre-Wedding Shoots', 'Drone Footage'].map((item) => (
                <li key={item}>
                  <span className="text-light/50 font-light text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-light/40 mb-5 font-medium">Follow</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Instagram', icon: 'IG' },
                { name: 'YouTube', icon: 'YT' },
                { name: 'Vimeo', icon: 'VM' },
                { name: 'Facebook', icon: 'FB' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex items-center gap-3 text-light/50 hover:text-light transition-colors duration-300 group"
                >
                  <span className="w-8 h-8 rounded-full border border-light/15 flex items-center justify-center text-[10px] font-medium group-hover:border-light/30 transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm font-light">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-light/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-light/30 text-xs font-light flex items-center gap-1.5">
            © {currentYear} Joel Films. Made with <Heart size={12} className="text-red-400" fill="currentColor" /> All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-light/40 hover:text-light text-xs uppercase tracking-widest font-light transition-colors duration-300 group"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
