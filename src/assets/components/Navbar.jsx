import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const links = [
    { name: t('navbar.beranda'), path: '/' },
    { 
      name: t('navbar.sejarah.title'), 
      path: '/sejarah',
      hasDropdown: true,
      subLinks: [
        { name: t('navbar.sejarah.asal'), path: '/asal-usul' },
        { name: t('navbar.sejarah.tokoh'), path: '/tokoh' },
        { name: t('navbar.sejarah.peristiwa'), path: '/peristiwa' },
      ]
    },
    { name: t('navbar.budaya'), path: '/budaya' },
    { 
      name: t('navbar.kuliner.title'), 
      path: '/kuliner'
    },
    { name: t('navbar.destinasi'), path: '/destinasi' },
    { name: t('navbar.smartCity'), path: '/smart-city' },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/' && location.hash === '';
    if (path.includes('#')) {
      const [p, h] = path.split('#');
      const targetPath = p === '' ? '/' : p;
      return location.pathname === targetPath && location.hash === `#${h}`;
    }
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-[#FAF9F6] sticky top-0 z-50 flex flex-col border-b border-gray-100">
      <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1400px] mx-auto w-full">
        {/* Logo/Brand */}
        <NavLink 
          to="/" 
          className="text-2xl md:text-[28px] font-serif font-bold text-[#7A3E14] hover:text-[#5e2b0f] transition-all duration-300"
        >
          {t('navbar.brand')}
        </NavLink>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 m-0 p-0">
          {links.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <li 
                key={link.name} 
                className="relative group py-2"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={`text-[14px] lg:text-[15px] font-medium pb-1 border-b-[2px] transition-all duration-500 px-1 relative ${
                    active
                      ? 'text-[#D97736] border-[#D97736]'
                      : 'text-gray-500 border-transparent hover:text-[#D97736] hover:border-[#D97736]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D97736] transition-all duration-500 transform ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </NavLink>

                {link.hasDropdown && (
                  <div 
                    className={`absolute left-0 top-full pt-4 transition-all duration-300 transform ${
                      openDropdown === link.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white shadow-xl rounded-lg py-4 min-w-[220px] border border-gray-100 overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-3 text-[13px] text-gray-600 hover:bg-[#FAF9F6] hover:text-[#D97736] transition-colors border-l-4 border-transparent hover:border-[#D97736]"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side tools */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden md:flex relative bg-gray-100/90 backdrop-blur-md p-1 rounded-full items-center shadow-inner border border-gray-200/50 scale-90 md:scale-100 overflow-hidden w-[280px]">
          {/* Sliding Pill Background using Translate for absolute precision */}
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-[#7A3E14] rounded-full shadow-lg ${
              language === 'ID' ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ 
              left: '4px',
              width: 'calc(50% - 4px)' 
            }}
          />
          
          <button 
            onClick={() => setLanguage('ID')}
            className={`relative z-10 py-2.5 text-[11px] font-bold tracking-wider transition-colors duration-500 flex-1 text-center whitespace-nowrap ${
              language === 'ID' ? 'text-white' : 'text-gray-500 hover:text-[#7A3E14]'
            }`}
          >
            BAHASA INDONESIA
          </button>
          
          <button 
            onClick={() => setLanguage('EN')}
            className={`relative z-10 py-2.5 text-[11px] font-bold tracking-wider transition-colors duration-500 flex-1 text-center whitespace-nowrap ${
              language === 'EN' ? 'text-white' : 'text-gray-500 hover:text-[#7A3E14]'
            }`}
          >
            ENGLISH
          </button>
          </div>

          {/* Burger Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-gray-200 bg-white text-[#7A3E14] focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`bg-[#7A3E14] block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`bg-[#7A3E14] block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-[#7A3E14] block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100 py-4 overflow-y-auto' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-2">
          {links.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.path}
                    onClick={() => {
                      if (!link.hasDropdown) setIsMobileMenuOpen(false);
                    }}
                    className={`text-[16px] font-medium py-3 w-full border-b border-gray-50 transition-colors ${
                      active ? 'text-[#D97736]' : 'text-gray-600 hover:text-[#D97736]'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                  {link.hasDropdown && (
                    <button 
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                      className="p-3 text-gray-500 focus:outline-none"
                    >
                      <svg className={`w-5 h-5 transition-transform duration-300 ${openMobileDropdown === link.name ? 'rotate-180 text-[#D97736]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  )}
                </div>
                
                {link.hasDropdown && (
                  <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${openMobileDropdown === link.name ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50 rounded-xl p-3 mt-2 mb-2 border border-gray-100">
                      {link.subLinks.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-[#D97736] hover:bg-white rounded-lg transition-colors"
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Mobile Language Switcher */}
          <div className="mt-6 pt-6 border-t border-gray-100 pb-4">
            <p className="text-xs text-gray-400 mb-3 font-bold uppercase tracking-widest">{t('navbar.language', 'Language / Bahasa')}</p>
            <div className="flex gap-3">
              <button 
                onClick={() => { setLanguage('ID'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-3 rounded-xl text-sm font-bold tracking-wider transition-all duration-300 shadow-sm ${
                  language === 'ID' 
                    ? 'bg-[#7A3E14] text-white shadow-md transform scale-[1.02]' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                INDONESIA
              </button>
              <button 
                onClick={() => { setLanguage('EN'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-3 rounded-xl text-sm font-bold tracking-wider transition-all duration-300 shadow-sm ${
                  language === 'EN' 
                    ? 'bg-[#7A3E14] text-white shadow-md transform scale-[1.02]' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                ENGLISH
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
