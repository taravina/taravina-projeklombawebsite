import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
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
    <div className="min-h-screen bg-[#FCF9F7] flex items-center justify-center px-8 py-24">
      <div className="max-w-4xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row reveal-on-scroll zoom-in">
        {/* Left Side: Image */}
        <div className="md:w-1/2 h-[300px] md:h-auto relative">
          <img 
            src="/yogyahero.png" 
            alt="About Yogyakarta Heritage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <p className="text-[#8b6112] text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase mb-4">
            EST. 1755
          </p>
          <h1 className="text-[32px] md:text-[44px] font-serif font-bold text-[#5e2b0f] mb-8 leading-tight">
            {t('aboutPage.title')}
          </h1>
          <div className="w-16 h-[2px] bg-[#8b6112] mb-8"></div>
          <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed italic">
            "{t('aboutPage.desc')}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;