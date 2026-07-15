import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import FadeIn from './FadeIn';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = '/' + href;
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FadeIn delay={0} y={-20} className="relative z-50">
      <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        {/* Logo */}
        <Link to="/" className="text-light font-bold text-xl md:text-2xl tracking-wider uppercase hover:opacity-80 transition-opacity duration-200">
          Joel<span className="text-xs md:text-sm font-light ml-1 opacity-60">films</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-light font-medium uppercase tracking-wider text-sm lg:text-[1.1rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/works"
            className="text-light font-medium uppercase tracking-wider text-sm lg:text-[1.1rem] hover:opacity-70 transition-opacity duration-200 border border-light/30 rounded-full px-5 py-1.5"
          >
            All Works
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-light z-50 relative"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-light font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/works"
              onClick={() => setMobileOpen(false)}
              className="text-light font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity duration-200 border border-light/30 rounded-full px-8 py-2"
            >
              All Works
            </Link>
          </div>
        )}
      </nav>
    </FadeIn>
  );
};

export default Navbar;
