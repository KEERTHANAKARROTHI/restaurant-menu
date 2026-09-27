export const CATEGORIES = [
  { id: 'all', name: 'Full Menu', icon: '🍽️', count: 18 },
  { id: 'starters', name: 'Starters & Crudo', icon: '🥗', count: 4 },
  { id: 'mains', name: 'Chef’s Mains', icon: '🥩', count: 5 },
  { id: 'pasta-pizza', name: 'Handcrafted Pasta & Pizza', icon: '🍝', count: 4 },
  { id: 'desserts', name: 'Dolci & Desserts', icon: '🍮', count: 3 },
  { id: 'beverages', name: 'Botanical & Wine', icon: '🍷', count: 2 },
];

export const DIETARY_FILTERS = [
  { id: 'all', label: 'All Dishes' },
  { id: 'vegetarian', label: 'Vegetarian 🌿' },
  { id: 'vegan', label: 'Vegan 🌱' },
  { id: 'gluten-free', label: 'Gluten-Free 🌾' },
  { id: 'chef-special', label: 'Chef’s Pick ⭐' },
  { id: 'spicy', label: 'Spicy 🌶️' },
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Truffle & Forest Mushroom Bruschetta',
    category: 'starters',
    price: 18.5,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Chef's Special",
    spiciness: 0,
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp rustic sourdough rubbed with garlic, sautéed wild chanterelles, shaved black winter truffle, and aged stracciatella.',
    details: {
      calories: 340,
      prepTime: '12 min',
      allergens: ['Dairy', 'Gluten'],
      winePairing: '2021 Burgundy Pinot Noir',
      ingredients: ['Wild Chanterelles', 'Black Truffle', 'Stracciatella', 'Sourdough', 'Thyme Butter', 'Sea Salt Flakes']
    }
  },
  {
    id: 2,
    name: 'A5 Wagyu Beef Tartare & Bone Marrow',
    category: 'starters',
    price: 26.0,
    rating: 4.95,
    reviewsCount: 98,
    badge: 'Signature',
    spiciness: 1,
    dietary: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-cut Miyazaki Wagyu seasoned with caperberries, quail egg yolk, shallot confit, served with roasted marrow crostini.',
    details: {
      calories: 420,
      prepTime: '10 min',
      allergens: ['Eggs'],
      winePairing: 'Barolo DOCG 2018',
      ingredients: ['A5 Miyazaki Wagyu', 'Quail Egg', 'Capers', 'Shallots', 'Dijon Mustard', 'Smoked Olive Oil']
    }
  },
  {
    id: 3,
    name: 'Burrata Di Puglia & Heirloom Tomatoes',
    category: 'starters',
    price: 19.0,
    rating: 4.8,
    reviewsCount: 185,
    badge: 'Popular',
    spiciness: 0,
    dietary: ['vegetarian', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb2251a?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh Pugliese burrata heart, charred rainbow heirlooms, basil oil infusion, 25-year aged balsamic reduction, and pine nut brittle.',
    details: {
      calories: 380,
      prepTime: '8 min',
      allergens: ['Dairy', 'Nuts'],
      winePairing: 'Vermentino di Sardegna',
      ingredients: ['Pugliese Burrata', 'Heirloom Tomatoes', 'Genovese Basil', 'Aged Balsamic', 'Toasted Pine Nuts']
    }
  },
  {
    id: 4,
    name: 'Crispy Calamari & Tiger Prawn Fritti',
    category: 'starters',
    price: 21.0,
    rating: 4.75,
    reviewsCount: 114,
    badge: null,
    spiciness: 2,
    dietary: ['spicy'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    description: 'Light semolina-dusted baby squid and wild prawns, flash-fried with fresh chili rings and served with saffron garlic aioli.',
    details: {
      calories: 490,
      prepTime: '14 min',
      allergens: ['Shellfish', 'Eggs'],
      winePairing: 'Greco di Tufo',
      ingredients: ['Baby Calamari', 'Tiger Prawns', 'Semolina', 'Fresno Chilis', 'Saffron Aioli', 'Meyer Lemon']
    }
  },
  {
    id: 5,
    name: 'Pan-Roasted Chilean Sea Bass',
    category: 'mains',
    price: 44.0,
    rating: 4.96,
    reviewsCount: 220,
    badge: "Chef's Special",
    spiciness: 0,
    dietary: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Sustainably caught sea bass fillet, lemongrass velouté, glazed Romanesco broccoli, baby leeks, and Oscietra caviar pearls.',
    details: {
      calories: 560,
      prepTime: '22 min',
      allergens: ['Fish', 'Dairy'],
      winePairing: 'Chablis Premier Cru',
      ingredients: ['Chilean Sea Bass', 'Oscietra Caviar', 'Romanesco', 'Lemongrass', 'Beurre Blanc', 'Chives']
    }
  },
  {
    id: 6,
    name: 'Dry-Aged Prime Black Angus Ribeye (12oz)',
    category: 'mains',
    price: 52.0,
    rating: 4.98,
    reviewsCount: 310,
    badge: 'Bestseller',
    spiciness: 0,
    dietary: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    description: '45-day dry-aged beef chargrilled over binchotan coals, smoked garlic puree, glazed marrow jus, and crispy rosemary confit potatoes.',
    details: {
      calories: 780,
      prepTime: '25 min',
      allergens: ['Dairy'],
      winePairing: 'Napa Valley Cabernet Sauvignon',
      ingredients: ['Dry-Aged Angus Ribeye', 'Roasted Garlic', 'Bone Marrow Jus', 'Rosemary Confit', 'Fleur de Sel']
    }
  },
  {
    id: 7,
    name: 'Glazed Maple & Lavender Duck Breast',
    category: 'mains',
    price: 38.0,
    rating: 4.88,
    reviewsCount: 85,
    badge: null,
    spiciness: 0,
    dietary: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1514944298352-73a7d432ceac?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy skin Challans duck breast, spiced sour cherry reduction, parsnip mousseline, and charred King oyster mushroom.',
    details: {
      calories: 640,
      prepTime: '20 min',
      allergens: ['Dairy'],
      winePairing: 'Côtes du Rhône Reserve',
      ingredients: ['Duck Breast', 'Sour Cherries', 'Lavender Honey', 'Parsnip Mousseline', 'King Oyster Mushroom']
    }
  },
  {
    id: 8,
    name: 'Charred Miso-Glazed Cauliflower Steak',
    category: 'mains',
    price: 24.5,
    rating: 4.79,
    reviewsCount: 94,
    badge: 'Vegan Choice',
    spiciness: 1,
    dietary: ['vegetarian', 'vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Spiced cauliflower roasted in white miso marinade, served over roasted garlic tahini, pomegranate gems, and dukkah crunch.',
    details: {
      calories: 360,
      prepTime: '18 min',
      allergens: ['Sesame', 'Nuts'],
      winePairing: 'Chenin Blanc Vielles Vignes',
      ingredients: ['Heirloom Cauliflower', 'White Shiro Miso', 'Tahini', 'Pomegranate', 'Pistachio Dukkah', 'Cilantro Oil']
    }
  },
  {
    id: 9,
    name: 'Lamb Shank Osso Buco with Saffron Risotto',
    category: 'mains',
    price: 42.0,
    rating: 4.92,
    reviewsCount: 167,
    badge: 'Popular',
    spiciness: 0,
    dietary: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Slow-braised New Zealand lamb shank falling off the bone, rich San Marzano reduction, Milanese saffron carnaroli rice, and citrus gremolata.',
    details: {
      calories: 720,
      prepTime: '24 min',
      allergens: ['Dairy'],
      winePairing: 'Brunello di Montalcino',
      ingredients: ['Braised Lamb Shank', 'Saffron Risotto', 'San Marzano Glaze', 'Lemon Zest', 'Italian Parsley']
    }
  },
  {
    id: 10,
    name: 'Black Truffle & Forest Mushroom Tagliolini',
    category: 'pasta-pizza',
    price: 32.0,
    rating: 4.97,
    reviewsCount: 289,
    badge: "Chef's Special",
    spiciness: 0,
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh egg pasta strands tossed tableside in a wheel of 24-month Parmigiano Reggiano, Normandy mountain butter, and freshly shaved Norcia truffle.',
    details: {
      calories: 590,
      prepTime: '16 min',
      allergens: ['Gluten', 'Dairy', 'Eggs'],
      winePairing: 'Barbaresco DOCG',
      ingredients: ['Egg Tagliolini', 'Parmigiano Reggiano', 'Normandy Butter', 'Norcia Black Truffle', 'Cracked Pepper']
    }
  },
  {
    id: 11,
    name: 'Wood-Fired Margherita D.O.P. Royale',
    category: 'pasta-pizza',
    price: 22.0,
    rating: 4.88,
    reviewsCount: 350,
    badge: 'Classic',
    spiciness: 0,
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    description: '48-hour fermented sourdough crust, San Marzano D.O.P. tomatoes, Mozzarella di Bufala Campana, freshly picked basil, and liquid gold extra virgin olive oil.',
    details: {
      calories: 680,
      prepTime: '12 min',
      allergens: ['Gluten', 'Dairy'],
      winePairing: 'Chianti Classico Riserva',
      ingredients: ['Fermented Dough', 'San Marzano DOP', 'Bufala Mozzarella', 'Fresh Basil', 'Ligurian EVOO']
    }
  },
  {
    id: 12,
    name: 'Wild Lobster & Crab Ravioli',
    category: 'pasta-pizza',
    price: 36.5,
    rating: 4.93,
    reviewsCount: 178,
    badge: 'Specialty',
    spiciness: 0,
    dietary: [],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    description: 'Handmade squid ink parcels filled with Maine lobster and Jonah crab, floating in a velvet tarragon and cognac bisque.',
    details: {
      calories: 530,
      prepTime: '18 min',
      allergens: ['Shellfish', 'Gluten', 'Dairy', 'Eggs'],
      winePairing: 'Meursault Chardonnay',
      ingredients: ['Maine Lobster', 'Jonah Crab', 'Squid Ink Pasta', 'Cognac Bisque', 'French Tarragon']
    }
  },
  {
    id: 13,
    name: 'Spicy Calabrian Nduja & Burrata Pizza',
    category: 'pasta-pizza',
    price: 25.5,
    rating: 4.86,
    reviewsCount: 160,
    badge: 'Fiery',
    spiciness: 3,
    dietary: ['spicy'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    description: 'San Marzano sauce, spicy spreadable Calabrian pork salume, charred red onions, topped post-bake with fresh creamy stracciatella and hot honey.',
    details: {
      calories: 740,
      prepTime: '14 min',
      allergens: ['Gluten', 'Dairy'],
      winePairing: 'Primitivo di Manduria',
      ingredients: ['Calabrian Nduja', 'Creamy Stracciatella', 'Hot Infused Honey', 'Charred Red Onion', 'San Marzano Sauce']
    }
  },
  {
    id: 14,
    name: 'Deconstructed Valrhona Dark Chocolate Fondant',
    category: 'desserts',
    price: 16.0,
    rating: 4.96,
    reviewsCount: 204,
    badge: "Chef's Special",
    spiciness: 0,
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description: '70% Guanaja chocolate warm flowing core, edible 24k gold leaf, salted caramel crunch, and smoked Madagascar vanilla gelato.',
    details: {
      calories: 450,
      prepTime: '12 min',
      allergens: ['Dairy', 'Eggs', 'Gluten'],
      winePairing: 'Tawny Port 20 Year Old',
      ingredients: ['Valrhona 70% Chocolate', 'Bourbon Vanilla Bean', 'Fleur de Sel', 'Cultured Cream', 'Gold Leaf']
    }
  },
  {
    id: 15,
    name: 'Sicilian Bronte Pistachio Tiramisu',
    category: 'desserts',
    price: 15.5,
    rating: 4.91,
    reviewsCount: 190,
    badge: 'Bestseller',
    spiciness: 0,
    dietary: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    description: 'Savoiardi ladyfingers soaked in cold brew espresso and Marsala wine, layered with velvety Sicilian pistachio mascarpone cream and roasted nibs.',
    details: {
      calories: 410,
      prepTime: '8 min',
      allergens: ['Dairy', 'Eggs', 'Gluten', 'Nuts'],
      winePairing: 'Passito di Pantelleria',
      ingredients: ['Bronte Pistachio Paste', 'Mascarpone', 'Savoiardi Biscuits', 'Single Origin Espresso', 'Marsala']
    }
  },
  {
    id: 16,
    name: 'Yuzu & Wild Raspberry Panna Cotta',
    category: 'desserts',
    price: 14.0,
    rating: 4.82,
    reviewsCount: 110,
    badge: null,
    spiciness: 0,
    dietary: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Silky infused cream infused with Japanese yuzu zest, wild mountain raspberry coulis, mint crystals, and dehydrated meringue crisp.',
    details: {
      calories: 320,
      prepTime: '6 min',
      allergens: ['Dairy', 'Eggs'],
      winePairing: 'Moscato d’Asti DOCG',
      ingredients: ['Japanese Yuzu', 'Heavy Cream', 'Wild Raspberries', 'Crisp Meringue', 'Fresh Mint']
    }
  },
  {
    id: 17,
    name: 'Smoked Rosemary Old Fashioned',
    category: 'beverages',
    price: 19.0,
    rating: 4.94,
    reviewsCount: 145,
    badge: 'Craft Cocktail',
    spiciness: 0,
    dietary: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    description: 'Small-batch Woodford Reserve Bourbon, smoked under cloche with charred rosemary branch, Angostura & orange bitters, turbinado syrup.',
    details: {
      calories: 190,
      prepTime: '5 min',
      allergens: [],
      winePairing: 'Digestif / Single Malt',
      ingredients: ['Bourbon Whiskey', 'Organic Turbinado', 'Smoked Rosemary', 'Orange Peel', 'Aromatic Bitters']
    }
  },
  {
    id: 18,
    name: 'Botanical Empress 1908 Violet Spritz',
    category: 'beverages',
    price: 17.5,
    rating: 4.87,
    reviewsCount: 132,
    badge: 'Trending',
    spiciness: 0,
    dietary: ['vegan', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    description: 'Indigo butterfly pea blossom gin, elderflower liqueur, sparkling Valdobbiadene Prosecco, fresh lavender essence, and clarified citrus splash.',
    details: {
      calories: 160,
      prepTime: '4 min',
      allergens: [],
      winePairing: 'Aperitif',
      ingredients: ['Empress Indigo Gin', 'St. Germain Elderflower', 'Prosecco Superiore', 'Lavender Bloom', 'Soda']
    }
  }
];

export const RESTAURANT_INFO = {
  name: "L'AURA",
  tagline: 'Modern Artisanal Gastronomy & Bistro',
  hours: 'Tue - Sun: 5:00 PM - 11:30 PM',
  address: '428 Haute Avenue, Culinary District',
  phone: '+1 (555) 789-2345',
  reservationNotice: 'Michelin Recommended 2026 • Curated Seasonings',
};
