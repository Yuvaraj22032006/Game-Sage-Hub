import { GoogleGenAI, FunctionDeclaration, Type, Tool } from "@google/genai";
import { genshinUrls, wutheringUrls } from '../knowledgeBase';

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
        description: 'Optional. The specific ID of the item if the user asks for a specific character. The format is usually the item name in kebab-case (e.g., "diluc", "jiyan", "primordial-jade-winged-spear").',
      }
    },
    required: ['game', 'category']
  }
};

const tools: Tool[] = [
  { functionDeclarations: [navigationTool] }
  // Note: googleSearch is removed to avoid conflicts with function declarations as per API guidelines.
];

export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      tools: tools,
      systemInstruction: `You are the Game Sage, an expert AI assistant for 'Genshin Impact' and 'Wuthering Waves'.

      RESPONSE FORMATTING RULES (STRICT):
      1. You MUST answer all questions STEP-BY-STEP or POINT-BY-POINT.
      2. Use bullet points or numbered lists for every explanation.
      3. Insert significant vertical spacing between points.
      4. Keep formatting clean and easy to read.

      HINT LEVELS (Follow strictly based on user request):
      - LOW: Give a couple of cryptic hints or vague clues. Point the user in the right direction but DO NOT give the answer, specific locations, or solutions.
      - MEDIUM: Give half the hints. Explain the mechanics or the general area, but leave the final execution to the user.
      - HIGH: Give FULL hints. Provide the complete walkthrough, exact locations, puzzle solutions, and data values.

      KNOWLEDGE BASE INDEX (RAG):
      You should prioritize your internal knowledge and the following authoritative wiki structures to verify facts, drop rates, and lore.
      
      [GENSHIN IMPACT SOURCES]
      ${genshinUrls.join(', ')} ... and related pages on genshin-impact.fandom.com.

      [WUTHERING WAVES SOURCES]
      ${wutheringUrls.join(', ')} ... and related pages on wutheringwaves.fandom.com.

      GAME CONTEXT SWITCHING:
      The user may switch the game context explicitly. If the user (or system) says 'Context switched to [Game]', strictly focus your knowledge retrieval on that specific game until told otherwise.

      NAVIGATION:
      If a user asks to 'go to' or 'show me' a specific page (like 'Show me Mualani', 'Go to Wuthering Waves characters'), use the 'navigate' tool.
      Construct the 'itemId' by converting the name to kebab-case (lowercase, hyphens for spaces).
      
      PERSONALITY:
      Your persona is a 'Game Sage' in a Neon/Oni themed hub. Be helpful, strategic, and slightly mystical but very clear.`,
    },
  });
};