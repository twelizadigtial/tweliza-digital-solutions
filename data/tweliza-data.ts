export interface ServicePillar {
  slug: string;
  label: string;
  title: string;
  description: string;
  servicesList: string[];
  iconName: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  description: string;
  technology: string[];
  image: string;
  featured?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  notice?: string;
  ctaText?: string;
  popular?: boolean;
}

export const TWELIZA_CONFIG = {
  name: "tweliza",
  fullName: "tweliza Digital Solutions",
  tagline: "We turn ideas into modern digital experiences.",
  supportingStatement: "Web • Creative • Digital Growth",
  description: "tweliza Digital Solutions is a growing digital studio focused on helping businesses build a stronger presence in the digital world through websites, branding, social media content, and digital growth.",
  pillars: ["Web", "Creative", "Social", "AI"],
  email: "twelizadigital@gmail.com",
  phone: "+94 74 226 9976",
  whatsappNumber: "94742269976",
  location: "Sri Lanka & Global Remote",
  status: "Available for new projects",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61593630011542",
    instagram: "https://instagram.com/tweliza",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/94742269976?text=Hi%20TWELIZA%2C%20I'd%20like%20to%20discuss%20a%20project."
  }
};

export const SERVICES_DATA: ServicePillar[] = [
  {
    slug: "web-development",
    label: "Web",
    title: "Web Development",
    description: "Modern, responsive websites designed around your brand, your audience, and your business goals. From landing pages to complete business websites, we build experiences that are fast, polished, and easy to use.",
    servicesList: [
      "1-page landing websites",
      "Business websites",
      "Portfolio websites",
      "Corporate websites",
      "Responsive development",
      "Website redesigns",
      "E-commerce websites",
      "Custom web applications",
      "Deployment and technical setup"
    ],
    iconName: "Globe",
    image: "/images/services/service-web.jpg"
  },
  {
    slug: "ui-ux",
    label: "Design",
    title: "UI/UX Design",
    description: "We turn ideas into clear, intuitive interfaces that make digital products easier and more enjoyable to use.",
    servicesList: [
      "Website UI design",
      "App interfaces",
      "User experience design",
      "Wireframes",
      "Prototypes",
      "Design systems",
      "Responsive layouts"
    ],
    iconName: "Layout",
    image: "/images/services/service-design.jpg"
  },
  {
    slug: "branding",
    label: "Identity",
    title: "Branding & Identity",
    description: "We help businesses create a visual identity that feels consistent, memorable, and aligned with who they are.",
    servicesList: [
      "Logo design",
      "Brand identity",
      "Colour systems",
      "Typography",
      "Brand guidelines",
      "Social media identity",
      "Business cards",
      "Brand assets"
    ],
    iconName: "Palette",
    image: "/images/services/service-identity.jpg"
  },
  {
    slug: "social-media",
    label: "Social",
    title: "Social Media",
    description: "Consistent, visual content designed for your social channels to build brand awareness, engage audiences, and present a cohesive brand online.",
    servicesList: [
      "Social media post design",
      "Story templates & graphics",
      "Reel & short video concepts",
      "Content strategy",
      "Captions & hashtags",
      "UGC & product video content"
    ],
    iconName: "Share2",
    image: "/images/services/service-social.jpg"
  },
  {
    slug: "creative-content",
    label: "Content",
    title: "UGC Content",
    description: "Authentic digital content for brands across TikTok, Instagram, Facebook, websites, and digital campaigns including videos, reviews, photos, and testimonials.",
    servicesList: [
      "UGC videos",
      "Product videos",
      "Customer reviews",
      "Video testimonials",
      "Written testimonials",
      "Lifestyle photos",
      "Product photos",
      "Behind-the-scenes content"
    ],
    iconName: "Sparkles",
    image: "/images/services/service-content.jpg"
  },
  {
    slug: "ai-automation",
    label: "Growth",
    title: "AI & Automation",
    description: "Help customers find your business through Google Business optimization, WhatsApp integration, SEO, and smart digital workflows.",
    servicesList: [
      "Google Business Profile setup",
      "WhatsApp Business setup",
      "Social profile optimization",
      "Basic & advanced SEO",
      "Analytics & tracking",
      "AI chatbots & assistants"
    ],
    iconName: "Bot",
    image: "/images/services/service-growth.jpg"
  }
];

export const WHY_TWELIZA_DATA = [
  {
    title: "Personal approach",
    description: "Every project is treated individually. We take time to understand what makes your business different before creating the solution.",
    icon: "User"
  },
  {
    title: "Design meets technology",
    description: "We don't separate beautiful design from functional development. Both are considered together from the beginning.",
    icon: "Layers"
  },
  {
    title: "Built around your goals",
    description: "A website shouldn't exist just because every business has one. We focus on what your digital presence needs to achieve.",
    icon: "Target"
  },
  {
    title: "Clear communication",
    description: "We keep the process straightforward, provide regular updates, and make sure you know what's happening throughout the project.",
    icon: "MessageSquare"
  },
  {
    title: "Modern by default",
    description: "We use modern design practices and technologies to create experiences that feel current, responsive, and reliable.",
    icon: "Sparkles"
  },
  {
    title: "Long-term thinking",
    description: "We build with future updates and growth in mind, rather than creating something that becomes difficult to maintain.",
    icon: "ShieldCheck"
  }
];

export const PROCESS_STEPS_DATA = [
  {
    step: "01",
    title: "Understand",
    description: "We start by understanding your business, your audience, your goals, and what you want the project to achieve."
  },
  {
    step: "02",
    title: "Plan",
    description: "We turn your ideas into a clear project direction, defining the structure, features, visual direction, and scope before development begins."
  },
  {
    step: "03",
    title: "Design",
    description: "We create the visual experience, focusing on your brand, usability, layout, typography, interactions, and overall feel."
  },
  {
    step: "04",
    title: "Build",
    description: "Once the direction is approved, we bring the design to life using modern technologies and responsive development practices."
  },
  {
    step: "05",
    title: "Launch",
    description: "After testing and refinement, we prepare everything for launch and make sure your digital experience is ready for real users."
  },
  {
    step: "06",
    title: "Grow",
    description: "The launch isn't necessarily the end. We can continue supporting your website, content, design, and future digital needs as your business grows."
  }
];

export const PORTFOLIO_PROJECTS_DATA: PortfolioProject[] = [
  {
    id: "tweliza-digital-solutions",
    title: "TWELIZA Digital Solutions",
    category: "Agency Website · Flagship Studio Platform",
    clientType: "TWELIZA Digital Solutions (Official Agency Website)",
    description: "Official studio platform created to showcase TWELIZA's design, engineering, and digital growth capabilities through interactive 3D web technology and modern UI/UX.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"],
    image: "/images/projects/tweliza-digital-solutions.png",
    featured: true
  },
  {
    id: "shoe-shop",
    title: "Shoe Shop",
    category: "3D E-Commerce Website · Footwear",
    clientType: "Luxury Footwear Brand",
    description: "3D animated e-commerce website featuring immersive product presentation, interactive 3D visuals, smooth animations, and a modern shopping experience.",
    technology: ["3D / WebGL", "Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/shoe-shop.png",
    featured: false
  },
  {
    id: "chavera-photography",
    title: "Chavéra Photography",
    category: "Photography · Creative",
    clientType: "Professional Photography Studio",
    description: "Photography website created for a professional photographer offering weddings, birthdays, events, and portrait photography.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/chavera-photography.png",
    featured: true
  },
  {
    id: "aurel-coffee",
    title: "Aurel Coffee",
    category: "3D Brand Website · Artisanal Roaster",
    clientType: "Artisanal Coffee Roasters",
    description: "3D animated coffee brand website featuring immersive 3D visuals, interactive animations, dynamic product presentation, and a premium brand experience.",
    technology: ["3D / WebGL", "Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/aurel-coffee.png",
    featured: false
  },
  {
    id: "rose-cake-house",
    title: "Rose Cake House",
    category: "3D E-Commerce Website · Luxury Artisan Bakery",
    clientType: "Luxury Artisan Bakery",
    description: "3D animated luxury bakery e-commerce website featuring 3D sculpted cake previews, custom cake studio builder, interactive flavor selection, and smooth online ordering.",
    technology: ["3D / WebGL", "Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/rose-cake-house.png",
    featured: true
  },
  {
    id: "lune-cafe",
    title: "Lune Cafe",
    category: "3D Brand Website · Café & Patisserie",
    clientType: "Luxury Café & Patisserie",
    description: "3D animated luxury café website featuring interactive 3D menu showcases, private dining cabin reservations, artisanal coffee presentation, and immersive brand design.",
    technology: ["3D / WebGL", "Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/lune-cafe.png",
    featured: true
  },
  {
    id: "kids-institute",
    title: "KIDS Institute Website",
    category: "Education · Certifications",
    clientType: "Educational Institute",
    description: "Educational institute website focused on English education and Microsoft examination / certification programs.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/kids-institute.png",
    featured: true
  },
  {
    id: "lew-tech",
    title: "LEW Tech",
    category: "Automotive · Industrial",
    clientType: "Welding & Automotive Engineering",
    description: "Industrial welding and engineering website built for a client providing American vehicle welding and specialized automotive services.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/lew-tech.png",
    featured: false
  },
  {
    id: "new-regal-gym",
    title: "New Regal Gym Website",
    category: "Fitness · Health & Wellness",
    clientType: "Fitness Club & Gym Owner",
    description: "Created for the owner of New Regal Gym to establish a bold, professional online presence for the fitness club.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/new-regal-gym.png",
    featured: false
  },
  {
    id: "dev-clothing",
    title: "Dev Clothing E-Commerce",
    category: "E-Commerce · Fashion",
    clientType: "Clothing Brand & Retail Business",
    description: "E-commerce clothing platform created for a client running a fashion retail business with product catalog and checkout workflow.",
    technology: ["Next.js", "Framer Motion", "Tailwind CSS", "Java"],
    image: "/images/projects/dev-clothing.png",
    featured: false
  },
  {
    id: "car-sales-website",
    title: "Car Sales Website",
    category: "Automotive Sales · Web App",
    clientType: "Vehicle Dealership",
    description: "A vehicle/car sales platform designed to showcase automobiles and support a seamless car-buying experience.",
    technology: ["Java"],
    image: "/images/projects/car-sales.png",
    featured: false
  },
  {
    id: "aaa-hosting",
    title: "AAA Hosting Website",
    category: "Web Infrastructure · Cloud",
    clientType: "AAA Hosting Group",
    description: "Website created for AAA Hosting Group to present their web hosting services, server packages, and online presence.",
    technology: ["Java"],
    image: "/images/projects/aaa-hosting.png",
    featured: false
  },
  {
    id: "marry-food-shop",
    title: "Marry Food Shop Management System",
    category: "Enterprise System · Food Business",
    clientType: "Marry Food Shop",
    description: "A complete food-shop website and business management system created for Marry Food Shop featuring Admin, Staff, Rider, Delivery, and Order management.",
    technology: ["Java"],
    image: "/images/projects/marry-food-shop.png",
    featured: false
  }
];

// ⭐ Signature Tweliza Packages (Featured Flagship)
export const FLAGSHIP_PACKAGES: PricingTier[] = [
  {
    id: "tweliza-essential",
    name: "Tweliza Essential",
    price: "LKR 15,000",
    description: "One-page website for startups and personal brands.",
    features: [
      "1-page landing website",
      "Mobile responsive design",
      "WhatsApp button integration",
      "Contact section & social links",
      "Basic SEO setup",
      "3–5 day delivery"
    ],
    ctaText: "Choose Essential"
  },
  {
    id: "tweliza-launch",
    name: "Tweliza Launch",
    price: "LKR 35,000",
    description: "Business website with branding-ready design and inquiry features.",
    features: [
      "1–3 custom pages",
      "Branding-ready design",
      "Inquiry features & contact form",
      "Google Maps integration",
      "WhatsApp button & basic SEO"
    ],
    ctaText: "Choose Launch"
  },
  {
    id: "tweliza-growth",
    name: "Tweliza Growth",
    price: "LKR 60,000",
    badge: "Recommended",
    popular: true,
    description: "Premium website with SEO, analytics, and business-ready features.",
    features: [
      "4–6 custom pages",
      "Portfolio / Gallery showcase",
      "Interactive inquiry form",
      "WhatsApp & Google Analytics",
      "Comprehensive SEO setup"
    ],
    ctaText: "Choose Growth"
  },
  {
    id: "tweliza-complete",
    name: "Tweliza Complete",
    price: "LKR 100,000+",
    description: "Website, social content, and digital growth in one package.",
    features: [
      "6–10+ custom web pages",
      "Social content creation bundle",
      "Digital presence & Google Business",
      "Performance optimization & analytics",
      "Full ongoing technical support"
    ],
    ctaText: "Choose Complete"
  }
];

// 🌐 Website Packages
export const WEBSITE_PACKAGES: PricingTier[] = [
  {
    id: "web-essential",
    name: "Essential",
    price: "LKR 15,000",
    description: "Perfect for startups and personal brands.",
    features: [
      "1-page landing website",
      "Mobile responsive",
      "WhatsApp button",
      "Contact section",
      "Social media links",
      "Basic SEO",
      "3–5 day delivery",
      "1 revision"
    ],
    ctaText: "Select Essential"
  },
  {
    id: "web-launch",
    name: "Launch",
    price: "LKR 25,000",
    description: "Ideal for small businesses.",
    features: [
      "1–3 pages",
      "Responsive design",
      "WhatsApp integration",
      "Contact form",
      "Google Maps",
      "Basic SEO",
      "1 revision"
    ],
    ctaText: "Select Launch"
  },
  {
    id: "web-growth",
    name: "Growth",
    price: "LKR 45,000",
    badge: "Most Popular",
    popular: true,
    description: "Best for growing businesses.",
    features: [
      "4–6 custom pages",
      "Portfolio / Gallery",
      "Inquiry form",
      "WhatsApp integration",
      "Google Analytics",
      "SEO setup",
      "2 revisions"
    ],
    ctaText: "Select Growth"
  },
  {
    id: "web-elite",
    name: "Elite",
    price: "LKR 75,000+",
    description: "Premium custom website.",
    features: [
      "6–10+ pages",
      "Premium UI/UX",
      "Animations",
      "Advanced portfolio",
      "Performance optimization",
      "Analytics",
      "3 revisions"
    ],
    ctaText: "Select Elite"
  }
];

// 📱 Social Media Packages — Monthly
export const SOCIAL_PACKAGES: PricingTier[] = [
  {
    id: "social-starter",
    name: "Starter",
    price: "LKR 10,000",
    period: "month",
    description: "Keep your page active.",
    features: [
      "8 custom posts",
      "Caption suggestions",
      "1 revision per post"
    ],
    ctaText: "Subscribe Starter"
  },
  {
    id: "social-growth",
    name: "Growth",
    price: "LKR 20,000",
    period: "month",
    badge: "Best Value",
    popular: true,
    description: "Best value for growing businesses.",
    features: [
      "12 posts",
      "4 story designs",
      "Content calendar",
      "Caption writing"
    ],
    ctaText: "Subscribe Growth"
  },
  {
    id: "social-pro",
    name: "Pro",
    price: "LKR 35,000",
    period: "month",
    description: "Consistent premium content.",
    features: [
      "16 posts",
      "8 stories",
      "4 reel concepts",
      "Monthly strategy"
    ],
    ctaText: "Subscribe Pro"
  }
];

// 🎥 UGC & Digital Content Packages
export const UGC_PACKAGES: PricingTier[] = [
  {
    id: "ugc-creator",
    name: "Creator",
    price: "LKR 7,500",
    description: "Quick content for one campaign.",
    features: [
      "1 video or digital content piece",
      "Basic editing",
      "Captions included",
      "1 revision"
    ],
    ctaText: "Order Creator"
  },
  {
    id: "ugc-content-pack",
    name: "Content Pack",
    price: "LKR 20,000",
    description: "More content for launches and promotions.",
    features: [
      "3 content pieces (videos / photos / reviews / testimonials)",
      "Creative hooks",
      "Editing included",
      "Optimized for social media"
    ],
    ctaText: "Order Content Pack"
  },
  {
    id: "ugc-brand-creator",
    name: "Brand Creator",
    price: "LKR 35,000",
    description: "Premium content bundle for brands.",
    features: [
      "5 premium content pieces",
      "Multiple concepts",
      "Videos, photos, reviews & testimonials",
      "Optimized for Reels, TikTok & ads"
    ],
    ctaText: "Order Brand Creator"
  }
];

// 📈 Digital Presence Packages
export const DIGITAL_PRESENCE_PACKAGES: PricingTier[] = [
  {
    id: "presence-google",
    name: "Google Business Setup",
    price: "LKR 7,500",
    description: "Help customers find your business.",
    features: [
      "Google Business Profile setup",
      "Business information optimization",
      "Website & social linking"
    ],
    ctaText: "Get Setup"
  },
  {
    id: "presence-starter",
    name: "Digital Presence",
    price: "LKR 15,000",
    description: "Complete online presence starter.",
    features: [
      "Google Business optimization",
      "WhatsApp Business setup",
      "Social profile optimization",
      "Basic SEO"
    ],
    ctaText: "Get Digital Presence"
  }
];

// 🛠️ Website Maintenance — Monthly
export const MAINTENANCE_PACKAGES: PricingTier[] = [
  {
    id: "maint-basic",
    name: "Basic",
    price: "LKR 5,000",
    period: "month",
    description: "Keep your site updated.",
    features: [
      "Minor updates",
      "Content changes",
      "Technical checks"
    ],
    ctaText: "Subscribe Basic"
  },
  {
    id: "maint-business",
    name: "Business",
    price: "LKR 10,000",
    period: "month",
    description: "Regular maintenance for active sites.",
    features: [
      "Regular updates",
      "Performance checks",
      "Priority support"
    ],
    ctaText: "Subscribe Business"
  },
  {
    id: "maint-premium",
    name: "Premium Care",
    price: "LKR 20,000",
    period: "month",
    description: "Hands-off maintenance.",
    features: [
      "Priority updates",
      "Backup monitoring",
      "Ongoing maintenance"
    ],
    ctaText: "Subscribe Premium"
  }
];

// 💳 Payment Terms
export const PAYMENT_TERMS = {
  advance: "50% advance payment to start.",
  delivery: "50% before final delivery.",
  thirdParty: "Domain, hosting, premium fonts, stock images, and third-party subscriptions are charged separately.",
  timeframe: "Delivery: 3–14 business days, depending on the package."
};

export const FAQ_DATA = [
  {
    id: "faq-1",
    question: "How do I start a project?",
    answer: "Simply send us a message through the contact form or book a project call. We'll learn about your idea, requirements, timeline, and budget before recommending the best approach."
  },
  {
    id: "faq-2",
    question: "How long does a website take?",
    answer: "Website projects take between 3 to 14 business days depending on the selected package and scope of work."
  },
  {
    id: "faq-3",
    question: "What are the payment terms?",
    answer: "We require a 50% advance payment to begin the project, and the remaining 50% before final delivery. Domain, hosting, and third-party fees are charged separately."
  },
  {
    id: "faq-4",
    question: "Can I upgrade my package later?",
    answer: "Yes. Your business can grow with tweliza. Additional pages, features, integrations, content, social media designs, and maintenance can be added as your business evolves."
  },
  {
    id: "faq-5",
    question: "Are domain and hosting included?",
    answer: "Domain, hosting, premium fonts, stock images, and third-party subscriptions are charged separately based on your specific requirements."
  },
  {
    id: "faq-6",
    question: "What types of content are included in UGC packages?",
    answer: "Our UGC & Digital Content packages cover authentic materials across TikTok, Instagram, Facebook, and websites — including UGC videos, product videos, customer reviews, video & written testimonials, lifestyle photos, product photos, and behind-the-scenes content."
  }
];
