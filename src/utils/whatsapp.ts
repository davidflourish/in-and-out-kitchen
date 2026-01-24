// WhatsApp Integration Utilities
// Phone number for In and Out Kitchen (Nigeria format)
export const WHATSAPP_PHONE = '2349034973174'; // Replace with actual number

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

export const createOrderMessage = (items: OrderItem[], location?: string): string => {
  const itemsList = items
    .map((item) => `• ${item.quantity}x ${item.name} (₦${item.price.toLocaleString()})`)
    .join('\n');

  const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  let message = `Hi In and Out Kitchen! 🍛\n\nI'd like to place an order:\n\n${itemsList}\n\nTotal: ₦${total.toLocaleString()}`;

  if (location) {
    message += `\n\nDelivery Location: ${location}`;
  }

  return message;
};

export const createReservationMessage = (
  date: string,
  time: string,
  guests: number,
  name?: string
): string => {
  let message = `Hi In and Out Kitchen! 🎉\n\nI'd like to make a reservation:\n\n`;
  message += `📅 Date: ${date}\n⏰ Time: ${time}\n👥 Guests: ${guests}`;

  if (name) {
    message += `\n📝 Name: ${name}`;
  }

  return message;
};

export const createInquiryMessage = (subject: string, details?: string): string => {
  let message = `Hi In and Out Kitchen! 👋\n\nI have a question about: ${subject}`;

  if (details) {
    message += `\n\nDetails: ${details}`;
  }

  return message;
};

// Pre-built quick order messages
export const QUICK_ORDERS = {
  jollofCombo: createOrderMessage([
    { name: 'Jollof Rice', quantity: 1, price: 1800 },
    { name: 'Fried Chicken', quantity: 1, price: 1500 },
    { name: 'Zobo', quantity: 1, price: 400 }
  ]),
  suyaPlatter: createOrderMessage([
    { name: 'Suya Platter (Large)', quantity: 1, price: 3500 },
    { name: 'Palm Wine', quantity: 1, price: 1200 }
  ]),
  egusiSpecial: createOrderMessage([
    { name: 'Egusi Soup', quantity: 1, price: 2500 },
    { name: 'Pounded Yam', quantity: 1, price: 600 },
    { name: 'Goat Meat', quantity: 2, price: 1000 }
  ])
};
