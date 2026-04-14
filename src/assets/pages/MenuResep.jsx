import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuResep = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const recipes = [
    {
      id: 1,
      name: 'Gudeg Yu Djum',
      image: '/gudeg.png',
      desc: 'Dimasak perlahan selama puluhan jam dengan kayu bakar, menciptakan cita rasa manis yang meresap hingga ke sanubari.',
      category: 'Terlaris'
    },
    {
      id: 2,
      name: 'Bakpia Pathok',
      image: '/bakpia.png',
      desc: 'Akulturasi budaya Tionghoa dan Jawa yang melahirkan kudapan ikonik dengan isi kacang hijau yang lembut.',
      category: 'Semua'
    },
    {
      id: 3,
      name: 'Sate Klatak',
      image: '/sate.png',
      desc: 'Keunikan jeruji besi sepeda sebagai tusuk sate yang menghantarkan panas sempurna ke jantung daging domba muda.',
      category: 'Terlaris'
    },
    {
      id: 4,
      name: 'Kopi Joss',
      image: '/kopi.png',
      desc: 'Simbol kehangatan malam di sekitar Stasiun Tugu. Arang membara yang dicelupkan ke dalam kopi pekat bukan sekadar atraksi.',
      category: 'Semua'
    },
    {
      id: 5,
      name: 'Oseng Mercun',
      image: '/oseng.png',
      desc: 'Hidangan pedas dengan potongan daging sapi dan cabai melimpah. Sensasi pedasnya yang "meledak" membuatnya jadi favorit.',
      category: 'Terlaris'
    },
    {
      id: 6,
      name: 'Jadah Tempe',
      image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800',
      desc: 'Perpaduan jadah yang lembut dan tempe bacem yang manis gurih. Tekstur unik dengan rasa tradisional yang khas.',
      category: 'Semua'
    },
    {
      id: 7,
      name: 'Wedang Ronde',
      image: 'https://images.unsplash.com/photo-1544333346-64e4fe18204e?auto=format&fit=crop&q=80&w=800',
      desc: 'Minuman hangat dengan bola-bola ketan berisi kacang, disajikan dalam kuah jahe yang menghangatkan tubuh.',
      category: 'Terlaris'
    },
    {
      id: 8,
      name: 'Bak Mie Java',
      image: 'https://images.unsplash.com/photo-1612608165959-a5697f57164b?auto=format&fit=crop&q=80&w=800',
      desc: 'Mie kuning dan bihun yang dimasak dengan kaldu ayam kampung kental, telur bebek, dan aroma khas anglo.',
      category: 'Terlaris'
    },
    {
      id: 9,
      name: 'Nasi Liwet',
      image: 'https://images.unsplash.com/photo-1512058560566-427a193430ee?auto=format&fit=crop&q=80&w=800',
      desc: 'Nasi gurih dengan santan dan rempah, disajikan dengan lauk tradisional khas Jawa yang menggugah selera.',
      category: 'Semua'
    },
    {
      id: 10,
      name: 'Serabi',
      image: 'https://images.unsplash.com/photo-1589113103503-496fb8978644?auto=format&fit=crop&q=80&w=800',
      desc: 'Kue tradisional berbahan tepung beras dengan rasa manis dan tekstur lembut yang dimasak di atas tungku tanah liat.',
      category: 'Semua'
    },
    {
      id: 11,
      name: 'Ayam Goreng Kalasan',
      image: 'https://images.unsplash.com/photo-1562967914-6c82c48bb510?auto=format&fit=crop&q=80&w=800',
      desc: 'Ayam goreng khas Jawa dengan bumbu meresap hingga gurih dan tekstur empuk yang disajikan dengan kremesan.',
      category: 'Terlaris'
    },
    {
      id: 12,
      name: 'Soto Ayam',
      image: '/soto_ayam.png',
      desc: 'Sup ayam khas Indonesia dengan kuah kuning gurih dari aroma rempah-rempah yang meresap sempurna.',
      category: 'Terlaris'
    }
  ];

  const filteredRecipes = activeFilter === 'Semua' 
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
          Kembali
        </Link>
        <h1 className="text-xl font-serif font-bold tracking-wide">Menu Resep Digital</h1>
        <div className="w-10"></div> {/* Spacer for symmetry */}
      </header>

      {/* Hero / Filter Section */}
      <div className="max-w-[1240px] mx-auto px-6 mt-10">
        <div className="flex gap-4 mb-12">
          <button 
            onClick={() => setActiveFilter('Semua')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeFilter === 'Semua' 
              ? 'bg-[#5E2B0F] text-white shadow-lg' 
              : 'bg-[#D2C5B8] text-[#5E2B0F] hover:bg-[#c4b5a6]'
            }`}
          >
            Semua
          </button>
          <button 
            onClick={() => setActiveFilter('Terlaris')}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeFilter === 'Terlaris' 
              ? 'bg-[#5E2B0F] text-white shadow-lg' 
              : 'bg-[#D2C5B8] text-[#5E2B0F] hover:bg-[#c4b5a6]'
            }`}
          >
            Terlaris
          </button>
        </div>

        <h2 className="text-[44px] font-serif font-bold text-[#5e2b0f] mb-12">
          {activeFilter === 'Semua' ? 'Semua Menu' : 'Menu Terlaris'}
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
                    LIHAT DETAIL
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
