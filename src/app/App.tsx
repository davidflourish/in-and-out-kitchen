import React, { useEffect } from 'react';
import { AppProvider } from './components/AppContext';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { Tour360Section } from './components/Tour360Section';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ThemeProvider } from './components/ui/theme-provider';

export default function App() {
  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="in-and-out-theme">
      <AppProvider>
        <div className="min-h-screen bg-background" id="hero">
          {/* Hero Section */}
          <HeroSection />

          {/* Menu Section */}
          <MenuSection />

          {/* About Section */}
          <AboutSection />

          {/* Events & Gallery Section */}
          <EventsSection />

          {/* 360 Tour Section */}
          <Tour360Section />

          {/* Footer */}
          <Footer />

          {/* Sticky Bottom Navigation */}
          <StickyBottomBar />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}