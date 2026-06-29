/* FILE: src/data/projects.js */

/// Helper to generate Unsplash URLs
const getUnsplashUrl = (id) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;

// A bank of high-quality luxury interior Unsplash image IDs
const imageIds = {
  villa: [
    'photo-1600596542815-ffad4c1539a9',
    'photo-1512917774080-9991f1c4c750',
    'photo-1613490493576-4d4d0bc47d45',
    'photo-1600607687939-ce8a6c25118c',
    'photo-1600047509807-ba8f99d2cdde',
    'photo-16005667533086-00f18fb6b3ea',
    'photo-1600210491892-03d54c0aaf87',
    'photo-1583608205776-bfd35f0d9f83'
  ],
  penthouse: [
    'photo-1586023492125-27b2c045efd7',
    'photo-1555041469-a586c61ea9bc',
    'photo-1618219908412-a29a1bb7b86e',
    'photo-1560185007-cde436f6a4d0',
    'photo-1567767292278-a2f38dac25b2',
    'photo-1600210492493-0946911123ea',
    'photo-1600585154340-be6161a56a0c',
    'photo-1583847268964-b28dc8f51f92',
    'photo-1595526114035-0d45ed16cfbf',
    'photo-1493809842364-78817add7ffb'
  ],
  office: [
    'photo-1497366216548-37526070297c',
    'photo-1497366754035-f200968a6e72',
    'photo-1524758631624-e2822e304c36',
    'photo-1497215842964-222b430dc094',
    'photo-1527192491265-7e15c55b1ed2',
    'photo-1568992687947-868a62a9f521',
    'photo-1572025442646-866d16c84a54',
    'photo-1593642632559-0c6d3fc62b89'
  ],
  retail: [
    'photo-1441986300917-64674bd600d8',
    'photo-1560179707-f14e90ef3623',
    'photo-1577495508326-19a1b3cf65b7',
    'photo-1497215728101-856f4ea42174',
    'photo-1604328698692-f76ea9498e76'
  ],
  hotel: [
    'photo-1616594039964-ae9021a400a0',
    'photo-1505693416388-ac5ce068fe85',
    'photo-1540518614846-7eded433c457',
    'photo-1552321554-5fefe8c9ef14',
    'photo-1521783988139-89397d761dce',
    'photo-1588046130717-0eb0c9a3ba15',
    'photo-1631049307264-da0ec9d70304',
    'photo-1617806118233-18e1de247200',
    'photo-1592229506151-845940174bb0',
    'photo-1484101403633-562f891dc89a'
  ],
  kitchen: [
    'photo-1556909114-f6e7ad7d3136',
    'photo-1565538810643-b5bdb714032a',
    'photo-1556909172-54557c7e4fb7',
    'photo-1600489000022-c2086d79f9d4',
    'photo-1484154218962-a197022b5858',
    'photo-1556909172-89cf0b3f98f8',
    'photo-1630699144867-37acec76df52',
    'photo-1604709177225-055f99402ea3',
    'photo-1583845112203-29329902332e'
  ],
  suite: [
    'photo-1572025442646-866d16c84a54',
    'photo-1593642632559-0c6d3fc62b89',
    'photo-1595514535116-9614927c5167',
    'photo-1616137466211-f939a420be84',
    'photo-1414235077428-338989a2e8c0',
    'photo-1550966871-3ed3cbe818bb'
  ],
  yacht: [
    'photo-1583608205776-bfd35f0d9f83',
    'photo-1583847268964-b28dc8f51f92',
    'photo-1595526114035-0d45ed16cfbf',
    'photo-1493809842364-78817add7ffb',
    'photo-1631049307264-da0ec9d70304',
    'photo-1617806118233-18e1de247200'
  ]
};

// Map category string to the key in imageIds
const getCategoryKey = (cat) => {
  switch (cat) {
    case 'Luxury Villa': return 'villa';
    case 'Penthouse': return 'penthouse';
    case 'Corporate Office': return 'office';
    case 'Luxury Retail': return 'retail';
    case 'Boutique Hotel': return 'hotel';
    case 'Modern Kitchen': return 'kitchen';
    case 'Executive Suite': return 'suite';
    case 'Yacht Interior': return 'yacht';
    default: return 'villa';
  }
};

// Before & After image pools
const beforeAfterImages = {
  villa: {
    before: 'photo-1584622650111-993a426fbf0a', // empty messy room
    after: 'photo-1600596542815-ffad4c1539a9'
  },
  penthouse: {
    before: 'photo-1513694203232-719a280e022f', 
    after: 'photo-1586023492125-27b2c045efd7'
  },
  office: {
    before: 'photo-1567401893414-76b7b1e5a7a5',
    after: 'photo-1497366216548-37526070297c'
  },
  retail: {
    before: 'photo-1600585154526-990dced4db0d',
    after: 'photo-1441986300917-64674bd600d8'
  },
  hotel: {
    before: 'photo-1584622650111-993a426fbf0a',
    after: 'photo-1616594039964-ae9021a400a0'
  },
  kitchen: {
    before: 'photo-1513694203232-719a280e022f',
    after: 'photo-1556909114-f6e7ad7d3136'
  },
  suite: {
    before: 'photo-1567401893414-76b7b1e5a7a5',
    after: 'photo-1572025442646-866d16c84a54'
  },
  yacht: {
    before: 'photo-1600585154526-990dced4db0d',
    after: 'photo-1583608205776-bfd35f0d9f83'
  }
};

// Rich details based on category
const categoryDetails = {
  'Luxury Villa': {
    description: `Crafting an expansive luxury residential estate requires a meticulous balance between grand architectural statements and personal, intimate living zones. Velora Interior Design approached this villa project by celebrating double-height spaces, utilizing bespoke lighting fixtures, and installing handpicked materials. Every corner was curated to offer functional family warmth while retaining an undeniable air of timeless sophistication. The result is a residence that flows gracefully from public entertainment salons to private resting chambers.`,
    challenges: 'Integrating smart home automation systems seamlessly behind artisan wall paneling without disrupting the clean alignment of custom bookmatched marbles and walnut veneers.',
    concept: 'Noble Serenity: Merging classical symmetrical layouts with clean contemporary textures to establish a feeling of grounding luxury.',
    materials: 'Calacatta Lincoln Marble, European Smoked Oak, Brushed Brass accents, Premium Nubuck Leather panels.',
    testimonial: {
      quote: 'Velora transformed our sprawling estate into a warm, inviting masterpiece. Their attention to detail in material sourcing is unmatched.',
      clientName: 'Arthur & Evelyn Dubois',
      clientType: 'Private Homeowners'
    }
  },
  'Penthouse': {
    description: `Hovering above the metropolitan skyline, this luxury penthouse project speaks directly to urban refinement. The design philosophy centers around wrapping the residence in panoramic vistas, while anchoring the interior with deep charcoal tones and warm champagne gold accents. We maximized the open layout to facilitate sweeping entertainment flows, configuring floating partitions that provide spatial definition without closing off natural illumination.`,
    challenges: 'Optimizing acoustic isolation on structural walls in a high-rise concrete framework while constructing a private suspended mezzanine gallery.',
    concept: 'Skyline Opulence: Capturing the energy of the metropolis through expansive glazing while creating a protective cocoon of dark stone and rich fabrics.',
    materials: 'Nero Marquina Marble, Satin Champagne Metals, Bouclé upholstery, Tinted Architectural Glass.',
    testimonial: {
      quote: 'Living here feels like floating in a five-star sky lounge. Velora delivered a design that is both dramatic and incredibly livable.',
      clientName: 'Vikram Malhotra',
      clientType: 'Tech Entrepreneur'
    }
  },
  'Corporate Office': {
    description: `A corporate headquarters designed for high-performing executives demands spaces that inspire focus, facilitate frictionless collaboration, and visually communicate brand authority. For this project, Velora created private executive suites with acoustic glass walls, collaborative breakout hubs wrapped in warm timber tones, and an imposing boardroom featuring a custom-carved floating marble table. The air, lighting, and acoustics are engineered to reduce fatigue.`,
    challenges: 'Designing a premium HVAC and lighting automation layout that maintains rigid acoustic controls required for confidential executive boardrooms.',
    concept: 'Synergy of Authority: Clean corporate lines met by natural wood grain textures to create a welcoming yet commanding professional atmosphere.',
    materials: 'Matte Charcoal Steel, Premium Walnut Slabs, Wool-Acoustic Wall Panels, Statuario Marble.',
    testimonial: {
      quote: 'Velora understood our brand instantly. They created a workspace that has elevated both client impressions and employee productivity.',
      clientName: 'Elena Vance',
      clientType: 'CEO, Apex Holdings'
    }
  },
  'Luxury Retail': {
    description: `Luxury retail environments must operate as physical stages for brand storytelling. Velora designed this flagship store with an intentional choreography of lighting, sightlines, and tactile surfaces to guide the customer on an experiential journey. Floating racks, recessed champagne gold display alcoves, and lounge seating areas encourage clients to linger, building a deep connection with the curated products.`,
    challenges: 'Creating flexible lighting tracks that provide dramatic spotlighting for seasonal collections while complying with stringent commercial energy consumption caps.',
    concept: 'Spatial Theater: Elevating products to art objects through dark matte backdrops and focused warm illumination.',
    materials: 'Suede wallcoverings, Champagne gold PVD steel, Terrazzo flooring with brass joints, Velvet drapery.',
    testimonial: {
      quote: 'Our retail boutique is now the talk of the luxury district. The spatial flow has directly improved client dwell times.',
      clientName: 'Jean-Laurent Chevalier',
      clientType: 'Retail Director, Maison Lux'
    }
  },
  'Boutique Hotel': {
    description: `Creating memorable hospitality experiences requires evoking a profound sense of place and escape. Velora redesigned the lobby, dining salons, and guest suites of this boutique hotel to blend local heritage elements with modern five-star comforts. Guests are welcomed by an imposing fireplace clad in dark slate, cozy lounge pockets separated by custom bronze screens, and suites offering custom-upholstered beds and luxury master baths.`,
    challenges: 'Balancing custom high-end detailing with the durability requirements of heavy commercial usage and strict local hospitality fire codes.',
    concept: 'The Curated Retreat: A sanctuary of dim light, rich natural textures, and deep seating that invites guests to unplug.',
    materials: 'Dark Slate slabs, Oil-rubbed Bronze, Full-grain Saddle Leather, Silk-wool blended carpets.',
    testimonial: {
      quote: 'Velora has redefined the visual identity of our hotel. The guest reviews regarding the design and comfort have been outstanding.',
      clientName: 'Marcello Rossi',
      clientType: 'General Manager, The Grandis'
    }
  },
  'Modern Kitchen': {
    description: `The kitchen has evolved from a functional prep zone into the true center of the modern luxury home. This kitchen project features fully integrated handleless cabinetry, an oversized central island wrapped in a single monolithic block of quartzite, and high-end built-in appliances that blend invisibly. Recessed ambient lighting creates a transition from bright culinary workspace to warm evening cocktail bar.`,
    challenges: 'Formulating structural support for a cantilevered 4-meter natural quartzite island top without introducing visual columns.',
    concept: 'Monolithic Efficiency: Clean architectural volumes concealing high-performance culinary machinery.',
    materials: 'Taj Mahal Quartzite, Fumed Oak cabinetry, Satin Brass hardware, Matte lacquer finishes.',
    testimonial: {
      quote: 'The design is absolutely seamless. It functions beautifully as a professional kitchen and behaves beautifully as our entertainment hub.',
      clientName: 'Sanjay & Priya Patel',
      clientType: 'Homeowners'
    }
  },
  'Executive Suite': {
    description: `A private suite designed for high-profile decision makers, blending residential comfort with professional functionality. The space includes a private study area with custom bookshelves, a conversational lounge zone with designer armchairs, and a discreet ensuite washroom. The color palette remains grounded in warm charcoal and champagnes to instill a calm, focused mindset.`,
    challenges: 'Installing complex acoustic barriers inside double-layered drywall partitions within a constrained corporate floor layout.',
    concept: 'Private Sovereignty: Crafting an inner sanctum that acts as a buffer against the chaotic demands of business leadership.',
    materials: 'Alcantara paneling, Brushed Gold trims, Walnut burl veneers, Premium linen drapery.',
    testimonial: {
      quote: 'My private office is now a haven of peace and efficiency. It is the perfect environment for strategic decision making.',
      clientName: 'Dr. Alistair Ward',
      clientType: 'Managing Partner'
    }
  },
  'Yacht Interior': {
    description: `Marine interior design presents unique constraints regarding weight, structural curves, moisture resistance, and safety rules. Velora met these challenges with a luxurious design that brings residential refinement to the water. We designed custom-fitted furniture that flows with the hull's natural contours, used lightweight carbon fiber substrates wrapped in fine leathers, and incorporated brass inlays that reflect marine light.`,
    challenges: 'Engineering bespoke cabinet latches and furniture mounts that prevent movement in rough seas while remaining completely invisible.',
    concept: 'Oceanic Elegance: Reflecting the undulating lines of the sea through soft curved furniture contours and reflective, premium finishes.',
    materials: 'Marine Teak, Lightweight Calacatta panels, Waterproof suede, Polished Marine Brass.',
    testimonial: {
      quote: 'Velora took our yacht interior to a level of luxury we did not think possible on a vessel. A truly spectacular achievement.',
      clientName: 'Captain H. R. Vance',
      clientType: 'Yacht Owner'
    }
  }
};

// Generates the raw list of 50 projects
const rawProjects = [
  { id: 1, title: "Modern Luxury Villa", category: "Luxury Villa", location: "Delhi, India", area: "4,200 sq ft", time: "6 months", style: "Modern Luxury", type: "Residential", featured: true },
  { id: 2, title: "Bellevue Sky Penthouse", category: "Penthouse", location: "Seattle, USA", area: "3,100 sq ft", time: "5 months", style: "Minimal Luxury", type: "Residential", featured: true },
  { id: 3, title: "Apex Ventures HQ", category: "Corporate Office", location: "Mumbai, India", area: "12,500 sq ft", time: "8 months", style: "Corporate Luxury", type: "Commercial", featured: true },
  { id: 4, title: "Maison Lux Flagship", category: "Luxury Retail", location: "Paris, France", area: "2,200 sq ft", time: "4 months", style: "Classic Elegance", type: "Commercial", featured: true },
  { id: 5, title: "The Grandis Lobby & Suites", category: "Boutique Hotel", location: "Florence, Italy", area: "18,000 sq ft", time: "12 months", style: "Contemporary Classic", type: "Hospitality", featured: true },
  { id: 6, title: "Taj Mahal Quartzite Kitchen", category: "Modern Kitchen", location: "London, UK", area: "650 sq ft", time: "3 months", style: "Modern Minimalist", type: "Residential", featured: true },
  { id: 7, title: "Vance Executive Suite", category: "Executive Suite", location: "New York, USA", area: "1,200 sq ft", time: "3 months", style: "Dark Slate Corporate", type: "Commercial", featured: false },
  { id: 8, title: "Aura Luxury Cruiser", category: "Yacht Interior", location: "Monaco", area: "850 sq ft", time: "9 months", style: "Marine Opulence", type: "Specialty", featured: false },
  { id: 9, title: "Lakeside Estate Villa", category: "Luxury Villa", location: "Zurich, Switzerland", area: "5,500 sq ft", time: "7 months", style: "Modern Luxury", type: "Residential", featured: false },
  { id: 10, title: "Highline Duplex Penthouse", category: "Penthouse", location: "New York, USA", area: "3,800 sq ft", time: "6 months", style: "Urban Glassmorphism", type: "Residential", featured: false },
  { id: 11, title: "Capital Partners Office", category: "Corporate Office", location: "London, UK", area: "8,200 sq ft", time: "5 months", style: "Corporate Timeless", type: "Commercial", featured: false },
  { id: 12, title: "Aurelia Jewelry Lounge", category: "Luxury Retail", location: "Dubai, UAE", area: "1,500 sq ft", time: "4 months", style: "Gold Accented Retail", type: "Commercial", featured: false },
  { id: 13, title: "Thera Wellness Hotel Lobby", category: "Boutique Hotel", location: "Santorini, Greece", area: "9,000 sq ft", time: "8 months", style: "Japandi Organic", type: "Hospitality", featured: false },
  { id: 14, title: "Walnut & Marble Kitchen", category: "Modern Kitchen", location: "Delhi, India", area: "580 sq ft", time: "2.5 months", style: "Modern Classic", type: "Residential", featured: false },
  { id: 15, title: "Bespoke CEO Suite", category: "Executive Suite", location: "Singapore", area: "950 sq ft", time: "3 months", style: "Minimal Luxury", type: "Commercial", featured: false },
  { id: 16, title: "Serene Water Superyacht", category: "Yacht Interior", location: "Nice, France", area: "1,400 sq ft", time: "10 months", style: "Oceanic Luxury", type: "Specialty", featured: false },
  { id: 17, title: "Prestige Heights Villa", category: "Luxury Villa", location: "Delhi, India", area: "6,000 sq ft", time: "8 months", style: "Classic Luxury", type: "Residential", featured: false },
  { id: 18, title: "Skyline Oasis Penthouse", category: "Penthouse", location: "Tokyo, Japan", area: "2,700 sq ft", time: "5 months", style: "Zen Luxury", type: "Residential", featured: false },
  { id: 19, title: "Techno-Core Headquarters", category: "Corporate Office", location: "Berlin, Germany", area: "15,000 sq ft", time: "9 months", style: "Industrial Elegant", type: "Commercial", featured: false },
  { id: 20, title: "Moncler Concept Store", category: "Luxury Retail", location: "Milan, Italy", area: "3,000 sq ft", time: "5 months", style: "Avant-Garde Commercial", type: "Commercial", featured: false },
  { id: 21, title: "Elysium Boutique Resort", category: "Boutique Hotel", location: "Maldives", area: "24,000 sq ft", time: "14 months", style: "Luxury Coastal", type: "Hospitality", featured: false },
  { id: 22, title: "Fumed Oak Chef Kitchen", category: "Modern Kitchen", location: "Chicago, USA", area: "700 sq ft", time: "3 months", style: "Industrial Luxury", type: "Residential", featured: false },
  { id: 23, title: "ZenITH Boardroom Suite", category: "Executive Suite", location: "Hong Kong", area: "1,500 sq ft", time: "4 months", style: "Corporate Zen", type: "Commercial", featured: false },
  { id: 24, title: "Horizon Explorer Vessel", category: "Yacht Interior", location: "Genoa, Italy", area: "1,800 sq ft", time: "12 months", style: "Classic Marine", type: "Specialty", featured: false },
  { id: 25, title: "Hilltop Sanctuary Villa", category: "Luxury Villa", location: "Los Angeles, USA", area: "7,500 sq ft", time: "9 months", style: "Mid-Century Modern Luxury", type: "Residential", featured: false },
  { id: 26, title: "Hudson River Penthouse", category: "Penthouse", location: "New York, USA", area: "3,300 sq ft", time: "5 months", style: "Industrial Chic Penthouse", type: "Residential", featured: false },
  { id: 27, title: "Innovate Group Workspace", category: "Corporate Office", location: "San Francisco, USA", area: "9,800 sq ft", time: "6 months", style: "Modern Tech Luxury", type: "Commercial", featured: false },
  { id: 28, title: "Velvet & Stone Boutique", category: "Luxury Retail", location: "London, UK", area: "1,800 sq ft", time: "3.5 months", style: "Chic Luxury", type: "Commercial", featured: false },
  { id: 29, title: "Hotel La Vista Suites", category: "Boutique Hotel", location: "Barcelona, Spain", area: "14,500 sq ft", time: "10 months", style: "Mediterranean Premium", type: "Hospitality", featured: false },
  { id: 30, title: "Calacatta Quartz Kitchen", category: "Modern Kitchen", location: "Sydney, Australia", area: "450 sq ft", time: "2 months", style: "Modernist Minimalist", type: "Residential", featured: false },
  { id: 31, title: "Prime Minister Business Suite", category: "Executive Suite", location: "Geneva, Switzerland", area: "1,100 sq ft", time: "3 months", style: "Classic Diplomatic", type: "Commercial", featured: false },
  { id: 32, title: "Neptune Catamaran Cabins", category: "Yacht Interior", location: "Fort Lauderdale, USA", area: "720 sq ft", time: "6 months", style: "Coastal Elegance", type: "Specialty", featured: false },
  { id: 33, title: "The Palms Luxury Mansion", category: "Luxury Villa", location: "Miami, USA", area: "9,000 sq ft", time: "11 months", style: "Art Deco Infused Luxury", type: "Residential", featured: false },
  { id: 34, title: "Metropolitan Triplex Penthouse", category: "Penthouse", location: "London, UK", area: "4,600 sq ft", time: "7 months", style: "Brutalist Luxury", type: "Residential", featured: false },
  { id: 35, title: "Apex Capital Headquarters", category: "Corporate Office", location: "Frankfurt, Germany", area: "11,000 sq ft", time: "7 months", style: "Modern Corporate", type: "Commercial", featured: false },
  { id: 36, title: "Couture Fashion Atelier", category: "Luxury Retail", location: "New York, USA", area: "2,500 sq ft", time: "4 months", style: "Monochromatic Premium", type: "Commercial", featured: false },
  { id: 37, title: "Alps Chalet Wellness Hotel", category: "Boutique Hotel", location: "Chamonix, France", area: "16,000 sq ft", time: "11 months", style: "Rustic Premium", type: "Hospitality", featured: false },
  { id: 38, title: "Minimalist Brass Kitchen", category: "Modern Kitchen", location: "Paris, France", area: "500 sq ft", time: "2.5 months", style: "Minimal Gold", type: "Residential", featured: false },
  { id: 39, title: "Venture Partners Lounge", category: "Executive Suite", location: "Boston, USA", area: "1,350 sq ft", time: "4 months", style: "Corporate Classic", type: "Commercial", featured: false },
  { id: 40, title: "Solandis Superyacht Suite", category: "Yacht Interior", location: "Monaco", area: "1,150 sq ft", time: "8 months", style: "Luxury Yachting", type: "Specialty", featured: false },
  { id: 41, title: "Forest Retreat Villa", category: "Luxury Villa", location: "Vancouver, Canada", area: "5,200 sq ft", time: "7.5 months", style: "Organic Luxury", type: "Residential", featured: false },
  { id: 42, title: "Harbor View Duplex Penthouse", category: "Penthouse", location: "Sydney, Australia", area: "3,400 sq ft", time: "6 months", style: "Maritime Luxury", type: "Residential", featured: false },
  { id: 43, title: "Legacy Trust Office", category: "Corporate Office", location: "Singapore", area: "7,800 sq ft", time: "6 months", style: "Timeless Corporate", type: "Commercial", featured: false },
  { id: 44, title: "Opulence Perfume Boutique", category: "Luxury Retail", location: "Rome, Italy", area: "1,100 sq ft", time: "3 months", style: "Baroque Modern", type: "Commercial", featured: false },
  { id: 45, title: "The Riviera Club Hotel", category: "Boutique Hotel", location: "Cannes, France", area: "20,000 sq ft", time: "13 months", style: "Retro Luxe", type: "Hospitality", featured: false },
  { id: 46, title: "Taj Mahal Quartzite Kitchen II", category: "Modern Kitchen", location: "Mumbai, India", area: "620 sq ft", time: "3 months", style: "Modern Luxury", type: "Residential", featured: false },
  { id: 47, title: "Founders Executive Suite", category: "Executive Suite", location: "San Francisco, USA", area: "1,050 sq ft", time: "3 months", style: "Mid-Century Premium", type: "Commercial", featured: false },
  { id: 48, title: "Elysian Sails Yacht", category: "Yacht Interior", location: "Athens, Greece", area: "950 sq ft", time: "7 months", style: "Modern Nautical", type: "Specialty", featured: false },
  { id: 49, title: "Grand Heritage Estate", category: "Luxury Villa", location: "Delhi, India", area: "8,500 sq ft", time: "10 months", style: "Royal Luxury", type: "Residential", featured: false },
  { id: 50, title: "Penthouse Fifty-Five", category: "Penthouse", location: "Singapore", area: "4,000 sq ft", time: "7 months", style: "Glassmorphic Luxury", type: "Residential", featured: false }
];

const projectHeroIds = {
  1: 'photo-1600596542815-ffad4c1539a9',
  2: 'photo-1586023492125-27b2c045efd7',
  3: 'photo-1497366216548-37526070297c',
  4: 'photo-1441986300917-64674bd600d8',
  5: 'photo-1616594039964-ae9021a400a0',
  6: 'photo-1556909114-f6e7ad7d3136',
  7: 'photo-1572025442646-866d16c84a54',
  8: 'photo-1583608205776-bfd35f0d9f83',
  9: 'photo-1512917774080-9991f1c4c750',
  10: 'photo-1555041469-a586c61ea9bc',
  11: 'photo-1497366754035-f200968a6e72',
  12: 'photo-1560179707-f14e90ef3623',
  13: 'photo-1505693416388-ac5ce068fe85',
  14: 'photo-1565538810643-b5bdb714032a',
  15: 'photo-1593642632559-0c6d3fc62b89',
  16: 'photo-1583847268964-b28dc8f51f92',
  17: 'photo-1613490493576-4d4d0bc47d45',
  18: 'photo-1618219908412-a29a1bb7b86e',
  19: 'photo-1524758631624-e2822e304c36',
  20: 'photo-1577495508326-19a1b3cf65b7',
  21: 'photo-1540518614846-7eded433c457',
  22: 'photo-1556909172-54557c7e4fb7',
  23: 'photo-1595514535116-9614927c5167',
  24: 'photo-1595526114035-0d45ed16cfbf',
  25: 'photo-1600607687939-ce8a6c25118c',
  26: 'photo-1560185007-cde436f6a4d0',
  27: 'photo-1497215842964-222b430dc094',
  28: 'photo-1497215728101-856f4ea42174',
  29: 'photo-1552321554-5fefe8c9ef14',
  30: 'photo-1600489000022-c2086d79f9d4',
  31: 'photo-1616137466211-f939a420be84',
  32: 'photo-1493809842364-78817add7ffb',
  33: 'photo-1600047509807-ba8f99d2cdde',
  34: 'photo-1567767292278-a2f38dac25b2',
  35: 'photo-1527192491265-7e15c55b1ed2',
  36: 'photo-1604328698692-f76ea9498e76',
  37: 'photo-1521783988139-89397d761dce',
  38: 'photo-1484154218962-a197022b5858',
  39: 'photo-1414235077428-338989a2e8c0',
  40: 'photo-1631049307264-da0ec9d70304',
  41: 'photo-16005667533086-00f18fb6b3ea',
  42: 'photo-1600210492493-0946911123ea',
  43: 'photo-1568992687947-868a62a9f521',
  44: 'photo-1517248135467-4c7edcad34c4',
  45: 'photo-1588046130717-0eb0c9a3ba15',
  46: 'photo-1556909172-89cf0b3f98f8',
  47: 'photo-1550966871-3ed3cbe818bb',
  48: 'photo-1617806118233-18e1de247200',
  49: 'photo-1600210491892-03d54c0aaf87',
  50: 'photo-1600585154340-be6161a56a0c'
};

// Map and build the complete list of 50 projects
export const projects = rawProjects.map((p) => {
  const categoryKey = getCategoryKey(p.category);
  const details = categoryDetails[p.category];
  const imageIdsPool = imageIds[categoryKey] || imageIds.villa;

  const heroImageId = projectHeroIds[p.id] || imageIdsPool[0];
  const galleryIds = [heroImageId, ...imageIdsPool.filter(id => id !== heroImageId)];
  const images = galleryIds.map((id) => getUnsplashUrl(id));
  
  const beforeImagesList = [
    'photo-1584622650111-993a426fbf0a',
    'photo-1513694203232-719a280e022f',
    'photo-1567401893414-76b7b1e5a7a5',
    'photo-1600585154526-990dced4db0d'
  ];
  const beforeImageId = beforeImagesList[p.id % beforeImagesList.length];

  return {
    id: p.id,
    slug: p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: p.title,
    category: p.category,
    location: p.location,
    area: p.area,
    completionTime: p.time,
    designStyle: p.style,
    projectType: p.type,
    heroImage: getUnsplashUrl(heroImageId),
    images,
    beforeImage: getUnsplashUrl(beforeImageId),
    afterImage: getUnsplashUrl(heroImageId),
    description: details.description,
    challenges: details.challenges,
    concept: details.concept,
    materials: details.materials,
    testimonial: details.testimonial,
    featured: p.featured
  };
});
