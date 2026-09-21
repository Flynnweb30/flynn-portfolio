import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from '../analytics';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
  onOpenBooking: () => void;
}

const NAV_ITEMS: { label: string; page: PageId; index: string; ariaLabel: string }[] = [
  { label: 'Home', page: 'home', index: '01', ariaLabel: 'Go to homepage' },
  { label: 'About', page: 'about', index: '02', ariaLabel: 'About Flynn James' },
  { label: 'Services', page: 'services', index: '03', ariaLabel: 'B2B appointment setting and cold calling services' },
  { label: 'Experience', page: 'experience', index: '04', ariaLabel: 'Career timeline' },
  { label: 'Case Studies', page: 'case-studies', index: '05', ariaLabel: 'B2B sales case studies' },
  { label: 'Playbooks', page: 'samples', index: '06', ariaLabel: 'Sales playbooks and scripts' },
  { label: 'Blog', page: 'blog', index: '07', ariaLabel: 'B2B sales and outbound insights blog' },
  { label: 'Contact', page: 'contact', index: '08', ariaLabel: 'Contact Flynn James' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => setIsScrolled(window.scrollY > 16), 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNav = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0f19]/92 backdrop-blur-xl border-b border-slate-800/70 shadow-lg shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 group" aria-label="Flynn James — homepage">
              <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center overflow-hidden group-hover:border-amber-400/60 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative font-bold text-[15px] text-amber-400 tracking-tight">FJ</span>
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[14px] font-semibold text-white tracking-tight">Flynn James</span>
                <span className="text-[10.5px] text-slate-500 mt-1 font-mono tracking-tight uppercase">
                  Senior SDR · Team Lead
                </span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <a
                    key={item.page}
                    href={item.page === 'home' ? '/' : `/${item.page}`}
                    onClick={(e) => { e.preventDefault(); handleNav(item.page); }}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-slate-800/70 border border-slate-700/60 rounded-md -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Flynn James resume"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <button
                onClick={onOpenBooking}
                aria-label="Book a strategy call"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white rounded-md"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0b0f19] border-l border-slate-800/80 flex flex-col"
            >
              <div className="h-20 px-6 flex items-center justify-between border-b border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = currentPage === item.page;
                    return (
                      <li key={item.page}>
                        <a
                          href={item.page === 'home' ? '/' : `/${item.page}`}
                          onClick={(e) => { e.preventDefault(); handleNav(item.page); }}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg transition-colors group ${
                            isActive ? 'bg-slate-800/60 text-white' : 'text-slate-300 hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-baseline gap-3">
                            <span className={`text-[11px] font-mono ${isActive ? 'text-amber-400' : 'text-slate-600'}`}>
                              {item.index}
                            </span>
                            <span className="text-[15px] font-medium">{item.label}</span>
                          </div>
                          <ArrowUpRight
                            className={`w-4 h-4 ${
                              isActive ? 'text-amber-400' : 'text-slate-600 group-hover:text-slate-400'
                            }`}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-6 border-t border-slate-800/60 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book a Call</span>
                </button>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 text-[13px] font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};