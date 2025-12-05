import React from 'react';
import { teamMembers } from '../data';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black pt-24 px-6 flex flex-col items-center justify-start relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none"></div>

      <div className="max-w-6xl w-full text-center relative z-10">
        <div className="absolute left-0 top-0">
           <button onClick={() => navigate(-1)} className="p-2 text-gray-500 hover:text-white transition-colors"><ArrowLeft/></button>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold cinzel-font text-white mb-4 neon-text">Our Team</h1>
        <p className="text-red-400 mb-20 tracking-widest uppercase text-sm">Game Sage Architects</p>
        
        {/* Team Members Grid - Centered Row */}
        <div className="flex flex-wrap justify-center gap-16 mb-24">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="relative w-48 h-48 mb-6">
                 {/* Glowing Ring */}
                 <div className="absolute inset-0 rounded-full border-2 border-red-600 shadow-[0_0_20px_red] group-hover:shadow-[0_0_40px_red] transition-all duration-500"></div>
                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative z-10">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 cinzel-font">{member.name}</h3>
              <p className="text-red-500 font-mono text-sm tracking-wider bg-red-950/30 px-3 py-1 rounded border border-red-900/50">{member.usn}</p>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="w-full bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-red-900/30 flex flex-col md:flex-row justify-around items-center hover:border-red-600/50 transition-colors shadow-lg">
          <div className="flex items-center gap-5 mb-6 md:mb-0 group cursor-pointer">
             <div className="p-4 bg-red-950 rounded-full border border-red-800 group-hover:bg-red-700 transition-colors">
                <Mail className="w-6 h-6 text-white" />
             </div>
             <div className="text-left">
               <p className="text-xs text-red-400 uppercase tracking-widest">Email Support</p>
               <p className="text-xl text-white font-bold group-hover:text-red-200 transition-colors">gamesage4clover@gmail.com</p>
             </div>
          </div>
          <div className="w-px h-16 bg-red-900/30 hidden md:block"></div>
          <div className="flex items-center gap-5 group cursor-pointer">
             <div className="p-4 bg-red-950 rounded-full border border-red-800 group-hover:bg-red-700 transition-colors">
                <Phone className="w-6 h-6 text-white" />
             </div>
             <div className="text-left">
               <p className="text-xs text-red-400 uppercase tracking-widest">Phone Contact</p>
               <p className="text-xl text-white font-bold group-hover:text-red-200 transition-colors">+91 86180 96113</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;