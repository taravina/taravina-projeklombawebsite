import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const links = [
    { name: t('navbar.beranda'), path: '/' },
    { 
      name: t('navbar.sejarah.title'), 
      path: '/sejarah',
      hasDropdown: true,
      subLinks: [
        { name: t('navbar.sejarah.asal'), path: '/sejarah#keraton' },
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

        {/* Language Switcher */}
        <div className="relative flex bg-gray-100/90 backdrop-blur-md p-1 rounded-full items-center shadow-inner border border-gray-200/50 scale-90 md:scale-100 overflow-hidden w-[280px]">
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
      </div>
    </nav>
  );
};

export default Navbar;
