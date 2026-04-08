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

      </div>

      </section>

      {/* Garis Waktu Peradaban (Timeline) */}
      <section className="bg-[#FCF9F7] py-24 px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="mb-20 animate-fade-in">
            <div className="w-16 h-1 bg-[#8b6112] mb-8"></div>
            <h2 className="text-[42px] md:text-[52px] font-serif font-bold text-[#5e2b0f] mb-6 leading-tight">
              Garis Waktu Peradaban
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] max-w-2xl leading-relaxed opacity-80">
              Evolusi Kesultanan Ngayogyakarta Hadiningrat dari pusat kekuasaan tradisional menuju Daerah Istimewa yang modern namun tetap memegang teguh akar budayanya.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block"></div>

            {/* Event 1: 1755 */}
            <div className="flex flex-col md:flex-row items-center mb-32 relative">
              <div className="w-full md:w-1/2 pr-0 md:pr-20 text-center md:text-right mb-12 md:mb-0 order-2 md:order-1">
                <span className="text-[64px] md:text-[84px] font-serif font-bold text-gray-100 block mb-2 leading-none">1755</span>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#5e2b0f] mb-4">Perjanjian Giyanti</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg ml-auto">
                  Perjanjian ini menandai terbentuknya Kesultanan Yogyakarta sebagai hasil pembagian Kerajaan Mataram. Sejak saat itu, Yogyakarta berkembang menjadi pusat budaya dan pemerintahan yang berpengaruh di Jawa.
                </p>
              </div>
              
              {/* Timeline Point */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 bg-[#5e2b0f] rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                   <div className="transform -rotate-45">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v10l-3 2v5l-3-2V7H6v12.5A2.5 2.5 0 0 1 3.5 22h14a2.5 2.5 0 0 1 0-5" />
                     </svg>
                   </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-20 order-1 md:order-2 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/giyanti.png" 
                    alt="Perjanjian Giyanti" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Event 2: 1812 */}
            <div className="flex flex-col md:flex-row items-center mb-12 relative">
              <div className="w-full md:w-1/2 pr-0 md:pr-20 order-1 md:order-1 mb-8 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/geger.png" 
                    alt="Geger Sepehi" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>

              {/* Timeline Point */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 bg-[#8b6112] rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
                   <div className="transform -rotate-45">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                     </svg>
                   </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-20 text-center md:text-left order-2 md:order-2">
                <span className="text-[64px] md:text-[84px] font-serif font-bold text-gray-100 block mb-2 leading-none">1812</span>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#5e2b0f] mb-4">Geger Sepehi</h3>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg">
                  Peristiwa penyerangan oleh pasukan Inggris ke Keraton Yogyakarta ini membawa perubahan besar dalam sistem pemerintahan dan memperlemah kekuasaan kerajaan di masa itu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Sejarah;
