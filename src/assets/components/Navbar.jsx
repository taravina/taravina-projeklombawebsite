import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const location = useLocation();

  const links = [
    { name: 'Beranda', path: '/' },
    { 
      name: 'Sejarah', 
      path: '/sejarah',
      hasDropdown: true,
      subLinks: [
        { name: 'Asal Usul', path: '/sejarah#keraton' },
        { name: 'Tokoh', path: '/sejarah#kolonial' },
        { name: 'Peristiwa', path: '/sejarah#modern' },
      ]
    },
    { name: 'Budaya', path: '/#budaya' },
    { 
      name: 'Kuliner', 
      path: '/kuliner',
      hasDropdown: true,
      subLinks: [
        { name: 'Filosofi Saji', path: '/kuliner#filosofi' },
        { name: 'Menu Legendaris', path: '/kuliner#gudeg' },
        { name: 'Resep Warisan', path: '/kuliner#bakpia' },
      ]
    },
    { name: 'Destinasi', path: '/#destinasi' },
    { name: 'Smart City', path: '/#smart-city' },
  ];

  const languages = [
    'Bahasa Belanda',
    'Bahasa Jerman',
    'Bahasa Prancis',
    'Bahasa Inggris',
    'Bahasa Melayu',
    'Bahasa Jepang',
    'Bahasa Korea',
    'Bahasa Mandarin'
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLinkActive = (path) => {
    // Exact match for Home
    if (path === '/') return location.pathname === '/' && location.hash === '';
    
    // Check for hash matches on same page
    if (path.includes('#')) {
      const [p, h] = path.split('#');
      const targetPath = p === '' ? '/' : p;
      return location.pathname === targetPath && location.hash === `#${h}`;
    }
    
    // Normal separate page match
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
          Kota Yogyakarta
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
                  {/* Subtle underline animation overlay */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D97736] transition-all duration-500 transform ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </NavLink>

                {/* Enhanced Dropdown Menu */}
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

        {/* Action Icon / Language Dropdown */}
        <div className="relative" ref={languageRef}>
          <div 
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="cursor-pointer text-gray-800 hover:text-[#D97736] transition-all duration-300 flex items-center justify-center p-2" 
            title="Pilih Bahasa"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-300 ${isLanguageOpen ? 'rotate-[30deg] scale-110 text-[#D97736]' : ''}`}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20" />
              <path d="M2 12h20" />
              <path d="M12 2a14.5 14.5 0 0 1 0 20" />
            </svg>
          </div>

          {/* Language Dropdown Menu */}
          {isLanguageOpen && (
            <div className="absolute right-0 mt-4 w-56 bg-white shadow-2xl rounded-xl py-4 border border-gray-100 z-[60] animate-fade-in-up">
              <div className="px-6 pb-2 mb-2 border-b border-gray-50">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Pilih Bahasa</span>
              </div>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setIsLanguageOpen(false)}
                  className="w-full text-left px-6 py-3 text-[14px] text-gray-600 hover:bg-[#FAF9F6] hover:text-[#D97736] transition-colors flex items-center justify-between group"
                >
                  <span>{lang}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D97736] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
