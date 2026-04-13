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
              Melestarikan warisan mendalam Kesultanan Mataram melalui inovasi digital yang visioner. Perpaduan harmonis antara filosofi kuno dan ketahanan modern untuk masa depan yang lebih cerdas.
            </p>
            <div className="flex items-end gap-4">
              <div className="flex flex-col items-center">
                {/* <span className="text-[12px] text-[#c1b5a5] leading-none mb-1">...</span> */}
                <a href="#instagram" className="w-9 h-9 border border-[#9b7e64] hover:bg-[#8e6844] rounded-md flex items-center justify-center transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col items-center pb-[1px]">
                <a href="#youtube" className="w-9 h-9 border border-[#9b7e64] hover:bg-[#8e6844] rounded-md flex items-center justify-center transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col items-center">
                {/* <span className="text-[12px] text-[#c1b5a5] leading-none mb-1">...</span> */}
                <a href="#tiktok" className="w-9 h-9 border border-[#9b7e64] hover:bg-[#8e6844] rounded-md flex items-center justify-center transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.64 5.64 0 0 1-1.04-.1z"/>
                  </svg>
                </a>
              </div>
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
            <ul className="space-y-4 text-[11.5px] tracking-widest font-bold uppercase text-[#e2dfdb] mb-8">
              <li><a href="#accessibility" className="hover:text-white transition-colors">ACSESIBILITAS</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">KEBIJAKAN PRIVASI</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">KETENTUAN LAYANAN</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">HUBUNGI KAMI</a></li>
            </ul>
            
            <div className="border-t border-[#8c6b4e] pt-6">
              <p className="text-[#e7c796] text-[10px] uppercase font-bold tracking-widest mb-1">PERTANYAAN</p>
              <a href="mailto:kontak@_13trvnhsvh" className="text-[#f6efe6] text-[14px] hover:underline">kontak@_13trvnhsvh</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8c6b4e] pt-6 flex justify-between items-center">
          <p className="text-[#b19882] text-[9.5px] uppercase tracking-[0.2em] w-full text-center md:text-left">
            &copy; 2026 DIGITALISME WARISAN. BAGIAN DARI INISIATIF KOTA DIGITAL NUSANTARA. HAK CIPTA DILINDUNGI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
