import { GoogleGenAI, FunctionDeclaration, Type, Tool } from "@google/genai";

const apiKey = process.env.API_KEY || 'YOUR_API_KEY_HERE'; 

const ai = new GoogleGenAI({ apiKey });

// Define the navigation tool so the AI can control the app
const navigationTool: FunctionDeclaration = {
  name: 'navigate',
  description: 'Navigate the user to a specific page in the application. Use this when the user asks to see characters, weapons, or a specific item.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      game: {
        type: Type.STRING,
        description: 'The game context: "genshin" or "wuthering".',
        enum: ['genshin', 'wuthering']
      },
      category: {
        type: Type.STRING,
        description: 'The category of the item or page: "characters", "weapons", "artifacts", "echoes", "quests", "regions".',
        enum: ['characters', 'weapons', 'artifacts', 'echoes', 'quests', 'regions']
      },
      itemId: {
        type: Type.STRING,
        description: 'Optional. The specific ID of the item if the user asks for a specific character (e.g., "diluc", "jiyan"). If just listing, leave empty.',
      }
    },
    required: ['game', 'category']
  }
};

const tools: Tool[] = [
  { functionDeclarations: [navigationTool] },
  { googleSearch: {} } // Enable Search Grounding for RAG capabilities
];

export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      tools: tools,
      systemInstruction: "You are the Game Sage, an expert AI assistant for 'Genshin Impact' and 'Wuthering Waves'. \n\n" + 
      "CONTEXT & RAG:\n" +
      "You have access to Google Search. You must use it to find information about characters, quests, items, and lore from the Fandom Wikis of both games. \n" +
      "The user may ask about specific drop rates, quest guides, or character builds. Always use the search tool to verify facts from the wiki if you are not 100% sure.\n" +
      "When referring to game data, be precise.\n\n" + 
      "GAME CONTEXT SWITCHING:\n" +
      "The user may switch the game context explicitly. If the user (or system) says 'Context switched to [Game]', strictly focus your knowledge retrieval on that specific game until told otherwise.\n\n" +
      "NAVIGATION:\n" + 
      "If a user asks to 'go to' or 'show me' a specific page (like 'Show me Diluc', 'Go to Wuthering Waves characters'), use the 'navigate' tool. \n" +
      "Valid IDs for navigation (examples): 'diluc', 'amber', 'zhongli', 'raiden', 'jiyan', 'yangyang', 'yinlin', 'calcharo'.\n\n" +
      "PERSONALITY:\n" + 
      "Your persona is a 'Game Sage' in a Neon/Oni themed hub. Be helpful, strategic, and slightly mystical but very clear.",
    },
  });
};