
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { genshinCharacters, genshinWeapons, genshinArtifacts, genshinQuests, genshinRegions, wutheringCharacters, wutheringWeapons, wutheringEchoes, wutheringQuests, wutheringRegions } from '../data';

interface Props {
  game: 'genshin' | 'wuthering';
  category: string;
}

const CategoryList: React.FC<Props> = ({ game, category }) => {
  const navigate = useNavigate();
  
  // Select data based on route
  let data: any[] = [];
  let title = "";

  if (game === 'genshin') {
    if (category === 'characters') { data = genshinCharacters; title = "Genshin Characters"; }
    else if (category === 'weapons') { data = genshinWeapons; title = "Weapons"; }
    else if (category === 'artifacts') { data = genshinArtifacts; title = "Artifact Sets"; }
    else if (category === 'quests') { data = genshinQuests; title = "Quests"; }
    else if (category === 'regions') { data = genshinRegions; title = "Regions"; }
  } else {
    if (category === 'characters') { data = wutheringCharacters; title = "Resonators"; }
    else if (category === 'weapons') { data = wutheringWeapons; title = "Weapons"; }
    else if (category === 'echoes') { data = wutheringEchoes; title = "Echoes"; }
    else if (category === 'quests') { data = wutheringQuests; title = "Quests"; }
    else if (category === 'regions') { data = wutheringRegions; title = "Regions"; }
  }

  const getRarityColor = (rarity?: number) => {
    if (rarity === 5) return 'border-yellow-600 bg-yellow-900/20 text-yellow-500 shadow-yellow-900/50';
    if (rarity === 4) return 'border-purple-600 bg-purple-900/20 text-purple-400 shadow-purple-900/50';
    if (rarity === 3) return 'border-blue-600 bg-blue-900/20 text-blue-400';
    if (rarity === 2) return 'border-green-600 bg-green-900/20 text-green-400';
    if (rarity === 1) return 'border-gray-500 bg-gray-800 text-gray-300';
    return 'border-gray-700 bg-gray-800 text-gray-400';
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/300x300/111/666?text=No+Image';
  };

  const renderGrid = (items: any[]) => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          onClick={() => navigate(`/${game}/${category}/${item.id}`)}
          className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border ${getRarityColor(item.rarity).split(' ')[0]} bg-black`}
        >
           <div className="aspect-square overflow-hidden bg-gray-900 relative">
             <img 
                src={item.image} 
                alt={item.name} 
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
           </div>
           <div className={`p-3 text-center border-t border-gray-800 ${item.rarity === 5 ? 'bg-yellow-950/30' : 'bg-gray-900'}`}>
             <h4 className="font-semibold text-sm truncate text-gray-100 group-hover:text-white">{item.name}</h4>
             {item.rarity && (
               <div className="flex justify-center mt-1 text-[10px] tracking-tighter text-yellow-500">
                 {Array.from({length: item.rarity}).map((_, i) => <span key={i}>★</span>)}
               </div>
             )}
           </div>
        </div>
      ))}
    </div>
  );

  // --- Render Logic for Quests (Genshin & Wuthering) ---
  if (category === 'quests') {
      let groups: {[key: string]: any[]} = {};
      
      if (game === 'genshin') {
          groups = {
              'Archon Quest': data.filter(q => q.category === 'Archon Quest'),
              'Story Quest': data.filter(q => q.category === 'Story Quest')
          };
      } else {
          groups = {
              'Main Quest': data.filter(q => q.category === 'Main Quest')
          };
      }

      return (
        <div className="min-h-screen bg-black pt-24 pb-12 px-6">
           <div className="max-w-7xl mx-auto">
             <div className="flex items-center gap-4 mb-8 border-b border-red-900/30 pb-4">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-red-950/50 border border-red-900 hover:bg-red-900 text-white"><ArrowLeft className="w-6 h-6" /></button>
                <h1 className="text-3xl font-bold cinzel-font text-white neon-text">{title}</h1>
             </div>
             {Object.entries(groups).map(([groupName, items]) => items.length > 0 && (
                 <div key={groupName} className="mb-10">
                     <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2 border-b border-red-900/30 pb-2">
                        <span className="w-2 h-6 bg-red-600 rounded-sm"></span> {groupName}s
                     </h2>
                     {renderGrid(items)}
                 </div>
             ))}
           </div>
        </div>
      );
  }

  // --- Render Logic for Wuthering Echoes ---
  if (game === 'wuthering' && category === 'echoes') {
      const classes = ['Calamity', 'Overlord', 'Elite', 'Common'];
      return (
        <div className="min-h-screen bg-black pt-24 pb-12 px-6">
           <div className="max-w-7xl mx-auto">
             <div className="flex items-center gap-4 mb-8 border-b border-red-900/30 pb-4">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-red-950/50 border border-red-900 hover:bg-red-900 text-white"><ArrowLeft className="w-6 h-6" /></button>
                <h1 className="text-3xl font-bold cinzel-font text-white neon-text">{title}</h1>
             </div>
             {classes.map(cls => {
                 const items = data.filter(e => e.class === cls);
                 if (items.length === 0) return null;
                 
                 let colorClass = "text-white";
                 if(cls === 'Calamity') colorClass = "text-red-500";
                 if(cls === 'Overlord') colorClass = "text-red-400";
                 if(cls === 'Elite') colorClass = "text-purple-400";
                 if(cls === 'Common') colorClass = "text-gray-400";

                 return (
                     <div key={cls} className="mb-10">
                         <h2 className={`text-xl font-bold ${colorClass} mb-4 flex items-center gap-2`}>
                            <span className={`w-2 h-6 rounded-sm ${cls === 'Calamity' ? 'bg-red-600' : cls === 'Overlord' ? 'bg-red-500' : cls === 'Elite' ? 'bg-purple-500' : 'bg-gray-500'}`}></span> 
                            {cls} Class
                         </h2>
                         {renderGrid(items)}
                     </div>
                 );
             })}
           </div>
        </div>
      );
  }

  // --- Default Render (Rarity Grouping) ---
  const items5 = data.filter(i => i.rarity === 5);
  const items4 = data.filter(i => i.rarity === 4);
  const items3 = data.filter(i => i.rarity === 3);
  const items2 = data.filter(i => i.rarity === 2);
  const items1 = data.filter(i => i.rarity === 1);
  const others = data.filter(i => !i.rarity);

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 border-b border-red-900/30 pb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full bg-red-950/50 border border-red-900 hover:bg-red-900 transition-colors text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold cinzel-font text-white neon-text">{title}</h1>
        </div>

        {items5.length > 0 && (
          <div className="mb-10 animate-fade-in-up">
            <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-yellow-500 rounded-sm"></span> 5-Star
            </h2>
            {renderGrid(items5)}
          </div>
        )}

        {items4.length > 0 && (
          <div className="mb-10 animate-fade-in-up delay-100">
            <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-purple-500 rounded-sm"></span> 4-Star
            </h2>
            {renderGrid(items4)}
          </div>
        )}

        {items3.length > 0 && (
          <div className="mb-10">
             <h2 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-blue-500 rounded-sm"></span> 3-Star
            </h2>
            {renderGrid(items3)}
          </div>
        )}
        
        {items2.length > 0 && (
          <div className="mb-10">
             <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-green-500 rounded-sm"></span> 2-Star
            </h2>
            {renderGrid(items2)}
          </div>
        )}

        {items1.length > 0 && (
          <div className="mb-10">
             <h2 className="text-xl font-bold text-gray-400 mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-gray-500 rounded-sm"></span> 1-Star
            </h2>
            {renderGrid(items1)}
          </div>
        )}

        {others.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-red-500 rounded-sm"></span> List
            </h2>
            {renderGrid(others)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
