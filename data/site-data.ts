export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
  startingPrice: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "SaaS & Web" | "AI & ML" | "Mobile App" | "Fintech" | "Enterprise";
  tagline: string;
  client: string;
  metrics: { label: string; value: string }[];
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  liveUrl: string;
  accentColor: string;
  previewImage: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlightMetric: string;
  projectCategory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Billing & Pricing" | "Process & Timeline" | "Tech & Code" | "Ownership & IP";
}

export const SITE_CONFIG = {
  name: "SOLUCE LABS",
  tagline: "High-Performance Freelance Software Engineering Studio",
  description: "We design, architect, and ship high-converting web apps, AI systems, and mobile products for fast-growing startups and enterprises.",
  availability: "Accepting 2 new client projects for Q3/Q4",
  email: "hello@solucelabs.io",
  phone: "+1 (415) 890-3410",
  location: "San Francisco, CA & London, UK (Global Remote)",
  timezone: "UTC-7 / UTC+1",
  stats: {
    projectsCompleted: 240,
    clientSatisfaction: "99.4%",
    clientRevenueGenerated: "$48.5M+",
    averageSprintTime: "2.4 Weeks",
    clutchRating: "5.0 ★",
    codeQualityScore: "99.8%"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-saas",
    title: "Full-Stack Web & SaaS Engineering",
    shortDesc: "Next.js, TypeScript, and serverless architectures engineered for speed, conversion, and global scale.",
    fullDesc: "From zero to production-grade SaaS. We handle complex multi-tenant architectures, real-time sync, Stripe/billing engines, RBAC security, and sub-100ms API responses.",
    iconName: "Globe",
    tag: "Most Requested",
    deliverables: [
      "Custom Full-Stack Web App Architecture",
      "Stripe Billing, Subscriptions & Metered Invoicing",
      "Role-Based Access Control & Auth0/Clerk Auth",
      "Interactive Real-Time Dashboards & Analytics",
      "100/100 Lighthouse Performance & SEO Optimization"
    ],
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Redis", "Vercel"],
    timeline: "3 - 6 Weeks",
    startingPrice: "$4,800"
  },
  {
    id: "ai-agents",
    title: "AI Agents & LLM Integration",
    shortDesc: "Deploy custom autonomous agents, RAG vector pipelines, semantic search, and Gemini/OpenAI integrations.",
    fullDesc: "Transform workflows with intelligent agentic systems. We build grounded RAG architectures with vector embeddings, function calling, tool use, and real-time streaming interfaces.",
    iconName: "Sparkles",
    tag: "High Growth",
    deliverables: [
      "Custom Retrieval-Augmented Generation (RAG) Systems",
      "Agentic Multi-Step Workflows & Tool Execution",
      "Fine-tuned Vector Embeddings with Pinecone/Qdrant",
      "Streaming Multimodal Chat & Voice Interfaces",
      "Enterprise Data Privacy & Security Sandboxes"
    ],
    technologies: ["Gemini 1.5 Pro / Flash", "OpenAI GPT-4o", "LangChain / LlamaIndex", "Python", "FastAPI", "Pinecone", "pgvector"],
    timeline: "2 - 5 Weeks",
    startingPrice: "$5,500"
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Apps",
    shortDesc: "Pixel-perfect iOS and Android applications with native performance, offline sync, and fluid gestures.",
    fullDesc: "Single codebase, 60fps native feel. We deliver iOS and Android apps with full App Store / Google Play approval, push notifications, in-app purchases, and biometrics.",
    iconName: "Smartphone",
    tag: "iOS & Android",
    deliverables: [
      "Universal React Native / Expo Architecture",
      "Offline-First Data Synchronization",
      "Biometric Security (FaceID, TouchID)",
      "In-App Subscriptions (RevenueCat / StoreKit)",
      "App Store & Google Play Submission & Approval"
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Swift / Kotlin Bridge", "RevenueCat", "Supabase"],
    timeline: "4 - 8 Weeks",
    startingPrice: "$6,200"
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & Scale",
    shortDesc: "Resilient cloud infrastructure with Docker, Kubernetes, CI/CD automation, and zero-downtime deploys.",
    fullDesc: "Architected for 99.99% uptime. We configure auto-scaling infrastructure on AWS / GCP with automated staging environments, cost optimization, and SOC2-ready security.",
    iconName: "Cloud",
    tag: "Enterprise Grade",
    deliverables: [
      "Terraform Infrastructure as Code (IaC)",
      "Docker & Kubernetes Container Orchestration",
      "Automated GitHub Actions CI/CD Pipelines",
      "Cloud Cost Reduction (avg 35% savings)",
      "Automated Database Backups & Failover"
    ],
    technologies: ["AWS (ECS, Lambda, RDS)", "Google Cloud", "Docker", "Terraform", "GitHub Actions", "Cloudflare"],
    timeline: "2 - 4 Weeks",
    startingPrice: "$3,800"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Design Engineering",
    shortDesc: "High-fidelity Figma design systems converted into buttery-smooth, accessible code components.",
    fullDesc: "Bridging the gap between award-winning design and rock-solid code. We create interactive prototypes, micro-interactions, dark/light themes, and strict component libraries.",
    iconName: "Layout",
    tag: "Pixel Perfect",
    deliverables: [
      "Complete Figma Design System & Tokens",
      "Interactive High-Fidelity Clickable Prototypes",
      "Framer Motion Physics & Micro-Interactions",
      "WCAG AA / AAA Accessibility Compliance",
      "Tailwind Component Library & Documentation"
    ],
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Storybook", "Radix UI", "CSS 3D"],
    timeline: "2 - 4 Weeks",
    startingPrice: "$3,200"
  },
  {
    id: "code-audit",
    title: "Code Audit & Modernization",
    shortDesc: "Comprehensive refactoring, 100/100 Lighthouse performance audits, and legacy system overhaul.",
    fullDesc: "Turn sluggish, buggy legacy codebases into modern high-speed powerhouses. We identify memory leaks, security vulnerabilities, database bottlenecks, and architectural debt.",
    iconName: "ShieldCheck",
    tag: "Optimization",
    deliverables: [
      "Full Codebase Architecture & Security Audit",
      "Core Web Vitals & PageSpeed 95+ Guarantee",
      "Database Query Profiling & Index Optimization",
      "TypeScript Migration & Type Safety Overhaul",
      "Comprehensive Prioritized Action Plan & PRs"
    ],
    technologies: ["Chrome DevTools", "TypeScript", "ESLint", "PostgreSQL EXPLAIN", "Next.js Profiler"],
    timeline: "1 - 3 Weeks",
    startingPrice: "$2,600"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "aether-finance",
    title: "AetherPay - AI-Powered Global Treasury",
    category: "Fintech",
    tagline: "Real-time cross-border corporate payments with multi-currency smart routing.",
    client: "Aether Capital Group (Series A, $14M)",
    metrics: [
      { label: "Volume Processed", value: "$120M+" },
      { label: "Payment Latency", value: "< 240ms" },
      { label: "Conversion Lift", value: "+340%" }
    ],
    description: "Built the entire front-end application and microservice architecture for an automated fintech platform managing multi-currency treasury across 32 jurisdictions.",
    challenge: "Handling complex websocket real-time rates with zero UI latency, strict banking-grade compliance, and custom dark/light dashboard themes.",
    solution: "Engineered a Next.js 15 App Router architecture with optimistic UI updates, Redis caching layer, and custom Canvas charting widgets.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "Framer Motion"],
    liveUrl: "https://aetherpay.example.com",
    accentColor: "from-blue-600 to-indigo-600",
    previewImage: "/images/hero-3d-cylinders.jpg"
  },
  {
    id: "pulse-ai",
    title: "PulseFlow - Enterprise Neural Agent Platform",
    category: "AI & ML",
    tagline: "Autonomous customer intelligence agents with live reasoning traces.",
    client: "Pulse Technologies (Seed, $4.2M)",
    metrics: [
      { label: "Daily Active Agents", value: "45,000+" },
      { label: "Resolution Rate", value: "88.4%" },
      { label: "Cost Reduction", value: "-62%" }
    ],
    description: "Architected a full-stack AI agent management platform that connects company data sources to autonomous multi-agent reasoning workflows.",
    challenge: "Streaming real-time token outputs while updating dynamic workflow graph nodes without DOM thrashing.",
    solution: "Used custom React Server Components with WebSockets, vector-backed RAG using Gemini Pro API, and hardware-accelerated canvas graphs.",
    technologies: ["Gemini Pro", "Python", "FastAPI", "Next.js", "Tailwind CSS", "Pinecone", "WebSockets"],
    liveUrl: "https://pulseflow.example.com",
    accentColor: "from-purple-600 to-pink-600",
    previewImage: "/images/cloud-3d-network.jpg"
  },
  {
    id: "nexus-health",
    title: "Vitalis - Telehealth & Biometric Remote Monitoring",
    category: "Mobile App",
    tagline: "HIPAA-compliant patient triage and continuous wearable telemetry sync.",
    client: "Vitalis Health Network",
    metrics: [
      { label: "Active Patients", value: "180k+" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Crash-Free Rate", value: "99.98%" }
    ],
    description: "Developed universal iOS & Android companion applications connecting Bluetooth medical wearables with encrypted patient charts.",
    challenge: "Maintaining background BLE telemetry without draining device battery while adhering to strict HIPAA end-to-end encryption standards.",
    solution: "Crafted custom native Swift/Kotlin modules wrapped in React Native with SQLite offline storage and biometric authentication.",
    technologies: ["React Native", "Expo", "TypeScript", "Swift", "WebRTC", "Supabase", "Tailwind"],
    liveUrl: "https://vitalis.example.com",
    accentColor: "from-emerald-500 to-teal-700",
    previewImage: "/images/bento-3d-analytics.jpg"
  },
  {
    id: "strata-cloud",
    title: "StrataOps - Multi-Cloud Autonomous DevOps Orchestrator",
    category: "SaaS & Web",
    tagline: "Declarative Kubernetes cluster scaling with automatic spot instance cost arbitrator.",
    client: "Strata Systems",
    metrics: [
      { label: "Cloud Savings", value: "$2.8M" },
      { label: "Deploy Time", value: "-75%" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    description: "Built the web application and interactive topology visualizer for an enterprise infrastructure automation platform.",
    challenge: "Rendering 10,000+ real-time container nodes and network edges smoothly in the browser with dark/light mode parity.",
    solution: "Created a WebGL/Canvas hybrid graph renderer connected to a Go backend with gRPC streams.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Go", "Docker", "Kubernetes"],
    liveUrl: "https://strataops.example.com",
    accentColor: "from-violet-600 to-cyan-500",
    previewImage: "/images/floating-glass-icons.jpg"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Aether Capital",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    content: "Soluce Labs is in a completely different league compared to typical freelancers or bloated agencies. They shipped our entire fintech MVP 2 weeks ahead of our investor deadline with zero bugs. Code quality was immaculate.",
    rating: 5,
    highlightMetric: "Shipped 2 weeks early",
    projectCategory: "Fintech Platform"
  },
  {
    id: "2",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Pulse Technologies",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    content: "Their deep knowledge of Next.js, LLMs, and high-performance UI engineering helped us scale to 45k daily users without a hiccup. The attention to animations, UX micro-interactions, and dark mode is breathtaking.",
    rating: 5,
    highlightMetric: "45k daily active users",
    projectCategory: "AI Agent System"
  },
  {
    id: "3",
    author: "Dr. Sarah Jenkins",
    role: "VP of Product",
    company: "Vitalis Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    content: "Working with Soluce Labs felt like having a world-class in-house founding engineer team. They are proactive, transparent, communicative, and obsessive about performance and aesthetics.",
    rating: 5,
    highlightMetric: "4.9 ★ on App Store",
    projectCategory: "Cross-Platform App"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "1",
    question: "How do you structure freelance software projects and pricing?",
    answer: "We offer both fixed-scope milestone sprints (ideal for new MVPs, feature builds, or redesigns with clear specs) and dedicated monthly engineering pods (ideal for ongoing product development and scaling). All pricing is 100% transparent upfront with no hidden fees.",
    category: "Billing & Pricing"
  },
  {
    id: "2",
    question: "Do I retain 100% ownership of the code and intellectual property?",
    answer: "Yes, unconditionally. Upon completion and milestone sign-off, all intellectual property, source code, Figma design systems, domain assets, and cloud deployment rights are 100% owned by your company.",
    category: "Ownership & IP"
  },
  {
    id: "3",
    question: "How fast can you start on our project?",
    answer: "Depending on our current sprint schedule, we typically onboard new clients within 3 to 7 business days. We begin with a 45-minute discovery session and technical blueprinting phase.",
    category: "Process & Timeline"
  },
  {
    id: "4",
    question: "How do we communicate throughout the development lifecycle?",
    answer: "We integrate directly into your workflow. We set up a private Slack / Discord channel with daily async progress updates, weekly Loom video walkthroughs, and live interactive staging environments where you can test features as they are built.",
    category: "Process & Timeline"
  },
  {
    id: "5",
    question: "What tech stack do you recommend for most modern software products?",
    answer: "For web applications, our primary gold standard is Next.js 15, TypeScript, Tailwind CSS, PostgreSQL/Prisma, and Vercel/AWS. For mobile, we use React Native with Expo. For AI integrations, we leverage Gemini 1.5, OpenAI, and vector databases like Pinecone.",
    category: "Tech & Code"
  },
  {
    id: "6",
    question: "What happens after the project is launched?",
    answer: "Every project includes 30 days of complimentary post-launch warranty and bug-fix support. We also provide seamless ongoing retainer packages for maintenance, infrastructure monitoring, and feature iteration.",
    category: "Process & Timeline"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Technical Blueprint",
    desc: "We analyze your product goals, define architectural requirements, create user flow maps, and lock in sprint milestones.",
    time: "Days 1 - 3",
    deliverable: "Architecture Spec & Project Roadmap"
  },
  {
    step: "02",
    title: "Design Systems & Interactive UI",
    desc: "High-fidelity Figma UI/UX screens, interactive design tokens, and glassmorphic micro-interaction guidelines.",
    time: "Week 1 - 2",
    deliverable: "Clickable Figma Prototype"
  },
  {
    step: "03",
    title: "Agile Development & Daily Staging",
    desc: "Clean, type-safe TypeScript code written in 1-week sprints with continuous deployment to private preview URLs.",
    time: "Weeks 2 - 5",
    deliverable: "Live Staging App & GitHub PRs"
  },
  {
    step: "04",
    title: "QA, Security & Performance Hardening",
    desc: "100/100 Lighthouse optimization, mobile responsiveness stress-testing, database indexing, and SOC2-readiness.",
    time: "Final Sprint",
    deliverable: "Audit Report & Security Sign-off"
  },
  {
    step: "05",
    title: "Zero-Downtime Launch & IP Transfer",
    desc: "Production domain launch, automated CI/CD handover, 100% IP transfer, and 30-day post-launch warranty support.",
    time: "Launch Day",
    deliverable: "Live App & 100% Repository Transfer"
  }
];
