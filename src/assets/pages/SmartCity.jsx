import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from "../../context/LanguageContext";

const SmartCity = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image - Adjusted for less whiteness */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ 
            backgroundImage: `url('/smartcity foto.png')`,
            filter: 'brightness(0.75) contrast(1.1) grayscale(1)'
          }}
        />
        {/* Subtle Overlay for better depth */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          
          {/* Content Container */}
          <div className="max-w-3xl">
            {/* Subtitle with accent line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#4A3225]/40" />
              <p className="text-[#4A3225] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-90">
                {t('smartCityPage.hero.subtitle')}
              </p>
              <div className="h-[2px] w-12 bg-[#4A3225]/40" />
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-[#4A3225] mb-8 leading-[1.15] drop-shadow-sm">
              {t('smartCityPage.hero.title')}
            </h1>

            {/* Description */}
            <p className="text-[#4A3225]/80 text-sm md:text-base lg:text-lg mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              {t('smartCityPage.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: About & Pillars */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#4A3225] mb-6">
            {t('smartCityPage.sections.aboutTitle')}
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed opacity-80">
            "{t('smartCityPage.sections.aboutQuote')}"
          </p>
          
          <div className="w-full h-px bg-gray-200 mb-16"></div>

          <h2 className="font-serif text-3xl md:text-[42px] font-bold text-[#4A3225] mb-16">
            {t('smartCityPage.sections.pillarsTitle')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Governance Card */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#7A3E14] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#4A3225] mb-3">{t('smartCityPage.pillars.governance.title')}</h3>
              <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">{t('smartCityPage.pillars.governance.subtitle')}</p>
              <p className="text-sm text-[#D97736] font-medium leading-relaxed">{t('smartCityPage.pillars.governance.desc')}</p>
            </div>

            {/* Economy Card */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#D97736] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22m5-18H8.5a3.5 3.5 0 0 0 0 7h7a3.5 3.5 0 0 1 0 7H7"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#4A3225] mb-3">{t('smartCityPage.pillars.economy.title')}</h3>
              <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">{t('smartCityPage.pillars.economy.subtitle')}</p>
              <p className="text-sm text-[#D97736] font-medium leading-relaxed">{t('smartCityPage.pillars.economy.desc')}</p>
            </div>

            {/* Environment Card */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#34A853] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a9 9 0 0 0-9 9c0 7 9 13 9 13s9-6 9-13a9 9 0 0 0-9-9z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#4A3225] mb-3">{t('smartCityPage.pillars.environment.title')}</h3>
              <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">{t('smartCityPage.pillars.environment.subtitle')}</p>
              <p className="text-sm text-[#D97736] font-medium leading-relaxed">{t('smartCityPage.pillars.environment.desc')}</p>
            </div>

            {/* Living Card */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#EA4335] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#4A3225] mb-3">{t('smartCityPage.pillars.living.title')}</h3>
              <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">{t('smartCityPage.pillars.living.subtitle')}</p>
              <p className="text-sm text-[#D97736] font-medium leading-relaxed">{t('smartCityPage.pillars.living.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Community Services */}
          <div className="lg:col-span-7 bg-[#F2EDE4] rounded-3xl p-8 md:p-12 shadow-sm border border-[#E6DEC9] flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-[#D97736] rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#4A3225] mb-8 leading-tight">
                {t('smartCityPage.sections.servicesTitle')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                {t('smartCityPage.sections.servicesItems', { returnObjects: true }).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#D97736] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-[15px] font-medium text-[#4A3225] opacity-80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Digital Culture */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 pl-0 lg:pl-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D97736" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                  <path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 10v11"/><path d="M19 10v11"/><path d="M9 10v11"/><path d="M15 10v11"/><path d="M2 10l10-8 10 8"/>
                </svg>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#4A3225] leading-snug">
                  {t('smartCityPage.sections.cultureTitle')}
                </h3>
              </div>
              <ul className="space-y-4">
                {t('smartCityPage.sections.cultureItems', { returnObjects: true }).map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97736" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-[16px] font-medium text-gray-600 italic tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#4A3225] mb-4">
              {t('smartCityPage.sections.videoSectionTitle')}
            </h2>
            <div className="w-24 h-1 bg-[#D97736] mx-auto rounded-full"></div>
          </div>
          
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl bg-black aspect-video group">
            {/* Hidden Audio Element */}
            <audio ref={audioRef} loop>
              <source src="/jogja_sound.mp3" type="audio/mpeg" />
            </audio>

            <video 
              className="w-full h-full object-cover transition-all duration-700"
              controls
              muted
              preload="auto"
              playsInline
              onPlay={() => {
                audioRef.current.play();
                setIsPlaying(true);
              }}
              onPause={() => {
                audioRef.current.pause();
                setIsPlaying(false);
              }}
            >
              <source src="/vidiojogja.mp4" type="video/mp4" />
              {t('smartCityPage.sections.videoSection.videoError')}
            </video>
            
            {/* Cinematic Overlay (only visible when not playing or on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>
            
            {/* Music Toggle Button */}
            <button 
              onClick={toggleAudio}
              className={`absolute top-8 right-8 z-30 flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md transition-all duration-500 border ${
                isPlaying 
                  ? 'bg-[#D97736] border-[#D97736] text-white shadow-[0_0_20px_rgba(217,119,54,0.4)]' 
                  : 'bg-black/40 border-white/20 text-white hover:bg-black/60'
              }`}
            >
              <div className="flex gap-[3px] items-center h-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className={`w-[3px] bg-current rounded-full transition-all duration-300 ${
                      isPlaying ? 'animate-music-bar' : 'h-1'
                    }`}
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      height: isPlaying ? '100%' : '20%' 
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                {isPlaying ? t('smartCityPage.sections.videoSection.soundOn') : t('smartCityPage.sections.videoSection.soundOff')}
              </span>
            </button>

            {/* Subtle Label */}
            <div className="absolute bottom-8 left-8 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1 opacity-70">{t('smartCityPage.sections.videoSection.cinematicLabel')}</p>
              <h4 className="text-xl font-serif font-bold">{t('smartCityPage.sections.videoSection.videoTitle')}</h4>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
        .animate-music-bar {
          animation: music-bar 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SmartCity;
