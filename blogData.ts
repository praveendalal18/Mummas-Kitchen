export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  content: string[];
  list?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-pickles-to-gift-in-goa",
    title: "Best Pickles to Gift in Goa – Authentic Flavours from Mumma's Kitchen",
    metaTitle: "Best Pickles to Gift in Goa | Mumma's Kitchen - Authentic Goan Pickles",
    metaDescription: "Looking for a unique gift from Goa? Discover the best homemade pickles to gift — mango pickle, prawn pickle & more. Handmade in Panaji with traditional Goan recipes.",
    excerpt: "If you're looking for a unique and meaningful gift from Goa, homemade pickles are a perfect choice. Packed with authentic flavours and traditional recipes, Goan pickles make memorable gifts.",
    date: "2026-03-01",
    readTime: "4 min read",
    sections: [
      {
        heading: "Why Pickles Make the Perfect Goan Gift",
        content: [
          "Goa is famous for its rich culinary heritage. While sweets and cashews are common souvenirs, homemade pickles offer something more personal and flavourful. They represent tradition, home-style cooking, and authentic Goan spices.",
          "At Mumma's Kitchen in Panaji, Goa, every jar is prepared using traditional recipes passed down through generations."
        ],
      },
      {
        heading: "1. Mango Pickle (Aam Lonche)",
        content: [
          "A classic favourite. Made with raw mangoes, mustard seeds, chili powder, and cold-pressed oil, this pickle pairs perfectly with rice, chapati, or even snacks."
        ],
        list: ["Festivals", "Family gatherings", "Housewarming ceremonies"],
      },
      {
        heading: "2. Prawn Pickle (Goan Style)",
        content: [
          "A true Goan specialty. This spicy, tangy pickle is loved by seafood enthusiasts and makes a premium gift option."
        ],
        list: ["NRI visitors", "Food lovers", "Wedding return gifts"],
      },
      {
        heading: "3. Mixed Vegetable Pickle",
        content: [
          "A balanced combination of carrots, lime, chillies, and spices — ideal for those who love variety."
        ],
      },
      {
        heading: "Where to Buy Homemade Pickles in Goa?",
        content: [
          "If you are in Panaji, Caranzalem, or nearby areas, Mumma's Kitchen offers freshly prepared homemade pickles made in small batches to maintain quality and taste. Browse our full range of pickles and place your order today.",
          "Contact us to place bulk orders for gifting."
        ],
      },
    ],
  },
  {
    slug: "homemade-pickles-healthier-than-store-bought",
    title: "Why Homemade Pickles Are Healthier Than Store-Bought Ones",
    metaTitle: "Homemade vs Store-Bought Pickles: Why Natural Pickles Are Healthier | Mumma's Kitchen",
    metaDescription: "Discover why homemade pickles are healthier than store-bought ones. No preservatives, fresh ingredients, natural fermentation. Traditional Goan pickles from Panaji.",
    excerpt: "Pickles are a staple in Indian households, but not all pickles are created equal. Homemade pickles are significantly healthier compared to mass-produced, store-bought options.",
    date: "2026-02-20",
    readTime: "5 min read",
    sections: [
      {
        heading: "1. No Artificial Preservatives",
        content: [
          "Store-bought pickles often contain synthetic preservatives, artificial colours, and chemical stabilizers. Homemade pickles use natural preservation methods like salt, oil, and sunlight."
        ],
      },
      {
        heading: "2. Fresh, High-Quality Ingredients",
        content: [
          "At Mumma's Kitchen in Tonca-Caranzalem, Panaji, ingredients are locally sourced from Goan markets. We use freshly ground spices and traditional cold-pressed oil. This improves both nutrition and taste."
        ],
      },
      {
        heading: "3. Controlled Oil & Salt Content",
        content: [
          "Commercial brands often increase salt and oil for shelf life. Homemade pickles maintain balance while preserving authentic flavour."
        ],
      },
      {
        heading: "4. Traditional Fermentation Benefits",
        content: [
          "Many homemade pickles undergo natural fermentation, which provides several health benefits."
        ],
        list: ["Supports gut health", "Improves digestion", "Enhances probiotic activity"],
      },
      {
        heading: "5. Made with Care, Not Chemicals",
        content: [
          "Homemade pickles are prepared in small batches, ensuring hygiene, quality control, and authentic taste.",
          "If you're searching for healthy homemade pickles in Goa, choose traditional options made with care. At Mumma's Kitchen in Panaji, we prepare every jar the traditional way — check out our full range of natural pickles."
        ],
      },
    ],
  },
  {
    slug: "top-5-goan-dishes-everyone-loves",
    title: "Top 5 Goan Dishes Everyone Loves",
    metaTitle: "Top 5 Goan Dishes You Must Try | Mumma's Kitchen - Panaji, Goa",
    metaDescription: "Explore the top 5 Goan dishes everyone loves — from Fish Curry to Pork Vindaloo. No Goan meal is complete without authentic homemade mango pickle from Panaji.",
    excerpt: "Goa is not just about beaches — it's a paradise for food lovers. Goan cuisine blends Portuguese influences with traditional Konkani flavours, creating unforgettable dishes.",
    date: "2026-02-10",
    readTime: "4 min read",
    sections: [
      {
        heading: "1. Goan Fish Curry",
        content: [
          "The heart of Goan cuisine. Made with coconut milk, kokum, and fresh spices, served best with steamed rice. This is the dish that defines Goa's culinary identity."
        ],
      },
      {
        heading: "2. Prawn Balchão",
        content: [
          "A spicy, tangy prawn preparation that's bold in flavour and loved across Goa. The unique blend of vinegar, onions, and Goan spices makes this a standout dish."
        ],
      },
      {
        heading: "3. Pork Vindaloo",
        content: [
          "One of Goa's most famous dishes. Made with vinegar, garlic, and spices, this dish is rich and flavourful. A true example of the Portuguese influence on Goan cuisine."
        ],
      },
      {
        heading: "4. Chicken Xacuti",
        content: [
          "A creamy coconut-based curry made with roasted spices and poppy seeds. This aromatic dish is a favourite in homes and restaurants across Panaji and all of Goa."
        ],
      },
      {
        heading: "5. Goan Mango Pickle",
        content: [
          "No Goan meal is complete without a spoon of pickle. A homemade mango pickle enhances any meal instantly. The perfect accompaniment to rice, chapati, or any Goan curry.",
          "If you're craving authentic homemade Goan flavours in Panaji, Mumma's Kitchen in Tonca-Caranzalem offers traditional pickles prepared with love. Explore our collection of handmade pickles."
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
