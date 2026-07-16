import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import FadeIn from '../components/FadeIn';
import Footer from '../sections/Footer';

// Sample YouTube video data with high-quality placeholder images
const allVideos = [
  { youtubeId: 'dQw4w9WgXcQ', title: 'Sarah & James — Summer Garden Wedding', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1280&q=80' },
  { youtubeId: 'jNQXAC9IVRw', title: 'Emily & David — Beachside Ceremony', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1280&q=80' },
  { youtubeId: '9bZkp7q19f0', title: 'Priya & Arjun — Royal Palace Celebration', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=1280&q=80' },
  { youtubeId: 'kJQP7kiw5Fk', title: 'Maria & Carlos — Vineyard Vows', category: 'Pre-Wedding', imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1280&q=80' },
  { youtubeId: 'RgKAFK5djSk', title: 'Amanda & Chris — Mountain Retreat', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&q=80' },
  { youtubeId: 'JGwWNGJdvx8', title: 'Sophia & Liam — Sunset Engagement', category: 'Pre-Wedding', imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1280&q=80' },
  { youtubeId: 'OPf0YbXqDm0', title: 'Jessica & Michael — Garden Party', category: 'Event', imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1280&q=80' },
  { youtubeId: 'hT_nvWreIhg', title: 'Anna & Ben — Rustic Barn Wedding', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1280&q=80' },
  { youtubeId: 'fJ9rUzIMcZQ', title: 'Lisa & Tom — City Rooftop', category: 'Event', imageUrl: 'https://images.unsplash.com/photo-1533174000255-16ccb28c50d7?w=1280&q=80' },
  { youtubeId: '60ItHLz5WEA', title: 'Grace & Noah — Lake House Ceremony', category: 'Wedding', imageUrl: 'https://images.unsplash.com/photo-1505902722668-23d06115998a?w=1280&q=80' },
  { youtubeId: 'YQHsXMglC9A', title: 'Diana & Raj — Traditional Celebration', category: 'Event', imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1280&q=80' },
  { youtubeId: 'CevxZvSJLk8', title: 'Nicole & Alex — Spring Blossom', category: 'Pre-Wedding', imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1280&q=80' },
];

const categories = ['All', 'Wedding', 'Pre-Wedding', 'Event'];

const WorksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos = activeCategory === 'All'
    ? allVideos
    : allVideos.filter((v) => v.category === activeCategory);

  return (
    <main className="min-h-screen bg-dark" style={{ overflowX: 'clip' }}>
      {/* Top Bar */}
      <div className="px-5 sm:px-8 md:px-10 pt-6 sm:pt-8 pb-4">
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

      {/* Heading */}
      <div className="px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12">
        <FadeIn delay={0.1} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            All Works
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <p className="text-center text-light/50 font-light text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Browse our complete collection of wedding films and event highlights. Click any video to watch on YouTube.
          </p>
        </FadeIn>
      </div>

      {/* Category Filter */}
      <div className="px-5 sm:px-8 md:px-10 mb-12 sm:mb-16">
        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter size={16} className="text-light/40 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-xs sm:text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-light text-dark'
                    : 'border border-light/20 text-light/60 hover:border-light/40 hover:text-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Video Grid */}
      <div className="px-5 sm:px-8 md:px-10 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video, i) => (
            <VideoCard
              key={video.youtubeId}
              youtubeId={video.youtubeId}
              title={video.title}
              category={video.category}
              imageUrl={video.imageUrl}
              delay={i * 0.08}
            />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-light/40 font-light text-lg">No videos found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default WorksPage;
