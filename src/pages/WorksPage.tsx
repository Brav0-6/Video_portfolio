import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import FadeIn from '../components/FadeIn';
import Footer from '../sections/Footer';

// Sample YouTube video data with high-quality nature placeholder images
const allVideos = [
  { youtubeId: 'dQw4w9WgXcQ', title: 'Mountain Expedition', category: 'Nature', imageUrl: '/assets/works/1.jpg' },
  { youtubeId: 'jNQXAC9IVRw', title: 'Forest River', category: 'Landscape', imageUrl: '/assets/works/2.jpg' },
  { youtubeId: '9bZkp7q19f0', title: 'Ocean Waves', category: 'Nature', imageUrl: '/assets/works/3.jpg' },
  { youtubeId: 'kJQP7kiw5Fk', title: 'Desert Dunes', category: 'Landscape', imageUrl: '/assets/works/4.jpg' },
  { youtubeId: 'RgKAFK5djSk', title: 'Autumn Leaves', category: 'Nature', imageUrl: '/assets/works/5.jpg' },
  { youtubeId: 'JGwWNGJdvx8', title: 'Winter Snowscape', category: 'Landscape', imageUrl: '/assets/works/6.jpg' },
  { youtubeId: 'OPf0YbXqDm0', title: 'Spring Blossoms', category: 'Nature', imageUrl: '/assets/works/7.jpg' },
  { youtubeId: 'hT_nvWreIhg', title: 'Jungle Canopy', category: 'Landscape', imageUrl: '/assets/works/8.jpg' },
  { youtubeId: 'fJ9rUzIMcZQ', title: 'Canyon Sunset', category: 'Nature', imageUrl: '/assets/works/9.jpg' },
  { youtubeId: '60ItHLz5WEA', title: 'Waterfall Cascades', category: 'Landscape', imageUrl: '/assets/works/10.jpg' },
  { youtubeId: 'YQHsXMglC9A', title: 'Starry Night Sky', category: 'Nature', imageUrl: '/assets/works/11.jpg' },
  { youtubeId: 'CevxZvSJLk8', title: 'Foggy Morning', category: 'Landscape', imageUrl: '/assets/works/12.jpg' },
];

const categories = ['All', 'Nature', 'Landscape'];

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
