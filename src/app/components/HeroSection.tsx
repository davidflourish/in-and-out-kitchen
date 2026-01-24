import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Volume2, VolumeX, ChevronDown, Menu, X } from 'lucide-react';
import { generateWhatsAppLink, createInquiryMessage } from '../../utils/whatsapp';
import { useApp } from './AppContext';
import { getTranslation } from '../../utils/i18n';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Slideshow images
const heroImages = [
  'https://images.unsplash.com/photo-1664993101841-036f189719b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGpvbGxvZiUyMHJpY2V8ZW58MXx8fHwxNzY4MDkxMjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1747406394855-1b7e6674a017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMHN1eWElMjBncmlsbGVkfGVufDF8fHx8MTc2ODA5MTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY3OTc4MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1635360065676-f47200966893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdlcmlhbiUyMGZyaWVkJTIwcmljZXxlbnwxfHx8fDE3NjgwOTEyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1652545296882-cf7f118c4df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGFmcmljYW58ZW58MXx8fHwxNzY3OTc5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080'
];

export const HeroSection: React.FC = () => {
  const { language, audioEnabled, toggleAudio } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleOrderNow = () => {
    const message = createInquiryMessage('Browse Menu', 'I want to place an order');
    window.open(generateWhatsAppLink(message), '_blank');
  };

  const handleReserveTable = () => {
    const message = createInquiryMessage('Table Reservation', 'I would like to reserve a table');
    window.open(generateWhatsAppLink(message), '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                In & Out Kitchen
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center gap-8"
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white/90 hover:text-[#FFD700] transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-white/90 hover:text-[#FFD700] transition-colors font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/90 hover:text-[#FFD700] transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-white/90 hover:text-[#FFD700] transition-colors font-medium"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('tour')}
                className="text-white/90 hover:text-[#FFD700] transition-colors font-medium"
              >
                360° Tour
              </button>
                {/* <button
                  onClick={toggleAudio}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={audioEnabled ? 'Mute audio' : 'Unmute audio'}
                >
                  {audioEnabled ? (
                    <Volume2 className="w-5 h-5 text-white" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-white/70" />
                  )}
                </button> */}
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left text-white/90 hover:text-[#FFD700] transition-colors font-medium py-2"
                >
                  Home
                </button>
                <button
                   onClick={() => scrollToSection('menu')}
                  className="block w-full text-left text-white/90 hover:text-[#FFD700] transition-colors font-medium py-2"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-white/90 hover:text-[#FFD700] transition-colors font-medium py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('events')}
                  className="block w-full text-left text-white/90 hover:text-[#FFD700] transition-colors font-medium py-2"
                >
                  Events
                </button>
                <button
                  onClick={() => scrollToSection('tour')}
                  className="block w-full text-left text-white/90 hover:text-[#FFD700] transition-colors font-medium py-2"
                >
                  360° Tour
                </button>
                <button
                  onClick={toggleAudio}
                  className="flex items-center gap-2 w-full text-left text-white/90 hover:text-[#FFD700] transition-colors font-medium py-2"
                >
                  {audioEnabled ? (
                    <>
                      <Volume2 className="w-5 h-5" />
                      <span>Mute Audio</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-5 h-5" />
                      <span>Unmute Audio</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{ y, scale }}
          >
            <ImageWithFallback
              src={heroImages[currentImageIndex]}
              alt={`Nigerian cuisine ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              fallbackText="In & Out Kitchen"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Animated Flames/Heat Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/20 via-transparent to-transparent opacity-60 animate-pulse" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        {/* Main Headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow: '0 4px 20px rgba(255, 107, 53, 0.5), 0 0 60px rgba(255, 215, 0, 0.3)',
            fontFamily: "'Playfair Display', serif"
          }}
        >
          {getTranslation('heroHeadline', language)}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed"
          style={{
            fontStyle: language === 'pidgin' ? 'italic' : 'normal',
            color: language === 'pidgin' ? '#FFD700' : 'inherit'
          }}
        >
          {getTranslation('heroSubtext', language)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button
            size="lg"
            onClick={handleOrderNow}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all duration-300 hover:scale-105 font-semibold"
            aria-label={getTranslation('orderNow', language)}
          >
            <motion.span
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {getTranslation('orderNow', language)}
            </motion.span>
          </Button>

          <Button
            size="lg"
            onClick={handleReserveTable}
            variant="outline"
            className="bg-transparent border-2 border-white/80 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            aria-label={getTranslation('reserveTable', language)}
          >
            {getTranslation('reserveTable', language)}
          </Button>
        </motion.div>

        {/* Floating Particles/Steam Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
              style={{
                left: `${20 + i * 15}%`,
                bottom: '10%'
              }}
              animate={{
                y: [0, -100, -200, -300],
                opacity: [0, 0.6, 0.3, 0],
                scale: [0.5, 1, 1.5, 2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
            Swipe for Spice
          </p>
          <ChevronDown className="w-6 h-6 text-[#FFD700]" />
        </motion.div>
      </motion.div>

      {/* Pepper Confetti on hover (CSS only for performance) */}
      <style jsx>{`
        @keyframes float-pepper {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};