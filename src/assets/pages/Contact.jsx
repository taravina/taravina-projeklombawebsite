import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FCF9F7] flex items-center justify-center px-8 py-24">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Illustration/Image */}
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-square lg:aspect-auto h-full min-h-[400px]">
          <img 
            src="/mataram.png" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5e2b0f]/60 to-transparent flex flex-col justify-end p-12">
            <h2 className="text-white text-[32px] md:text-[44px] font-serif font-bold mb-4 drop-shadow-lg">
              {t('contactPage.title')}
            </h2>
            <div className="w-16 h-[2px] bg-[#8b6112]"></div>
          </div>
        </div>

        {/* Right Side: Info Card */}
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-gray-100">
          <p className="text-gray-500 text-[18px] leading-relaxed mb-12">
            {t('contactPage.desc')}
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#FCF9F7] rounded-xl flex items-center justify-center text-[#8b6112]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#5e2b0f] font-bold text-sm tracking-widest uppercase mb-1">Email</h3>
                <p className="text-gray-500">heritage@jogja.go.id</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#FCF9F7] rounded-xl flex items-center justify-center text-[#8b6112]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#5e2b0f] font-bold text-sm tracking-widest uppercase mb-1">Location</h3>
                <p className="text-gray-500">Jl. Malioboro No. 175, Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <button className="mt-12 w-full py-5 bg-[#5e2b0f] hover:bg-[#4a220c] text-white font-serif text-[18px] tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl">
            {t('contactPage.title')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;