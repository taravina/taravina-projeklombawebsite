import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Tokoh = () => {
  const { t } = useLanguage();

  const sultanImages = {
    1: 'https://images.unsplash.com/photo-1582213726893-edc10ff052b1?auto=format&fit=crop&q=80&w=400',
    2: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400',
    3: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    4: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    5: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    6: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  };

  const largeImages = {
    hb1: 'https://images.unsplash.com/photo-1582213726893-edc10ff052b1?auto=format&fit=crop&q=80&w=1200',
    hb2: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    hb3: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200',
    hb4: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200',
    hb5: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200'
  };

  const sultans = t('tokohPage.sultans').map(s => ({
    ...s,
    image: sultanImages[s.id]
  }));

  const hb1 = t('tokohPage.details.hb1');
  const hb2 = t('tokohPage.details.hb2');
  const hb3 = t('tokohPage.details.hb3');
  const hb4 = t('tokohPage.details.hb4');
  const hb5 = t('tokohPage.details.hb5');

  return (
    <div className="min-h-screen bg-[#FCF9F7]">
      {/* Hero Section */}
      <section className="px-8 md:px-16 pt-20 md:pt-32 pb-24 md:pb-40">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#8B6112] font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6 block">
              {t('tokohPage.hero.subtitle')}
            </span>
            <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[76px] font-bold text-[#5e2b0f] leading-tight mb-8">
              {t('tokohPage.hero.title')}
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-lg mb-10">
              {t('tokohPage.hero.desc')}
            </p>
            <div className="w-24 h-[2px] bg-[#D2C5B8]"></div>
          </div>

          {/* Right Content: Portrait Grid */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-white/50 p-8 md:p-12 rounded-[40px] shadow-sm backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-[600px]">
                {sultans.map((sultan) => (
                  <div key={sultan.id} className="flex flex-col items-center">
                    <div className="relative p-2 bg-white border border-[#E5DCD3] shadow-lg mb-4 transform hover:scale-105 transition-all duration-500 hover:z-10 cursor-pointer group">
                      <div className="absolute inset-0 border-[0.5px] border-[#8B6112]/20 m-1 pointer-events-none"></div>
                      <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                        <img 
                          src={sultan.image} 
                          alt={sultan.name}
                          className="w-full h-full object-cover filter sepia-[0.2] group-hover:sepia-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[9px] md:text-[10px] font-bold text-[#5e2b0f] uppercase tracking-tighter leading-tight">
                        {sultan.name}
                      </p>
                      <p className="text-[7px] md:text-[8px] text-[#8B6112] italic mt-1 leading-none opacity-80">
                        {sultan.sub}
                      </p>
                      <p className="text-[7px] md:text-[8px] text-gray-400 mt-1">
                        {sultan.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <span className="text-[10px] text-gray-300 italic">@serayu.link</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sultan Detailed Biography Section */}
      <section className="px-8 md:px-16 py-12 md:py-24 bg-[#FCF9F7]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Portrait & Badge */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[24px] shadow-2xl border-4 border-white">
                <img 
                  src={largeImages.hb1} 
                  alt={hb1.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Period Badge */}
                <div className="absolute bottom-6 -right-4 md:-right-8 bg-[#5E2B0F] text-white p-6 md:p-8 rounded-xl shadow-2xl transform rotate-2">
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] opacity-60 mb-2 uppercase text-center">
                    {hb1.masaJabatan}
                  </p>
                  <p className="font-serif text-[24px] md:text-[32px] font-bold">
                    1755 - 1792
                  </p>
                </div>
              </div>
              
              <p className="mt-8 text-gray-400 text-[14px] md:text-[16px] italic leading-relaxed font-sans text-center lg:text-left">
                {hb1.imgAlt}
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="w-full lg:w-7/12 pt-4">
            <span className="text-[#8B6112] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 block">
              {hb1.tag}
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-10">
              {hb1.title}
            </h2>
            
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-2xl font-sans">
              {hb1.desc}
            </p>

            {/* Quote Box */}
            <div className="relative bg-[#A35933]/5 p-8 md:p-12 rounded-r-[24px] border-l-[6px] border-[#8B6112] mb-16">
              <p className="font-serif text-[20px] md:text-[24px] italic text-[#5E2B0F] leading-relaxed">
                "{hb1.quote}"
              </p>
            </div>

            {/* Bottom Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4 border-t border-gray-100">
              {/* Contributions */}
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb1.contributionTitle}
                </h4>
                <ul className="space-y-4">
                  {hb1.contributions.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B6112]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Philosophy */}
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb1.philosophyTitle}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans">
                  {hb1.philosophy}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sultan Detailed Biography Section 2 - Alternated Layout */}
      <section className="px-8 md:px-16 py-12 md:py-24 bg-[#FCF9F7] border-t border-gray-100/30">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">
          
          {/* Right Side: Portrait & Badge (Inverted) */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              {/* Main Image - Unified Aspect Ratio */}
              <div className="relative overflow-hidden rounded-[24px] shadow-2xl border-4 border-white bg-white aspect-[4/5]">
                <img 
                  src={largeImages.hb2} 
                  alt={hb2.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.05]"
                />
                
                {/* Floating Period Badge */}
                <div className="absolute bottom-6 -left-4 md:-left-8 bg-[#8B6112] text-white p-6 md:p-8 rounded-xl shadow-2xl transform -rotate-3">
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] opacity-80 mb-2 uppercase text-center">
                    {hb2.heroBadge}
                  </p>
                  <p className="font-serif text-[24px] md:text-[32px] font-bold">
                    1792 - 1828
                  </p>
                </div>
              </div>
              
              <p className="mt-8 text-gray-400 text-[14px] md:text-[16px] italic leading-relaxed font-sans text-center lg:text-right">
                {hb2.imgAlt}
              </p>
            </div>
          </div>

          {/* Left Side: Detailed Content */}
          <div className="w-full lg:w-7/12 pt-4">
            <span className="text-[#8B6112] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 block">
              {hb2.tag}
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-10">
              {hb2.title}
            </h2>
            
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-2xl font-sans">
              {hb2.desc}
            </p>

            {/* Quote Box */}
            <div className="relative bg-[#5E2B0F]/5 p-8 md:p-12 rounded-r-[24px] border-l-[6px] border-[#5E2B0F] mb-16">
              <p className="font-serif text-[20px] md:text-[24px] italic text-[#5E2B0F] leading-relaxed">
                "{hb2.quote}"
              </p>
            </div>

            {/* Bottom Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4 border-t border-gray-100">
              {/* Contributions / Revolution Role */}
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb2.contributionTitle}
                </h4>
                <ul className="space-y-4">
                  {hb2.contributions.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5E2B0F]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leadership Philosophy */}
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb2.philosophyTitle}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans">
                  {hb2.philosophy}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sultan Detailed Biography Section 3 - Layout: Photo Left */}
      <section className="px-8 md:px-16 py-12 md:py-24 bg-[#FCF9F7] border-t border-gray-100/30">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Portrait & Badge */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[24px] shadow-2xl border-4 border-white aspect-[4/5]">
                <img 
                  src={largeImages.hb3} 
                  alt={hb3.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-6 -right-4 md:-right-8 bg-[#5E2B0F] text-white p-6 md:p-8 rounded-xl shadow-2xl transform rotate-2">
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] opacity-60 mb-2 uppercase text-center">
                    {hb3.masaJabatan}
                  </p>
                  <p className="font-serif text-[24px] md:text-[32px] font-bold">
                    1812 - 1814
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-400 text-[14px] md:text-[16px] italic leading-relaxed font-sans text-center lg:text-left">
                {hb3.imgAlt}
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="w-full lg:w-7/12 pt-4">
            <span className="text-[#8B6112] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 block">
              {hb3.tag}
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-10">
              {hb3.title}
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-2xl font-sans">
              {hb3.desc}
            </p>
            <div className="relative bg-[#A35933]/5 p-8 md:p-12 rounded-r-[24px] border-l-[6px] border-[#8B6112] mb-16">
              <p className="font-serif text-[20px] md:text-[24px] italic text-[#5E2B0F] leading-relaxed">
                "{hb3.quote}"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb3.contributionTitle}
                </h4>
                <ul className="space-y-4">
                  {hb3.contributions.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B6112]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb3.philosophyTitle}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans">
                  {hb3.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sultan Detailed Biography Section 4 - Layout: Photo Right */}
      <section className="px-8 md:px-16 py-12 md:py-24 bg-[#FCF9F7] border-t border-gray-100/30">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">
          
          {/* Right Side: Portrait & Badge */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[24px] shadow-2xl border-4 border-white bg-white aspect-[4/5]">
                <img 
                  src={largeImages.hb4} 
                  alt={hb4.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-6 -left-4 md:-left-8 bg-[#8B6112] text-white p-6 md:p-8 rounded-xl shadow-2xl transform -rotate-3">
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] opacity-80 mb-2 uppercase text-center">
                    {hb4.masaJabatan}
                  </p>
                  <p className="font-serif text-[24px] md:text-[32px] font-bold">
                    1814 - 1823
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-400 text-[14px] md:text-[16px] italic leading-relaxed font-sans text-center lg:text-right">
                {hb4.imgAlt}
              </p>
            </div>
          </div>

          {/* Left Side: Detailed Content */}
          <div className="w-full lg:w-7/12 pt-4">
            <span className="text-[#8B6112] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 block">
              {hb4.tag}
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-10">
              {hb4.title}
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-2xl font-sans">
              {hb4.desc}
            </p>
            <div className="relative bg-[#5E2B0F]/5 p-8 md:p-12 rounded-r-[24px] border-l-[6px] border-[#5E2B0F] mb-16">
              <p className="font-serif text-[20px] md:text-[24px] italic text-[#5E2B0F] leading-relaxed">
                "{hb4.quote}"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb4.contributionTitle}
                </h4>
                <ul className="space-y-4">
                  {hb4.contributions.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5E2B0F]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb4.philosophyTitle}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans">
                  {hb4.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sultan Detailed Biography Section 5 - Layout: Photo Left */}
      <section className="px-8 md:px-16 py-12 md:py-24 bg-[#FCF9F7] border-t border-gray-100/30">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Portrait & Badge */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[24px] shadow-2xl border-4 border-white aspect-[4/5]">
                <img 
                  src={largeImages.hb5} 
                  alt={hb5.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-6 -right-4 md:-right-8 bg-[#5E2B0F] text-white p-6 md:p-8 rounded-xl shadow-2xl transform rotate-2">
                  <p className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] opacity-60 mb-2 uppercase text-center">
                    {hb5.masaJabatan}
                  </p>
                  <p className="font-serif text-[24px] md:text-[32px] font-bold">
                    1823 - 1855
                  </p>
                </div>
              </div>
              <p className="mt-8 text-gray-400 text-[14px] md:text-[16px] italic leading-relaxed font-sans text-center lg:text-left">
                {hb5.imgAlt}
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="w-full lg:w-7/12 pt-4">
            <span className="text-[#8B6112] font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 block">
              {hb5.tag}
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[68px] font-bold text-[#5e2b0f] leading-tight mb-10">
              {hb5.title}
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-2xl font-sans">
              {hb5.desc}
            </p>
            <div className="relative bg-[#A35933]/5 p-8 md:p-12 rounded-r-[24px] border-l-[6px] border-[#8B6112] mb-16">
              <p className="font-serif text-[20px] md:text-[24px] italic text-[#5E2B0F] leading-relaxed">
                "{hb5.quote}"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb5.contributionTitle}
                </h4>
                <ul className="space-y-4">
                  {hb5.contributions.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B6112]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] font-black text-[#5e2b0f] tracking-[0.2em] uppercase mb-6 opacity-60">
                  {hb5.philosophyTitle}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-sans">
                  {hb5.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote Section */}
      <section 
        className="py-24 px-8 md:px-16 border-t border-gray-100/50 bg-cover bg-center overflow-hidden relative"
        style={{ backgroundImage: "url('/Gradient.png')" }}
      >
        <div className="absolute inset-0 bg-[#3a2a1d]/60"></div>
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
            <h2 className="font-serif text-[32px] md:text-[44px] text-[#e7c796] mb-8">{t('tokohPage.footer.titleText')}</h2>
            <p className="text-gray-200 text-[16px] md:text-[18px] leading-relaxed italic last:mb-0">
                {t('tokohPage.footer.desc')}
            </p>
        </div>
      </section>
    </div>
  );
};

export default Tokoh;
