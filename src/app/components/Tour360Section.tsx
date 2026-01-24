import React from 'react';
import { motion } from 'motion/react';
import { Camera, Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Tour360Section: React.FC = () => {
  const handleTourNow = () => {
    // In a real app, this would open a 360 tour viewer
    alert('360 Tour feature coming soon! This will open an interactive 360° view of our restaurant.');
  };

  const foodBackgrounds = [
    'https://images.unsplash.com/photo-1664993101841-036f189719b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGpvbGxvZiUyMHJpY2V8ZW58MXx8fHwxNzY4MDkxMjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1747406394855-1b7e6674a017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHN1eWElMjBncmlsbGVkfGVufDF8fHx8MTc2ODA5MTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY3OTc4MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <section className="relative min-h-screen overflow-hidden" id="tour">
      {/* Background Grid of Food Images */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1">
        {foodBackgrounds.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <ImageWithFallback
              src={image}
              alt={`Nigerian cuisine ${index + 1}`}
              className="w-full h-full object-cover"
              fallbackText="Food"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-block mb-8"
          >
            <Camera className="w-20 h-20 text-[#FFD700]" />
          </motion.div>

          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience Our Kitchen
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take a virtual 360° tour of our vibrant Lagos kitchen, dining area, and bustling atmosphere
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <Play className="w-10 h-10 text-[#FF6B35] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Interactive Tour</h3>
              <p className="text-sm text-white/70">
                Navigate through our space at your own pace
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <Camera className="w-10 h-10 text-[#2E7D32] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">360° Views</h3>
              <p className="text-sm text-white/70">
                See every corner of our Lagos kitchen
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <ArrowRight className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Behind the Scenes</h3>
              <p className="text-sm text-white/70">
                Watch our chefs in action
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
  asChild
  size="lg"
  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,53,0.8)] transition-all duration-300 hover:scale-105 font-bold"
>
  <a
    href="www.tiktok.com/@inandoutkitchenltd"
    target="www.tiktok.com/@inandoutkitchenltd"
    rel="noopener noreferrer"
  >
    <Camera className="w-6 h-6 mr-3" />
    <motion.span
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      Tour Now
    </motion.span>
    <ArrowRight className="w-6 h-6 ml-3" />
  </a>
</Button>

          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <span className="inline-block bg-[#FFD700] text-[#212121] px-4 py-2 rounded-full text-sm font-semibold">
              🎬 Full 360° Experience
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating food particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#FFD700]/30 rounded-full blur-sm"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};
