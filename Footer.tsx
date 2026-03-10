import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Instagram, Globe, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useApp } from './AppContext';
import { getTranslation } from '../../utils/i18n';
import { generateWhatsAppLink, createInquiryMessage } from '../../utils/whatsapp';
import { AdminLogin } from './AdminLogin';

export const Footer: React.FC = () => {
  const { language } = useApp();
  const [email, setEmail] = React.useState('');
  const [adminLoginOpen, setAdminLoginOpen] = React.useState(false);
  const [clickCount, setClickCount] = React.useState(0);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend
    const message = createInquiryMessage('Newsletter Signup', `Email: ${email}`);
    window.open(generateWhatsAppLink(message), '_blank');
    setEmail('');
  };

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Reset after 3 seconds
    setTimeout(() => setClickCount(0), 3000);

    // Open admin login after 5 rapid clicks
    if (newCount >= 5) {
      setAdminLoginOpen(true);
      setClickCount(0);
    }
  };

  const handleAdminLogin = () => {
    // Redirect to admin dashboard
    window.location.href = '/admin';
  };

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isJummah = currentDay === 'Friday';

  return (
    <footer className="bg-[#212121] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">
              In & Out Kitchen
            </h3>
            <p className="text-white/70 mb-4">
              Authentic Nigerian cuisine with three generations of culinary excellence. From Grandma's kitchen to your table.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors"
                aria-label="Follow us on TikTok"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">
              {getTranslation('contactUs', language)}
            </h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <p>KLM 4 Ondo Road, opp. Barracks First Gate, Akure 340001, Ondo</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <p>+234 812 345 6789</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <p>dakinsik@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">
              {getTranslation('openingHours', language)}
            </h4>
            <div className="space-y-2 text-white/70">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span className="font-semibold text-white">9AM - 10PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Friday:</span>
                <div className="text-right">
                  <span className="font-semibold text-white block">11AM - 2PM</span>
                  <span className="text-xs text-[#FFD700]">
                    {isJummah && '(Jumu\'ah Break 1-2PM)'}
                  </span>
                  <span className="font-semibold text-white block">3PM - 11PM</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Sat - Sun:</span>
                <span className="font-semibold text-white">10AM - 11PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">
              Join the Spice Squad
            </h4>
            <p className="text-white/70 mb-4 text-sm">
              Get recipes, N500 off codes, and be the first to hear about new dishes!
            </p>
            <form onSubmit={handleNewsletterSignup} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90"
              >
                Sign Up via WhatsApp
              </Button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-12">
          <div className="aspect-video max-h-96 bg-muted rounded-xl overflow-hidden border-2 border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.048304645247!2d5.184563380066177!3d7.254387200000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478f622d31ab31%3A0xe7114283d43151a4!2sIn%20%26%20Out%20Kitchen%20LTD!5e1!3m2!1sen!2sng!4v1769196146184!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="In and Out Kitchen Location - Ikeja, Lagos"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p
              onClick={handleSecretClick}
              className="cursor-default select-none"
              title="Click 5 times quickly for admin access"
            >
              © 2026 In & Out Kitchen. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <AdminLogin
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLogin={handleAdminLogin}
      />
    </footer>
  );
};