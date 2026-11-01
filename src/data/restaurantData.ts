export interface MenuItem {
  id: string;
  name: string;
  kannadaName?: string;
  description: string;
  category: 'brunch' | 'lunch' | 'dinner';
  isVeg: boolean;
  isSpecialty?: boolean;
  firewoodCooked?: boolean;
  tag?: string;
  price?: string;
  image: string;
}

export interface SeatingOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  capacity: string;
  image: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  kannadaTitle?: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Food' | 'Interiors' | 'Kitchen' | 'Ambience';
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export const RESTAURANT_INFO = {
  name: "Saarangi – The Vintage Kitchen",
  kannadaName: "ಸಾರಂಗಿ – ದ ವಿಂಟೇಜ್ ಕಿಚನ್",
  tagline: "Experience the timeless aroma of 100% firewood cooking & warm vintage hospitality in Mysuru.",
  kannadaTagline: "೧೦೦% ಸೌದೆ ಒಲೆ ಊಟದ ಸುವಾಸನೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆತಿಥ್ಯ",
  phone: "94643 69369",
  phoneFormatted: "+91 94643 69369",
  whatsappNumber: "919464369369",
  email: "info@saarangi.in",
  address: {
    line1: "16 & 17, 2nd Phase Badavane",
    line2: "4th Stage, Vijayanagar",
    city: "Mysuru",
    state: "Karnataka",
    pincode: "570032",
    full: "16 & 17, 2nd Phase Badavane, 4th Stage, Vijayanagar, Mysuru, Karnataka – 570032"
  },
  timings: {
    weekdays: "11:30 AM – 11:00 PM",
    weekends: "8:00 AM – 11:00 PM (Special Morning Breakfast)",
    kitchenNote: "Firewood hearths lit fresh twice every day"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Saarangi+The+Vintage+Kitchen+Vijayanagar+Mysuru",
  legacyYear: 1998,
  mysoreOpeningDate: "22 June 2025",
  seatingCapacity: "340+ Guests"
};

export const STORY_DETAILS = {
  title: "A Culinary Legacy Rekindled in Mysuru",
  subtitle: "From Tirumala's Sacred Narayanagiri to the Royal City of Mysuru",
  establishedYear: "1998",
  mysoreLaunch: "22 June 2025",
  paragraphs: [
    "The journey of Saarangi began in 1998 in the tranquil Narayanagiri area of Tirumala (TTD), where hospitality was practiced as a sacred art and every meal was prepared with deep devotion and time-honored Indian traditions.",
    "Rooted in that revered legacy of authentic taste and hospitality spanning nearly three decades, Saarangi opened its grand doors in Mysuru on 22 June 2025 at Vijayanagar 4th Stage. We brought with us the time-honored heritage of slow-cooked firewood gastronomy.",
    "At Saarangi – The Vintage Kitchen, we do not merely serve food; we revive ancestral cooking traditions. Our recipes are prepared exclusively over glowing firewood hearths ('ಸೌದೆ ಒಲೆ'), preserving the unadulterated earthy aromas, tender textures, and authentic flavors that modern cooking methods often compromise.",
    "Every corner of our 340+ seat estate is crafted with vintage wooden architecture, terracotta accents, and warm royal lighting, offering families and food connoisseurs a memorable culinary pilgrimage."
  ],
  stats: [
    { label: "Culinary Heritage Since", value: "1998" },
    { label: "Grand Opening in Mysuru", value: "June 2025" },
    { label: "Guest Seating Capacity", value: "340+" },
    { label: "Firewood Cooked Purity", value: "100%" }
  ]
};

export const FIREWOOD_KITCHEN_DATA = {
  title: "100% Firewood Live Kitchen",
  kannadaTitle: "೧೦೦% ಸೌದೆ ಒಲೆ ನೇರ ಅಡುಗೆಮನೆ",
  subtitle: "Where ancient hearths meet generational recipes",
  description: "At Saarangi, our live kitchen is built around genuine firewood hearths. Wood-fire cooking infuses a rich, distinctive smokiness that penetrates deep into slow-simmered gravies, tender meats, and freshly roasted grains.",
  features: [
    {
      title: "100% Real Firewood Cooking",
      description: "No shortcuts, no gas stoves for our signature dishes. Natural wood heat creates uniform slow cooking and unforgettable aroma.",
      icon: "Flame"
    },
    {
      title: "Authentic Vegetarian Delicacies",
      description: "Traditional Karnataka saaru, wood-fired paneer gravies, slow-cooked lentils, and heritage vegetable curries crafted from scratch.",
      icon: "Leaf"
    },
    {
      title: "Heritage Egg Specialties",
      description: "Smoky egg roasts, egg fry piece pulao, and country egg curries simmered in clay and cast-iron vessels.",
      icon: "Egg"
    },
    {
      title: "Celebrated Non-Veg Specialties",
      description: "Nati Koli (country chicken) saaru, wood-fired mutton biryani, fish kebabs, and juicy mutton chops cooked over glowing embers.",
      icon: "Drumstick"
    }
  ]
};

export const CHAAT_DATA = {
  title: "Chaat Ka Chaska",
  tagline: "Authentic Delhi Street Food • 100% Pure Vegetarian Counter",
  subtitle: "Tangy, spicy, sweet and soulful flavors of Old Delhi right in the heart of Mysuru",
  description: "Experience the vibrant buzz of Chandni Chowk and Old Delhi's legendary street food culture at our dedicated pure vegetarian chaat destination, 'Chaat Ka Chaska'. Every chutney is freshly ground, every puri crisped to golden perfection, and every blend of spices handcrafted without compromise.",
  highlights: [
    "Prepared in an exclusively segregated 100% Pure Vegetarian station",
    "Handmade mint, tamarind, and saunth chutneys using age-old recipes",
    "Crispy puris, fresh curd, and authentic Delhi spice blends",
    "Hygienic open presentation with pure mineral water preparations"
  ],
  popularItems: [
    { name: "Delhi Special Dahi Puri", desc: "Crisp puris filled with spiced potato, whipped sweet curd, tangy chutneys and sev" },
    { name: "Old Delhi Samosa Chaat", desc: "Crushed flaky samosas topped with zesty chole, spiced yogurt and mint coriander swirl" },
    { name: "Crispy Sev Puri", desc: "Flat puris topped with diced potatoes, onions, trio of signature chutneys and fine sev" },
    { name: "Kolkata Style Pani Puri", desc: "Puffed spheres served with aromatic hing-jeera teekha pani and khatta-meetha water" }
  ]
};

export const SEATING_EXPERIENCES: SeatingOption[] = [
  {
    id: "hut-style",
    title: "Hut-Style Private & Family Seating",
    subtitle: "Rustic thatched cabanas for intimate family gatherings",
    description: "Designed for families and groups who cherish privacy and rustic charm. Handcrafted bamboo and thatched canopy huts provide a cozy, authentic village courtyard ambience.",
    features: ["Natural thatched roof cooling", "Independent family enclosure", "Warm vintage lantern lighting", "Dedicated service captain"],
    capacity: "6 – 12 Guests per hut",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "indoor-dining",
    title: "Indoor Heritage Dining",
    subtitle: "Regal comfort surrounded by classic woodwork and warm amber tones",
    description: "Our spacious central dining hall features hand-polished teak furniture, vintage brass accents, and gentle ambient acoustics, perfect for multi-course family lunches and grand feasts.",
    features: ["Climate-controlled comfort", "High heritage ceilings", "Comfortable cushioned chairs", "Expansive banquet setup"],
    capacity: "Up to 120 Guests",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "outdoor-dining",
    title: "Garden Outdoor Dining",
    subtitle: "Dine under Mysore's breezy skies amidst serene garden greenery",
    description: "Embrace the pleasant Mysuru weather in our open-air garden courtyard. Shaded by trees and illuminated by warm fairy lights at dusk, it offers an enchanting dinner experience.",
    features: ["Open-air garden atmosphere", "Gentle natural breeze", "Fairy-lit evening ambience", "Spacious open seating"],
    capacity: "Up to 80 Guests",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "first-floor",
    title: "First-Floor Outer View Seating",
    subtitle: "Elevated vantage point with panoramic views of Vijayanagar greenery",
    description: "Perched on the upper tier, this seating zone combines fresh breezes with a scenic overlook of the surrounding landscape. Ideal for evening gatherings and leisurely dining.",
    features: ["Elevated scenic views", "Open-sided breezy gallery", "Ideal for twilight dining", "Quiet and relaxing setting"],
    capacity: "Up to 60 Guests",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "front-porch",
    title: "Front-Porch Outdoor Seating",
    subtitle: "Traditional veranda setting for quick bites, chaats and filter coffee",
    description: "Inspired by the warm 'thinnai' (front porch) of traditional heritage homes, this area invites you to pause for artisanal filter coffee, crisp dosas, and quick evening conversations.",
    features: ["Heritage veranda styling", "Instant service counter", "Perfect for coffee & chaats", "Informal and relaxed vibe"],
    capacity: "Up to 30 Guests",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "pdr",
    title: "Private Dining Room (PDR)",
    subtitle: "Exclusive VIP chamber for executive meetings and family celebrations",
    description: "An enclosed luxury dining enclave offering total privacy, customized curated menus, and personalized butler service for corporate dinners, birthdays, and family milestones.",
    features: ["Complete acoustic privacy", "Dedicated butler & chef service", "Customizable multi-course menu", "Pre-booking reservation"],
    capacity: "15 – 25 Guests",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=80"
  }
];

export const SEGREGATION_DATA = {
  title: "100% Segregation Protocol",
  kannadaTitle: "ಸಸ್ಯಾಹಾರಿ ಮತ್ತು ಮಾಂಸಾಹಾರಿ ಪ್ರತ್ಯೇಕ ವ್ಯವಸ್ಥೆ",
  subtitle: "Absolute reverence for dining choices and culinary purity",
  description: "At Saarangi, we respect the dietary choices of every guest. Our vegetarian and non-vegetarian sections operate as two completely independent entities under one roof, ensuring total peace of mind for pure vegetarian diners.",
  pillars: [
    {
      title: "Separate Kitchens",
      desc: "Completely partitioned kitchen buildings with dedicated entryways, storage racks, and distinct culinary staff.",
      icon: "Building2"
    },
    {
      title: "Dedicated Washing Areas",
      desc: "No shared dishwashing zones. Pure vegetarian and non-vegetarian utensils are cleaned at isolated, independent washing bays.",
      icon: "Droplets"
    },
    {
      title: "Independent Utensils & Cookware",
      desc: "Distinct color-coded vessels, clay pots, ladles, knives, and serving platters that never intermix at any stage.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Dedicated Service Systems",
      desc: "Separate service teams, aprons, and order processing workflows from the stoves straight to your dining table.",
      icon: "ShieldCheck"
    }
  ]
};

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "firewood",
    title: "100% Firewood Cooking",
    kannadaTitle: "೧೦೦% ಸೌದೆ ಒಲೆ ಊಟ",
    description: "Genuine hardwood logs slowly kindle our traditional hearths, imbuing every dish with an authentic rustic aroma and depth of flavor unmatched by modern LPG cooking.",
    iconName: "Flame"
  },
  {
    id: "non-veg",
    title: "Authentic Non-Vegetarian Cuisine",
    kannadaTitle: "ಅಪ್ಪಟ ನಾಟಿ ಶೈಲಿಯ ಮಾಂಸಾಹಾರಿ ಊಟ",
    description: "From tender Nati Koli (country chicken) curries to wood-fired mutton fry biryanis and coastal fish fries, our meat delicacies celebrate regional culinary mastery.",
    iconName: "Drumstick"
  },
  {
    id: "breakfast",
    title: "Traditional Non-Veg Breakfast",
    kannadaTitle: "ಸಾಂಪ್ರದಾಯಿಕ ನಾಟಿ ಬೆಳಗಿನ ಉಪಹಾರ",
    description: "Relish the iconic Mysuru tradition of morning Kali Dosa and Ghee Roast paired with piping hot mutton paya curry, chicken chops, and aromatic gravies.",
    iconName: "Soup"
  },
  {
    id: "segregation",
    title: "Strict Separate Kitchens",
    kannadaTitle: "ಸಂಪೂರ್ಣ ಪ್ರತ್ಯೇಕ ಅಡುಗೆ ಕೋಣೆಗಳು",
    description: "Zero cross-contamination guaranteed. Separate preparation areas, independent washing bays, and dedicated cookware for vegetarian and non-vegetarian offerings.",
    iconName: "ShieldCheck"
  },
  {
    id: "chefs",
    title: "Experienced Master Chefs",
    kannadaTitle: "ಅನುಭವಿ ಪಾಕ ಪ್ರವೀಣರು",
    description: "Culinary artisans with decades of mastery in firewood flame management, heritage spice-grinding, and traditional slow-simmered regional recipes.",
    iconName: "Award"
  },
  {
    id: "capacity",
    title: "Spacious 340+ Seating Capacity",
    kannadaTitle: "೩೪೦+ ಆಸನಗಳ ವಿಶಾಲ ತಾಣ",
    description: "A grand destination with 6 distinct seating themes, ample on-site parking, lush surroundings, and effortless comfort for families and large celebrations.",
    iconName: "Users"
  },
  {
    id: "celebrity",
    title: "Celebrity & Dignitary Clientele",
    kannadaTitle: "ಗಣ್ಯರ ಮೆಚ್ಚಿನ ತಾಣ",
    description: "A preferred culinary hotspot in Mysuru trusted by distinguished dignitaries, artists, and food lovers seeking genuine taste and vintage privacy.",
    iconName: "Star"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // BRUNCH (Breakfast & Brunch items)
  {
    id: "b1",
    name: "Firewood Kali Dosa with Nati Koli Saaru",
    kannadaName: "ಸೌದೆ ಒಲೆ ಕಲಿ ದೋಸೆ & ನಾಟಿ ಕೋಳಿ ಸಾರು",
    description: "Pillowy, sponge-soft fermented dosas cooked over firewood iron tawa, served with slow-cooked country chicken gravy.",
    category: "brunch",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Saarangi Signature",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b2",
    name: "Heritage Mutton Paya Curry",
    kannadaName: "ಸಾಂಪ್ರದಾಯಿಕ ಮಟನ್ ಕಾಲಿನ ಸೂಪ್ / ಸಾರು",
    description: "Tender trotters slow-simmered overnight over firewood embers with whole peppercorns, cinnamon, and fresh herbs.",
    category: "brunch",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Morning Must-Have",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b3",
    name: "Golden Ghee Roast Dosa with Sagu",
    kannadaName: "ತುಪ್ಪದ ರೋಸ್ಟ್ ದೋಸೆ & ಸಾಂಪ್ರದಾಯಿಕ ಸಾಗು",
    description: "Crispy crepe made with aged batter, doused in pure aromatic desi ghee, served with traditional potato-vegetable sagu and fresh coconut chutney.",
    category: "brunch",
    isVeg: true,
    isSpecialty: false,
    firewoodCooked: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b4",
    name: "Egg Fry Piece Pulao",
    kannadaName: "ಎಗ್ ಫ್ರೈ ಪೀಸ್ ಪುಲಾವ್",
    description: "Fragrant short-grain rice gently spiced and tossed with firewood-roasted masala eggs and crispy caramelized shallots.",
    category: "brunch",
    isVeg: false,
    isSpecialty: false,
    firewoodCooked: true,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b5",
    name: "Mysore Masala Dosa",
    kannadaName: "ಮೈಸೂರು ಮಸಾಲ ದೋಸೆ",
    description: "The crown jewel of Mysuru: golden-crisped dosa layered with spicy red garlic-chutney and stuffed with spiced potato palya.",
    category: "brunch",
    isVeg: true,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Mysore Classic",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "b6",
    name: "South Indian Degree Filter Coffee",
    kannadaName: "ದಕ್ಷಿಣ ಭಾರತೀಯ ಫಿಲ್ಟರ್ ಕಾಫಿ",
    description: "Strong, freshly brewed chicory-infused decoction hand-frothed with hot rich milk in traditional brass dabara-tumbler.",
    category: "brunch",
    isVeg: true,
    isSpecialty: false,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },

  // LUNCH
  {
    id: "l1",
    name: "Firewood Chicken Fry Piece Biryani",
    kannadaName: "ಸೌದೆ ಒಲೆ ಚಿಕನ್ ಫ್ರೈ ಪೀಸ್ ಬಿರಿಯಾನಿ",
    description: "Long-grain seeraga samba rice cooked on slow firewood embers, crowned with succulent spicy Andhra-style chicken fry pieces.",
    category: "lunch",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "l2",
    name: "Mutton Fry Piece Biryani",
    kannadaName: "ಮಟನ್ ಫ್ರೈ ಪೀಸ್ ಬಿರಿಯಾನಿ",
    description: "Tender cuts of mutton shallow-fried in country spices, folded into wood-fired dum biryani rice infused with saffron and mint.",
    category: "lunch",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Chef Special",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "l3",
    name: "Gongura Chicken Fry",
    kannadaName: "ಗೋಂಗೂರ ಚಿಕನ್ ಫ್ರೈ",
    description: "Farm-fresh chicken morsels tossed in tangy sorrel (gongura) leaves, hand-pounded red chilies, and cold-pressed oil.",
    category: "lunch",
    isVeg: false,
    isSpecialty: false,
    firewoodCooked: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "l4",
    name: "Crispy Apollo Fish",
    kannadaName: "ಅಪೊಲೊ ಫಿಶ್ ಫ್ರೈ",
    description: "Boneless river fish fillets marinated in spiced curd and curry leaf tempering, seared until golden and crisp.",
    category: "lunch",
    isVeg: false,
    isSpecialty: false,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "l5",
    name: "Grand Traditional Veg Thali",
    kannadaName: "ಸಾಂಪ್ರದಾಯಿಕ ಸಸ್ಯಾಹಾರಿ ಊಟ",
    description: "Prepared in our 100% separate veg kitchen: kosambari, palya, sambar, rasam, kootu, hot ghee rice, poori, curd, and obbattu payasa.",
    category: "lunch",
    isVeg: true,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Pure Veg Kitchen",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "l6",
    name: "Nati Koli Saaru (Country Chicken)",
    kannadaName: "ಅಪ್ಪಟ ನಾಟಿ ಕೋಳಿ ಸಾರು",
    description: "Free-range country chicken cooked in an earthy masala of roasted coriander, pepper, byadagi chilli, and fresh coconut.",
    category: "lunch",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Heritage Recipe",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80"
  },

  // DINNER
  {
    id: "d1",
    name: "Firewood Mutton Chops Gravy",
    kannadaName: "ಸೌದೆ ಒಲೆ ಮಟನ್ ಚಾಪ್ಸ್",
    description: "Prime mutton ribs gently simmered for hours over low firewood flames with caramelized shallots and crushed whole spices.",
    category: "dinner",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    tag: "Signature Dinner",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d2",
    name: "Chicken Joint Dum Biryani",
    kannadaName: "ಚಿಕನ್ ಜಾಯಿಂಟ್ ದಮ್ ಬಿರಿಯಾನಿ",
    description: "Whole tender chicken leg marinated in seasoned curd and spices, layered under fragrant dum rice sealed with dough on charcoal.",
    category: "dinner",
    isVeg: false,
    isSpecialty: true,
    firewoodCooked: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d3",
    name: "Chilli Garlic Prawns",
    kannadaName: "ಚಿಲ್ಲಿ ಗಾರ್ಲಿಕ್ ಪ್ರಾನ್ಸ್",
    description: "Plump coastal prawns flash-tossed with crushed garlic, green chillies, spring onions, and dark soy glaze.",
    category: "dinner",
    isVeg: false,
    isSpecialty: false,
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d4",
    name: "Smoky Dal Makhani & Tandoori Rotis",
    kannadaName: "ದಾಲ್ ಮಖನಿ & ತಂದೂರಿ ರೊಟ್ಟಿ",
    description: "Black lentils and kidney beans slow-cooked overnight with white butter and cream, accompanied by crisp firewood tandoor rotis.",
    category: "dinner",
    isVeg: true,
    isSpecialty: false,
    firewoodCooked: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d5",
    name: "Delhi Dahi Puri (Chaat Ka Chaska)",
    kannadaName: "ದೆಹಲಿ ದಹಿ ಪುರಿ",
    description: "Handcrafted pure vegetarian chaat: crispy puris topped with chilled sweetened yogurt, tangy tamarind, and fine sev.",
    category: "dinner",
    isVeg: true,
    isSpecialty: true,
    tag: "Chaat Counter",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "d6",
    name: "Firewood Butter Chicken",
    kannadaName: "ಬಟರ್ ಚಿಕನ್ ಗ್ರೇವಿ",
    description: "Smoky tandoor-roasted chicken morsels folded into a velvety makhani gravy enriched with cashew paste and sun-dried kasuri methi.",
    category: "dinner",
    isVeg: false,
    isSpecialty: false,
    firewoodCooked: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "100% Firewood Live Kitchen Cooking",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    description: "Our master chefs working the live firewood hearths with traditional cast-iron cauldrons."
  },
  {
    id: "g2",
    title: "Rustic Hut-Style Private Dining Cabanas",
    category: "Dining spaces",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    description: "Cozy thatching and vintage wooden tables nestled in our peaceful courtyard."
  },
  {
    id: "g3",
    title: "Signature Firewood Biryani Dum Vessel",
    category: "Food",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
    description: "Fragrant biryani sealed with dough, unsealed to release clouds of aromatic spices."
  },
  {
    id: "g4",
    title: "Heritage Dining Hall Interiors",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    description: "Classic architecture with hand-carved pillars, antique lanterns and vintage woodwork."
  },
  {
    id: "g5",
    title: "Chaat Ka Chaska Live Counter",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    description: "Vibrant and hygienic pure vegetarian Delhi street food counter in full swing."
  },
  {
    id: "g6",
    title: "Open-Air Garden Dining at Twilight",
    category: "Ambience",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80",
    description: "Warm amber fairy lights transforming the outdoor dining grove into a magical evening retreat."
  },
  {
    id: "g7",
    title: "Traditional South Indian Breakfast Feast",
    category: "Food",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80",
    description: "Crispy ghee roast dosas, fluffy idlis, and slow-cooked mutton paya."
  },
  {
    id: "g8",
    title: "First-Floor Outer View Balcony",
    category: "Dining spaces",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80",
    description: "Fresh evening air and verdant views over Vijayanagar 4th stage."
  },
  {
    id: "g9",
    title: "Warm Porch Hospitality & Coffee Corner",
    category: "Ambience",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    description: "Relaxed veranda seating where guests savor traditional filter coffee and quick chats."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "firewood-magic",
    title: "The Magic of 100% Firewood Cooking (ಸೌದೆ ಒಲೆ ಊಟ)",
    date: "August 14, 2025",
    readTime: "4 min read",
    excerpt: "Why returning to traditional firewood hearths produces an unmatched depth of smoky aroma, tender textures, and authentic health benefits.",
    content: "In an era of microwave convenience and high-speed commercial gas ranges, Saarangi takes an uncompromising stance: the true soul of Indian culinary heritage lives in firewood cooking. When hardwood embers crackle under clay vessels and heavy cast-iron pots, the heat diffuses gently and evenly. This slow cooking allows ground spices and cold-pressed oils to release their essential phytonutrients and profound aromas without scorching. The gentle infusion of natural wood smoke creates a subtle, irreplaceable note that pairs seamlessly with biryanis, roasted spices, and slow-cooked gravies.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    category: "Culinary Heritage"
  },
  {
    id: "tirumala-legacy",
    title: "From Tirumala's Narayanagiri to the Heart of Mysuru",
    date: "July 28, 2025",
    readTime: "5 min read",
    excerpt: "Tracing our founding story from 1998 in sacred Tirumala to opening our 340+ seat vintage kitchen in Vijayanagar Mysuru.",
    content: "The Saarangi story did not begin in a corporate boardroom—it was born in 1998 in the sacred Narayanagiri foothills of Tirumala (TTD). Serving pilgrims taught our founders that food is more than sustenance: it is a sacred offering. Bringing this deep philosophy of hospitality to Mysuru on June 22, 2025 was a heartfelt homecoming. Mysuru's rich royal lineage and love for authentic culinary traditions made it the natural home for our vintage estate.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    category: "Our Journey"
  },
  {
    id: "pure-veg-segregation",
    title: "The Art of Absolute Segregation: Respecting Every Palate",
    date: "July 10, 2025",
    readTime: "3 min read",
    excerpt: "How Saarangi ensures 100% peace of mind for vegetarian patrons through completely independent kitchens and service ecosystems.",
    content: "For many traditional families, dining out often carries concerns about mixed utensils and shared prep stations. At Saarangi, we resolved this from our architectural blueprint. We operate two fully autonomous kitchens: complete separate cooking quarters, dedicated washing zones, distinct storage, and dedicated service staff. Our pure vegetarian counter, including 'Chaat Ka Chaska', remains completely untainted, allowing everyone in the family to celebrate together under one grand roof.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    category: "Traditions & Purity"
  }
];
