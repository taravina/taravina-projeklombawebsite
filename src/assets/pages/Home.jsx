import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
              Nusantara Digital City &bull; Est. 1755
            </p>

            {/* Main Title */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.2] drop-shadow-xl">
              Tempat Tradisi<br />
              Bertemu Masa<br />
              Depan
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base mb-10 leading-relaxed max-w-[480px] drop-shadow-md">
              Jelajahi portal lengkap Yogyakarta. Rasakan warisan Kesultanan
              melalui sentuhan digital modern, mulai dari pelestarian sejarah
              hingga inovasi kota pintar.
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
              <span className="text-4xl md:text-[44px] font-serif mb-2 leading-none">1755</span>
              <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/90">Tahun Berdiri</span>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="mt-16 lg:mt-0 lg:pl-4">
            <p className="text-[#8b6112] text-xs font-bold tracking-widest uppercase mb-4">
              Sejarah Kota
            </p>
            <h2 className="text-3xl md:text-[38px] font-serif text-[#5e2b0f] mb-8 leading-[1.2]">
              Awal Mula Kesultanan<br className="hidden lg:block"/> Mataram
            </h2>
            
            <p className="text-gray-500 leading-relaxed text-[15px] mb-5">
              Kisah Yogyakarta dimulai dari Perjanjian Giyanti tahun 1755, yang membagi Kerajaan 
              Mataram. Pangeran Mangkubumi kemudian menjadi Sri Sultan Hamengkubuwono I 
              dan mendirikan kota ini di kawasan hutan di antara Sungai Winongo dan Sungai Code.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-10">
              Dirancang sebagai mikrokosmos kosmografis, sumbu Utara-Selatan kota ini 
              menghubungkan Gunung Merapi dengan Laut Selatan, dengan Keraton Yogyakarta 
              sebagai pusatnya. Tata letak filosofis ini terus menjadi pedoman dalam 
              perkembangan kota hingga era digital.
            </p>

            <hr className="border-t border-gray-200 mb-8" />

            <div className="flex items-center gap-16 md:gap-20">
              <div>
                <h3 className="text-[#643110] font-bold text-[17px] mb-1">Keraton</h3>
                <p className="text-gray-600 text-[10px] font-semibold tracking-widest uppercase">Denyut Budaya</p>
              </div>
              <div>
                <h3 className="text-[#643110] font-bold text-[17px] mb-1">Kemerdekaan</h3>
                <p className="text-gray-600 text-[10px] font-semibold tracking-widest uppercase">Daerah Istimewa</p>
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
              Warisan Luhur
            </p>
            <h2 className="text-3xl lg:text-[42px] font-serif text-[#5e2b0f] mb-6">
              Budaya &amp; Tradisi
            </h2>
            <Link to="/budaya" className="text-[#8b6112] text-xs font-bold tracking-widest uppercase border-b-[1.5px] border-[#8b6112] pb-1 hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-colors whitespace-nowrap inline-block mb-10">
              Jelajahi Budaya Mataram &rarr;
            </Link>
            <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Melampaui bayang-bayang Wayang, Yogyakarta bernapas dalam tradisi hidup yang 
              diwariskan selama berabad-abad melalui komunitas dan ritual.
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
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">Gamelan Orchestra</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  *Presisi matematis dari tabuhan perunggu yang menggema dari keraton hingga ke pelosok desa.
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
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">Sekaten Ceremony</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  Perayaan kerajaan tahunan untuk memperingati kelahiran Nabi Muhammad melalui alunan sakral Gamelan Sekaten.
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
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">Sogan Batik</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  Makna dalam setiap goresan. Seni batik dengan teknik lilin tradisional yang menggambarkan kesabaran dan ketekunan orang Jawa.
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
                <h3 className="font-serif font-normal text-[#fdf6e4] text-[20px] mb-1.5">Wayang Kulit</h3>
                <p className="text-white/90 text-[12.5px] leading-relaxed">
                  Seni wayang yang mengisahkan pertarungan abadi antara baik dan buruk lewat permainan cahaya dan siluet.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kuliner Khas Section */}
      <section className="w-full bg-[#EFEBE8] py-24 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-[#8b6112] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                Cita Rasa Jogja
              </p>
              <h2 className="text-4xl lg:text-[44px] font-serif text-[#5e2b0f] mb-4">
                Kuliner Khas
              </h2>
              <p className="text-[#65605d] text-[15px] leading-relaxed">
                Nikmati keunikan Yogyakarta lewat cita rasa kuliner kaki lima legendaris
                dan hidangan tradisionalnya.
              </p>
            </div>
            <Link to="/kuliner" className="text-[#8b6112] text-xs font-bold tracking-widest uppercase border-b-[1.5px] border-[#8b6112] pb-1 hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-colors whitespace-nowrap mb-2 md:mb-0">
              Digital Menu Guide &rarr;
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Icon Box */}
              <div className="bg-[#F2ECE9] w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-[#8b6112]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
                  <path d="M21 15v7" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="font-serif font-bold text-[#5e2b0f] text-[22px] mb-3">Gudeg</h3>
                <p className="text-[#807b77] text-[13px] leading-[1.6] mb-8">
                  Rebusan nangka manis yang ikonik, dimasak perlahan selama berjam-jam dengan santan dan bumbu rahasia.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[#8b6112] text-[10px] font-bold tracking-wider uppercase mt-auto">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                PUSAT WIJILAN
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Icon Box */}
              <div className="bg-[#F2ECE9] w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-[#8b6112]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 14c0-5 4-9 9-9s9 4 9 9Z" />
                  <path d="M12 5v9" />
                  <path d="M7 7l3 5" />
                  <path d="M17 7l-3 5" />
                  <path d="M3 14h18" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="font-serif font-bold text-[#5e2b0f] text-[22px] mb-3">Bakpia pathok</h3>
                <p className="text-[#807b77] text-[13px] leading-[1.6] mb-8">
                  Kue isi kacang hijau manis yang telah menjadi oleh-oleh khas kota tersebut sejak tahun 1948.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[#8b6112] text-[10px] font-bold tracking-wider uppercase mt-auto">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                PUSAT BAKPIA PATHOK WIJILAN
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              {/* Icon Box */}
              <div className="bg-[#F2ECE9] w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-[#8b6112]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M8 8h8v2H8z" />
                  <path d="M8 12h8v2H8z" />
                  <path d="M7 22l10-10" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="font-serif font-bold text-[#5e2b0f] text-[22px] mb-3">Sate klathak</h3>
                <p className="text-[#807b77] text-[13px] leading-[1.6] mb-8">
                  Mutton skewers grilled using iron spokes instead of bamboo, seasoned only with salt for pure flavor.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[#8b6112] text-[10px] font-bold tracking-wider uppercase mt-auto">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                AREA IMOGIRI (SENTRA SATE KLATAK)
              </div>
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
              Destinasi Wisata
            </h2>
            <p className="text-[#8b6112] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              DI LUAR TEMBOK ISTANA
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
                  CITY CENTER
                </div>
                <h3 className="text-white text-3xl md:text-5xl font-serif mb-4">
                  Malioboro Quarter
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-md mb-8 leading-relaxed">
                  The legendary 2km stretch of culture, food, and craft. The vibrant heart that never sleeps.
                </p>
                <button className="bg-white text-[#5e2b0f] text-[11px] font-bold px-8 py-3.5 self-start uppercase tracking-widest hover:bg-[#8b6112] hover:text-white transition-all duration-300">
                  GET DIRECTIONS
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
                    Taman Sari
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
                      Candi Borobudur
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
                      Candi Prambanan
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
