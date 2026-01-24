// Internationalization utilities for English, Pidgin, and Yoruba
export type Language = 'en' | 'pidgin' | 'yo';

export interface Translation {
  en: string;
  pidgin: string;
  yo: string;
}

export const translations: Record<string, Translation> = {
  welcome: {
    en: 'Welcome to In and Out Kitchen',
    pidgin: 'Welcome to In and Out Kitchen - We dey serve!',
    yo: 'Ẹ káàbọ̀ sí In and Out Kitchen'
  },
  orderNow: {
    en: 'Order Now',
    pidgin: 'Order Sharp Sharp',
    yo: 'Ṣe Àtúnṣe Báyìí'
  },
  viewMenu: {
    en: 'View Menu',
    pidgin: 'See Wetin We Get',
    yo: 'Wo Àkójọ Oúnjẹ'
  },
  reserveTable: {
    en: 'Reserve a Table',
    pidgin: 'Book Table',
    yo: 'Fi Tábìlì Pamọ́'
  },
  heroHeadline: {
    en: 'Naija Flavors That Hit Home',
    pidgin: 'Naija Chop Wey Go Sweet You Well Well',
    yo: 'Oúnjẹ Nàìjíríà Tó Dùn Púpọ̀'
  },
  heroSubtext: {
    en: 'Order your spice fix now—suya, jollof, or full Naija platter, straight to your door',
    pidgin: 'Abeg order your correct Naija food - suya, jollof, everything, we go bring am come your house',
    yo: 'Ṣe àtúnṣe oúnjẹ rẹ báyìí - suya, jollof, gbogbo rẹ̀, a ó fi rán sí ilé rẹ'
  },
  starters: {
    en: 'Starters',
    pidgin: 'Small Chops',
    yo: 'Oúnjẹ Kékeré'
  },
  mains: {
    en: 'Main Dishes',
    pidgin: 'Main Food',
    yo: 'Oúnjẹ Àkọ́kọ́'
  },
  drinks: {
    en: 'Drinks',
    pidgin: 'Drink Drink',
    yo: 'Ohun Mímu'
  },
  spicyHot: {
    en: 'Spicy Hot',
    pidgin: 'E Dey Pepper Well Well',
    yo: 'Ó Lè Gan'
  },
  vegetarian: {
    en: 'Vegetarian',
    pidgin: 'No Meat Inside',
    yo: 'Kò Sí Ẹran'
  },
  halal: {
    en: 'Halal',
    pidgin: 'Halal',
    yo: 'Halal'
  },
  contactUs: {
    en: 'Contact Us',
    pidgin: 'Talk to Us',
    yo: 'Kàn Sí Wa'
  },
  openingHours: {
    en: 'Opening Hours',
    pidgin: 'When We Dey Open',
    yo: 'Àkókò Ṣíṣi'
  }
};

export const getTranslation = (key: string, lang: Language = 'en'): string => {
  return translations[key]?.[lang] || translations[key]?.en || key;
};

export const createLocalizedContent = (lang: Language) => {
  return {
    t: (key: string) => getTranslation(key, lang)
  };
};
