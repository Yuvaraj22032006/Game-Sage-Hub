import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, X, MessageSquare, Loader2, Lightbulb, Zap, Sparkles, BookOpen, Gamepad2 } from 'lucide-react';
import { createChatSession } from '../src/services/geminiService';
import { useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
}

type GameContext = 'genshin' | 'wuthering' | null;
type HintLevel = 'low' | 'medium' | 'high';

const GREETINGS = [
  "Greetings, Warrior. Select a realm and your desired guidance level.",
  "The archives of Teyvat and Solaris-3 are open. Where shall we begin?",
  "Synchronizing with the Akasha and the Data Bank... Ready for queries.",
  "From the winds of Mondstadt to the waves of Jinzhou, I am at your service.",
  "Guidance systems active. Do you seek lore, locations, or battle strategies?",
  "The stars shine bright today. Are you a Traveler or a Rover?",
  "Ah, a visitor. The database is primed for your questions.",
  "I hold the knowledge of two worlds. Test me, adventurer.",
  "Awaiting input. Hint levels are adjustable to your preference.",
  "Greetings. Let us unravel the mysteries of this world together."
];

const getRandomGreeting = () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    { role: 'model', text: getRandomGreeting() }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameContext, setGameContext] = useState<GameContext>(null);
  const [hintLevel, setHintLevel] = useState<HintLevel>('high');
  const [showSettings, setShowSettings] = useState(false);
  
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Initialize Chat Session
  useEffect(() => {
    try {
      // Attempt to create session. The service handles the API key (env or fallback).
      chatSessionRef.current = createChatSession();
    } catch (e) {
      console.error("Failed to init chat", e);
    }
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, showSettings]);

  // Handle Game Context Switching
  const handleGameSelect = async (game: 'genshin' | 'wuthering') => {
    if (gameContext === game) return;
    
    setGameContext(game);
    const gameName = game === 'genshin' ? 'Genshin Impact' : 'Wuthering Waves';
    
    // UI Message
    setMessages(prev => [...prev, { role: 'system', text: `Realm switched to: ${gameName}` }]);
    
    // Inform AI
    if (chatSessionRef.current) {
      try {
         // Sending a hidden message to context-switch the AI
         await chatSessionRef.current.sendMessage({ message: `System Update: The user has switched context to ${gameName}. Focus all responses on ${gameName}.` });
      } catch (e) {
        console.error("Context switch error", e);
      }
    }
  };

  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Browser does not support speech recognition.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      handleSend(transcript); 
    };

    recognition.start();
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsLoading(true);

    if (!chatSessionRef.current) {
        // Try to re-init if lost
        try {
          chatSessionRef.current = createChatSession();
        } catch (e) {
           setMessages(prev => [...prev, { role: 'model', text: "Chat system could not be initialized." }]);
           setIsLoading(false);
           return;
        }
    }

    try {
      // Construct instruction based on current level
      let levelInstruction = "";
      if (hintLevel === 'low') levelInstruction = "Provide LOW hints only. Cryptic, vague clues, no spoilers.";
      else if (hintLevel === 'medium') levelInstruction = "Provide MEDIUM hints. Explain mechanics/area but no final solution.";
      else levelInstruction = "Provide HIGH hints. Full step-by-step solution and data.";

      // Send the user message combined with the current system instruction for this turn
      const response = await chatSessionRef.current.sendMessage({ 
        message: `[SYSTEM: ${levelInstruction}] User Query: ${textToSend}` 
      });
      
      const functionCalls = response.functionCalls;
      
      if (functionCalls && functionCalls.length > 0) {
        for (const call of functionCalls) {
          if (call.name === 'navigate') {
            const { game, category, itemId } = call.args;
            const path = `/${game}/${category}${itemId ? `/${itemId}` : ''}`;
            navigate(path);
             const toolResult = { result: `Navigated user to ${path}` };
             await chatSessionRef.current.sendMessage({
               message: [{
                 functionResponse: {
                   name: 'navigate',
                   response: toolResult,
                   id: call.id
                 }
               }]
             });
          }
        }
      }

      const text = response.text;
      if(text) {
          setMessages(prev => [...prev, { role: 'model', text: text }]);
      }

    } catch (error: any) {
      console.error(error);
      const errorMessage = error.message || "Unknown error";
      // Displaying actual error for easier debugging
      setMessages(prev => [...prev, { role: 'model', text: `The leylines are disrupted. I cannot communicate right now. (${errorMessage})` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getLevelLabel = (level: HintLevel) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  return (
    <>
      {/* Floating Sage Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300 transform hover:scale-110 border-2 border-red-500/50 ${isOpen ? 'bg-red-800 rotate-90' : 'bg-black hover:bg-gray-900'}`}
      >
        {isOpen ? <X className="text-red-500 w-8 h-8" /> : <MessageSquare className="text-red-500 w-8 h-8" />}
      </button>

      {/* Chat Window - Width increased to w-[60rem] (approx 960px) */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-[60rem] max-w-[95vw] h-[700px] bg-black/95 border border-red-900 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.2)] z-40 flex flex-col overflow-hidden backdrop-blur-md">
          
          {/* Header & Game Selector */}
          <div className="bg-gradient-to-b from-red-950 to-black border-b border-red-800 p-4">
             <div className="flex items-center gap-3 mb-3 px-2">
                <div className="w-12 h-12 rounded-full bg-black border border-red-500 flex items-center justify-center shadow-[0_0_10px_red]">
                    <span className="text-2xl">👹</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-red-50 cinzel-font leading-tight">Game Sage</h3>
                    <p className="text-xs text-red-400 uppercase tracking-widest">Select Realm</p>
                </div>
             </div>

             {/* Game Selector Buttons */}
             <div className="flex gap-3 mt-2">
               <button 
                  onClick={() => handleGameSelect('genshin')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all border ${
                    gameContext === 'genshin' 
                    ? 'bg-yellow-900/40 border-yellow-500 text-yellow-100 shadow-[0_0_10px_rgba(234,179,8,0.3)]' 
                    : 'bg-gray-900 border-gray-800 text-gray-500 hover:border-gray-600'
                  }`}
               >
                  <Sparkles className="w-4 h-4" /> Genshin Impact
               </button>
               <button 
                  onClick={() => handleGameSelect('wuthering')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all border ${
                    gameContext === 'wuthering' 
                    ? 'bg-blue-900/40 border-blue-500 text-blue-100 shadow-[0_0_10px_rgba(59,130,246,0.3)]' 
                    : 'bg-gray-900 border-gray-800 text-gray-500 hover:border-gray-600'
                  }`}
               >
                  <Zap className="w-4 h-4" /> Wuthering Waves
               </button>
             </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-black/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'system' ? (
                  <div className="w-full flex justify-center my-2">
                    <span className="text-xs text-red-400/70 uppercase tracking-widest border-b border-red-900/30 pb-1">{msg.text}</span>
                  </div>
                ) : (
                  <div className={`max-w-[90%] p-4 rounded-xl text-base ${
                    msg.role === 'user' 
                      ? 'bg-red-700 text-white rounded-br-none shadow-[0_0_10px_rgba(220,38,38,0.3)]' 
                      : 'bg-gray-900 text-gray-300 rounded-bl-none border border-red-900/50'
                  }`}>
                    {msg.role === 'model' ? (
                        <div className="prose prose-invert prose-base max-w-none">
                            {msg.text.split('\n').filter(line => line.trim() !== '').map((line, i) => (
                                // Increased spacing with mb-8 (2rem) and relaxed leading
                                <p key={i} className="mb-8 last:mb-0 leading-loose">{line}</p>
                            ))}
                        </div>
                    ) : msg.text}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-gray-900 p-4 rounded-xl rounded-bl-none border border-red-900/50">
                    <Loader2 className="w-6 h-6 animate-spin text-red-500" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Settings / Hint Level Panel */}
          {showSettings && (
            <div className="bg-gray-900/90 border-t border-red-900/30 p-4 animate-fadeInUp">
               <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-red-400 font-bold flex items-center gap-2"><Lightbulb className="w-4 h-4"/> Response Detail</span>
               </div>
               <div className="flex gap-3">
                 {[
                   { lvl: 'low', label: 'Low', desc: 'Cryptic Hints (No Spoilers)' },
                   { lvl: 'medium', label: 'Medium', desc: 'Half Info (Mechanics)' },
                   { lvl: 'high', label: 'High', desc: 'Full Guide (Step-by-Step)' }
                 ].map((opt) => (
                    <button 
                      key={opt.lvl}
                      onClick={() => setHintLevel(opt.lvl as HintLevel)}
                      className={`flex-1 py-3 rounded-lg flex flex-col items-center justify-center border transition-all ${
                        hintLevel === opt.lvl
                        ? 'bg-red-700 border-red-500 text-white shadow-[0_0_10px_red]' 
                        : 'bg-black border-gray-700 text-gray-500 hover:border-gray-500'
                      }`}
                    >
                      <span className="text-sm font-bold">{opt.label}</span>
                      <span className="text-[10px] opacity-70 mt-1">{opt.desc}</span>
                    </button>
                 ))}
               </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-black border-t border-red-900/50 flex items-center gap-3">
            <button 
               onClick={() => setShowSettings(!showSettings)}
               className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${showSettings ? 'bg-red-900 text-red-100 border border-red-500' : 'bg-gray-900 text-gray-400 hover:text-white border border-red-900'}`}
               title="Adjust Detail Level"
            >
               <Lightbulb className="w-4 h-4" />
               <span className="text-xs font-bold w-12 text-center">{getLevelLabel(hintLevel)}</span>
            </button>
            
            <button 
              onClick={toggleListening}
              className={`p-3 rounded-full transition-colors ${isListening ? 'bg-red-600 animate-pulse text-white' : 'bg-gray-900 text-red-500 hover:text-white border border-red-900'}`}
            >
              <Mic className="w-5 h-5" />
            </button>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={gameContext ? `Ask about ${gameContext === 'genshin' ? 'Teyvat' : 'Solaris-3'}...` : "Select a realm above..."}
              disabled={!gameContext}
              className="flex-1 bg-gray-900 border border-red-900/30 rounded-full px-6 py-3 text-base text-gray-200 focus:ring-2 focus:ring-red-600 outline-none placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || !gameContext}
              className="p-3 bg-red-700 rounded-full text-white hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(185,28,28,0.5)] disabled:opacity-50 disabled:shadow-none"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;