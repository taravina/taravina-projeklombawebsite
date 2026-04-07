import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#6d4c32] text-[#e8e4db] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-10">
            <h2 className="font-serif text-[28px] md:text-[32px] leading-tight mb-5">
              Yogyakarta:<br />
              <span className="font-light">Nusantara Digital City</span>
            </h2>
            <p className="text-[#c1b5a5] text-[13px] leading-[1.8] mb-8">
              Preserving the profound legacy of the Mataram Sultanate through visionary digital innovation. A harmonious blend of ancient philosophy and modern resilience for a smarter future.
            </p>
            <div className="flex items-center gap-4">
              <a href="#instagram" className="w-9 h-9 border border-[#9b7e64] hover:bg-[#8e6844] rounded-md flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#twitter" className="w-9 h-9 border border-[#9b7e64] hover:bg-[#8e6844] rounded-md flex items-center justify-center transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#youtube" className="w-9 h-9 border border-[#9b7e64] hover:bg-[#8e6844] rounded-md flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Discovery */}
          <div>
            <h3 className="font-serif text-[#e7c796] text-[19px] mb-6 tracking-wide">Discovery</h3>
            <ul className="space-y-4 text-[11.5px] tracking-widest font-bold uppercase text-[#e2dfdb]">
              <li><a href="#sejarah" className="hover:text-white transition-colors">Sejarah Kota</a></li>
              <li><a href="#warisan" className="hover:text-white transition-colors">Warisan Budaya</a></li>
              <li><a href="#kuliner" className="hover:text-white transition-colors">Kuliner Khas</a></li>
              <li><a href="#destinasi" className="hover:text-white transition-colors">Destinasi Wisata</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-[#e7c796] text-[19px] mb-6 tracking-wide">Services</h3>
            <ul className="space-y-4 text-[11.5px] tracking-widest font-bold uppercase text-[#e2dfdb]">
              <li><a href="#smart" className="hover:text-white transition-colors">Smart City Hub</a></li>
              <li><a href="#permits" className="hover:text-white transition-colors">Digital Permits</a></li>
              <li><a href="#tourist" className="hover:text-white transition-colors">Tourist Information</a></li>
              <li><a href="#map" className="hover:text-white transition-colors">Digital Map</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h3 className="font-serif text-[#e7c796] text-[19px] mb-6 tracking-wide">Information</h3>
            <ul className="space-y-4 text-[11.5px] tracking-widest font-bold uppercase text-[#e2dfdb] mb-10">
              <li><a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
            
            <div>
              <p className="text-[#e7c796] text-[10px] uppercase font-bold tracking-widest mb-1">Inquiries</p>
              <a href="mailto:contact@jogja.go.id" className="text-[#f6efe6] text-[14px] hover:underline">contact@jogja.go.id</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8c6b4e] pt-6 flex justify-between items-center">
          <p className="text-[#b19882] text-[9.5px] uppercase tracking-[0.2em] w-full text-center md:text-left">
            &copy; 1755-2024 Heritage Digitalism. Part of the Nusantara Digital City Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
