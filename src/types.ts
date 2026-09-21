export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  metrics: string;
  features: string[];
  toolsUsed: string[];
  deliverableSummary: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  type: string;
  industry: string;
  highlightMetric: string;
  responsibilities: string[];
  achievements: string[];
}

export interface ToolCategory {
  category: string;
  description: string;
  tools: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName: string;
    useCase: string;
  }[];
}

export interface WorkStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  actionItems: string[];
  outcome: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  region: string;
  industry: string;
  period: string;
  headlineMetric: string;
  secondaryMetrics: { label: string; value: string }[];
  challenge: string;
  action: string[];
  result: string[];
  toolsUsed: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  verifiedMetric: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Engagement' | 'Calling & Volume' | 'Quality & Show-ups' | 'Tools & Stack';
}

export interface WorkSample {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  details: {
    overview: string;
    framework: string[];
    sampleText?: string;
    tips: string[];
  };
}

export type PageId = 'home' | 'about' | 'services' | 'experience' | 'case-studies' | 'samples' | 'blog' | 'contact';