import React, { useState, useEffect } from 'react';

const Sejarah = () => {
  const images = ['/foto1.png', '/foto2.png', '/foto3.png', '/foto4.png'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  const filters = ['Semua', 'Keraton', 'Kolonial', 'Modern'];

  const historyItems = [
    {
      id: 'sekaten',
      name: 'Sekaten',
      category: 'Keraton',
      image: '/Sekaten.png',
      desc: 'Tradisi tahunan memperingati Maulid Nabi Muhammad SAW yang diwarnai dengan bunyi Gamelan Sekati yang megah.'
    },
    {
       id: 'vredeburg',
       name: 'Benteng Vredeburg',
       category: 'Kolonial',
       image: '/foto2.png',
       desc: 'Saksi bisu perjuangan bangsa, benteng ini kini menjadi museum yang menyimpan memori kolektif revolusi Indonesia.'
    },
    {
      id: 'gamelan',
      name: 'Gamelan Pusaka',
      category: 'Keraton',
      image: '/gamelan.png',
      desc: 'Alunan magis yang mengiringi setiap upacara adat, menghubungkan dimensi spiritual dan budaya Keraton.'
    },
    {
      id: 'tugu',
      name: 'Tugu Golong Giling',
      category: 'Modern',
      image: '/yogyahero.png',
      desc: 'Ikon modern yang tetap memegang teguh filosofi Manunggaling Kawula Gusti, pusat orientasi kosmologis Jogja.'
    },
    {
      id: 'station-tugu',
      name: 'Stasiun Tugu',
      category: 'Kolonial',
      image: '/kopi.png',
      desc: 'Gerbang utama kemajuan transportasi sejak era kolonial, kini menjadi salah satu stasiun tersibuk dan bersejarah di Indonesia.'
    }
  ];

  const filteredItems = activeFilter === 'Semua' 
    ? historyItems 
    : historyItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    // Handle initial hash for filtering
    const hash = window.location.hash.replace('#', '');
    if (hash === 'keraton') setActiveFilter('Keraton');
    else if (hash === 'kolonial') setActiveFilter('Kolonial');
    else if (hash === 'modern') setActiveFilter('Modern');

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [images.length]);

  return (
    <div className="bg-[#FCF9F7]">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${
            index === currentIndex 
              ? 'opacity-100 translate-x-0 scale-100 z-0' 
              : index < currentIndex 
                ? 'opacity-0 -translate-x-full scale-100 -z-10' 
                : 'opacity-0 translate-x-full scale-100 -z-10'
          }`}
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('${img}')`,
            backgroundAttachment: 'fixed'
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
              EST. 1755 <span className="mx-2 text-[#8b6112]">•</span> HERITAGE DIGITALISM
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mb-6 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[64px] font-bold leading-[1.2] tracking-tight drop-shadow-2xl">
            Berawal dari Sebuah<br />
            Sumpah dan Tanah<br />
            Mataram
          </h1>
        </div>

        {/* Description Subtext */}
        <div className="max-w-xl animate-fade-in-up">
          <p className="font-serif text-sm md:text-base text-gray-200 leading-relaxed opacity-85 drop-shadow-md px-4">
            Menelusuri sejarah agung melalui Perjanjian Giyanti, sebuah titik balik yang melahirkan peradaban luhur di jantung Pulau Jawa.
          </p>
        </div>
      </div>

      </section>

      {/* History Exploration Section */}
      <section id="eksplorasi" className="px-8 md:px-16 py-12 md:py-24 max-w-[1400px] mx-auto">
        {/* Anchor point for hashes */}
        <div id="keraton" className="absolute -mt-32"></div>
        <div id="kolonial" className="absolute -mt-32"></div>
        <div id="modern" className="absolute -mt-32"></div>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="animate-fade-in">
            <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-[#5e2b0f] mb-3 leading-tight">
              Eksplorasi Sejarah
            </h2>
            <p className="text-gray-500 text-[15px] md:text-[16px] max-w-lg">
              Setiap era menyimpan cerita unik yang membentuk identitas Yogyakarta hingga hari ini.
            </p>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-[#8b6112] font-serif text-[18px] md:text-[20px] font-medium group transition-all duration-300"
            >
              <span className="text-gray-400 font-sans font-normal text-[16px]">Era:</span>
              <span className="font-bold border-b-2 border-transparent group-hover:border-[#8b6112]">{activeFilter}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-fade-in-up">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 text-[15px] transition-colors ${
                      activeFilter === filter 
                        ? 'text-[#8b6112] font-bold bg-[#FCF9F7]' 
                        : 'text-gray-500 hover:text-[#8b6112] hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-fade-in-up">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100/50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#8b6112] uppercase tracking-widest rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[22px] font-serif font-bold text-[#5e2b0f] mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <button className="text-[#8b6112] font-black text-[13px] tracking-widest uppercase border-b-2 border-[#8b6112] pb-0.5 hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-all">
                    PELAJARI LEBIH
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sejarah;
