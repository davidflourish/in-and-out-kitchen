import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Flame, Leaf, CheckCircle, ShoppingCart, Sparkles } from 'lucide-react';
import { menuItems, MenuItem } from '../../data/menuData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { useApp } from './AppContext';
import { getTranslation } from '../../utils/i18n';
import { ImageWithFallback } from './figma/ImageWithFallback';

type FilterType = 'all' | 'starters' | 'mains' | 'sides' | 'drinks' | 'vegetarian' | 'spicy' | 'halal';

export const MenuSection: React.FC = () => {
  const { addToCart, language } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categoryColors: Record<MenuItem['category'], string> = {
    starters: 'bg-[#FF6B35] text-white',
    mains: 'bg-[#2E7D32] text-white',
    sides: 'bg-[#FFD700] text-[#212121]',
    drinks: 'bg-[#3F51B5] text-white'
  };

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeFilter === 'all') return true;
    if (activeFilter === 'vegetarian') return item.tags.includes('vegetarian');
    if (activeFilter === 'spicy') return (item.spicyLevel ?? 0) > 0;
    if (activeFilter === 'halal') return item.tags.includes('halal');
    return item.category === activeFilter;
  });

  const filters: { label: string; value: FilterType; icon?: React.ReactNode }[] = [
    { label: 'All', value: 'all' },
    { label: getTranslation('starters', language), value: 'starters' },
    { label: getTranslation('mains', language), value: 'mains' },
    { label: 'Sides', value: 'sides' },
    { label: getTranslation('drinks', language), value: 'drinks' },
    { label: 'Vegetarian', value: 'vegetarian', icon: <Leaf className="w-4 h-4" /> },
    { label: 'Spicy', value: 'spicy', icon: <Flame className="w-4 h-4" /> },
    { label: 'Halal', value: 'halal', icon: <CheckCircle className="w-4 h-4" /> }
  ];

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price
    });
  };

  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8" id="menu">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh from Mile 12 Market to your plate
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 rounded-full bg-card border-2 border-border focus:border-primary text-lg"
              aria-label="Search menu"
            />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'hover:scale-105'
              }`}
              aria-label={`Filter by ${filter.label}`}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.icon && <span className="mr-2">{filter.icon}</span>}
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden border-2 border-border hover:border-primary hover:shadow-2xl transition-all duration-300 group">
                {/* Food Image */}
                <div className="relative h-48 overflow-hidden">
                  {item.image ? (
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      fallbackText={item.name}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-white/80" />
                    </div>
                  )}
                  {/* Overlay for better badge visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  {/* Category Badge */}
                  <Badge className={`absolute top-3 left-3 ${categoryColors[item.category]}`}>
                    {item.category}
                  </Badge>
                  {/* Spicy Indicator */}
                  {(item.spicyLevel ?? 0) > 0 && (
                    <div className="absolute top-3 right-3 flex gap-1">
                      {[...Array(item.spicyLevel)].map((_, i) => (
                        <Flame key={i} className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                      ))}
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-2xl font-bold text-primary">
                    ₦{item.price.toLocaleString()}
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button
                    onClick={() => setSelectedItem(item)}
                    variant="outline"
                    className="flex-1"
                    aria-label={`View details for ${item.name}`}
                  >
                    Details
                  </Button>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-primary hover:bg-primary/90"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl text-muted-foreground">
              No items found. Try a different search or filter!
            </p>
          </motion.div>
        )}

        {/* Item Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-lg w-full p-6 border-2 border-border shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-foreground mb-2">{selectedItem.name}</h3>
              <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
              
              {selectedItem.marketStory && (
                <div className="bg-accent/10 p-4 rounded-lg mb-4 border-l-4 border-accent">
                  <p className="text-sm text-foreground/80 italic">
                    "{selectedItem.marketStory}"
                  </p>
                </div>
              )}

              {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Allergens:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.allergens.map((allergen) => (
                      <Badge key={allergen} variant="destructive" className="text-xs">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-3xl font-bold text-primary mb-6">
                ₦{selectedItem.price.toLocaleString()}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setSelectedItem(null)}
                  variant="outline"
                  className="flex-1"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};