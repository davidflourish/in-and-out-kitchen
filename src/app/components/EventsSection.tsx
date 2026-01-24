import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { generateWhatsAppLink, createReservationMessage } from '../../utils/whatsapp';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  image?: string;
}

const upcomingEvents: Event[] = [
  {
    id: 'afrobeat-jollof',
    title: 'Afrobeat Jollof-Off',
    description: 'Join us for a cooking competition and live Afrobeat music! Watch our chefs battle it out.',
    date: 'Jan 28, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'In & Out Kitchen, Ikeja',
    capacity: 50,
    image: 'https://bloximages.chicago2.vip.townnews.com/mississauga.com/content/tncms/assets/v3/editorial/9/b9/9b905957-a0e9-5624-a91a-f6113439719e/68796a2d83a49.image.jpg?resize=1200%2C654'
  },
  {
    id: 'sallah-grill',
    title: 'Sallah Grill Fest',
    description: 'Celebrate Eid with us! Special halal menu, family activities, and traditional music.',
    date: 'Mar 15, 2026',
    time: '12:00 PM - 8:00 PM',
    location: 'In & Out Kitchen, Ikeja',
    capacity: 100,
    image: 'https://img.freepik.com/premium-photo/assortment-various-barbecue-food-grill-meat-bbq-party-fest_136595-7847.jpg'
  },
  {
    id: 'suya-night',
    title: 'Suya Saturday Night',
    description: 'Every Saturday! Live suya grilling, music, and community vibes.',
    date: 'Every Saturday',
    time: '7:00 PM - 11:00 PM',
    location: 'In & Out Kitchen, Ikeja',
    capacity: 40,
    image: 'https://i0.wp.com/teakisi.com/wp-content/uploads/2015/02/image8-1.jpg?fit=500%2C375&ssl=1'
  }
];

export const EventsSection: React.FC = () => {
  const handleRSVP = (event: Event) => {
    const message = createReservationMessage(event.date, event.time, 2, '');
    window.open(generateWhatsAppLink(message), '_blank');
  };

  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8" id="events">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for special celebrations, cooking demos, and community gatherings
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-2 border-border hover:border-primary hover:shadow-2xl transition-all">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-primary opacity-50" />
                    </div>
                  )}
                </div>

                <CardHeader>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Capacity: {event.capacity} guests</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={() => handleRSVP(event)}
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    RSVP via WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gallery Teaser */}
        {/* <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Past Events Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-muted to-muted-foreground/20 rounded-xl overflow-hidden border-2 border-border"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10" />
              </motion.div>
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From family eba laughs to string-lit Afrobeat nights, see the memories we've created together
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};