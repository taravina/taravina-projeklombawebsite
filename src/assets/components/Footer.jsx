import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer 
      className="w-full text-[#e8e4db] py-20 px-6 md:px-12 font-sans bg-[#5c3e2e] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-4">
            <h2 className="font-serif text-[32px] md:text-[36px] leading-[1.1] mb-8 text-white">
              Yogyakarta:<br />
              <span className="font-light italic opacity-90">Nusantara Digital City</span>
            </h2>
            <p className="text-[#c1b5a5] text-[14px] leading-[1.8] mb-12 max-w-[320px]">
              {t('footer.brandDesc')}
            </p>
            
            {/* Social Icons Section */}
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <div className="flex flex-col gap-2">
                <span className="text-[#c1b5a5] text-[10px] tracking-[0.3em] font-bold opacity-60 px-1">...</span>
                <a href="#instagram" className="w-11 h-11 border border-[#9b7e64]/30 hover:bg-[#4a3225] rounded-lg flex items-center justify-center transition-all group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <rect x="2" y="2" width="20" height="20" rx="6" ry="6"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>

              {/* YouTube */}
              <div className="flex flex-col gap-2 pt-[14px]">
                <a href="#youtube" className="w-12 h-11 border border-[#9b7e64]/30 hover:bg-[#4a3225] rounded-lg flex items-center justify-center transition-all group">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>

              {/* TikTok */}
              <div className="flex flex-col gap-2">
                <span className="text-[#c1b5a5] text-[10px] tracking-[0.3em] font-bold opacity-60 px-1">...</span>
                <a href="#tiktok" className="w-11 h-11 border border-[#9b7e64]/30 hover:bg-[#4a3225] rounded-lg flex items-center justify-center transition-all group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.64 5.64 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Discovery */}
          <div>
            <h3 className="font-serif text-[#e7c796] text-[22px] mb-10 tracking-wide">{t('footer.discovery.title')}</h3>
            <ul className="space-y-6 text-[12px] tracking-[0.15em] font-bold uppercase text-[#e2dfdb]/80">
              <li><a href="#sejarah" className="hover:text-white transition-colors">{t('footer.discovery.history')}</a></li>
              <li><a href="#warisan" className="hover:text-white transition-colors">{t('footer.discovery.heritage')}</a></li>
              <li><a href="#kuliner" className="hover:text-white transition-colors">{t('footer.discovery.culinary')}</a></li>
              <li><a href="#destinasi" className="hover:text-white transition-colors">{t('footer.discovery.destinations')}</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-[#e7c796] text-[22px] mb-10 tracking-wide">{t('footer.services.title')}</h3>
            <ul className="space-y-6 text-[12px] tracking-[0.15em] font-bold uppercase text-[#e2dfdb]/80">
              <li><a href="#smart" className="hover:text-white transition-colors">{t('footer.services.smartCity')}</a></li>
              <li><a href="#permits" className="hover:text-white transition-colors">{t('footer.services.permits')}</a></li>
              <li><a href="#tourist" className="hover:text-white transition-colors">{t('footer.services.tourist')}</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">{t('footer.services.map')}</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div className="flex flex-col h-full">
            <h3 className="font-serif text-[#e7c796] text-[22px] mb-10 tracking-wide">{t('footer.information.title')}</h3>
            <ul className="space-y-6 text-[12px] tracking-[0.15em] font-bold uppercase text-[#e2dfdb]/80 mb-auto">
              <li><a href="#accessibility" className="hover:text-white transition-colors">{t('footer.information.accessibility')}</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">{t('footer.information.privacy')}</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">{t('footer.information.terms')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('footer.information.contact')}</a></li>
            </ul>
            
            <div className="border-t border-[#8c6b4e]/30 mt-12 pt-8">
              <p className="text-[#e7c796] text-[11px] uppercase font-bold tracking-[0.2em] mb-2">{t('footer.questions')}</p>
              <a href="mailto:kontak@_13trvnhsvh" className="text-[#f6efe6] text-[18px] font-light hover:opacity-80 transition-opacity">kontak@_13trvnhsvh</a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#8c6b4e]/20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#b19882] text-[10px] uppercase tracking-[0.3em] font-medium text-center md:text-left leading-relaxed">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
