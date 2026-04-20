import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer 
      className="w-full text-[#e8e4db] py-16 px-6 md:px-12 font-sans bg-[#2A1B13] border-t border-[#4A3225] relative overflow-hidden"
    >
      {/* Subtle background detail */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand - Spans 5 columns on large screens */}
          <div className="lg:col-span-5 pr-0 lg:pr-16">
            <Link to="/" className="inline-block group mb-8">
              <h2 className="font-serif text-[32px] md:text-[36px] leading-tight text-[#F9F5F0] group-hover:text-[#D4AF37] transition-colors duration-500">
                Yogyakarta:<br />
                <span className="font-light italic text-[#D4AF37] opacity-90 group-hover:opacity-100 italic">Nusantara Digital City</span>
              </h2>
            </Link>
            <p className="text-[#A79A8B] text-[14px] leading-relaxed mb-10 max-w-[340px] font-medium opacity-80">
              {t('footer.brandDesc')}
            </p>
            
            {/* Social Icons Section */}
            <div className="flex items-center gap-5">
              {[
                { id: 'instagram', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, url: 'https://www.instagram.com/_13trvnhsvh' },
                { id: 'youtube', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, url: '#youtube' },
                { id: 'tiktok', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.64 5.64 0 0 1-1.04-.1z"/></svg>, url: '#tiktok' }
              ].map((social) => (
                <a 
                  key={social.id}
                  href={social.url}
                  target={social.url.startsWith('http') ? "_blank" : undefined}
                  rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 border border-[#4A3225] hover:bg-[#3D281C] hover:border-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg"
                >
                  <span className="text-[#A79A8B] group-hover:text-[#D4AF37] transform group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Discovery - Spans 3 columns */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <h3 className="font-serif text-[#F9F5F0] text-[20px] tracking-wide">{t('footer.discovery.title')}</h3>
            </div>
            <ul className="space-y-4">
              {[
                { to: "/sejarah", label: t('footer.discovery.history') },
                { to: "/budaya", label: t('footer.discovery.heritage') },
                { to: "/kuliner", label: t('footer.discovery.culinary') },
                { to: "/destinasi", label: t('footer.discovery.destinations') }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-[12px] tracking-[0.1em] font-bold uppercase text-[#A79A8B] hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#D4AF37] transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information - Spans 4 columns */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <h3 className="font-serif text-[#F9F5F0] text-[20px] tracking-wide">{t('footer.information.title')}</h3>
            </div>
            <ul className="space-y-4 mb-12">
              {[
                { to: "/about", label: t('aboutPage.title') },
                { to: "/contact", label: t('footer.information.contact') }
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-[12px] tracking-[0.1em] font-bold uppercase text-[#A79A8B] hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#D4AF37] transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto p-6 bg-black/10 rounded-2xl border border-white/5 backdrop-blur-sm">
              <p className="text-[#8b6112] text-[10px] uppercase font-bold tracking-[0.3em] mb-2">{t('footer.questions')}</p>
              <a 
                href="https://www.instagram.com/_13trvnhsvh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9F5F0] text-[17px] font-sans font-medium hover:text-[#D4AF37] transition-all duration-300 block"
              >
                @_13trvnhsvh
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#4A3225]/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#6B5A4D] text-[10px] uppercase tracking-[0.25em] font-medium text-center md:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-8">
            <a 
              href="#top" 
              className="text-[10px] uppercase tracking-[0.25em] text-[#6B5A4D] hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 group"
            >
              Back to Top
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-y-1 transition-transform">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
