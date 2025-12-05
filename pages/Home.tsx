
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { genshinCharacters, wutheringCharacters } from '../data';
import { Sparkles, Zap, ChevronRight } from 'lucide-react';

// Configuration: Time in milliseconds between background transitions
const BACKGROUND_ROTATION_INTERVAL = 2000; // 10 seconds

// Backgrounds: Use official safe URLs or local paths
const backgrounds = [
  '/images/bg/bg1.png',
    '/images/bg/bg2.png',
    '/images/bg/bg3.png',
    '/images/bg/bg4.png',
    '/images/bg/bg5.png',
    '/images/bg/bg6.png',
    '/images/bg/bg7.png',
    '/images/bg/bg8.png',
    '/images/bg/bg9.png',
    '/images/bg/bg10.png',
    '/images/bg/bg11.png',
    '/images/bg/bg12.png',
    '/images/bg/bg13.png',
    '/images/bg/bg14.png',
    '/images/bg/bg15.png',
    '/images/bg/bg16.png',
    '/images/bg/bg17.png',
    '/images/bg/bg18.png',
    '/images/bg/bg19.png',
    '/images/bg/bg20.png',
    '/images/bg/bg21.png',
    '/images/bg/bg22.png',
    '/images/bg/bg23.png',
    '/images/bg/bg24.png',
    '/images/bg/bg25.png',
    '/images/bg/bg26.png',
    '/images/bg/bg27.png',
    '/images/bg/bg28.png',
    '/images/bg/bg29.png',
    '/images/bg/bg30.png',
    '/images/bg/bg31.png',
    '/images/bg/bg32.png',
    '/images/bg/bg33.png',
    '/images/bg/bg34.png',
    '/images/bg/bg35.png',
    '/images/bg/bg36.png',
    '/images/bg/bg37.png',
    '/images/bg/bg38.png',
    '/images/bg/bg39.png',
    '/images/bg/bg40.png',
    '/images/bg/bg41.png',
    '/images/bg/bg42.png',
    '/images/bg/bg43.png',
    '/images/bg/bg44.png',
    '/images/bg/bg45.png',
    '/images/bg/bg46.png',
    '/images/bg/bg47.png',
    '/images/bg/bg48.png',
    '/images/bg/bg49.png',
    '/images/bg/bg50.png',
    '/images/bg/bg51.png',
    '/images/bg/bg52.png'
];

const Home: React.FC = () => {
  // Initialize with a random index so it doesn't always start with the same game
  const [bgIndex, setBgIndex] = useState(() => Math.floor(Math.random() * backgrounds.length));
  const navigate = useNavigate();

  // Pick a featured character from each game
  const featuredGenshin = genshinCharacters[0]; 
  const featuredWuthering = wutheringCharacters[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, BACKGROUND_ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${index === bgIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-red-950/20" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cinzel-font drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] tracking-wider">
            Welcome to, <br/>
            <span className="text-red-500 neon-text">Game Sage Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide drop-shadow-md border-l-4 border-red-600 pl-6 bg-black/50 py-2 inline-block">
            Your ultimate AI-powered guide for Genshin Impact and Wuthering Waves.
          </p>
          
          <div className="mt-8 flex justify-center">
              <div className="animate-bounce">
                  <span className="text-red-400 text-sm tracking-widest uppercase">Scroll to Explore</span>
              </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-black py-20 px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl font-bold text-center text-white cinzel-font mb-16 neon-text">Featured Updates</h2>
             
             <div className="grid md:grid-cols-2 gap-12">
                {/* Genshin Feature */}
                <div className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-red-900/30 hover:border-yellow-500/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-0"></div>
                    {/* Used a safe geometric pattern instead of potentially broken external image for background pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-transparent to-transparent"></div>
                    
                    <div className="relative p-8 flex flex-col h-full z-10">
                       <div className="flex items-center gap-2 text-yellow-500 mb-4">
                           <Sparkles className="w-5 h-5"/>
                           <span className="uppercase tracking-widest text-xs font-bold">New Arrival</span>
                       </div>
                       <div className="flex items-center gap-6 mb-6">
                           <img 
                              src={featuredGenshin.image} 
                              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/150x150/331111/FF0033?text=No+Img'; }}
                              className="w-24 h-24 rounded-full border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)] object-cover bg-black" 
                              alt={featuredGenshin.name}
                           />
                           <div>
                               <h3 className="text-2xl font-bold text-white mb-1">{featuredGenshin.name}</h3>
                               <span className="bg-yellow-900/50 text-yellow-200 text-xs px-2 py-1 rounded border border-yellow-700">{featuredGenshin.element}</span>
                           </div>
                       </div>
                       <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{featuredGenshin.description}</p>
                       <button onClick={() => navigate(`/genshin/characters/${featuredGenshin.id}`)} className="flex items-center gap-2 text-white hover:text-yellow-400 font-semibold transition-colors group-hover:translate-x-2 duration-300">
                           View Details <ChevronRight className="w-4 h-4"/>
                       </button>
                    </div>
                </div>

                {/* Wuthering Feature */}
                <div className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-red-900/30 hover:border-blue-500/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-0"></div>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>

                    <div className="relative p-8 flex flex-col h-full z-10">
                       <div className="flex items-center gap-2 text-blue-400 mb-4">
                           <Zap className="w-5 h-5"/>
                           <span className="uppercase tracking-widest text-xs font-bold">New Resonator</span>
                       </div>
                       <div className="flex items-center gap-6 mb-6">
                           <img 
                              src={featuredWuthering.image} 
                              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/150x150/111133/0088FF?text=No+Img'; }}
                              className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] object-cover bg-black" 
                              alt={featuredWuthering.name}
                           />
                           <div>
                               <h3 className="text-2xl font-bold text-white mb-1">{featuredWuthering.name}</h3>
                               <span className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded border border-blue-700">{featuredWuthering.element}</span>
                           </div>
                       </div>
                       <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{featuredWuthering.description}</p>
                       <button onClick={() => navigate(`/wuthering/characters/${featuredWuthering.id}`)} className="flex items-center gap-2 text-white hover:text-blue-400 font-semibold transition-colors group-hover:translate-x-2 duration-300">
                           View Details <ChevronRight className="w-4 h-4"/>
                       </button>
                    </div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
