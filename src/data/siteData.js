// Zimbabwe Leaf Tobacco — heritage leaf merchant, Harare
// Single source of truth for all page content.

export const business = {
  name: "Zimbabwe Leaf Tobacco",
  shortName: "Zimbabwe Leaf",
  monogram: "ZLT",
  tagline: "A century of leaf, grown in Zimbabwe.",
  established: 1918,
  parent: "Universal Corporation",
  city: "Harare",
  country: "Zimbabwe",
  phone: "+263 71 375 6742",
  phoneRaw: "+263713756742",
  whatsapp: "+263713756742",
  whatsappDisplay: "+263 71 375 6742",
  email: "info@zimbabweleaf.com",
  address: "4XH8+WH2, Harare, Zimbabwe",
  addressFull: "4XH8+WH2 Harare, Zimbabwe",
  universalUrl: "http://www.universalcorp.com/Africa/Zimbabwe",
  hours: {
    weekdays: "08:00 – 17:00",
    saturday: "By appointment",
    sunday: "Closed",
  },
  rating: 4.3,
  reviewCount: 108,
  logo: "/logo.png",
};

const waHref = (msg) =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
const mailHref = (subject, body) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- NAV ----------
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/operations", label: "Operations" },
  { to: "/farmers", label: "Farmer Network" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/heritage", label: "Heritage" },
  { to: "/contact", label: "Contact" },
];

// ---------- HERO ----------
export const hero = {
  eyebrow: "Est. 1918 · Harare, Zimbabwe",
  headline: "A century of leaf,",
  headlineItalic: "grown in Zimbabwe.",
  sub: "Zimbabwe Leaf Tobacco is a heritage merchant — buying, processing and exporting premium Zimbabwean tobacco in direct partnership with thousands of growers. A subsidiary of Universal Corporation, with roots in Zimbabwean soil stretching back more than a hundred seasons.",
  ctaPrimary: { label: "Our heritage", to: "/heritage" },
  ctaSecondary: { label: "Talk to us", to: "/contact" },
  image: {
    src: "https://images.unsplash.com/photo-1530533718754-001d2668365a?auto=format&fit=crop&w=1800&q=80&sat=-60",
    alt: "Weathered tobacco farmer standing in a curing field at dusk",
  },
  footNote: "Part of the Universal Corporation network · Five continents · One hundred years",
};

// ---------- MARQUEE ----------
export const marqueeItems = [
  "Est. 1918",
  "Subsidiary of Universal Corporation",
  "Partner to Zimbabwe's tobacco growers",
  "Five continents served",
  "Flue-cured Virginia · Burley · Dark-fired",
];

// ---------- STATS ----------
export const stats = [
  { value: "107+", label: "Years on Zimbabwean soil" },
  { value: "14,000", label: "Partner growers" },
  { value: "62", label: "Export destinations" },
  { value: "85k t", label: "Annual leaf volume" },
];

// ---------- INTRO (Home) ----------
export const intro = {
  eyebrow: "The Merchant",
  title: "We do not grow tobacco. We grow the grower.",
  body: "For more than a century our work has begun long before the harvest and continued long after the bales leave the floor. Agronomists in the fields. Buyers at the auction floors. Processors in the sheds. Shippers at the ports. We are the long patient line between a seedling in Karoi and a finished product on another continent — and our name travels with every leaf.",
  signature: "— The Zimbabwe Leaf team",
};

// ---------- OPERATIONS ----------
export const operations = [
  {
    slug: "buying",
    number: "01",
    title: "Buying",
    tagline: "At the floor, in the village, on the farm.",
    icon: "Handshake",
    summary:
      "We buy direct from contract growers and on the auction floors of Harare and Mvurwi. Our buyers know the regions by name, the farmers by face, and the crops by feel.",
    points: [
      "Contract buying across Mashonaland, Manicaland and the Midlands",
      "Auction floor participation in Harare, Mvurwi and Rusape",
      "Grading to Universal Corporation global standards",
      "Transparent pricing tied to quality and style, published per season",
    ],
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80&sat=-40",
    imageAlt: "Hands inspecting cured tobacco leaves on a grading table",
  },
  {
    slug: "processing",
    number: "02",
    title: "Processing",
    tagline: "Threshing, re-drying, packing — the quiet craft.",
    icon: "Factory",
    summary:
      "Our processing facility in Harare converts raw leaf into shipment-ready lamina and strip. A threshing line, modern re-drying tunnels, and packing bays built to ship worldwide.",
    points: [
      "Green-leaf threshing with integrated moisture control",
      "Re-drying to long-storage moisture specifications",
      "Cased-bale and carton packing for long-haul ocean freight",
      "Full traceability from bale ticket through container door",
    ],
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80&sat=-40",
    imageAlt: "Interior of a tobacco processing barn with stacked bales",
  },
  {
    slug: "exporting",
    number: "03",
    title: "Exporting",
    tagline: "From Harare to sixty-two destinations.",
    icon: "Boat",
    summary:
      "Zimbabwean leaf sails from Beira, Durban and Dar-es-Salaam to cigar makers in the Dominican Republic, blenders in Germany, and manufacturers across Asia. We handle shipping, documentation and customs from end to end.",
    points: [
      "Full container and break-bulk shipments",
      "Customs, phytosanitary and origin documentation",
      "Dedicated logistics coordination via the Universal Corporation network",
      "Customer sample rooms and cutting-line support",
    ],
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80&sat=-40",
    imageAlt: "Golden tobacco field stretching toward the horizon at sunset",
  },
];

// ---------- FARMER PROFILES ----------
export const farmers = [
  {
    name: "Blessing Mupfumira",
    region: "Karoi, Mashonaland West",
    yearsGrowing: 26,
    hectares: 18,
    crop: "Flue-cured Virginia",
    quote:
      "They came to the field before the first rains and again before the sale. The buyer who grades my crop also drank tea with my mother. That is not a thing every merchant offers.",
    photo:
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=900&q=80&sat=-70",
  },
  {
    name: "Tadiwa Chikwanda",
    region: "Bindura, Mashonaland Central",
    yearsGrowing: 14,
    hectares: 9,
    crop: "Flue-cured Virginia",
    quote:
      "I signed my first contract the year my daughter was born. She starts agronomy college this year. The leaf paid for both.",
    photo:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=80&sat=-70",
  },
  {
    name: "Farai Nyamhunga",
    region: "Mvurwi, Mashonaland Central",
    yearsGrowing: 31,
    hectares: 24,
    crop: "Flue-cured Virginia",
    quote:
      "A good buyer tells you the truth about your crop — even when the truth is hard. That is how a farmer gets better, season after season.",
    photo:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80&sat=-70",
  },
  {
    name: "Rumbidzai Chakanyuka",
    region: "Rusape, Manicaland",
    yearsGrowing: 8,
    hectares: 6,
    crop: "Dark-fired",
    quote:
      "The agronomy programme was the first time anyone had walked my fields with me. The grades went up the next season. My husband calls them the professors.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80&sat=-70",
  },
];

// ---------- SUSTAINABILITY PILLARS ----------
export const sustainabilityPillars = [
  {
    title: "Soil & Crop Health",
    icon: "Leaf",
    body: "Conservation agriculture, cover-cropping and rotation schedules to keep Zimbabwean soil productive for generations to come — not seasons.",
    metric: "92%",
    metricLabel: "of contract hectares on rotation plans",
  },
  {
    title: "Farmer Welfare",
    icon: "Heart",
    body: "Pre-financing, input support, crop insurance access, and transparent grade-based pricing. A grower's livelihood is a long-term investment — not a seasonal transaction.",
    metric: "14,000",
    metricLabel: "registered partner growers",
  },
  {
    title: "Water Stewardship",
    icon: "Drop",
    body: "On-farm dam rehabilitation, efficient irrigation, and watershed protection across all contract regions. Every hectare audited, every borehole mapped.",
    metric: "28%",
    metricLabel: "reduction in water use, five-year",
  },
  {
    title: "Forests & Curing Fuels",
    icon: "Tree",
    body: "A woodlot programme co-funded with growers, supplying sustainable tobacco-curing fuel without pressure on natural forests. One hectare planted for every hectare cured.",
    metric: "19M",
    metricLabel: "trees planted across partner farms",
  },
  {
    title: "Labour & Child Protection",
    icon: "UsersThree",
    body: "A zero-tolerance policy on child labour, enforced through monitoring, training, and community schooling support. A partnership with growers, local leaders and government.",
    metric: "100%",
    metricLabel: "of partner farms audited annually",
  },
  {
    title: "Community Investment",
    icon: "HandHeart",
    body: "Rural clinics, borehole programmes, and agronomy scholarships across the tobacco-growing regions. The leaf has always been a Zimbabwean story. So is the giving-back.",
    metric: "ZW$ 4.2M",
    metricLabel: "deployed through the ZLT Foundation",
  },
];

// ---------- HERITAGE TIMELINE ----------
export const timeline = [
  {
    year: "1918",
    title: "A merchant house, founded in Salisbury.",
    body: "A small leaf-buying office opens its doors on what is now Samora Machel Avenue — the first in a long line of tobacco merchants who would make Harare the leaf capital of southern Africa.",
  },
  {
    year: "1947",
    title: "The first processing barn.",
    body: "A purpose-built threshing and re-drying facility opens on the city's industrial edge, making it possible to prepare leaf for export without shipping it raw.",
  },
  {
    year: "1969",
    title: "Joining the Universal Corporation network.",
    body: "Now a subsidiary of the world's largest leaf merchant, the Harare operation plugs into a global web of buyers, blenders and manufacturers across five continents.",
  },
  {
    year: "1980",
    title: "Zimbabwe Leaf Tobacco.",
    body: "With independence, a new name and a new era. Partnerships deepen with the country's smallholder and commercial growers alike, powered by an agronomy programme that still operates today.",
  },
  {
    year: "2000",
    title: "The farmer contract programme.",
    body: "A formal contract system launches, pairing pre-financing and inputs with guaranteed offtake — anchoring thousands of growers through a turbulent decade.",
  },
  {
    year: "2012",
    title: "The woodlot initiative.",
    body: "A tree-for-tree programme begins planting sustainable curing fuel alongside growers — a response to deforestation in rural tobacco regions.",
  },
  {
    year: "2020",
    title: "Full traceability.",
    body: "Every bale traceable from grower code through container door, with a digital grading platform rolled out to all contract regions.",
  },
  {
    year: "2025",
    title: "Seven decades of threshing.",
    body: "The Harare facility marks its 78th season — still the quiet mechanical heartbeat of Zimbabwe's tobacco export trade.",
  },
];

// ---------- TESTIMONIALS (B2B) ----------
export const testimonials = [
  {
    quote:
      "Zimbabwean leaf carries a signature you can feel in the blend. Our relationship with the Harare team — season after season, grade after grade — is one of the quiet constants of our supply chain.",
    author: "Gunther Hofmann",
    role: "Head of Leaf Procurement",
    company: "Bremen Blending GmbH · Germany",
  },
  {
    quote:
      "We have worked with the Zimbabwe Leaf team for nineteen years. The paperwork arrives on time, the bales ship on the dates promised, and the grades land exactly where the sample said they would.",
    author: "Carlos Duarte",
    role: "Director of Sourcing",
    company: "Tabacalera del Valle · Dominican Republic",
  },
  {
    quote:
      "The Harare operation is one of our most reliable origins. Their agronomy programme shows up in the leaf long before anyone reads a crop report.",
    author: "Michiko Tanaka",
    role: "Vice President, Global Leaf",
    company: "Universal Corporation · Richmond, Virginia",
  },
];

// ---------- PROCESS STEPS (shared) ----------
export const leafJourney = [
  { step: "01", title: "Seedling", body: "Certified seed, nursed in shared seedbeds across partner regions." },
  { step: "02", title: "Transplant", body: "Six weeks on, the young plant is moved into cultivated field rows." },
  { step: "03", title: "Topping & suckering", body: "Hand-tended through the growing months, leaf by leaf." },
  { step: "04", title: "Harvest", body: "Mature leaves are primed by hand as the plant reaches full height." },
  { step: "05", title: "Curing", body: "Barn-cured over days with precise heat and humidity to lock in colour and character." },
  { step: "06", title: "Grading & buying", body: "Our buyers grade and pay by style — higher-quality leaf earns a higher price." },
  { step: "07", title: "Processing", body: "Threshed, re-dried and packed to long-storage moisture for ocean freight." },
  { step: "08", title: "Export", body: "Shipped to sixty-two destinations on five continents." },
];

// ---------- IMAGE GALLERY (Heritage mood) ----------
export const heritageGallery = [
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80&sat=-80",
    alt: "Sunrise over a Zimbabwean tobacco field",
    caption: "Mashonaland Central · first light",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80&sat=-80",
    alt: "Weathered hands holding a cured tobacco leaf",
    caption: "A grower's hands, after 22 seasons",
  },
  {
    src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1400&q=80&sat=-80",
    alt: "Interior of a curing barn with hanging leaves",
    caption: "Curing barn, Karoi region",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=80&sat=-80",
    alt: "Farmer walking through a field at dusk",
    caption: "Evening walk, Mvurwi",
  },
  {
    src: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&w=1400&q=80&sat=-80",
    alt: "Aerial view of agricultural fields",
    caption: "Mashonaland West, from above",
  },
  {
    src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80&sat=-80",
    alt: "Farm homestead at golden hour",
    caption: "A farm homestead, harvest season",
  },
];

// ---------- CTAs ----------
export const ctaHelpers = { waHref, mailHref };
