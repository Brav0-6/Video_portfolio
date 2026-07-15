import React from 'react';
import { Play } from 'lucide-react';
import FadeIn from './FadeIn';

interface VideoCardProps {
  youtubeId: string;
  title: string;
  category: string;
  delay?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ youtubeId, title, category, delay = 0 }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <FadeIn delay={delay} y={40} className="group">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault doesn't exist
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative play-pulse w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
            </div>
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-light text-light/70 mb-1 block">
              {category}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* YouTube redirect indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-dark/60 backdrop-blur-sm rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-white/80 uppercase tracking-wider">Watch on YouTube</span>
          <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.8 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.8-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/>
          </svg>
        </div>
      </a>
    </FadeIn>
  );
};

export default VideoCard;
