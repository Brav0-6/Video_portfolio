import React, { useEffect, useRef, useState } from 'react';

// Short looping wedding/event video clips — replace with your own 1-3s clips
const videoClips = [
  // Cinematic nature & wedding scenes — HD quality
  'https://videos.pexels.com/video-files/3337162/3337162-hd_1280_720_30fps.mp4',
  'https://videos.pexels.com/video-files/3327488/3327488-hd_1280_720_30fps.mp4',
  'https://videos.pexels.com/video-files/3205580/3205580-hd_1280_720_25fps.mp4',
  'https://videos.pexels.com/video-files/1536654/1536654-hd_1280_720_30fps.mp4',
  'https://videos.pexels.com/video-files/2785538/2785538-hd_1280_720_30fps.mp4',
  'https://videos.pexels.com/video-files/1494283/1494283-hd_1280_720_24fps.mp4',
  'https://videos.pexels.com/video-files/4353285/4353285-hd_1280_720_25fps.mp4',
  'https://videos.pexels.com/video-files/4488470/4488470-hd_1280_720_25fps.mp4',
  'https://videos.pexels.com/video-files/3259663/3259663-hd_1280_720_25fps.mp4',
  'https://videos.pexels.com/video-files/4884243/4884243-hd_1280_720_25fps.mp4',
  'https://videos.pexels.com/video-files/4725952/4725952-hd_1280_720_25fps.mp4',
  'https://videos.pexels.com/video-files/5765163/5765163-hd_1280_720_25fps.mp4',
];

const row1Clips = videoClips.slice(0, 6);
const row2Clips = videoClips.slice(6);

/** Tiny looping video tile */
const VideoTile: React.FC<{ src: string }> = ({ src }) => (
  <div className="w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden flex-shrink-0 bg-[#111]">
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
);

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple each row for seamless scrolling
  const tripled1 = [...row1Clips, ...row1Clips, ...row1Clips];
  const tripled2 = [...row2Clips, ...row2Clips, ...row2Clips];

  return (
    <section ref={sectionRef} className="bg-dark pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      {/* Row 1 — moves right */}
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {tripled1.map((src, i) => (
          <VideoTile key={`r1-${i}`} src={src} />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {tripled2.map((src, i) => (
          <VideoTile key={`r2-${i}`} src={src} />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
