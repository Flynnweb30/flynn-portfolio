import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WorkSampleModal } from './components/WorkSampleModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Toast } from './components/Toast';
import { CaseStudy, WorkSample, ServiceItem, PageId } from './types';
import { useSEO, SEO_CONFIGS } from './hooks/useSEO';
import { trackPageView } from './analytics';
import { getBlogPost } from './data/blogData';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SamplesPage } from './pages/SamplesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: 0.45,
};

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'experience', 'case-studies', 'samples', 'blog', 'contact'];

const PAGE_TO_SEO_KEY: Record<PageId, keyof typeof SEO_CONFIGS> = {
  home: 'home',
  about: 'about',
  services: 'services',
  experience: 'experience',
  'case-studies': 'caseStudies',
  samples: 'samples',
  blog: 'blog',
  contact: 'contact',
};

const BREADCRUMB_LABELS: Record<PageId, string> = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  experience: 'Experience',
  'case-studies': 'Case Studies',
  samples: 'Playbooks',
  blog: 'Blog',
  contact: 'Contact',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentBlogSlug, setCurrentBlogSlug] = useState<string | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactServicePreselect, setContactServicePreselect] = useState<string | undefined>(undefined);

  const pageFromLocation = useCallback((): { page: PageId; slug: string | null } => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const segments = path.split('/').filter(Boolean);
    if (segments[0] === 'blog') return { page: 'blog', slug: segments[1] || null };
    if (VALID_PAGES.includes(path as PageId)) return { page: path as PageId, slug: null };

    const hash = window.location.hash.replace('#/', '').replace('#', '').replace(/^\/+|\/+$/g, '');
    if (VALID_PAGES.includes(hash as PageId)) return { page: hash as PageId, slug: null };
    return { page: 'home', slug: null };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const location = pageFromLocation();
      setCurrentPage(location.page);
      setCurrentBlogSlug(location.slug);
    };
    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange, { passive: true });
    window.addEventListener('hashchange', handleLocationChange, { passive: true });
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [pageFromLocation]);

  const navigate = useCallback((page: PageId) => {
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path || window.location.hash) window.history.pushState({}, '', path);
    setCurrentPage(page);
    setCurrentBlogSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToBlogPost = useCallback((slug: string) => {
    const path = `/blog/${slug}`;
    if (window.location.pathname !== path) window.history.pushState({}, '', path);
    setCurrentPage('blog');
    setCurrentBlogSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToContact = useCallback(
    (serviceName?: string) => {
      if (serviceName) setContactServicePreselect(serviceName);
      navigate('contact');
    },
    [navigate],
  );

  const blogPost = currentPage === 'blog' && currentBlogSlug ? getBlogPost(currentBlogSlug) : null;
  const baseSeo = SEO_CONFIGS[PAGE_TO_SEO_KEY[currentPage]];
  const seo = blogPost
    ? {
        title: `${blogPost.title} | Flynn James B2B Sales Blog`,
        description: blogPost.metaDescription || blogPost.excerpt,
        canonical: `/blog/${blogPost.slug}`,
        keywords: blogPost.keywords.join(', '),
        ogType: 'article',
        ogImage: blogPost.image,
      }
    : baseSeo;
  const pageBreadcrumb = currentPage !== 'home' && currentPage !== 'blog'
    ? [
        { name: 'Home', url: '/' },
        { name: BREADCRUMB_LABELS[currentPage], url: `/${currentPage}` },
      ]
    : undefined;

  const breadcrumbSchema = pageBreadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: pageBreadcrumb.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `https://flynnjamespontino-porfolio.onrender.com${b.url}`,
        })),
      }
    : undefined;

  useSEO({
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    keywords: seo.keywords,
    ogType: blogPost ? 'article' : currentPage === 'home' ? 'website' : 'article',
    ogImage: 'ogImage' in seo ? seo.ogImage : undefined,
    jsonLd: currentPage === 'blog' ? undefined : breadcrumbSchema,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => trackPageView(document.title, window.location.pathname), 0);
    return () => window.clearTimeout(timer);
  }, [currentPage, currentBlogSlug]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} onOpenContact={navigateToContact} onSelectCaseStudy={setSelectedCaseStudy} onSelectSample={setSelectedSample} onSuccessToast={setToastMessage} />;
      case 'about':
        return <AboutPage onNavigate={navigate} onOpenContact={navigateToContact} />;
      case 'services':
        return <ServicesPage onSelectService={setSelectedService} onOpenContact={navigateToContact} />;
      case 'experience':
        return <ExperiencePage onNavigate={navigate} onOpenContact={navigateToContact} />;
      case 'case-studies':
        return <CaseStudiesPage onSelectCaseStudy={setSelectedCaseStudy} onOpenContact={navigateToContact} />;
      case 'samples':
        return <SamplesPage onSelectSample={setSelectedSample} onOpenContact={navigateToContact} />;
      case 'blog':
        return currentBlogSlug
          ? <BlogPostPage slug={currentBlogSlug} onNavigate={navigate} onOpenPost={navigateToBlogPost} onOpenContact={() => navigateToContact()} />
          : <BlogPage onNavigate={navigate} onOpenPost={navigateToBlogPost} onOpenContact={() => navigateToContact()} />;
      case 'contact':
        return <ContactPage initialService={contactServicePreselect} onSuccessToast={setToastMessage} />;
      default:
        return <HomePage onNavigate={navigate} onOpenContact={navigateToContact} onSelectCaseStudy={setSelectedCaseStudy} onSelectSample={setSelectedSample} onSuccessToast={setToastMessage} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans antialiased">
      <Navbar currentPage={currentPage} onNavigate={navigate} onOpenContact={() => navigateToContact()} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={`${currentPage}:${currentBlogSlug || ''}`} initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigate} />

      <CaseStudyModal caseStudy={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} onOpenContact={() => { setSelectedCaseStudy(null); navigateToContact(); }} />
      <WorkSampleModal sample={selectedSample} onClose={() => setSelectedSample(null)} onOpenContact={() => { setSelectedSample(null); navigateToContact(); }} />
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} onOpenContact={(serviceName) => { setSelectedService(null); navigateToContact(serviceName); }} />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      <div data-toast role="status" aria-live="polite" className="site-toast" />
    </div>
  );
}
