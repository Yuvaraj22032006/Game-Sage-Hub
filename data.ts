

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
    image: '/images/Genshin/Characters/5-star/mualani-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/mualani-2.jpg',
    description: 'A well-known guide in Natlan who owns a water sports shop. She is friendly, enthusiastic, and knows the best spots for surfing.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mualani'
  },
  {
    id: 'kinich',
    name: 'Kinich',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/kinich-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/kinich-2.jpg',
    description: 'A Huitztlan Saurian Hunter skilled at moving through the mountains. He carries a pixelated claymore and works with the Saurians.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kinich'
  },
  {
    id: 'xilonen',
    name: 'Xilonen',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/xilonen-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/xilonen-2.jpg',
    description: 'A master smith of the Children of Echoes. She is known for her exceptional craftsmanship and laid-back attitude.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xilonen'
  },
  {
    id: 'chasca',
    name: 'Chasca',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/chasca-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/chasca-2.jpg',
    description: 'A Peacemaker of the Flower-Feather Clan. She mediates disputes with a calm demeanor but wields powerful Anemo abilities.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chasca'
  },

  // --- FONTAINE ---
  {
    id: 'arlecchino',
    name: 'Arlecchino',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/arlecchino-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/arlecchino-2.jpg',
    description: 'The "Knave", Fourth of the Fatui Harbingers. She runs the House of the Hearth with a strict but protective hand.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Arlecchino'
  },
  {
    id: 'furina',
    name: 'Furina',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/furina-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/furina-2.jpg',
    description: 'The Regina of All Waters, Kindreds, Peoples and Laws. A dramatic and beloved figure in Fontaine.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Furina'
  },
  {
    id: 'neuvillette',
    name: 'Neuvillette',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/neuvillette-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/neuvillette-2.jpg',
    description: 'The Iudex of Fontaine and the Hydro Dragon Sovereign. He upholds justice with absolute impartiality.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Neuvillette'
  },
  {
    id: 'navia',
    name: 'Navia',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/navia-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/navia-2.jpg',
    description: 'President of the Spina di Rosula. She is dedicated to solving the mysteries of Fontaine and helping its people.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Navia'
  },
  {
    id: 'wriothesley',
    name: 'Wriothesley',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/wriothesley-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/wriothesley-2.jpg',
    description: 'The Administrator of the Fortress of Meropide. A brawler who keeps the underwater prison in order.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wriothesley'
  },
  {
    id: 'lyney',
    name: 'Lyney',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/lyney-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/lyney-2.jpg',
    description: 'A celebrated magician of the Court of Fontaine. He dazzles audiences with his twin sister Lynette.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lyney'
  },
  {
    id: 'clorinde',
    name: 'Clorinde',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/clorinde-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/clorinde-2.jpg',
    description: 'The Champion Duelist of Fontaine. Her pistol and sword skills are unmatched in the Court.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Clorinde'
  },
  {
    id: 'emilie',
    name: 'Emilie',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/Emilie-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/Emilie-2.jpg',
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
    image: '/images/Genshin/Characters/5-star/nahida-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/nahida-2.jpg',
    description: 'Lesser Lord Kusanali, the Dendro Archon. She watches over Sumeru from the Sanctuary of Surasthana.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nahida'
  },
  {
    id: 'alhaitham',
    name: 'Alhaitham',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/alhaitham-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/alhaitham-2.jpg',
    description: 'The Scribe of the Sumeru Akademiya. A rational man who values truth and logic above all else.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Alhaitham'
  },
  {
    id: 'cyno',
    name: 'Cyno',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/cyno-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/cyno-2.jpg',
    description: 'The General Mahamatra. He strikes fear into the hearts of scholars who violate the rules.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cyno'
  },
  {
    id: 'nilou',
    name: 'Nilou',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/nilou-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/nilou-2.jpg',
    description: 'The star of the Zubayr Theater. Her dance is as graceful as the blooming lotuses.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nilou'
  },
  {
    id: 'wanderer',
    name: 'Wanderer',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/wanderer-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/wanderer-2.jpg',
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
    image: '/images/Genshin/Characters/5-star/raiden shogun-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/raiden shogun-2.jpg',
    description: 'Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Raiden_Shogun'
  },
  {
    id: 'kazuha',
    name: 'Kaedehara Kazuha',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/kaedahara kazuha-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/kaedehara kazuha-2.jpg',
    description: 'A wandering samurai from Inazuma who is currently with the Crux Fleet.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kaedehara_Kazuha'
  },
  {
    id: 'ayaka',
    name: 'Kamisato Ayaka',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/kamisato ayaka-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/kamisato ayaka-2.jpg',
    description: 'Daughter of the Kamisato Clan. She is dignified, elegant, and wise.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kamisato_Ayaka'
  },
  {
    id: 'yae-miko',
    name: 'Yae Miko',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/yae miko-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/yae miko-2.jpg',
    description: 'Guuji of the Grand Narukami Shrine. She is cunning, intelligent, and the Raiden Shogun\'s familiar.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yae_Miko'
  },
  {
    id: 'arataki-itto',
    name: 'Arataki Itto',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/arataki itto-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/arataki itto-2.jpg',
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
    image: '/images/Genshin/Characters/5-star/zhongli-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/zhongli-2.jpg',
    description: 'Wangsheng Funeral Parlor consultant. He possesses a vast knowledge of Liyue\'s history and culture.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Zhongli'
  },
  {
    id: 'hu-tao',
    name: 'Hu Tao',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/hu tao-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/hu tao-2.jpg',
    description: '77th Director of the Wangsheng Funeral Parlor. She is quirky, cheerful, and respects the cycle of life and death.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Hu_Tao'
  },
  {
    id: 'xiao',
    name: 'Xiao',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/xiao-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/xiao-2.jpg',
    description: 'The Vigilant Yaksha. He protects Liyue from the remnants of defeated gods.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xiao'
  },
  {
    id: 'yelan',
    name: 'Yelan',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/yelan-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/yelan-2.jpg',
    description: 'A mysterious person who claims to work for the Ministry of Civil Affairs. She is a phantom in Liyue.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yelan'
  },
  {
    id: 'ganyu',
    name: 'Ganyu',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/ganyu-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/ganyu-2.jpg',
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
    image: '/images/Genshin/Characters/5-star/venti-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/venti-2.jpg',
    description: 'A bard that seems to have arrived on some unknown wind. He loves wine and songs.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Venti'
  },
  {
    id: 'diluc',
    name: 'Diluc',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/diluc-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/diluc-2.jpg',
    description: 'The tycoon of a winery empire in Mondstadt, unmatched in every possible way.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Diluc'
  },
  {
    id: 'eula',
    name: 'Eula',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/eula-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/eula-2.jpg',
    description: 'The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Eula'
  },


  //Copy of 5-star

  {
    id: 'nefer',
    name: 'Nefer',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/nefer-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/nefer-2.jpg',
    description: 'Hailing from Sumeru, she is the head of the Curatorium of Secrets and a member of the Voynich Guild. She is incredibly calculating and knowledgeable to the point people speculate she can predict the future.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nefer'
  },
  {
    id: 'flins',
    name: 'Flins',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/flins-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/flins-2.jpg',
    description: 'A Lightkeeper of Nod-Krai, lone guardian of the lighthouse and graveyard on the Final Night Cemetery. Though appearing enigmatic and cold, he is a cultured and courtly gentleman, and one of the last of the Snowland Fae still in Nod-Krai.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flins'
  },
  {
    id: 'lauma',
    name: 'Lauma',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/lauma-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/lauma-2.jpg',
    description: 'As the Moonchanter of the Frostmoon Scions, Lauma is a well-respected and wise figure within the group, and trusted by all manners of wildlife. She is immeasurably kind and seeks to find a calm resolution to any conflict; though her steel will reveal itself should people mistake her benevolence for acquiescence.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lauma'
  },
  {
    id: 'ineffa',
    name: 'Ineffa',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/ineffa-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/ineffa-2.jpg',
    description: 'She is a creation of Aino, serving as an all-utility maid and battle automaton created from various scraps from across the nations. Her core originated from Ix Raq\'lapuj Chue\'q Buluk, the Eleventh of the Thirteen Sovereign Lords, as the part of her who wanted to abandon her vendetta against humanity and find a new place to belong.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ineffa'
  },
  {
    id: 'skirk',
    name: 'Skirk',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/skirk-1.png',
    detailImage: '/images/Genshin/Characters/5-star/skirk-2.jpg',
    description: 'A mysterious swordswoman hailing from beyond the skies, she was Tartaglia\'s master during his time in the Abyss and is the disciple of Surtalogi, one of the Five Sinners of Khaenri\'ah.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skirk'
  },
  {
    id: 'escoffier',
    name: 'Escoffier',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/escoffier-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/escoffier-2.jpg',
    description: 'Previously working at Hotel Debord, Escoffier is a renowned Fontainian chef that maintains extreme quality on her dishes. She is also feared for her ferocity due to these standards, scolding those who improperly waste food.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Escoffier'
  },
  {
    id: 'varesa',
    name: 'Varesa',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/varesa-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/varesa-2.jpg',
    description: 'An orchard manager hailing from the Collective of Plenty, Varesa has a generally easy-going lifestyle. In battle, she is a warrior of great strength and speed, dubbed as the "Masked Hero" by the children within her tribe. She is known to enjoy competitive eating, finishing tremendous amounts of food with the help of her unusually large appetite.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Varesa'
  },
  {
    id: 'mizuki',
    name: 'Yumemizuki Mizuki',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/yumemizuki mizuki-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/yumemizuki mizuki-2.jpg',
    description: 'She is a renowned clinical psychologist from Inazuma. After returning from Natlan, she became the core founding investor and major shareholder of Aisa Bathhouse. As a yumekui-baku, she has the ability to devour her patients\' nightmares, helping them to improve their mental health.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yumemizuki_Mizuki'
  },
  {
    id: 'traveler-aether',
    name: 'Traveler (Aether)',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo, Geo, Electro, Dendro, Hydro, Pyro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/traveler(aether)-1.png',
    detailImage: '/images/Genshin/Characters/5-star/traveler(aether)-2.png',
    description: 'The Traveler is the playable protagonist of Genshin Impact. In the opening cutscene, twin siblings from another world travel through the universe, until Asmoday blocked their path. The player gets to choose either Aether (male) or Lumine (female) as the Traveler and the Traveler\'s Sibling becomes captured.Their power to travel is sealed, leaving them stranded on Teyvat. They save Paimon by fishing her out of the water and she accompanies them as their new travel companion. Together they set out on a journey to find The Seven and reunite with the Traveler\'s lost sibling.Although players can choose the name they want to be referred by, the Traveler\'s Sibling refers to the Traveler by their real name, regardless of their custom name.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveler'
  },
  {
    id: 'traveler-lumine',
    name: 'Traveler (Lumine)',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo, Geo, Electro, Dendro, Hydro, Pyro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/traveler(lumine)-1.png',
    detailImage: '/images/Genshin/Characters/5-star/traveler(lumine)-2.png',
    description: 'The Traveler is the playable protagonist of Genshin Impact. In the opening cutscene, twin siblings from another world travel through the universe, until Asmoday blocked their path. The player gets to choose either Aether (male) or Lumine (female) as the Traveler and the Traveler\'s Sibling becomes captured.Their power to travel is sealed, leaving them stranded on Teyvat. They save Paimon by fishing her out of the water and she accompanies them as their new travel companion. Together they set out on a journey to find The Seven and reunite with the Traveler\'s lost sibling.Although players can choose the name they want to be referred by, the Traveler\'s Sibling refers to the Traveler by their real name, regardless of their custom name.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveler'
  },
  {
    id: 'citlali',
    name: 'Citlali',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/citlali-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/citlali-2.jpg',
    description: 'Bearing the Ancient Name Ukumbuko,[6][7] Citlali, also known as "Granny Itztli" among her fellow Masters of the Night-Wind, is a well-known and powerful shaman of the tribe who tends to live in seclusion. Although quick to anger and somewhat self-indulgent, she harbors a more self-conscious side to her personality.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Citlali'
  },
  {
    id: 'mavuika',
    name: 'Mavuika',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/mavuika-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/mavuika-2.jpg',
    description: 'Bearing the Ancient Name Kiongozi and known by her Goetic name Haborym, she is the current God of War and Pyro Archon of The Seven, presiding over Natlan.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mavuika'
  },
  {
    id: 'sigewinne',
    name: 'Sigewinne',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/sigewinne-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/sigewinne-2.jpg',
    description: 'Sigewinne is the resident head nurse of the Fortress of Meropide. In the past, Sigewinne chose to adopt a human appearance in order to save a young child she befriended at a time where Melusines were looked down upon. However, her transformation was against Fontaine laws, resulting in her conviction to the Fortress of Meropide.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sigewinne'
  },
  {
    id: 'chiori',
    name: 'Chiori',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/chiori-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/chiori-2.jpg',
    description: 'An independent designer hailing from Inazuma who strives to make her brand internationally recognized across all of Teyvat, Chiori is the industrious yet headstrong owner of Chioriya Boutique, a fashion label in Fontaine which has also served as an "intelligence boutique" for law enforcement. Steadfast in attaining what she wants, she refuses to change her ways and personality to conform with societal norms.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chiori'
  },
  {
    id: 'xianyun',
    name: 'Xianyun',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/xianyun-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/xianyun-2.jpg',
    description: 'Xianyun (Chinese: 闲云 Xiányún), also known by her adeptus name Cloud Retainer, is a playable Anemo character in Genshin Impact. Curious about what draws her disciples to Liyue Harbor, she has taken up residence in the city to see for herself',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xianyun'
  },
  {
    id: 'baizhu',
    name: 'Baizhu',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/baizhu-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/baizhu-2.jpg',
    description: 'The owner of Bubu Pharmacy and Qiqi\'s guardian, Dr. Baizhu is a master of the medicinal arts and the latest recipient of a generational contract with a white snake named Changsheng. He seeks to achieve immortality to ensure he is the last to ever bear his contract, saving potential inheritors and even Changsheng herself from the cost that comes with its power',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Baizhu'
  },
  {
    id: 'dehya',
    name: 'Dehya',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Claymore',
    image: '/images/Genshin/Characters/5-star/dehya-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/dehya-2.jpg',
    description: 'A fierce and strong warrior, the "Flame-Mane" Dehya is considered a legend among the Eremites for her might, passion, and conscientiousness. Unwilling to be trapped by the conditions that force most from the desert to stay there, she aspires to deliver hope back to the sands that she considers her home.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dehya'
  },
  {
    id: 'tighnari',
    name: 'Tighnari',
    rarity: Rarity.FIVE_STAR,
    element: 'Dendro',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/tighnari-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/tighnari-2.jpg',
    description: 'Tighnari is the stern Chief Officer of the Forest Rangers and Collei\'s mentor. Despite his intelligence, he prefers to live a solitary life in the depths of Avidya Forest rather than in the ivory tower of Sumeru Akademiya.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tighnari'
  },
  {
    id: 'albedo',
    name: 'Albedo',
    rarity: Rarity.FIVE_STAR,
    element: 'Geo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/albedo-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/albedo-2.jpg',
    description: 'A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Albedo'
  },
  {
    id: 'tartaglia',
    name: 'Tartaglia',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/tartaglia-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/tartaglia-2.jpg',
    description: 'He is the Eleventh of the Eleven Fatui Harbingers. Wherever he goes, danger follows, and Childe is always eager for a challenge, making him extremely dangerous despite being the youngest member.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tartaglia'
  },
  {
    id: 'mona',
    name: 'Mona',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/mona-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/mona-2.jpg',
    description: 'An astrologist of knowledgeable skill and high pride, Mona has settled in Mondstadt to avoid suffering the ire of her master after unwittingly reading the latter\'s diary.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mona'
  },
  {
    id: 'ayato',
    name: 'Kamisato Ayato',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/kamisato ayato-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/kamisato ayato-2.jpg',
    description: 'He is the current head of the Kamisato Clan, the older brother of Kamisato Ayaka, and the Yashiro Commissioner. Resourceful and cunning, Ayato keeps a lower profile than his sister and focuses on government affairs in the Commission.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kamisato_Ayato'
  },
  {
    id: 'shenhe',
    name: 'Shenhe',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Polearm',
    image: '/images/Genshin/Characters/5-star/shenhe-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/shenhe-2.jpg',
    description: 'The daughter of an unnamed exorcist couple, Shenhe was taken in and raised by Cloud Retainer as a disciple following a traumatic incident instigated by Shenhe\'s father during her childhood.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Shenhe'
  },
  {
    id: 'jean',
    name: 'Jean',
    rarity: Rarity.FIVE_STAR,
    element: 'Anemo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/jean-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/jean-2.jpg',
    description: 'The older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Jean'
  },
  {
    id: 'kokomi',
    name: 'Sangonomiya Kokomi',
    rarity: Rarity.FIVE_STAR,
    element: 'Hydro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/sangonomiya kokomi-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/sangonomiya kokomi-2.jpg',
    description: 'The young Divine Priestess of Watatsumi Island and a descendant of the Sangonomiya Clan, Kokomi is in charge of most of Watatsumi\'s affairs, shouldering heavy responsibilities alone in hopes for giving Watatsumi Island\'s people the hopes and happiness that they desire.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sangonomiya_Kokomi'
  },
  {
    id: 'yoimiya',
    name: 'Yoimiya',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/yoimiya-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/yoimiya-2.jpg',
    description: 'Yoimiya is the current owner of Naganohara Fireworks; with her colorful fireworks and outgoing personality, Yoimiya is loved by everyone on Narukami Island. She was coined as the "Queen of the Summer Festival," as they believe summer is not the same without her.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yoimiya'
  },
  {
    id: 'aloy',
    name: 'Aloy',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Bow',
    image: '/images/Genshin/Characters/5-star/aloy-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/aloy-2.jpg',
    description: 'She is the heroine from the Horizon series and was introduced as a limited-time collaboration and crossover character between Guerrilla Games and HoYoverse.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Aloy'
  },
  {
    id: 'klee',
    name: 'Klee',
    rarity: Rarity.FIVE_STAR,
    element: 'Pyro',
    weaponType: 'Catalyst',
    image: '/images/Genshin/Characters/5-star/klee-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/klee-2.jpg',
    description: 'The daughter of the intrepid and often quite destructive adventurer Alice, Klee takes after her mother in many ways, much to the dismay of the Knights of Favonius whom she has been entrusted to.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Klee'
  },
  {
    id: 'keqing',
    name: 'Keqing',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/keqing-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/keqing-2.jpg',
    description: 'As the Yuheng of the Liyue Qixing, she is someone who seeks her own answers instead of idly letting chaos run amok in Liyue. She chooses her own path with her own power and ability, instead of letting the gods determine her fate.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Keqing'
  },
  {
    id: 'qiqi',
    name: 'Qiqi',
    rarity: Rarity.FIVE_STAR,
    element: 'Cryo',
    weaponType: 'Sword',
    image: '/images/Genshin/Characters/5-star/qiqi-1.jpg',
    detailImage: '/images/Genshin/Characters/5-star/qiqi-2.jpg',
    description: 'Resurrected as a zombie by the adepti, she has ended up in Baizhu\'s care and now works at Bubu Pharmacy in Liyue Harbor.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Qiqi'
  },
  

  // --- 4 STARS (Notable) ---
  { id: 'bennett', name: 'Bennett', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Sword', image: '/images/Genshin/Characters/4-star/bennett-1.png', detailImage: '/images/Genshin/Characters/4-star/bennett-2.png', description: 'An unlucky adventurer.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bennett' },
  { id: 'xingqiu', name: 'Xingqiu', rarity: Rarity.FOUR_STAR, element: 'Hydro', weaponType: 'Sword', image: '/images/Genshin/Characters/4-star/xingqiu-1.jpg', detailImage: '//images/Genshin/Characters/4-star/xingqiu-2.jpg', description: 'A young commerce guild heir.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xingqiu' },
  { id: 'xiangling', name: 'Xiangling', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/xiangling-1.jpg', detailImage: 'images/Genshin/Characters/4-star/xiangling-2.jpg', description: 'A renowned chef from Liyue.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xiangling' },
  { id: 'fischl', name: 'Fischl', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Bow', image: 'images/Genshin/Characters/4-star/fischl-1.png', detailImage: '/images/Genshin/Characters/4-star/fischl-2.png', description: 'Prinzessin der Verurteilung.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fischl' },
  { id: 'kuki-shinobu', name: 'Kuki Shinobu', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Sword', image: 'images/Genshin/Characters/4-star/kuki shinobu-1.jpg', detailImage: '/images/Genshin/Characters/4-star/kuki shinobu-2.jpg', description: 'The capable deputy of the Arataki Gang.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kuki_Shinobu' },

  { id: 'aino', name: 'Aino', rarity: Rarity.FOUR_STAR, element: 'Hydro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/aino-1.jpg', detailImage: '/images/Genshin/Characters/4-star/aino-2.jpg', description: 'She is a child prodigy and the founder of the Clink-Clank Krumkake Craftshop who created Ineffa and many other intricate machinery. She is an orphan and sees her creations and screws as her "family."', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Aino' },
  { id: 'dahlia', name: 'Dhalia', rarity: Rarity.FOUR_STAR, element: 'Hydro', weaponType: 'sword', image: '/images/Genshin/Characters/4-star/dahlia-1.jpg', detailImage: '/images/Genshin/Characters/4-star/dahlia-2.jpg', description: 'Dahlia is a deacon from the Church of Favonius. Additionally, he serves as the Herald of Barbatos and is aware of Venti\'s identity as such, informing him of any notable events in the nation and relaying his feedback to the people of Mondstadt.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dahlia' },
  { id: 'ifa', name: 'Ifa', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/ifa-1.jpg', detailImage: '/images/Genshin/Characters/4-star/ifa-2.jpg', description: 'Ifa is a renowned Saurian veterinarian from the Flower-Feather Clan. He is friends with Ororon and often delivers vegetables to Citlali on his behalf.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ifa' },
  { id: 'iansan', name: 'Ianfan', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/iansan-1.jpg', detailImage: '/images/Genshin/Characters/4-star/iansan-2.jpg', description: 'Iansan is a fitness instructor and Pilgrimage of the Return of the Sacred Flame Champion Mentor from the Collective of Plenty. She bears the Ancient Name UWZ ("UWZ," Uwezo)', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Iansan' },
  { id: 'lan-yan', name: 'Lan Yan', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/lan yan-1.jpg', detailImage: '/images/Genshin/Characters/4-star/lan yan-2.jpg', description: 'She is a humble yet skilled rattan weaver, adept in the Qimen Arts, and a member of the Chenyu Vale Artisans Association. Her thoughtful perspective shines bright like silver to everyone she meets.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lan_Yan' },

  { id: 'ororon', name: 'Ororon', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/ororon-1.jpg', detailImage: '/images/Genshin/Characters/4-star/ororon-2.jpg', description: 'Born with an "incomplete" soul, Ororon is an oddball from the Masters of the Night-Wind who bears the Ancient Name BDI ("BDI," Bidii). He lives a humble life outside of the tribal grounds, tending to his vegetables and Phlogiston Aphids.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ororon' },
  { id: 'kachina', name: 'Kachina', rarity: Rarity.FOUR_STAR, element: 'Geo', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/kachina-1.jpg', detailImage: '/images/Genshin/Characters/4-star/kachina-2.jpg', description: 'Bearing the Ancient Name of UTBT ("UTBT," Uthabiti), Kachina is a young warrior belonging to the Children of Echoes who is determined to become strong in spite of the numerous failures she has experienced.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kachina' },
  { id: 'sethos', name: 'Sethos', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/sethos-1.jpg', detailImage: '/images/Genshin/Characters/4-star/sethos-2.jpg', description: 'He is the leader of the Temple of Silence and a former vessel of Hermanubis.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sethos' },
  { id: 'gaming', name: 'Gaming', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/gaming-1.jpg', detailImage: '/images/Genshin/Characters/4-star/gaming-2.jpg', description: 'Born in Qiaoying Village, Gaming left his birthplace after an impasse with his father to pursue his passion and become a professional Wushou dancer, training constantly to make the dance popular throughout Teyvat. However, with his dream career turning out to be financially unsustainable by itself, he also took up a job as a guard for the Sword and Strongbox Secure Transport Agency, primarily escorting goods and people to and from Yilong Wharf. His diligence and friendliness have earned him renown, and he is considered to be the best guard in the agency.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gaming' },
  { id: 'chevreuse', name: 'Chevreuse', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/chevreuse-1.jpg', detailImage: '/images/Genshin/Characters/4-star/chevreuse-2.jpg', description: 'She is the captain of the Maison Gardiennage\'s Special Security and Surveillance Patrol with an unorthodox yet firm sense of justice and approach to law enforcement.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chevreuse' },

  { id: 'charlotte', name: 'Charlotte', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/charlotte-1.jpg', detailImage: '/images/Genshin/Characters/4-star/charlotte-2.jpg', description: 'A journalist from The Steambird, Charlotte is always on the prowl for an exclusive scoop. Ever so relentless and indefatigable, she won\'t stop until she finds out the truth, even if she comes closer to danger.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Charlotte' },
  { id: 'freminet', name: 'Freminet', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/freminet-1.jpg', detailImage: '/images/Genshin/Characters/4-star/freminet-2.jpg', description: 'Despite his skill and experience as a professional diver, Freminet prefers to stay out of the spotlight, content to simply carry out orders and find peace next to the Tidalga and Romaritime Flowers underwater.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Freminet' },
  { id: 'lynette', name: 'Lynette', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Sword', image: '/images/Genshin/Characters/4-star/lynette-1.jpg', detailImage: '/images/Genshin/Characters/4-star/lynette-2.jpg', description: 'Quiet and reserved, Lynette functions as a magician\'s assistant to her brother Lyney. After their parents\' death and having been saved from an abusive noble by their "Father," Lynette has also served as "eyes" and "ears" for the House of the Hearth.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lynette' },
  { id: 'kirara', name: 'Kirara', rarity: Rarity.FOUR_STAR, element: 'Dendro', weaponType: 'Sword', image: '/images/Genshin/Characters/4-star/kirara-1.jpg', detailImage: '/images/Genshin/Characters/4-star/kirara-2.jpg', description: 'A youkai — a nekomata, specifically — Kirara is the Gold Level Courier of the Inazuma-based Komaniya Express. Her diligence in ensuring every package would be delivered to the right place has increased her company\'s renown and hers, making her the sole courier handling international deliveries. She enjoys every delivery she makes as she considers these outings for herself.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kirara' },
  { id: 'kaveh', name: 'Kaveh', rarity: Rarity.FOUR_STAR, element: 'Dendro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/kaveh-1.jpg', detailImage: '/images/Genshin/Characters/4-star/kaveh-2.jpg', description: 'The architect behind the Palace of Alcazarzaray, Kaveh was a student of the Kshahrewar Darshan of the Sumeru Akademiya and graduated with honors, earning the moniker "Light of Kshahrewar." Having become insolvent after the construction of the Palace of Alcazarzaray, he was forced to reside with Alhaitham, whom he has a complicated relationship with. In spite of the illustrious façade he maintains to outsiders, Kaveh is often saddled with guilt for his father\'s death, ashamed of his poverty, and struggling with realizing his ideals.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kaveh' },

  { id: 'mika', name: 'Mika', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/mika-1.jpg', detailImage: '/images/Genshin/Characters/4-star/mika-2.jpg', description: 'Huffman\'s younger brother and the front-line surveyor of the Knights of Favonius Reconnaissance Company led by Eula, Mika diligently fulfills all his tasks efficiently and dreams of becoming an expert cartographer in the future. In spite of his shyness towards other people, he eventually warms up to those close to him as he values teamwork immensely and desires learning from his colleagues.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mika' },
  { id: 'yaoyao', name: 'Yaoyao', rarity: Rarity.FOUR_STAR, element: 'Dendro', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/yaoyao-1.jpg', detailImage: '/images/Genshin/Characters/4-star/yaoyao-2.jpg', description: 'Hailing from a rural area not far from Qingce Village, Yaoyao grew up with nature at her side. Seeing potential in Yaoyao, Streetward Rambler took her in as her disciple, and Yaoyao left the tranquil mountains to live with her master in the bright and bustling Liyue Harbor.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yaoyao' },
  { id: 'faruzan', name: 'Faruzan', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/faruzan-1.jpg', detailImage: '/images/Genshin/Characters/4-star/faruzan-2.jpg', description: 'She is a renowned professor of the Sumeru Akademiya and member of the Haravatat Darshan. She recently returned to the Akademiya after solving a puzzle and escaping the ruins that trapped her a century ago.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Faruzan' },
  { id: 'layla', name: 'Layla', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Sword', image: '/images/Genshin/Characters/4-star/layla-1.jpg', detailImage: '/images/Genshin/Characters/4-star/layla-2.jpg', description: 'She is a student in the Rtawahist Darshan, specializing in Theoretical Astrology. Chronically sleep-deprived and of poor health as a result, Layla believes that "The Stars\' Blessing" is the reason she wakes from sleepwalking to find her papers fully completed.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Layla' },
  { id: 'candace', name: 'Candace', rarity: Rarity.FOUR_STAR, element: 'Hydro', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/candace-1.jpg', detailImage: '/images/Genshin/Characters/4-star/candace-2.jpg', description: 'The scion of Al-Ahmar and the Guardian of Aaru Village, Candace is kind to travelers who visit, but is unforgiving to those who violate the village\'s rules.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Candace' },

  { id: 'dori', name: 'Dori', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/dori-1.jpg', detailImage: '/images/Genshin/Characters/4-star/dori-2.jpg', description: 'The owner of The Palace of Alcazarzaray and a merchant of high regard, "Lord Sangemah Bay" is well known for her ability to obtain anything a person needs, as long as they have enough Mora to afford her jaw-dropping prices.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dori' },
  { id: 'collei', name: 'Collei', rarity: Rarity.FOUR_STAR, element: 'Dendro', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/collei-1.jpg', detailImage: '/images/Genshin/Characters/4-star/collei-2.jpg', description: 'She has appeared in the official Manga and serves as one of its main characters. Originally an Eleazar-afflicted victim of Fatui human experimentation, Collei wandered the world as a vagrant until she met Amber in Mondstadt. Since then, Collei has turned her life around, and currently serves as a trainee Forest Ranger in the Avidya Forest.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Collei' },
  { id: 'shikanoin-heizou', name: 'Shikanoin Heizou', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/shikanoin heizou-1.jpg', detailImage: '/images/Genshin/Characters/4-star/shikanoin heizou-2.jpg', description: 'He is the number one Tenryou Commission detective, harboring a rivalry with the Bantan Sango Detective Agency\'s Sango.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Shikanoin_Heizou' },
  { id: 'razor', name: 'Razor', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/razor-1.jpg', detailImage: '/images/Genshin/Characters/4-star/razor-2.jpg', description: 'Abandoned as an infant, Razor was taken in by the Wolf of the North Boreas and raised by his wolf pack in Wolvendom. After a chance encounter with Varka, the current Grand Master of the Knights of Favonius, he has slowly started integrating with humans again through the help of his teacher Lisa.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Razor' },
  { id: 'chongyun', name: 'Chongyun', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/chongyun-1.jpg', detailImage: '/images/Genshin/Characters/4-star/chongyun-2.jpg', description: 'Born with an excess of yang (positive) energy, Chongyun has become a highly effective exorcist in Liyue — so effective to the point where he hasn\'t seen a spirit himself, as they immediately flee when he approaches. The excessive yang energy also makes him particularly susceptible to heat and strong emotion, which has led to some rather unexpected results.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chongyun' },

  { id: 'diona', name: 'Diona', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/diona-1.jpg', detailImage: '/images/Genshin/Characters/4-star/diona-2.jpg', description: 'Despite being a bartender at the Cat\'s Tail, she loathes alcohol and will stop at nothing to ruin Mondstadt\'s wine industry — a feat easier said than done when her patrons absolutely love her drinks. She is the daughter of Draff, a hunter in Springvale.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Diona' },
  { id: 'xinyan', name: 'Xinyan', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/xinyan-1.jpg', detailImage: '/images/Genshin/Characters/4-star/xinyan-2.jpg', description: 'Rock \'n\' roll is a relatively unpopular style of music in Liyue, having recently been brought over from Fontaine. Xinyan, however, loves the sound — and she\'s slowly but surely amassing a fanbase of her own as she performs throughout Liyue Harbor.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xinyan' },
  { id: 'noelle', name: 'Noelle', rarity: Rarity.FOUR_STAR, element: 'Geo', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/noelle-1.jpg', detailImage: '/images/Genshin/Characters/4-star/noelle-2.jpg', description: 'Extremely strong and reliable, Noelle is considered to be "the maid of all maids" in the Knights of Favonius, with many thinking she has the ability to be everywhere all at once. She is stubborn, however, and willing to unnecessarily endanger her life at any moment to help someone. She has tried many times to join the ranks of the Knights of Favonius to accomplish her dream of becoming a full-fledged knight, but has fallen short every time so far.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Noelle' },
  { id: 'barbara', name: 'Barbara', rarity: Rarity.FOUR_STAR, element: 'Hydro', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/barbara-1.png', detailImage: '/images/Genshin/Characters/4-star/barbara-2.png', description: 'She is the deaconess of the Church of Favonius and a prominent "idol" after learning about them from the intrepid adventurer Alice. She is also the younger sister of the Acting Grand Master Jean.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Barbara' },
  { id: 'rosaria', name: 'Rosaria', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/rosaria-1.png', detailImage: '/images/Genshin/Characters/4-star/rosaria-2.png', description: 'The least devout among the nuns of the Church of Favonius, Rosaria prefers acting in the shadows rather than participating in the activities of the Church.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Rosaria' },

  { id: 'sucrose', name: 'Sucrose', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/sucrose-1.png', detailImage: '/images/Genshin/Characters/4-star/sucrose-2.png', description: 'An alchemist specializing in bio-alchemy, she also serves as an assistant for Albedo, the head alchemist of the Knights of Favonius.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sucrose' },
  { id: 'yanfei', name: 'Yanfei', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/yanfei-1.png', detailImage: '/images/Genshin/Characters/4-star/yanfei-2.png', description: 'One of the few half-illuminated-beasts who have not signed a contract with Rex Lapis, Yanfei nevertheless works for the betterment of Liyue as a premier legal adviser who values fairness.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yanfei' },
  { id: 'sayu', name: 'Sayu', rarity: Rarity.FOUR_STAR, element: 'Anemo', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/sayu-1.png', detailImage: '/images/Genshin/Characters/4-star/sayu-2.png', description: 'A ninja from the Shuumatsuban that is struggling with growing tall. Sayu believes that sleeping can help her growth, which is why she prefers to use her ninja techniques to hide and "laze around."', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sayu' },
  { id: 'thoma', name: 'Thoma', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/thoma-1.png', detailImage: '/images/Genshin/Characters/4-star/thoma-2.png', description: 'Hailing from Mondstadt, Thoma is the sociable and responsible housekeeper for the Kamisato Clan and a well-known "fixer" in Inazuma. Having amassed a powerful network of people, Thoma defends the rights and interests of the Yashiro Commission with utmost seriousness.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thoma' },
  { id: 'amber', name: 'Amber', rarity: Rarity.FOUR_STAR, element: 'Pyro', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/amber-1.png', detailImage: '/images/Genshin/Characters/4-star/amber-2.png', description: 'As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more challenging task. She can be obtained for free in the Archon Quest Wind-Riding Knight in Prologue: Act I - The Outlander Who Caught the Wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Amber' },

  { id: 'beidou', name: 'Beidou', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Claymore', image: '/images/Genshin/Characters/4-star/beidou-1.png', detailImage: '/images/Genshin/Characters/4-star/beidou-2.png', description: 'She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang — a trait that the other appreciates, yet grows irritated by.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Beidou' },
  { id: 'kaeya', name: 'Kaeya', rarity: Rarity.FOUR_STAR, element: 'Cryo', weaponType: 'Sword', image: '/images/Genshin/Characters/4-star/kaeya-1.png', detailImage: '/images/Genshin/Characters/4-star/kaeya-2.png', description: 'Kaeya is the Cavalry Captain of the Knights of Favonius. He is held in high regard by the people of Mondstadt — even with all his eccentricities and secrets. He is obtained for free in the Archon Quest Crash Course in Prologue: Act I - The Outlander Who Caught the Wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kaeya' },
  { id: 'ningguang', name: 'Ningguang', rarity: Rarity.FOUR_STAR, element: 'Geo', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/ningguang-1.png', detailImage: '/images/Genshin/Characters/4-star/ningguang-2.png', description: 'The Tianquan of the Liyue Qixing and owner of the floating Jade Chamber in the skies of Liyue, Ningguang is a mogul who shakes the very foundations of business circles. Even grabbing a few scraps from the documents she shreds from the Jade Chamber will gift one an invaluable fragment of her wisdom, enough to stay a step or two from one\'s peers.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ningguang' },
  { id: 'gorou', name: 'Gorou', rarity: Rarity.FOUR_STAR, element: 'Geo', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/gorou-1.png', detailImage: '/images/Genshin/Characters/4-star/gorou-2.png', description: 'He is a general of the Watatsumi Army. Courageous and reliable, his men know they can place their trust in him both on and off of the battlefield.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gorou' },
  { id: 'yun-jin', name: 'Yun Jin', rarity: Rarity.FOUR_STAR, element: 'Geo', weaponType: 'Polearm', image: '/images/Genshin/Characters/4-star/yun jin-1.png', detailImage: '/images/Genshin/Characters/4-star/yunjin-2.png', description: 'A famous figure in Liyue Harbor\'s opera scene, Yun Jin is the director of the Yun-Han Opera Troupe, and performs at Heyu Tea House from time to time. She is also a playwright, having written all the plays the Yun-Han Opera Troupe has performed in recent years, including a new ending for "The Divine Damsel of Devastation."', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Yun_Jin' },

  { id: 'kujou-sara', name: 'Kujou Sara', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Bow', image: '/images/Genshin/Characters/4-star/kujou sara-1.png', detailImage: '/images/Genshin/Characters/4-star/kujou sara-2.png', description: 'A tengu, Sara is the adopted daughter of the Kujou Clan of the Tenryou Commission. Loyal to both her clan and the Shogun, Sara carries out her orders by the Shogun\'s will.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kujou_Sara' },
  { id: 'lisa', name: 'Lisa', rarity: Rarity.FOUR_STAR, element: 'Electro', weaponType: 'Catalyst', image: '/images/Genshin/Characters/4-star/lisa-1.png', detailImage: '/images/Genshin/Characters/4-star/lisa-2.png', description: 'A powerful mage recognized as Sumeru Akademiya\'s most distinguished graduate in 200 years, Lisa has since returned to Mondstadt to become the humble Librarian of the Knights of Favonius.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lisa' }

];

export const genshinWeapons: Weapon[] = [
  // 5 Star Polearms
  { id: 'crimson-moons-semblance', name: "Crimson Moon's Semblance", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Genshin/Weapons/5-star/Crimson Moon Semblance.jpg', description: 'A keen-edged weapon, luster dazzling as the crimson moon. It is said that an ancient dynasty once regarded it as a ritual object that could bridge two worlds, but none still remember the beliefs and ceremonies of that bygone age.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crimson_Moon%27s_Semblance' },
  { id: 'staff-of-homa', name: "Staff of Homa", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Genshin/Weapons/5-star/Staff of Homa.png', description: 'Hu Tao\'s signature weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Staff_of_Homa' },
  { id: 'engulfing-lightning', name: "Engulfing Lightning", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/5-star/Engulfing Lightning.png', description: 'Raiden Shogun\'s signature weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Engulfing_Lightning' },
  { id: 'primordial-jade-winged-spear', name: "Primordial Jade Winged-Spear", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Genshin/Weapons/5-star/Primordial Jade Winged-Spear.png', description: 'Xiao\'s signature weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Primordial_Jade_Winged-Spear' },
  
  { id: 'bloodsoaked-ruins', name: "Bloodsoaked Ruins", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Bloodsoaked Ruins.png', description: 'A long spear tainted black by unrelenting battle, it shines with an ethereal glow beneath the ghostly blue light of the lantern-fire.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bloodsoaked_Ruins' },
  { id: 'polearm-5-6', name: "Fractured Halo", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Fractured Halo.png', description: 'A spinning mechanical blade produced by the Clink-Clank Krumkake Craftshop that seems to hide secrets from a bygone era...', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fractured_Halo' },
  { id: 'polearm-5-7', name: "Symphonist of Scents", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Symphonist of Scents.png', description: 'An elegantly built polearm, said to have been a conductor\'s baton wielded by a great musician to bridge tune and taste.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Symphonist_of_Scents' },
  { id: 'polearm-5-8', name: "Lumidouce Elegy", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Lumidouce Elegy.png', description: 'A magnificent polearm adorned with azure crystal. It is said to have been a certain legendary Champion Duelist\'s treasure — and yet, not once was it ever used.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lumidouce_Elegy' },
  
  { id: 'polearm-5-9', name: "Staff of the Scarlet Sands", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Staff of the Scarlet Sands.png', description: 'One of a paired set of scepters fashioned from obsidian. Legend has it that these staves grant the right to lead the people of the desert, but no retainer now lives who can verify the proper appearance of these regalia.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Staff_of_the_Scarlet_Sands' },
  { id: 'polearm-5-10', name: "Vortex Vanquisher", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Vortex Vanquisher.png', description: 'This sharp polearm can seemingly pierce through anything. When swung, one can almost see the rift it tears in the air.    ', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Vortex_Vanquisher' },
  { id: 'polearm-5-11', name: "Calamity Queller", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Calamity Queller.png', description: 'A keenly honed weapon forged from some strange crystal. Its faint blue light seems to whisper of countless matters now past.', moreDetailsUrl: 'http://genshin-impact.fandom.com/wiki/Calamity_Queller' },
  { id: 'polearm-5-12', name: "Skyward Spine", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/5-star/Skyward Spine.png', description: 'A polearm that symbolizes Dvalin\'s fire resolve. The upright shaft of this weapon points towards the heavens, clad in the might of sky and wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyward_Spine' },
  




  // 5 Star Swords
  { id: 'splendor-of-tranquil-waters', name: "Splendor of Tranquil Waters", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Genshin/Weapons/5-star/Splendor of Tranquil Waters.png', description: 'Furina\'s signature sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Splendor_of_Tranquil_Waters' },
  { id: 'mistsplitter-reforged', name: "Mistsplitter Reforged", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Genshin/Weapons/5-star/Mistsplitter Reforged.png', description: 'Ayaka\'s signature sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mistsplitter_Reforged' },
  { id: 'freedom-sworn', name: "Freedom-Sworn", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/5-star/Freedom-Sworn.png', description: 'Kazuha\'s signature sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Freedom-Sworn' },
  
  { id: 'sword-5-4', name: "Azurelight", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Azurelight.png', description: 'This blade was once pure and pristine as a white dawn star, but it has since been tinted a deep, dark blue.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Azurelight' },
  { id: 'sword-5-5', name: "Peak Patrol Song", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/5-star/Peak Patrol Song.png', description: 'An obsidian blade of unparalleled sharpness, light as a song. It was modified by a certain artisan to come equipped with a record-playing detachable Phlogiston Device.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Peak_Patrol_Song' },
  { id: 'sword-5-6', name: "Absolution", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Absolution.png', description: 'A rapier once wielded by a deceiver who had forsaken everything. In the past, it was primarily used as a tool when he had to disguise his identity.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Absolution' },
  { id: 'sword-5-7', name: "Uraku Misugiri", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Uraku Misugiri.png', description: 'This famous blade was once created by the hand of Urakusai, the renowned literato. Legend has it that it has never cut any living creature in all these hundreds of years.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Uraku_Misugiri' },
  
  { id: 'sword-5-8', name: "Light of Foliar Incision", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Light of Foliar Incision.png', description: 'This gilded blade was made using precious white branches. It was once used to destroy countless poisons that infested the forest.', moreDetailsUrl: 'http://genshin-impact.fandom.com/wiki/Light_of_Foliar_Incision' },
  { id: 'sword-5-9', name: "Key of Khaj-Nisut", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/5-star/Key of Khaj-Nisut.png', description: 'One of a paired set of scepters fashioned from obsidian. They say that this can be used as a key to open the gate to a paradise that lies at the end of the ocean of sand.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Key_of_Khaj-Nisut' },
  { id: 'sword-5-10', name: "Aquila Favonia", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/5-star/Aquila Favonia.png', description: 'The soul of the Knights of Favonius. Millennia later, it still calls on the winds of swift justice to vanquish all evil — just like the last heroine who wielded it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Aquila_Favonia' },
  { id: 'sword-5-11', name: "Primordial Jade Cutter", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Primordial Jade Cutter.png', description: 'A ceremonial sword masterfully carved from pure jade. There almost seems to be an audible sigh in the wind as it is swung.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Primordial_Jade_Cutter' },
  
  { id: 'sword-5-12', name: "Haran Geppaku Futsu", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Haran Geppaku Futsu.png', description: 'A famed work by the Futsu line of smiths. The name "Haran" comes from the manner in which it resembles the violent, roiling waves.', moreDetailsUrl: 'http://genshin-impact.fandom.com/wiki/Haran_Geppaku_Futsu' },
  { id: 'sword-5-13', name: "Summit Shaper", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Summit Shaper.png', description: 'A symbol of a legendary pact, this sharp blade once cut off the peak of a mountain.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Summit_Shaper' },
  { id: 'sword-5-14', name: "Skyward Blade", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/5-star/Skyward Blade.png', description: 'The sword of a knight that symbolizes the restored honor of Dvalin. The blessings of the Anemo Archon rest on the fuller of the blade, imbuing the sword with the powers of the sky and the wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyward_Blade' },
  





  // 5 Star Claymores
  { id: 'verdict', name: "Verdict", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Genshin/Weapons/5-star/Verdict.png', description: 'Navia\'s signature claymore.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Verdict' },
  { id: 'wolfs-gravestone', name: "Wolf's Gravestone", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Wolf\'s Gravestone.png', description: 'Diluc\'s signature claymore.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wolf%27s_Gravestone' },
  { id: 'fang-of-the-mountain-king', name: "Fang of the Mountain King", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Genshin/Weapons/5-star/Fang of the Mountain King.png', description: 'Kinich\'s signature claymore.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fang_of_the_Mountain_King' },

  { id: 'claymore-5-4', name: "A Thousand Blazing Suns", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/A Thousand Blazing Suns.png', description: 'A greatsword that dazzles like the rising sun. It has witnessed the extinguishing and rekindling of innumerable suns.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Thousand_Blazing_Suns' },
  { id: 'claymore-5-5', name: "Beacon of the Reed Sea", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Beacon of the Reed Sea.png', description: 'A large, flat-tipped sword designed in to fit as the weapon of an ancient king or some ceremonial instrument.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Beacon_of_the_Reed_Sea' },
  { id: 'claymore-5-6', name: "Redhorn Stonethresher", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Redhorn Stonethresher.png', description: 'According to its previous owner, this weapon is the "Mighty Redhorn Stoic Stonethreshing Gilded Goldcrushing Lion Lord" that can send any monster packing with its tail between its legs.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Redhorn_Stonethresher' },
  { id: 'claymore-5-7', name: "Song of Broken Pines", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/5-star/Song of Broken Pines.png', description: 'A greatsword as light as the sigh of grass in the breeze, yet as merciless to the corrupt as a typhoon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Song_of_Broken_Pines' },

  { id: 'claymore-5-8', name: "The Unforged", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/The Unforged.png', description: 'Capable of driving away evil spirits and wicked people alike, this edgeless claymore seems to possess divine might.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Unforged' },
  { id: 'claymore-5-9', name: "Skyward Pride", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/5-star/Skyward Pride.png', description: 'A claymore that symbolizes the pride of Dvalin soaring through the skies. When swung, it emits a deep hum as the full force of Dvalin\'s command of the sky and the wind is unleashed.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyward_Pride' },
  






  // 5 Star Catalysts
  { id: 'tome-of-the-eternal-flow', name: "Tome of the Eternal Flow", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Genshin/Weapons/5-star/Tome of the Eternal Flow.png', description: 'Neuvillette\'s signature catalyst.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tome_of_the_Eternal_Flow' },
  { id: 'a-thousand-floating-dreams', name: "A Thousand Floating Dreams", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/5-star/A Thousand Floating Dreams.png', description: 'Nahida\'s signature catalyst.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Thousand_Floating_Dreams' },
  
  { id: 'catalyst-5-3', name: "Reliquary of Truth", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Reliquary of Truth.png', description: 'An angular box carved from gold and jade. Legend has it that it was once enshrined in a temple deep within Tulaytullah, the Sapphire City.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Reliquary_of_Truth' },
  { id: 'catalyst-5-4', name: "Nightweaver's Looking Glass", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/5-star/Nightweaver\'s Looking Glass.png', description: 'A mirror crafted from flawless silver that is said to have witnessed the birth of the Moon Maiden. It is seen as a relic of unrivalled provenance by the Frostmoon Scions.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nightweaver%27s_Looking_Glass' },
  { id: 'catalyst-5-5', name: "Vivid Notions", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Vivid Notions.png', description: 'A trophy made from gemstones from the Collective of Plenty and crystals from the Flower-Feather Clan. It is said to have once belonged to a legendary wrestler.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Vivid_Notions' },
  { id: 'catalyst-5-6', name: "Sunny Morning Sleep-In", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/5-star/Sunny Morning Sleep-In.png', description: 'A bell lantern forged from purple jade. They say it brings sweet dreams when placed beside one\'s pillow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sunny_Morning_Sleep-In' },

  { id: 'catalyst-5-7', name: "Starcaller's Watch", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/5-star/Starcaller\'s Watch.png', description: 'A statue carved in the shape of an eagle, a sacred relic of the Masters of the Night-Wind that has been passed down from generation to generation.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Starcaller%27s_Watch' },
  { id: 'catalyst-5-8', name: "Surf's Up", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Surf\'s Up.png', description: 'A commemorative item originally reserved for the champion of the "First All-Tribe Surfing Championship." Since said tournament is currently in the preparatory stage, the prize is in temporary storage at the Leisurely Puffer, with the shop owner as its custodian.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Surf%27s_Up' },
  { id: 'catalyst-5-9', name: "Crane's Echoing Call", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Crane\'s Echoing Call.png', description: 'A fan carved from pure jade, around which swirls an ancient aura of adeptal energy.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crane%27s_Echoing_Call' },
  { id: 'catalyst-5-10', name: "Cashflow Supervision", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Cashflow Supervision.png', description: 'A floating device that can monitor certain phenomena. It was picked up and modified to serve other purposes following its abandonment.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cashflow_Supervision' },

  { id: 'catalyst-5-11', name: "Jadefall's Splendor", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/5-star/Jadefall\'s Splendor.png', description: 'A ritual vessel carved from jade that reflects the luster of the skies and the clear waters.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Jadefall%27s_Splendor' },
  { id: 'catalyst-5-12', name: "Tulaytullah's Remembrance", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Tulaytullah\'s Remembrance.png', description: 'A bell crafted of deep sapphire and sterling silver. Its echoes are as crisp as they are distant.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tulaytullah%27s_Remembrance' },
  { id: 'catalyst-5-13', name: "Kagura's Verity", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Kagura\'s Verity.png', description: 'The bells used when performing the Kagura Dance, blessed by the Guuji herself. The scent of the Sacred Sakura tree lingers on it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kagura%27s_Verity' },
  { id: 'catalyst-5-14', name: "Memory of Dust", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Memory of Dust.png', description: 'A stone dumbbell containing distant memories. Its endless transformations reveal the power within.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Memory_of_Dust' },

  { id: 'catalyst-5-15', name: "Skyward Atlas", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Skyward Atlas.png', description: 'A cloud atlas symbolizing Dvalin and his former master, the Anemo Archon. It details the winds and clouds of the northern regions and contains the powers of the sky and wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyward_Atlas' },
  { id: 'catalyst-5-16', name: "Lost Prayer to the Sacred Winds", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Lost Prayer to the Sacred Winds.png', description: 'An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lost_Prayer_to_the_Sacred_Winds' },
  { id: 'catalyst-5-17', name: "Everlasting Moonglow", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/5-star/Everlasting Moonglow.png', description: 'A string of lovely jasper from the deep sea. It shines with a pure radiance like that of the moon, and just as ever-distant.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Everlasting_Moonglow' },






  // 5 Star Bows
  { id: 'aqua-simulacra', name: "Aqua Simulacra", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Genshin/Weapons/5-star/Aqua Simulacra.png', description: 'Yelan\'s signature bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Aqua_Simulacra' },
  { id: 'the-first-great-magic', name: "The First Great Magic", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Genshin/Weapons/5-star/The First Great Magic.png', description: 'Lyney\'s signature bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_First_Great_Magic' },
  { id: 'elegy-for-the-end', name: "Elegy for the End", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/5-star/Elegy for the End.png', description: 'Venti\'s signature bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Elegy_for_the_End' },

  { id: 'bow-5-4', name: "Astral Vulture's Crimson Plumage", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Astral Vulture\'s Crimson Plumage.png', description: 'An ancient longbow crested with red feathers, a sacred relic of the Flower-Feather Clan that has been passed down from generation to generation.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Astral_Vulture%27s_Crimson_Plumage' },
  { id: 'bow-5-5', name: "Silvershower Heartstrings", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/5-star/Silvershower Heartstrings.png', description: 'Legendary bow of the fairies. Whether on the stage or the battlefield, it can easily touch the hearts of the listener.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Silvershower_Heartstrings' },
  { id: 'bow-5-6', name: "Hunter's Path", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Hunter\'s Path.png', description: 'This gilded bow was made using precious white branches. It has felled countless wicked beasts attempting to infiltrate the woods.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Hunter%27s_Path' },
  { id: 'bow-5-7', name: "Thundering Pulse", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/5-star/Thundering Pulse.png', description: 'A longbow that was a gift from the Shogun. Eternal lightning crackles all around it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thundering_Pulse' },

  { id: 'bow-5-8', name: "Amos' Bow", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/5-star/Amos\' Bow.png', description: 'An extremely ancient bow that has retained its power despite its original master being long gone. It draws power from everyone and everything in the world, and the further away you are from that which your heart desires, the more powerful it is.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Amos%27_Bow' },
  { id: 'bow-5-9', name: "Skyward Harp", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Skyward Harp.png', description: 'A greatbow that symbolizes Dvalin\'s affiliation with the Anemo Archon. The sound of the bow firing is music to the Anemo Archon\'s ears. It contains the power of the sky and wind within.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyward_Harp' },
  { id: 'bow-5-10', name: "Polar Star", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/5-star/Polar Star.png', description: 'A pristine bow that is as sharp as the glaciers of the far north.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Polar_Star' },








  // 4 Star sword
  { id: 'favonius-sword', name: "Favonius Sword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Favonius Sword.png', description: 'Standard Knight sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Favonius_Sword' },

  { id: 'sword-4-2', name: "Moonweaver's Dawn", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Moonweaver\'s Dawn.png', description: 'An immaculate, sharp silver sword that can slice through armor like moonlight flowing through the empty night. According to legend, it is a divine blade, blessed by the first Moonchanter herself.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Moonweaver%27s_Dawn' },
  { id: 'sword-4-3', name: "Serenity's Call", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Serenity\'s Call.png', description: 'A longsword forged from metal that makes a mournful sound when swung.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Serenity%27s_Call' },
  { id: 'sword-4-4', name: "Calamity of Eshu", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Calamity of Eshu.png', description: 'A ceremonial blade forged by Sanhaj, the great high priest of the Masters of the Night-Wind. In tales of bygone days, Sanhaj could use this curved blade to perform rituals, blurring the boundary between the Night Kingdom and the present world.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Calamity_of_Eshu' },
  { id: 'sword-4-5', name: "Sturdy Bone", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Sturdy Bone.png', description: 'A longsword made of bone that has only grown harder after being hit and swung countless times. It is said that this was the hero Wanjiru\'s reliable weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sturdy_Bone' },
  { id: 'sword-4-6', name: "Flute of Ezpitzal", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/4-star/Flute of Ezpitzal.png', description: 'A peculiarly shaped jade longsword that has been passed down amongst the Masters of the Night-Wind as a "priestly flute."', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flute_of_Ezpitzal' },
  { id: 'sword-4-7', name: "Sword of Narzissenkreuz", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Sword of Narzissenkreuz.png', description: 'A sword whose power faded when the story ended. It will now embark upon a new journey with the power that remains within it, which commemorates a certain great dream.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sword_of_Narzissenkreuz' },

  { id: 'sword-4-8', name: "The Dockhand's Assistant", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/The Dockhand\'s Assistant.png', description: 'A convenient cutting tool that you can rarely find nowadays. You can replace the blades as they are dulled by usage.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Dockhand%27s_Assistant' },
  { id: 'sword-4-9', name: "Wolf-Fang", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Wolf-Fang.png', description: 'Legend has it that this longsword was once used by a wandering knight in the distant past.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wolf-Fang' },
  { id: 'sword-4-10', name: "Fleuve Cendre Ferryman", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Fleuve Cendre Ferryman.png', description: 'A handy length of abandoned copper pipe that was once used as a weapon. It was famous — or infamous, depending — in some circles.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fleuve_Cendre_Ferryman' },
  { id: 'sword-4-11', name: "Finale of the Deep", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Finale of the Deep.png', description: 'This longsword is as silent as the mysterious ocean depths. It is even more ancient than its stylings might imply.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Finale_of_the_Deep' },
  { id: 'sword-4-12', name: "Toukabou Shigure", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Toukabou Shigure.png', description: 'A rather special oil-paper umbrella. While long wanderings may make one used to the wind and the rain, there might be some fun in admiring a rainy scene beneath this parasol.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Toukabou_Shigure' },
  { id: 'sword-4-13', name: "Xiphos' Moonlight", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Xiphos\' Moonlight.png', description: 'This ancient double-edged sword glimmers with moonlight. It is said that a now-silent Jinni dwells within it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Xiphos%27_Moonlight' },

  { id: 'sword-4-14', name: "Sapwood Blade", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Sapwood Blade.png', description: 'It has taken on the shape of a blade that can cut down the foes of the forest.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sapwood_Blade' },
  { id: 'sword-4-15', name: "Kagotsurube Isshin", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Kagotsurube Isshin.png', description: 'This famed blade was born in a nation to the far north. But in the name of "Isshin," it was stained with many a dark deed on its home-bound journey.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kagotsurube_Isshin' },
  { id: 'sword-4-16', name: "Blackcliff Longsword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/Blackcliff Longsword.png', description: 'A sword made of blackstone. It has a dark crimson glow on its black blade.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blackcliff_Longsword' },
  { id: 'sword-4-17', name: "The Black Sword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/The Black Sword.png', description: 'A pitch-black longsword that thirsts for violence and conflict. It is said that this weapon can cause its user to become drunk on the red wine of slaughter.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Black_Sword' },
  { id: 'sword-4-18', name: "Sword of Descension", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Sword of Descension.png', description: 'A sword of unique craftsmanship. It does not appear to belong to this world.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sword_of_Descension' },
  { id: 'sword-4-19', name: "Iron Sting", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Iron Sting.png', description: 'An exotic long-bladed rapier that somehow found its way into Liyue via foreign traders. It is light, agile, and sharp.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Iron_Sting' },

  { id: 'sword-4-20', name: "Cinnabar Spindle", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/4-star/Cinnabar Spindle.png', description: 'A sword made from materials that do not belong in this world. The power within might even be able to withstand the corruption of a venom that could corrode a mighty dragon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cinnabar_Spindle' },
  { id: 'sword-4-21', name: "Prototype Rancour", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/4-star/Prototype Rancour.png', description: 'An ancient longsword discovered in the Blackcliff Forge that cuts through rocks like a hot knife through butter.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prototype_Rancour' },
  { id: 'sword-4-22', name: "Festering Desire", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Festering Desire.png', description: 'A creepy straight sword that almost seems to yearn for life. It drips with a shriveling venom that could even corrupt a mighty dragon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Festering_Desire' },
  { id: 'sword-4-23', name: "The Flute", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/The Flute.png', description: 'Beneath its rusty exterior is a lavishly decorated thin blade. It swings as swiftly as the wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Flute' },
  { id: 'sword-4-24', name: "Sacrificial Sword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Sacrificial Sword.png', description: 'A ceremonial sword that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sacrificial_Sword' },
  { id: 'sword-4-25', name: "The Alley Flash", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/The Alley Flash.png', description: 'A straight sword as black as the night. It once belonged to a thief who roamed the benighted streets.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Alley_Flash' },

  { id: 'sword-4-26', name: "Royal Longsword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Royal Longsword.png', description: 'An old longsword that belonged to the erstwhile rulers of Mondstadt. Exquisitely crafted, the carvings and embellishments testify to the stature of its owner.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Royal_Longsword' },
  { id: 'sword-4-27', name: "Amenoma Kageuchi", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Amenoma Kageuchi.png', description: 'A blade custom made for a famed samurai who could strike down a tengu warrior, known for their incredible agility, in midair.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Amenoma_Kageuchi' },
  { id: 'sword-4-28', name: "Lion's Roar", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Lion\'s Roar.png', description: 'A sharp blade with extravagant carvings that somehow does not compromise on durability and sharpness. It roars like a lion as it cuts through the air.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lion%27s_Roar' },
  





  
  //4 star claymore
  { id: 'claymore-4-1', name: "Master Key", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Master Key.png', description: 'A heavy greatsword with a razor-sharp blade. Power is a key that can open almost any lock.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Master_Key' },
  { id: 'claymore-4-2', name: "Flame-Forged Insight", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Flame-Forged Insight.png', description: 'Tribal tales tell of a great blade forged by the People of the Springs to protect a child who would embark on a distant journey. This particular weapon appears to be a replica of that legendary sword.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flame-Forged_Insight' },
  { id: 'claymore-4-3', name: "Fruitful Hook", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Fruitful Hook.png', description: 'Bold Burkina from the Scions of the Canopy once made this weapon with the hero Tenoch\'s help — all for the sake of obtaining Flamegranates unmatched throughout Natlan.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fruitful_Hook' },

  { id: 'claymore-4-4', name: "Earth Shaker", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Earth Shaker.png', description: 'A heavy blade that people claim was beloved by the hero known as the Firethief. They say that even the Lord of Cinder Keep\'s flames could not burn it away.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Earth_Shaker' },
  { id: 'claymore-4-5', name: "Ultimate Overlord's Mega Magic Sword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Ultimate Overlord\'s Mega Magic Sword.png', description: 'A magical sword that can only be wielded by the ultimate overlord who rules the seas. As it has been made with special water-resistant materials, it will not get ruined by water damage even after being immersed. Why, one might even call it invincible!', moreDetailsUrl: 'http://genshin-impact.fandom.com/wiki/%22Ultimate_Overlord%27s_Mega_Magic_Sword%22' },
  { id: 'claymore-4-6', name: "Portable Power Saw", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Portable Power Saw.png', description: 'An old-school power saw that you can rarely find nowadays. It was once a cutting tool trusted by workers all around.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Portable_Power_Saw' },
  { id: 'claymore-4-7', name: "Talking Stick", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Talking Stick.png', description: 'Most people will find this obsidian-inlaid club quite convincing indeed.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Talking_Stick' },
  { id: 'claymore-4-8', name: "Tidal Shadow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Tidal Shadow.png', description: 'An exquisitely-crafted. standard-model sword forged for the high-ranking officers and flagship captains of Fontaine\'s old navy.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tidal_Shadow' },
  { id: 'claymore-4-9', name: "Mailed Flower", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Mailed Flower.png', description: 'A graceful and elegant greatsword that is decorated with flowers and ribbons.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mailed_Flower' },

  { id: 'claymore-4-10', name: "Makhaira Aquamarine", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Makhaira Aquamarine.png', description: 'An ancient greatsword that gleams like the waters themselves. A thousand years of sand erosion has not dulled its unnaturally sharp edge one bit.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Makhaira_Aquamarine' },
  { id: 'claymore-4-11', name: "Forest Regalia", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Forest Regalia.png', description: 'It has taken on the shape of a greatsword that shall cut down the foes of the forest', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Forest_Regalia' },
  { id: 'claymore-4-12', name: "Blackcliff Slasher", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/Blackcliff Slasher.png', description: 'An extremely sturdy greatsword from the Blackcliff Forge. It has a dark crimson color from the blade to the pommel.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blackcliff_Slasher' },
  { id: 'claymore-4-13', name: "Snow-Tombed Starsilver", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/4-star/Snow-Tombed Starsilver.png', description: 'An ancient greatsword that was stored between frescoes. Forged from Starsilver, it has the power to cleave through ice and snow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Snow-Tombed_Starsilver' },
  { id: 'claymore-4-14', name: "Rainslasher", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Rainslasher.png', description: 'A fluorescent greatsword with no sharp edge that crushes enemies with brute force and raw power.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Rainslasher' },
  { id: 'claymore-4-15', name: "The Bell", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/The Bell.png', description: 'A heavy greatsword. A clock is embedded within it, though its internal mechanisms have long been damaged.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Bell' },

  { id: 'claymore-4-16', name: "Prototype Archaic", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Prototype Archaic.png', description: 'An ancient greatsword discovered in the Blackcliff Forge. It swings with such an immense force that one feels it could cut straight through reality itself.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prototype_Archaic' },
  { id: 'claymore-4-17', name: "Favonius Greatsword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Favonius Greatsword.png', description: 'A heavy ceremonial sword of the Knights of Favonius. It channels elemental power easily and is highly destructive.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Favonius_Greatsword' },
  { id: 'claymore-4-18', name: "Luxurious Sea-Lord", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Luxurious Sea-Lord.png', description: 'The great king of the ocean. Having been air-dried, it makes for a fine weapon as well as emergency sustenance.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Luxurious_Sea-Lord' },
  { id: 'claymore-4-19', name: "Serpent Spine", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Serpent Spine.png', description: 'A rare weapon whose origin is the ancient ocean. One can hear the sound of the ageless waves as one swings it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Serpent_Spine' },
  { id: 'claymore-4-20', name: "Sacrificial Greatsword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Sacrificial Greatsword.png', description: 'A ceremonial greatsword that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sacrificial_Greatsword' },
  { id: 'claymore-4-21', name: "Whiteblind", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/4-star/Whiteblind.png', description: 'An exotic sword with one section of the blade left blunt. It made its way into Liyue via the hands of foreign traders. Incredibly powerful in the hands of someone who knows how to use it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Whiteblind' },

  { id: 'claymore-4-22', name: "Katsuragikiri Nagamasa", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Katsuragikiri Nagamasa.png', description: 'A blade that was once made in Tatarasuna. Heavy and tough.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Katsuragikiri_Nagamasa' },
  { id: 'claymore-4-23', name: "Akuoumaru", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Akuoumaru.png', description: 'The beloved sword of the legendary "Akuou." The blade is huge and majestic, but is surprisingly easy to wield.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Akuoumaru' },
  { id: 'claymore-4-24', name: "Royal Greatsword", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Royal Greatsword.png', description: 'An old greatsword that belonged to the erstwhile rulers of Mondstadt. It is made from the finest-quality materials and has stood the test of time. A weapon for use by royals only.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Royal_Greatsword' },
  { id: 'claymore-4-25', name: "Lithic Blade", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Lithic Blade.png', description: 'A greatsword carved and chiseled from the very bedrock of Liyue.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lithic_Blade' },

  






  //4-star bow
  { id: 'bow-4-1', name: "Snare Hook", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Snare Hook.png', description: 'The stave of this bow is comprised of metal alloy and yet remains surprisingly light. Even when faced with thick, heavy snares, the arrows it fires can pass through unhindered.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Snare_Hook' },
  { id: 'bow-4-2', name: "Sequence of Solitude", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Sequence of Solitude.png', description: 'A mechanical longbow purpose-built for long shots and silent kills. Its twang is swallowed up amidst the night. the note lengthy and cold.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sequence_of_Solitude' },
  { id: 'bow-4-3', name: "Flower-Wreathed Feathers", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Flower-Wreathed Feathers.png', description: 'A longbow that burns like a flame. The feathers that adorn it are said to have come from the ancient tyrant Ngoubou.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flower-Wreathed_Feathers' },

  { id: 'bow-4-4', name: "Chain Breaker", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Chain Breaker.png', description: 'A jade-adorned longbow. The gentle winds always seem to swirl gently about its string. Legends claim that this weapon was made in a far more ancient era by a dragon artisan.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Chain_Breaker' },
  { id: 'bow-4-5', name: "Cloudforged", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Cloudforged.png', description: 'A prototype for a standard-issue weapon the Yuheng commissioned from Blackcliff Forge after having analyzed the ancient mechanisms that protected the adeptal abode upon Tianheng.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cloudforged' },
  { id: 'bow-4-6', name: "Range Gauge", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Range Gauge.png', description: 'A measuring instrument that you can rarely find nowadays. It is capable of firing arrows.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Range_Gauge' },
  { id: 'bow-4-7', name: "Scion of the Blazing Sun", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Scion of the Blazing Sun.png', description: 'An ancient longbow that is a remnant of King Deshret\'s ancient era. An indecipherable ancient text and solemn patterns have been carved into it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Scion_of_the_Blazing_Sun' },
  { id: 'bow-4-8', name: "Song of Stillness", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Song of Stillness.png', description: 'A strange longbow that resembles a sea creature. Its string makes no sound at all.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Song_of_Stillness' },
  { id: 'bow-4-9', name: "Ibis Piercer", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Ibis Piercer.png', description: 'A golden bow forged from the description in the story. If you use it as a normal weapon, you can also view it as a part of a fictional world that has made it off the pages.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ibis_Piercer' },

  { id: 'bow-4-10', name: "King's Squire", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/King\'s Squire.png', description: 'It has taken on the shape of a bow that can shoot the enemies of the forest down.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/King%27s_Squire' },
  { id: 'bow-4-11', name: "End of the Line", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/End of the Line.png', description: 'This seems to be a now-extinct fish. Its body is sufficiently elastic that a string may be attached to it to let it serve as a bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/End_of_the_Line' },
  { id: 'bow-4-12', name: "Fading Twilight", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Fading Twilight.png', description: 'A precious bow made of platinum, inlaid with an orb that shimmers with the light of eventide.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fading_Twilight' },
  { id: 'bow-4-13', name: "Blackcliff Warbow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/Blackcliff Warbow.png', description: 'A bow made of blackstone that features extremely sturdy bow limbs. It requires an archer with a strong bow arm to use.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blackcliff_Warbow' },
  { id: 'bow-4-14', name: "Windblume Ode", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Windblume Ode.png', description: 'A bow adorned with nameless flowers that bears the earnest hopes of an equally nameless person.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Windblume_Ode' },
  { id: 'bow-4-15', name: "Compound Bow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/4-star/Compound Bow.png', description: 'An exotic metallic bow from a distant land. Though extremely difficult to maintain, it is easy to nock and fires with tremendous force.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Compound_Bow' },

  { id: 'bow-4-16', name: "Prototype Crescent", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Prototype Crescent.png', description: 'A prototype longbow discovered in the Blackcliff Forge. The arrow fired from this bow glimmers like a ray of moonlight.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prototype_Crescent' },
  { id: 'bow-4-17', name: "Favonius Warbow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Favonius Warbow.png', description: 'A standard-issue recurve bow of the Knights of Favonius. Only the best archers can unleash its full potential.', moreDetailsUrl: 'http://genshin-impact.fandom.com/wiki/Favonius_Warbow' },
  { id: 'bow-4-18', name: "The Viridescent Hunt", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/The Viridescent Hunt.png', description: 'A pure green hunting bow. This once belonged to a certain hunter whose home was the forest.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Viridescent_Hunt' },
  { id: 'bow-4-19', name: "The Stringless", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/The Stringless.png', description: 'A bow that once served as an extraordinary instrument. It is no longer capable of getting people up and dancing.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Stringless' },
  { id: 'bow-4-20', name: "Sacrificial Bow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Sacrificial Bow.png', description: 'A ceremonial hunting bow that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sacrificial_Bow' },
  { id: 'bow-4-21', name: "Hamayumi", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Hamayumi.png', description: 'A certain shrine maiden once owned this warbow. It was made with surpassing skill, and is both intricate and sturdy.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Hamayumi' },

  { id: 'bow-4-22', name: "Mouun's Moon", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Mouun\'s Moon.png', description: 'A lovely warbow made from seashells and coral. A mournful brilliance flows along its moonlight-colored arms.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mouun%27s_Moon' },
  { id: 'bow-4-23', name: "Alley Hunter", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Alley Hunter.png', description: 'An intricate, opulent longbow. It once belonged to a gentleman thief who was never caught.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Alley_Hunter' },
  { id: 'bow-4-24', name: "Predator", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Predator.png', description: 'A uniquely designed bow. This should not belong in this world.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Predator' },
  { id: 'bow-4-25', name: "Rust", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Rust.png', description: 'A completely rusted iron greatbow. The average person would lack the strength to even lift it, let alone fire it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Rust' },
  { id: 'bow-4-26', name: "Mitternachts Waltz", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/4-star/Mitternachts Waltz.png', description: 'A bow painted the color of transgression and nights of illusion.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mitternachts_Waltz' },
  { id: 'bow-4-27', name: "Royal Bow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Royal Bow.png', description: 'An old royal longbow that belonged to the erstwhile rulers of Mondstadt. Countless generations later, the bowstring is still tight and can still fire arrows with great force.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Royal_Bow' },







  //4 star Catalyst
  { id: 'catalyst-4-1', name: "Dawning Frost", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/Dawning Frost.png', description: 'A silver-forged ritual vessel, pure and completely without blemish. It is said to be a sacred relic passed down for generations among the priestesses of the far north.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dawning_Frost' },
  { id: 'catalyst-4-2', name: "Etherlight Spindlelute", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Etherlight Spindlelute.png', description: 'A lute whose golden strings are as radiant as sunlight. It appears to be a relic from the Seelie of old.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Etherlight_Spindlelute' },
  { id: 'catalyst-4-3', name: "Blackmarrow Lantern", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Blackmarrow Lantern.png', description: 'A lantern that emits a faint, ghostly glow, contained by a midnight-black alloy that resembles interlocking bones. It is said to have once been revered as a precious treasure by a certain secret organization.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blackmarrow_Lantern' },
  { id: 'catalyst-4-4', name: "Waveriding Whirl", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Waveriding Whirl.png', description: 'A boomerang made from the fangs of a giant sea serpent. It was a rare weapon indeed that the giant Tupac would call "trusty."', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Waveriding_Whirl' },
  { id: 'catalyst-4-5', name: "Ring of Yaxche", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Ring of Yaxche.png', description: 'This jade vessel was created by a hero of yesteryear. Legend has it that it once shot the giant dragon that dwelt in the volcano down from the skies.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ring_of_Yaxche' },
  { id: 'catalyst-4-6', name: "Ash-Graven Drinking Horn", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Ash-Graven Drinking Horn.png', description: 'A ritual vessel passed down amongst the Meztli. They say that this was once a treasure much-valued, yet never used, by the hero "Giant" Tupac.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ash-Graven_Drinking_Horn' },

  { id: 'catalyst-4-7', name: "Ballad of the Boundless Blue", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Ballad of the Boundless Blue.png', description: 'An anthology of exquisite poetry. It contains quite a few poems beloved by Mondstadters, concerning the skies, dandelions, and other such topics.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ballad_of_the_Boundless_Blue' },
  { id: 'catalyst-4-8', name: "Sacrificial Jade", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Sacrificial Jade.png', description: 'An ancient jade pendant that gleams like clear water. It seems to have been used in ancient ceremonies.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sacrificial_Jade' },
  { id: 'catalyst-4-9', name: "Flowing Purity", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Flowing Purity.png', description: 'A strangely-shaped anthology of scripts. All the scripts written by Coppelius are recorded within.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flowing_Purity' },
  { id: 'catalyst-4-10', name: "Wandering Evenstar", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Wandering Evenstar.png', description: 'This was originally a device used by researchers to observe and perform calculations on celestial phenomena. It serves as a conduit and catalyst.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wandering_Evenstar' },
  { id: 'catalyst-4-11', name: "Fruit of Fulfillment", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Fruit of Fulfillment.png', description: 'It holds the potential to conquer any crisis.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fruit_of_Fulfillment' },
  { id: 'catalyst-4-12', name: "Blackcliff Agate", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/Blackcliff Agate.png', description: 'A mysterious catalyst made of blackstone. It has an ominous crimson glow that seems to pulse in synchronization with the tremors from deep within the earth.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blackcliff_Agate' },

  { id: 'catalyst-4-13', name: "Prototype Amber", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Prototype Amber.png', description: 'A dully gilded catalyst secretly guarded in the Blackcliff Forge. It seems to glow with the very light from the sky.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prototype_Amber' },
  { id: 'catalyst-4-14', name: "Oathsworn Eye", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Oathsworn Eye.png', description: 'A national treasure of Byakuyakoku stored in the Dainichi Mikoshi. With the coming of the Serpent God, this item was used to notarize great oaths and wishes.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Oathsworn_Eye' },
  { id: 'catalyst-4-15', name: "Favonius Codex", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Favonius Codex.png', description: 'A secret tome that belonged to the scholars of the Knights of Favonius. It describes the logic and power of elements and matter.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Favonius_Codex' },
  { id: 'catalyst-4-16', name: "Sacrificial Fragments", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Sacrificial Fragments.png', description: 'A weathered script, the text of which is no longer legible. A cursed item eroded by the winds of time.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sacrificial_Fragments' },
  { id: 'catalyst-4-17', name: "Hakushin Ring", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Hakushin Ring.png', description: 'A catalyst that carries the memory of the Kitsune Saiguu of ancient times. However, this device is but an impoverished vessel for the full breadth of her thought.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Hakushin_Ring' },
  { id: 'catalyst-4-18', name: "The Widsith", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/The Widsith.png', description: 'A heavy notebook filled with musical scores. Though suffering from moth damage and heavy wear-and-tear, there is still much power to be found among the hand-written words within.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Widsith' },

  { id: 'catalyst-4-19', name: "Wine and Song", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Wine and Song.png', description: 'A songbook from the bygone aristocratic era, whose composer has become forgotten. It chronicles the tale of a certain heroic outlaw.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wine_and_Song' },
  { id: 'catalyst-4-20', name: "Eye of Perception", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Eye of Perception.png', description: 'A dim black glaze pearl that is said to have the power to reach the purity of one\'s heart.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Eye_of_Perception' },
  { id: 'catalyst-4-21', name: "Frostbearer", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Frostbearer.png', description: 'A fruit that possesses a strange, frosty will. A faint sense of agony emanates from it.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Frostbearer' },
  { id: 'catalyst-4-22', name: "Royal Grimoire", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Royal Grimoire.png', description: 'A book that once belonged to a royal mage of Mondstadt. It contains faithful and comprehensive historical accounts as well as magic spells.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Royal_Grimoire' },
  { id: 'catalyst-4-23', name: "Dodoco Tales", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Dodoco Tales.png', description: 'A children\'s book filled with childish short stories at which one cannot help but laugh. Even those readers who have long reached adulthood cannot help but be absorbed by the innocent, naive little adventures portrayed within.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dodoco_Tales' },
  { id: 'catalyst-4-24', name: "Solar Pearl", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Solar Pearl.png', description: 'A dull, golden pearl made of an unknown substance that harbors the light of the sun and the moon, and pulses with a warm strength.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Solar_Pearl' },

  { id: 'catalyst-4-25', name: "Mappa Mare", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Mappa Mare.png', description: 'A nautical chart featuring nearby currents and climates that somehow found its way into Liyue via foreign traders.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mappa_Mare' },
  
  
  




  //4 star Polearm
  { id: 'the-catch', name: "The Catch", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/The Catch.png', description: 'Best F2P polearm.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/%22The_Catch%22' },

  { id: 'polearm-4-2', name: "Sacrificer's Staff", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Sacrificer\'s Staff.png', description: 'A silver-white polearm, pure and completely without blemish. Legend has it that it was used by the Archpriestesses of Hyperborea in ages past to guide their flock of Frostmoon Scions.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sacrificer%27s_Staff' },
  { id: 'polearm-4-3', name: "Prospector's Shovel", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Prospector\'s Shovel.png', description: 'A polearm that appears to have been crafted from a metal agricultural tool. At first glance, it could not look more ordinary, yet its discreet design hides fittings that are both lavish and undeniably exquisite.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prospector%27s_Shovel' },
  { id: 'polearm-4-4', name: "Tamayuratei no Ohanashi", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Tamayuratei no Ohanashi.png', description: 'Once upon a time, there was a youkai that roamed Inazuma in the form of a lantern\'s name. This must once have been one of its vessels.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tamayuratei_no_Ohanashi' },
  { id: 'polearm-4-5', name: "Mountain-Bracing Bolt", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Mountain-Bracing Bolt.png', description: 'This polearm was once jointly forged by the craftsmen in the mines as a sacrifice to the spirits of the mountains.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mountain-Bracing_Bolt' },

  { id: 'polearm-4-6', name: "Footprint of the Rainbow", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/4-star/Footprint of the Rainbow.png', description: 'A keen polearm forged from jade. It gives off rainbow-hued light when exposed to sunlight.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Footprint_of_the_Rainbow' },
  { id: 'polearm-4-7', name: "Dialogues of the Desert Sages", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Dialogues of the Desert Sages.png', description: 'A caduceus symbolizing the glory of alchemy, made from special alloys to match its special status. It is exceedingly rigid and heavy, and would probably hurt pretty bad if used as a cudgel.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dialogues_of_the_Desert_Sages' },
  { id: 'polearm-4-8', name: "Prospector's Drill", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Prospector\'s Drill.png', description: 'A long-handled drill that you can rarely find nowadays. It was often used in delving and in carving stones.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prospector%27s_Drill' },
  { id: 'polearm-4-9', name: "Ballad of the Fjords", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Ballad of the Fjords.png', description: 'A polearm used by those seeking to catch fish in the tundra. It lets none escape.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ballad_of_the_Fjords' },
  { id: 'polearm-4-10', name: "Rightful Reward", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/4-star/Rightful Reward.png', description: 'A sharp spear. Only its tip remains freshly bloodstained.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Rightful_Reward' },
  { id: 'polearm-4-11', name: "Missive Windspear", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Missive Windspear.png', description: 'A beacon that shows the direction of the wind. Not every idyll carried on the breeze remains a gentle thing...', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Missive_Windspear' },

  { id: 'polearm-4-12', name: "Moonpiercer", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Moonpiercer.png', description: 'It is shaped like a giant arrow and can be used as a spear.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Moonpiercer' },
  { id: 'polearm-4-13', name: "Dragonspine Spear", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/4-star/Dragonspine Spear.png', description: 'A spear created from the fang of a dragon. It is oddly warm to the touch.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dragonspine_Spear' },
  { id: 'polearm-4-14', name: "Blackcliff Pole", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/4-star/Blackcliff Pole.png', description: 'A weapon made of blackstone and aerosiderite. There is a dark crimson glow on its cold black sheen.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blackcliff_Pole' },
  { id: 'polearm-4-15', name: "Prototype Starglitter", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Prototype Starglitter.png', description: 'A grudge discovered in the Blackcliff Forge. The glimmers along the sharp edge are like stars in the night.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prototype_Starglitter' },
  { id: 'polearm-4-16', name: "Favonius Lance", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/4-star/Favonius Lance.png', description: 'A polearm made in the style of the Knights of Favonius. Its shaft is straight, and its tip flows lightly like the wind.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Favonius_Lance' },
  { id: 'polearm-4-17', name: "Crescent Pike", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/4-star/Crescent Pike.png', description: 'An exotic weapon with an extremely long blade on the top and a crescent blade at the bottom. It found its way into Liyue through foreign traders. With practice, it can deal heavy damage.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crescent_Pike' },

  { id: 'polearm-4-18', name: "Wavebreaker's Fin", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Wavebreaker\'s Fin.png', description: 'A naginata forged from luminscent material deep in the ocean depths. It was once the possession of the tengu race.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wavebreaker%27s_Fin' },
  { id: 'polearm-4-19', name: "Royal Spear", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Royal Spear.png', description: 'This polearm was once cherished by a member of the old nobility that governed Mondstadt long ago. Although it has never seen the light of day, it is still incomparably sharp.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Royal_Spear' },
  { id: 'polearm-4-20', name: "Kitain Cross Spear", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Kitain Cross Spear.png', description: 'A special lance that was once used by a famed warrior who guarded the Tatarigami on Yashiori Island.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Kitain_Cross_Spear' },
  { id: 'polearm-4-21', name: "Lithic Spear", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/4-star/Lithic Spear.png', description: 'A spear forged from the rocks of the Guyun Stone Forest. Its hardness knows no equal.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lithic_Spear' },
  { id: 'polearm-4-22', name: "Dragon's Bane", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/4-star/Dragon\'s Bane.png', description: 'A polearm decorated with an entwining golden dragon. Light and sharp, this weapon may very well kill dragons with ease.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dragon%27s_Bane' },
  { id: 'polearm-4-23', name: "Deathmatch", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/4-star/Deathmatch.png', description: 'A sharp crimson polearm that was once a gladiator\'s priceless treasure. Its awl has been stained by the blood of countless beasts and men.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Deathmatch' },






  //3 star sword
  { id: 'sword-3-1', name: "Harbinger of Dawn", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/3-star/Harbinger of Dawn.png', description: 'A sword that once shone like the sun. The wielder of this sword will be blessed with a "feel-good" buff. The reflective material on the blade has long worn off.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Harbinger_of_Dawn' },
  { id: 'sword-3-2', name: "Skyrider Sword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/3-star/Skyrider Sword.png', description: 'A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword...', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyrider_Sword' },
  { id: 'sword-3-3', name: "Dark Iron Sword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/3-star/Dark Iron Sword.png', description: 'A perfectly ordinary iron sword, just slightly darker than most.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dark_Iron_Sword' },
  { id: 'sword-3-4', name: "Traveler's Handy Sword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/3-star/Traveler\'s Handy Sword.png', description: 'A handy steel sword which contains scissors, a magnifying glass, tinder, and other useful items in its sheath.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveler%27s_Handy_Sword' },
  { id: 'sword-3-5', name: "Fillet Blade", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/3-star/Fillet Blade.png', description: 'A sharp filleting knife. The blade is long, thin, and incredibly sharp.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fillet_Blade' },
  { id: 'sword-3-6', name: "Cool Steel", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/3-star/Cool Steel.png', description: 'A reliable steel-forged weapon that serves as a testament to the great adventures of its old master.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cool_Steel' },





  //3 star Claymore
  { id: 'claymore-3-1', name: "Skyrider Greatsword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'PHY DMG', image: '/images/Genshin/Weapons/3-star/Skyrider Greatsword.png', description: 'A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword... for the second time.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Skyrider_Greatsword' },
  { id: 'claymore-3-2', name: "Ferrous Shadow", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/3-star/Ferrous Shadow.png', description: 'A replica of the famed sword of Arundolyn, the Lion of Light. Feel the power of a legendary hero as you hold this sword in your hand! Imagine yourself as the great warrior himself! Note: Daydreaming not recommended in live combat.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ferrous_Shadow' },
  { id: 'claymore-3-3', name: "White Iron Greatsword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Genshin/Weapons/3-star/White Iron Greatsword.png', description: 'A claymore made from white iron. Lightweight without compromising on power. Effective even when wielded by one of average strength, it is extremely deadly in the hands of a physically stronger wielder.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/White_Iron_Greatsword' },
  { id: 'claymore-3-4', name: "Bloodtainted Greatsword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/3-star/Bloodtainted Greatsword.png', description: 'A steel sword that is said to have been coated with dragon blood, rendering it invulnerable to damage. This effect is not extended to its wielder, however.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bloodtainted_Greatsword' },
  { id: 'claymore-3-5', name: "Debate Club", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/3-star/Debate Club.png', description: 'A handy club made of fine steel. The most persuasive line of reasoning in any debater\'s arsenal.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Debate_Club' },





  //3 star Bow
  { id: 'bow-3-1', name: "Raven Bow", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/3-star/Raven Bow.png', description: 'Ravens are known to be the ferrymen of the dead. This bow\'s limb is decorated with raven feathers, which forebode the imminent death of its target.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Raven_Bow' },
  { id: 'bow-3-2', name: "Sharpshooter's Oath", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/3-star/Sharpshooter\'s Oath.png', description: 'This superior bow once belonged to a master archer. However, it gives off a strong scent, thus making it unsuitable for hunting.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sharpshooter%27s_Oath' },
  { id: 'bow-3-3', name: "Slingshot", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/3-star/Slingshot.png', description: 'A bow, despite the name. After countless experiments and improvements to the design, the creator of the ultimate slingshot found himself to have made what was actually a bow.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Slingshot' },
  { id: 'bow-3-4', name: "Recurve Bow", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/3-star/Recurve Bow.png', description: 'It is said that this bow can shoot down eagles in flight, but ultimately how true that is depends on the skill of the archer.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Recurve_Bow' },
  { id: 'bow-3-5', name: "Messenger", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Genshin/Weapons/3-star/Messenger.png', description: 'A basic wooden bow. It is said to have once been used as a tool for long-distance communication.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Messenger' },





  //3 star catalyst
  { id: 'catalyst-3-1', name: "Magic Guide", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/3-star/Magic Guide.png', description: 'Version 12. A reprint featuring corrections to Version 11 and brand-new additions based on recent developments.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Magic_Guide' },
  { id: 'catalyst-3-2', name: "Thrilling Tales of Dragon Slayers", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/3-star/Thrilling Tales of Dragon Slayers.png', description: 'A fictional story of a band of five heroes who go off on a dragon hunt. It is poorly written and structurally incoherent. Its value lies in the many lessons that can be learned from failure.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thrilling_Tales_of_Dragon_Slayers' },
  { id: 'catalyst-3-3', name: "Emerald Orb", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'EM', image: '/images/Genshin/Weapons/3-star/Emerald Orb.png', description: 'A catalyst carved out of the hard jade from Jueyun Karst north of Liyue. Small, light, and durable, it is known more colloquially as the "jade ball."', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Emerald_Orb' },
  { id: 'catalyst-3-4', name: "Twin Nephrite", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/3-star/Twin Nephrite.png', description: 'A jade pendant formed by piecing together two jade stones.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Twin_Nephrite' },
  { id: 'catalyst-3-5', name: "Otherworldly Story", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Genshin/Weapons/3-star/Otherworldly Story.png', description: 'A cheap fantasy novel with no value whatsoever. Any claim that it possesses the power of catalysis is also pure fantasy.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Otherworldly_Story' },





  //3 star polearm
  { id: 'polearm-3-1', name: "Black Tassel", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Genshin/Weapons/3-star/Black Tassel.png', description: 'An exceptionally powerful polearm that also offers a simple but elegant solution to the issue of the easily stained white tassel.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Black_Tassel' },
  { id: 'polearm-3-2', name: "Halberd", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Genshin/Weapons/3-star/Halberd.png', description: 'A polearm with an axe blade mounted on top that can deal quite a lot of damage. It\'s favored by the Millelith officers.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Halberd' },
  { id: 'polearm-3-3', name: "White Tassel", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Genshin/Weapons/3-star/White Tassel.png', description: 'A standard-issue weapon of the Millelith soldiers. It has a sturdy shaft and sharp spearhead. It\'s a reliable weapon.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/White_Tassel' },






  //2 star
  { id: 'sword-2', name: "Silver Sword", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/2-star/Silver Sword.png', description: 'A sword for chasing away demons. Everyone knows it\'s made of a silver alloy, not pure silver.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Silver_Sword' },
  { id: 'claymore-2', name: "Old Merc's Pal", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/2-star/Old Merc\'s Pal.png', description: 'A battle-tested greatsword that has seen better days and worse.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Old_Merc%27s_Pal' },
  { id: 'bow-2', name: "Seasoned Hunter's Bow", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/2-star/Seasoned Hunter\'s Bow.png', description: 'A bow that has been well-polished by time and meticulously cared for by its owner. It feels almost like an extension of the archer\'s arm.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Seasoned_Hunter%27s_Bow' },
  { id: 'catalyst-2', name: "Pocket Grimoire", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/2-star/Pocket Grimoire.png', description: 'A carefully compiled notebook featuring the essentials needed to pass a magic exam.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Pocket_Grimoire' },
  { id: 'polearm-2', name: "Iron Point", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/2-star/Iron Point.png', description: 'Sharp and pointy at one end, it is a balanced weapon that is quite popular among travelers.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Iron_Point' },





  //1 star
  { id: 'sword-1', name: "Dull Blade", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/1-star/Dull Blade.png', description: 'Youthful dreams and the thrill of adventure. If this isn\'t enough, then make it up with valiance.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dull_Blade' },
  { id: 'claymore-1', name: "Waster Greatsword", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/1-star/Waster Greatsword.png', description: 'A sturdy sheet of iron that may be powerful enough to break apart mountains, if wielded with enough willpower.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Waster_Greatsword' },
  { id: 'bow-1', name: "Hunter's Bow", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/1-star/Hunter\'s Bow.png', description: 'A hunter\'s music consists of but two sounds: the twang of the bowstring and the whoosh of soaring arrows.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Hunter%27s_Bow' },
  { id: 'catalyst-1', name: "Apprentice's Notes", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/1-star/Apprentice\'s Notes.png', description: 'Notes left behind by a top student. Many useful spells are listed, and the handwriting is beautiful.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Apprentice%27s_Notes' },
  { id: 'polearm-1', name: "Beginner's Protector", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: '-', image: '/images/Genshin/Weapons/1-star/Beginner\'s Protector.png', description: 'A polearm as straight as a flag pole. Well suited to most combat situations, it has an imposing presence when swung.', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Beginner%27s_Protector' }



];

export const genshinArtifacts: ArtifactSet[] = [
  {
    id: 'artifact-5-1',
    name: 'Gladiator\'s Finale',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Gladiator\'s Finale.png',
    pieceImages: ['/images/Genshin/Artifact_set/Gladiator\'s Finale-1.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-2.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-3.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-4.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-5.png'],
    description: 'If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gladiator%27s_Finale'
  },
  {
    id: 'artifact-5-2',
    name: 'Wanderer\'s Troupe',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Wanderer\'s Troupe.png',
    pieceImages: ['/images/Genshin/Artifact_set/Wanderer\'s Troupe-1.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-2.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-3.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-4.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-5.png'],
    description: 'Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wanderer%27s_Troupe'
  },
  {
    id: 'artifact-5-3',
    name: 'Noblesse Oblige',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Noblesse Oblige.png',
    pieceImages: ['/images/Genshin/Artifact_set/Noblesse Oblige-1.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-2.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-3.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-4.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-5.png'],
    description: 'Using an Elemental Burst increases all party members\' ATK by 20% for 12s. This effect cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Noblesse_Oblige'
  },
  {
    id: 'artifact-5-4',
    name: 'Bloodstained Chivalry',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Bloodstained Chivalry.png',
    pieceImages: ['/images/Genshin/Artifact_set/Bloodstained Chivalry-1.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-2.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-3.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-4.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-5.png'],
    description: 'After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bloodstained_Chivalry'
  },
  {
    id: 'artifact-5-5',
    name: 'Maiden Beloved',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Maiden Beloved.png',
    pieceImages: ['/images/Genshin/Artifact_set/Maiden Beloved-1.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-2.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-3.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-4.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-5.png'],
    description: 'Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Maiden_Beloved'
  },
  {
    id: 'artifact-5-6',
    name: 'Viridescent Venerer',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Viridescent Venerer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Viridescent Venerer-1.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-2.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-3.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-4.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-5.png'],
    description: 'Increases Swirl DMG by 60%. Decreases opponent\'s Elemental RES to the element infused in the Swirl by 40% for 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Viridescent_Venerer'
  },
  {
    id: 'artifact-5-7',
    name: 'Archaic Petra',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Archaic Petra.png',
    pieceImages: ['/images/Genshin/Artifact_set/Archaic Petra-1.png',
      '/images/Genshin/Artifact_set/Archaic Petra-2.png',
      '/images/Genshin/Artifact_set/Archaic Petra-3.png',
      '/images/Genshin/Artifact_set/Archaic Petra-4.png',
      '/images/Genshin/Artifact_set/Archaic Petra-5.png'],
    description: 'Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Archaic_Petra'
  },
  {
    id: 'artifact-5-8',
    name: 'Retracing Bolide',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Retracing Bolide.png',
    pieceImages: ['/images/Genshin/Artifact_set/Retracing Bolide-1.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-2.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-3.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-4.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-5.png'],
    description: 'While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Retracing_Bolide'
  },
  {
    id: 'artifact-5-9',
    name: 'Thundersoother',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Thundersoother.png',
    pieceImages: ['/images/Genshin/Artifact_set/Thundersoother-1.png',
      '/images/Genshin/Artifact_set/Thundersoother-2.png',
      '/images/Genshin/Artifact_set/Thundersoother-3.png',
      '/images/Genshin/Artifact_set/Thundersoother-4.png',
      '/images/Genshin/Artifact_set/Thundersoother-5.png'],
    description: 'Increases DMG against opponents affected by Electro by 35%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thundersoother'
  },
  {
    id: 'artifact-5-10',
    name: 'Thundering Fury',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Thundering Fury.png',
    pieceImages: ['/images/Genshin/Artifact_set/Thundering Fury-1.png',
      '/images/Genshin/Artifact_set/Thundering Fury-2.png',
      '/images/Genshin/Artifact_set/Thundering Fury-3.png',
      '/images/Genshin/Artifact_set/Thundering Fury-4.png',
      '/images/Genshin/Artifact_set/Thundering Fury-5.png'],
    description: 'Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%, and the DMG caused by Lunar-Charged by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thundering_Fury'
  },
  {
    id: 'artifact-5-11',
    name: 'Lavawalker',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Lavawalker.png',
    pieceImages: ['/images/Genshin/Artifact_set/Lavawalker-1.png',
      '/images/Genshin/Artifact_set/Lavawalker-2.png',
      '/images/Genshin/Artifact_set/Lavawalker-3.png',
      '/images/Genshin/Artifact_set/Lavawalker-4.png',
      '/images/Genshin/Artifact_set/Lavawalker-5.png'],
    description: 'Increases DMG against opponents affected by Pyro by 35%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lavawalker'
  },
  {
    id: 'artifact-5-12',
    name: 'Crimson Witch of Flames',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Crimson Witch of Flames.png',
    pieceImages: ['/images/Genshin/Artifact_set/Crimson Witch of Flames-1.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-2.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-3.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-4.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-5.png'],
    description: 'Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crimson_Witch_of_Flames'
  },
  {
    id: 'artifact-5-13',
    name: 'Blizzard Strayer',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Blizzard Strayer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Blizzard Strayer-1.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-2.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-3.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-4.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-5.png'],
    description: 'When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blizzard_Strayer'
  },
  {
    id: 'artifact-5-14',
    name: 'Heart of Depth',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Heart of Depth.png',
    pieceImages: ['/images/Genshin/Artifact_set/Heart of Depth-1.png',
      '/images/Genshin/Artifact_set/Heart of Depth-2.png',
      '/images/Genshin/Artifact_set/Heart of Depth-3.png',
      '/images/Genshin/Artifact_set/Heart of Depth-4.png',
      '/images/Genshin/Artifact_set/Heart of Depth-5.png'],
    description: 'After using an Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Heart_of_Depth'
  },
  {
    id: 'artifact-5-15',
    name: 'Tenacity of the Millelith',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Tenacity of the Millelith.png',
    pieceImages: ['/images/Genshin/Artifact_set/Tenacity of the Millelith-1.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-2.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-3.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-4.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-5.png'],
    description: 'When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tenacity_of_the_Millelith'
  },
  {
    id: 'artifact-5-16',
    name: 'Pale Flame',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Pale Flame.png',
    pieceImages: ['/images/Genshin/Artifact_set/Pale Flame-1.png',
      '/images/Genshin/Artifact_set/Pale Flame-2.png',
      '/images/Genshin/Artifact_set/Pale Flame-3.png',
      '/images/Genshin/Artifact_set/Pale Flame-4.png',
      '/images/Genshin/Artifact_set/Pale Flame-5.png'],
    description: 'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Pale_Flame'
  },
  {
    id: 'artifact-5-17',
    name: 'Shimenawa\'s Reminiscence',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence.png',
    pieceImages: ['/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-1.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-2.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-3.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-4.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-5.png'],
    description: 'When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Shimenawa%27s_Reminiscence'
  },
  {
    id: 'artifact-5-18',
    name: 'Emblem of Severed Fate',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Emblem of Severed Fate.png',
    pieceImages: ['/images/Genshin/Artifact_set/Emblem of Severed Fate-1.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-2.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-3.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-4.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-5.png'],
    description: 'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Emblem_of_Severed_Fate'
  },
  {
    id: 'artifact-5-19',
    name: 'Husk of Opulent Dreams',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Husk of Opulent Dreams.png',
    pieceImages: ['/images/Genshin/Artifact_set/Husk of Opulent Dreams-1.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-2.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-3.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-4.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-5.png'],
    description: 'A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Husk_of_Opulent_Dreams'
  },
  {
    id: 'artifact-5-20',
    name: 'Ocean-Hued Clam',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Ocean-Hued Clam.png',
    pieceImages: ['/images/Genshin/Artifact_set/Ocean-Hued Clam-1.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-2.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-3.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-4.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-5.png'],
    description: 'When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ocean-Hued_Clam'
  },
  {
    id: 'artifact-5-21',
    name: 'Vermillion Hereafter',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Vermillion Hereafter.png',
    pieceImages: ['/images/Genshin/Artifact_set/Vermillion Hereafter-1.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-2.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-3.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-4.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-5.png'],
    description: 'After using an Elemental Burst, this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character\'s HP decreases, their ATK will further increase by 10%. This increase can occur this way maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Vermillion_Hereafter'
  },
  {
    id: 'artifact-5-22',
    name: 'Echoes of an Offering',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Echoes of an Offering.png',
    pieceImages: ['/images/Genshin/Artifact_set/Echoes of an Offering-1.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-2.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-3.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-4.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-5.png'],
    description: 'When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Echoes_of_an_Offering'
  },
  {
    id: 'artifact-5-23',
    name: 'Deepwood Memories',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Deepwood Memories.png',
    pieceImages: ['/images/Genshin/Artifact_set/Deepwood Memories-1.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-2.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-3.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-4.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-5.png'],
    description: 'After Elemental Skills or Bursts hit opponents, the targets\' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Deepwood_Memories'
  },
  {
    id: 'artifact-5-24',
    name: 'Gilded Dreams',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Gilded Dreams.png',
    pieceImages: ['/images/Genshin/Artifact_set/Gilded Dreams-1.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-2.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-3.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-4.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-5.png'],
    description: 'Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gilded_Dreams'
  },
  {
    id: 'artifact-5-25',
    name: 'Desert Pavilion Chronicle',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Desert Pavilion Chronicle.png',
    pieceImages: ['/images/Genshin/Artifact_set/Desert Pavilion Chronicle-1.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-2.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-3.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-4.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-5.png'],
    description: 'When Charged Attacks hit opponents, the equipping character\'s Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Desert_Pavilion_Chronicle'
  },
  {
    id: 'artifact-5-26',
    name: 'Flower of Paradise Lost',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Flower of Paradise Lost.png',
    pieceImages: ['/images/Genshin/Artifact_set/Flower of Paradise Lost-1.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-2.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-3.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-4.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-5.png'],
    description: 'The equipping character\'s Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%, and their Lunar-Bloom reaction DMG is increased by 10%. Additionally, after the equipping character triggers Bloom, Hyperbloom, Lunar-Bloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flower_of_Paradise_Lost'
  },
  {
    id: 'artifact-5-27',
    name: 'Nymph\'s Dream',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Nymph\'s Dream.png',
    pieceImages: ['/images/Genshin/Artifact_set/Nymph\'s Dream-1.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-2.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-3.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-4.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-5.png'],
    description: 'After Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts hit opponents, 1 stack of Mirrored Nymph will be triggered, lasting 8s. When under the effect of 1, 2, or 3 or more Mirrored Nymph stacks, ATK will be increased by 7%/16%/25%, and Hydro DMG will be increased by 4%/9%/15%. Mirrored Nymph created by Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts exist independently.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nymph%27s_Dream'
  },
  {
    id: 'artifact-5-28',
    name: 'Vourukasha\'s Glow',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Vourukasha\'s Glow.png',
    pieceImages: ['/images/Genshin/Artifact_set/Vourukasha\'s Glow-1.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-2.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-3.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-4.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-5.png'],
    description: 'Elemental Skill and Elemental Burst DMG will be increased by 10%. After the equipping character takes DMG, the aforementioned DMG Bonus is increased by 80% for 5s. This effect increase can have 5 stacks. The duration of each stack is counted independently. These effects can be triggered even when the equipping character is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Vourukasha%27s_Glow'
  },
  {
    id: 'artifact-5-29',
    name: 'Marechaussee Hunter',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Marechaussee Hunter.png',
    pieceImages: ['/images/Genshin/Artifact_set/Marechaussee Hunter-1.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-2.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-3.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-4.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-5.png'],
    description: 'When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Marechaussee_Hunter'
  },
  {
    id: 'artifact-5-30',
    name: 'Golden Troupe',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Golden Troupe.png',
    pieceImages: ['/images/Genshin/Artifact_set/Golden Troupe-1.png',
      '/images/Genshin/Artifact_set/Golden Troupe-2.png',
      '/images/Genshin/Artifact_set/Golden Troupe-3.png',
      '/images/Genshin/Artifact_set/Golden Troupe-4.png',
      '/images/Genshin/Artifact_set/Golden Troupe-5.png'],
    description: 'Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG will be further increased by 25%. This effect will be cleared 2s after taking the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Golden_Troupe'
  },
  {
    id: 'artifact-5-31',
    name: 'Song of Days Past',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Song of Days Past.png',
    pieceImages: ['/images/Genshin/Artifact_set/Song of Days Past-1.png',
      '/images/Genshin/Artifact_set/Song of Days Past-2.png',
      '/images/Genshin/Artifact_set/Song of Days Past-3.png',
      '/images/Genshin/Artifact_set/Song of Days Past-4.png',
      '/images/Genshin/Artifact_set/Song of Days Past-5.png'],
    description: 'When the equipping character heals a party member, the Yearning effect will be created for 6s, which records the total amount of healing provided (including overflow healing). When the duration expires, the Yearning effect will be transformed into the "Waves of Days Past" effect: When your active party member hits an opponent with a Normal Attack, Charged Attack, Plunging Attack, Elemental Skill, or Elemental Burst, the DMG dealt will be increased by 8% of the total healing amount recorded by the Yearning effect. The "Waves of Days Past" effect is removed after it has taken effect 5 times or after 10s. A single instance of the Yearning effect can record up to 15,000 healing, and only a single instance can exist at once, but it can record the healing from multiple equipping characters. Equipping characters on standby can still trigger this effect.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Song_of_Days_Past'
  },
  {
    id: 'artifact-5-32',
    name: 'Nighttime Whispers in the Echoing Woods',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods.png',
    pieceImages: ['/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-1.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-2.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-3.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-4.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-5.png'],
    description: 'After using an Elemental Skill, gain a 20% Geo DMG Bonus for 10s. While under a shield granted by the Crystallize reaction, the above effect will be increased by 150%, and this additional increase disappears 1s after that shield is lost.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nighttime_Whispers_in_the_Echoing_Woods'
  },
  {
    id: 'artifact-5-33',
    name: 'Fragment of Harmonic Whimsy',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy.png',
    pieceImages: ['/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-1.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-2.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-3.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-4.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-5.png'],
    description: 'When the value of a Bond of Life increases or decreases, this character deals 18% increased DMG for 6s. Max 3 stacks.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fragment_of_Harmonic_Whimsy'
  },
  {
    id: 'artifact-5-34',
    name: 'Unfinished Reverie',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Unfinished Reverie.png',
    pieceImages: ['/images/Genshin/Artifact_set/Unfinished Reverie-1.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-2.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-3.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-4.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-5.png'],
    description: 'After leaving combat for 3s, DMG dealt increased by 50%. In combat, if no Burning opponents are nearby for more than 6s, this DMG Bonus will decrease by 10% per second until it reaches 0%. When a Burning opponent exists, it will increase by 10% instead until it reaches 50%. This effect still triggers if the equipping character is off-field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Unfinished_Reverie'
  },
  {
    id: 'artifact-5-35',
    name: 'Scroll of the Hero of Cinder City',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City.png',
    pieceImages: ['/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-1.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-2.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-3.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-4.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-5.png'],
    description: 'After the equipping character triggers a reaction related to their Elemental Type, all nearby party members gain a 12% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 15s. If the equipping character is in the Nightsoul\'s Blessing state when triggering this effect, all nearby party members gain an additional 28% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 20s. The equipping character can trigger this effect while off-field, and the DMG bonus from Artifact Sets with the same name do not stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Scroll_of_the_Hero_of_Cinder_City'
  },
  {
    id: 'artifact-5-36',
    name: 'Obsidian Codex',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Obsidian Codex.png',
    pieceImages: ['/images/Genshin/Artifact_set/Obsidian Codex-1.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-2.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-3.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-4.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-5.png'],
    description: 'After the equipping character consumes 1 Nightsoul point while on the field, CRIT Rate increases by 40% for 6s. This effect can trigger once every second.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Obsidian_Codex'
  },
  {
    id: 'artifact-5-37',
    name: 'Finale of the Deep Galleries',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Finale of the Deep Galleries.png',
    pieceImages: ['/images/Genshin/Artifact_set/Finale of the Deep Galleries-1.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-2.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-3.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-4.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-5.png'],
    description: 'When the equipping character has 0 Elemental Energy, Normal Attack DMG is increased by 60% and Elemental Burst DMG is increased by 60%. After the equipping character deals Normal Attack DMG, the aforementioned Elemental Burst effect will stop applying for 6s. After the equipping character deals Elemental Burst DMG, the aforementioned Normal Attack effect will stop applying for 6s. This effect can trigger even if the equipping character is off the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Finale_of_the_Deep_Galleries'
  },
  {
    id: 'artifact-5-38',
    name: 'Long Night\'s Oath',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Long Night\'s Oath.png',
    pieceImages: ['/images/Genshin/Artifact_set/Long Night\'s Oath-1.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-2.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-3.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-4.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-5.png'],
    description: 'After the equipping character\'s Plunging Attack/Charged Attack/Elemental Skill hits an opponent, they will gain 1/2/2 stack(s) of \"Radiance Everlasting.\" Plunging Attacks, Charged Attacks or Elemental Skills can each trigger this effect once every 1s. Radiance Everlasting: Plunging Attacks deal 15% increased DMG for 6s. Max 5 stacks. Each stack\'s duration is counted independently.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Long_Night%27s_Oath'
  },
  {
    id: 'artifact-5-39',
    name: 'Night of the Sky\'s Unveiling',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling.png',
    pieceImages: ['/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-1.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-2.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-3.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-4.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-5.png'],
    description: 'When nearby party members trigger Lunar Reactions, if the equipping character is on the field, gain the Gleaming Moon: Intent effect for 4s: Increases CRIT Rate by 15%/30% when the party\'s Moonsign is Nascent Gleam/Ascendant Gleam. All party members\' Lunar Reaction DMG is increased by 10% for each different Gleaming Moon effect that party members have. Effects from Gleaming Moon cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Night_of_the_Sky%27s_Unveiling'
  },
  {
    id: 'artifact-5-40',
    name: 'Silken Moon\'s Serenade',
    rarity: Rarity.FIVE_STAR,
    image: '/images/Genshin/Artifact_set/Silken Moon\'s Serenade.png',
    pieceImages: ['/images/Genshin/Artifact_set/Silken Moon\'s Serenade-1.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-2.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-3.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-4.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-5.png'],
    description: 'When dealing Elemental DMG, gain the Gleaming Moon: Devotion effect for 8s: Increases all party members\' Elemental Mastery by 60/120 when the party\'s Moonsign is Nascent Gleam/Ascendant Gleam. The equipping character can trigger this effect while off-field. All party members\' Lunar Reaction DMG is increased by 10% for each different Gleaming Moon effect that party members have. Effects from Gleaming Moon cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Silken_Moon%27s_Serenade'
  },
  
  



  {
    id: 'the-exile',
    name: 'The Exile',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/The Exile.png',
    pieceImages: ['/images/Genshin/Artifact_set/The Exile-1.png',
      '/images/Genshin/Artifact_set/The Exile-2.png',
      '/images/Genshin/Artifact_set/The Exile-3.png',
      '/images/Genshin/Artifact_set/The Exile-4.png',
      '/images/Genshin/Artifact_set/The Exile-5.png'],
    description: 'Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Exile'
  },
  {
    id: 'instructor',
    name: 'Instructor',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Instructor.png',
    pieceImages: ['/images/Genshin/Artifact_set/Instructor-1.png',
      '/images/Genshin/Artifact_set/Instructor-2.png',
      '/images/Genshin/Artifact_set/Instructor-3.png',
      '/images/Genshin/Artifact_set/Instructor-4.png',
      '/images/Genshin/Artifact_set/Instructor-5.png'],
    description: 'Upon triggering an Elemental Reaction, increases all party members\' Elemental Mastery by 120 for 8s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Instructor'
  },
  {
    id: 'berserker',
    name: 'Berserker',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Berserker.png',
    pieceImages: ['/images/Genshin/Artifact_set/Berserker-1.png',
      '/images/Genshin/Artifact_set/Berserker-2.png',
      '/images/Genshin/Artifact_set/Berserker-3.png',
      '/images/Genshin/Artifact_set/Berserker-4.png',
      '/images/Genshin/Artifact_set/Berserker-5.png'],
    description: 'When HP is below 70%, CRIT Rate increases by an additional 24%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Berserker'
  },

  {
    id: 'artifact-4-4',
    name: 'Resolution of Sojourner',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Resolution of Sojourner.png',
    pieceImages: ['/images/Genshin/Artifact_set/Resolution of Sojourner-1.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-2.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-3.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-4.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-5.png'],
    description: 'Increases Charged Attack CRIT Rate by 30%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Resolution_of_Sojourner'
  },
  {
    id: 'artifact-4-5',
    name: 'Tiny Miracle',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Tiny Miracle.png',
    pieceImages: ['/images/Genshin/Artifact_set/Tiny Miracle-1.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-2.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-3.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-4.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-5.png'],
    description: 'Incoming Elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tiny_Miracle'
  },
  {
    id: 'artifact-4-6',
    name: 'Defender\'s Will',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Defender\'s Will.png',
    pieceImages: ['/images/Genshin/Artifact_set/Defender\'s Will-1.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-2.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-3.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-4.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-5.png'],
    description: 'For each different element present in your own party, the wearer\'s Elemental RES to that corresponding element is increased by 30%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Defender%27s_Will'
  },
  {
    id: 'artifact-4-7',
    name: 'Brave Heart',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Brave Heart.png',
    pieceImages: ['/images/Genshin/Artifact_set/Brave Heart-1.png',
      '/images/Genshin/Artifact_set/Brave Heart-2.png',
      '/images/Genshin/Artifact_set/Brave Heart-3.png',
      '/images/Genshin/Artifact_set/Brave Heart-4.png',
      '/images/Genshin/Artifact_set/Brave Heart-5.png'],
    description: 'Increases DMG by 30% against opponents with more than 50% HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Brave_Heart'
  },
  {
    id: 'artifact-4-8',
    name: 'Martial Artist',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Martial Artist.png',
    pieceImages: ['/images/Genshin/Artifact_set/Martial Artist-1.png',
      '/images/Genshin/Artifact_set/Martial Artist-2.png',
      '/images/Genshin/Artifact_set/Martial Artist-3.png',
      '/images/Genshin/Artifact_set/Martial Artist-4.png',
      '/images/Genshin/Artifact_set/Martial Artist-5.png'],
    description: 'After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Martial_Artist'
  },
  {
    id: 'artifact-4-8',
    name: 'Gambler',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Gambler.png',
    pieceImages: ['/images/Genshin/Artifact_set/Gambler-1.png',
      '/images/Genshin/Artifact_set/Gambler-2.png',
      '/images/Genshin/Artifact_set/Gambler-3.png',
      '/images/Genshin/Artifact_set/Gambler-4.png',
      '/images/Genshin/Artifact_set/Gambler-5.png'],
    description: 'Defeating an opponent has a 100% chance to remove Elemental Skill CD. Can only occur once every 15s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gambler'
  },
  {
    id: 'artifact-4-9',
    name: 'Scholar',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Scholar.png',
    pieceImages: ['/images/Genshin/Artifact_set/Scholar-1.png',
      '/images/Genshin/Artifact_set/Scholar-2.png',
      '/images/Genshin/Artifact_set/Scholar-3.png',
      '/images/Genshin/Artifact_set/Scholar-4.png',
      '/images/Genshin/Artifact_set/Scholar-5.png'],
    description: 'Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Scholar'
  },
  {
    id: 'artifact-4-10=1',
    name: 'Prayers for Wisdom',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Prayers for Wisdom.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers for Wisdom-1.png'],
    description: 'Affected by Electro for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_for_Wisdom'
  },
  {
    id: 'artifact-4-10-2',
    name: 'Prayers for Destiny',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Prayers for Destiny.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers for Destiny-1.png'],
    description: 'Affected by Hydro for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_for_Destiny'
  },
  {
    id: 'artifact-4-10-3',
    name: 'Prayers for Illumination',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Prayers for Illumination.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers for Illumination-1.png'],
    description: 'Affected by Pyro for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_for_Illumination'
  },
  {
    id: 'artifact-4-10-4',
    name: 'Prayers to Springtime',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Prayers to Springtime.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers to Springtime-1.png'],
    description: 'Affected by Cryo for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_to_Springtime'
  },
  {
    id: 'artifact-4-11',
    name: 'Gladiator\'s Finale',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Gladiator\'s Finale.png',
    pieceImages: ['/images/Genshin/Artifact_set/Gladiator\'s Finale-1.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-2.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-3.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-4.png',
      '/images/Genshin/Artifact_set/Gladiator\'s Finale-5.png'],
    description: 'If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gladiator%27s_Finale'
  },
  {
    id: 'artifact-4-12',
    name: 'Wanderer\'s Troupe',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Wanderer\'s Troupe.png',
    pieceImages: ['/images/Genshin/Artifact_set/Wanderer\'s Troupe-1.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-2.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-3.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-4.png',
      '/images/Genshin/Artifact_set/Wanderer\'s Troupe-5.png'],
    description: 'Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Wanderer%27s_Troupe'
  },
  {
    id: 'artifact-4-13',
    name: 'Noblesse Oblige',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Noblesse Oblige.png',
    pieceImages: ['/images/Genshin/Artifact_set/Noblesse Oblige-1.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-2.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-3.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-4.png',
      '/images/Genshin/Artifact_set/Noblesse Oblige-5.png'],
    description: 'Using an Elemental Burst increases all party members\' ATK by 20% for 12s. This effect cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Noblesse_Oblige'
  },
  {
    id: 'artifact-4-14',
    name: 'Bloodstained Chivalry',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Bloodstained Chivalry.png',
    pieceImages: ['/images/Genshin/Artifact_set/Bloodstained Chivalry-1.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-2.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-3.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-4.png',
      '/images/Genshin/Artifact_set/Bloodstained Chivalry-5.png'],
    description: 'After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bloodstained_Chivalry'
  },
  {
    id: 'artifact-4-15',
    name: 'Maiden Beloved',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Maiden Beloved.png',
    pieceImages: ['/images/Genshin/Artifact_set/Maiden Beloved-1.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-2.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-3.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-4.png',
      '/images/Genshin/Artifact_set/Maiden Beloved-5.png'],
    description: 'Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Maiden_Beloved'
  },
  {
    id: 'artifact-4-16',
    name: 'Viridescent Venerer',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Viridescent Venerer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Viridescent Venerer-1.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-2.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-3.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-4.png',
      '/images/Genshin/Artifact_set/Viridescent Venerer-5.png'],
    description: 'Increases Swirl DMG by 60%. Decreases opponent\'s Elemental RES to the element infused in the Swirl by 40% for 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Viridescent_Venerer'
  },
  {
    id: 'artifact-4-17',
    name: 'Archaic Petra',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Archaic Petra.png',
    pieceImages: ['/images/Genshin/Artifact_set/Archaic Petra-1.png',
      '/images/Genshin/Artifact_set/Archaic Petra-2.png',
      '/images/Genshin/Artifact_set/Archaic Petra-3.png',
      '/images/Genshin/Artifact_set/Archaic Petra-4.png',
      '/images/Genshin/Artifact_set/Archaic Petra-5.png'],
    description: 'Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Archaic_Petra'
  },
  {
    id: 'artifact-4-18',
    name: 'Retracing Bolide',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Retracing Bolide.png',
    pieceImages: ['/images/Genshin/Artifact_set/Retracing Bolide-1.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-2.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-3.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-4.png',
      '/images/Genshin/Artifact_set/Retracing Bolide-5.png'],
    description: 'While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Retracing_Bolide'
  },
  {
    id: 'artifact-4-19',
    name: 'Thundersoother',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Thundersoother.png',
    pieceImages: ['/images/Genshin/Artifact_set/Thundersoother-1.png',
      '/images/Genshin/Artifact_set/Thundersoother-2.png',
      '/images/Genshin/Artifact_set/Thundersoother-3.png',
      '/images/Genshin/Artifact_set/Thundersoother-4.png',
      '/images/Genshin/Artifact_set/Thundersoother-5.png'],
    description: 'Increases DMG against opponents affected by Electro by 35%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thundersoother'
  },
  {
    id: 'artifact-4-20',
    name: 'Thundering Fury',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Thundering Fury.png',
    pieceImages: ['/images/Genshin/Artifact_set/Thundering Fury-1.png',
      '/images/Genshin/Artifact_set/Thundering Fury-2.png',
      '/images/Genshin/Artifact_set/Thundering Fury-3.png',
      '/images/Genshin/Artifact_set/Thundering Fury-4.png',
      '/images/Genshin/Artifact_set/Thundering Fury-5.png'],
    description: 'Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%, and the DMG caused by Lunar-Charged by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Thundering_Fury'
  },
  {
    id: 'artifact-4-21',
    name: 'Lavawalker',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Lavawalker.png',
    pieceImages: ['/images/Genshin/Artifact_set/Lavawalker-1.png',
      '/images/Genshin/Artifact_set/Lavawalker-2.png',
      '/images/Genshin/Artifact_set/Lavawalker-3.png',
      '/images/Genshin/Artifact_set/Lavawalker-4.png',
      '/images/Genshin/Artifact_set/Lavawalker-5.png'],
    description: 'Increases DMG against opponents affected by Pyro by 35%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lavawalker'
  },
  {
    id: 'artifact-4-22',
    name: 'Crimson Witch of Flames',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Crimson Witch of Flames.png',
    pieceImages: ['/images/Genshin/Artifact_set/Crimson Witch of Flames-1.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-2.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-3.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-4.png',
      '/images/Genshin/Artifact_set/Crimson Witch of Flames-5.png'],
    description: 'Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Crimson_Witch_of_Flames'
  },
  {
    id: 'artifact-4-23',
    name: 'Blizzard Strayer',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Blizzard Strayer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Blizzard Strayer-1.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-2.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-3.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-4.png',
      '/images/Genshin/Artifact_set/Blizzard Strayer-5.png'],
    description: 'When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Blizzard_Strayer'
  },
  {
    id: 'artifact-4-24',
    name: 'Heart of Depth',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Heart of Depth.png',
    pieceImages: ['/images/Genshin/Artifact_set/Heart of Depth-1.png',
      '/images/Genshin/Artifact_set/Heart of Depth-2.png',
      '/images/Genshin/Artifact_set/Heart of Depth-3.png',
      '/images/Genshin/Artifact_set/Heart of Depth-4.png',
      '/images/Genshin/Artifact_set/Heart of Depth-5.png'],
    description: 'After using an Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Heart_of_Depth'
  },
  {
    id: 'artifact-4-25',
    name: 'Tenacity of the Millelith',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Tenacity of the Millelith.png',
    pieceImages: ['/images/Genshin/Artifact_set/Tenacity of the Millelith-1.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-2.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-3.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-4.png',
      '/images/Genshin/Artifact_set/Tenacity of the Millelith-5.png'],
    description: 'When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tenacity_of_the_Millelith'
  },
  {
    id: 'artifact-4-26',
    name: 'Pale Flame',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Pale Flame.png',
    pieceImages: ['/images/Genshin/Artifact_set/Pale Flame-1.png',
      '/images/Genshin/Artifact_set/Pale Flame-2.png',
      '/images/Genshin/Artifact_set/Pale Flame-3.png',
      '/images/Genshin/Artifact_set/Pale Flame-4.png',
      '/images/Genshin/Artifact_set/Pale Flame-5.png'],
    description: 'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Pale_Flame'
  },
  {
    id: 'artifact-4-27',
    name: 'Shimenawa\'s Reminiscence',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence.png',
    pieceImages: ['/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-1.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-2.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-3.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-4.png',
      '/images/Genshin/Artifact_set/Shimenawa\'s Reminiscence-5.png'],
    description: 'When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Shimenawa%27s_Reminiscence'
  },
  {
    id: 'artifact-4-28',
    name: 'Emblem of Severed Fate',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Emblem of Severed Fate.png',
    pieceImages: ['/images/Genshin/Artifact_set/Emblem of Severed Fate-1.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-2.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-3.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-4.png',
      '/images/Genshin/Artifact_set/Emblem of Severed Fate-5.png'],
    description: 'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Emblem_of_Severed_Fate'
  },
  {
    id: 'artifact-4-29',
    name: 'Husk of Opulent Dreams',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Husk of Opulent Dreams.png',
    pieceImages: ['/images/Genshin/Artifact_set/Husk of Opulent Dreams-1.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-2.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-3.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-4.png',
      '/images/Genshin/Artifact_set/Husk of Opulent Dreams-5.png'],
    description: 'A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Husk_of_Opulent_Dreams'
  },
  {
    id: 'artifact-4-30',
    name: 'Ocean-Hued Clam',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Ocean-Hued Clam.png',
    pieceImages: ['/images/Genshin/Artifact_set/Ocean-Hued Clam-1.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-2.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-3.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-4.png',
      '/images/Genshin/Artifact_set/Ocean-Hued Clam-5.png'],
    description: 'When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Ocean-Hued_Clam'
  },
  {
    id: 'artifact-4-31',
    name: 'Vermillion Hereafter',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Vermillion Hereafter.png',
    pieceImages: ['/images/Genshin/Artifact_set/Vermillion Hereafter-1.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-2.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-3.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-4.png',
      '/images/Genshin/Artifact_set/Vermillion Hereafter-5.png'],
    description: 'After using an Elemental Burst, this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character\'s HP decreases, their ATK will further increase by 10%. This increase can occur this way maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Vermillion_Hereafter'
  },
  {
    id: 'artifact-4-32',
    name: 'Echoes of an Offering',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Echoes of an Offering.png',
    pieceImages: ['/images/Genshin/Artifact_set/Echoes of an Offering-1.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-2.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-3.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-4.png',
      '/images/Genshin/Artifact_set/Echoes of an Offering-5.png'],
    description: 'When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Echoes_of_an_Offering'
  },
  {
    id: 'artifact-4-34',
    name: 'Deepwood Memories',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Deepwood Memories.png',
    pieceImages: ['/images/Genshin/Artifact_set/Deepwood Memories-1.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-2.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-3.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-4.png',
      '/images/Genshin/Artifact_set/Deepwood Memories-5.png'],
    description: 'After Elemental Skills or Bursts hit opponents, the targets\' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Deepwood_Memories'
  },
  {
    id: 'artifact-4-35',
    name: 'Gilded Dreams',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Gilded Dreams.png',
    pieceImages: ['/images/Genshin/Artifact_set/Gilded Dreams-1.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-2.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-3.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-4.png',
      '/images/Genshin/Artifact_set/Gilded Dreams-5.png'],
    description: 'Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gilded_Dreams'
  },
  {
    id: 'artifact-4-36',
    name: 'Desert Pavilion Chronicle',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Desert Pavilion Chronicle.png',
    pieceImages: ['/images/Genshin/Artifact_set/Desert Pavilion Chronicle-1.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-2.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-3.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-4.png',
      '/images/Genshin/Artifact_set/Desert Pavilion Chronicle-5.png'],
    description: 'When Charged Attacks hit opponents, the equipping character\'s Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Desert_Pavilion_Chronicle'
  },
  {
    id: 'artifact-4-37',
    name: 'Flower of Paradise Lost',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Flower of Paradise Lost.png',
    pieceImages: ['/images/Genshin/Artifact_set/Flower of Paradise Lost-1.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-2.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-3.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-4.png',
      '/images/Genshin/Artifact_set/Flower of Paradise Lost-5.png'],
    description: 'The equipping character\'s Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%, and their Lunar-Bloom reaction DMG is increased by 10%. Additionally, after the equipping character triggers Bloom, Hyperbloom, Lunar-Bloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flower_of_Paradise_Lost'
  },
  {
    id: 'artifact-4-38',
    name: 'Nymph\'s Dream',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Nymph\'s Dream.png',
    pieceImages: ['/images/Genshin/Artifact_set/Nymph\'s Dream-1.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-2.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-3.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-4.png',
      '/images/Genshin/Artifact_set/Nymph\'s Dream-5.png'],
    description: 'After Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts hit opponents, 1 stack of Mirrored Nymph will be triggered, lasting 8s. When under the effect of 1, 2, or 3 or more Mirrored Nymph stacks, ATK will be increased by 7%/16%/25%, and Hydro DMG will be increased by 4%/9%/15%. Mirrored Nymph created by Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts exist independently.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nymph%27s_Dream'
  },
  {
    id: 'artifact-4-39',
    name: 'Vourukasha\'s Glow',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Vourukasha\'s Glow.png',
    pieceImages: ['/images/Genshin/Artifact_set/Vourukasha\'s Glow-1.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-2.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-3.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-4.png',
      '/images/Genshin/Artifact_set/Vourukasha\'s Glow-5.png'],
    description: 'Elemental Skill and Elemental Burst DMG will be increased by 10%. After the equipping character takes DMG, the aforementioned DMG Bonus is increased by 80% for 5s. This effect increase can have 5 stacks. The duration of each stack is counted independently. These effects can be triggered even when the equipping character is not on the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Vourukasha%27s_Glow'
  },
  {
    id: 'artifact-4-40',
    name: 'Marechaussee Hunter',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Marechaussee Hunter.png',
    pieceImages: ['/images/Genshin/Artifact_set/Marechaussee Hunter-1.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-2.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-3.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-4.png',
      '/images/Genshin/Artifact_set/Marechaussee Hunter-5.png'],
    description: 'When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Marechaussee_Hunter'
  },
  {
    id: 'artifact-4-41',
    name: 'Golden Troupe',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Golden Troupe.png',
    pieceImages: ['/images/Genshin/Artifact_set/Golden Troupe-1.png',
      '/images/Genshin/Artifact_set/Golden Troupe-2.png',
      '/images/Genshin/Artifact_set/Golden Troupe-3.png',
      '/images/Genshin/Artifact_set/Golden Troupe-4.png',
      '/images/Genshin/Artifact_set/Golden Troupe-5.png'],
    description: 'Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG will be further increased by 25%. This effect will be cleared 2s after taking the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Golden_Troupe'
  },
  {
    id: 'artifact-4-42',
    name: 'Song of Days Past',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Song of Days Past.png',
    pieceImages: ['/images/Genshin/Artifact_set/Song of Days Past-1.png',
      '/images/Genshin/Artifact_set/Song of Days Past-2.png',
      '/images/Genshin/Artifact_set/Song of Days Past-3.png',
      '/images/Genshin/Artifact_set/Song of Days Past-4.png',
      '/images/Genshin/Artifact_set/Song of Days Past-5.png'],
    description: 'When the equipping character heals a party member, the Yearning effect will be created for 6s, which records the total amount of healing provided (including overflow healing). When the duration expires, the Yearning effect will be transformed into the "Waves of Days Past" effect: When your active party member hits an opponent with a Normal Attack, Charged Attack, Plunging Attack, Elemental Skill, or Elemental Burst, the DMG dealt will be increased by 8% of the total healing amount recorded by the Yearning effect. The "Waves of Days Past" effect is removed after it has taken effect 5 times or after 10s. A single instance of the Yearning effect can record up to 15,000 healing, and only a single instance can exist at once, but it can record the healing from multiple equipping characters. Equipping characters on standby can still trigger this effect.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Song_of_Days_Past'
  },
  {
    id: 'artifact-4-43',
    name: 'Nighttime Whispers in the Echoing Woods',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods.png',
    pieceImages: ['/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-1.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-2.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-3.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-4.png',
      '/images/Genshin/Artifact_set/Nighttime Whispers in the Echoing Woods-5.png'],
    description: 'After using an Elemental Skill, gain a 20% Geo DMG Bonus for 10s. While under a shield granted by the Crystallize reaction, the above effect will be increased by 150%, and this additional increase disappears 1s after that shield is lost.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nighttime_Whispers_in_the_Echoing_Woods'
  },
  {
    id: 'artifact-4-44',
    name: 'Fragment of Harmonic Whimsy',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy.png',
    pieceImages: ['/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-1.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-2.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-3.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-4.png',
      '/images/Genshin/Artifact_set/Fragment of Harmonic Whimsy-5.png'],
    description: 'When the value of a Bond of Life increases or decreases, this character deals 18% increased DMG for 6s. Max 3 stacks.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fragment_of_Harmonic_Whimsy'
  },
  {
    id: 'artifact-4-45',
    name: 'Unfinished Reverie',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Unfinished Reverie.png',
    pieceImages: ['/images/Genshin/Artifact_set/Unfinished Reverie-1.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-2.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-3.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-4.png',
      '/images/Genshin/Artifact_set/Unfinished Reverie-5.png'],
    description: 'After leaving combat for 3s, DMG dealt increased by 50%. In combat, if no Burning opponents are nearby for more than 6s, this DMG Bonus will decrease by 10% per second until it reaches 0%. When a Burning opponent exists, it will increase by 10% instead until it reaches 50%. This effect still triggers if the equipping character is off-field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Unfinished_Reverie'
  },
  {
    id: 'artifact-4-46',
    name: 'Scroll of the Hero of Cinder City',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City.png',
    pieceImages: ['/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-1.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-2.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-3.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-4.png',
      '/images/Genshin/Artifact_set/Scroll of the Hero of Cinder City-5.png'],
    description: 'After the equipping character triggers a reaction related to their Elemental Type, all nearby party members gain a 12% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 15s. If the equipping character is in the Nightsoul\'s Blessing state when triggering this effect, all nearby party members gain an additional 28% Elemental DMG Bonus for the Elemental Types involved in the elemental reaction for 20s. The equipping character can trigger this effect while off-field, and the DMG bonus from Artifact Sets with the same name do not stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Scroll_of_the_Hero_of_Cinder_City'
  },
  {
    id: 'artifact-4-47',
    name: 'Obsidian Codex',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Obsidian Codex.png',
    pieceImages: ['/images/Genshin/Artifact_set/Obsidian Codex-1.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-2.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-3.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-4.png',
      '/images/Genshin/Artifact_set/Obsidian Codex-5.png'],
    description: 'After the equipping character consumes 1 Nightsoul point while on the field, CRIT Rate increases by 40% for 6s. This effect can trigger once every second.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Obsidian_Codex'
  },
  {
    id: 'artifact-4-48',
    name: 'Finale of the Deep Galleries',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Finale of the Deep Galleries.png',
    pieceImages: ['/images/Genshin/Artifact_set/Finale of the Deep Galleries-1.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-2.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-3.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-4.png',
      '/images/Genshin/Artifact_set/Finale of the Deep Galleries-5.png'],
    description: 'When the equipping character has 0 Elemental Energy, Normal Attack DMG is increased by 60% and Elemental Burst DMG is increased by 60%. After the equipping character deals Normal Attack DMG, the aforementioned Elemental Burst effect will stop applying for 6s. After the equipping character deals Elemental Burst DMG, the aforementioned Normal Attack effect will stop applying for 6s. This effect can trigger even if the equipping character is off the field.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Finale_of_the_Deep_Galleries'
  },
  {
    id: 'artifact-4-49',
    name: 'Long Night\'s Oath',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Long Night\'s Oath.png',
    pieceImages: ['/images/Genshin/Artifact_set/Long Night\'s Oath-1.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-2.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-3.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-4.png',
      '/images/Genshin/Artifact_set/Long Night\'s Oath-5.png'],
    description: 'After the equipping character\'s Plunging Attack/Charged Attack/Elemental Skill hits an opponent, they will gain 1/2/2 stack(s) of \"Radiance Everlasting.\" Plunging Attacks, Charged Attacks or Elemental Skills can each trigger this effect once every 1s. Radiance Everlasting: Plunging Attacks deal 15% increased DMG for 6s. Max 5 stacks. Each stack\'s duration is counted independently.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Long_Night%27s_Oath'
  },
  {
    id: 'artifact-4-50',
    name: 'Night of the Sky\'s Unveiling',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling.png',
    pieceImages: ['/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-1.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-2.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-3.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-4.png',
      '/images/Genshin/Artifact_set/Night of the Sky\'s Unveiling-5.png'],
    description: 'When nearby party members trigger Lunar Reactions, if the equipping character is on the field, gain the Gleaming Moon: Intent effect for 4s: Increases CRIT Rate by 15%/30% when the party\'s Moonsign is Nascent Gleam/Ascendant Gleam. All party members\' Lunar Reaction DMG is increased by 10% for each different Gleaming Moon effect that party members have. Effects from Gleaming Moon cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Night_of_the_Sky%27s_Unveiling'
  },
  {
    id: 'artifact-4-51',
    name: 'Silken Moon\'s Serenade',
    rarity: Rarity.FOUR_STAR,
    image: '/images/Genshin/Artifact_set/Silken Moon\'s Serenade.png',
    pieceImages: ['/images/Genshin/Artifact_set/Silken Moon\'s Serenade-1.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-2.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-3.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-4.png',
      '/images/Genshin/Artifact_set/Silken Moon\'s Serenade-5.png'],
    description: 'When dealing Elemental DMG, gain the Gleaming Moon: Devotion effect for 8s: Increases all party members\' Elemental Mastery by 60/120 when the party\'s Moonsign is Nascent Gleam/Ascendant Gleam. The equipping character can trigger this effect while off-field. All party members\' Lunar Reaction DMG is increased by 10% for each different Gleaming Moon effect that party members have. Effects from Gleaming Moon cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Silken_Moon%27s_Serenade'
  },
  



  {
    id: 'artifact-3-1',
    name: 'Adventurer',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Adventurer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Adventurer-1.png',
      '/images/Genshin/Artifact_set/Adventurer-2.png',
      '/images/Genshin/Artifact_set/Adventurer-3.png',
      '/images/Genshin/Artifact_set/Adventurer-4.png',
      '/images/Genshin/Artifact_set/Adventurer-5.png'],
    description: 'Opening a chest regenerates 30% Max HP over 5s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Adventurer'
  },
  {
    id: 'artifact-3-2',
    name: 'Lucky Dog',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Lucky Dog.png',
    pieceImages: ['/images/Genshin/Artifact_set/Lucky Dog-1.png',
      '/images/Genshin/Artifact_set/Lucky Dog-2.png',
      '/images/Genshin/Artifact_set/Lucky Dog-3.png',
      '/images/Genshin/Artifact_set/Lucky Dog-4.png',
      '/images/Genshin/Artifact_set/Lucky Dog-5.png'],
    description: 'Picking up Mora restores 300 HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lucky_Dog'
  },
  {
    id: 'artifact-3-3',
    name: 'Traveling Doctor',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Traveling Doctor.png',
    pieceImages: ['/images/Genshin/Artifact_set/Traveling Doctor-1.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-2.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-3.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-4.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-5.png'],
    description: 'Using Elemental Burst restores 20% HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveling_Doctor'
  },
  {
    id: 'artifact-3-4',
    name: 'The Exile',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/The Exile.png',
    pieceImages: ['/images/Genshin/Artifact_set/The Exile-1.png',
      '/images/Genshin/Artifact_set/The Exile-2.png',
      '/images/Genshin/Artifact_set/The Exile-3.png',
      '/images/Genshin/Artifact_set/The Exile-4.png',
      '/images/Genshin/Artifact_set/The Exile-5.png'],
    description: 'Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Exile'
  },
  {
    id: 'artifact-3-5',
    name: 'Instructor',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Instructor.png',
    pieceImages: ['/images/Genshin/Artifact_set/Instructor-1.png',
      '/images/Genshin/Artifact_set/Instructor-2.png',
      '/images/Genshin/Artifact_set/Instructor-3.png',
      '/images/Genshin/Artifact_set/Instructor-4.png',
      '/images/Genshin/Artifact_set/Instructor-5.png'],
    description: 'Upon triggering an Elemental Reaction, increases all party members\' Elemental Mastery by 120 for 8s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Instructor'
  },
  {
    id: 'artifact-3-6',
    name: 'Berserker',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Berserker.png',
    pieceImages: ['/images/Genshin/Artifact_set/Berserker-1.png',
      '/images/Genshin/Artifact_set/Berserker-2.png',
      '/images/Genshin/Artifact_set/Berserker-3.png',
      '/images/Genshin/Artifact_set/Berserker-4.png',
      '/images/Genshin/Artifact_set/Berserker-5.png'],
    description: 'When HP is below 70%, CRIT Rate increases by an additional 24%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Berserker'
  },

  {
    id: 'artifact-3-7',
    name: 'Resolution of Sojourner',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Resolution of Sojourner.png',
    pieceImages: ['/images/Genshin/Artifact_set/Resolution of Sojourner-1.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-2.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-3.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-4.png',
      '/images/Genshin/Artifact_set/Resolution of Sojourner-5.png'],
    description: 'Increases Charged Attack CRIT Rate by 30%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Resolution_of_Sojourner'
  },
  {
    id: 'artifact-3-8',
    name: 'Tiny Miracle',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Tiny Miracle.png',
    pieceImages: ['/images/Genshin/Artifact_set/Tiny Miracle-1.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-2.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-3.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-4.png',
      '/images/Genshin/Artifact_set/Tiny Miracle-5.png'],
    description: 'Incoming Elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Tiny_Miracle'
  },
  {
    id: 'artifact-3-9',
    name: 'Defender\'s Will',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Defender\'s Will.png',
    pieceImages: ['/images/Genshin/Artifact_set/Defender\'s Will-1.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-2.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-3.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-4.png',
      '/images/Genshin/Artifact_set/Defender\'s Will-5.png'],
    description: 'For each different element present in your own party, the wearer\'s Elemental RES to that corresponding element is increased by 30%.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Defender%27s_Will'
  },
  {
    id: 'artifact-3-10',
    name: 'Brave Heart',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Brave Heart.png',
    pieceImages: ['/images/Genshin/Artifact_set/Brave Heart-1.png',
      '/images/Genshin/Artifact_set/Brave Heart-2.png',
      '/images/Genshin/Artifact_set/Brave Heart-3.png',
      '/images/Genshin/Artifact_set/Brave Heart-4.png',
      '/images/Genshin/Artifact_set/Brave Heart-5.png'],
    description: 'Increases DMG by 30% against opponents with more than 50% HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Brave_Heart'
  },
  {
    id: 'artifact-3-11',
    name: 'Martial Artist',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Martial Artist.png',
    pieceImages: ['/images/Genshin/Artifact_set/Martial Artist-1.png',
      '/images/Genshin/Artifact_set/Martial Artist-2.png',
      '/images/Genshin/Artifact_set/Martial Artist-3.png',
      '/images/Genshin/Artifact_set/Martial Artist-4.png',
      '/images/Genshin/Artifact_set/Martial Artist-5.png'],
    description: 'After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Martial_Artist'
  },
  {
    id: 'artifact-3-12',
    name: 'Gambler',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Gambler.png',
    pieceImages: ['/images/Genshin/Artifact_set/Gambler-1.png',
      '/images/Genshin/Artifact_set/Gambler-2.png',
      '/images/Genshin/Artifact_set/Gambler-3.png',
      '/images/Genshin/Artifact_set/Gambler-4.png',
      '/images/Genshin/Artifact_set/Gambler-5.png'],
    description: 'Defeating an opponent has a 100% chance to remove Elemental Skill CD. Can only occur once every 15s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Gambler'
  },
  {
    id: 'artifact-3-13',
    name: 'Scholar',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Scholar.png',
    pieceImages: ['/images/Genshin/Artifact_set/Scholar-1.png',
      '/images/Genshin/Artifact_set/Scholar-2.png',
      '/images/Genshin/Artifact_set/Scholar-3.png',
      '/images/Genshin/Artifact_set/Scholar-4.png',
      '/images/Genshin/Artifact_set/Scholar-5.png'],
    description: 'Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Scholar'
  },
  {
    id: 'artifact-3-14-1',
    name: 'Prayers for Wisdom',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Prayers for Wisdom.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers for Wisdom-1.png'],
    description: 'Affected by Electro for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_for_Wisdom'
  },
  {
    id: 'artifact-3-14-2',
    name: 'Prayers for Destiny',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Prayers for Destiny.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers for Destiny-1.png'],
    description: 'Affected by Hydro for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_for_Destiny'
  },
  {
    id: 'artifact-3-14-3',
    name: 'Prayers for Illumination',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Prayers for Illumination.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers for Illumination-1.png'],
    description: 'Affected by Pyro for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_for_Illumination'
  },
  {
    id: 'artifact-3-14-4',
    name: 'Prayers to Springtime',
    rarity: Rarity.THREE_STAR,
    image: '/images/Genshin/Artifact_set/Prayers to Springtime.png',
    pieceImages: ['/images/Genshin/Artifact_set/Prayers to Springtime-1.png'],
    description: 'Affected by Cryo for 40% less time.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prayers_to_Springtime'
  },



  {
    id: 'artifact-2-1',
    name: 'Adventurer',
    rarity: Rarity.TWO_STAR,
    image: '/images/Genshin/Artifact_set/Adventurer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Adventurer-1.png',
      '/images/Genshin/Artifact_set/Adventurer-2.png',
      '/images/Genshin/Artifact_set/Adventurer-3.png',
      '/images/Genshin/Artifact_set/Adventurer-4.png',
      '/images/Genshin/Artifact_set/Adventurer-5.png'],
    description: 'Opening a chest regenerates 30% Max HP over 5s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Adventurer'
  },
  {
    id: 'artifact-2-2',
    name: 'Lucky Dog',
    rarity: Rarity.TWO_STAR,
    image: '/images/Genshin/Artifact_set/Lucky Dog.png',
    pieceImages: ['/images/Genshin/Artifact_set/Lucky Dog-1.png',
      '/images/Genshin/Artifact_set/Lucky Dog-2.png',
      '/images/Genshin/Artifact_set/Lucky Dog-3.png',
      '/images/Genshin/Artifact_set/Lucky Dog-4.png',
      '/images/Genshin/Artifact_set/Lucky Dog-5.png'],
    description: 'Picking up Mora restores 300 HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lucky_Dog'
  },
  {
    id: 'artifact-2-3',
    name: 'Traveling Doctor',
    rarity: Rarity.TWO_STAR,
    image: '/images/Genshin/Artifact_set/Traveling Doctor.png',
    pieceImages: ['/images/Genshin/Artifact_set/Traveling Doctor-1.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-2.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-3.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-4.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-5.png'],
     description: 'Using Elemental Burst restores 20% HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveling_Doctor'
  },


  {
    id: 'artifact-1-1',
    name: 'Adventurer',
    rarity: Rarity.ONE_STAR,
    image: '/images/Genshin/Artifact_set/Adventurer.png',
    pieceImages: ['/images/Genshin/Artifact_set/Adventurer-1.png',
      '/images/Genshin/Artifact_set/Adventurer-2.png',
      '/images/Genshin/Artifact_set/Adventurer-3.png',
      '/images/Genshin/Artifact_set/Adventurer-4.png',
      '/images/Genshin/Artifact_set/Adventurer-5.png'],
    description: 'Opening a chest regenerates 30% Max HP over 5s.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Adventurer'
  },
  {
    id: 'artifact-1-2',
    name: 'Lucky Dog',
    rarity: Rarity.ONE_STAR,
    image: '/images/Genshin/Artifact_set/Lucky Dog.png',
    pieceImages: ['/images/Genshin/Artifact_set/Lucky Dog-1.png',
      '/images/Genshin/Artifact_set/Lucky Dog-2.png',
      '/images/Genshin/Artifact_set/Lucky Dog-3.png',
      '/images/Genshin/Artifact_set/Lucky Dog-4.png',
      '/images/Genshin/Artifact_set/Lucky Dog-5.png'],
    description: 'Picking up Mora restores 300 HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Lucky_Dog'
  },
  {
    id: 'artifact-1-3',
    name: 'Traveling Doctor',
    rarity: Rarity.ONE_STAR,
    image: '/images/Genshin/Artifact_set/Traveling Doctor.png',
    pieceImages: ['/images/Genshin/Artifact_set/Traveling Doctor-1.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-2.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-3.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-4.png',
      '/images/Genshin/Artifact_set/Traveling Doctor-5.png'],
     description: 'Using Elemental Burst restores 20% HP.',
    moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Traveling_Doctor'
  }

];

export const genshinQuests: Quest[] = [
  // Archon Quests
    
  { id: 'archon-1', name: 'Prologue Act I', category: 'Archon Quest', image: '/images/Genshin/Quests/The Outlander Who Caught the Wind.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Outlander_Who_Caught_the_Wind' },
  
  { id: 'archon-2', name: 'Prologue Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/For a Tomorrow Without Tears.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/For_a_Tomorrow_Without_Tears' },
  { id: 'archon-3', name: 'Prologue Act III', category: 'Archon Quest', image: '/images/Genshin/Quests/Song of the Dragon and Freedom.png', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Song_of_the_Dragon_and_Freedom' },
  { id: 'archon-4', name: 'Chapter I Act I ', category: 'Archon Quest', image: '/images/Genshin/Quests/Of the Land Amidst Monoliths.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Of_the_Land_Amidst_Monoliths' },
  { id: 'archon-5', name: 'Chapter I Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/Farewell, Archaic Lord.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Farewell,_Archaic_Lord' },
  { id: 'archon-6', name: 'Chapter I Act III ', category: 'Archon Quest', image: '/images/Genshin/Quests/A New Star Approaches.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_New_Star_Approaches' },

  { id: 'archon-7', name: 'Chapter I Act IV Prelude ', category: 'Archon Quest', image: '/images/Genshin/Quests/Bough Keeper Dainsleif.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bough_Keeper:_Dainsleif?file=Chapter_Traveler.png' },
  { id: 'archon-8', name: 'Chapter I Act IV ', category: 'Archon Quest', image: '/images/Genshin/Quests/We Will Be Reunited.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/We_Will_Be_Reunited?file=Story_Card_Chapter_I_Act_IV.png' },
  { id: 'archon-9', name: 'Chapter II Prologue ', category: 'Archon Quest', image: '/images/Genshin/Quests/Autumn Winds, Scarlet Leaves.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Autumn_Winds,_Scarlet_Leaves' },
  { id: 'archon-10', name: 'Chapter II Act I ', category: 'Archon Quest', image: '/images/Genshin/Quests/The Immovable God and the Eternal Euthymia.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Immovable_God_and_the_Eternal_Euthymia' },
  { id: 'archon-11', name: 'Chapter II Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/Stillness, the Sublimation of Shadow.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Stillness,_the_Sublimation_of_Shadow' },

  { id: 'archon-12', name: 'Chapter II Act III ', category: 'Archon Quest', image: '/images/Genshin/Quests/Omnipresence Over Mortals.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Omnipresence_Over_Mortals' },
  { id: 'archon-13', name: 'Chapter II Act IV ', category: 'Archon Quest', image: '/images/Genshin/Quests/Requiem of the Echoing Depths.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Requiem_of_the_Echoing_Depths' },
  { id: 'archon-14', name: 'Chapter III Act I ', category: 'Archon Quest', image: '/images/Genshin/Quests/Through Mists of Smoke and Forests Dark.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Through_Mists_of_Smoke_and_Forests_Dark' },
  { id: 'archon-15', name: 'Chapter III Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/The Morn a Thousand Roses Brings.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Morn_a_Thousand_Roses_Brings' },
  { id: 'archon-16', name: 'Chapter III Act III ', category: 'Archon Quest', image: '/images/Genshin/Quests/Dreams, Emptiness, Deception.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Dreams,_Emptiness,_Deception' },

  { id: 'archon-17', name: 'Chapter III Act IV ', category: 'Archon Quest', image: '/images/Genshin/Quests/King Deshret and the Three Magi.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/King_Deshret_and_the_Three_Magi' },
  { id: 'archon-18', name: 'Chapter III Act V ', category: 'Archon Quest', image: '/images/Genshin/Quests/Akasha Pulses, the Kalpa Flame Rises.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Akasha_Pulses,_the_Kalpa_Flame_Rises' },
  { id: 'archon-19', name: 'Chapter III Act VI ', category: 'Archon Quest', image: '/images/Genshin/Quests/Caribert.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Caribert' },
  { id: 'archon-20', name: 'Chapter IV Act I ', category: 'Archon Quest', image: '/images/Genshin/Quests/Prelude of Blancheur and Noirceur.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Prelude_of_Blancheur_and_Noirceur' },
  { id: 'archon-21', name: 'Chapter IV Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/As Light Rain Falls Without Reason.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/As_Light_Rain_Falls_Without_Reason' },

  { id: 'archon-22', name: 'Chapter IV Act III ', category: 'Archon Quest', image: '/images/Genshin/Quests/To the Stars Shining in the Depths.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/To_the_Stars_Shining_in_the_Depths' },
  { id: 'archon-23', name: 'Chapter IV Act IV ', category: 'Archon Quest', image: '/images/Genshin/Quests/Cataclysm\'s Quickening.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Cataclysm%27s_Quickening' },
  { id: 'archon-24', name: 'Chapter IV Act V ', category: 'Archon Quest', image: '/images/Genshin/Quests/Masquerade of the Guilty.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Masquerade_of_the_Guilty' },
  { id: 'archon-25', name: 'Chapter IV Act VI ', category: 'Archon Quest', image: '/images/Genshin/Quests/Bedtime Story.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Bedtime_Story' },
  { id: 'archon-26', name: 'Chapter V Act I ', category: 'Archon Quest', image: '/images/Genshin/Quests/Flowers Resplendent on the Sun-Scorched Sojourn.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Flowers_Resplendent_on_the_Sun-Scorched_Sojourn' },

  { id: 'archon-27', name: 'Chapter V Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/Black Stone Under a White Stone.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Black_Stone_Under_a_White_Stone' },
  { id: 'archon-28', name: 'Chapter V Act III ', category: 'Archon Quest', image: '/images/Genshin/Quests/Beyond the Smoke and Mirrors.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Beyond_the_Smoke_and_Mirrors' },
  { id: 'archon-29', name: 'Chapter V Act IV ', category: 'Archon Quest', image: '/images/Genshin/Quests/The Rainbow Destined to Burn.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Rainbow_Destined_to_Burn' },
  { id: 'archon-30', name: 'Chapter V Interlude ', category: 'Archon Quest', image: '/images/Genshin/Quests/All Fires Fuel the Flame.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/All_Fires_Fuel_the_Flame' },
  { id: 'archon-31', name: 'Chapter V Act V ', category: 'Archon Quest', image: '/images/Genshin/Quests/Incandescent Ode of Resurrection.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Incandescent_Ode_of_Resurrection' },

  { id: 'archon-32', name: 'Chapter V Act VI ', category: 'Archon Quest', image: '/images/Genshin/Quests/A Space and Time for You.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Space_and_Time_for_You' },
  { id: 'archon-33', name: 'Song of the Welkin Moon-Prelude ', category: 'Archon Quest', image: '/images/Genshin/Quests/The Journey Home.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/The_Journey_Home' },
  { id: 'archon-34', name: 'Song of the Welkin Moon-Act I ', category: 'Archon Quest', image: '/images/Genshin/Quests/A Dance of Snowy Tides and Hoarfrost Groves.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Dance_of_Snowy_Tides_and_Hoarfrost_Groves' },
  { id: 'archon-35', name: 'Song of the Welkin Moon-Act II ', category: 'Archon Quest', image: '/images/Genshin/Quests/Elegy of Dust and Lamplight.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Elegy_of_Dust_and_Lamplight' },
  { id: 'archon-36', name: 'Song of the Welkin Moon-Act III ', category: 'Archon Quest', image: '/images/Genshin/Quests/A Nation That Doesn\'t Exist.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Nation_That_Doesn%27t_Exist' },

  { id: 'archon-37', name: 'Song of the Welkin Moon-Act IV ', category: 'Archon Quest', image: '/images/Genshin/Quests/An Elegy for Faded Moonlight.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/An_Elegy_for_Faded_Moonlight' },
  { id: 'archon-38', name: 'Song of the Welkin Moon-Act V ', category: 'Archon Quest', image: '/images/Genshin/Quests/An Elegy for Faded Moonlight.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/A_Nocturne_of_the_Far_North' },
  { id: 'archon-39', name: 'Song of the Welkin Moon-Act VI ', category: 'Archon Quest', image: '/images/Genshin/Quests/An Elegy for Faded Moonlight.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Melting_Moonlight_in_the_Morning_Mist' }

  // Story Quests
  
];

export const genshinRegions: Region[] = [
  { id: 'natlan', name: 'Natlan', image: '/images/Genshin/Regions/Natlan.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Natlan' },
  { id: 'fontaine', name: 'Fontaine', image: '/images/Genshin/Regions/Fontaine.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Fontaine' },
  { id: 'sumeru', name: 'Sumeru', image: '/images/Genshin/Regions/Sumeru.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Sumeru' },
  { id: 'inazuma', name: 'Inazuma', image: '/images/Genshin/Regions/Inazuma.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Inazuma' },
  { id: 'liyue', name: 'Liyue', image: '/images/Genshin/Regions/Liyue.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Liyue' },
  { id: 'mondstadt', name: 'Mondstadt', image: '/images/Genshin/Regions/Mondstadt.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Mondstadt' },
  { id: 'region-7', name: 'Nod-Krai', image: '/images/Genshin/Regions/Nod-Krai.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Nod-Krai' },
  { id: 'region-8', name: 'Snezhnaya', image: '/images/Genshin/Regions/Snezhnaya.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Snezhnaya' },
  { id: 'region-9', name: 'Khaenri\'ah', image: '/images/Genshin/Regions/Khaenri\'ah.png',description:'', moreDetailsUrl: 'https://genshin-impact.fandom.com/wiki/Khaenri%27ah' }
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
    image: '/images/Wuthering/Characters/5-star/THE SHOREKEEPER-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/THE SHOREKEEPER-2.png',
    description: 'The mysterious guardian of the Black Shores. She watches over the world from the shadows.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Shorekeeper'
  },
  {
    id: 'xiangli-yao',
    name: 'Xiangli Yao',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/5-star/XIANGLI YAO-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/XIANGLI YAO-2.png',
    description: 'A brilliant artificer from Huaxu Academy. He seeks the ultimate truth of mechanics.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Xiangli_Yao'
  },
  {
    id: 'zhezhi',
    name: 'Zhezhi',
    rarity: Rarity.FIVE_STAR,
    element: 'Glacio',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/ZHEZHI-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/ZHEZHI-2.png',
    description: 'A shy painter whose artwork comes to life. She captures the fleeting beauty of the world.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Zhezhi'
  },
  {
    id: 'changli',
    name: 'Changli',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/5-star/CHANGLI-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CHANGLI-2.png',
    description: 'Counselor to the Jinzhou Magistrate. A master strategist with a fiery will.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Changli'
  },
  {
    id: 'jinhsi',
    name: 'Jinhsi',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/5-star/JINHSI-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/JINHSI-2.png',
    description: 'The Magistrate of Jinzhou. She carries the weight of the city\'s future on her shoulders.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jinhsi'
  },
  {
    id: 'yinlin',
    name: 'Yinlin',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/YINLIN-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/YINLIN-2.png',
    description: 'A Patroller of the Public Security Bureau. She hides her true nature behind a facade of elegance.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Yinlin'
  },
  {
    id: 'jiyan',
    name: 'Jiyan',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/5-star/JIYAN-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/JIYAN-2.png',
    description: 'General of the Midnight Rangers. A dragon-summoning warrior who protects the borders.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jiyan'
  },
  {
    id: 'calcharo',
    name: 'Calcharo',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/5-star/CALCHARO-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CALCHARO-2.png',
    description: 'Leader of the Ghost Hounds. A mercenary who lives by his own code.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Calcharo'
  },
  {
    id: 'verina',
    name: 'Verina',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/VERINA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/VERINA-2.png',
    description: 'A brilliant botanist from the New Federation. She talks to plants and heals her allies.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Verina'
  },
  {
    id: 'encore',
    name: 'Encore',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/ENCORE-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/ENCORE-2.png',
    description: 'A consultant from the Black Shores. She is accompanied by two wooly plushies.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Encore'
  },
  {
    id: 'lingyang',
    name: 'Lingyang',
    rarity: Rarity.FIVE_STAR,
    element: 'Glacio',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/5-star/LINGYANG-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/LINGYANG-2.png',
    description: 'A member of the Liondance Troupe. He is spirited and agile.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lingyang'
  },
  {
    id: 'jianxin',
    name: 'Jianxin',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/5-star/JIANXIN-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/JIANXIN-2.png',
    description: 'A Taoist monk who wanders the world to train her martial arts.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jianxin'
  },
  {
    id: 'rover-spectro',
    name: 'Rover ',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/5-star/ROVER-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/ROVER-2.png',
    description: 'The awakened one who carries the sound of the world.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rover'
  },

  {
    id: 'character-5-14',
    name: 'Augusta',
    rarity: Rarity.FIVE_STAR,
    element: 'Electro',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/5-star/AUGUSTA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/AUGUSTA-2.png',
    description: 'Augusta is the undefeated gladiator in the arena and a fearless leader with a will of iron. She is a mere mortal, but has reached heights of glory attempted by only a few, and her blade speaks her power loud and clear.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Augusta'
  },
  {
    id: 'character-5-15',
    name: 'Brant',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/5-star/BRANT-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/BRANT-2.png',
    description: 'As captain of the Fool\'s Troupe, Brant exudes a carefree, easygoing charm, unbound by convention. Beneath his flamboyant persona lies a genuine heart, deeply devoted to his family and companions. His life is dedicated to securing a safe haven for the Troupe\'s members',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Brant'
  },
  {
    id: 'character-5-16',
    name: 'Camellya',
    rarity: Rarity.FIVE_STAR,
    element: 'Havoc',
    weaponType: 'Swprd',
    image: '/images/Wuthering/Characters/5-star/CAMELLYA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CAMELLYA-2.png',
    description: 'Bloom Bearer from the Black Shores, Camellya is a laid-back character free from shackles, with her personal aroma of "danger." Intrigued by the belief in fate, she wanders the lands of her own accord, following such a chain of scenarios and its vague guidance.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Camellya'
  },
  {
    id: 'character-5-17',
    name: 'Cantarella',
    rarity: Rarity.FIVE_STAR,
    element: '',
    weaponType: '',
    image: '/images/Wuthering/Characters/5-star/CANTARELLA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CANTARELLA-2.png',
    description: '',
    moreDetailsUrl: ''
  },
  {
    id: 'character-5-18',
    name: 'Carlotta',
    rarity: Rarity.FIVE_STAR,
    element: 'Havoc',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/CARLOTTA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CARLOTTA-2.png',
    description: 'The Fisalia family\'s thirty-sixth head, Cantarella Fisalia. She locks your gaze with eyes as deep as the ocean, where dark tides seem to surge and swirl. For a moment, you think you glimpse something in the ocean\'s depths—but you are unsure if it is the shadow of a giant sea creature... or the tail feathers of the Celestial Steed.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cantarella'
  },

  {
    id: 'character-5-19',
    name: 'Cartethyia',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/5-star/CARTETHYIA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CARTETHYIA-2.png',
    description: 'The powers of the Sentinel and Threnodian clash and unite within her, propelling her into an uncertain future. Whether the future is bright or dim, she will hold the blade firmly and confront all that comes her way.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cartethyia'
  },
  {
    id: 'character-5-20',
    name: 'Chisa',
    rarity: Rarity.FIVE_STAR,
    element: 'Havoc',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/5-star/CHISA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CHISA-2.png',
    description: 'Chisa is a playable Havoc Mutant Resonator in Wuthering Waves. Chisa is a conscientious, level-headed student from the Startorch Academy. To her, everything can be broken down, analyzed, and resolved, with the exception of human bonding. Bonds can be severed, but this fragility is what makes them precious.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chisa'
  },
  {
    id: 'character-5-21',
    name: 'Ciaccona',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Pistols',
    image: '/images/Wuthering/Characters/5-star/CIACCONA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/CIACCONA-2.png',
    description: 'Ciaccona, the bard of Rinascita, is free-spirited, romantic, sincere, and passionate. On her journey, she sang radiant poems of saints and heroes, weaving tales of people, miracles, turmoil, and suffering—along with the sorrow of death and farewell.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Ciaccona'
  },
  {
    id: 'character-5-22',
    name: 'Galbrena',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Pistols',
    image: '/images/Wuthering/Characters/5-star/Galbrena-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/Galbrena-2.png',
    description: 'Galbrena (Chinese: 嘉贝莉娜) is a playable Fusion Congenital Resonator in Wuthering Waves. Once a Septimontian known as Angel, she is now a formidable "Discord Slayer" who wields the ability to consume the frequencies of Tacet Discords she hunts across Solaris, with the aid of the notorious Chimera. Her identity as a "Fiend of Ever-burning Flame", a huntress spoken in legend corrupted by the Dark Tide, is now reborn anew with her responsibilities as Consultant of the Black Shores.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Galbrena'
  },
  {
    id: 'character-5-23',
    name: 'Iuno',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Guantlets',
    image: '/images/Wuthering/Characters/5-star/IUNO-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/IUNO-2.png',
    description: 'Iuno is a Priestess well-known in Septimont for being a prodigy. She is blessed with the infallible ability to see the future by studying how moonlight changes.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Iuno'
  },

  {
    id: 'character-5-24',
    name: 'Lupa',
    rarity: Rarity.FIVE_STAR,
    element: 'Fusion',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/5-star/LUPA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/LUPA-2.png',
    description: 'The star gladiator of Septimont, a warrior with a pure heart, untamed spirit, intense passion, and immense potential. She will relentlessly pursue the things she admires, cherishing each moment that allows her to indulge in competition and self-expression on stage.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lupa'
  },
  {
    id: 'character-5-25',
    name: 'Phoebe',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/PHOEBE-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/PHOEBE-2.png',
    description: 'Phoebe, an Acolyte of the Order of the Deep, always carries herself with warmth and grace.\n\n Devout and steadfast in her adherence to the Order\'s doctrines, she embodies exceptional self-discipline. Yet beneath her composed exterior burns a vibrant spirit, alight with heartfelt joy for all she holds dear.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Phoebe'
  },
  {
    id: 'character-5-26',
    name: 'Phrolova',
    rarity: Rarity.FIVE_STAR,
    element: 'Havoc',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/5-star/PHROLOVA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/PHROLOVA-2.png',
    description: 'The silent and somber Overseer of the Fractsidus, Phrolova carries an endless sadness that envelops everyone around her. She weaves music that bridges the gap between life and death, crafting an ideal world within her heart.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Phrolova'
  },
  {
    id: 'character-5-27',
    name: 'Qiuyuan',
    rarity: Rarity.FIVE_STAR,
    element: 'Aero',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/5-star/Qiuyuan-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/Qiuyuan-2.png',
    description: 'Qiuyuan (Chinese: 仇远) is a playable Aero Unclear Resonator in Wuthering Waves. Former senior agent of Mingting\'s Internal Security Agency, he is a swordsman of cool resilience and absolute integrity, wandering Huanglong alone and seeks not fame nor high office, but mastery of swordsmanship and a life guided by high morals.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Qiuyuan'
  },
  {
    id: 'character-5-28',
    name: 'Roccia',
    rarity: Rarity.FIVE_STAR,
    element: 'Havoc',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/5-star/ROCCIA-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/ROCCIA-2.png',
    description: 'Roccia is a gifted improvisational comedian and the First Mate of the Fool\'s Troupe, known for her mastery of stage props. With a tranquil, composed disposition, she navigates the ship\'s quarters, perched atop her giant box, meticulously ensuring the Troupe remains orderly and tidy.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Roccia'
  },
  {
    id: 'character-5-29',
    name: 'Zani',
    rarity: Rarity.FIVE_STAR,
    element: 'Spectro',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/5-star/ZANI-1.png',
    detailImage: '/images/Wuthering/Characters/5-star/ZANI-2.png',
    description: 'Zani, a serious and reliable Montelli employee, follows a strict routine and manages tasks with ease. For years, she has clocked in on time without fail, finding as much enjoyment in her well-ordered life as in her carefully planned moments of leisure.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Zani'
  },




  // 4 Stars
  {
    id: 'yangyang',
    name: 'Yangyang',
    rarity: Rarity.FOUR_STAR,
    element: 'Aero',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/4-star/YANGYANG-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/YANGYANG-2.png',
    description: 'An Outrider of the Midnight Rangers. Gentle as the wind but fierce in battle.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Yangyang'
  },
  {
    id: 'chixia',
    name: 'Chixia',
    rarity: Rarity.FOUR_STAR,
    element: 'Fusion',
    weaponType: 'Pistols',
    image: '/images/Wuthering/Characters/4-star/CHIXIA-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/CHIXIA-2.png',
    description: 'A Junior Patroller in Jinzhou. She dreams of becoming a hero.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chixia'
  },
  {
    id: 'baizhi',
    name: 'Baizhi',
    rarity: Rarity.FOUR_STAR,
    element: 'Glacio',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/4-star/BAIZHI-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/BAIZHI-2.png',
    description: 'A researcher at Huaxu Academy. Her Remnant creature protects her.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Baizhi'
  },
  {
    id: 'danjin',
    name: 'Danjin',
    rarity: Rarity.FOUR_STAR,
    element: 'Havoc',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/4-star/DANJIN-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/DANJIN-2.png',
    description: 'A ranger hunting down thieves and bandits to atone for her past.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Danjin'
  },
  {
    id: 'mortefi',
    name: 'Mortefi',
    rarity: Rarity.FOUR_STAR,
    element: 'Fusion',
    weaponType: 'Pistols',
    image: '/images/Wuthering/Characters/4-star/MORTEFI-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/MORTEFI-2.png',
    description: 'A researcher from the New Federation. He has a fiery temper.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Mortefi'
  },
  {
    id: 'sanhua',
    name: 'Sanhua',
    rarity: Rarity.FOUR_STAR,
    element: 'Glacio',
    weaponType: 'Sword',
    image: '/images/Wuthering/Characters/4-star/SANHUA-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/SANHUA-2.png',
    description: 'A bodyguard for the Magistrate. Her eyes see the flow of frequencies.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sanhua'
  },
  {
    id: 'taoqi',
    name: 'Taoqi',
    rarity: Rarity.FOUR_STAR,
    element: 'Havoc',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/4-star/TAOQI-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/TAOQI-2.png',
    description: 'Director of Border Defense. She prefers a laid-back approach to work.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Taoqi'
  },

  {
    id: 'character-4-8',
    name: 'Aalto',
    rarity: Rarity.FOUR_STAR,
    element: 'Aero',
    weaponType: 'Pistols',
    image: '/images/Wuthering/Characters/4-star/AALTO-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/AALTO-2.png',
    description: 'Aalto is an enigmatic Information Broker, known for his elusive nature and welcoming smile. Rumor has it he\'ll provide any information at the right price. He was invited to join the Black Shores, a mysterious organization based on an isolated island, for his intel-gathering expertise.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Aalto'
  },
  {
    id: 'character-4-9',
    name: 'Lumi',
    rarity: Rarity.FOUR_STAR,
    element: 'Electro',
    weaponType: 'Broadblade',
    image: '/images/Wuthering/Characters/4-star/LUMI-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/LUMI-2.png',
    description: 'From dense forests to vast wilderness, places where navigator of Lollo Logistics Lumi has traveled bear witness to her charming personality, like a shaft of sunlight. Born disciplined, she is now enjoying her daily tasks as a diligent courier, honoring her duty of punctual delivery.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lumi'
  },
  {
    id: 'character-4-10',
    name: 'Youhu',
    rarity: Rarity.FOUR_STAR,
    element: 'Glacio',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/4-star/YOUHU-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/YOUHU-2.png',
    description: 'A voluble and whimsical antique appraiser. Known for creating limericks on the spot, she presents her appraisals with flair and precision. She sets up a stall on the street, ensuring antiques find their way to those who truly cherish them.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Youhu'
  },
  {
    id: 'character-4-11',
    name: 'Yuanwu',
    rarity: Rarity.FOUR_STAR,
    element: 'Electro',
    weaponType: 'Gauntlets',
    image: '/images/Wuthering/Characters/4-star/YUANWU-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/YUANWU-2.png',
    description: 'As the proprietor of a boxing gym, Yuanwu is a polite and modest gentleman, displaying composure and confidence in his actions. Having honed his skills in the Leihuang martial arts style, Yuanwu also earned mastery in health management. A perfect synergy of strength and elegance.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Yuanwu'
  },
  {
    id: 'character-4-12',
    name: 'Bu Ling',
    rarity: Rarity.FOUR_STAR,
    element: 'Electro',
    weaponType: 'Rectifier',
    image: '/images/Wuthering/Characters/4-star/Bu Ling-1.png',
    detailImage: '/images/Wuthering/Characters/4-star/Bu Ling-2.png',
    description: 'Buling (Chinese: 卜灵) is an upcoming Electro Resonator in Wuthering Waves. She is a Black Shores Consultant, known as the "Spiritchaser Taoist," who wanders far and wide investigating and sharing the strange and mysterious. She is a master of fortune-telling, feng shui, and other arts of divination. To cover the expenses in her travels, she sells talismans and offers her divination services, which she thinks of as a sort of guidance for those in need.',
    moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Buling'
  }

];

export const wutheringWeapons: Weapon[] = [
  { id: 'weapon-5-19', name: "Stellar Symphony", rarity: Rarity.FIVE_STAR, mainStat: 'HP', subStat: 'ER', image: '/images/Wuthering/Weapons/5-star/Star Sequence Convergence.png', description: 'The Shorekeeper\'s signature rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stellar_Symphony' },
  { id: 'weapon-5-25', name: "Verdant Summit", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Wuthering/Weapons/5-star/Azure Scales and Thousands of Peaks.png', description: 'Jiyan\'s signature broadblade.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Verdant_Summit' },
  { id: 'weapon-5-20', name: "Stringmaster", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Wuthering/Weapons/5-star/Puppet Master.png', description: 'Yinlin\'s signature rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stringmaster' },
  { id: 'weapon-5-2', name: "Ages of Harvest", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Wuthering/Weapons/5-star/Harmonious season.png', description: 'Jinhsi\'s signature broadblade.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Ages_of_Harvest' },
  { id: 'weapon-5-3', name: "Blazing Brilliance", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Wuthering/Weapons/5-star/He Yiluming.png', description: 'Changli\'s signature sword.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Blazing_Brilliance' },
  { id: 'weapon-5-26', name: "Verity's Handle", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Wuthering/Weapons/5-star/Verity\'s Handle.png', description: 'Xiangli Yao\'s signature gauntlet.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Verity%27s_Handle' },
  { id: 'weapon-5-15', name: "Rime-Draped Sprouts", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit DMG', image: '/images/Wuthering/Weapons/5-star/Jade branches and ice silk.png', description: 'Zhezhi\'s signature rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rime-Draped_Sprouts' },
  { id: 'weapon-5-16', name: "Lustrous Razor", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/5-star/sparkling light.png', description: 'Standard 5-star broadblade.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lustrous_Razor' },
  { id: 'weapon-5-1', name: "Abyss Surges", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/5-star/Qingyuan\'s angry waves.png', description: 'Standard 5-star gauntlets.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Abyss_Surges' },
  { id: 'weapon-5-17', name: "Static Mist", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Wuthering/Weapons/5-star/Smoke of stillness.png', description: 'Standard 5-star pistols.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Static_Mist' },
  { id: 'weapon-5-18', name: "Emerald of Genesis", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'Crit Rate', image: '/images/Wuthering/Weapons/5-star/Thousand-year-old Fu River.png', description: 'Standard 5-star sword.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Emerald_of_Genesis' },

  { id: 'weapon-5-4', name: "Blazing Justice", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Flame and Light Judgment.png', description: 'It heralds justice, precise and inexorable as a clock\'s toll. All sins are cleansed in flame, dissipating like night beneath the dawn\'s gaze.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Blazing_Justice' },
  { id: 'weapon-5-5', name: "Bloodpact's Pledge", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/5-star/Blood Oath.png', description: 'This weapon is a testament to the unbreakable blood pact: One shall never betray, never surrender, and fight until the last drop of blood is shed.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Bloodpact%27s_Pledge' },
  { id: 'weapon-5-6', name: "Cosmic Ripples", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/5-star/Rippling Floating Record.png', description: 'Take hold of the frozen Rectifier, a powerful tool imbued with the energy of the celestial lake. Let it lead you to ultimate knowledge and vanquish all obstacles in your path.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cosmic_Ripples' },
  { id: 'weapon-5-7', name: "Defier's Thorn", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Wuthering/Weapons/5-star/Crown of Unyielding Destiny.png', description: 'The surging tides force the crown of thorns upon the knight, out of which the knight forges this sword. Unburdened by the crown, the knight waded through the roaring waves unwaveringly.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Defier%27s_Thorn' },
  { id: 'weapon-5-8', name: "Emerald Sentence", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Cutting bamboo.png', description: 'Bamboo, hollow yet full; People, whole yet seldom true. Bamboo speaks without deceit, acts without conceit, seeks no vanity. Few ever measure up thus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Emerald_Sentence' },

  { id: 'weapon-5-9', name: "Kumokiri", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Kumokiri.png', description: 'Kumokiri is a Broadblade weapon in Wuthering Waves.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Kumokiri' },
  { id: 'weapon-5-10', name: "Lethean Elegy", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/The Chapter of Forgetfulness in the Netherworld.png', description: 'I am not there. I do not die. I shall be death\'s companion—with euphoric delights I drown my fear, with the coming days I trade for the past.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lethean_Elegy' },
  { id: 'weapon-5-11', name: "Luminous Hymn", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Singing back to the light.png', description: '"The Sentinel\'s grace, how sweet thou art. Our home was lost, but found at last. With twigs between my beaks, I brave the waves.Bound by love, we\'re crowned with holy light."', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Luminous_Hymn' },
  { id: 'weapon-5-12', name: "Lux & Umbra", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/5-star/Twin Light and Shadow.png', description: 'From darkness she seizes power, layering sins upon herself. To hunt. To kill. To deliver a relentless and fatal blow to all evil. From the light she falls, with her vows etched in her mind. For the deceased. For the living. For her pistols’ true targets.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lux_%26_Umbra' },
  { id: 'weapon-5-13', name: "Moongazer's Sigil", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Commentary on the persistence of all things.png', description: 'By what means do all things endure? By light and heat, by matter and word, by the mechanics of converging chances, by the soft dissolution into silence, by a moment that mimics the eternal... All things rise and fall in endless rhythm, each bearing its meaning. As for hers, it lies here within her grasp.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Moongazer%27s_Sigil' },

  { id: 'weapon-5-14', name: "Red Spring", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Tailor Spring.png', description: 'A camellia bud silently unfurls. As promised, she holds this infinite world in bloom in her palms, where fine crimson vines twine around her fingertips. The dull ache, like sand scratching against the heart, is proof of your fateful encounter.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Red_Spring' },
  { id: 'weapon-5-21', name: "The Last Dance", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/5-star/Death and Dance.png', description: 'The radiant crystals, ever shattering and reshaping, beckon you into a treacherous dance, a gamble where life is the wager. Cortado, cortado... relentlessly draw each other in until all we can hear are our quivers. When the crimson finale arrives, remember, death comes for all.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Last_Dance' },
  { id: 'weapon-5-22', name: "Thunderflare Dominion", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/The power to wield the crown and forge thunder.png', description: 'Thunder shall purge her pain and weakness. From the crucible of blood and sand, the Sun rises. Not dimmed by dust, but ablaze in her full radiance.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Thunderflare_Dominion' },
  { id: 'weapon-5-23', name: "Tragicomedy", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/tragicomedy.png', description: 'The joys and sorrows of life dance in an endless circle; Pain and tears shift in an instant into a carnival.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tragicomedy' },
  { id: 'weapon-5-24', name: "Unflickering Valor", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/5-star/Undying Route.png', description: 'Blistering winds and crashing waves, the sea devours all. Only a lonely boat lamp stands alight! Onwards! Towards the edge of the world you shall sail!', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Unflickering_Valor' },
  { id: 'weapon-5-27', name: "Wildfire Mark", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/5-star/Flame Mark.png', description: 'The young wolf races through the wilds, shedding every shadow that once held her back. The lone wolf strides into the arena, cutting down each obstacle in her path. She seizes victory. She claims glory. She raises everything she has high above. She belongs to the arena, but even more, she belongs to herself.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Wildfire_Mark' },
  { id: 'weapon-5-28', name: "Woodland Aria", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/5-star/Aria in the Woods.png', description: 'All things exist within the lines of poetry. Every sound has its meters and rhymes. The forest\'s melodies ascend in spirals toward the moon\'s silvered grace, harmonized by the nightingales\' chorus. When the final note falls and vanishes into the silent earth, a flawless chord echoes endlessly in the depths of this boundless realm.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Woodland_Aria' },
  { id: 'weapon-5-29', name: "Whispers of Sirens", rarity: Rarity.FIVE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/5-star/The whispers of the sea.png', description: 'From the sea, some see stars, some catch the moon, and some hear countless whispers and murmurs. Those murmurs seep into her venom, flowing through every winding river. In the end, the murmurs envelope, like the bell of a jellyfish, like the sea.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Whispers_of_Sirens' },


  //4-star
  { id: 'weapon-4-1', name: "Aether Strike", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/4-star/Aether Strike.png', description: 'A pair of Gauntlets awarded to Gladiators of exceptional merit. Its engravings draw inspiration from Griffrexes—natural-born hunters and the first allies Septimontians found in this land. Their bond needs no words, radiant and pure, like the blazing sun that watches over all.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Aether_Strike' },
  { id: 'weapon-4-2', name: "Amity Accord", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Wuthering/Weapons/4-star/Amity Accord.png', description: 'A weapon designed to commemorate the Midnight Rangers\' comradeship. "Thin garments yield to icy moons, while armor withstands the chill of stars."', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Amity_Accord' },
  { id: 'weapon-4-3', name: "Augment", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/4-star/Augment.png', description: 'This Rectifier is a ceremonial weapon used by the Jinzhou Magistrate of Huanglong at the inauguration ceremony. The golden ginkgo leaf pattern represents that Huanglong should be like ginkgo, although it is left alone in the world, it is still prosperous and long-lasting.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Augment' },
  { id: 'weapon-4-4', name: "Aureate Zenith", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/4-star/Aureate Zenith.png', description: 'A Broadblade awarded to Gladiators of exceptional merit. Its engravings draw inspiration from Griffrexes—natural-born hunters and the first allies Septimontians found in this land. Their bond needs no words, radiant and pure, like the blazing sun that watches over all.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Aureate_Zenith' },
  { id: 'weapon-4-5', name: "Autumn­trace", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/4-star/Autumn­trace.png', description: 'This Broadblade is a ceremonial weapon used by the Jinzhou Magistrate of the Huanglong province at the inauguration ceremony. The golden ginkgo leaf pattern represents that Huanglong should be like ginkgo, although it is left alone in the world, it is still prosperous and long-lasting.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Autumntrace' },

  { id: 'weapon-4-6', name: "Broadblade­#41", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Broadblade­41.png', description: 'Improved version of a mass-produced broadblade model developed in Huanglong. With its formidable performance and innovative technologies, this broadblade carries a weight only to be wielded by seasoned warriors.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Broadblade41' },
  { id: 'weapon-4-7', name: "Cadenza", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Cadenza.png', description: 'An ascending crescendo. These pistols unleash bullets with the force of thunder, tearing through the heavens like a symphony of destruction.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cadenza' },
  { id: 'weapon-4-8', name: "Call of the Abyss", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Call of the Abyss.png', description: 'Held by the keepers of this land, this scepter was once a symbol of dominion over its people and the architectural marvels they achieved. However, it has long lost its luster, and its grandeur blends into the ripples of the pipe organ melodies of Rinascita.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Call_of_the_Abyss' },
  { id: 'weapon-4-9', name: "Celestial Spiral", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Celestial Spiral.png', description: 'A prototype weapon designed by the Black Shores for elite combatants. These gauntlets take their name from the devastating might of a blazar — a galactic nucleus whose blinding radiance pierces the cosmos, shining unmistakably across billions of light years.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Celestial_Spiral' },
  { id: 'weapon-4-10', name: "Comet Flare", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Wuthering/Weapons/4-star/Comet Flare.png', description: 'The Rectifier born from the aerial phenomenon. The forger integrates the feelings of witnessing the alien stars into the weapon, making it look delicate and light, but it can be stable and constant, and it can be responsive.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Comet_Flare' },

  { id: 'weapon-4-11', name: "Commando of Conviction", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Commando of Conviction.png', description: 'A weapon designed to commemorate the Midnight Rangers\' courage. "A thousand echoes carry the war\'s tale, as spirits unite in resounding gorges of valor."', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Commando_of_Conviction' },
  { id: 'weapon-4-12', name: "Dauntless Evernight", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Wuthering/Weapons/4-star/Dauntless Evernight.png', description: 'A weapon designed to commemorate the Midnight Rangers\' preparedness. "Autumn fades in endless nights, ready blades gleam with silent might."', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dauntless_Evernight' },
  { id: 'weapon-4-13', name: "Discord", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Discord.png', description: 'A descending adagio. This broadblade dominates the battlefield with the power of discordance. The curtain never falls on a masterpiece.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Discord' },
  { id: 'weapon-4-14', name: "Endless Collapse", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Endless Collapse.png', description: 'A prototype weapon designed by the Black Shores for elite combatants. This sword takes its name from the heart of a blazar — a galactic nucleus whose blinding radiance pierces the cosmos, shining unmistakably across billions of light years.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Endless_Collapse' },
  { id: 'weapon-4-15', name: "Fables of Wisdom", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Fables of Wisdom.png', description: 'This weapon draws its design inspiration from the play—Fables of Wisdom. A wayfarer once carried this sword, who spun fables of wisdom, passing on insights in the form of witty jests. Keen ears listened to the stories for the truth, while shallow minds heard only amusing punchlines.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fables_of_Wisdom' },

  { id: 'weapon-4-16', name: "Feather Edge", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/4-star/Feather Edge.png', description: 'A Sword awarded to Gladiators of exceptional merit. Its engravings draw inspiration from Griffrexes—natural-born hunters and the first allies Septimontians found in this land. Their bond needs no words, radiant and pure, like the blazing sun that watches over all.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Feather_Edge' },
  { id: 'weapon-4-17', name: "Fusion Accretion", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Fusion Accretion.png', description: 'A prototype weapon designed by the Black Shores for elite combatants. These pistols takes their name from the devastating might of a blazar — a galactic nucleus whose blinding radiance pierces the cosmos, shining unmistakably across billions of light years.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fusion_Accretion' },
  { id: 'weapon-4-18', name: "Gauntlets#21D", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Gauntlets21D.png', description: 'Huaxu Academy has independently improved and developed the first set of highly practical high-performance Gauntlets based on the previous source energy weapons, representing the care and warmth of the Academy, stable and lasting.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Gauntlets21D' },
  { id: 'weapon-4-19', name: "Helios Cleaver", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Helios Cleaver.png', description: 'The Broadblade born from the aerial phenomenon. The blacksmith incorporates the feelings of witnessing the alien star into the weapon, making it look hollow and light, but it can exert the invincible gravity of the starfall.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Helios_Cleaver' },
  { id: 'weapon-4-20', name: "Hollow Mirage", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Hollow Mirage.png', description: 'The Gauntlets born from the strange phenomenon in the sky. The blacksmith infused the feelings of witnessing the strange star into the weapon, making it look hollow and light, but it can exert a tremendous momentum while protecting the user.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hollow_Mirage' },

  { id: 'weapon-4-21', name: "Jinzhou Keeper", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Jinzhou Keeper.png', description: 'A weapon designed to commemorate the Midnight Rangers\' vigilant protection for Jinzhou. "Cast your gaze towards the north, where the city\'s silhouette fades, its gates veiled by the tranquil rain."', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jinzhou_Keeper' },
  { id: 'weapon-4-22', name: "Legend of Drunken Hero", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Legend of Drunken Hero.png', description: 'This weapon draws its design inspiration from the play—Legend of Drunken Hero. From the cup flows a liquid that grants courage and strength, empowering the hero to defy fate and turn the tide with his gauntlets. Yet in this intoxicating delight lies peril-dulled senses become the hero\'s undoing as enemies close in. Thus, in those wine-stained pages, one always read about triumphs followed by defeats.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Legend_of_Drunken_Hero' },
  { id: 'weapon-4-23', name: "Lumingloss", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Lumingloss.png', description: 'This Sword is a ceremonial weapon used by the Jinzhou Magistrate of Huanglong at the inauguration ceremony. The golden ginkgo leaf pattern represents that Huanglong should be like ginkgo, although it is left in the world, it is still prosperous and long-lasting.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lumingloss' },
  { id: 'weapon-4-24', name: "Lunar Cutter", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Lunar Cutter.png', description: 'The Sword born from the aerial phenomenon. The forger integrates the feelings of witnessing the alien star into the weapon, making it look light and sharp, but it can exert the energy of breaking the sky and cutting iron like mud.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lunar_Cutter' },
  { id: 'weapon-4-25', name: "Marcato", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Marcato.png', description: 'A descending adagio. These gauntlets pulsate with the power of surging waves, shattering anything in their path like a deadly hymn.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Marcato' },

  { id: 'weapon-4-26', name: "Meditations on Mercy", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Meditations on Mercy.png', description: 'This weapon draws its design inspiration from the play—Meditations on Mercy. In the brief pauses between each swing, a warrior wrestles with an inner conflict: to bring down righteous punishment or extend a hand of redemption? Behind every clash of steel is the struggle between wrath and mercy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Meditations_on_Mercy' },
  { id: 'weapon-4-27', name: "Novaburst", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Novaburst.png', description: 'Pistols born from the strange phenomena in the sky. The forger infused the weapon with the feelings from witnessing the strange star, making it look hollow and light, yet extremely stable, with the power of thunder when it fires.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Novaburst' },
  { id: 'weapon-4-28', name: "Ocean's Gift", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Ocean\'s Gift.png', description: 'To fishers, the sea is their field of harvest. Harvest means hope.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Ocean%27s_Gift' },
  { id: 'weapon-4-29', name: "Overture", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Overture.png', description: 'An ascending crescendo. This enchanting sword effortlessly cuts through anything in its way, like a glorious prelude.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Overture' },
  { id: 'weapon-4-30', name: "Pistols#26", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Pistols26.png', description: 'The Huaxu Academy has independently improved and developed the first highly practical high-performance Pistols based on the previous source energy weapons, representing the Academy\'s meticulous research and pointing directly to the profound.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Pistols26' },

  { id: 'weapon-4-31', name: "Radiant Dawn", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/4-star/Radiant Dawn.png', description: 'A Rectifier awarded to Gladiators of exceptional merit. Its engravings draw inspiration from Griffrexes—natural-born hunters and the first allies Septimontians found in this land. Their bond needs no words, radiant and pure, like the blazing sun that watches over all.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Radiant_Dawn' },
  { id: 'weapon-4-32', name: "Rectifier#25", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Rectifier25.png', description: 'Improved version of a Rectifier prototype from the Huanglong next-gen mass production weaponry project. With surging power and highly purified lens, its sound is only played by the wise of steel-like will.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rectifier25' },
  { id: 'weapon-4-33', name: "Relativistic Jet", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Relativistic Jet.png', description: 'A prototype weapon designed by the Black Shores for elite combatants. These pistols takes their name from the incessant course of destruction of a blazar — a galactic nucleus whose blinding radiance pierces the cosmos, shining unmistakably across billions of light years.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Relativistic_Jet' },
  { id: 'weapon-4-34', name: "Romance in Farewell", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Romance in Farewell.png', description: 'This weapon draws its design inspiration from the play—Romance in Farewell. This pistol was once the symbol of the aspiration for repute, the weight of unrequited love, and the tremors of unspoken words. When the trigger is pulled, and the curtain drops, it turns into a long farewell and a sign of lingering sorrow in the heart of the bereaved.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Romance_in_Farewell' },
  { id: 'weapon-4-35', name: "Solar Flame", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/4-star/Solar Flame.png', description: 'A pair of Pistols awarded to Gladiators of exceptional merit. Its engravings draw inspiration from Griffrexes—natural-born hunters and the first allies Septimontians found in this land. Their bond needs no words, radiant and pure, like the blazing sun that watches over all.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Solar_Flame' },

  { id: 'weapon-4-36', name: "Somnoire Anchor", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Somnoire Anchor.png', description: 'An anchor once used by Ivory Gatekeeper to stabilize the Somnoire. However, it now looks different ever since Ivory Gatekeeper transformed into a white car...', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Somnoire_Anchor' },
  { id: 'weapon-4-37', name: "Stonard", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'CRIT RATE', image: '/images/Wuthering/Weapons/4-star/Stonard.png', description: 'These Gauntlets are ceremonial weapon used at the inauguration ceremony of the Huanglong Magistrate. The golden ginkgo leaf pattern represents that Huanglong should be like a ginkgo, although it is left alone in the world, it is still prosperous and long-lasting.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stonard' },
  { id: 'weapon-4-38', name: "Sword#18", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Sword18.png', description: 'Improved version of a mass-produced sword model developed in Huanglong. With its sleek blade and minimalist design, this sword is exclusively crafted for the skilled hands of seasoned warriors.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sword18' },
  { id: 'weapon-4-39', name: "Thunderbolt", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Thunderbolt.png', description: 'These Pistols are ceremonial weapons used in the inauguration ceremony of the Jinzhou Magistrate of Huanglong. The golden ginkgo leaf pattern represents that Huanglong should be like the ginkgo, although it is left in the world, it is still thriving.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Thunderbolt' },
  { id: 'weapon-4-40', name: "Undying Flame", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Undying Flame.png', description: 'A weapon designed to commemorate the Midnight Rangers\' dedication. "Let my body ablaze, flames dance to banish all evil\'s haze."', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Undying_Flame' },

  { id: 'weapon-4-41', name: "Variation", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Variation.png', description: 'A descending adagio. This rectifier opens up an insightful window into the situation, changing the tune of the intense battle concerto.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Variation' },
  { id: 'weapon-4-42', name: "Waltz in Masquerade", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Waltz in Masquerade.png', description: 'This weapon draws its design inspiration from the play—Waltz in Masquerade. A waltz is a dance of spectacle and masquerade, where the grand symphony drowns whispered secrets and swirling dresses conceal the exchange of letters and promises. The dancers speak a silent language, as smooth and precise as the perfect resonance of a rectifier.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Waltz_in_Masquerade' },
  { id: 'weapon-4-43', name: "Waning Redshift", rarity: Rarity.FOUR_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Waning Redshift.png', description: 'A prototype weapon designed by the Black Shores for elite combatants. This broadblade takes its name from the fate of a blazar — a galactic nucleus whose blinding radiance pierces the cosmos, shining unmistakably across billions of light years.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Waning_Redshift' },
  

  //3-star
  { id: 'weapon-3-1', name: "Beguiling Melody", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Beguiling Melody.png', description: 'Forged from the scale of Jué, this weapon resembles a musical instrument more than a tool of destruction.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Beguiling_Melody' },
  { id: 'weapon-3-2', name: "Broadblade of Night", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Broadblade of Night.png', description: 'May victory prevail the lasting night. In addition to the sworn oath of protection, this broadblade also carries the resolution of those fighting souls.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Broadblade_of_Night' },
  { id: 'weapon-3-3', name: "Broadblade of Voyager", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/4-star/Broadblade of Voyager.png', description: 'The Broadblade provided by the Pioneer Association for the explorers is brightly colored, not easy to lose, hard in texture, and can cope with various extreme environments for a long time, and is very popular among the explorers.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Broadblade_of_Voyager' },
  { id: 'weapon-3-4', name: "Gauntlets of Night", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Gauntlets of Night.png', description: 'May victory prevail the lasting night. In addition to the sworn oath of protection, these gauntlets also commemorates the sacrifices of those brave souls.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Gauntlets_of_Night' },
  { id: 'weapon-3-5', name: "Gauntlets of Voyager", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Wuthering/Weapons/4-star/Gauntlets of Voyager.png', description: 'The Gauntlets provided by the Pioneer Association for the far walkers, with bright colors, not easy to lose, hard texture, can cope with various extreme environments for a long time, and are very popular among the explorer group.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Gauntlets_of_Voyager' },

  { id: 'weapon-3-6', name: "Guardian Broadblade", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/4-star/Guardian Broadblade.png', description: 'The first Jinzhou Magistrate, in memory of the mysterious person who helped defend the border and build the city, created the Guardian series under his guidance. Today, it has become an indispensable cornerstone for the development of new weapons.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Guardian_Broadblade' },
  { id: 'weapon-3-7', name: "Guardian Gauntlets", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Wuthering/Weapons/3-star/Guardian Gauntlets.png', description: 'The first Jinzhou Magistrate, in memory of the mysterious person who helped defend the border and build the city, created the Guardian series under his guidance. Now, it has become the cornerstone of the development of new weapons.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Guardian_Gauntlets' },
  { id: 'weapon-3-8', name: "Guardian Pistols", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Guardian Pistols.png', description: 'The first Jinzhou Magistrate, in memory of the mysterious person who helped defend the border and build the city, created the Guardian series under his guidance. Now, it has become the cornerstone of the development of new weapons.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Guardian_Pistols' },
  { id: 'weapon-3-9', name: "Guardian Rectifier", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Guardian Rectifier.png', description: 'The first Jinzhou Magistrate, in memory of the mysterious person who helped defend the border and build the city, created the Guardian series under his guidance. Now, it has become the cornerstone of the development of new weapons.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Guardian_Rectifier' },
  { id: 'weapon-3-10', name: "Guardian Sword", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Wuthering/Weapons/3-star/Guardian Sword.png', description: 'The first Jinzhou Magistrate, in memory of the mysterious person who helped defend the border and build the city, created the Guardian series under his guidance. Today, it has become the cornerstone of the development of new weapons.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Guardian_Sword' },

  { id: 'weapon-3-11', name: "Originite: Type I", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'DEF', image: '/images/Wuthering/Weapons/3-star/Originite Type I.png', description: 'To create new Tacetite weapons, the Huaxu Academy designed this test Broadblade for technical verification. Its main feature is healing through attacks, improving the physical abilities of Resonators while exhibiting impressive weapon performance.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Originite:_Type_I' },
  { id: 'weapon-3-12', name: "Originite: Type II", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Originite Type II.png', description: 'To create new Tacetite weapons, the Huaxu Academy designed this test Sword for technical verification. Its main feature is healing through attacks, improving the physical abilities of Resonators while exhibiting impressive weapon performance.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Originite:_Type_II' },
  { id: 'weapon-3-13', name: "Originite: Type III", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Originite Type III.png', description: 'To create new Tacetite weapons, the Huaxu Academy designed these test Pistols for technical verification. Their main feature is healing through attacks, improving the physical abilities of Resonators while exhibiting impressive weapon performance.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Originite:_Type_III' },
  { id: 'weapon-3-14', name: "Originite: Type IV", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'CRIT DMG', image: '/images/Wuthering/Weapons/3-star/Originite Type IV.png', description: 'To create new Tacetite weapons, the Huaxu Academy designed these test Gauntlets for technical verification. Their main feature is healing through attacks, improving the physical abilities of Resonators while exhibiting impressive weapon performance.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Originite:_Type_IV' },
  { id: 'weapon-3-15', name: "Originite: Type V", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'HP', image: '/images/Wuthering/Weapons/3-star/Originite Type V.png', description: 'To create new Tacetite weapons, the Huaxu Academy designed this test Rectifier for technical verification. Its main feature is healing through attacks, improving the physical abilities of Resonators while exhibiting impressive weapon performance.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Originite:_Type_V' },

  { id: 'weapon-3-16', name: "Pistols of Night", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Pistols of Night.png', description: 'May victory prevail the lasting night. This type of pistols not only carries the oath of protection but also contains the hope of rejuvenation.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Pistols_of_Night' },
  { id: 'weapon-3-17', name: "Pistols of Voyager", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Pistols of Voyager.png', description: 'The Pistols provided by the Pioneer Association for the far walkers, with bright colors, not easy to lose, hard texture, can cope with various extreme environments for a long time, and is very popular among the explorer group.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Pistols_of_Voyager' },
  { id: 'weapon-3-18', name: "Rectifier of Night", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Rectifier of Night.png', description: 'May victory prevail the lasting night. In addition to the sworn oath of protection, this rectifier signifies the confidence of those fighting souls.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rectifier_of_Night' },
  { id: 'weapon-3-19', name: "Rectifier of Voyager", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/3-star/Rectifier of Voyager.png', description: 'The Rectifier provided by the Pioneer Association for the explorers, with bright colors, not easy to lose, hard texture, can cope with various extreme environments for a long time, is very popular among the explorers.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rectifier_of_Voyager' },
  { id: 'weapon-3-20', name: "Sword of Night", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/3-star/Sword of Night.png', description: 'May victory prevail the lasting night. In addition to the sworn oath of protection, this sword also represents the ambition of those brave souls.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sword_of_Night' },

  { id: 'weapon-3-21', name: "Sword of Voyager", rarity: Rarity.THREE_STAR, mainStat: 'ATK', subStat: 'ER', image: '/images/Wuthering/Weapons/3-star/Sword of Voyager.png', description: 'The Sword provided by the Pioneer Association for the voyagers is bright in color, not easy to lose, hard in texture, and can cope with various extreme environments for a long time, and is very popular among the group of explorers.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sword_of_Voyager' },
  
  //2-star
  { id: 'weapon-2-1', name: "Tyro Broadblade", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/2-star/Tyro Broadblade.png', description: 'The onset of pinnacle pursuit. A broadblade designed for novice Resonators. Contains a power not to be underestimated under its simple outlook.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tyro_Broadblade' },
  { id: 'weapon-2-2', name: "Tyro Gauntlets", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/2-star/Tyro Gauntlets.png', description: 'The dawn of enduring endeavor. A pair of gauntlets designed for novice Resonators. Contains a power not to be underestimated under its simple outlook.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tyro_Gauntlets' },
  { id: 'weapon-2-3', name: "Tyro Pistols", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/2-star/Tyro Pistols.png', description: 'The inception of valiant venture. A pair of pistols designed for novice Resonators. Contains a power not to be underestimated under its simple outlook.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tyro_Pistols' },
  { id: 'weapon-2-4', name: "Tyro Rectifier", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/2-star/Tyro Rectifier.png', description: 'The origin of universal genesis. A Rectifier designed for novice Resonators. Contains a power not to be underestimated under its simple outlook.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tyro_Rectifier' },
  { id: 'weapon-2-5', name: "Tyro Sword", rarity: Rarity.TWO_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/2-star/Tyro Sword.png', description: 'The birth of revolutionary tides. A sword designed for novice Resonators. Contains a power not to be underestimated under its simple outlook.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tyro_Sword' },

  //1-star
  { id: 'weapon-1-1', name: "Training Broadblade", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/1-star/Training Broadblade.png', description: 'This broadblade is designed specifically for training and teaching, offering only the basic features.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Training_Broadblade' },
  { id: 'weapon-1-2', name: "Training Gauntlets", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/1-star/Training Gauntlets.png', description: 'These gauntlets are designed specifically for training and teaching, offering only the basic features.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Training_Gauntlets' },
  { id: 'weapon-1-3', name: "Training Pistols", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/1-star/Training Pistols.png', description: 'These pistols are designed specifically for training and teaching, offering only the basic features.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Training_Pistols' },
  { id: 'weapon-1-4', name: "Training Rectifier", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/1-star/Training Rectifier.png', description: 'This rectifier is designed specifically for training and teaching, offering only the basic features.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Training_Rectifier' },
  { id: 'weapon-1-5', name: "Training Sword", rarity: Rarity.ONE_STAR, mainStat: 'ATK', subStat: 'ATK%', image: '/images/Wuthering/Weapons/1-star/Training Sword.png', description: 'This sword is designed specifically for training and teaching, offering only the basic features.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Training_Sword' }


];

export const wutheringEchoes: Echo[] = [
  // Calamity / Overlord
  { id: 'bellborne', name: 'Bell-Borne Geochelone', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Bell-Borne Geochelone.png', description: 'A massive tortoise-like Tacet Discord. Provides shields.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Bell-Borne_Geochelone' },
  { id: 'dreamless', name: 'The Dreamless', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Dreamless.png', description: 'Manifestation of the Lament. Boosts Havoc Rover.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dreamless' },
  { id: 'jue', name: 'Jué', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Jué.png', description: 'The Sentinel of Jinzhou. A majestic dragon.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Jue' },
  { id: 'calamity-4', name: 'Hecate', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Hecate.png', description: 'Summon Crescent Servants to deal Havoc DMG to enemies. Triggering a Counterattack with the attacks resets the summon duration. Equipping this Echo in the main slot increases Coordinated Attack DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hecate/Echo' },
  { id: 'calamity-5', name: 'Nightmare: Hecate', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Nightmare Hecate.png', description: 'Transform into Nightmare: Hecate. Leap up and smash down to deliver 3 stages of Havoc DMG. The Resonator with the Echo equipped in the main slot gains Havoc DMG Bonus and Echo Skill DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Hecate/Echo' },
  { id: 'calamity-6', name: 'Reminiscence: Fleurdelys', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Reminiscence Fleurdelys.png', description: 'Summon the Windercleaver to deal Aero DMG. Equipping this Echo in the main slot grants Aero DMG Bonus. If equipped by Rover: Aero or Cartethyia, grant an extra Aero DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Reminiscence:_Fleurdelys' },
  { id: 'calamity-7', name: 'Reminiscence: Threnodian - Leviathan', class: 'Calamity', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/calamity/Reminiscence Threnodian - Leviathan.png', description: 'Summon Collapsing Horizon, dealing Havoc DMG. Resonators in the team deal additional Havoc DMG to enemies on hit. The Resonator with this Echo equipped in the main slot deals more Havoc DMG and Resonance Liberation DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Reminiscence:_Threnodian_-_Leviathan' },




  { id: 'overlord-1', name: 'Feilian Beringal', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Feilian Beringal.png', description: 'Transform into Feilian Beringal to continuously attack enemies, dealing Aero DMG. Increase current character\'s Aero DMG and Heavy Attack DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Feilian_Beringal/Echo' },
  
  { id: 'overlord-2', name: 'Nightmare: Feilian Beringal', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Feilian Beringal.png', description: 'Summon a Nightmare: Feilian Beringal to deal Aero DMG to enemies. The remaining Whirlwind Deam deals continuous Aero DMG. Equipping this Echo in the main slot grants Aero DMG Bonus and Heavy Attack DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Feilian_Beringal/Echo' },
  
  { id: 'overlord-3', name: 'Impermanence Heron', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Impermanence Heron.png', description: 'Transform into Impermanence Heron to deal Havoc DMG. Long press to spit flames and continuously deal Havoc DMG. Once the attacks hit any enemy, restore current character\'s Resonance Energy. Increase next character\'s damage dealt.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Impermanence_Heron/Echo' },
  { id: 'overlord-4', name: 'Nightmare: Impermanence Heron', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Impermanence Heron.png', description: 'Transform into Impermanence Heron to deal Havoc DMG. Long press to spit flames and continuously deal Havoc DMG. Once the attacks hit any enemy, restore current character\'s Resonance Energy. Increase next character\'s damage dealt.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Impermanence_Heron/Echo' },
  
  { id: 'overlord-5', name: 'Mourning Aix', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Mourning Aix.png', description: 'A tragic bird-like construct. Increases Spectro DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Mourning_Aix' },
  { id: 'overlord-6', name: 'Nightmare: Mourning Aix', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Mourning Aix.png', description: 'Summon a Nightmare: Mourning Aix to deal Spectro DMG to enemies. Deal increased DMG to enemies inflicted by Spectro Frazzle. Equipping this Echo in the main slot grants Spectro DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Mourning_Aix/Echo' },
  { id: 'overlord-7', name: 'Crownless', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Crownless.png', description: 'A mimicry of a knight. Increases Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Crownless' },
  { id: 'overlord-8', name: 'Nightmare: Crownless', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Crownless.png', description: 'Transform into Nightmare: Crownless and deal Havoc DMG to enemies. Equipping this Echo in the main slot grants Havoc DMG Bonus and Basic Attack DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Crownless/Echo' },
  { id: 'overlord-9', name: 'Dragon of Dirge', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Dragon of Dirge.png', description: 'Transform into Dragon of Dirge and summon a Grief Rift, deal Fusion DMG to enemies within over time. Equipping this Echo in the main slot grants Fusion DMG Bonus and Basic Attack DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dragon_of_Dirge/Echo' },
  { id: 'overlord-10', name: 'Lampylumen Myriad', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Lampylumen Myriad.png', description: 'Transform into Lampylumen Myriad to continuously attack enemies, dealing Glacio damage. Increase current character\'s Glacio DMG and Resonance Skill DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lampylumen_Myriad/Echo' },
  { id: 'overlord-11', name: 'Nightmare: Lampylumen Myriad', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Lampylumen Myriad.png', description: 'Transform into Lampylumen Myriad to continuously attack enemies, dealing Glacio damage. Increase current character\'s Glacio DMG and Resonance Skill DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Lampylumen_Myriad/Echo' },
  { id: 'overlord-12', name: 'Mech Abomination', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Mech Abomination.png', description: 'Deal Electro DMG to enemies nearby and create Mech Waste that explodes in a while. Increase the user\'s ATK.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Mech_Abomination/Echo' },
  { id: 'overlord-13', name: 'Tempest Mephis', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Tempest Mephis.png', description: 'Transform into Tempest Memphis to continuously attack enemies, dealing Electro DMG Increase current character\'s Electro DMG & Heavy Attack DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tempest_Mephis/Echo' },
  { id: 'overlord-14', name: 'Nightmare: Tempest Mephis', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Tempest Mephis.png', description: 'Transform into Tempest Memphis to continuously attack enemies, dealing Electro DMG Increase current character\'s Electro DMG & Heavy Attack DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Tempest_Mephis/Echo' },
  { id: 'overlord-15', name: 'Thundering Mephis', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Thundering Mephis.png', description: 'A mechanical predator infused with Electro.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Thundering_Mephis' },
  { id: 'overlord-16', name: 'Nightmare: Thundering Mephis', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Thundering Mephis.png', description: 'Transform into Thundering Mephis to deal Electro DMG. Increase the current character\'s Electro DMG and Resonance Liberation DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Thundering_Mephis/Echo' },
  { id: 'overlord-17', name: 'Inferno Rider', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Inferno Rider.png', description: 'A biker wielding hellfire. Increases Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Inferno_Rider' },
  { id: 'overlord-18', name: 'Nightmare: Inferno Rider', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Inferno Rider.png', description: 'Transform into Nightmare: Inferno Rider and deal Fusion DMG to enemies. Equipping this Echo in the main slot grants Fusion DMG Bonus and Resonance Skill DMG Bonus. Hold Echo Skill to transform into Nightmare: Inferno Rider and enter Riding Mode.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Inferno_Rider/Echo' },
  { id: 'overlord-19', name: 'Lorelei', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Lorelei.png', description: 'Transform into Lorelei and deal Havoc DMG to enemies. Equipping this Echo in the main slot grants Havoc DMG Bonus and Basic Attack DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lorelei/Echo' },
  { id: 'overlord-20', name: 'Sentry Construct', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Sentry Construct.png', description: 'Transform into Sentry Construct and deal Glacio DMG to enemies. Casting Resonance Liberation while equipped with this Echo enhances Strike Capacitor. At max Strike Capacitor, transform into Sentry Construct and deal Glacio DMG to enemies. Equipping this Echo in the main slot grants Glacio DMG Bonus and Resonance Skill Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sentry_Construct/Echo' },
  { id: 'overlord-21', name: 'Lioness of Glory', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Lioness of Glory.png', description: 'Summon the Halberd of Glory to deal Fusion DMG to nearby targets. The Resonator with this Echo equipped in the main slot gains Fusion and Resonance Liberation DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lioness_of_Glory/Echo' },
  { id: 'overlord-22', name: 'Nightmare: Kelpie', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Nightmare Kelpie.png', description: 'Transform into Nightmare: Kelpie to attack nearby targets, dealing Glacio DMG. The Resonator with this Echo equipped in the main slot gains Glacio and Aero DMG Bonus. Switching out the Resonator with Outro Skill summons Nightmares: Kelpie to deal Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Kelpie/Echo' },
  { id: 'overlord-23', name: 'The False Sovereign', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/The False Sovereign.png', description: 'Transform into the False Sovereign to attack nearby enemies and deal Electro DMG. The Resonator with this Echo equipped in the main slot gains Electro and Heavy Attack DMG Bonus. Upon casting Echo Skill, summon the False Sovereign to deal Electro DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_False_Sovereign/Echo' },
  { id: 'overlord-24', name: 'Lady of the Sea', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Lady of the Sea.png', description: 'Summon a Tidestorm to deal Aero DMG to enemies. The Resonator with this Echo equipped in the main slot gains Aero and Resonance Liberation DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lady_of_the_Sea/Echo' },
  { id: 'overlord-25', name: 'Fallacy of No Return', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Fallacy of No Return.png', description: 'Summon a fraction of the Fallacy of No Return\'s power to unleash powerful blows, granting bonus Energy Regen for the Resonator and bonus ATK for all team members.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fallacy_of_No_Return/Echo' },
  { id: 'overlord-26', name: 'Reminiscence: Fenrico', class: 'Overlord', rarity: Rarity.FIVE_STAR, image: '/images/Wuthering/Echoes/overlord/Reminiscence Fenrico.png', description: 'Summon the Talons of Decree to deal Aero DMG to nearby enemies. The Resonator with this Echo equipped in the main slot gains Aero and Heavy Attack DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Reminiscence:_Fenrico' },

  
  // Elites (Examples)
  { id: 'flautist', name: 'Flautist', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Flautist.png', description: 'Uses lasers to attack.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Flautist' },
  { id: 'chasm-guardian', name: 'Chasm Guardian', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Chasm Guardian.png', description: 'A rock golem.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chasm_Guardian' },

  { id: 'elite-4', name: 'Nightmare: Violet-Feathered Heron', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Nightmare Violet-Feathered Heron.png', description: 'Transform into Violet-Feathered Heron to block enemy attacks. Counterattack to deal Electro DMG and recover Concerto Energy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Violet-Feathered_Heron/Echo' },
  { id: 'elite-5', name: 'Violet-Feathered Heron', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Violet-Feathered Heron.png', description: 'Transform into Violet-Feathered Heron to block enemy attacks. Counterattack to deal Electro DMG and recover Concerto Energy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Violet-Feathered_Heron/Echo' },
  { id: 'elite-6', name: 'Nightmare: Cyan-Feathered Heron', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Nightmare Cyan-Feathered Heron.png', description: 'Transform into Cyan-Feathered Heron to charge at the enemies, dealing Aero DMG and interrupt enemy Special Skill.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Cyan-Feathered_Heron/Echo' },
  { id: 'cyan-heron', name: 'Cyan-Feathered Heron', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Cyan-Feathered Heron.png', description: 'An Aero bird.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cyan-Feathered_Heron' },
  { id: 'elite-7', name: 'Viridblaze Saurian', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Viridblaze Saurian.png', description: 'Summon a Viridblaze Saurian to continuously spit fire, dealing Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Viridblaze_Saurian/Echo' },
  { id: 'elite-8', name: 'Nightmare: Viridblaze Saurian', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Nightmare Viridblaze Saurian.png', description: 'Summon a Viridblaze Saurian to continuously spit fire, dealing Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Viridblaze_Saurian/Echo' },

  { id: 'elite-9', name: 'Hurriclaw', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Hurriclaw.png', description: 'Transform into Hurriclaw and charge forward, dealing Aero DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hurriclaw/Echo' },
  { id: 'elite-10', name: 'Spearback', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Spearback.png', description: 'Summon a Spearback to perform continuous claw strikes, dealing Physical DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Spearback/Echo' },
  { id: 'elite-11', name: 'Havoc Dreadmane', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Havoc Dreadmane.png', description: 'Transform into a Havoc Dreadmane to launch tail strikes, dealing Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Havoc_Dreadmane/Echo' },
  { id: 'elite-12', name: 'Hoochief', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Hoochief.png', description: 'Transform into Hoochief to deal Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hoochief/Echo' },
  { id: 'elite-13', name: 'Glacio Dreadmane', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Glacio Dreadmane.png', description: 'Transform into a Glacio Dreadmane to deal consecutive attacks. Can be cast in mid-air.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Glacio_Dreadmane/Echo' },

  { id: 'elite-14', name: 'Lightcrusher', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Lightcrusher.png', description: 'Lunge forward as a Lightcrusher, dealing Spectro DMG. Hold the Echo Skill to lunge for a longer distance after gathering momentum in the Lightcrusher form.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lightcrusher/Echo' },
  { id: 'elite-15', name: 'Kerasaur', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Kerasaur.png', description: 'Transform into a Kerasaur to leap into the air and slam down, dealing Aero DMG. Shortly after hittng the target, cast Echo Skill to charge at the target, dealing Aero DMG. The Resonator with this Echo equipped in the main slot gains Aero and Resonance Liberation DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Kerasaur/Echo' },
  { id: 'elite-16', name: 'Corrosaurus', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Corrosaurus.png', description: 'Summon a Corrosaurus to deal Fusion DMG to enemies. The Resonator with this Echo equipped in the main slot gains Fusion and Echo Skill DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Corrosaurus/Echo' },
  { id: 'elite-17', name: 'Chop Chop', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Chop Chop.png', description: 'Summon a Chop Chop to unleash a succession of attacks, dealing Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chop_Chop/Echo' },
  { id: 'elite-18', name: 'Cuddle Wuddle', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Cuddle Wuddle.png', description: 'Transform into Cuddle Wuddle and deal consecutive Physical DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cuddle_Wuddle/Echo' },

  { id: 'elite-19', name: 'Carapace', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Carapace.png', description: 'Transform into Carapace to perform spinning attacks, dealing Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Carapace/Echo' },
  { id: 'elite-20', name: 'Roseshroom', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Roseshroom.png', description: 'Summon a Roseshroom to fire a laser, and deal Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Roseshroom/Echo' },
  { id: 'elite-21', name: 'Nightmare: Roseshroom', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Nightmare Roseshroom.png', description: 'Summon a Roseshroom that fires a laser, and deal Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Roseshroom/Echo' },
  { id: 'elite-22', name: 'Stonewall Bracer', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Stonewall Bracer.png', description: 'Transform into Stonewall Bracer and charge forward. Successful hits grant a follow-up strike and a shield.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stonewall_Bracer/Echo' },
  { id: 'elite-23', name: 'Rage Against the Statue', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Rage Against the Statue.png', description: 'Transform into Rage Against the Statue and deal Spectro DMG to enemies. Hold the Echo Skill to charge towards enemies, dealing Spectro DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rage_Against_the_Statue/Echo' },

  { id: 'elite-24', name: 'Tambourinist', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Tambourinist.png', description: 'Summon a Tambourinist to aid the Resonators on the team in combat with Havoc DMG attacks.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tambourinist/Echo' },
  { id: 'elite-25', name: 'Nightmare: Tambourinist', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Nightmare Tambourinist.png', description: 'Summon a Tambourinist to aid the Resonators on the team in combat with Havoc DMG attacks.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Tambourinist/Echo' },
  { id: 'elite-26', name: 'Flautist', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Flautist.png', description: 'Transform into Flautist to deal Electro DMG and recover Concerto Energy on hit.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Flautist/Echo' },
  { id: 'elite-27', name: 'Chasm Guardian', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Chasm Guardian.png', description: 'Transform into Chasm Guardian to perform a powerful strike that deals Havoc DMG. Lose some HP on hit and then recover HP over time.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chasm_Guardian/Echo' },
  { id: 'elite-28', name: 'Rocksteady Guardian', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Rocksteady Guardian.png', description: 'Transform into Rocksteady Guardian to enter a Parry Stance. Counterattack when hit by Special Skill to interrupt enemy Special Skills and deal Spectro DMG based on Max HP.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rocksteady_Guardian/Echo' },

  { id: 'elite-29', name: 'Questless Knight', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Questless Knight.png', description: 'Transform into Questless Knight and deal Electro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Questless_Knight/Echo' },
  { id: 'elite-30', name: 'Diurnus Knight', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Diurnus Knight.png', description: 'Transform into Diurnus Knight and deal Spectro DMG to enemies. Deal increased DMG to enemies inflicted by Spectro Frazzle.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Diurnus_Knight/Echo' },
  { id: 'elite-31', name: 'Nocturnus Knight', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Nocturnus Knight.png', description: 'Transform into Nocturnus Knight and deal Havoc DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nocturnus_Knight/Echo' },
  { id: 'elite-32', name: 'Abyssal Patricius', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Abyssal Patricius.png', description: 'Transform into Abyssal Patricius and deal Glacio DMG to enemies. Equipping this Echo in the main slot grants Glacio DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Abyssal_Patricius/Echo' },
  { id: 'elite-33', name: 'Abyssal Gladius', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Abyssal Gladius.png', description: 'Transform into Abyssal Gladius and deal Glacio DMG to enemies. Hold the Echo Skill to launch a ranged attack that deals Glacio DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Abyssal_Gladius/Echo' },

  { id: 'elite-34', name: 'Abyssal Mercator', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Abyssal Mercator.png', description: 'Transform into Abyssal Mercator and summon 3 Ice Spikes that deal Glacio DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Abyssal_Mercator/Echo' },
  { id: 'elite-35', name: 'Vitreum Dancer', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Vitreum Dancer.png', description: 'Transform into Vitreum Dancer and deal Electro DMG to enemies. Equipping this Echo in the main slot grants Electro DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Vitreum_Dancer/Echo' },
  { id: 'elite-36', name: 'Pilgrim\'s Shell', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Pilgrim\'s Shell.png', description: 'Transform into a Pilgrim\'s Shell to attack nearby enemies and deal Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Pilgrim%27s_Shell/Echo' },
  { id: 'elite-37', name: 'Autopuppet Scout', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Autopuppet Scout.png', description: 'Transform into Autopuppet Scout to Glacio DMG to enemies nearby and generate Ice Walls.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Autopuppet_Scout/Echo' },
  { id: 'elite-38', name: 'Lumiscale Construct', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Lumiscale Construct.png', description: 'Transform into a Lumiscale Construct and enter a Parry Stance. When attacked, perform a Counterattack. If you parry a Special Skill attack, interrupt it and deal extra damage.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lumiscale_Construct/Echo' },
  { id: 'elite-39', name: 'Capitaneus', class: 'Elite', rarity: Rarity.FOUR_STAR, image: '/images/Wuthering/Echoes/elite/Capitaneus.png', description: 'Summon a Capitaneus and deal Spectro DMG to enemies. Equipping this Echo in the main slot grants Spectro DMG Bonus and Heavy Attack DMG Bonus.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Capitaneus/Echo' },
  
  
  // Common
  
  { id: 'common-3', name: 'Whiff Whaff', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Whiff Whaff.png', description: 'Summon a Whiff Whaff that deals Aero DMG and produces a Low-pressure Zone.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Whiff_Whaff/Echo' },

  { id: 'common-4', name: 'Snip Snap', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Snip Snap.png', description: 'Summon a Snip Snap that throws fireballs, dealing Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Snip_Snap/Echo' },
  { id: 'common-5', name: 'Zig Zag', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Zig Zag.png', description: 'Summon a Zig Zag that deals Spectro DMG, and creates a Stagnation Zone.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Zig_Zag/Echo' },
  { id: 'common-6', name: 'Nightmare: Tick Tack', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Tick Tack.png', description: 'Summon a Tick Tack that deals Havoc DMG and reduces enemy Vibration Strength.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Tick_Tack/Echo' },
  { id: 'common-7', name: 'Tick Tack', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Tick Tack.png', description: 'Summon a Tick Tack that deals Havoc DMG and reduces enemy Vibration Strength.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Tick_Tack/Echo' },
  { id: 'common-8', name: 'Clang Bang', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Clang Bang.png', description: 'Summon a Clang Bang that follows the enemy and eventually self-combusts, dealing Glacio DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Clang_Bang/Echo' },

  { id: 'common-9', name: 'Gulpuff', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Gulpuff.png', description: 'Summon a Gulpuff to blow bubbles and deal Glacio DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Gulpuff/Echo' },
  { id: 'common-10', name: 'Nightmare: Gulpuff', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Gulpuff.png', description: 'Summon a Gulpuff to blow bubbles and deal Glacio DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Gulpuff/Echo' },
  { id: 'common-11', name: 'Chirpuff', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Chirpuff.png', description: 'Summon a Chirpuff to blast a powerful gust of wind. Deals Aero DMG and knocks enemies back.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chirpuff/Echo' },
  { id: 'common-12', name: 'Nightmare: Chirpuff', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Chirpuff.png', description: 'Summon a Chirpuff to blast a powerful gust of wind. Deals Aero DMG and knocks enemies back.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Chirpuff/Echo' },
  { id: 'common-13', name: 'Excarat', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Excarat.png', description: 'Transform into Excarat to quickly advance and become immune to damage.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Excarat/Echo' },

  { id: 'common-14', name: 'Baby Viridblaze Saurian', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Baby Viridblaze Saurian.png', description: 'Transform into Baby Viridblaze Saurian, rest in place to restore HP.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Baby_Viridblaze_Saurian/Echo' },
  { id: 'common-15', name: 'Nightmare: Baby Viridblaze Saurian', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Baby Viridblaze Saurian.png', description: 'Transform into Baby Viridblaze Saurian, rest in place to restore HP.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Baby_Viridblaze_Saurian/Echo' },
  { id: 'common-16', name: 'Sabyr Boar', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Sabyr Boar.png', description: 'Summon a Sabyr Boar to charge and deal Physical DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sabyr_Boar/Echo' },
  { id: 'common-17', name: 'Fusion Dreadmane', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Fusion Dreadmane.png', description: 'Summon a Fusion Dreadmane to fiercely strike the enemies, dealing Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fusion_Dreadmane/Echo' },
  { id: 'common-18', name: 'Diamondclaw', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Diamondclaw.png', description: 'Transform into Crystal Scorpion to enter a Defense Stance. Counterattack to deal Physical DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Diamondclaw/Echo' },

  { id: 'common-19', name: 'Cruisewing', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Cruisewing.png', description: 'Summon a Cruisewing to heal friendly units.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Cruisewing/Echo' },
  { id: 'common-20', name: 'Hoartoise', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Hoartoise.png', description: 'Transform into a Hoartoise and slowly restore HP.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hoartoise/Echo' },
  { id: 'common-21', name: 'Hooscamp', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Hooscamp.png', description: 'Transform into Hooscamp Flinger and pounce, dealing Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hooscamp/Echo' },
  { id: 'common-22', name: 'Lava Larva', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Lava Larva.png', description: 'Summon a Lava Larva that continuously attacks enemies, dealing Fusion DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lava_Larva/Echo' },
  { id: 'common-23', name: 'Dwarf Cassowary', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Dwarf Cassowary.png', description: 'Summon a Dwarf Cassowary to attack, dealing Physical DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dwarf_Cassowary/Echo' },

  { id: 'common-24', name: 'Nightmare: Dwarf Cassowary', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Dwarf Cassowary.png', description: 'Summon a Dwarf Cassowary to attack, dealing Physical DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Dwarf_Cassowary/Echo' },
  { id: 'common-25', name: 'Galescourge Stalker', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Galescourge Stalker.png', description: 'Summon a Galescourge Stalker to heal nearby party members.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Galescourge_Stalker/Echo' },
  { id: 'common-26', name: 'Voltscourge Stalker', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Voltscourge Stalker.png', description: 'Summon a Voltscourge Stalker to deal Electro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Voltscourge_Stalker/Echo' },
  { id: 'common-27', name: 'Frostscourge Stalker', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Frostscourge Stalker.png', description: 'Summon a Frostscourge Stalker to deal Glacio DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Frostscourge_Stalker/Echo' },
  { id: 'common-28', name: 'Aero Drake', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Aero Drake.png', description: 'Summon an Aero Drake to deal Aero DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Aero_Drake/Echo' },

  { id: 'common-29', name: 'Electro Drake', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Electro Drake.png', description: 'Summon an Electro Drake to deal Electro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Electro_Drake/Echo' },
  { id: 'common-30', name: 'Glacio Drake', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Glacio Drake.png', description: 'Summon a Glacio Drake to deal Glacio DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Glacio_Drake/Echo' },
  { id: 'common-31', name: 'Fusion Drake', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Fusion Drake.png', description: 'Summon a Fusion Drake to deal Fusion DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fusion_Drake/Echo' },
  { id: 'common-32', name: 'Spectro Drake', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Spectro Drake.png', description: 'Summon a Spectro Drake to deal Spectro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Spectro_Drake/Echo' },
  { id: 'common-33', name: 'Havoc Drake', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Havoc Drake.png', description: 'Summon a Havoc Drake to deal Havoc DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Havoc_Drake/Echo' },

  { id: 'common-34', name: 'Glacio Prism', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Glacio Prism.png', description: 'Summon a Glacio Prism that deals Glacio DMG with crystal shards.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Glacio_Prism/Echo' },
  { id: 'common-35', name: 'Fusion Prism', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Fusion Prism.png', description: 'Summon a Fusion Prism that deals Fusion DMG with crystal shards.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fusion_Prism/Echo' },
  { id: 'common-36', name: 'Havoc Prism', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Havoc Prism.png', description: 'Summon a Havoc Prism that deals Havoc DMG with crystal shards.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Havoc_Prism/Echo' },
  { id: 'common-37', name: 'Spectro Prism', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Spectro Prism.png', description: 'Summon a Spectro Prism that deals Spectro DMG with laser.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Spectro_Prism/Echo' },
  { id: 'common-38', name: 'Aero Prism', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Aero Prism.png', description: 'Summon an Aero Prism to deal Aero DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Aero_Prism/Echo' },

  { id: 'common-39', name: 'Chop Chop: Headless', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Chop Chop Headless.png', description: 'Summon a Chop Chop: Headless to deal Fusion DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chop_Chop_Headless/Echo' },
  { id: 'common-40', name: 'Chop Chop: Leftless', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Chop Chop Leftless.png', description: 'Summon a Chop Chop: Leftless to deal Spectro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chop_Chop_Leftless/Echo' },
  { id: 'common-41', name: 'Chop Chop: Rightless', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Chop Chop Rightless.png', description: 'Summon a Chop Chop: Rightless to deal Havoc DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chop_Chop_Rightless/Echo' },
  { id: 'common-42', name: 'Fae Ignis', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Fae Ignis.png', description: 'Summon a Fae Ignis to deal Havoc DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fae_Ignis/Echo' },
  { id: 'common-43', name: 'Nimbus Wraith', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nimbus Wraith.png', description: 'Summon a Nimbus Wraith to heal the active Resonator.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nimbus_Wraith/Echo' },

  { id: 'common-44', name: 'Hocus Pocus', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Hocus Pocus.png', description: 'Summon a Hocus Pocus to deal consecutive Havoc DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Hocus_Pocus/Echo' },
  { id: 'common-45', name: 'Lottie Lost', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Lottie Lost.png', description: 'Summon a Lottie Lost to deal Spectro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Lottie_Lost/Echo' },
  { id: 'common-46', name: 'Diggy Duggy', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Diggy Duggy.png', description: 'Transform into Diggy Duggy and deal Physical DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Diggy_Duggy/Echo' },
  { id: 'common-47', name: 'Chest Mimic', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Chest Mimic.png', description: 'Summon a Chest Mimic to deal consecutive Spectro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Chest_Mimic/Echo' },
  { id: 'common-48', name: 'Young Roseshroom', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Young Roseshroom.png', description: 'Summon a Baby Roseshroom to fire a laser, and deal Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Young_Roseshroom/Echo' },

  { id: 'common-49', name: 'Nightmare: Baby Roseshroom', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Baby Roseshroom.png', description: 'Summon a Baby Roseshroom to fire a laser, and deal Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Baby_Roseshroom/Echo' },
  { id: 'vanguard-junrock', name: 'Vanguard Junrock', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Vanguard Junrock.png', description: 'Common rock enemy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Vanguard_Junrock' },
  { id: 'fission-junrock', name: 'Fission Junrock', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Fission Junrock.png', description: 'Splitting rock enemy.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fission_Junrock' },
  { id: 'common-50', name: 'Golden Junrock', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Golden Junrock.png', description: 'Summon a Golden Junrock to deal Spectro DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Golden_Junrock/Echo' },
  { id: 'common-51', name: 'Calcified Junrock', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Calcified Junrock.png', description: 'Summon a Calcified Junrock to heal nearby Resonators in the team.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Calcified_Junrock/Echo' },
  { id: 'common-52', name: 'Electro Predator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Electro Predator.png', description: 'Summon an Electro Predator to fire a rain of arrows, dealing Electro DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Electro_Predator/Echo' },
  { id: 'common-53', name: 'Nightmare: Electro Predator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Electro Predator.png', description: 'Summon an Electro Predator to fire a rain of arrows, dealing Electro DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Electro_Predator/Echo' },

  { id: 'common-54', name: 'Glacio Predator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Glacio Predator.png', description: 'Summon a Glacio Predator to throw ice spears and deal Glacio DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Glacio_Predator/Echo' },
  { id: 'common-55', name: 'Nightmare: Glacio Predator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Glacio Predator.png', description: 'Summon a Glacio Predator to throw ice spears and deal Glacio DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Glacio_Predator/Echo' },
  { id: 'common-56', name: 'Aero Predator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Aero Predator.png', description: 'Summon an Aero Predator to deal Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Aero_Predator/Echo' },
  { id: 'common-57', name: 'Nightmare: Aero Predator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Aero Predator.png', description: 'Summon an Aero Predator to deal Aero DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Aero_Predator/Echo' },
  { id: 'common-58', name: 'Fusion Warrior', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Fusion Warrior.png', description: 'Transform into Fusion Warrior to block enemy attacks. Deal Fusion DMG and reduce this Echo Skill\'s CD when the block is successful.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Fusion_Warrior/Echo' },

  { id: 'common-59', name: 'Havoc Warrior', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Havoc Warrior.png', description: 'Transform into Havoc Warrior to continuously deal Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Havoc_Warrior/Echo' },
  { id: 'common-60', name: 'Nightmare: Havoc Warrior', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Nightmare Havoc Warrior.png', description: 'Transform into Havoc Warrior to continuously deal Havoc DMG.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Nightmare:_Havoc_Warrior/Echo' },
  { id: 'common-61', name: 'La Guardia', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/La Guardia.png', description: 'La Guardia is a Common Class Echo.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/La_Guardia/Echo' },
  { id: 'common-62', name: 'Sagittario', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Sagittario.png', description: 'Sagittario is a Common Class Echo.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sagittario/Echo' },
  { id: 'common-63', name: 'Sacerdos', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Sacerdos.png', description: 'Summon a Sacerdos to attack enemies, dealing 64.80% Aero DMG 2 times.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Sacerdos/Echo' },
  { id: 'common-64', name: 'Devotee\'s Flesh', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Devotee\'s Flesh.png', description: 'Summon a Devotee\'s Flesh to deal Aero DMG to enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Devotee%27s_Flesh/Echo' },
  { id: 'common-65', name: 'Traffic Illuminator', class: 'Common', rarity: Rarity.THREE_STAR, image: '/images/Wuthering/Echoes/common/Traffic Illuminator.png', description: 'Summon a Traffic Illuminator to immobilize the enemies.', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Traffic_Illuminator/Echo' }


];

export const wutheringQuests: Quest[] = [
    // Main
    { id: 'main-1', name: 'Prologue Act I', category: 'Main Quest', image: '/images/Wuthering/Quests/Utterance of Marvels.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Utterance_of_Marvels:_I' },
    { id: 'main-2', name: 'Prologue Act II', category: 'Main Quest', image: '/images/Wuthering/Quests/Utterance of Marvels-2.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Utterance_of_Marvels:_II' },
    
    { id: 'main-3', name: 'Chapter I Act I', category: 'Main Quest', image: '/images/Wuthering/Quests/First Resonance.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/First_Resonance' },
    { id: 'main-4', name: 'Chapter I Act II', category: 'Main Quest', image: '/images/Wuthering/Quests/Echoing Marche.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Echoing_Marche' },
    { id: 'main-5', name: 'Chapter I Act III', category: 'Main Quest', image: '/images/Wuthering/Quests/Ominous Star.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Ominous_Star' },
    { id: 'main-6', name: 'Chapter I Act IV', category: 'Main Quest', image: '/images/Wuthering/Quests/Clashing Blades.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Clashing_Blades' },
    { id: 'main-7', name: 'Chapter I Act V', category: 'Main Quest', image: '/images/Wuthering/Quests/Rewinding Raindrops.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rewinding_Raindrops' },

    { id: 'main-8', name: 'Chapter I Act VI', category: 'Main Quest', image: '/images/Wuthering/Quests/Grand Warstorm.png',description:'', moreDetailsUrl: 'http://wutheringwaves.fandom.com/wiki/Grand_Warstorm' },

    { id: 'main-9', name: 'Chapter I Interlude', category: 'Main Quest', image: '/images/Wuthering/Quests/A New Companion.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/A_New_Companion' },
    { id: 'main-10', name: 'Chapter I Act VII', category: 'Main Quest', image: '/images/Wuthering/Quests/Thaw of Eons.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Thaw_of_Eons' },
    { id: 'main-11', name: 'Chapter I Act VIII', category: 'Main Quest', image: '/images/Wuthering/Quests/To the Shore\'s End.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/To_the_Shore%27s_End' },
    { id: 'main-12', name: 'Chapter II Prologue', category: 'Main Quest', image: '/images/Wuthering/Quests/Through the Sea Thou Break.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Through_the_Sea_Thou_Break' },
    { id: 'main-13', name: 'Chapter II Act I', category: 'Main Quest', image: '/images/Wuthering/Quests/The Sacred Breeze So Often Breathes.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Sacred_Breeze_So_Often_Breathes' },

    { id: 'main-14', name: 'Chapter II Act II', category: 'Main Quest', image: '/images/Wuthering/Quests/Veils Off in Sun or Shadow.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Veils_Off_in_Sun_or_Shadow' },
    { id: 'main-15', name: 'Chapter II Act III', category: 'Main Quest', image: '/images/Wuthering/Quests/What Yesterday Wept, Today Doth Sing.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/What_Yesterday_Wept,_Today_Doth_Sing' },
    { id: 'main-16', name: 'Chapter II Interlude', category: 'Main Quest', image: '/images/Wuthering/Quests/Old Man and the Whale Story.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Old_Man_and_the_Whale/Story' },
    { id: 'main-17', name: 'Chapter II Act IV', category: 'Main Quest', image: '/images/Wuthering/Quests/The Maiden, The Defier, The Death Crier.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Maiden,_The_Defier,_The_Death_Crier' },
    { id: 'main-18', name: 'Chapter II Act V', category: 'Main Quest', image: '/images/Wuthering/Quests/Shadow of Glory.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Shadow_of_Glory' },
    { id: 'main-19', name: 'Chapter II Act VI', category: 'Main Quest', image: '/images/Wuthering/Quests/Flames of Heart.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Flames_of_Heart' },

    { id: 'main-20', name: 'Chapter II Act VII', category: 'Main Quest', image: '/images/Wuthering/Quests/Dreamcatchers in the Secret Gardens.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dreamcatchers_in_the_Secret_Gardens' },
    { id: 'main-21', name: 'Chapter II Segue', category: 'Main Quest', image: '/images/Wuthering/Quests/Rust, Sword and the Sun.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rust,_Sword_and_the_Sun' },
    { id: 'main-22', name: 'Chapter II Act VIII', category: 'Main Quest', image: '/images/Wuthering/Quests/By Sun\'s Burning Hand.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/By_Sun%27s_Burning_Hand' },
    { id: 'main-23', name: 'Chapter II Act IX', category: 'Main Quest', image: '/images/Wuthering/Quests/By Moon\'s Fated Light.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/By_Moon%27s_Fated_Light' },

    { id: 'main-24', name: 'Chapter II Act X', category: 'Main Quest', image: '/images/Wuthering/Quests/The Bygone Shall Always Return.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Bygone_Shall_Always_Return' },
    { id: 'main-25', name: 'Chapter II Act XI', category: 'Main Quest', image: '/images/Wuthering/Quests/Dawn Breaks on Dark Tides.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Dawn_Breaks_on_Dark_Tides' },
    { id: 'main-26', name: 'Chapter II Segue', category: 'Main Quest', image: '/images/Wuthering/Quests/A Stranger in a Strange Land.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/A_Stranger_in_a_Strange_Land' },
    { id: 'main-27', name: 'Chapter II Act XII', category: 'Main Quest', image: '/images/Wuthering/Quests/Stagnant Dawn on Wastelands.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Stagnant_Dawn_on_Wastelands' },
    { id: 'main-28', name: 'Chapter II Segue', category: 'Main Quest', image: '/images/Wuthering/Quests/Flowing Starlight in the Iris.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Flowing_Starlight_in_the_Iris' }
    


];

export const wutheringRegions: Region[] = [
    { id: 'region-1', name: 'Huanglong', image: '/images/Wuthering/Regions/Huanglong.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Huanglong' },
    { id: 'region-2', name: 'The Black Shores', image: '/images/Wuthering/Regions/The Black Shores.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/The_Black_Shores' },
    { id: 'region-3', name: 'Rinascita', image: '/images/Wuthering/Regions/Rinascita.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Rinascita' },
    { id: 'region-4', name: 'Riccioli Islands', image: '/images/Wuthering/Regions/Riccioli Islands.png',description:'', moreDetailsUrl: 'https://wutheringwaves.fandom.com/wiki/Riccioli_Islands' }
];

export const teamMembers = [
  { name: '', usn: '', img: '/images/about/.jpg' },
  { name: '', usn: '', img: '/images/about/.jpg' },
  { name: '', usn: '', img: '/images/about/.jpg' },
  { name: ' ', usn: '', img: '/images/about/.jpg' },
];
