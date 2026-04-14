import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const culinaryItems = [
    { id: 'gudeg', title: t('home.culinary.gudeg'), desc: t('home.culinary.gudegDesc'), loc: t('home.culinary.locationWijilan'), icon: 'fork' },
    { id: 'bakpia', title: t('home.culinary.bakpia'), desc: t('home.culinary.bakpiaDesc'), loc: t('home.culinary.locationBakpia'), icon: 'bakpia' },
    { id: 'klatak', title: t('home.culinary.klatak'), desc: t('home.culinary.klatakDesc'), loc: t('home.culinary.locationImogiri'), icon: 'satay' },
    { id: 'soto', title: t('home.culinary.soto'), desc: t('home.culinary.sotoDesc'), loc: t('home.culinary.locationSoto'), icon: 'bowl' },
    { id: 'kopijoss', title: t('home.culinary.kopijoss'), desc: t('home.culinary.kopijossDesc'), loc: t('home.culinary.locationKopi'), icon: 'coffee' },
    { id: 'yangko', title: t('home.culinary.yangko'), desc: t('home.culinary.yangkoDesc'), loc: t('home.culinary.locationYangko'), icon: 'sweet' },
    { id: 'geplak', title: t('home.culinary.geplak'), desc: t('home.culinary.geplakDesc'), loc: t('home.culinary.locationGeplak'), icon: 'candy' },
    { id: 'brongkos', title: t('home.culinary.brongkos'), desc: t('home.culinary.brongkosDesc'), loc: t('home.culinary.locationBrongkos'), icon: 'stew' },
    { id: 'mielethek', title: t('home.culinary.mielethek'), desc: t('home.culinary.mielethekDesc'), loc: t('home.culinary.locationMie'), icon: 'noodles' },
  ];

  const maxSlide = culinaryItems.length - 3; // For 3 cards per view

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'fork':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
            <path d="M21 15v7" />
          </svg>
        );
      case 'bakpia':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 14c0-5 4-9 9-9s9 4 9 9Z" />
            <path d="M12 5v9" />
            <path d="M7 7l3 5" />
            <path d="M17 7l-3 5" />
            <path d="M3 14h18" />
          </svg>
        );
      case 'satay':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20" />
            <path d="M8 8h8v2H8z" />
            <path d="M8 12h8v2H8z" />
            <path d="M7 22l10-10" />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
            <path d="M12 8v4l3 3" />
          </svg>
        );
    }
  };

  return (
    <>
      <div 
        className="relative w-full h-[calc(100vh-80px)] min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url('/jogja tugu.png')` }}
      >
        {/* Optional Overlay to darken background slightly for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <p className="text-[#d09628] text-[11px] md:text-sm font-bold tracking-[0.25em] uppercase mb-4">
              {t('home.hero.subtitle')}
            </p>

            {/* Main Title */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.2] drop-shadow-xl">
              {t('home.hero.title')}
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base mb-10 leading-relaxed max-w-[480px] drop-shadow-md">
              {t('home.hero.desc')}
            </p>
          </div>
        </div>
      </div>

      {/* Sejarah Singkat Section */}
      <section className="w-full bg-[#FAF9F6] py-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image with brown box */}
          <div className="relative justify-self-center lg:justify-self-start mt-8 lg:mt-0">
            {/* The Image Container with white border effect */}
            <div className="bg-white p-3 md:p-4 drop-shadow-xl inline-block max-w-[320px] md:max-w-[380px]">
              <img 
                src="/mataram.png" 
                alt="Keraton Yogyakarta" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* The overlapping brown box */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-[#7b5711] text-white p-6 md:p-8 flex flex-col items-center justify-center min-w-[140px] shadow-lg">
              <span className="text-4xl md:text-[44px] font-serif mb-2 leading-none">{t('home.history.year')}</span>
              <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/90">{t('home.history.yearLabel')}</span>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="mt-16 lg:mt-0 lg:pl-4">
            <p className="text-[#8b6112] text-xs font-bold tracking-widest uppercase mb-4">
              {t('home.history.subtitle')}
            </p>
            <h2 className="text-3xl md:text-[38px] font-serif text-[#5e2b0f] mb-8 leading-[1.2]">
              {t('home.history.title')}
            </h2>
            
            <p className="text-gray-500 leading-relaxed text-[15px] mb-5">
              {t('home.history.desc1')}
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-10">
              {t('home.history.desc2')}
            </p>

            <hr className="border-t border-gray-200 mb-8" />

            <div className="flex items-center gap-16 md:gap-20">
              <div>
                <h3 className="text-[#643110] font-bold text-[17px] mb-1">{t('home.history.keraton')}</h3>
                <p className="text-gray-600 text-[10px] font-semibold tracking-widest uppercase">{t('home.history.keratonSub')}</p>
              </div>
              <div>
                <h3 className="text-[#643110] font-bold text-[17px] mb-1">{t('home.history.kemerdekaan')}</h3>
                <p className="text-gray-600 text-[10px] font-semibold tracking-widest uppercase">{t('home.history.kemerdekaanSub')}</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Budaya & Tradisi Section */}
      <section className="w-full bg-[#FAF9F6] pb-24 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#8b6112] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              {t('home.culture.subtitle')}
            </p>
            <h2 className="text-3xl lg:text-[42px] font-serif text-[#5e2b0f] mb-6">
              {t('home.culture.title')}
            </h2>
            <Link to="/budaya" className="text-[#8b6112] text-xs font-bold tracking-widest uppercase border-b-[1.5px] border-[#8b6112] pb-1 hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-colors whitespace-nowrap inline-block mb-10">
              {t('home.culture.explore')}
            </Link>
            <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
              {t('home.culture.desc')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#8b6914] p-3 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col h-full">
              <img 
                src="gamelan.png" 
                alt="Gamelan Orchestra" 
                className="w-full h-[280px] md:h-[320px] object-cover rounded-lg mb-4"
              />
              <div className="px-1 pb-2 flex-grow">
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">{t('home.culture.cards.gamelan')}</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  {t('home.culture.cards.gamelanDesc')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#8b6914] p-3 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col h-full">
              <img 
                src="Sekaten.png" 
                alt="Sekaten Ceremony" 
                className="w-full h-[280px] md:h-[320px] object-cover rounded-lg mb-4"
              />
              <div className="px-1 pb-2 flex-grow">
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">{t('home.culture.cards.sekaten')}</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  {t('home.culture.cards.sekatenDesc')}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#8b6914] p-3 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col h-full">
              <img 
                src="batiksogan.png" 
                alt="Sogan Batik" 
                className="w-full h-[280px] md:h-[320px] object-cover rounded-lg mb-4"
              />
              <div className="px-1 pb-2 flex-grow">
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">{t('home.culture.cards.batik')}</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  {t('home.culture.cards.batikDesc')}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#8b6914] p-3 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col h-full">
              <img 
                src="wayang.png" 
                alt="Wayang Kulit" 
                className="w-full h-[280px] md:h-[320px] object-cover rounded-lg mb-4"
              />
              <div className="px-1 pb-2 flex-grow">
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">{t('home.culture.cards.wayang')}</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  {t('home.culture.cards.wayangDesc')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kuliner Khas Section */}
      <section className="w-full bg-[#EFEBE8] py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-[#8b6112] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                {t('home.culinary.subtitle')}
              </p>
              <h2 className="text-4xl lg:text-[44px] font-serif text-[#5e2b0f] mb-4">
                {t('home.culinary.title')}
              </h2>
              <p className="text-[#65605d] text-[15px] leading-relaxed">
                {t('home.culinary.desc')}
              </p>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative group/slider px-4 md:px-0">
            {/* Slider Controls - Positioned Side by Side */}
            <button 
              onClick={prevSlide}
              className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[#8b6112]/20 flex items-center justify-center text-[#8b6112] shadow-lg hover:bg-[#8b6112] hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[#8b6112]/20 flex items-center justify-center text-[#8b6112] shadow-lg hover:bg-[#8b6112] hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Mobile Controls */}
            <div className="flex justify-center gap-6 mt-8 md:hidden">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[#8b6112] flex items-center justify-center text-[#8b6112]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[#8b6112] flex items-center justify-center text-[#8b6112]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {culinaryItems.map((item, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100">
                    <div className="bg-[#F2ECE9] w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-[#8b6112]">
                      {getIcon(item.icon)}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif font-bold text-[#5e2b0f] text-[22px] mb-3">{item.title}</h3>
                      <p className="text-[#807b77] text-[13px] leading-[1.6] mb-8">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8b6112] text-[10px] font-bold tracking-wider uppercase mt-auto">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.loc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Destinasi Wisata Section */}
      <section className="w-full bg-[#FAF9F6] py-24 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#5e2b0f] mb-2">
              {t('home.destination.title')}
            </h2>
            <p className="text-[#8b6112] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              {t('home.destination.subtitle')}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Column: Malioboro (Vertical Big Card) */}
            <div className="relative group overflow-hidden rounded-2xl h-[500px] lg:h-[700px] shadow-lg">
              <img 
                src="/jlmaliboro.png" 
                alt="Malioboro Quarter" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="inline-block bg-[#8b6112] text-white text-[10px] font-bold px-3 py-1 mb-4 self-start tracking-widest rounded-sm">
                  {t('home.destination.center')}
                </div>
                <h3 className="text-white text-3xl md:text-5xl font-serif mb-4">
                  {t('home.destination.malioboro')}
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-md mb-8 leading-relaxed">
                  {t('home.destination.malioboroDesc')}
                </p>
                <button className="bg-white text-[#5e2b0f] text-[11px] font-bold px-8 py-3.5 self-start uppercase tracking-widest hover:bg-[#8b6112] hover:text-white transition-all duration-300">
                  {t('home.destination.directions')}
                </button>
              </div>
            </div>

            {/* Right Column: Split Layout */}
            <div className="flex flex-col gap-6">
              
              {/* Top: Taman Sari (Horizontal Card) */}
              <div className="relative group overflow-hidden rounded-2xl h-[240px] lg:h-[338px] shadow-lg">
                <img 
                  src="/tamansari.png" 
                  alt="Taman Sari" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-serif drop-shadow-md">
                    {t('home.destination.tamansari')}
                  </h3>
                </div>
              </div>

              {/* Bottom: Split Squares (Borobudur & Prambanan) */}
              <div className="grid grid-cols-2 gap-6 h-[240px] lg:h-[338px]">
                
                {/* Borobudur */}
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/candiborobudur.png" 
                    alt="Candi Borobudur" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white text-[16px] md:text-xl font-serif drop-shadow-md">
                      {t('home.destination.borobudur')}
                    </h3>
                  </div>
                </div>

                {/* Prambanan */}
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/candiprambanan.png" 
                    alt="Candi Prambanan" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-white text-[16px] md:text-xl font-serif drop-shadow-md">
                      {t('home.destination.prambanan')}
                    </h3>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
