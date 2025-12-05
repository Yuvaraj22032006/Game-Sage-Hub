export enum Rarity {
  ONE_STAR = 1,
  TWO_STAR = 2,
  THREE_STAR = 3,
  FOUR_STAR = 4,
  FIVE_STAR = 5
}

export interface GameItem {
  id: string;
  name: string;
  image: string; // URL for list view
  detailImage?: string; // URL for detail view (optional)
  rarity?: Rarity;
  description?: string;
  moreDetailsUrl: string;
}

export interface Character extends GameItem {
  element: string;
  weaponType: string;
}

export interface Weapon extends GameItem {
  mainStat: string;
  subStat: string;
}

export interface ArtifactSet extends GameItem {
  pieceImages: string[]; // Array of 5 images for the set
}

export interface Echo extends GameItem {
  class: 'Common' | 'Elite' | 'Overlord' | 'Calamity';
}

export interface Quest extends GameItem {
  category: string;
}

export interface Region extends GameItem {
  // Simple region data
}

export type Category = 'characters' | 'weapons' | 'artifacts' | 'echoes' | 'quests' | 'regions';
export type Game = 'genshin' | 'wuthering';
