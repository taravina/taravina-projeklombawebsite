import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

const Kuliner = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState('Terpopuler');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  
  const filters = ['Semua', 'Favorit', 'Terpopuler', 'Terlaris'];

  const foodItems = [
    {
      id: 'gudeg',
      name: 'Gudeg Yu Djum',
      image: '/gudeg.png',
      desc: 'Dimasak perlahan selama puluhan jam dengan kayu bakar, menciptakan cita rasa manis yang meresap hingga ke sanubari.',
      category: 'Terlaris',
      isFavorite: true
    },
    {
      id: 'ronde',
      name: 'Wedang Ronde',
      image: '/kuliner_ronde.png',
      desc: 'Minuman hangat dengan bola-bola ketan berisi kacang, disajikan dalam kuah jahe yang menghangatkan tubuh.',
      category: 'Terlaris',
      isFavorite: false
    },
    {
      id: 'mi-jawa',
      name: 'Bak Mie Jawa',
      image: '/kuliner_mie_jawa.png',
      desc: 'Mie kuning dan bihun yang dimasak dengan kaldu ayam kampung kental, telur bebek, dan aroma khas anglo.',
      category: 'Terlaris',
      isFavorite: true
    },
    {
      id: 'kalasan',
      name: 'Ayam Goreng Kalasan',
      image: '/kuliner_ayam_kalasan.png',
      desc: 'Ayam goreng khas Jawa dengan bumbu meresap hingga gurih dan tekstur empuk yang disajikan dengan kremesan.',
      category: 'Terlaris',
      isFavorite: true
    },
    {
      id: 'soto',
      name: 'Soto Ayam',
      image: '/soto_ayam.png',
      desc: 'Sup ayam khas Indonesia dengan kuah kuning gurih dari aroma rempah-rempah yang meresap sempurna.',
      category: 'Terlaris',
      isFavorite: true
    },
    {
      id: 'bakpia',
      name: 'Bakpia Pathok',
      image: '/bakpia.png',
      desc: 'Akulturasi budaya Tionghoa dan Jawa yang melahirkan kudapan ikonik dengan isi kacang hijau yang lembut.',
      category: 'Semua',
      isFavorite: true
    },
    {
      id: 'klatak',
      name: 'Sate Klatak',
      image: '/sate.png',
      desc: 'Keunikan jeruji besi sepeda sebagai tusuk sate yang menghantarkan panas sempurna ke jantung daging domba muda.',
      category: 'Semua',
      isFavorite: true
    },
    {
      id: 'kopi',
      name: 'Kopi Joss',
      image: '/kopi.png',
      desc: 'Simbol kehangatan malam di sekitar Stasiun Tugu. Arang membara yang dicelupkan ke dalam kopi pekat bukan sekadar atraksi.',
      category: 'Semua',
      isFavorite: false
    },
    {
      id: 'oseng',
      name: 'Oseng Mercon',
      image: '/oseng.png',
      desc: 'Hidangan pedas dengan potongan daging sapi dan cabai melimpah. Sensasi pedasnya yang "meledak" membuatnya jadi favorit.',
      category: 'Semua',
      isFavorite: true
    }
  ];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredItems = activeFilter === 'Semua' 
    ? foodItems 
    : activeFilter === 'Favorit'
    ? foodItems.filter(item => item.isFavorite)
    : foodItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans">
      {/* Redundant local navbar removed to use global navigation */}

      {/* Main Content / Hero Section */}
      <section className="px-8 md:px-16 pt-8 md:pt-12 pb-12 md:pb-20 lg:pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1 mt-12 lg:mt-0 max-w-xl">
            <h1 className="font-serif leading-[1.15] mb-8">
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-black text-[#5e2b0f]">{t('kulinerPage.hero.title1')}</span>
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-black text-[#5e2b0f] -mt-2">{t('kulinerPage.hero.title2')}</span>
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-serif font-light text-[#8b6112] -mt-1 italic">{t('kulinerPage.hero.title3')}</span>
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-serif font-light text-[#8b6112] -mt-4 italic">{t('kulinerPage.hero.title4')}</span>
            </h1>
            
            <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[500px]">
              {t('kulinerPage.hero.desc')}
            </p>

            <button className="px-16 py-6 border border-gray-100 bg-[#FCF9F7] text-[#5e2b0f] font-serif text-[18px] shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
              {t('kulinerPage.hero.button')}
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="order-1 lg:order-2 flex justify-end">
            <div className="relative w-full aspect-[4/5] max-w-[580px] overflow-hidden rounded-[120px]">
              <img 
                src="jogjasenja.png" 
                alt="Cafe Atmosphere" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center p-8">
                <p className="text-white text-[32px] md:text-[44px] font-black text-center leading-tight drop-shadow-lg tracking-tight uppercase">
                  </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Ikon Kuliner Section */}
      <section className="px-8 md:px-16 py-20 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Filters Matching Screenshot */}
          <div className="flex gap-4 mb-16">
            <button 
              onClick={() => setActiveFilter('Semua')}
              className={`px-10 py-3 rounded-full text-[15px] font-bold transition-all duration-300 ${
                activeFilter === 'Semua' 
                ? 'bg-[#5e2b0f] text-white shadow-xl scale-105' 
                : 'bg-[#d2c5b8] text-[#5e2b0f] hover:bg-[#c4b5a6]'
              }`}
            >
              Semua
            </button>
            <button 
              onClick={() => setActiveFilter('Terlaris')}
              className={`px-10 py-3 rounded-full text-[15px] font-bold transition-all duration-300 ${
                activeFilter === 'Terlaris' 
                ? 'bg-[#5e2b0f] text-white shadow-xl scale-105' 
                : 'bg-[#d2c5b8] text-[#5e2b0f] hover:bg-[#c4b5a6]'
              }`}
            >
              Terlaris
            </button>
          </div>

          {/* Section Header with Dynamic Title */}
          <div className="mb-20">
            <h2 className="text-[48px] md:text-[64px] font-serif font-bold text-[#5e2b0f] leading-tight">
              {activeFilter === 'Terlaris' ? 'Menu Terlaris' : 'Semua Menu'}
            </h2>
          </div>

          {/* 3x3 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-[26px] font-serif font-bold text-[#5e2b0f] mb-4 group-hover:text-[#8b6112] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <span className="text-[#8b6112] font-bold text-[11px] tracking-[0.2em] uppercase border-b-2 border-[#8b6112]/30 pb-1 cursor-pointer hover:border-[#8b6112] transition-all">
                      LIHAT DETAIL
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Recipe Card Section */}
      <section className="px-8 md:px-16 py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto overflow-hidden rounded-[32px] bg-[#5E2B0F] shadow-2xl flex flex-col lg:flex-row relative group">
          {/* Left Content */}
          <div className="p-10 md:p-16 lg:w-1/2 text-white flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[44px] font-serif font-bold mb-6 leading-tight whitespace-pre-line">
              {t('kulinerPage.heritage.title')}
            </h2>
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-md">
              {t('kulinerPage.heritage.desc')}
            </p>
            <div>
              <Link to="/menu-resep" className="inline-flex items-center gap-4 px-8 py-5 bg-[#8B6112] hover:bg-[#765210] text-[#FCF9F7] font-serif text-[18px] transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {t('kulinerPage.heritage.button')}
              </Link>
            </div>
          </div>
          {/* Right Illustration */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden">
            <img 
              src="/kuliner_resep_heritage.png" 
              alt="Heritage Recipe Illustration" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Filosofi Saji Section */}
      <section id="filosofi" className="px-8 md:px-16 py-20 md:py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          {/* Temple Icon */}
          <div className="flex justify-center mb-8">
            <svg className="w-12 h-12 text-[#8b6112]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 6v2h16V6l-8-4zM4 9v2h16V9H4zm0 3v9h2v-9H4zm4 0v9h2v-9H8zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z" />
            </svg>
          </div>
          
          <h2 className="text-[32px] md:text-[44px] font-serif font-bold text-[#5e2b0f] mb-6">
            {t('kulinerPage.philosophy.title')}
          </h2>
          
          <div className="w-24 h-1 bg-[#8b6112] mx-auto mb-12"></div>
          
          <p className="text-[#5e2b0f] text-[20px] md:text-[24px] font-serif italic leading-relaxed mb-10 text-gray-700">
            {t('kulinerPage.philosophy.quote')}
          </p>
          
          <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
            {t('kulinerPage.philosophy.desc')}
          </p>
        </div>
      </section>

    </div>
  );
};

export default Kuliner;
