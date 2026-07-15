import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

// Sample video URLs (free stock wedding videos) - replace with your actual videos
const showcaseVideos = [
  {
    id: 1,
    title: 'Sarah & James',
    subtitle: 'A Summer Garden Wedding',
    category: 'Wedding Film',
    // Using free stock video URLs for demo — replace with your own
    videoSrc: 'https://videos.pexels.com/video-files/3337162/3337162-hd_1920_1080_30fps.mp4',
    posterImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    ],
    mainPoster: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&q=80',
  },
  {
    id: 2,
    title: 'Emily & David',
    subtitle: 'Beachside Ceremony',
    category: 'Highlight Reel',
    videoSrc: 'https://videos.pexels.com/video-files/3327488/3327488-hd_1920_1080_30fps.mp4',
    posterImages: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    ],
    mainPoster: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1280&q=80',
  },
  {
    id: 3,
    title: 'Priya & Arjun',
    subtitle: 'Royal Palace Celebration',
    category: 'Cinematic Film',
    videoSrc: 'https://videos.pexels.com/video-files/3205580/3205580-hd_1920_1080_25fps.mp4',
    posterImages: [
      'https://images.unsplash.com/photo-1620735692151-26a7e0748571?w=800&q=80',
      'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80',
    ],
    mainPoster: 'https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=1280&q=80',
  },
];

/* ───── Video Player Modal ───── */
interface VideoModalProps {
  video: typeof showcaseVideos[0] | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [muted, setMuted] = useState(false);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
        >
          <X size={24} />
        </button>

        {/* Video container */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-5xl aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={video.videoSrc}
            autoPlay
            muted={muted}
            controls
            playsInline
            className="w-full h-full object-cover bg-dark"
            poster={video.mainPoster}
          />

          {/* Video info overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-white/60 font-light">
              {video.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {video.title}
            </h3>
            <p className="text-sm text-white/60 font-light">{video.subtitle}</p>
          </div>

          {/* Mute toggle */}
          <button
            onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-200 pointer-events-auto"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ───── Project Card ───── */
interface ProjectCardProps {
  video: typeof showcaseVideos[0];
  index: number;
  totalCards: number;
  rangeStart: number;
  rangeEnd: number;
  progress: any;
  onWatch: (video: typeof showcaseVideos[0]) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ video, index, totalCards, rangeStart, rangeEnd, progress, onWatch }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div
      className="h-[75vh] sm:h-[80vh] md:h-[85vh] flex items-start justify-center px-4 sm:px-6 md:px-8"
      style={{ position: 'sticky', top: `calc(80px + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl mx-auto rounded-[24px] sm:rounded-[36px] md:rounded-[48px] border border-light/15 bg-[#111111] p-4 sm:p-6 md:p-8 origin-top shadow-2xl shadow-black/40"
      >
        {/* Top Row — Info + Button */}
        <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
            <span
              className="font-black text-light/[0.07] leading-none select-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
            >
              0{index + 1}
            </span>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-light/40 font-light block">
                {video.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-light truncate">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-light/50 font-light hidden sm:block">
                {video.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={() => onWatch(video)}
            className="flex-shrink-0 rounded-full border border-light/30 text-light font-medium uppercase tracking-widest px-5 py-2 sm:px-7 sm:py-2.5 text-[10px] sm:text-xs hover:bg-light/10 transition-all duration-300 flex items-center gap-2 hover:border-light/50"
          >
            <Play size={12} fill="currentColor" />
            <span className="hidden sm:inline">Watch Film</span>
            <span className="sm:hidden">Watch</span>
          </button>
        </div>

        {/* Content Grid — Two columns with auto-play video */}
        <div className="flex gap-3 sm:gap-4" style={{ height: 'clamp(280px, 50vh, 520px)' }}>
          {/* Left Column — Two stacked images */}
          <div className="w-[38%] flex flex-col gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[32px] h-[45%]">
              <img
                src={video.posterImages[0]}
                alt={`${video.title} - Shot 1`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[32px] h-[55%]">
              <img
                src={video.posterImages[1]}
                alt={`${video.title} - Shot 2`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column — Auto-playing video */}
          <div
            className="w-[62%] relative overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[32px] cursor-pointer group"
            onClick={() => onWatch(video)}
          >
            {/* Auto-playing muted background video */}
            <video
              src={video.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              poster={video.mainPoster}
              className="w-full h-full object-cover"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-400">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-0.5" fill="white" />
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <span className="text-xs sm:text-sm text-white/80 font-light uppercase tracking-wider bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 inline-block">
                Click to watch full film
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ───── Showcase Section ───── */
const ShowcaseSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<typeof showcaseVideos[0] | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const handleWatch = useCallback((video: typeof showcaseVideos[0]) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback(() => {
    setActiveVideo(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <section
        id="showcase"
        className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pb-20"
      >
        {/* Heading */}
        <div className="pt-20 sm:pt-28 md:pt-36 pb-10 sm:pb-16 px-5 sm:px-8 md:px-10">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Our Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={20}>
            <p className="text-center text-light/60 font-light uppercase tracking-widest text-sm sm:text-base mt-4">
              Original Wedding Films
            </p>
          </FadeIn>
        </div>

        {/* Sticky stacking cards */}
        <div ref={containerRef}>
          {showcaseVideos.map((video, i) => {
            const rangeStart = i / showcaseVideos.length;
            const rangeEnd = (i + 1) / showcaseVideos.length;
            return (
              <ProjectCard
                key={video.id}
                video={video}
                index={i}
                totalCards={showcaseVideos.length}
                rangeStart={rangeStart}
                rangeEnd={rangeEnd}
                progress={scrollYProgress}
                onWatch={handleWatch}
              />
            );
          })}
        </div>

        {/* View All Works Button */}
        <div className="flex justify-center pt-16 sm:pt-20">
          <FadeIn delay={0.1} y={20}>
            <Link
              to="/works"
              className="rounded-full border-2 border-light/40 text-light font-medium uppercase tracking-widest px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base hover:bg-light/10 transition-all duration-300 hover:border-light/60 inline-flex items-center gap-3 group"
            >
              View All Works
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Video Player Modal */}
      <VideoModal video={activeVideo} onClose={handleClose} />
    </>
  );
};

export default ShowcaseSection;
