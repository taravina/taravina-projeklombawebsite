import React from 'react';

const Kuliner = () => {
  const [activeFilter, setActiveFilter] = React.useState('Terpopuler');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  
  const filters = ['Semua', 'Favorit', 'Terpopuler', 'Terlaris'];

  const foodItems = [
    {
      id: 'bakpia',
      name: 'Bakpia Pathok',
      image: '/bakpia.png',
      desc: 'Akulturasi budaya Tionghoa dan Jawa yang melahirkan kudapan ikonik dengan isi kacang hijau yang lembut.',
      category: 'Terpopuler',
      isFavorite: true
    },
    {
      id: 'klatak',
      name: 'Sate Klatak',
      image: 'sate.png',
      desc: 'Keunikan jeruji besi sepeda sebagai tusuk sate yang menghantarkan panas sempurna ke jantung daging domba muda.',
      category: 'Terlaris',
      isFavorite: true
    },
    {
      id: 'kopi',
      name: 'Kopi Joss',
      image: 'kopi.png',
      desc: 'Simbol kehangatan malam di sekitar Stasiun Tugu. Arang membara yang dicelupkan ke dalam kopi pekat bukan sekadar atraksi, melainkan penetralisir kafein yang melegenda.',
      category: 'Terpopuler',
      isFavorite: false
    },
    {
      id: 'oseng',
      name: 'Oseng Mercon',
      image: 'oseng.png',
      desc: "Hidangan pedas dengan potongan daging sapi dan cabai melimpah. Sensasi pedasnya yang 'meledak' membuatnya jadi favorit pecinta makanan ekstrem.",
      category: 'Terlaris',
      isFavorite: true
    },
    {
      id: 'jadah',
      name: 'Jadah Tempe',
      image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800',
      desc: 'Perpaduan jadah yang lembut dan tempe bacem yang manis gurih. Teksturnya unik dengan rasa tradisional yang khas dari daerah pengunungan.',
      category: 'Terpopuler',
      isFavorite: false
    },
    {
      id: 'ronde',
      name: 'Wedang Ronde',
      image: 'https://images.unsplash.com/photo-1544333346-64e4fe18204e?auto=format&fit=crop&q=80&w=800',
      desc: 'Minuman hangat dengan bola-bola ketan berisi kacang, disajikan dalam kuah jahe yang menghangatkan tubuh. Cocok dinikmati saat malam hari.',
      category: 'Terlaris',
      isFavorite: false
    },
    {
      id: 'mi-jawa',
      name: 'Bak Mie Jawa',
      image: 'https://images.unsplash.com/photo-1612608165959-a5697f57164b?auto=format&fit=crop&q=80&w=800',
      desc: 'Mie kuning dan bihun yang dimasak dengan kaldu ayam kampung kental, telur bebek, dan suwiran ayam. Aroma khas dari anglo kayu bakar yang tak terbantahkan.',
      category: 'Terpopuler',
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
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-black text-[#5e2b0f]">Cita Rasa</span>
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-black text-[#5e2b0f] -mt-2">Jogja:</span>
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-serif font-light text-[#8b6112] -mt-1 italic">Warisan di</span>
              <span className="block text-[56px] md:text-[68px] lg:text-[84px] font-serif font-light text-[#8b6112] -mt-4 italic">Setiap Sajian</span>
            </h1>
            
            <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[500px]">
              Filosofi kuliner Yogyakarta melampaui rasa; ia adalah perpaduan antara kesabaran, tradisi keraton, dan kekayaan rempah Nusantara yang diwariskan lintas generasi.
            </p>

            <button className="px-16 py-6 border border-gray-100 bg-[#FCF9F7] text-[#5e2b0f] font-serif text-[18px] shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
              Filosofi Saji
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
              {/* Optional Text Overlay (Mocking the cafe window text in image) */}
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center p-8">
                <p className="text-white text-[32px] md:text-[44px] font-black text-center leading-tight drop-shadow-lg tracking-tight uppercase">
                  </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Ikon Kuliner Section */}
      <section className="px-8 md:px-16 py-12 md:py-20 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-serif font-bold text-[#5e2b0f] mb-2 leading-tight">
                Ikon Kuliner
              </h2>
              <p className="text-gray-500 text-[16px] md:text-[18px]">
                Sajian legendaris yang mendefinisikan identitas kota.
              </p>
            </div>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 transition-all duration-300"
              >
                <span className="text-[#8B6112] font-sans font-normal text-[16px]">Urutkan:</span>
                <span className="text-[#5E2B0F] font-bold text-[16px]">{activeFilter}</span>
                <svg 
                  className={`w-4 h-4 text-[#5E2B0F] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-2 z-50 animate-fade-in-up">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(filter);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-6 py-2.5 text-[15px] transition-colors ${
                        activeFilter === filter 
                          ? 'text-[#8b6112] font-semibold bg-[#FCF9F7]' 
                          : 'text-[#4A5568] hover:text-[#8b6112] hover:bg-gray-50'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Featured Item: Gudeg Yu Djum */}
            <div className="lg:col-span-2 group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100/50">
                <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[480px] overflow-hidden">
                  <img 
                    src="/gudeg.png" 
                    alt="Gudeg Yu Djum" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#5e2b0f] mb-1">
                        Gudeg Yu Djum
                      </h3>
                      <p className="text-[#8b6112] text-[12px] md:text-[13px] font-bold tracking-widest uppercase">
                        THE LEGENDARY JACKFRUIT STEW
                      </p>
                    </div>
                    {/* Badge Icon */}
                    <div className="text-[#8b6112] p-2 bg-[#FCF9F7] rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-2xl">
                    Dimasak perlahan selama puluhan jam dengan kayu bakar, menciptakan cita rasa manis yang meresap hingga ke sanubari. Sebuah mahakarya dari dapur Wijilan yang bertahan sejak 1951.
                  </p>
                  <button className="text-[#8b6112] font-black text-[13px] tracking-widest uppercase border-b-2 border-[#8b6112] pb-0.5 hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-all">
                    LIHAT DETAIL
                  </button>
                </div>
              </div>
            </div>

            {/* Other Items */}
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[22px] font-serif font-bold text-[#5e2b0f] mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow line-clamp-3 md:line-clamp-none">
                    {item.desc}
                  </p>
                  <div className="mt-auto">
                    <button className="text-[#8b6112] font-black text-[13px] tracking-widest uppercase border-b-2 border-[#8b6112] pb-0.5 hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-all">
                      LIHAT DETAIL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kuliner;
