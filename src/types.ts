export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
  lucideIconName: string;
  description: string;
  level: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  projectType?: string;
  tags: string[];
  description: string;
  overview?: string;
  objective?: string;
  previewClass: string;
  previewGradient: string;
  previewIcon: string;
  imageUrl?: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  badge?: string;
  popular?: boolean;
  bestFor: string;
  features: string[];
  ctaText: string;
  budgetRange?: string;
}

export interface AboutCard {
  title: string;
  icon: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  projectType?: string;
  budget?: string;
  message: string;
  subject?: string;
}
