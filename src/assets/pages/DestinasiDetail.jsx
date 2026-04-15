import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

const DestinasiDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Get data from translations - Fallback to vredeburg if slug is invalid
  const detailData = t(`destinasiPage.destinasiDetails.${slug}`) || t('destinasiPage.destinasiDetails.vredeburg');

  if (!detailData) return null;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black font-sans">
      
      {/* 1. Full-screen Background Image */}
      <div className="absolute inset-0">
        <img 
          src={detailData.bgImage} 
          alt={detailData.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* 2. Floating Header (Back Button & Title) */}
      <div className="absolute top-10 left-10 z-20 flex items-center gap-6">
        <button 
          onClick={() => navigate('/destinasi')}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#8b6112] transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white text-3xl font-serif font-bold tracking-wide drop-shadow-md">
          {detailData.title}
        </h1>
      </div>

      {/* 3. Main Info Card (Floating at the bottom) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[1280px] z-30">
        <div className="bg-[#FAF9F6]/95 backdrop-blur-xl rounded-[40px] shadow-2xl p-8 md:p-12 border border-white/50 animate-slide-up">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            
            {/* Left Column: Sejarah & Meta */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#8b6112]/10 rounded-lg flex items-center justify-center text-[#8b6112]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-[26px] md:text-[30px] font-serif font-bold text-[#5e2b0f]">
                  {detailData.sejarahTitle}
                </h2>
              </div>

              <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                {detailData.sejarahText}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {detailData.meta.map((item, idx) => (
                  <div key={idx} className="bg-white/40 rounded-xl p-3 flex items-center gap-3 border border-white/60">
                    <div className="text-[#8b6112] shrink-0">
                      {/* Dynamic Icon Selection */}
                      {item.icon === 'calendar' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                      {item.icon === 'museum' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                      {item.icon === 'map' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                      {item.icon === 'palace' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#5e2b0f] uppercase leading-tight">{item.value}</p>
                      <p className="text-[9px] text-gray-500 font-bold tracking-widest opacity-80 uppercase">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Gallery & Location */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {detailData.gallery.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-[20px] aspect-[4/3] group shadow-md border-2 border-white hover:border-[#8b6112] transition-all">
                    <img 
                      src={img} 
                      alt="Gallery" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                ))}
              </div>

              {/* Location Card */}
              <div className="bg-gray-100/50 rounded-3xl p-8 border border-white">
                <div className="flex items-start gap-4">
                  <div className="text-[#8b6112] pt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#5e2b0f] font-serif font-bold text-xl mb-2">{detailData.lokasiTitle}</h3>
                    <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed max-w-sm">
                      {detailData.lokasiAddress}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DestinasiDetail;
