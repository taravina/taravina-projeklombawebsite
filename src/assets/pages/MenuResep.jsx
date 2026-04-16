import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";

const MenuResep = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (selectedRecipe) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedRecipe]);

  const recipeImages = {
    1: '/gudeg.png',
    2: '/bakpia.png',
    3: '/sate.png',
    4: '/kopi.png',
    5: '/oseng.png',
    6: '/kuliner_jadah.png',
    7: '/kuliner_ronde.png',
    8: '/kuliner_mie_jawa.png',
    9: 'https://images.unsplash.com/photo-1512058560566-427a193430ee?auto=format&fit=crop&q=80&w=800',
    10: 'https://images.unsplash.com/photo-1589113103503-496fb8978644?auto=format&fit=crop&q=80&w=800',
    11: 'https://images.unsplash.com/photo-1562967914-6c82c48bb510?auto=format&fit=crop&q=80&w=800',
    12: '/soto_ayam.png'
  };

  const recipes = t('menuResepPage.recipes').map(r => ({
    ...r,
    image: recipeImages[r.id] || 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800'
  }));

  const filteredRecipes = activeFilter === 'Semua'
    ? recipes 
    : recipes.filter(r => r.category === 'Terlaris').slice(0, 5);

  return (
    <div className="min-h-screen bg-[#FCF9F7] font-sans pb-24 relative">
      {/* Recipe Detail Modal */}
      {/* Recipe Detail Modal using Portal for absolute viewport fixing */}
      {selectedRecipe && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 md:p-8 overflow-y-auto pt-10 md:pt-24 pointer-events-auto">
          <div 
            className="fixed inset-0 bg-[#201008]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedRecipe(null)}
          ></div>
          
          <div className="relative w-full max-w-[1240px] max-h-fit md:max-h-[90vh] overflow-hidden rounded-[32px] shadow-2xl flex flex-col md:flex-row animate-scale-up z-[10000]">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-6 right-6 z-[110] bg-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl shadow-lg hover:scale-110 transition-transform text-[#201008] border border-black/5"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Image Side */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden bg-[#201008]">
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.name} 
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Right: Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto bg-[#F3EBE3]">
              {selectedRecipe.details ? (
                <>
                  <span className="text-[#8b6112] text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase mb-4 block">
                    {selectedRecipe.details.badge}
                  </span>
                  
                  <h2 className="text-[32px] md:text-[44px] font-serif font-black text-[#5e2b0f] leading-[1.1] mb-10">
                    {selectedRecipe.details.titleDetail}
                  </h2>

                  <div className="space-y-10">
                    {/* History Section */}
                    <section>
                      <h4 className="text-[#8b6112] text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-5 border-b border-[#8b6112]/20 pb-2">
                        {selectedRecipe.details.historyTitle}
                      </h4>
                      <p className="text-[#5e2b0f]/80 text-[16px] md:text-[17px] leading-relaxed font-sans">
                        {selectedRecipe.details.historyDesc}
                      </p>
                    </section>

                    {/* Ingredients Section */}
                    <section>
                      <h4 className="text-[#8b6112] text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-6 border-b border-[#8b6112]/20 pb-2">
                        {selectedRecipe.details.ingredientsTitle}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
                        {selectedRecipe.details.ingredients.map((ing, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-[#5e2b0f]/90 font-medium text-[15px] group">
                            <span className="w-2 h-2 rounded-full bg-[#8b6112] group-hover:scale-125 transition-transform shrink-0"></span>
                            <span className="font-sans">{ing}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Locations Section */}
                    <section className="bg-white/30 backdrop-blur-sm p-6 md:p-8 rounded-[32px] border border-white/60">
                      <h4 className="text-[#8b6112] text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase mb-8 border-b border-[#8b6112]/20 pb-2">
                        {selectedRecipe.details.locationsTitle}
                      </h4>
                      <div className="space-y-8">
                        {selectedRecipe.details.locations.map((loc, idx) => (
                          <div key={idx} className="flex gap-6 group">
                            <div className="shrink-0 w-12 h-12 rounded-full bg-[#8b6112]/10 flex items-center justify-center text-[#8b6112] group-hover:bg-[#8b6112] group-hover:text-white transition-all duration-300 shadow-sm">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                              </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                              <h5 className="text-[#5e2b0f] font-bold text-[18px] mb-1 group-hover:text-[#8b6112] transition-colors">{loc.name}</h5>
                              <p className="text-[#5e2b0f]/60 text-[13px] md:text-[14px] leading-snug font-sans">{loc.address}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#8b6112]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-[#5e2b0f] font-serif text-[24px] font-bold">{selectedRecipe.name}</h3>
                  <p className="text-gray-400 font-serif italic max-w-xs">{t('menuResepPage.emptyDetail') || "Detail resep sedang dalam proses digitalisasi..."}</p>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Premium Header - Matching Mockup */}
      <header className="bg-[#483327] text-white px-8 py-5 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <Link to="/kuliner" className="flex items-center gap-2 text-[18px] font-medium hover:opacity-80 transition-opacity">
          <span className="text-[22px]">←</span> {t('menuResepPage.header.back')}
        </Link>
        <h1 className="text-[24px] font-serif font-bold tracking-wide absolute left-1/2 -translate-x-1/2 text-center w-full pointer-events-none md:pointer-events-auto">
          {t('menuResepPage.header.title')}
        </h1>
        <div className="w-10"></div> {/* Spacer to maintain layout symmetry */}
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1400px] mx-auto px-8 md:px-16 mt-16">
        
        {/* Filter Section */}
        <div className="flex gap-6 mb-20">
          <button 
            onClick={() => setActiveFilter('Semua')}
            className={`px-12 py-4 rounded-full text-[20px] font-serif font-bold transition-all duration-300 ${
              activeFilter === 'Semua'
              ? 'bg-[#5E2B0F] text-white shadow-xl scale-105' 
              : 'bg-[#C5A384] text-[#5E2B0F] hover:bg-[#b59374] opacity-80'
            }`}
          >
            {t('menuResepPage.filters.all')}
          </button>
          <button 
            onClick={() => setActiveFilter('Terlaris')}
            className={`px-12 py-4 rounded-full text-[20px] font-serif font-bold transition-all duration-300 ${
              activeFilter === 'Terlaris'
              ? 'bg-[#5E2B0F] text-white shadow-xl scale-105' 
              : 'bg-[#C5A384] text-[#5E2B0F] hover:bg-[#b59374] opacity-80'
            }`}
          >
            {t('menuResepPage.filters.popular')}
          </button>
        </div>

        {/* Dynamic Heading */}
        <h2 className="text-[56px] md:text-[68px] font-serif font-bold text-[#201008] mb-16 tracking-tight">
          {activeFilter === 'Semua' ? t('menuResepPage.grid.all') : t('menuResepPage.grid.popular')}
        </h2>

        {/* Recipe Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col h-full group"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Text Content */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-[#201008] mb-4 leading-tight">
                  {recipe.name}
                </h3>
                <p className="text-[#6B7280] text-[16px] leading-relaxed mb-10 flex-grow font-sans">
                  {recipe.desc}
                </p>
                
                {/* CTA Link */}
                <div className="mt-auto">
                  <span 
                    onClick={() => setSelectedRecipe(recipe)}
                    className="inline-block text-[#8b6112] text-[14px] font-bold tracking-[0.1em] uppercase border-b-2 border-[#8b6112]/30 pb-1 cursor-pointer hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-all duration-300"
                  >
                    {t('menuResepPage.detailButton')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MenuResep;
