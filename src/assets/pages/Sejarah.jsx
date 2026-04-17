import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from "../../context/LanguageContext";

const Sejarah = () => {
  const { t } = useLanguage();
  const images = ['/foto1.png', '/foto2.png', '/foto3.png', '/foto4.png'];
  const event1Images = ['/ginanthi1.png', '/giyanthi2.png', '/giyanthi3.png', '/giyanthi4.png'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [event1Index, setEvent1Index] = useState(0);
  const [selectedFigureId, setSelectedFigureId] = useState(null); // 'hb1', 'hb9', or null

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const event1Timer = setInterval(() => {
      setEvent1Index((prevIndex) => (prevIndex + 1) % event1Images.length);
    }, 4000);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedFigureId(null);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      clearInterval(event1Timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, event1Images.length]);

  useEffect(() => {
    if (selectedFigureId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFigureId]);

  // Derived data based on selected ID
  const modalData = selectedFigureId === 'hb1' ? {
    title: t('sejarahPage.figures.hb1.detailedTitle'),
    label: t('sejarahPage.figures.hb1.label'),
    desc: t('sejarahPage.figures.hb1.detailedDesc'),
    image: '/mataram.png'
  } : selectedFigureId === 'hb9' ? {
    title: t('sejarahPage.figures.hb9.detailedTitle'),
    label: t('sejarahPage.figures.hb9.label'),
    desc: t('sejarahPage.figures.hb9.detailedDesc'),
    image: '/Sekaten.png'
  } : null;

  return (
    <div className="bg-[#FCF9F7]">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out transform ${
            index === currentIndex 
              ? 'opacity-100 scale-105 z-10' 
              : 'opacity-0 scale-100 z-0'
          }`}
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('${img}')`
          }}
        ></div>
      ))}

      {/* Slideshow Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 animate-fade-in">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-[#d09628] w-6 shadow-[0_0_10px_rgba(208,150,40,0.5)]' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
        
        {/* Top Badge */}
        <div className="mb-6 animate-fade-in-down">
          <div className="inline-flex items-center gap-3 px-4 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300">
              {t('sejarahPage.hero.badge')}
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mb-6 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[64px] font-bold leading-[1.2] tracking-tight drop-shadow-2xl">
            {t('sejarahPage.hero.title')}
          </h1>
        </div>

      </div>

      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .book-page {
          transform-origin: left center;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease;
          backface-visibility: hidden;
        }
        .book-page-flipped {
          transform: rotateY(-160deg);
          opacity: 0;
          pointer-events: none;
        }
        .book-page-active {
          transform: rotateY(0deg);
          opacity: 1;
          z-index: 10;
        }
        .book-page-next {
          transform: rotateY(0deg);
          opacity: 1;
          z-index: 5;
        }
      `}</style>

      </section>

      {/* Garis Waktu Peradaban (Timeline) */}
      <section id="keraton" className="bg-[#FCF9F7] py-24 px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="mb-20 animate-fade-in">
            <div className="w-16 h-1 bg-[#8b6112] mb-8"></div>
            <h2 className="text-[42px] md:text-[52px] font-serif font-bold text-[#5e2b0f] mb-6 leading-tight">
              {t('sejarahPage.timeline.title')}
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] max-w-2xl leading-relaxed opacity-80">
              {t('sejarahPage.timeline.desc')}
            </p>
          </div>

          <div className="relative mt-12">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block"></div>

            {/* Event 1: 1755 */}
            <div className="flex flex-col md:flex-row items-center mb-32 relative">
              <div className="w-full md:w-1/2 pr-0 md:pr-20 text-center md:text-right mb-12 md:mb-0 order-2 md:order-1">
                <span className="text-[64px] md:text-[84px] font-serif font-bold text-gray-200 block mb-2 leading-none">{t('sejarahPage.timeline.event1Year')}</span>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#5e2b0f] mb-4">{t('sejarahPage.timeline.event1Title')}</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg ml-auto">
                  {t('sejarahPage.timeline.event1Desc')}
                </p>
              </div>
              
              {/* Timeline Point */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 bg-[#5e2b0f] rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                   <div className="transform -rotate-45">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v10l-3 2v5l-3-2V7H6v12.5A2.5 2.5 0 0 1 3.5 22h14a2.5 2.5 0 0 1 0-5" />
                     </svg>
                   </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-20 order-1 md:order-2 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 relative aspect-[4/3] group/slider perspective-2000 bg-[#EADCCB]">
                  {/* Backdrop shadow for more depth */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-black/10 blur-xl z-20 pointer-events-none"></div>
                  
                  {event1Images.map((img, index) => {
                    const isActive = index === event1Index;
                    const isPrevious = index === (event1Index - 1 + event1Images.length) % event1Images.length;
                    
                    return (
                      <div 
                        key={img}
                        className={`absolute inset-0 w-full h-full book-page ${
                          isActive ? 'book-page-active' : 
                          isPrevious ? 'book-page-flipped' : 'opacity-0'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`${t('sejarahPage.timeline.event1Title')} ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        {/* Shading overlay for realism during flip */}
                        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-1200 ${
                          isPrevious ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                      </div>
                    );
                  })}
                  
                  {/* Subtle Navigation dots for the mini-slider */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30 transition-opacity duration-300 opacity-60 group-hover/slider:opacity-100">
                    {event1Images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === event1Index ? 'bg-white w-3' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2: 1812 */}
            <div className="flex flex-col md:flex-row items-center mb-12 relative">
              <div className="w-full md:w-1/2 pr-0 md:pr-20 order-1 md:order-1 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/tamansari.png" 
                    alt={t('sejarahPage.timeline.event2Title')} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>

              {/* Timeline Point */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 bg-[#8b6112] rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                   <div className="transform -rotate-45">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                     </svg>
                   </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-20 text-center md:text-left order-2 md:order-2">
                <span className="text-[64px] md:text-[84px] font-serif font-bold text-gray-200 block mb-2 leading-none">{t('sejarahPage.timeline.event2Year')}</span>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#5e2b0f] mb-4">{t('sejarahPage.timeline.event2Title')}</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg">
                   {t('sejarahPage.timeline.event2Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokoh Utama Section */}
      <section id="kolonial" className="bg-[#FAF7F2] py-24 px-8 md:px-16">
        <div className="max-w-[1240px] mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5e2b0f] mb-4">
            {t('sejarahPage.figures.title')}
          </h2>
          <p className="text-[#8b6112] text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-80">
            {t('sejarahPage.figures.subtitle')}
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* HB I Card */}
          <div 
            onClick={() => setSelectedFigureId('hb1')}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] transform hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 border border-gray-100 cursor-zoom-in group/card"
          >
            <div className="w-full md:w-[240px] flex-shrink-0 bg-gray-100 p-4">
              <img 
                src="/mataram.png" 
                alt="Sultan HB I" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#5e2b0f] mb-2 leading-tight">
                {t('sejarahPage.figures.hb1.name')}
              </h3>
              <p className="text-[#d09628] text-[10px] font-bold tracking-widest uppercase mb-4">
                {t('sejarahPage.figures.hb1.label')}
              </p>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6 lg:max-w-md">
                {t('sejarahPage.figures.hb1.desc')}
              </p>
              <button className="text-[#8b6112] text-[11px] font-bold tracking-widest uppercase border-b border-[#8b6112] pb-1 self-start group-hover/card:text-[#5e2b0f] group-hover/card:border-[#5e2b0f] transition-all">
                {t('sejarahPage.figures.hb1.link')}
              </button>
            </div>
          </div>

          {/* HB IX Card */}
          <div 
            onClick={() => setSelectedFigureId('hb9')}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] transform hover:-translate-y-2 active:scale-[0.98] transition-all duration-500 border border-gray-100 cursor-zoom-in group/card"
          >
            <div className="w-full md:w-[240px] flex-shrink-0 bg-gray-100 p-4">
              <img 
                src="/Sekaten.png" 
                alt="Sultan HB IX" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#5e2b0f] mb-2 leading-tight">
                {t('sejarahPage.figures.hb9.name')}
              </h3>
              <p className="text-[#d09628] text-[10px] font-bold tracking-widest uppercase mb-4">
                {t('sejarahPage.figures.hb9.label')}
              </p>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6 lg:max-w-md">
                {t('sejarahPage.figures.hb9.desc')}
              </p>
              <button className="text-[#8b6112] text-[11px] font-bold tracking-widest uppercase border-b border-[#8b6112] pb-1 self-start group-hover/card:text-[#5e2b0f] group-hover/card:border-[#5e2b0f] transition-all">
                {t('sejarahPage.figures.hb9.link')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Figures Modal Rendered via Portal */}
      {selectedFigureId && modalData && createPortal(
        <div className="fixed inset-0 z-[10000] overflow-y-auto">
          {/* Backdrop with Blur */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md animate-fade-in-fast"
            onClick={() => setSelectedFigureId(null)}
          ></div>
          
          {/* Modal Centering Wrapper */}
          <div className="flex min-h-full items-center justify-center p-4 md:p-12 pointer-events-none">
            {/* Modal Container */}
            <div 
              className="relative bg-white w-full max-w-5xl rounded-[32px] shadow-2xl flex flex-col md:flex-row animate-scale-up pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedFigureId(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 bg-[#5e2b0f] rounded-full flex items-center justify-center text-white hover:bg-[#7a3e14] transition-all shadow-lg group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left: Image with Frame */}
              <div className="w-full md:w-[45%] p-8 md:p-12 flex items-center justify-center bg-[#FAF9F6]">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#F2EDE4] rounded-[24px] shadow-inner"></div>
                  <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-[16px] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src={modalData.image} 
                      alt={modalData.title}
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-[32px] md:text-[44px] font-serif font-bold text-[#5e2b0f] mb-3 leading-tight">
                  {modalData.title}
                </h2>
                <p className="text-[#d09628] text-xs md:text-[13px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">
                  {modalData.label}
                </p>
                <div className="w-16 h-1.5 bg-[#8b6112] mb-10 rounded-full"></div>
                <p className="text-gray-600 text-[16px] md:text-[18px] leading-[1.8] font-light">
                  {modalData.desc}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Sejarah;
