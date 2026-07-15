import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, User, MessageSquare } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'wedding',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', eventDate: '', eventType: 'wedding', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-30 -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          Let&apos;s Create
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-center text-light/50 font-light uppercase tracking-widest text-sm sm:text-base mb-16 sm:mb-20">
          Your story deserves to be told beautifully
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Contact Info */}
        <FadeIn delay={0.15} y={30} className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-light mb-6">
                Get in Touch
              </h3>
              <p className="text-light/50 font-light leading-relaxed mb-8"
                style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}>
                Ready to capture your special moments? Let's discuss your vision and create something timeless together.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:joel@joelfilms.com" className="flex items-center gap-4 text-light/70 hover:text-light transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full border border-light/20 flex items-center justify-center group-hover:border-light/40 transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-light/40 mb-1">Email</p>
                  <p className="font-light">joel@joelfilms.com</p>
                </div>
              </a>

              <a href="tel:+1234567890" className="flex items-center gap-4 text-light/70 hover:text-light transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-full border border-light/20 flex items-center justify-center group-hover:border-light/40 transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-light/40 mb-1">Phone</p>
                  <p className="font-light">+1 (234) 567-890</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-light/70">
                <div className="w-12 h-12 rounded-full border border-light/20 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-light/40 mb-1">Based In</p>
                  <p className="font-light">Los Angeles, California</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-light/10">
              <p className="text-xs uppercase tracking-widest text-light/40 mb-4">Follow Us</p>
              <div className="flex gap-4">
                {['Instagram', 'YouTube', 'Vimeo'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-11 h-11 rounded-full border border-light/20 flex items-center justify-center text-light/60 hover:text-light hover:border-light/40 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-medium uppercase">{social.charAt(0)}{social.charAt(1)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.25} y={30} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative">
                <label className="text-xs uppercase tracking-widest text-light/40 mb-2 block">Your Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-light/30" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-light/5 border border-light/10 rounded-xl py-3.5 pl-11 pr-4 text-light font-light text-sm placeholder:text-light/20 focus:outline-none focus:border-light/30 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-widest text-light/40 mb-2 block">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-light/30" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-light/5 border border-light/10 rounded-xl py-3.5 pl-11 pr-4 text-light font-light text-sm placeholder:text-light/20 focus:outline-none focus:border-light/30 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs uppercase tracking-widest text-light/40 mb-2 block">Phone</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-light/30" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-light/5 border border-light/10 rounded-xl py-3.5 pl-11 pr-4 text-light font-light text-sm placeholder:text-light/20 focus:outline-none focus:border-light/30 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="text-xs uppercase tracking-widest text-light/40 mb-2 block">Event Date</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-light/30" />
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-light/5 border border-light/10 rounded-xl py-3.5 pl-11 pr-4 text-light font-light text-sm placeholder:text-light/20 focus:outline-none focus:border-light/30 transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label className="text-xs uppercase tracking-widest text-light/40 mb-2 block">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full bg-light/5 border border-light/10 rounded-xl py-3.5 px-4 text-light font-light text-sm focus:outline-none focus:border-light/30 transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="wedding" className="bg-dark">Wedding</option>
                <option value="engagement" className="bg-dark">Engagement / Pre-Wedding</option>
                <option value="reception" className="bg-dark">Reception</option>
                <option value="event" className="bg-dark">Corporate Event</option>
                <option value="birthday" className="bg-dark">Birthday / Anniversary</option>
                <option value="other" className="bg-dark">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs uppercase tracking-widest text-light/40 mb-2 block">Your Message</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-4 top-4 text-light/30" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your event, vision, and any special requests..."
                  className="w-full bg-light/5 border border-light/10 rounded-xl py-3.5 pl-11 pr-4 text-light font-light text-sm placeholder:text-light/20 focus:outline-none focus:border-light/30 transition-colors duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full font-medium uppercase tracking-widest text-white px-12 py-4 text-sm flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform duration-200 group"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              Send Inquiry
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
