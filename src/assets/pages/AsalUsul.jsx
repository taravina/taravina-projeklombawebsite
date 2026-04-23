import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const AsalUsul = () => {
  const { t } = useLanguage();
  const [visibleSections, setVisibleSections] = useState({});
  const [activePhilosophy, setActivePhilosophy] = useState('general');

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

    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF9] overflow-x-hidden">

      {/* Hero Section - Mirroring the User's Image Design */}
      <section
        id="hero"
        className="px-8 md:px-16 pt-24 md:pt-32 pb-24 md:pb-40 animate-section"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="reveal-on-scroll fade-in-left">
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
          <div className="relative reveal-on-scroll fade-in-right" style={{ transitionDelay: '0.4s' }}>
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
            <div className="reveal-on-scroll fade-in-left">
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

            <div className="relative reveal-on-scroll zoom-in" style={{ transitionDelay: '0.3s' }}>
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
          <div className="reveal-on-scroll fade-in-up">
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
            <div className="reveal-on-scroll fade-in-left">
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
            <div className="relative reveal-on-scroll fade-in-right" style={{ transitionDelay: '0.3s' }}>
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

      {/* Filosofi Ruang Section - Interactive Discovery */}
      <section id="spatial" className="px-8 md:px-16 py-24 md:py-40 animate-section flex flex-col items-center bg-[#FDFBF9]">
        <div className="max-w-[1400px] w-full flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-16 reveal-on-scroll fade-in-up">
            <span className="text-[#8B6112] font-bold text-[14px] tracking-[0.4em] uppercase mb-4 block">
              {t('asalUsulPage.philosophySpace.badge')}
            </span>
            <h2 className="font-serif text-[42px] md:text-[52px] text-[#5E2B0F] font-bold">
              {t('asalUsulPage.philosophySpace.title')}
            </h2>
          </div>

          {/* Main Interactive Banner */}
          <div className="w-full max-w-[1240px] mb-20 relative overflow-hidden rounded-[40px] shadow-3xl aspect-[21/9] md:aspect-[21/7] reveal-on-scroll zoom-in" style={{ transitionDelay: '0.2s' }}>
            {Object.keys(t('asalUsulPage.philosophySpace.items')).map((key) => (
              <div
                key={key}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activePhilosophy === key ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
              >
                <img
                  src={t(`asalUsulPage.philosophySpace.items.${key}.image`)}
                  alt={t(`asalUsulPage.philosophySpace.items.${key}.title`)}
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-10 md:p-16">
                  <h3 className="text-white font-serif text-[36px] md:text-[48px] font-bold mb-4 tracking-wide">
                    {t(`asalUsulPage.philosophySpace.items.${key}.title`)}
                  </h3>
                  <p className="text-white/80 text-[18px] md:text-[20px] max-w-3xl leading-relaxed font-sans font-light">
                    {t(`asalUsulPage.philosophySpace.items.${key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Icon Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1240px] reveal-on-scroll fade-in-up" style={{ transitionDelay: '0.4s' }}>
            {[
              { id: 'merapi', icon: 'M12 2L2 22h20L12 2zm0 4.5l6.5 11.5H5.5L12 6.5z' },
              { id: 'keraton', icon: 'M3 10V21H21V10L12 2L3 10ZM12 5.5L19 11.75V19H5V11.75L12 5.5ZM10 13H14V17H10V13Z' },
              { id: 'sea', icon: 'M3 12c4 0 4 4 9 4s5-4 9-4M3 16c4 0 4 4 9 4s5-4 9-4' }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhilosophy(item.id)}
                className={`group p-12 rounded-[32px] cursor-pointer transition-all duration-700 flex flex-col items-center text-center
                  ${activePhilosophy === item.id
                    ? 'bg-white shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-[#EADCCB] -translate-y-4'
                    : 'bg-white/40 border border-transparent hover:bg-white hover:shadow-xl hover:-translate-y-2'}`}
              >
                <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center mb-8 transition-all duration-700
                  ${activePhilosophy === item.id
                    ? 'bg-[#5E2B0F] text-[#D97736] rotate-[360deg] shadow-lg'
                    : 'bg-white text-[#8B6112] shadow-sm rotate-0'}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h4 className="font-serif text-[26px] font-bold text-[#5E2B0F] mb-4">
                  {t(`asalUsulPage.philosophySpace.items.${item.id}.title`)}
                </h4>
                <p className="text-[#6B5A4E] text-[15px] leading-relaxed opacity-80">
                  {t(`asalUsulPage.philosophySpace.items.${item.id}.desc`)}
                </p>
                <div className={`mt-8 w-12 h-[2px] transition-all duration-700 
                  ${activePhilosophy === item.id ? 'bg-[#8B6112] w-20' : 'bg-transparent'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsalUsul;
