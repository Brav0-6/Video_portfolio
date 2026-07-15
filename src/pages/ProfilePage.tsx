import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Film, Award, Clock, Heart, Star, Users, Video, Aperture, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import Footer from '../sections/Footer';

const stats = [
  { icon: Film, value: '200+', label: 'Wedding Films' },
  { icon: Clock, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '350+', label: 'Happy Couples' },
  { icon: Award, value: '15', label: 'Awards Won' },
];

const skills = [
  { name: 'Cinematic Filming', level: 95 },
  { name: 'Color Grading', level: 90 },
  { name: 'Aerial Drone', level: 88 },
  { name: 'Story Editing', level: 92 },
  { name: 'Sound Design', level: 85 },
  { name: 'Motion Graphics', level: 80 },
];

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Started with a passion for storytelling and a single camera. Shot my first wedding for a close friend and discovered the magic of capturing love stories.',
  },
  {
    year: '2020',
    title: 'Going Professional',
    description: 'Invested in professional cinema equipment. Launched Joel Films as a brand. Covered 30+ weddings in the first professional year despite the pandemic.',
  },
  {
    year: '2021',
    title: 'Building the Team',
    description: 'Brought on a second videographer and a drone pilot. Started offering multi-cam coverage and aerial cinematography for destination weddings.',
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description: 'Won "Best Wedding Film" at the Regional Cinematography Awards. Featured in Wedding Magazine\'s Top 20 Videographers list.',
  },
  {
    year: '2023',
    title: 'Going International',
    description: 'Expanded to destination weddings across Europe and Asia. Shot films in Bali, Tuscany, Santorini, and the Swiss Alps.',
  },
  {
    year: '2024-Present',
    title: 'Crafting Legacy',
    description: 'Now leading a full creative team. Specializing in cinematic narratives that feel like short films. Every project is a new chapter in someone\'s love story.',
  },
];

const gear = [
  { name: 'Sony FX6', type: 'Primary Camera' },
  { name: 'Sony A7S III', type: 'Secondary Camera' },
  { name: 'DJI Inspire 3', type: 'Drone' },
  { name: 'DJI RS4 Pro', type: 'Gimbal' },
  { name: 'Sigma Art Series', type: 'Lenses' },
  { name: 'DaVinci Resolve', type: 'Color Grading' },
];

const ProfilePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-dark relative" style={{ overflowX: 'clip' }}>

      {/* ── Ambient Background Glow ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #B600A8 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #7621B0 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #BE4C00 0%, transparent 70%)' }} />
      </div>

      {/* ── Top Navigation ── */}
      <div className="relative z-10 px-5 sm:px-8 md:px-10 pt-6 sm:pt-8 pb-4">
        <FadeIn delay={0} y={-20}>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-light/60 hover:text-light transition-colors duration-300 text-sm sm:text-base font-light uppercase tracking-wider group"
            >
              <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <Link to="/" className="text-light font-bold text-xl tracking-wider uppercase">
              Joel<span className="text-xs font-light ml-1 opacity-60">films</span>
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* ── Hero Banner ── */}
      <section className="relative z-10 px-5 sm:px-8 md:px-10 pt-12 sm:pt-20 md:pt-28 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Portrait */}
            <FadeIn delay={0.1} y={40} className="flex-shrink-0">
              <div className="relative">
                <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-2 border-light/10 shadow-2xl shadow-black/50">
                  <img
                    src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                    alt="Joel — Wedding Videographer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-[-8px] rounded-full border border-light/5 pointer-events-none" />
                <div className="absolute inset-[-18px] rounded-full border border-light/[0.02] pointer-events-none" />
                {/* Camera badge */}
                <div className="absolute bottom-2 right-2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}>
                  <Camera size={22} className="text-white" />
                </div>
              </div>
            </FadeIn>

            {/* Info */}
            <div className="text-center lg:text-left flex-1">
              <FadeIn delay={0.2} y={30}>
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-light/40 font-light mb-3 block">
                  Wedding Videographer & Filmmaker
                </span>
                <h1
                  className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
                >
                  Joel
                </h1>
              </FadeIn>

              <FadeIn delay={0.3} y={20}>
                <p className="text-light/60 font-light leading-relaxed max-w-xl mb-8"
                  style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}>
                  I'm a cinematic wedding videographer based in Los Angeles, passionate about
                  turning your most precious moments into timeless films. Every love story
                  deserves to be told with artistry, emotion, and beauty.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} y={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <ContactButton />
                  <a
                    href="#journey"
                    className="rounded-full border border-light/30 text-light font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm hover:bg-light/10 transition-all duration-300 inline-flex items-center gap-2"
                    onClick={(e) => { e.preventDefault(); document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }); }}
                  >
                    My Journey
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative z-10 px-5 sm:px-8 md:px-10 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.15} y={30}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pricing-gradient-border rounded-2xl p-6 sm:p-8 text-center"
                >
                  <stat.icon size={24} className="text-light/30 mx-auto mb-3" />
                  <p className="text-3xl sm:text-4xl font-black text-light mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-light/40 font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── My Story (Animated Text) ── */}
      <section className="relative z-10 px-5 sm:px-8 md:px-10 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
            >
              My Story
            </h2>
          </FadeIn>

          <AnimatedText
            text="It all started with a borrowed camera and a friend's wedding. What I saw through that lens changed everything — the stolen glances, the tearful vows, the unbridled joy on the dance floor. I realized that these moments, so fleeting in reality, could live forever through film. That revelation became my calling. Today, every wedding I film is a reminder of why I fell in love with this craft — the privilege of preserving love stories that will be watched and cherished for generations."
            className="text-light font-medium text-center leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
          />
        </div>
      </section>

      {/* ── Skills & Expertise ── */}
      <section className="relative z-10 px-5 sm:px-8 md:px-10 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
            >
              Expertise
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {skills.map((skill, i) => (
              <FadeIn key={skill.name} delay={i * 0.08} y={20}>
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base font-medium text-light/80 uppercase tracking-wider">
                      {skill.name}
                    </span>
                    <span className="text-xs text-light/40 font-light">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-light/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #646973 0%, #BBCCD7 100%)',
                      }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section id="journey" className="relative z-10 bg-[#0a0a0a] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
              style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
            >
              Journey
            </h2>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-light/10" />

            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1} y={30}>
                  <div className="relative pl-16 sm:pl-20">
                    {/* Dot */}
                    <div className="absolute left-[18px] sm:left-[26px] top-1 w-3 h-3 rounded-full border-2 border-light/30 bg-dark" />

                    {/* Year badge */}
                    <span
                      className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-2 px-3 py-1 rounded-full border border-light/15 text-light/50"
                    >
                      {item.year}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-semibold text-light mb-2 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-light/50 font-light leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gear & Tools ── */}
      <section className="relative z-10 bg-[#0a0a0a] px-5 sm:px-8 md:px-10 pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0} y={40}>
            <div className="flex items-center gap-3 mb-12 sm:mb-16 justify-center">
              <Aperture size={28} className="text-light/30" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light uppercase tracking-wider">
                My Gear
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {gear.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08} y={20}>
                <div className="pricing-gradient-border rounded-2xl p-5 sm:p-6 text-center hover:translate-y-[-2px] transition-transform duration-300">
                  <Video size={20} className="text-light/20 mx-auto mb-3" />
                  <p className="text-base sm:text-lg font-semibold text-light mb-1">{item.name}</p>
                  <p className="text-xs uppercase tracking-widest text-light/40 font-light">{item.type}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy / Values ── */}
      <section className="relative z-10 bg-[#0a0a0a] px-5 sm:px-8 md:px-10 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
            >
              Values
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: 'Authentic Emotions',
                text: 'I capture real moments as they unfold — no forced poses, no over-direction. The most beautiful footage comes from genuine feelings.',
              },
              {
                icon: Sparkles,
                title: 'Cinematic Craft',
                text: 'Every film is color-graded, scored, and edited with the care of a short film. Your wedding deserves nothing less than cinema-quality artistry.',
              },
              {
                icon: Star,
                title: 'Timeless Stories',
                text: 'Trends come and go, but your love story is forever. I create films that feel just as powerful 20 years from now as they do on day one.',
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.12} y={30}>
                <div className="pricing-gradient-border rounded-3xl p-8 sm:p-10 h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', opacity: 0.8 }}>
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-light mb-3 uppercase tracking-wider">
                    {value.title}
                  </h3>
                  <p className="text-light/50 font-light leading-relaxed text-sm sm:text-base">
                    {value.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative z-10 bg-[#0a0a0a] px-5 sm:px-8 md:px-10 pb-20 sm:pb-28">
        <FadeIn delay={0.1} y={30}>
          <div className="max-w-4xl mx-auto text-center rounded-[32px] sm:rounded-[48px] p-10 sm:p-16 border border-light/10"
            style={{
              background: 'linear-gradient(135deg, rgba(24,1,31,0.6) 0%, rgba(118,33,176,0.15) 50%, rgba(190,76,0,0.1) 100%)',
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light mb-4 uppercase tracking-wider">
              Ready to tell your story?
            </h3>
            <p className="text-light/50 font-light mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Let's create a wedding film that you'll treasure forever. Every detail, every emotion, beautifully preserved.
            </p>
            <ContactButton />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
};

export default ProfilePage;
