import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

const Budaya = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/mataram.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#D97736] text-[12px] md:text-sm font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in">
            {t('budayaPage.hero.badge')}
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-[84px] font-serif font-bold mb-4 drop-shadow-2xl animate-fade-in-up">
            {t('budayaPage.hero.title')}
          </h1>
          <h2 className="text-[#F3B664] text-3xl md:text-5xl lg:text-[56px] font-serif mb-8 drop-shadow-lg animate-fade-in-up delay-100">
            {t('budayaPage.hero.subtitle')}
          </h2>
          <p className="text-gray-100 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md animate-fade-in delay-200">
            {t('budayaPage.hero.desc')}
          </p>
          <a 
            href="#tradisi" 
            className="inline-block bg-[#7A3E14] hover:bg-[#5E2B0F] text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 shadow-xl animate-bounce-subtle"
          >
            {t('budayaPage.hero.button')}
          </a>
        </div>
        
        {/* Subtle Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent"></div>
      </section>

      {/* Filosofi Kasultanan Section */}
      <section id="tradisi" className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Gold Accent Line */}
            <div className="w-24 h-1 bg-[#C5A358] mb-8"></div>
            
            <h2 className="text-4xl lg:text-5xl font-serif text-[#5E2B0F] mb-12 leading-tight">
              {t('budayaPage.philosophy.title')}
            </h2>

            <div className="space-y-12">
              {/* Item 01 */}
              <div className="flex gap-10 items-start">
                <span className="text-6xl md:text-7xl font-serif text-[#EFEBE8] leading-none select-none">01</span>
                <div>
                  <h3 className="text-2xl font-bold text-[#7A3E14] mb-4">{t('budayaPage.philosophy.item1Title')}</h3>
                  <p className="text-gray-500 text-[16px] leading-[1.8]">
                    {t('budayaPage.philosophy.item1Desc')}
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="flex gap-10 items-start">
                <span className="text-6xl md:text-7xl font-serif text-[#EFEBE8] leading-none select-none">02</span>
                <div>
                  <h3 className="text-2xl font-bold text-[#7A3E14] mb-4">{t('budayaPage.philosophy.item2Title')}</h3>
                  <p className="text-gray-500 text-[16px] leading-[1.8]">
                    {t('budayaPage.philosophy.item2Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Palace Interior Image */}
          <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/mataram.png" 
              alt="Interior Keraton Yogyakarta" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay to enhance premium feel */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>
      </section>

      {/* Warisan Budaya Gallery */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-[1240px] mx-auto">
          {/* Top Row: 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Wayang Kulit */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/budaya_wayang.png" 
                  alt={t('budayaPage.gallery.wayang')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#5E2B0F] mb-4">{t('budayaPage.gallery.wayang')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {t('budayaPage.gallery.wayangDesc')}
                </p>
              </div>
            </div>

            {/* Gamelan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/budaya_gamelan.png" 
                  alt={t('budayaPage.gallery.gamelan')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#5E2B0F] mb-4">{t('budayaPage.gallery.gamelan')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {t('budayaPage.gallery.gamelanDesc')}
                </p>
              </div>
            </div>

            {/* Tari Serimpi */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/budaya_serimpi.png" 
                  alt={t('budayaPage.gallery.serimpi')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#5E2B0F] mb-4">{t('budayaPage.gallery.serimpi')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {t('budayaPage.gallery.serimpiDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Items Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-center gap-10">
            {/* Tari Bedhaya */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 lg:w-[calc(33.333%-1.66rem)]">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/budaya_bedhaya.png" 
                  alt={t('budayaPage.gallery.bedhaya')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#5E2B0F] mb-4">{t('budayaPage.gallery.bedhaya')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {t('budayaPage.gallery.bedhayaDesc')}
                </p>
              </div>
            </div>

            {/* Sendratari Ramayana */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 lg:w-[calc(33.333%-1.66rem)]">
              <div className="h-[350px] overflow-hidden">
                <img 
                  src="/budaya_ramayana.png" 
                  alt={t('budayaPage.gallery.ramayana')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-[#5E2B0F] mb-4">{t('budayaPage.gallery.ramayana')}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {t('budayaPage.gallery.ramayanaDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upacara Sakral Section */}
      <section className="w-full bg-[#EFEBE8] py-24 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white p-4 shadow-2xl rounded-sm transform -rotate-2">
              <img 
                src="/Sekaten.png" 
                alt={t('budayaPage.ritual.sekatenTitle')} 
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#7A3E14] text-white p-8 hidden md:block">
              <p className="text-3xl font-serif mb-1">{t('budayaPage.ritual.sekatenTitle')}</p>
              <p className="text-[10px] tracking-widest uppercase font-bold opacity-80">{t('budayaPage.ritual.sekatenSub')}</p>
            </div>
          </div>
          <div>
            <p className="text-[#8b6112] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              {t('budayaPage.ritual.badge')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#5e2b0f] mb-8 leading-tight">
              {t('budayaPage.ritual.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('budayaPage.ritual.desc1')} <strong>{t('budayaPage.ritual.sekatenTitle')}</strong>, {t('budayaPage.ritual.desc2')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              {t('budayaPage.ritual.desc3')}
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-300 pt-8">
              <div>
                <p className="text-2xl font-serif text-[#7A3E14] mb-1">{t('budayaPage.ritual.gunungan')}</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{t('budayaPage.ritual.gununganSub')}</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-[#7A3E14] mb-1">{t('budayaPage.ritual.labuhan')}</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{t('budayaPage.ritual.labuhanSub')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-like CTA */}
      <section 
        className="w-full py-24 text-center px-6 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/Gradient.png')" }}
      >
        <div className="absolute inset-0 bg-[#3a2a1d]/70"></div>
        <div className="max-w-3xl mx-auto border-y border-white/20 py-16 relative z-10">
          <h3 className="text-3xl font-serif text-[#e7c796] mb-6">{t('budayaPage.cta.title')}</h3>
          <p className="text-gray-200 mb-10">
            {t('budayaPage.cta.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/kuliner" className="px-8 py-3 bg-[#D97736] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#C0662B] transition-colors">
               {t('budayaPage.cta.buttonKuliner')}
             </Link>
             <Link to="/sejarah" className="px-8 py-3 border border-[#7A3E14] text-[#7A3E14] text-xs font-bold tracking-widest uppercase hover:bg-[#7A3E14] hover:text-white transition-all">
               {t('budayaPage.cta.buttonSejarah')}
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Budaya;
