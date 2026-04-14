import React from 'react';
import { useLanguage } from "../../context/LanguageContext";

const SmartCity = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Blur and Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.7] transform scale-105"
          style={{ 
            backgroundImage: `url('/jogja tugu.png')`,
            filter: 'blur(3px) brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-xl">
            {/* Subtitle with accent line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#D97736]" />
              <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-90">
                {t('smartCityPage.hero.subtitle')}
              </p>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] drop-shadow-2xl">
              {t('smartCityPage.hero.title')}
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base lg:text-lg mb-12 leading-relaxed max-w-lg font-medium opacity-90">
              {t('smartCityPage.hero.desc')}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#7A3E14] text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-[11px] hover:bg-[#5e2b0f] transition-all shadow-xl">
                {t('smartCityPage.hero.explore')}
              </button>
              <button className="border border-white/40 text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-[11px] hover:bg-white/10 transition-all backdrop-blur-md">
                {t('smartCityPage.hero.data')}
              </button>
            </div>
          </div>

          {/* Right Column: Floating Pillars */}
          <div className="flex flex-col gap-5 lg:pl-12">
            
            {/* Pillar 1: Governance */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-2xl flex items-center gap-5 transform hover:translate-x-3 transition-transform duration-300 border border-white/60 max-w-[380px] self-end lg:self-start lg:translate-x-12">
              <div className="w-14 h-14 bg-[#7A3E14]/10 rounded-xl flex items-center justify-center text-[#7A3E14] flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#7A3E14] text-lg leading-tight mb-1">{t('smartCityPage.pillars.governance.title')}</h3>
                <p className="text-[10px] font-bold text-gray-700 tracking-wider mb-0.5 uppercase">{t('smartCityPage.pillars.governance.subtitle')}</p>
                <p className="text-[9px] text-[#D97736] font-medium">{t('smartCityPage.pillars.governance.desc')}</p>
              </div>
            </div>

            {/* Pillar 2: Economy */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-2xl flex items-center gap-5 transform hover:translate-x-3 transition-transform duration-300 border border-white/60 max-w-[380px] self-end lg:self-start lg:translate-x-24">
              <div className="w-14 h-14 bg-[#D97736]/10 rounded-xl flex items-center justify-center text-[#D97736] flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22m5-18H8.5a3.5 3.5 0 0 0 0 7h7a3.5 3.5 0 0 1 0 7H7"/></svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#7A3E14] text-lg leading-tight mb-1">{t('smartCityPage.pillars.economy.title')}</h3>
                <p className="text-[10px] font-bold text-gray-700 tracking-wider mb-0.5 uppercase">{t('smartCityPage.pillars.economy.subtitle')}</p>
                <p className="text-[9px] text-[#D97736] font-medium">{t('smartCityPage.pillars.economy.desc')}</p>
              </div>
            </div>

            {/* Pillar 3: Environment */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-2xl flex items-center gap-5 transform hover:translate-x-3 transition-transform duration-300 border border-white/60 max-w-[380px] self-end lg:self-start lg:translate-x-12">
              <div className="w-14 h-14 bg-[#34A853]/10 rounded-xl flex items-center justify-center text-[#34A853] flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a9 9 0 0 0-9 9c0 7 9 13 9 13s9-6 9-13a9 9 0 0 0-9-9z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#7A3E14] text-lg leading-tight mb-1">{t('smartCityPage.pillars.environment.title')}</h3>
                <p className="text-[10px] font-bold text-gray-700 tracking-wider mb-0.5 uppercase">{t('smartCityPage.pillars.environment.subtitle')}</p>
                <p className="text-[9px] text-[#D97736] font-medium">{t('smartCityPage.pillars.environment.desc')}</p>
              </div>
            </div>

            {/* Pillar 4: Living */}
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-2xl flex items-center gap-5 transform hover:translate-x-3 transition-transform duration-300 border border-white/60 max-w-[380px] self-end lg:self-start lg:translate-x-0">
              <div className="w-14 h-14 bg-[#EA4335]/10 rounded-xl flex items-center justify-center text-[#EA4335] flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/><path d="M12 11h.01"/><path d="M12 15h.01"/><path d="M12 19h.01"/><path d="M8 11h.01"/><path d="M8 15h.01"/><path d="M8 19h.01"/><path d="M16 11h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/></svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#7A3E14] text-lg leading-tight mb-1">{t('smartCityPage.pillars.living.title')}</h3>
                <p className="text-[10px] font-bold text-gray-700 tracking-wider mb-0.5 uppercase">{t('smartCityPage.pillars.living.subtitle')}</p>
                <p className="text-[9px] text-[#D97736] font-medium">{t('smartCityPage.pillars.living.desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Placeholder content below hero to allow scrolling */}
      <section className="py-24 px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="font-serif text-3xl text-gray-400 opacity-50 uppercase tracking-widest">Digital Heritage Ecosystem</h2>
      </section>
    </div>
  );
};

export default SmartCity;
