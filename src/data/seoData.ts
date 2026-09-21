export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType?: string;
  keywords?: string[];
  noindex?: boolean;
}

const SITE_URL = 'https://flynnjamespontino-porfolio.onrender.com';
const DEFAULT_OG = 'https://user29984.na.imgto.link/public/20260907/flynn-profile.avif';

export const SEO_DATA: Record<string, SEOMetadata> = {
  home: {
    title: 'Flynn James | B2B SDR, Appointment Setter & Cold Calling Specialist',
    description: 'Senior B2B SDR with 11+ years generating $1.8M+ pipeline and booking 30+ qualified meetings monthly. Cold calling, appointment setting, and outbound strategy for US, UK, ANZ, and SG markets.',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
    keywords: ['B2B SDR', 'appointment setting', 'cold calling specialist', 'outbound sales', 'sales development representative'],
  },
  about: {
    title: 'About Flynn James | 11+ Years in B2B Outbound Sales',
    description: 'Eleven years of outbound sales experience across SaaS, IT, events, and marketing. Learn how Flynn builds predictable pipelines for B2B teams worldwide.',
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG,
    ogType: 'profile',
  },
  services: {
    title: 'B2B Appointment Setting & Cold Calling Services | Flynn James',
    description: 'Six focused outbound services: appointment setting, cold calling, lead generation, SDR support, LinkedIn outreach, and pipeline management. Custom engagements for B2B teams.',
    canonical: `${SITE_URL}/services`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
  },
  experience: {
    title: 'Flynn James B2B Sales Experience | 11+ Years of SDR & Outbound Sales',
    description: 'Eleven years of quota attainment across Regen Digital US, Seek Marketing, Averps, Public Sector Network, and Pacific Outsource. Full career breakdown.',
    canonical: `${SITE_URL}/experience`,
    ogImage: DEFAULT_OG,
  },
  'case-studies': {
    title: 'B2B Sales Case Studies | Appointment Setting & Outbound Results',
    description: 'Detailed B2B sales case studies showing $1.8M+ pipeline generated, 120% quota attainment, and 30+ qualified meetings booked monthly. Real outbound results.',
    canonical: `${SITE_URL}/case-studies`,
    ogImage: DEFAULT_OG,
  },
  blog: {
    title: 'B2B SDR Blog | Cold Calling, Appointment Setting & Outbound Sales',
    description: 'Practical B2B sales insights from Flynn James on appointment setting, cold calling, qualified meetings, SDR metrics, outbound cadences, show rates, and hiring setters.',
    canonical: `${SITE_URL}/blog`,
    ogImage: DEFAULT_OG,
    ogType: 'website',
    keywords: ['B2B SDR blog', 'cold calling tips', 'appointment setting tips', 'outbound sales strategy', 'SDR metrics'],
  },
  samples: {
    title: 'B2B Cold Call Scripts & Sales Playbooks | Flynn James',
    description: 'The exact cold call scripts, 7-touch cadences, BANT scorecards, and AE handoff templates used to generate $1.8M+ pipeline. Free to download.',
    canonical: `${SITE_URL}/samples`,
    ogImage: DEFAULT_OG,
  },
  contact: {
    title: 'Contact Flynn James | Hire a B2B SDR & Appointment Setter',
    description: 'Book a free 20-minute pipeline audit. Direct email, phone, and LinkedIn contact for B2B SDR engagements. Response guaranteed within 24 hours.',
    canonical: `${SITE_URL}/contact`,
    ogImage: DEFAULT_OG,
  },
  privacy: {
    title: 'Privacy Policy | Flynn James',
    description: 'How Flynn James Pontino handles data submitted through this portfolio site.',
    canonical: `${SITE_URL}/privacy`,
    ogImage: DEFAULT_OG,
    noindex: false,
  },
  '404': {
    title: 'Page Not Found | Flynn James',
    description: 'The page you were looking for could not be found.',
    canonical: `${SITE_URL}/404`,
    ogImage: DEFAULT_OG,
    noindex: true,
  },
};