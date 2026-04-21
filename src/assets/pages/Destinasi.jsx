import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

const Destinasi = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active-animation');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
              {t('destinasiPage.hero.badge')}
            </p>
            <h1 className="text-white text-[56px] md:text-[84px] lg:text-[100px] font-serif leading-[1.1] mb-8 animate-slide-up">
              {t('destinasiPage.hero.title')}
            </h1>
            <p className="text-gray-200 text-[18px] md:text-[20px] max-w-xl leading-relaxed mb-12 animate-fade-in-delayed">
              {t('destinasiPage.hero.desc')}
            </p>
            <button className="px-10 py-5 bg-[#5E2B0F] hover:bg-[#4A220C] text-white font-serif text-[18px] tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-2xl animate-fade-in-delayed">
              {t('destinasiPage.hero.button')}
            </button>
          </div>
        </div>

      </section>
      {/* Sumbu Filosofis Section */}
      <section className="px-8 md:px-16 pt-24 md:pt-32 pb-16 md:pb-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="w-20 h-1.5 bg-[#8B6112] mb-10"></div>
              <h2 className="text-[48px] md:text-[60px] font-serif font-bold text-[#5E2B0F] leading-tight mb-8 reveal-on-scroll fade-in-up">
                {t('destinasiPage.sumbuFilosofis.title')}
              </h2>
              <p className="text-gray-500 text-[18px] leading-relaxed reveal-on-scroll fade-in-up" style={{ transitionDelay: '0.1s' }}>
                {t('destinasiPage.sumbuFilosofis.desc')}
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-gray-400 text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase border-b border-gray-100 pb-2">
                {t('destinasiPage.sumbuFilosofis.subtitle')}
              </p>
            </div>
          </div>

          {/* Asymmetric Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Image: Keraton */}
            <div className="md:col-span-7 group reveal-on-scroll fade-in-left">
              <div className="overflow-hidden rounded-[24px] shadow-2xl mb-8">
                <img
                  src="/keraton.png"
                  alt="Keraton Yogyakarta"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-lg">
                {t('destinasiPage.sumbuFilosofis.keratonDesc')}
              </p>
            </div>

            {/* Right Image: Panggung Krapyak */}
            <div className="md:col-span-5 mt-0 md:mt-24 reveal-on-scroll fade-in-right">
              <div className="relative group overflow-hidden rounded-[24px] shadow-xl mb-6">
                <img
                  src="/panggung_krapyak.png"
                  alt="Panggung Krapyak"
                  className="w-full aspect-[3/2] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-[24px] md:text-[28px] font-serif">
                    {t('destinasiPage.sumbuFilosofis.krapyakTitle')}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-[11px] font-bold tracking-[0.2em] uppercase">
                {t('destinasiPage.sumbuFilosofis.krapyakTag')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Ikon Budaya & Sejarah Section */}
      <section className="py-24 md:py-32 px-8 md:px-16 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto">

          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-[44px] md:text-[56px] font-serif font-bold text-[#5E2B0F] mb-6">
              {t('destinasiPage.cultureHistory.title')}
            </h2>
            <p className="text-gray-500 text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed">
              {t('destinasiPage.cultureHistory.subtitle')}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                slug: "vredeburg",
                title: t('destinasiPage.cultureHistory.vredeburgTitle'),
                desc: t('destinasiPage.cultureHistory.vredeburgDesc'),
                img: "/banteng_vredeburg.png"
              },
              {
                slug: "tamansari",
                title: t('destinasiPage.cultureHistory.tamansariTitle'),
                desc: t('destinasiPage.cultureHistory.tamansariDesc'),
                img: "/taman_sari.png",
                badge: "AR ENABLED"
              },
              {
                slug: "sonobudoyo",
                title: t('destinasiPage.cultureHistory.sonobudoyoTitle'),
                desc: t('destinasiPage.cultureHistory.sonobudoyoDesc'),
                img: "/museum_sonobudoyo.png"
              }
            ].map((item, idx) => (
              <Link
                to={`/destinasi/${item.slug}`}
                key={idx}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col border border-gray-100/40 group cursor-pointer reveal-on-scroll fade-in-up"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                {/* Image Area */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {item.badge && (
                    <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#8B6112] text-white text-[11px] font-bold tracking-widest rounded-lg shadow-lg">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-10 md:p-12 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-[#5e2b0f] text-[28px] md:text-[32px] mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-10 flex-grow">
                    {item.desc}
                  </p>

                  {/* Action Link */}
                  <div className="flex items-center gap-4 text-[#8b6112] font-serif text-[15px] font-bold tracking-widest group/link outline-none">
                    <span>LIHAT DETAIL</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Nadi Malioboro Section */}
      <section className="py-24 md:py-32 px-8 md:px-16 bg-[#FDFBF9]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <div className="relative group reveal-on-scroll fade-in-left">
            <div className="overflow-hidden">
              <img
                src="/jalan_malioboro.png"
                alt="Jalan Malioboro"
                className="w-full aspect-[4/5] shadow-2xl object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8b6112]/5 rounded-full -z-10 animate-pulse"></div>
          </div>

          {/* Right: Content */}
          <div className="max-w-xl reveal-on-scroll fade-in-right">
            <p className="text-[#8B6112] text-[12px] font-bold tracking-[0.3em] uppercase mb-6">
              {t('destinasiPage.malioboro.tag')}
            </p>
            <h2 className="text-[48px] md:text-[64px] font-serif font-bold text-[#5E2B0F] leading-tight mb-10">
              {t('destinasiPage.malioboro.title')}
            </h2>

            <p className="text-gray-500 font-serif italic text-[18px] md:text-[20px] mb-8 leading-relaxed opacity-80">
              {t('destinasiPage.malioboro.quote')}
            </p>

            <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed mb-12">
              {t('destinasiPage.malioboro.desc')}
            </p>

            {/* Sub-features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[#5E2B0F] font-bold text-[18px] mb-3">
                  {t('destinasiPage.malioboro.shopTitle')}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {t('destinasiPage.malioboro.shopDesc')}
                </p>
              </div>
              <div>
                <h4 className="text-[#5E2B0F] font-bold text-[18px] mb-3">
                  {t('destinasiPage.malioboro.performTitle')}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {t('destinasiPage.malioboro.performDesc')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Destinasi;
