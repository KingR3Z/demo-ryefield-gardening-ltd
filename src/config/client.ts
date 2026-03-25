export const client = {
  // Business Details
  name: "Ryefield Gardening Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Polegate.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07814 837349",
  email: "",
  website: "",

  // Location
  address: "Polegate",
  city: "Polegate",
  county: "",
  postcode: "",
  basedIn: "Polegate",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Cath O'Sullivan", rating: 5, text: "We are delighted with our garden! From the outset Dan worked with us on the makeover. He listened to our ideas and how we wished to use the space and made lots of positive and creative suggestions - we felt it was a collaboration! …  +5 ", date: "5 years ago" },
    { name: "David Britain", rating: 5, text: "Had a difficult area at the back of the garden. Badly overgrown and with large mounds of rubble and solid clay. Needed to be cleared so we could use the space for sheds and storage . …  ", date: "Edited 6 years ago" },
    { name: "Terry Winchester", rating: 5, text: "From the start to the finish Dan did an excellent job. He was very friendly and informative when he gave us our original quote for a new patio and came up with loads of ideas. He showed us some different patio slabs and explained the …  ", date: "11 months ago" },
    { name: "Becky & Laurence Filtness", rating: 5, text: "Excellent attention to detail and customer service from inspection through to completion of the job. Flower beds and garden cleared and laid to lawn. Labourers were professional and respectful of property. Office management was on point …  ", date: "3 years ago" },
    { name: "Lee Griffiths", rating: 5, text: "Dan & Bill have done a great job in our garden, taking old decking up and laying a new patio and path with large porcelain slabs. The team then came and levelled the lawn out and re-turfed. Great team who work hard and take pride in their work, leavi", date: "4 years ago" },
    { name: "Baxter Atkins", rating: 5, text: "Dan recently completed a total transformation in our garden. He worked with us to re-design our garden & continually updated us on the progress which included including Decking, porcelain paving, astro, raised planters & …  ", date: "4 years ago" },
    { name: "Emma J", rating: 5, text: "I highly recommend Dan and his team. They carried out a shed and pond clearance, turfing and built a raised rockery. The garden has been transformed with their eye for detail, nothing was too much trouble and they left the job clean and tidy. Excelle", date: "5 years ago" },
    { name: "Simon Jordan", rating: 5, text: "Huge thanks to Daniel and his team at Ryefield Gardening for the repairs made to our fencing at Silver Wharf after the recent storms. The high winds made one hell of a mess of the fencing surrounding our garden in the harbour. As we live in …  ", date: "9 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Ryefield Gardening Ltd | Landscaper in Polegate",
    description: "Professional landscaper in Polegate. 5.0-star rated on Google. Call for a free quote.",
  },
};
