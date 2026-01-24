import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Home, Menu, Calendar, X } from 'lucide-react';
import { Button } from './ui/button';
import { useApp } from './AppContext';
import { generateWhatsAppLink, createOrderMessage } from '../../utils/whatsapp';
import { Badge } from './ui/badge';

export const StickyBottomBar: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useApp();
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const message = createOrderMessage(
      cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }))
    );
    
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#212121] border-t border-[#FFD700]/20 backdrop-blur-lg shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Navigation Icons */}
            <div className="flex items-center gap-6">
              <button
                className="flex flex-col items-center gap-1 text-white/70 hover:text-[#FFD700] transition-colors"
                aria-label="Home"
              >
                <Home className="w-5 h-5" />
                <span className="text-xs hidden sm:block">Home</span>
              </button>
              
              <button
                className="flex flex-col items-center gap-1 text-white/70 hover:text-[#FFD700] transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
                <span className="text-xs hidden sm:block">Menu</span>
              </button>
              
              <button
                className="flex flex-col items-center gap-1 text-white/70 hover:text-[#FFD700] transition-colors"
                aria-label="Reserve"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-xs hidden sm:block">Reserve</span>
              </button>
            </div>

            {/* Cart Button with Glow Effect */}
            <motion.div className="relative">
              <Button
                onClick={() => setShowCart(!showCart)}
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-6 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all duration-300"
                animate={{
                  boxShadow: totalItems > 0 
                    ? [
                        '0 0 20px rgba(255,107,53,0.4)',
                        '0 0 40px rgba(255,107,53,0.6)',
                        '0 0 20px rgba(255,107,53,0.4)'
                      ]
                    : '0 0 0px rgba(255,107,53,0)'
                }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#FFD700] text-[#212121] px-2 py-1 text-xs font-bold">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {showCart && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCart(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              aria-hidden="true"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-[#2A2A2A] rounded-t-3xl z-50 max-h-[80vh] overflow-hidden shadow-2xl border-t-4 border-[#FFD700]"
              role="dialog"
              aria-label="Shopping cart"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <ShoppingCart className="w-6 h-6 text-[#FFD700]" />
                    Your Order
                  </h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Close cart"
                  >
                    <X className="w-6 h-6 text-white/70" />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="max-h-[40vh] overflow-y-auto mb-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 text-white/60">
                      <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p className="text-lg">Your cart is empty</p>
                      <p className="text-sm">Add some delicious items to get started!</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center justify-between bg-[#1A1A1A] p-4 rounded-xl border border-white/10"
                      >
                        <div className="flex-1">
                          <h3 className="text-white font-semibold">{item.name}</h3>
                          <p className="text-[#FFD700] text-sm">₦{item.price.toLocaleString()} × {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-white font-bold">₦{(item.price * item.quantity).toLocaleString()}</p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-white/10 pt-4 space-y-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-[#FFD700]">₦{totalPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="flex-1 border-white/20 text-white bg-white/5 hover:bg-white/10"
                      >
                        Clear Cart
                      </Button>
                      <Button
                        onClick={handleCheckout}
                        className="flex-1 bg-[#2E7D32] hover:bg-[#2E7D32]/90 text-white"
                      >
                        Order via WhatsApp
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};