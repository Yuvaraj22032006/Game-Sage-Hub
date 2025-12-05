import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Home, ChevronDown, User, LogIn, LogOut, ArrowLeft } from 'lucide-react';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const navLinkClass = "block py-3 px-4 hover:bg-red-900/40 hover:text-red-400 rounded-lg transition-all cursor-pointer flex justify-between items-center text-gray-200 border border-transparent hover:border-red-900/50";
  const subLinkClass = "block py-2 px-8 hover:text-red-400 text-sm transition-colors text-gray-400 border-l border-gray-800 ml-4 hover:border-red-600";

  return (
    <div className="min-h-screen relative text-gray-100 font-sans selection:bg-red-900 selection:text-white bg-black">
      
      {/* Top Left Menu Trigger */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 left-6 z-40 p-3 bg-black/80 backdrop-blur-md border border-red-900/50 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:bg-red-950 transition-all group"
      >
        <Menu className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
      </button>

      {/* Sidebar Menu */}
      <div className={`fixed inset-y-0 left-0 w-80 bg-black/95 border-r border-red-900/30 transform transition-transform duration-300 ease-in-out z-50 shadow-2xl shadow-red-900/20 backdrop-blur-xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 border-b border-red-900/30 pb-4">
            <h2 className="text-2xl font-bold cinzel-font text-red-500 neon-text">Game Sage Hub</h2>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-red-950 rounded-full text-red-400">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
            <div onClick={() => { navigate('/'); setIsMenuOpen(false); }} className={navLinkClass}>
              <span className="flex items-center gap-3"><Home className="w-5 h-5 text-red-500"/> Home</span>
            </div>

            {/* Genshin Impact Dropdown */}
            <div>
              <div onClick={() => toggleSubmenu('genshin')} className={navLinkClass}>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_5px_red]"></span>
                  Genshin Impact
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform text-red-500 ${expandedMenu === 'genshin' ? 'rotate-180' : ''}`}/>
              </div>
              {expandedMenu === 'genshin' && (
                <div className="mt-1 mb-2 py-2 animate-fadeIn space-y-1">
                  <Link to="/genshin/characters" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Characters</Link>
                  <Link to="/genshin/weapons" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Weapons</Link>
                  <Link to="/genshin/artifacts" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Artifact Sets</Link>
                  <Link to="/genshin/quests" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Quests</Link>
                  <Link to="/genshin/regions" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Regions</Link>
                </div>
              )}
            </div>

            {/* Wuthering Waves Dropdown */}
            <div>
              <div onClick={() => toggleSubmenu('wuthering')} className={navLinkClass}>
                 <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  Wuthering Waves
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform text-red-500 ${expandedMenu === 'wuthering' ? 'rotate-180' : ''}`}/>
              </div>
              {expandedMenu === 'wuthering' && (
                <div className="mt-1 mb-2 py-2 animate-fadeIn space-y-1">
                  <Link to="/wuthering/characters" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Characters</Link>
                  <Link to="/wuthering/weapons" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Weapons</Link>
                  <Link to="/wuthering/echoes" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Echoes</Link>
                  <Link to="/wuthering/quests" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Quests</Link>
                  <Link to="/wuthering/regions" onClick={() => setIsMenuOpen(false)} className={subLinkClass}>Regions</Link>
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={navLinkClass}>
               <span className="flex items-center gap-3">About Us</span>
            </Link>
          </nav>

          <div className="border-t border-red-900/30 pt-6 mt-4">
             <div className="flex items-center gap-3 mb-4 p-3 bg-red-950/30 rounded-lg border border-red-900/20">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center border-2 border-red-400 shadow-[0_0_10px_red]">
                    <User className="text-white"/>
                </div>
                <div>
                    <p className="text-sm font-semibold text-red-50">Traveler</p>
                    <p className="text-xs text-red-300">Guest Account</p>
                </div>
             </div>
             <div className="flex gap-2">
                 <Link to="/auth?mode=login" onClick={() => setIsMenuOpen(false)} className="flex-1 py-2 bg-red-700 text-center rounded-lg hover:bg-red-600 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-red-900/50 transition-all">
                    <LogIn className="w-4 h-4"/> Sign In
                 </Link>
                 <Link to="/auth?mode=signup" onClick={() => setIsMenuOpen(false)} className="flex-1 py-2 border border-red-800 text-center rounded-lg hover:bg-red-950 text-sm font-semibold flex items-center justify-center gap-2 text-red-400 hover:text-white transition-all">
                    Sign Up
                 </Link>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full min-h-screen relative z-10">
        {children}
      </main>

      <Chatbot />
      
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-30 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;