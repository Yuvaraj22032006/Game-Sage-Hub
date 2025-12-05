
import { Character, Weapon, ArtifactSet, Echo, Quest, Region, Rarity } from './types';

// ==========================================
// GENSHIN IMPACT DATA
// ==========================================

export const genshinCharacters: Character[] = [
  // --- NATLAN ---
  {
    id: 'mualani',
    name: 'Mualani',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Catalyst',
    image: '/images/mualani.png',
    detailImage: '/images/mualani-full.png',
    description: 'A well-known guide in Natlan who owns a water sports shop. She is friendly, enthusiastic, and knows the best spots for surfing.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mualani'
  },
  {
    id: 'kinich',
    name: 'Kinich',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Claymore',
    image: '/images/kinich.png',
    detailImage: '/images/kinich-full.png',
    description: 'A Huitztlan Saurian Hunter skilled at moving through the mountains. He carries a pixelated claymore and works with the Saurians.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kinich'
  },
  {
    id: 'xilonen',
    name: 'Xilonen',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Sword',
    image: '/images/xilonen.png',
    detailImage: '/images/xilonen-full.png',
    description: 'A master smith of the Children of Echoes. She is known for her exceptional craftsmanship and laid-back attitude.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xilonen'
  },
  {
    id: 'chasca',
    name: 'Chasca',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Bow',
    image: '/images/chasca.png',
    detailImage: '/images/chasca-full.png',
    description: 'A Peacemaker of the Flower-Feather Clan. She mediates disputes with a calm demeanor but wields powerful Anemo abilities.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chasca'
  },
  {
    id: 'kachina',
    name: 'Kachina',
    rarity: Rarity.FOUR_STAR,
    element: 'Geo',
    weaponType: 'Polearm',
    image: '/images/kachina.png',
    detailImage: '/images/kachina-full.png',
    description: 'A young warrior of the Children of Echoes, known for her resilience and her turbo-twirly vehicle.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kachina'
  },

  // --- FONTAINE ---
  {
    id: 'arlecchino',
    name: 'Arlecchino',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Polearm',
    image: '/images/arlecchino.png',
    detailImage: '/images/arlecchino-full.png',
    description: 'The "Knave", Fourth of the Fatui Harbingers. She runs the House of the Hearth with a strict but protective hand.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Arlecchino'
  },
  {
    id: 'furina',
    name: 'Furina',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Sword',
    image: '/images/furina.png',
    detailImage: '/images/furina-full.png',
    description: 'The Regina of All Waters, Kindreds, Peoples and Laws. A dramatic and beloved figure in Fontaine.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Furina'
  },
  {
    id: 'neuvillette',
    name: 'Neuvillette',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Catalyst',
    image: '/images/neuvillette.png',
    detailImage: '/images/neuvillette-full.png',
    description: 'The Iudex of Fontaine and the Hydro Dragon Sovereign. He upholds justice with absolute impartiality.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Neuvillette'
  },
  {
    id: 'navia',
    name: 'Navia',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Claymore',
    image: '/images/navia.png',
    detailImage: '/images/navia-full.png',
    description: 'President of the Spina di Rosula. She is dedicated to solving the mysteries of Fontaine and helping its people.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Navia'
  },
  {
    id: 'wriothesley',
    name: 'Wriothesley',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Catalyst',
    image: '/images/wriothesley.png',
    detailImage: '/images/wriothesley-full.png',
    description: 'The Administrator of the Fortress of Meropide. A brawler who keeps the underwater prison in order.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wriothesley'
  },
  {
    id: 'lyney',
    name: 'Lyney',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Bow',
    image: '/images/lyney.png',
    detailImage: '/images/lyney-full.png',
    description: 'A celebrated magician of the Court of Fontaine. He dazzles audiences with his twin sister Lynette.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lyney'
  },
  {
    id: 'clorinde',
    name: 'Clorinde',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Sword',
    image: '/images/clorinde.png',
    detailImage: '/images/clorinde-full.png',
    description: 'The Champion Duelist of Fontaine. Her pistol and sword skills are unmatched in the Court.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Clorinde'
  },
  {
    id: 'emilie',
    name: 'Emilie',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Polearm',
    image: '/images/emilie.png',
    detailImage: '/images/emilie-full.png',
    description: 'A renowned perfumer in Fontaine who specializes in removing the "odors" of crime scenes.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Emilie'
  },

  // --- SUMERU ---
  {
    id: 'nahida',
    name: 'Nahida',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Catalyst',
    image: '/images/nahida.png',
    detailImage: '/images/nahida-full.png',
    description: 'Lesser Lord Kusanali, the Dendro Archon. She watches over Sumeru from the Sanctuary of Surasthana.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nahida'
  },
  {
    id: 'alhaitham',
    name: 'Alhaitham',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Sword',
    image: '/images/alhaitham.png',
    detailImage: '/images/alhaitham-full.png',
    description: 'The Scribe of the Sumeru Akademiya. A rational man who values truth and logic above all else.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Alhaitham'
  },
  {
    id: 'cyno',
    name: 'Cyno',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Polearm',
    image: '/images/cyno.png',
    detailImage: '/images/cyno-full.png',
    description: 'The General Mahamatra. He strikes fear into the hearts of scholars who violate the rules.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cyno'
  },
  {
    id: 'nilou',
    name: 'Nilou',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Sword',
    image: '/images/nilou.png',
    detailImage: '/images/nilou-full.png',
    description: 'The star of the Zubayr Theater. Her dance is as graceful as the blooming lotuses.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nilou'
  },
  {
    id: 'wanderer',
    name: 'Wanderer',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Catalyst',
    image: '/images/wanderer.png',
    detailImage: '/images/wanderer-full.png',
    description: 'Formerly the Balladeer, now a wanderer seeking a new purpose after the events in Sumeru.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wanderer'
  },

  // --- INAZUMA ---
  {
    id: 'raiden',
    name: 'Raiden Shogun',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Polearm',
    image: '/images/raiden.png',
    detailImage: '/images/raiden-full.png',
    description: 'Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Raiden_Shogun'
  },
  {
    id: 'kazuha',
    name: 'Kaedehara Kazuha',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Sword',
    image: '/images/kazuha.png',
    detailImage: '/images/kazuha-full.png',
    description: 'A wandering samurai from Inazuma who is currently with the Crux Fleet.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kaedehara_Kazuha'
  },
  {
    id: 'ayaka',
    name: 'Kamisato Ayaka',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Sword',
    image: '/images/ayaka.png',
    detailImage: '/images/ayaka-full.png',
    description: 'Daughter of the Kamisato Clan. She is dignified, elegant, and wise.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kamisato_Ayaka'
  },
  {
    id: 'yae-miko',
    name: 'Yae Miko',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Catalyst',
    image: '/images/yae-miko.png',
    detailImage: '/images/yae-miko-full.png',
    description: 'Guuji of the Grand Narukami Shrine. She is cunning, intelligent, and the Raiden Shogun\'s familiar.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yae_Miko'
  },
  {
    id: 'arataki-itto',
    name: 'Arataki Itto',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Claymore',
    image: '/images/itto.png',
    detailImage: '/images/itto-full.png',
    description: 'The first and greatest head of the Arataki Gang. He is loud, proud, and an Oni.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Arataki_Itto'
  },

  // --- LIYUE ---
  {
    id: 'zhongli',
    name: 'Zhongli',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Polearm',
    image: '/images/zhongli.png',
    detailImage: '/images/zhongli-full.png',
    description: 'Wangsheng Funeral Parlor consultant. He possesses a vast knowledge of Liyue\'s history and culture.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Zhongli'
  },
  {
    id: 'hu-tao',
    name: 'Hu Tao',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Polearm',
    image: '/images/hu-tao.png',
    detailImage: '/images/hu-tao-full.png',
    description: '77th Director of the Wangsheng Funeral Parlor. She is quirky, cheerful, and respects the cycle of life and death.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Hu_Tao'
  },
  {
    id: 'xiao',
    name: 'Xiao',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Polearm',
    image: '/images/xiao.png',
    detailImage: '/images/xiao-full.png',
    description: 'The Vigilant Yaksha. He protects Liyue from the remnants of defeated gods.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xiao'
  },
  {
    id: 'yelan',
    name: 'Yelan',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Bow',
    image: '/images/yelan.png',
    detailImage: '/images/yelan-full.png',
    description: 'A mysterious person who claims to work for the Ministry of Civil Affairs. She is a phantom in Liyue.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yelan'
  },
  {
    id: 'ganyu',
    name: 'Ganyu',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Bow',
    image: '/images/ganyu.png',
    detailImage: '/images/ganyu-full.png',
    description: 'The secretary to the Liyue Qixing. The blood of the qilin beast flows within her veins.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ganyu'
  },

  // --- MONDSTADT ---
  {
    id: 'venti',
    name: 'Venti',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Bow',
    image: '/images/venti.png',
    detailImage: '/images/venti-full.png',
    description: 'A bard that seems to have arrived on some unknown wind. He loves wine and songs.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Venti'
  },
  {
    id: 'diluc',
    name: 'Diluc',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Claymore',
    image: '/images/diluc.png',
    detailImage: '/images/diluc-full.png',
    description: 'The tycoon of a winery empire in Mondstadt, unmatched in every possible way.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Diluc'
  },
  {
    id: 'eula',
    name: 'Eula',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Claymore',
    image: '/images/eula.png',
    detailImage: '/images/eula-full.png',
    description: 'The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Eula'
  },

  // --- 4 STARS (Notable) ---
  { id: 'bennett', name: 'Bennett', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Sword', image: '/images/bennett.png', description: 'An unlucky adventurer.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bennett' },
  { id: 'xingqiu', name: 'Xingqiu', rarity: Rarity.FOUR_STAR, element: 'Hydro', weaponType: 'Sword', image: '/images/xingqiu.png', description: 'A young commerce guild heir.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xingqiu' },
  { id: 'xiangling', name: 'Xiangling', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Polearm', image: '/images/xiangling.png', description: 'A renowned chef from Liyue.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xiangling' },
  { id: 'fischl', name: 'Fischl', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Bow', image: '/images/fischl.png', description: 'Prinzessin der Verurteilung.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fischl' },
  { id: 'kuki-shinobu', name: 'Kuki Shinobu', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Sword', image: '/images/kuki-shinobu.png', description: 'The capable deputy of the Arataki Gang.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kuki_Shinobu' }
];

export const genshinWeapons: Weapon[] = [
  // 5 Star Polearms
  { id: 'crimson-moons-semblance', name: "Crimson Moon's Semblance", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/crimson-moon.png', description: 'Arlecchino\'s signature polearm.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crimson_Moon%27s_Semblance' },
  { id: 'staff-of-homa', name: "Staff of Homa", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/staff-of-homa.png', description: 'Hu Tao\'s signature weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Staff_of_Homa' },
  { id: 'engulfing-lightning', name: "Engulfing Lightning", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/engulfing-lightning.png', description: 'Raiden Shogun\'s signature weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Engulfing_Lightning' },
  { id: 'primordial-jade-winged-spear', name: "Primordial Jade Winged-Spear", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/pjws.png', description: 'Xiao\'s signature weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Primordial_Jade_Winged-Spear' },
  
  // 5 Star Swords
  { id: 'splendor-of-tranquil-waters', name: "Splendor of Tranquil Waters", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/splendor.png', description: 'Furina\'s signature sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Splendor_of_Tranquil_Waters' },
  { id: 'mistsplitter-reforged', name: "Mistsplitter Reforged", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/mistsplitter.png', description: 'Ayaka\'s signature sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mistsplitter_Reforged' },
  { id: 'freedom-sworn', name: "Freedom-Sworn", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/freedom-sworn.png', description: 'Kazuha\'s signature sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Freedom-Sworn' },
  
  // 5 Star Claymores
  { id: 'verdict', name: "Verdict", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/verdict.png', description: 'Navia\'s signature claymore.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Verdict' },
  { id: 'wolfs-gravestone', name: "Wolf's Gravestone", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/wolfs-gravestone.png', description: 'Diluc\'s signature claymore.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wolf%27s_Gravestone' },
  { id: 'fang-of-the-mountain-king', name: "Fang of the Mountain King", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/fang-mountain-king.png', description: 'Kinich\'s signature claymore.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fang_of_the_Mountain_King' },

  // 5 Star Catalysts
  { id: 'tome-of-the-eternal-flow', name: "Tome of the Eternal Flow", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/tome-eternal-flow.png', description: 'Neuvillette\'s signature catalyst.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tome_of_the_Eternal_Flow' },
  { id: 'a-thousand-floating-dreams', name: "A Thousand Floating Dreams", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/thousand-floating-dreams.png', description: 'Nahida\'s signature catalyst.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Thousand_Floating_Dreams' },
  
  // 5 Star Bows
  { id: 'aqua-simulacra', name: "Aqua Simulacra", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/aqua-simulacra.png', description: 'Yelan\'s signature bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Aqua_Simulacra' },
  { id: 'the-first-great-magic', name: "The First Great Magic", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/first-great-magic.png', description: 'Lyney\'s signature bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_First_Great_Magic' },
  { id: 'elegy-for-the-end', name: "Elegy for the End", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/elegy.png', description: 'Venti\'s signature bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Elegy_for_the_End' },

  // 4 Star
  { id: 'favonius-sword', name: "Favonius Sword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/favonius-sword.png', description: 'Standard Knight sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Favonius_Sword' },
  { id: 'the-catch', name: "The Catch", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/the-catch.png', description: 'Best F2P polearm.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/%22The_Catch%22' },
];

export const genshinArtifacts: ArtifactSet[] = [
  {
    id: 'fragment-of-harmonic-whimsy',
    name: 'Fragment of Harmonic Whimsy',
    rarity: Rarity.FIVE_STAR,
    image: '/images/harmonic-whimsy.png',
    pieceImages: [],
    description: 'Increases ATK when Bond of Life fluctuates.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fragment_of_Harmonic_Whimsy'
  },
  {
    id: 'obsidian-codex',
    name: 'Obsidian Codex',
    rarity: Rarity.FIVE_STAR,
    image: '/images/obsidian-codex.png',
    pieceImages: [],
    description: 'Increases DMG when in Nightsoul Blessing state.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Obsidian_Codex'
  },
  {
    id: 'marechaussee-hunter',
    name: 'Marechaussee Hunter',
    rarity: Rarity.FIVE_STAR,
    image: '/images/marechaussee-hunter.png',
    pieceImages: [],
    description: 'Increases Crit Rate when HP fluctuates.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Marechaussee_Hunter'
  },
  {
    id: 'deepwood-memories',
    name: 'Deepwood Memories',
    rarity: Rarity.FIVE_STAR,
    image: '/images/deepwood-memories.png',
    pieceImages: [],
    description: 'Decreases Dendro RES. Essential for Nahida.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Deepwood_Memories'
  },
  {
    id: 'emblem-of-severed-fate',
    name: 'Emblem of Severed Fate',
    rarity: Rarity.FIVE_STAR,
    image: '/images/emblem.png',
    pieceImages: [],
    description: 'Increases Burst DMG based on ER.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Emblem_of_Severed_Fate'
  },
  {
    id: 'crimson-witch',
    name: 'Crimson Witch of Flames',
    rarity: Rarity.FIVE_STAR,
    image: '/images/crimson-witch.png',
    pieceImages: [],
    description: 'An artifact set that increases Pyro damage.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crimson_Witch_of_Flames'
  },
  {
    id: 'viridescent-venerer',
    name: 'Viridescent Venerer',
    rarity: Rarity.FIVE_STAR,
    image: '/images/viridescent.png',
    pieceImages: [],
    description: 'Decreases Elemental RES of Swirled element.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Viridescent_Venerer'
  },
  {
    id: 'the-exile',
    name: 'The Exile',
    rarity: Rarity.FOUR_STAR,
    image: '/images/exile.png',
    pieceImages: [],
    description: 'Increases Energy Recharge and regenerates Energy for the party.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Exile'
  },
  {
    id: 'instructor',
    name: 'Instructor',
    rarity: Rarity.FOUR_STAR,
    image: '/images/instructor.png',
    pieceImages: [],
    description: 'Increases Elemental Mastery for the party upon triggering an elemental reaction.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Instructor'
  },
  {
    id: 'berserker',
    name: 'Berserker',
    rarity: Rarity.FOUR_STAR,
    image: '/images/berserker.png',
    pieceImages: [],
    description: 'Increases CRIT Rate, especially when HP is low.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Berserker'
  },
  {
    id: 'adventurer',
    name: 'Adventurer',
    rarity: Rarity.THREE_STAR,
    image: '/images/adventurer.png',
    pieceImages: [],
    description: 'Increases Max HP and regenerates HP upon opening chests.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Adventurer'
  },
  {
    id: 'lucky-dog',
    name: 'Lucky Dog',
    rarity: Rarity.THREE_STAR,
    image: '/images/lucky-dog.png',
    pieceImages: [],
    description: 'Increases DEF and picks up Mora.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lucky_Dog'
  },
  {
    id: 'traveling-doctor',
    name: 'Traveling Doctor',
    rarity: Rarity.TWO_STAR,
    image: '/images/traveling-doctor.png',
    pieceImages: [],
    description: 'Increases incoming healing.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveling_Doctor'
  },
  {
    id: 'initiates-flower',
    name: 'Initiate',
    rarity: Rarity.ONE_STAR,
    image: '/images/initiate.png',
    pieceImages: [],
    description: 'Basic artifact for beginners.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Initiate'
  }
];

export const genshinQuests: Quest[] = [
  // Archon Quests
  { id: 'natlan-act-1', name: 'Chapter V Act I: Flowers Resplendent on the Sun-Scorched Sojourn', category: 'Archon Quest', image: '/images/natlan-quest-1.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chapter_V' },
  { id: 'natlan-act-2', name: 'Chapter V Act II: Black Stone Under a White Stone', category: 'Archon Quest', image: '/images/natlan-quest-2.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chapter_V' },
  { id: 'masquerade-of-the-guilty', name: 'Chapter IV: Masquerade of the Guilty', category: 'Archon Quest', image: '/images/fontaine-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chapter_IV' },
  { id: 'truth-amongst-the-pages', name: 'Chapter III: Truth Amongst the Pages', category: 'Archon Quest', image: '/images/sumeru-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chapter_III' },
  { id: 'omnipresence-over-mortals', name: 'Chapter II: Omnipresence Over Mortals', category: 'Archon Quest', image: '/images/inazuma-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chapter_II' },
  { id: 'farewell-archaic-lord', name: 'Chapter I: Farewell, Archaic Lord', category: 'Archon Quest', image: '/images/liyue-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chapter_I' },
  { id: 'prologue', name: 'Prologue: The Outlander Who Caught the Wind', category: 'Archon Quest', image: '/images/mondstadt-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prologue' },
  // Story Quests
  { id: 'sal-flore', name: 'Princeps Cretaceus Chapter: Act I (Albedo)', category: 'Story Quest', image: '/images/albedo-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Princeps_Cretaceus_Chapter' },
  { id: 'trulla', name: 'Trulla Chapter: Act I (Xiangling)', category: 'Story Quest', image: '/images/xiangling-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Trulla_Chapter' },
  { id: 'monoceros-caeli', name: 'Monoceros Caeli Chapter: Act I (Childe)', category: 'Story Quest', image: '/images/childe-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Monoceros_Caeli_Chapter' },
  { id: 'imperatrix-umbrosa', name: 'Imperatrix Umbrosa Chapter: Act II (Raiden Shogun)', category: 'Story Quest', image: '/images/raiden-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Imperatrix_Umbrosa_Chapter' },
  { id: 'sapientia-orop', name: 'Sapientia Oromasdis Chapter: Act I (Nahida)', category: 'Story Quest', image: '/images/nahida-quest.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sapientia_Oromasdis_Chapter' }

];

export const genshinRegions: Region[] = [
  { id: 'natlan', name: 'Natlan', image: '/images/natlan-region.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Natlan' },
  { id: 'fontaine', name: 'Fontaine', image: '/images/fontaine-region.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fontaine' },
  { id: 'sumeru', name: 'Sumeru', image: '/images/sumeru-region.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sumeru' },
  { id: 'inazuma', name: 'Inazuma', image: '/images/inazuma-region.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Inazuma' },
  { id: 'liyue', name: 'Liyue', image: '/images/liyue-region.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Liyue' },
  { id: 'mondstadt', name: 'Mondstadt', image: '/images/mondstadt-region.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mondstadt' },
  { id: 'enkanomiya', name: 'Enkanomiya', image: '/images/enkanomiya.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Enkanomiya' },
  { id: 'chasm', name: 'The Chasm', image: '/images/chasm.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Chasm' }
];

// ==========================================
// WUTHERING WAVES DATA
// ==========================================

export const wutheringCharacters: Character[] = [
  // 5 Stars
  {
    id: 'shorekeeper',
    name: 'The Shorekeeper',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Rectifier',
    image: '/images/shorekeeper.png',
    detailImage: '/images/shorekeeper-full.png',
    description: 'The mysterious guardian of the Black Shores. She watches over the world from the shadows.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Shorekeeper'
  },
  {
    id: 'xiangli-yao',
    name: 'Xiangli Yao',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Gauntlets',
    image: '/images/xiangli-yao.png',
    detailImage: '/images/xiangli-yao-full.png',
    description: 'A brilliant artificer from Huaxu Academy. He seeks the ultimate truth of mechanics.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Xiangli_Yao'
  },
  {
    id: 'zhezhi',
    name: 'Zhezhi',
    rarity: Rarity.FIVE_STAR,
    element: 'Glacio',
    weaponType: 'Rectifier',
    image: '/images/zhezhi.png',
    detailImage: '/images/zhezhi-full.png',
    description: 'A shy painter whose artwork comes to life. She captures the fleeting beauty of the world.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Zhezhi'
  },
  {
    id: 'changli',
    name: 'Changli',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Sword',
    image: '/images/changli.png',
    detailImage: '/images/changli-full.png',
    description: 'Counselor to the Jinzhou Magistrate. A master strategist with a fiery will.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Changli'
  },
  {
    id: 'jinhsi',
    name: 'Jinhsi',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Broadblade',
    image: '/images/jinhsi.png',
    detailImage: '/images/jinhsi-full.png',
    description: 'The Magistrate of Jinzhou. She carries the weight of the city\'s future on her shoulders.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jinhsi'
  },
  {
    id: 'yinlin',
    name: 'Yinlin',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Rectifier',
    image: '/images/yinlin.png',
    detailImage: '/images/yinlin-full.png',
    description: 'A Patroller of the Public Security Bureau. She hides her true nature behind a facade of elegance.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Yinlin'
  },
  {
    id: 'jiyan',
    name: 'Jiyan',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Broadblade',
    image: '/images/jiyan.png',
    detailImage: '/images/jiyan-full.png',
    description: 'General of the Midnight Rangers. A dragon-summoning warrior who protects the borders.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jiyan'
  },
  {
    id: 'calcharo',
    name: 'Calcharo',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Broadblade',
    image: '/images/calcharo.png',
    detailImage: '/images/calcharo-full.png',
    description: 'Leader of the Ghost Hounds. A mercenary who lives by his own code.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Calcharo'
  },
  {
    id: 'verina',
    name: 'Verina',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Rectifier',
    image: '/images/verina.png',
    detailImage: '/images/verina-full.png',
    description: 'A brilliant botanist from the New Federation. She talks to plants and heals her allies.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Verina'
  },
  {
    id: 'encore',
    name: 'Encore',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Rectifier',
    image: '/images/encore.png',
    detailImage: '/images/encore-full.png',
    description: 'A consultant from the Black Shores. She is accompanied by two wooly plushies.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Encore'
  },
  {
    id: 'lingyang',
    name: 'Lingyang',
    rarity: Rarity.FIVE_STAR,
    element: 'Glacio',
    weaponType: 'Gauntlets',
    image: '/images/lingyang.png',
    detailImage: '/images/lingyang-full.png',
    description: 'A member of the Liondance Troupe. He is spirited and agile.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lingyang'
  },
  {
    id: 'jianxin',
    name: 'Jianxin',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Gauntlets',
    image: '/images/jianxin.png',
    detailImage: '/images/jianxin-full.png',
    description: 'A Taoist monk who wanders the world to train her martial arts.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jianxin'
  },
  {
    id: 'rover-spectro',
    name: 'Rover (Spectro)',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Sword',
    image: '/images/rover-spectro.png',
    detailImage: '/images/rover-spectro-full.png',
    description: 'The awakened one who carries the sound of the world.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rover'
  },
  {
    id: 'rover-havoc',
    name: 'Rover (Havoc)',
    rarity: Rarity.FIVE_STAR,
    element: 'Havoc',
    weaponType: 'Sword',
    image: '/images/rover-havoc.png',
    detailImage: '/images/rover-havoc-full.png',
    description: 'The awakened one, harnessing the power of destruction.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rover'
  },

  // 4 Stars
  {
    id: 'yangyang',
    name: 'Yangyang',
    rarity: Rarity.FOUR_STAR,
    element: 'Aero',
    weaponType: 'Sword',
    image: '/images/yangyang.png',
    detailImage: '/images/yangyang-full.png',
    description: 'An Outrider of the Midnight Rangers. Gentle as the wind but fierce in battle.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Yangyang'
  },
  {
    id: 'chixia',
    name: 'Chixia',
    rarity: Rarity.FOUR_STAR,
    element: 'Fusion',
    weaponType: 'Pistols',
    image: '/images/chixia.png',
    detailImage: '/images/chixia-full.png',
    description: 'A Junior Patroller in Jinzhou. She dreams of becoming a hero.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chixia'
  },
  {
    id: 'baizhi',
    name: 'Baizhi',
    rarity: Rarity.FOUR_STAR,
    element: 'Glacio',
    weaponType: 'Rectifier',
    image: '/images/baizhi.png',
    detailImage: '/images/baizhi-full.png',
    description: 'A researcher at Huaxu Academy. Her Remnant creature protects her.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Baizhi'
  },
  {
    id: 'danjin',
    name: 'Danjin',
    rarity: Rarity.FOUR_STAR,
    element: 'Havoc',
    weaponType: 'Sword',
    image: '/images/danjin.png',
    detailImage: '/images/danjin-full.png',
    description: 'A ranger hunting down thieves and bandits to atone for her past.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Danjin'
  },
  {
    id: 'mortefi',
    name: 'Mortefi',
    rarity: Rarity.FOUR_STAR,
    element: 'Fusion',
    weaponType: 'Pistols',
    image: '/images/mortefi.png',
    detailImage: '/images/mortefi-full.png',
    description: 'A researcher from the New Federation. He has a fiery temper.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Mortefi'
  },
  {
    id: 'sanhua',
    name: 'Sanhua',
    rarity: Rarity.FOUR_STAR,
    element: 'Glacio',
    weaponType: 'Sword',
    image: '/images/sanhua.png',
    detailImage: '/images/sanhua-full.png',
    description: 'A bodyguard for the Magistrate. Her eyes see the flow of frequencies.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sanhua'
  },
  {
    id: 'taoqi',
    name: 'Taoqi',
    rarity: Rarity.FOUR_STAR,
    element: 'Havoc',
    weaponType: 'Broadblade',
    image: '/images/taoqi.png',
    detailImage: '/images/taoqi-full.png',
    description: 'Director of Border Defense. She prefers a laid-back approach to work.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Taoqi'
  }
];

export const wutheringWeapons: Weapon[] = [
  { id: 'stellar-symphony', name: "Stellar Symphony", rarity: Rarity.FIVE_STAR, mainStat: 'HP', subStat: 'ER', image: '/images/stellar-symphony.png', description: 'The Shorekeeper\'s signature rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stellar_Symphony' },
  { id: 'verdant-summit', name: "Verdant Summit", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/verdant-summit.png', description: 'Jiyan\'s signature broadblade.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Verdant_Summit' },
  { id: 'stringmaster', name: "Stringmaster", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/stringmaster.png', description: 'Yinlin\'s signature rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stringmaster' },
  { id: 'ages-of-harvest', name: "Ages of Harvest", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/ages-of-harvest.png', description: 'Jinhsi\'s signature broadblade.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Ages_of_Harvest' },
  { id: 'blazing-brilliance', name: "Blazing Brilliance", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/blazing-brilliance.png', description: 'Changli\'s signature sword.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Blazing_Brilliance' },
  { id: 'verity-handle', name: "Verity's Handle", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/verity-handle.png', description: 'Xiangli Yao\'s signature gauntlet.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Verity%27s_Handle' },
  { id: 'rime-draped-sprouts', name: "Rime-Draped Sprouts", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/rime-draped-sprouts.png', description: 'Zhezhi\'s signature rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rime-Draped_Sprouts' },
  { id: 'lustrous-razor', name: "Lustrous Razor", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/lustrous-razor.png', description: 'Standard 5-star broadblade.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lustrous_Razor' },
  { id: 'abyss-surges', name: "Abyss Surges", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/abyss-surges.png', description: 'Standard 5-star gauntlets.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Abyss_Surges' },
  { id: 'static-mist', name: "Static Mist", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/static-mist.png', description: 'Standard 5-star pistols.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Static_Mist' },
  { id: 'emerald-of-genesis', name: "Emerald of Genesis", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/emerald-genesis.png', description: 'Standard 5-star sword.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Emerald_of_Genesis' },
];

export const wutheringEchoes: Echo[] = [
  // Calamity / Overlord
  { id: 'bellborne', name: 'Bell-Borne Geochelone', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/bellborne.png', description: 'A massive tortoise-like Tacet Discord. Provides shields.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Bell-Borne_Geochelone' },
  { id: 'inferno-rider', name: 'Inferno Rider', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/inferno-rider.png', description: 'A biker wielding hellfire. Increases Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Inferno_Rider' },
  { id: 'mourning-aix', name: 'Mourning Aix', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/mourning-aix.png', description: 'A tragic bird-like construct. Increases Spectro DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Mourning_Aix' },
  { id: 'dreamless', name: 'The Dreamless', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/dreamless.png', description: 'Manifestation of the Lament. Boosts Havoc Rover.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dreamless' },
  { id: 'thundering-mephis', name: 'Thundering Mephis', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/thundering-mephis.png', description: 'A mechanical predator infused with Electro.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Thundering_Mephis' },
  { id: 'crownless', name: 'Crownless', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/crownless.png', description: 'A mimicry of a knight. Increases Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Crownless' },
  { id: 'jue', name: 'Jué', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/jue.png', description: 'The Sentinel of Jinzhou. A majestic dragon.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jue' },
  
  // Elites (Examples)
  { id: 'cyan-heron', name: 'Cyan-Feathered Heron', class: 'Elite', rarity: Rarity.FIVE_STAR, image: '/images/cyan-heron.png', description: 'An Aero bird.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cyan-Feathered_Heron' },
  { id: 'flautist', name: 'Flautist', class: 'Elite', rarity: Rarity.FIVE_STAR, image: '/images/flautist.png', description: 'Uses lasers to attack.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Flautist' },
  { id: 'chasm-guardian', name: 'Chasm Guardian', class: 'Elite', rarity: Rarity.FIVE_STAR, image: '/images/chasm-guardian.png', description: 'A rock golem.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chasm_Guardian' },
  
  // Common
  { id: 'vanguard-junrock', name: 'Vanguard Junrock', class: 'Common', rarity: Rarity.FOUR_STAR, image: '/images/vanguard-junrock.png', description: 'Common rock enemy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Vanguard_Junrock' },
  { id: 'fission-junrock', name: 'Fission Junrock', class: 'Common', rarity: Rarity.FOUR_STAR, image: '/images/fission-junrock.png', description: 'Splitting rock enemy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fission_Junrock' }
];

export const wutheringQuests: Quest[] = [
    // Main
    { id: 'w-main-1-1', name: 'Chapter I Act I: Utterance of Marvels', category: 'Main Quest', image: '/images/w-main-1-1.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Utterance_of_Marvels' },
    { id: 'w-main-1-2', name: 'Chapter I Act II: Encounters in the Woods', category: 'Main Quest', image: '/images/w-main-1-2.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Encounters_in_the_Woods' },
    { id: 'w-main-1-3', name: 'Chapter I Act III: Ominous Star', category: 'Main Quest', image: '/images/w-main-1-3.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Ominous_Star' },
    { id: 'w-main-1-4', name: 'Chapter I Act IV: Clashing Blades', category: 'Main Quest', image: '/images/w-main-1-4.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Clashing_Blades' },
    { id: 'w-main-1-5', name: 'Chapter I Act V: Rewinding Raindrops', category: 'Main Quest', image: '/images/w-main-1-5.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rewinding_Raindrops' },
    // Side
    { id: 'we-promise-we-deliver', name: 'We Promise, We Deliver', category: 'Side Quest', image: '/images/we-promise-deliver.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/We_Promise,_We_Deliver' },
    { id: 'lest-we-forget', name: 'Lest We Forget', category: 'Side Quest', image: '/images/lest-we-forget.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lest_We_Forget' },
    // Exploration
    { id: 'hidden-danger', name: 'Hidden Danger in Peaceful Life', category: 'Exploration Quest', image: '/images/hidden-danger.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hidden_Danger_in_Peaceful_Life' },
    { id: 'silver-haired', name: 'Silver-haired Echo Trainer', category: 'Exploration Quest', image: '/images/silver-haired.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Silver-haired_Echo_Trainer' },
    { id: 'shadows-past', name: 'Shadows of the Past', category: 'Exploration Quest', image: '/images/shadows-past.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Shadows_of_the_Past' }
];

export const wutheringRegions: Region[] = [
    { id: 'black-shores', name: 'Black Shores', image: '/images/black-shores.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Black_Shores' },
    { id: 'mt-firmament', name: 'Mt. Firmament', image: '/images/mt-firmament.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Mt._Firmament' },
    { id: 'jinzhou', name: 'Jinzhou', image: '/images/jinzhou.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jinzhou' },
    { id: 'central-plains', name: 'Central Plains', image: '/images/central-plains.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Central_Plains' },
    { id: 'dim-forest', name: 'Dim Forest', image: '/images/dim-forest.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dim_Forest' },
    { id: 'whining-aix-mire', name: 'Whining Aix\'s Mire', image: '/images/whining-aix-mire.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Whining_Aix%27s_Mire' },
    { id: 'norfall-barrens', name: 'Norfall Barrens', image: '/images/norfall-barrens.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Norfall_Barrens' },
    { id: 'gorges-of-spirits', name: 'Gorges of Spirits', image: '/images/gorges-of-spirits.png', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Gorges_of_Spirits' }
];

export const teamMembers = [
  { name: 'Member 1', usn: 'USN001', img: '/images/member1.png' },
  { name: 'Member 2', usn: 'USN002', img: '/images/member2.png' },
  { name: 'Member 3', usn: 'USN003', img: '/images/member3.png' },
  { name: 'Member 4', usn: 'USN004', img: '/images/member4.png' },
];
