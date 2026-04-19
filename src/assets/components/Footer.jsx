import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer 
      className="w-full text-[#e8e4db] py-12 px-6 md:px-12 font-sans bg-[#2A1B13] border-t border-[#4A3225]"
    >
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <h2 className="font-serif text-[28px] md:text-[32px] leading-tight mb-6 text-[#F9F5F0]">
              Yogyakarta:<br />
              <span className="font-light italic text-[#D4AF37]">Nusantara Digital City</span>
            </h2>
            <p className="text-[#A79A8B] text-[13px] leading-relaxed mb-8 max-w-[280px]">
              {t('footer.brandDesc')}
            </p>
            
            {/* Social Icons Section */}
            <div className="flex items-center gap-4">
              <a href="#instagram" className="w-10 h-10 border border-[#4A3225] hover:bg-[#3D281C] hover:border-[#D4AF37] rounded-full flex items-center justify-center transition-all group shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#D4AF37] transition-all">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#youtube" className="w-10 h-10 border border-[#4A3225] hover:bg-[#3D281C] hover:border-[#D4AF37] rounded-full flex items-center justify-center transition-all group shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#D4AF37] transition-all">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#tiktok" className="w-10 h-10 border border-[#4A3225] hover:bg-[#3D281C] hover:border-[#D4AF37] rounded-full flex items-center justify-center transition-all group shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-[#D4AF37] transition-all">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.64 5.64 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Discovery */}
          <div>
            <h3 className="font-serif text-[#F9F5F0] text-[18px] mb-6 tracking-wide">{t('footer.discovery.title')}</h3>
            <ul className="space-y-3 text-[11px] tracking-[0.1em] font-medium uppercase text-[#A79A8B]">
              <li><a href="#sejarah" className="hover:text-[#D4AF37] transition-colors">{t('footer.discovery.history')}</a></li>
              <li><a href="#warisan" className="hover:text-[#D4AF37] transition-colors">{t('footer.discovery.heritage')}</a></li>
              <li><a href="#kuliner" className="hover:text-[#D4AF37] transition-colors">{t('footer.discovery.culinary')}</a></li>
              <li><a href="#destinasi" className="hover:text-[#D4AF37] transition-colors">{t('footer.discovery.destinations')}</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-[#F9F5F0] text-[18px] mb-6 tracking-wide">{t('footer.services.title')}</h3>
            <ul className="space-y-3 text-[11px] tracking-[0.1em] font-medium uppercase text-[#A79A8B]">
              <li><a href="#smart" className="hover:text-[#D4AF37] transition-colors">{t('footer.services.smartCity')}</a></li>
              <li><a href="#permits" className="hover:text-[#D4AF37] transition-colors">{t('footer.services.permits')}</a></li>
              <li><a href="#tourist" className="hover:text-[#D4AF37] transition-colors">{t('footer.services.tourist')}</a></li>
              <li><a href="#map" className="hover:text-[#D4AF37] transition-colors">{t('footer.services.map')}</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div className="flex flex-col">
            <h3 className="font-serif text-[#F9F5F0] text-[18px] mb-6 tracking-wide">{t('footer.information.title')}</h3>
            <ul className="space-y-3 text-[11px] tracking-[0.1em] font-medium uppercase text-[#A79A8B] mb-8">
              <li><a href="#accessibility" className="hover:text-[#D4AF37] transition-colors">{t('footer.information.accessibility')}</a></li>
              <li><a href="#privacy" className="hover:text-[#D4AF37] transition-colors">{t('footer.information.privacy')}</a></li>
              <li><a href="#terms" className="hover:text-[#D4AF37] transition-colors">{t('footer.information.terms')}</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">{t('footer.information.contact')}</a></li>
            </ul>
            
            <div className="mt-auto">
              <p className="text-[#8b6112] text-[9px] uppercase font-bold tracking-[0.2em] mb-1">{t('footer.questions')}</p>
              <a href="mailto:kontak@_13trvnhsvh" className="text-[#F9F5F0] text-[15px] font-medium hover:text-[#D4AF37] transition-all">kontak@_13trvnhsvh</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4A3225] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B5A4D] text-[9px] uppercase tracking-[0.2em] font-medium text-center md:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-[0.2em] text-[#6B5A4D]">
            <a href="#top" className="hover:text-[#A79A8B] transition-colors">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
