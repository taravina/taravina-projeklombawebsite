import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AsalUsul = () => {
  const { t } = useLanguage();
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

  return (
    <div className="min-h-screen bg-[#FDFBF9] overflow-x-hidden">
      <style>{`
        .reveal-on-scroll { opacity: 0; }
        .active-animation.fade-in-up { animation: fade-in-up 1.2s ease-out forwards; }
        .active-animation.fade-in-left { animation: fade-in-left 1.2s ease-out forwards; }
        .active-animation.fade-in-right { animation: fade-in-right 1.2s ease-out forwards; }
        .active-animation.zoom-in { animation: zoom-in 1s ease-out forwards; }
        .active-animation.fade-in { animation: fade-in 1.5s ease-out forwards; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Hero Section - Mirroring the User's Image Design */}
      <section 
        id="hero" 
        className="px-8 md:px-16 pt-24 md:pt-32 pb-24 md:pb-40 animate-section"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className={`reveal-on-scroll ${visibleSections['hero'] ? 'active-animation fade-in-left' : ''}`}>
            <span className="text-[#8B6112] font-bold text-sm tracking-[0.3em] uppercase mb-8 block">
              {t('asalUsulPage.hero.badge')}
            </span>
            <h1 className="font-serif leading-[1.1] mb-10 text-[#5E2B0F]">
              <span className="block text-[64px] md:text-[84px] lg:text-[100px] font-bold">
                Menelusuri
              </span>
              <span className="block text-[64px] md:text-[84px] lg:text-[100px] font-serif italic text-[#8B6112] -mt-4">
                Sangkan
              </span>
              <span className="block text-[64px] md:text-[84px] lg:text-[100px] font-serif italic text-[#8B6112] -mt-4">
                Paraning
              </span>
              <span className="block text-[64px] md:text-[84px] lg:text-[100px] font-bold -mt-4">
                Mataram
              </span>
            </h1>
            <p className="text-[#6B5A4E] text-[18px] md:text-[20px] leading-relaxed max-w-lg font-sans opacity-80">
              {t('asalUsulPage.hero.desc')}
            </p>
          </div>

          {/* Right Content - Visual Frame */}
          <div className={`relative reveal-on-scroll ${visibleSections['hero'] ? 'active-animation fade-in-right' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div className="relative z-10 bg-white p-4 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden group">
              <img 
                src="/giyanti_archway.png" 
                alt="Perjanjian Giyanti Archway"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Year Badge - Glassmorphism style */}
              <div className="absolute bottom-10 left-0 bg-[#D97736]/90 backdrop-blur-md p-6 md:p-8 min-w-[200px] shadow-2xl">
                <span className="block text-[48px] md:text-[64px] font-bold text-white leading-none mb-1">
                  {t('asalUsulPage.hero.year')}
                </span>
                <span className="block text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-white/90 uppercase">
                  {t('asalUsulPage.hero.yearLabel')}
                </span>
              </div>
            </div>
            
            {/* Background elements to match the "premium" vibe */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-[#8B6112]/10 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#F5E6D3]/30 -z-10 transform rotate-12"></div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        id="philosophy" 
        className="px-8 md:px-16 py-24 md:py-32 bg-[#F7F2ED] animate-section"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={`reveal-on-scroll ${visibleSections['philosophy'] ? 'active-animation fade-in-left' : ''}`}>
              <h2 className="font-serif text-[40px] md:text-[56px] text-[#5E2B0F] font-bold mb-8 leading-tight">
                {t('asalUsulPage.philosophy.title')}
              </h2>
              <p className="text-gray-600 text-[18px] leading-relaxed mb-12 max-w-xl">
                {t('asalUsulPage.philosophy.desc')}
              </p>
              
              <div className="space-y-8">
                {t('asalUsulPage.philosophy.items').map((item, i) => (
                  <div key={i} className="flex gap-6 border-l-4 border-[#8B6112] pl-8">
                    <div>
                      <h3 className="font-serif text-[24px] font-bold text-[#5E2B0F] mb-2">{item.title}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`relative reveal-on-scroll ${visibleSections['philosophy'] ? 'active-animation zoom-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="aspect-square bg-[#EADCCB] rounded-full overflow-hidden p-12">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-inner">
                  <img 
                    src="/yogyahero.png" 
                    alt="Yogyakarta Philosophy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Detail Section */}
      <section 
        id="history" 
        className="px-8 md:px-16 py-24 md:py-32 animate-section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`reveal-on-scroll ${visibleSections['history'] ? 'active-animation fade-in-up' : ''}`}>
            <span className="text-[#8B6112] font-bold text-[14px] tracking-[0.4em] uppercase mb-6 block">
              {t('asalUsulPage.history.title')}
            </span>
            <h2 className="font-serif text-[36px] md:text-[48px] text-[#5E2B0F] font-bold mb-12 leading-tight italic">
              "{t('asalUsulPage.history.desc')}"
            </h2>
            <div className="w-24 h-1 bg-[#8B6112] mx-auto mb-16"></div>
            <p className="text-gray-600 text-[20px] md:text-[22px] leading-relaxed font-serif text-[#6B5A4E]">
              {t('asalUsulPage.history.detailed')}
            </p>
          </div>
        </div>
      </section>

      {/* Palihan Nagari: Perjanjian Giyanti Section */}
      <section 
        id="giyanti" 
        className="px-8 md:px-16 py-24 md:py-40 bg-white animate-section overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left Content: Text & Quote */}
            <div className={`reveal-on-scroll ${visibleSections['giyanti'] ? 'active-animation fade-in-left' : ''}`}>
              <div className="w-32 h-[2px] bg-[#8B6112]/30 mb-12"></div>
              <h2 className="font-serif text-[44px] md:text-[60px] lg:text-[72px] font-bold text-[#5E2B0F] leading-[1.1] mb-12">
                {t('asalUsulPage.giyanti.title')}
              </h2>
              
              <div className="space-y-8 mb-16">
                <p className="text-[#6B5A4E] text-[18px] md:text-[20px] leading-relaxed font-sans opacity-95">
                  {t('asalUsulPage.giyanti.desc1')}
                </p>
                <p className="text-[#6B5A4E] text-[18px] md:text-[20px] leading-relaxed font-sans opacity-95">
                  {t('asalUsulPage.giyanti.desc2')}
                </p>
              </div>

              <div className="relative pl-12 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8B6112] rounded-full"></div>
                <blockquote className="font-serif text-[24px] md:text-[28px] italic text-[#5E2B0F] leading-relaxed opacity-90">
                  "{t('asalUsulPage.giyanti.quote')}"
                </blockquote>
              </div>
            </div>

            {/* Right Content: Archival Image & Location Badge */}
            <div className={`relative reveal-on-scroll ${visibleSections['giyanti'] ? 'active-animation fade-in-right' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <div className="relative z-10 group">
                {/* Archival Image Frame */}
                <div className="bg-[#FAF7F2] p-4 md:p-6 shadow-2xl border border-[#EADCCB]">
                  <div className="overflow-hidden aspect-[4/3] bg-[#EADCCB]">
                    <img 
                      src="/giyanti_signing.png" 
                      alt="Archival Giyanti Signing"
                      className="w-full h-full object-cover grayscale sepia-[0.3] brightness-90 contrast-110 transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute -bottom-10 right-0 md:-right-10 lg:-right-20 max-w-[320px] bg-[#3D2517] p-8 md:p-10 shadow-3xl transform hover:-translate-y-2 transition-transform duration-500">
                  <span className="block text-[#D97736] font-bold text-[12px] tracking-[0.3em] uppercase mb-4">
                    {t('asalUsulPage.giyanti.locationLabel')}
                  </span>
                  <p className="text-white/90 text-[15px] md:text-[16px] leading-relaxed font-sans italic">
                    {t('asalUsulPage.giyanti.location')}
                  </p>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -z-10 top-20 -left-20 w-80 h-80 bg-[#8B6112]/5 rounded-full blur-3xl"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AsalUsul;
