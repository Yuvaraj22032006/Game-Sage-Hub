
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { 
  genshinCharacters, genshinWeapons, genshinArtifacts, genshinQuests, genshinRegions,
  wutheringCharacters, wutheringWeapons, wutheringEchoes, wutheringQuests, wutheringRegions
} from '../data';

const ItemDetail: React.FC = () => {
  const { game, category, id } = useParams();
  const navigate = useNavigate();

  // Find the item
  let item: any = null;
  const findItem = (list: any[]) => list.find(i => i.id === id);

  if (game === 'genshin') {
      if (category === 'characters') item = findItem(genshinCharacters);
      else if (category === 'weapons') item = findItem(genshinWeapons);
      else if (category === 'artifacts') item = findItem(genshinArtifacts);
      else if (category === 'quests') item = findItem(genshinQuests);
      else if (category === 'regions') item = findItem(genshinRegions);
  } else {
      if (category === 'characters') item = findItem(wutheringCharacters);
      else if (category === 'weapons') item = findItem(wutheringWeapons);
      else if (category === 'echoes') item = findItem(wutheringEchoes);
      else if (category === 'quests') item = findItem(wutheringQuests);
      else if (category === 'regions') item = findItem(wutheringRegions);
  }

  if (!item) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        <div className="text-center p-8 border border-red-900 rounded-xl bg-red-950/20">
          <h2 className="text-2xl font-bold mb-4 cinzel-font text-red-500">Item Not Found</h2>
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white underline">Return</button>
        </div>
      </div>
    );
  }

  const isArtifact = category === 'artifacts';

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.1)] border border-red-900/50 flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side: Stats/Description */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center relative border-r border-red-900/30">
          <button 
            onClick={() => navigate(-1)} 
            className="absolute top-6 left-6 p-2 rounded-full bg-black/50 border border-gray-700 hover:border-red-500 text-gray-400 hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="text-5xl font-bold cinzel-font text-white mb-2 neon-text">{item.name}</h1>
          <div className="flex gap-1 mb-8">
             {item.rarity && Array.from({length: item.rarity}).map((_, i) => <span key={i} className="text-yellow-500 text-xl">★</span>)}
          </div>

          <div className="space-y-6 text-gray-300">
            {/* Dynamic Field Rendering */}
            {item.element && (
              <div className="flex items-center gap-4 group">
                <span className="font-bold text-red-500 w-24 uppercase tracking-wider text-sm">Element</span>
                <span className="text-white bg-red-950/50 border border-red-900/50 px-4 py-1 rounded-full">{item.element}</span>
              </div>
            )}
            {item.weaponType && (
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-500 w-24 uppercase tracking-wider text-sm">Weapon</span>
                <span className="text-white">{item.weaponType}</span>
              </div>
            )}
            {item.class && (
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-500 w-24 uppercase tracking-wider text-sm">Class</span>
                <span className="text-red-400">{item.class}</span>
              </div>
            )}
            {item.category && (
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-500 w-24 uppercase tracking-wider text-sm">Type</span>
                <span className="text-white italic">{item.category}</span>
              </div>
            )}
            {item.mainStat && (
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-500 w-24 uppercase tracking-wider text-sm">Main Stat</span>
                <span className="text-white text-lg font-mono">{item.mainStat}</span>
              </div>
            )}
            {item.subStat && (
              <div className="flex items-center gap-4">
                <span className="font-bold text-red-500 w-24 uppercase tracking-wider text-sm">Sub Stat</span>
                <span className="text-white text-lg font-mono">{item.subStat}</span>
              </div>
            )}
             {item.description && (
              <div className="bg-black/40 p-6 rounded-xl border-l-2 border-red-600 italic text-gray-400 mt-4">
                "{item.description}"
              </div>
            )}
          </div>

          {/* Artifact Specific: 5 Images */}
          {isArtifact && item.pieceImages && (
            <div className="mt-8">
              <h3 className="text-red-400 font-bold mb-4 uppercase text-xs tracking-widest">Set Pieces</h3>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
                {item.pieceImages.map((img: string, idx: number) => (
                  <img key={idx} src={img} alt={`Piece ${idx+1}`} className="w-16 h-16 rounded-lg border border-red-900/50 bg-black hover:border-red-500 transition-colors" />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <a 
              href={item.moreDetailsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-700 hover:bg-red-600 rounded-lg text-white font-semibold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              Wiki Page <ExternalLink className="w-4 h-4"/>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-black to-red-950 relative flex items-center justify-center overflow-hidden group">
           {/* Decorative circle */}
           <div className="absolute w-[80%] h-[80%] border border-red-500/20 rounded-full animate-spin-slow"></div>
           <div className="absolute w-[60%] h-[60%] border border-red-500/20 rounded-full animate-reverse-spin"></div>
           
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full scale-75"></div>

           <img 
            src={item.detailImage || item.image} 
            alt={item.name} 
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x600/111/666?text=Image+Not+Found'; }}
            className="relative z-10 max-h-[85%] max-w-[90%] object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105" 
           />
        </div>

      </div>
    </div>
  );
};

export default ItemDetail;
