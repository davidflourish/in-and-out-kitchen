import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Heart, Users, Instagram, Globe, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { generateWhatsAppLink, createInquiryMessage } from '../../utils/whatsapp';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1995',
    title: "Grandma's Ibadan Hearth",
    description: "It all started in Grandma Adenike's kitchen in Ibadan. Her secret jollof recipe became legendary in the neighborhood, with people queuing for hours just to taste it."
  },
  {
    year: '2010',
    title: 'First Lagos Market Stall',
    description: "We brought Grandma's recipes to Lagos, setting up our first stall at Balogun Market. The response was overwhelming - we sold out every single day!"
  },
  {
    year: '2015',
    title: 'Mile 12 Partnership',
    description: "Formed direct partnerships with farmers and suppliers at Mile 12 Market, ensuring we always use the freshest, highest-quality Nigerian ingredients."
  },
  {
    year: '2020',
    title: 'Lagos Pop-Up Success',
    description: "Our pop-up restaurant in Ikeja became an instant hit during the pandemic, with customers driving from all over Lagos for authentic home-cooked meals."
  },
  {
    year: '2024',
    title: 'In and Out Kitchen Born',
    description: "Today, we serve thousands of customers through delivery and our restaurant, keeping Grandma's legacy alive with every plate we serve."
  }
];

export const AboutSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number>(2);

  const handleContactUs = () => {
    const message = createInquiryMessage('General Inquiry', 'I want to learn more about In and Out Kitchen');
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-muted py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Grandma's kitchen to your table - three generations of authentic Nigerian cuisine
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden lg:block" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } text-center lg:text-left`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedEvent(index)}
                      className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                        selectedEvent === index
                          ? 'bg-primary text-primary-foreground shadow-2xl'
                          : 'bg-card hover:bg-accent'
                      }`}
                    >
                      <div className="text-4xl font-bold mb-2 text-accent">
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                      <p className={selectedEvent === index ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full border-4 ${
                        selectedEvent === index
                          ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                          : 'bg-card border-border'
                      }`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 360° Virtual Tour Placeholder */}
        {/* <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Take a Virtual Tour
          </h3>
          <div className="relative aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 rounded-2xl overflow-hidden border-4 border-border shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <Globe className="w-20 h-20 text-primary mb-4 animate-pulse" />
              <p className="text-xl text-foreground font-semibold mb-2">
                360° Virtual Tour Coming Soon
              </p>
              <p className="text-muted-foreground max-w-md">
                Experience our vibrant kitchen and dining space - see where the magic happens from Ankara counters to the sizzling grill!
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            { icon: <Users className="w-8 h-8" />, value: '10,000+', label: 'Happy Customers' },
            { icon: <Heart className="w-8 h-8" />, value: '50+', label: 'Menu Items' },
            { icon: <Clock className="w-8 h-8" />, value: '< 30min', label: 'Avg Delivery Time' },
            { icon: <MapPin className="w-8 h-8" />, value: '5 Zones', label: 'Lagos Coverage' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all shadow-lg text-center"
            >
              <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Grid Placeholder */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Follow Our Journey
          </h3>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden border-2 border-border cursor-pointer relative group"
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <Instagram className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => window.open('https://www.instagram.com/inandoutkitchenltd', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => window.open('www.tiktok.com/@inandoutkitchenltd', '_blank')}
            >
              <Globe className="w-5 h-5 mr-2" />
              TikTok
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={handleContactUs}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-primary via-secondary to-accent p-12 rounded-3xl text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Taste Authentic Naija Flavors?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Order now and experience the difference that comes from three generations of culinary excellence
          </p>
          <Button
            size="lg"
            onClick={handleContactUs}
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-2xl"
          >
            Contact Us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
