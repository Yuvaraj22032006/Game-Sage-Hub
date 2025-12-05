import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const Auth: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-700/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-red-900/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <button onClick={() => navigate('/')} className="mb-6 text-gray-500 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-4 h-4"/> Back to Home
        </button>

        <h2 className="text-3xl font-bold text-center text-white mb-2 cinzel-font neon-text">
          {mode === 'login' ? 'Welcome Back' : 'Join the Guild'}
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          {mode === 'login' ? 'Enter your credentials to access the archive.' : 'Create your adventurer account today.'}
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {mode === 'signup' && (
             <div>
                <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Username</label>
                <input type="text" className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder-gray-700" placeholder="Traveler_001" />
             </div>
          )}
          
          <div>
            <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Email Address</label>
            <input type="email" className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder-gray-700" placeholder="paimon@example.com" />
          </div>

          <div>
            <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPass ? "text" : "password"} 
                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder-gray-700" 
                placeholder="••••••••" 
              />
              <button 
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-[0_0_20px_rgba(185,28,28,0.3)] transform transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(185,28,28,0.5)]">
            {mode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="px-2 bg-gray-900 text-gray-500">Or continue with</span></div>
          </div>

          <button className="w-full bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
             <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
             Google
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500 text-sm">
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => navigate(mode === 'login' ? '/auth?mode=signup' : '/auth?mode=login')} className="text-red-400 hover:text-red-300 font-semibold underline">
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;