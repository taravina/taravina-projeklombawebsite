import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Typewriter from '../components/Typewriter';

const Peristiwa = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const revolutionCards = [
    {
      id: 'perpindahan',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h8zM21 16V9a1 1 0 00-1-1h-6v8m6 0v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2m6 0h-6" />
        </svg>
      ),
      ...t('peristiwaPage.revolusi.cards.perpindahan')
    },
    {
      id: 'peran',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      ...t('peristiwaPage.revolusi.cards.peran')
    },
    {
      id: 'dukungan',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      ...t('peristiwaPage.revolusi.cards.dukungan')
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] overflow-x-hidden">
      <style>{`
        .reveal-on-scroll { opacity: 0; }
        .active-animation.fade-in-up { animation: fade-in-up 1.2s ease-out forwards; }
        .active-animation.fade-in-left { animation: fade-in-left 1.2s ease-out forwards; }
        .active-animation.fade-in-right { animation: fade-in-right 1.2s ease-out forwards; }
        .active-animation.zoom-in { animation: zoom-in 1s ease-out forwards; }
        .active-animation.fade-in { animation: fade-in 1.5s ease-out forwards; }
        
        @keyframes reveal-box {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .reveal-box {
          transform: scaleX(0);
          transform-origin: left;
        }
        .reveal-box.active {
          animation: reveal-box 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="px-8 md:px-16 pt-20 md:pt-32 pb-24 md:pb-40 relative overflow-hidden animate-section"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className={`relative z-10 reveal-on-scroll ${visibleSections['hero'] ? 'active-animation fade-in-left' : ''}`}>
            <div className="w-20 h-1 bg-[#8B6112] mb-10"></div>
            <span className="text-[#8B6112] font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6 block">
              {t('peristiwaPage.hero.subtitle')}
            </span>
            <h1 className="font-serif leading-tight mb-8 text-[#5e2b0f]">
              <span className="block text-[56px] md:text-[72px] lg:text-[88px] font-bold">{t('peristiwaPage.hero.title1')}</span>
              <span className="block text-[56px] md:text-[72px] lg:text-[88px] font-medium text-[#8B6112] -mt-2">{t('peristiwaPage.hero.title2')}</span>
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-lg mb-10">
              {t('peristiwaPage.hero.desc')}
            </p>
          </div>

          {/* Right Content: Framed Image */}
          <div className={`relative reveal-on-scroll ${visibleSections['hero'] ? 'active-animation zoom-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="absolute -bottom-10 -left-10 w-64 h-80 bg-[#F5E6D3] opacity-50 rounded-2xl -z-10 transform -rotate-6"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#E5D5C3] opacity-30 rounded-full -z-10"></div>
            
            <div className="bg-white p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform rotate-2">
              <div className="overflow-hidden aspect-[4/5] bg-gray-100">
                <img 
                  src="/mataram.png" 
                  alt="Gerbang Kotagede"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geger Sepehi Section */}
      <section 
        id="geger" 
        className="px-8 md:px-16 py-24 md:py-32 relative animate-section"
      >
        <div className={`absolute top-0 left-10 md:left-24 font-serif text-[180px] md:text-[320px] lg:text-[450px] font-black text-[#5e2b0f]/[0.03] select-none pointer-events-none -z-10 leading-none reveal-on-scroll ${visibleSections['geger'] ? 'active-animation fade-in' : ''}`} style={{ animationDuration: '2s' }}>
          1812
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className={`reveal-on-scroll ${visibleSections['geger'] ? 'active-animation fade-in-left' : ''}`}>
            <div className="inline-block bg-[#5e2b0f] text-white px-4 py-1.5 text-[10px] md:text-[12px] font-bold tracking-[0.2em] mb-8 uppercase">
              {t('peristiwaPage.gegerSepehi.tag')}
            </div>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-10">
              {t('peristiwaPage.gegerSepehi.title')}
            </h2>
            
            <div className="space-y-6 text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-xl mb-12 font-sans">
              <p>{t('peristiwaPage.gegerSepehi.desc1')}</p>
              <p>{t('peristiwaPage.gegerSepehi.desc2')}</p>
            </div>

            <button className="bg-[#5e2b0f] text-white px-10 py-5 rounded-sm font-bold text-[13px] tracking-[0.15em] flex items-center gap-4 hover:bg-[#8B6112] transition-all group">
              {t('peristiwaPage.gegerSepehi.button')}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="relative grid grid-cols-2 gap-6">
            <div className={`col-span-2 mb-6 transform -rotate-2 hover:rotate-0 transition-all duration-700 reveal-on-scroll ${visibleSections['geger'] ? 'active-animation fade-in-up' : ''}`}>
              <div className="bg-white p-3 shadow-2xl overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1596463059283-e26744036709?auto=format&fit=crop&q=80&w=1200" 
                  alt="Museum Heritage"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </div>
            
            <div className={`transform rotate-3 hover:rotate-0 transition-all duration-700 reveal-on-scroll ${visibleSections['geger'] ? 'active-animation fade-in-up' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-white p-2 shadow-xl overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1544333346-64e4fe18204e?auto=format&fit=crop&q=80&w=800" 
                  alt="Wayang Artifacts"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className={`transform -rotate-6 translate-y-8 hover:rotate-0 transition-all duration-700 reveal-on-scroll ${visibleSections['geger'] ? 'active-animation fade-in-up' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="bg-white p-2 shadow-xl overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1582213726893-edc10ff052b1?auto=format&fit=crop&q=80&w=800" 
                  alt="Monument"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1945: Amanat Dua Belas September Section */}
      <section 
        id="september" 
        className="px-8 md:px-16 py-12 md:py-24 bg-[#FCF9F7] border-t border-gray-100/30 animate-section"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className={`w-full lg:w-1/2 reveal-on-scroll ${visibleSections['september'] ? 'active-animation fade-in-left' : ''}`}>
            <div className="relative group p-3 bg-white shadow-xl border border-[#8B6112]/20">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Perjuangan 1945"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
            </div>
          </div>

          <div className={`w-full lg:w-1/2 reveal-on-scroll ${visibleSections['september'] ? 'active-animation fade-in-right' : ''}`}>
            <span className="text-[#8B6112] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 block">
              {t('peristiwaPage.september.tag')}
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-8">
              {t('peristiwaPage.september.title')}
            </h2>
            
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-xl font-sans">
              {t('peristiwaPage.september.desc')}
            </p>

            <div className={`relative bg-[#5E2B0F]/5 p-8 md:p-10 rounded-r-[24px] border-l-[6px] border-[#8B6112] reveal-box ${visibleSections['september'] ? 'active' : ''}`}>
              <p className="font-serif text-[18px] md:text-[22px] italic text-[#5E2B0F] leading-relaxed min-h-[4em]">
                "
                <Typewriter 
                  text={t('peristiwaPage.september.quote')} 
                  start={visibleSections['september']} 
                  delay={30} 
                />
                "
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ibukota Revolusi Section */}
      <section 
        id="revolusi" 
        className="px-8 md:px-16 py-24 md:py-32 bg-[#FCF9F7] animate-section"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          
          <div className={`mb-16 reveal-on-scroll ${visibleSections['revolusi'] ? 'active-animation fade-in-up' : ''}`}>
            <h2 className="font-serif text-[44px] md:text-[60px] text-[#5e2b0f] font-bold mb-4">
              {t('peristiwaPage.revolusi.title')}
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px]">
              {t('peristiwaPage.revolusi.subtitle')}
            </p>
          </div>

          <div className={`mb-24 flex justify-center reveal-on-scroll ${visibleSections['revolusi'] ? 'active-animation zoom-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative max-w-4xl w-full">
              <div className="bg-white p-3 md:p-4 rounded-[24px] shadow-2xl border border-gray-100">
                <div className="overflow-hidden rounded-[16px] aspect-[16/8]">
                  <img 
                    src="https://images.unsplash.com/photo-1596463059283-e26744036709?auto=format&fit=crop&q=80&w=1600" 
                    alt="Yogyakarta Tugu 1946"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {revolutionCards.map((card, i) => (
              <div 
                key={card.id}
                className={`bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border transition-all duration-500 reveal-on-scroll ${
                  visibleSections['revolusi'] ? 'active-animation fade-in-up' : ''
                } ${expandedCard === card.id ? 'border-[#8B6112]/50 shadow-2xl' : 'border-gray-100 shadow-sm'}`}
                style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
              >
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#8B6112] rounded-full flex items-center justify-center shadow-lg shadow-[#8B6112]/20">
                    {card.icon}
                  </div>
                </div>

                <h3 className="font-serif text-[24px] font-bold text-[#5e2b0f] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                  {card.shortDesc}
                </p>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === card.id ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-50">
                    <p className="text-gray-600 text-[14px] leading-relaxed text-justify">
                      {card.longDesc}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => toggleCard(card.id)}
                  className="flex justify-center w-full group outline-none"
                >
                  <div className={`p-3 rounded-full border border-gray-100 transition-all duration-300 ${
                    expandedCard === card.id ? 'bg-[#5e2b0f] text-white border-[#5e2b0f] rotate-180' : 'text-gray-400 group-hover:text-[#8B6112] group-hover:border-[#8B6112]'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Peristiwa;
