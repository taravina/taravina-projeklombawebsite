import React, { useState, useEffect } from 'react';
import { useLanguage } from "../../context/LanguageContext";

const Sejarah = () => {
  const { t } = useLanguage();
  const images = ['/foto1.png', '/foto2.png', '/foto3.png', '/foto4.png'];
  const event1Images = ['/ginanthi1.png', '/giyanthi2.png', '/giyanthi3.png', '/giyanthi4.png'];
  const event2Images = ['/image 51.png', '/image 52.png', '/image 53.png'];
  const event3Images = ['/image 46.png', '/image 58.png', '/image 55.png'];
  const hb1Images = ['/mataram.png', '/keraton.png'];
  const hb9Images = ['/Sekaten.png', '/image 60.png'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [event1Index, setEvent1Index] = useState(0);
  const [event2Index, setEvent2Index] = useState(0);
  const [event3Index, setEvent3Index] = useState(0);
  const [hb1Index, setHb1Index] = useState(0);
  const [hb9Index, setHb9Index] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const event1Timer = setInterval(() => {
      setEvent1Index((prevIndex) => (prevIndex + 1) % event1Images.length);
    }, 4000);

    const event2Timer = setInterval(() => {
      setEvent2Index((prevIndex) => (prevIndex + 1) % event2Images.length);
    }, 4500);

    const event3Timer = setInterval(() => {
      setEvent3Index((prevIndex) => (prevIndex + 1) % event3Images.length);
    }, 4200);

    const hb1Timer = setInterval(() => {
      setHb1Index((prevIndex) => (prevIndex + 1) % hb1Images.length);
    }, 4800);

    const hb9Timer = setInterval(() => {
      setHb9Index((prevIndex) => (prevIndex + 1) % hb9Images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(event1Timer);
      clearInterval(event2Timer);
      clearInterval(event3Timer);
      clearInterval(hb1Timer);
      clearInterval(hb9Timer);
    };
  }, []);

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
              
              <div className="w-full md:w-1/2 pl-0 md:pl-20 order-1 md:order-2 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] perspective-2000 bg-[#EADCCB]">
                  {event1Images.map((img, index) => (
                    <div key={img} className={`absolute inset-0 w-full h-full book-page ${index === event1Index ? 'book-page-active' : 'book-page-flipped'}`}>
                      <img src={img} alt="Event 1" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event 2: 1812 */}
            <div className="flex flex-col md:flex-row items-center mb-32 relative">
              <div className="w-full md:w-1/2 pr-0 md:pr-20 order-1 md:order-1 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] perspective-2000 bg-[#EADCCB]">
                  {event2Images.map((img, index) => (
                    <div key={img} className={`absolute inset-0 w-full h-full book-page ${index === event2Index ? 'book-page-active' : 'book-page-flipped'}`}>
                      <img src={img} alt="Event 2" className="w-full h-full object-cover" />
                    </div>
                  ))}
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

            {/* Event 3: 1945 */}
            <div className="flex flex-col md:flex-row items-center mb-12 relative">
              <div className="w-full md:w-1/2 pr-0 md:pr-20 text-center md:text-right mb-12 md:mb-0 order-2 md:order-1">
                <span className="text-[64px] md:text-[84px] font-serif font-bold text-gray-200 block mb-2 leading-none">{t('sejarahPage.timeline.event3Year')}</span>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#5e2b0f] mb-4">{t('sejarahPage.timeline.event3Title')}</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg ml-auto">
                  {t('sejarahPage.timeline.event3Desc')}
                </p>
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-20 order-1 md:order-2 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] perspective-2000 bg-[#EADCCB]">
                  {event3Images.map((img, index) => (
                    <div key={img} className={`absolute inset-0 w-full h-full book-page ${index === event3Index ? 'book-page-active' : 'book-page-flipped'}`}>
                      <img src={img} alt="Event 3" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
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
        </div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* HB I Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] border border-gray-100">
            <div className="w-full md:w-[280px] flex-shrink-0 bg-gray-50 relative overflow-hidden perspective-2000">
               {hb1Images.map((img, index) => (
                <div key={img} className={`absolute inset-0 w-full h-full book-page ${index === hb1Index ? 'book-page-active' : 'book-page-flipped'}`}>
                  <img src={img} alt="Sultan HB I" className="w-full h-full object-cover" />
                </div>
              ))}
             </div>
            <div className="p-8 flex flex-col justify-center bg-white">
              <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#5e2b0f] mb-2">{t('sejarahPage.figures.hb1.name')}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{t('sejarahPage.figures.hb1.desc')}</p>
            </div>
          </div>

          {/* HB IX Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] border border-gray-100">
            <div className="w-full md:w-[280px] flex-shrink-0 bg-gray-50 relative overflow-hidden perspective-2000">
               {hb9Images.map((img, index) => (
                <div key={img} className={`absolute inset-0 w-full h-full book-page ${index === hb9Index ? 'book-page-active' : 'book-page-flipped'}`}>
                  <img src={img} alt="Sultan HB IX" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="p-8 flex flex-col justify-center bg-white">
              <h3 className="text-2xl md:text-[26px] font-serif font-bold text-[#5e2b0f] mb-2">{t('sejarahPage.figures.hb9.name')}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{t('sejarahPage.figures.hb9.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sejarah;
