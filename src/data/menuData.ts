export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'sides' | 'drinks';
  image?: string;
  tags: string[];
  allergens?: string[];
  spicyLevel?: number; // 0-3
  available: boolean;
  marketStory?: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 'puff-puff',
    name: 'Puff-Puff',
    description: 'Fluffy golden balls made with Oshodi flour',
    price: 800,
    category: 'starters',
    image: 'https://dooneyskitchen.com/wp-content/uploads/2021/05/98116464_258888618596335_902784591195973930_n-1.jpg',
    tags: ['vegetarian', 'sweet'],
    allergens: ['gluten'],
    available: true,
    marketStory: 'Our puff-puff recipe comes from Mama Ngozi who has been selling at Balogun Market for 30 years!'
  },
  {
    id: 'suya',
    name: 'Suya Platter',
    description: 'Spicy grilled meat skewers with suya spice blend',
    price: 2500,
    category: 'starters',
    image: 'https://pbs.twimg.com/media/E2V-9SaX0AAk4u7.jpg',
    tags: ['spicy', 'halal'],
    spicyLevel: 3,
    available: true,
    marketStory: 'Fresh beef from Mile 12 market, grilled to perfection with our secret Hausa spice mix'
  },
  {
    id: 'akara',
    name: 'Àkàrà (Bean Cakes)',
    description: 'Crispy fried bean fritters',
    price: 600,
    category: 'starters',
    image: 'https://cdn.guardian.ng/wp-content/uploads/2017/09/akara-e1506724484724.jpg',
    tags: ['vegetarian', 'protein'],
    available: true
  },
  {
    id: 'moi-moi',
    name: 'Moi Moi',
    description: 'Steamed bean pudding with eggs and fish',
    price: 1000,
    category: 'starters',
    image: 'https://skippersfastfood.com/wp-content/uploads/2024/09/moimoi.jpg',
    tags: ['protein', 'steamed'],
    available: true
  },

  // Mains
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    description: 'The legendary one-pot rice dish with tomatoes and Scotch bonnet peppers',
    price: 1500,
    category: 'mains',
    image: 'https://www.mydiasporakitchen.com/wp-content/uploads/2017/08/img_8514.jpg',
    tags: ['signature', 'spicy'],
    spicyLevel: 2,
    available: true,
    marketStory: 'Made with premium long-grain rice and fresh tomatoes from Oyingbo Market'
  },
  {
    id: 'egusi-soup',
    name: 'Egusi Soup',
    description: 'Rich melon seed soup with crayfish, spinach, and your choice of meat',
    price: 2500,
    category: 'mains',
    image: 'https://simshomekitchen.com/wp-content/uploads/2025/09/Egusi-tripe-cowfootand-meat-in-a-white-bowl-500x375.jpg',
    tags: ['traditional', 'halal'],
    available: true,
    marketStory: 'Ground egusi from Bodija Market, cooked the traditional Yoruba way'
  },
  {
    id: 'efo-riro',
    name: 'Èfọ́ Riro',
    description: 'Spinach stew with peppers, locust beans, and assorted meat',
    price: 2200,
    category: 'mains',
    image: 'https://cheflolaskitchen.com/wp-content/uploads/2016/01/African-stewed-Spinach-35-1.jpg',
    tags: ['vegetable', 'spicy'],
    spicyLevel: 2,
    available: true
  },
  {
    id: 'banga-soup',
    name: 'Banga Soup',
    description: 'Palm nut soup Delta-style with catfish and periwinkle',
    price: 2800,
    category: 'mains',
    image: 'https://cdn.guardian.ng/wp-content/uploads/2017/07/maxresdefault-34.jpg',
    tags: ['traditional', 'seafood'],
    available: true
  },
  {
    id: 'fried-rice',
    name: 'Nigerian Fried Rice',
    description: 'Colorful fried rice with vegetables, liver, and shrimp',
    price: 1500,
    category: 'mains',
    image: 'https://nkechiajaeroh.com/wp-content/uploads/2020/12/Nigerian-fried-rice-recipe-main-photo-3-300x300.jpg',
    tags: ['party-favorite'],
    available: true
  },
  {
    id: 'ofada-rice',
    name: 'Ọ̀fàdà Rice & Ayamase',
    description: 'Local brown rice with green pepper sauce',
    price: 2300,
    category: 'mains',
    image: 'https://1.bp.blogspot.com/-4p1FAfpbtK8/VCT7eEoMV2I/AAAAAAAAGW8/2jP2TKpnnaM/s1600/ofada%2Bsauce.jpg',
    tags: ['signature', 'spicy'],
    spicyLevel: 3,
    available: true
  },

  // Sides
  {
    id: 'pounded-yam',
    name: 'Pounded Yam',
    description: 'Smooth and stretchy, perfect for pulling soup',
    price: 1500,
    category: 'sides',
    image: 'https://cherdior.com/wp-content/uploads/2023/08/egusi.jpg',
    tags: ['carb', 'family-pull'],
    available: true
  },
  {
    id: 'fufu',
    name: 'Fufu',
    description: 'Cassava fufu, soft and filling',
    price: 500,
    category: 'sides',
    image: 'https://articles.connectnigeria.com/wp-content/uploads/2021/01/fufu.jpg',
    tags: ['carb', 'gluten-free'],
    available: true
  },
  {
    id: 'eba',
    name: 'Eba (Garri)',
    description: 'Classic garri eba',
    price: 1000,
    category: 'sides',
    image: 'https://www.mydiasporakitchen.com/wp-content/uploads/2018/08/savingpng-182-768x1024.jpg',
    tags: ['carb', 'gluten-free'],
    available: true
  },
  {
    id: 'plantain',
    name: 'Fried Plantain (Dodo)',
    description: 'Sweet ripe plantain fried to golden perfection',
    price: 1000,
    category: 'sides',
    image: 'https://www.dashofjazz.com/wp-content/uploads/2017/02/DashofJazz_Fried_Plantain06.jpg',
    tags: ['vegetarian', 'sweet'],
    available: true
  },
  {
    id: 'yam-porridge',
    name: 'Yam Porridge (Asaro)',
    description: 'Mashed yam cooked in palm oil with vegetables',
    price: 1500,
    category: 'sides',
    image: 'https://pan-african.net/wp-content/uploads/2021/04/Yam-porridge.jpg',
    tags: ['vegetarian', 'filling'],
    available: true
  },

  // Drinks
  {
    id: 'zobo',
    name: 'Zobo',
    description: 'Refreshing hibiscus drink with ginger and pineapple',
    price: 600,
    category: 'drinks',
    image: 'https://www.dashofjazz.com/wp-content/uploads/2024/10/Dash-of-Jazz-Nigerian-Zobo-Drink-15.jpg',
    tags: ['non-alcoholic', 'traditional'],
    available: true
  },
  {
    id: 'chapman',
    name: 'Chapman',
    description: 'Nigerian fruit punch cocktail',
    price: 800,
    category: 'drinks',
    image: 'https://opendrinks.io/img/nigerian-chapman.1b70519e.jpg',
    tags: ['non-alcoholic', 'fruity'],
    available: true
  },
  {
    id: 'palm-wine',
    name: 'Palm Wine',
    description: 'Fresh palm wine, naturally fermented',
    price: 1200,
    category: 'drinks',
    image: 'https://benedictascuisine.com/wp-content/uploads/2025/03/2025-03-05-67c86971cec1d.jpg',
    tags: ['alcoholic', 'traditional'],
    available: true
  },
  {
    id: 'kunun',
    name: 'Kunu',
    description: 'Millet-based drink with spices',
    price: 500,
    category: 'drinks',
    image: 'https://allnigerianfoods.com/wp-content/uploads/tiger-nut-milk.jpg',
    tags: ['non-alcoholic', 'northern'],
    available: true
  },
  {
    id: 'fresh-juice',
    name: 'Fresh Juice',
    description: 'Pineapple, orange, or watermelon',
    price: 600,
    category: 'drinks',
    image: 'https://thumbs.dreamstime.com/b/fruit-smoothies-dragon-fruit-kiwi-watermelon-pineapple-o-wooden-table-58078728.jpg',
    tags: ['non-alcoholic', 'fresh'],
    available: true
  }
];

export const getCategoryItems = (category: MenuItem['category']) => {
  return menuItems.filter(item => item.category === category && item.available);
};

export const getFeaturedItems = () => {
  return menuItems.filter(item => item.tags.includes('signature') && item.available);
};

export const getSpicyItems = () => {
  return menuItems.filter(item => (item.spicyLevel ?? 0) > 0 && item.available);
};