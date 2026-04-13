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
      <section className="px-8 md:px-16 py-12 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-serif font-bold text-[#5e2b0f] mb-4 leading-tight">
              Ikon Kuliner Yogyakarta
            </h2>
            <p className="text-gray-500 text-[16px] md:text-[18px] max-w-2xl mx-auto">
              Menelusuri jejak rasa yang telah bertahan lintas generasi, menceritakan sejarah dan kearifan lokal dalam setiap gigitan.
            </p>
          </div>

          {/* 3x3 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                id: 'klatak',
                name: 'Sate Klatak',
                image: '/sate.png',
                desc: 'Keunikan jeruji besi sepeda sebagai tusuk sate yang menghantarkan panas sempurna ke jantung daging domba muda.'
              },
              {
                id: 'kopi',
                name: 'Kopi Joss',
                image: '/kopi.png',
                desc: 'Simbol kehangatan malam di sekitar Stasiun Tugu. Arang membara yang dicelupkan ke dalam kopi pekat bukan sekadar atraksi.'
              },
              {
                id: 'oseng',
                name: 'Oseng Mercon',
                image: '/oseng.png',
                desc: "Hidangan pedas dengan potongan daging sapi dan cabai melimpah. Sensasi pedasnya yang 'meledak' membuatnya favorit."
              },
              {
                id: 'jadah',
                name: 'Jadah Tempe',
                image: '/kuliner_jadah.png',
                desc: 'Perpaduan jadah yang lembut dan tempe bacem yang manis gurih. Teksturnya unik dengan rasa tradisional daerah pegunungan.'
              },
              {
                id: 'ronde',
                name: 'Wedang Ronde',
                image: '/kuliner_ronde.png',
                desc: 'Minuman hangat dengan bola-bola ketan berisi kacang, disajikan dalam kuah jahe yang menghangatkan tubuh di malam hari.'
              },
              {
                id: 'mi-jawa',
                name: 'Bak Mie Jawa',
                image: '/kuliner_mie_jawa.png',
                desc: 'Mie kuning dan bihun yang dimasak dengan kaldu ayam kampung kental, telur bebek, dan aroma khas dari anglo kayu bakar.'
              },
              {
                id: 'gudeg',
                name: 'Gudeg Yu Djum',
                image: '/gudeg.png',
                desc: 'Mahakarya kuliner Jogja dari nangka muda yang dimasak berjam-jam dengan santan dan gula jawa, menciptakan rasa manis yang melegenda.'
              },
              {
                id: 'bakpia',
                name: 'Bakpia Pathok',
                image: '/bakpia.png',
                desc: 'Kue bulat berisi kacang hijau yang menjadi oleh-oleh wajib. Perpaduan sempurna antara kulit yang renyah dan isi yang lembut.'
              },
              {
                id: 'kalasan',
                name: 'Ayam Kalasan',
                image: '/kuliner_ayam_kalasan.png',
                desc: 'Ayam goreng bumbu manis khas Kalasan dengan tekstur daging yang empuk dan kremesan yang renyah menggugah selera.'
              }
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100/30 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-[24px] font-serif font-bold text-[#5e2b0f] mb-4 group-hover:text-[#8b6112] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50">
                    <button className="text-[#8b6112] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
                      PELAJARI LEBIH LANJUT <span>→</span>
                    </button>
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
            <h2 className="text-[32px] md:text-[44px] font-serif font-bold mb-6 leading-tight">
              Resep Warisan &<br />Panduan Digital
            </h2>
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-md">
              Pelajari rahasia bumbu dasar 'Jangkep' dan teknik memasak lambat yang telah dijaga selama berabad-abad oleh para abdi dalem keraton.
            </p>
            <div>
              <button className="inline-flex items-center gap-4 px-8 py-5 bg-[#8B6112] hover:bg-[#765210] text-[#FCF9F7] font-serif text-[18px] transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Buka Digital Menu Guide
              </button>
            </div>
          </div>
          {/* Right Illustration */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden">
            <img 
              src="/kuliner_resep_heritage.png" 
              alt="Heritage Recipe Illustration" 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Filosofi Saji Section */}
      <section className="px-8 md:px-16 py-20 md:py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          {/* Temple Icon */}
          <div className="flex justify-center mb-8">
            <svg className="w-12 h-12 text-[#8b6112]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 6v2h16V6l-8-4zM4 9v2h16V9H4zm0 3v9h2v-9H4zm4 0v9h2v-9H8zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2z" />
            </svg>
          </div>
          
          <h2 className="text-[32px] md:text-[44px] font-serif font-bold text-[#5e2b0f] mb-6">
            Filosofi Saji: Nasi Berkat & Kebersamaan
          </h2>
          
          <div className="w-24 h-1 bg-[#8b6112] mx-auto mb-12"></div>
          
          <p className="text-[#5e2b0f] text-[20px] md:text-[24px] font-serif italic leading-relaxed mb-10 text-gray-700">
            "Dalam setiap suapan Nasi Berkat, terkandung doa bagi kesejahteraan bersama. Makan bukan sekadar memuaskan lapar, melainkan bentuk syukur komunal yang menyatukan hati."
          </p>
          
          <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
            Tradisi kuliner Yogyakarta sangat kental dengan nilai-nilai spiritual. Dari gunungan saat Grebeg hingga tumpengan sederhana di gang-gang sempit, makanan adalah jembatan antara manusia, alam, dan Sang Pencipta.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Kuliner;
