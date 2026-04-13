import React from 'react';

const Destinasi = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/destinasi_hero.png" 
            alt="Tanah Mataram" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="max-w-3xl">
            <p className="text-[#D97736] text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              EST. 1755
            </p>
            <h1 className="text-white text-[56px] md:text-[84px] lg:text-[100px] font-serif leading-[1.1] mb-8 animate-slide-up">
              Jejak Langkah di<br />
              <span className="italic">Tanah Mataram</span>
            </h1>
            <p className="text-gray-200 text-[18px] md:text-[20px] max-w-xl leading-relaxed mb-12 animate-fade-in-delayed">
              Menelusuri nafas spiritual dan budaya di pusat peradaban Jawa. 
              Selamat datang di jiwa Nusantara.
            </p>
            <button className="px-10 py-5 bg-[#5E2B0F] hover:bg-[#4A220C] text-white font-serif text-[18px] tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-2xl animate-fade-in-delayed">
              MULAI PENJELAJAHAN
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[11px] font-bold tracking-widest uppercase opacity-70">Scroll</span>
          <div className="w-[1px] h-12 bg-white/50"></div>
        </div>
      </section>

      {/* Categories / Grid Section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-[40px] md:text-[52px] font-serif text-[#5E2B0F] leading-tight mb-6">
                Destinasi Ikonik Yogyakarta
              </h2>
              <p className="text-gray-500 text-[18px] leading-relaxed">
                Dari kemegahan candi-candi kuno hingga kesejukan alam pegunungan, 
                Yogyakarta menawarkan perjalanan spiritual yang tak terlupakan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Candi Prambanan", cat: "Situs Budaya", img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&q=80&w=800" },
              { title: "Keraton Yogyakarta", cat: "Istana Raja", img: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=800" },
              { title: "Pantai Parangtritis", cat: "Wisata Alam", img: "https://images.unsplash.com/photo-1589136109968-3e284074f762?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer overflow-hidden rounded-2xl relative aspect-[3/4]">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-[#D97736] text-[12px] font-bold tracking-widest uppercase mb-2 block">{item.cat}</span>
                  <h3 className="text-white text-[28px] font-serif">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinasi;
