import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuResep = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Semua');

  const recipeImages = {
    1: '/gudeg.png',
    2: '/bakpia.png',
    3: '/sate.png',
    4: '/kopi.png',
    5: '/oseng.png',
    6: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800',
    7: 'https://images.unsplash.com/photo-1544333346-64e4fe18204e?auto=format&fit=crop&q=80&w=800',
    8: 'https://images.unsplash.com/photo-1612608165959-a5697f57164b?auto=format&fit=crop&q=80&w=800',
    9: 'https://images.unsplash.com/photo-1512058560566-427a193430ee?auto=format&fit=crop&q=80&w=800',
    10: 'https://images.unsplash.com/photo-1589113103503-496fb8978644?auto=format&fit=crop&q=80&w=800',
    11: 'https://images.unsplash.com/photo-1562967914-6c82c48bb510?auto=format&fit=crop&q=80&w=800',
    12: '/soto_ayam.png'
  };

  const recipes = t('menuResepPage.recipes').map(r => ({
    ...r,
    image: recipeImages[r.id]
  }));

  const filteredRecipes = activeFilter === t('menuResepPage.filters.all')
    ? recipes 
    : recipes.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FCF9F7] pb-20">
      {/* Custom Header */}
      <header className="bg-[#5E2B0F] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
        <Link to="/kuliner" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          {t('menuResepPage.header.back')}
        </Link>
        <h1 className="text-xl font-serif font-bold tracking-wide">{t('menuResepPage.header.title')}</h1>
        <div className="w-10"></div> {/* Spacer for symmetry */}
      </header>

      {/* Hero / Filter Section */}
      <div className="max-w-[1240px] mx-auto px-6 mt-10">
        <div className="flex gap-4 mb-12">
          <button 
            onClick={() => setActiveFilter(t('menuResepPage.filters.all'))}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeFilter === t('menuResepPage.filters.all')
              ? 'bg-[#5E2B0F] text-white shadow-lg' 
              : 'bg-[#D2C5B8] text-[#5E2B0F] hover:bg-[#c4b5a6]'
            }`}
          >
            {t('menuResepPage.filters.all')}
          </button>
          <button 
            onClick={() => setActiveFilter(t('menuResepPage.filters.popular'))}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeFilter === t('menuResepPage.filters.popular')
              ? 'bg-[#5E2B0F] text-white shadow-lg' 
              : 'bg-[#D2C5B8] text-[#5E2B0F] hover:bg-[#c4b5a6]'
            }`}
          >
            {t('menuResepPage.filters.popular')}
          </button>
        </div>

        <h2 className="text-[44px] font-serif font-bold text-[#5e2b0f] mb-12">
          {activeFilter === t('menuResepPage.filters.all') ? t('menuResepPage.grid.all') : t('menuResepPage.grid.popular')}
        </h2>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover transform grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-[#5e2b0f] mb-3">{recipe.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {recipe.desc}
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-[#8b6112] text-[10px] font-bold tracking-widest uppercase border-b border-[#8b6112] pb-1 cursor-pointer hover:text-[#5e2b0f] hover:border-[#5e2b0f] transition-all">
                    {t('menuResepPage.detailButton')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuResep;
