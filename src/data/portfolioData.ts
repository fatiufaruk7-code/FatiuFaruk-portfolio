import { AboutCard, ProcessStep, ProjectItem, SkillItem, ServiceItem, PricingPackage } from '../types.ts';
import portfolioShowcaseImg from '../assets/images/portfolio_showcase_1789637108927.jpg';
import restaurantPreviewImg from '../assets/images/restaurant_preview_1789637126477.jpg';
import ecommercePreviewImg from '../assets/images/ecommerce_preview_1789637138484.jpg';
import schoolPortalImg from '../assets/images/school_portal_1789637152278.jpg';
import developerWorkspaceImg from '../assets/images/developer_workspace_1789637166930.jpg';

export const aboutWorkspaceImage = developerWorkspaceImg;

export const personalInfo = {
  name: "Clarity Creative",
  preferredName: "Clarity",
  brandName: "Clarity Creative",
  logoTag: "C²",
  supportingTitle: "WEB DEVELOPER • DIGITAL CREATIVE",
  headline: "BUILDING MODERN WEBSITES THAT GET YOU NOTICED.",
  tagline: "Modern Websites. Clear Solutions.",
  role: "Web Developer & Digital Creative",
  status: "Available for new projects",
  bioHeadline: "Modern Websites. Clear Solutions.",
  shortDescription: "I design and develop fast, responsive and user-friendly websites for businesses, organizations and individuals.",
  email: "fatiufaruk7@gmail.com",
  location: "Kwara State, Nigeria • Remote Worldwide",
  city: "Kwara State, Nigeria",
  experience: "Modern Web Development & Digital Solutions",
  socials: {
    github: "https://github.com",
    twitter: "https://x.com/Toriblackm8j9",
    whatsapp: "https://wa.me/2348137941486",
    whatsappNumber: "08137941486",
  }
};

export const codeSnippetString = `const developer = {
  brand: "Clarity Creative",
  role: "Web Developer • Digital Creative",
  tagline: "Modern Websites. Clear Solutions.",
  stack: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
  status: "Available for projects"
};

function craftWebsite(project) {
  return {
    performance: "Fast, Responsive & Mobile-First",
    design: "Modern, Clean & Engaging",
    solution: "Clear Solutions That Get You Noticed"
  };
};`;

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    title: "BUSINESS WEBSITES",
    description: "Professional websites that help businesses establish a strong online presence.",
    iconName: "Briefcase"
  },
  {
    id: "portfolio-websites",
    title: "PORTFOLIO WEBSITES",
    description: "Modern personal portfolios for developers, creatives, students and professionals.",
    iconName: "User"
  },
  {
    id: "landing-pages",
    title: "LANDING PAGES",
    description: "High-quality landing pages designed to clearly present products, services or campaigns.",
    iconName: "Target"
  },
  {
    id: "school-organization-websites",
    title: "SCHOOL & ORGANIZATION WEBSITES",
    description: "Structured websites for schools, organizations and institutions.",
    iconName: "GraduationCap"
  },
  {
    id: "ecommerce-websites",
    title: "E-COMMERCE WEBSITES",
    description: "Modern online stores and product-focused web experiences.",
    iconName: "ShoppingBag"
  },
  {
    id: "website-redesign",
    title: "WEBSITE REDESIGN",
    description: "Modernize outdated websites with better design, responsiveness and user experience.",
    iconName: "RefreshCw"
  },
  {
    id: "deployment-setup",
    title: "DEPLOYMENT & SETUP",
    description: "Website deployment and configuration using modern hosting platforms.",
    iconName: "Rocket"
  }
];

export const pricingPackagesData: PricingPackage[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "From ₦30,000",
    bestFor: "For simple personal websites and landing pages.",
    features: [
      "Responsive mobile-first layout",
      "Clean, modern single or multi-page structure",
      "Contact section & inquiry messaging",
      "Cross-browser performance optimization",
      "Fast deployment setup on modern hosting"
    ],
    ctaText: "GET A QUOTE",
    budgetRange: "₦30k – ₦50k"
  },
  {
    id: "business",
    name: "BUSINESS",
    price: "From ₦50,000",
    badge: "Recommended",
    popular: true,
    bestFor: "For businesses, organizations and professional websites.",
    features: [
      "Custom responsive design & brand presentation",
      "Multi-page architecture with clear navigation",
      "Contact form & direct messaging integration",
      "Mobile-optimized performance & clean SEO setup",
      "Domain setup & production deployment",
      "User-friendly layout across all devices"
    ],
    ctaText: "GET A QUOTE",
    budgetRange: "₦50k – ₦80k"
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "From ₦80,000",
    bestFor: "For advanced websites, web applications and unique requirements.",
    features: [
      "Tailored UI design & custom workflows",
      "Interactive features, catalogs or portals",
      "Database / backend integration where required",
      "Advanced responsive layouts & animations",
      "Deployment, hosting setup & ongoing guidance"
    ],
    ctaText: "GET A QUOTE",
    budgetRange: "₦80k+"
  }
];

export const aboutCards: AboutCard[] = [
  {
    title: "Web Developer",
    icon: "Code",
    description: "Building modern responsive websites using clean and semantic architecture.",
  },
  {
    title: "Computer Science",
    icon: "GraduationCap",
    description: "Studying Computer Science with a passion for software design and problem solving.",
  },
  {
    title: "Clean UI Design",
    icon: "Palette",
    description: "Focusing on intuitive, accessible interfaces that balance aesthetics with speed.",
  },
  {
    title: "Digital Solutions",
    icon: "Lightbulb",
    description: "Turning real client challenges into clear, reliable, high-impact web solutions.",
  }
];

export const skillsData: SkillItem[] = [
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    icon: "fa-brands fa-html5",
    lucideIconName: "Code2",
    description: "Semantic web architecture, accessible markup, and structured data.",
    level: 95
  },
  {
    id: "css3",
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: "fa-brands fa-css3-alt",
    lucideIconName: "Palette",
    description: "Responsive flexbox, CSS grid, custom properties, and fluid typography.",
    level: 94
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: "fa-brands fa-js",
    lucideIconName: "FileCode",
    description: "DOM manipulation, modern asynchronous logic, APIs, and modern ES features.",
    level: 92
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    icon: "fa-brands fa-react",
    lucideIconName: "Atom",
    description: "Component modularity, declarative hooks, state management, and Vite builds.",
    level: 90
  },
  {
    id: "responsive",
    name: "Responsive Web Design",
    category: "frontend",
    icon: "fa-solid fa-mobile-screen",
    lucideIconName: "Smartphone",
    description: "Mobile-first ergonomic experiences optimized for mobile, tablet and desktop.",
    level: 96
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "tools",
    icon: "fa-brands fa-git-alt",
    lucideIconName: "GitBranch",
    description: "Source code version control, structured commits, branching and repository management.",
    level: 90
  },
  {
    id: "ui-design",
    name: "UI Design & Tailwind",
    category: "frontend",
    icon: "fa-solid fa-paintbrush",
    lucideIconName: "Layers",
    description: "Glassmorphic interfaces, high-contrast dark modes, and design token consistency.",
    level: 92
  },
  {
    id: "deployment-vercel",
    name: "Website Deployment & Vercel",
    category: "tools",
    icon: "fa-solid fa-cloud-arrow-up",
    lucideIconName: "Rocket",
    description: "Automated continuous deployments, custom domains, HTTPS, and CDN edge routing.",
    level: 91
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "backend",
    icon: "fa-solid fa-fire",
    lucideIconName: "Server",
    description: "Firestore database schemas, client integration, and hosting workflows.",
    level: 85
  }
];

export const marqueeTechList = [
  { name: "HTML5", symbol: "HTML" },
  { name: "CSS3", symbol: "CSS" },
  { name: "JavaScript", symbol: "JS" },
  { name: "React", symbol: "REACT" },
  { name: "Git", symbol: "GIT" },
  { name: "GitHub", symbol: "GITHUB" },
  { name: "Firebase", symbol: "FIREBASE" },
  { name: "Vercel", symbol: "VERCEL" }
];

export const projectsData: ProjectItem[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    projectType: "Personal Project",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description: "A modern responsive developer portfolio designed to showcase skills, projects and services with clean visual motion.",
    overview: "A custom personal portfolio website designed from the ground up for Clarity Creative. Features a sleek dark glassmorphism interface, interactive project modals, responsive touch controls, and smooth entrance sequences.",
    objective: "To present web development skills, live client services, and transparent pricing in a polished, highly accessible digital showcase.",
    previewClass: "preview-one",
    previewGradient: "radial-gradient(circle, rgba(22, 199, 194, 0.35) 0%, rgba(6, 16, 18, 0.95) 80%)",
    previewIcon: "Code",
    imageUrl: portfolioShowcaseImg,
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "High-performance responsive design across desktop, tablet, and mobile",
      "Interactive case study showcase with full technical specifications",
      "Preloader experience, dark mode palette, and accessible color contrast"
    ]
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Business Website",
    projectType: "Demo Project",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    description: "A modern restaurant website featuring responsive design, appetizing menu presentation, reservation flow and clear calls to action.",
    overview: "A vibrant dining website crafted to help culinary businesses attract patrons online. Features categorized digital menus, chef specials, mobile booking forms, and clear location/contact integration.",
    objective: "To demonstrate responsive dining catalog layout, interactive mobile menus, and seamless client conversion journeys.",
    previewClass: "preview-two",
    previewGradient: "radial-gradient(circle, rgba(98, 231, 225, 0.35) 0%, rgba(6, 16, 18, 0.95) 80%)",
    previewIcon: "Utensils",
    imageUrl: restaurantPreviewImg,
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Mobile-optimized visual menu card layout with dietary tags",
      "Integrated reservation inquiry and direct WhatsApp order button",
      "Fast image loading and accessible typographic scale"
    ]
  },
  {
    id: "clarity-sell",
    title: "Clarity Sell",
    category: "Digital Commerce",
    projectType: "Concept Project",
    tags: ["React", "TypeScript", "Tailwind", "Cart UI"],
    description: "A digital product and data-selling platform concept designed around a simple, friction-free purchasing and checkout experience.",
    overview: "Clarity Sell is an innovative concept for digital creators, merchants, and data providers to distribute products online. It features clean product previews, instant checkout calculations, and modern digital asset delivery.",
    objective: "To explore seamless digital asset distribution, cart state management, and intuitive checkout micro-interactions in modern web apps.",
    previewClass: "preview-three",
    previewGradient: "radial-gradient(circle, rgba(22, 199, 194, 0.3) 0%, rgba(6, 16, 18, 0.95) 80%)",
    previewIcon: "ShoppingBag",
    imageUrl: ecommercePreviewImg,
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Streamlined digital checkout flow with live order summary",
      "Responsive product grids with instant search and filter controls",
      "Clean glassmorphism card surfaces with subtle teal glow"
    ]
  },
  {
    id: "school-portal",
    title: "School Portal",
    category: "Educational Web App",
    projectType: "Concept Project",
    tags: ["React", "TypeScript", "Dashboard", "Student UI"],
    description: "A modern university portal concept featuring student-focused academic schedules, course tracking and administrative functionality.",
    overview: "A student-centered educational portal interface designed for university and college workflows. Includes student result checking, semester course registration, announcement boards, and department resources.",
    objective: "To build an organized, accessible dashboard interface solving real student navigation challenges with clear visual hierarchy.",
    previewClass: "preview-four",
    previewGradient: "radial-gradient(circle, rgba(98, 231, 225, 0.3) 0%, rgba(6, 16, 18, 0.95) 80%)",
    previewIcon: "GraduationCap",
    imageUrl: schoolPortalImg,
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Student result portal and semester grade overview interface",
      "Course schedule calendar with upcoming lecture time indicators",
      "Responsive sidebar navigation and accessible data tables"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    icon: "Compass",
    description: "Understanding your goals, defining project scope, target audience, and structuring key website requirements.",
    details: [
      "Project requirements analysis & goal definition",
      "Information architecture and wireframe planning"
    ]
  },
  {
    number: "02",
    title: "Design & Prototyping",
    icon: "PenTool",
    description: "Designing modern, responsive layouts with clean typography, clear visual hierarchy, and cohesive branding.",
    details: [
      "Modern UI/UX design with responsive grids",
      "High-contrast color styling and intuitive controls"
    ]
  },
  {
    number: "03",
    title: "Clean Development",
    icon: "Code",
    description: "Writing semantic, performant, and well-structured code with modern web standards and responsive behaviors.",
    details: [
      "Component modularity and clean TypeScript/React",
      "Performance optimization and smooth motion transitions"
    ]
  },
  {
    number: "04",
    title: "Testing & Launch",
    icon: "Rocket",
    description: "Conducting thorough cross-device verification, SEO checks, and deploying the website online for global access.",
    details: [
      "Cross-device responsiveness and accessibility audit",
      "Fast deployment on Vercel or cloud hosts with custom domain"
    ]
  }
];

