import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/blogData';
import { useSEO } from '../hooks/useSEO';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { PageId } from '../types';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPost: (slug: string) => void;
  onOpenContact: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenPost, onOpenContact }) => {
  useSEO({
    title: 'B2B SDR Blog | Cold Calling, Appointment Setting & Outbound Sales',
    description: 'Practical B2B sales insights from Flynn James on cold calling, appointment setting, SDR metrics, outbound cadences, meeting quality, and hiring setters.',
    canonical: '/blog',
    keywords: 'B2B SDR blog, cold calling tips, appointment setting tips, outbound sales strategy, SDR metrics, sales development',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': 'https://flynnjamespontino-porfolio.onrender.com/blog#blog',
      url: 'https://flynnjamespontino-porfolio.onrender.com/blog',
      name: 'Flynn James B2B SDR Blog',
      description: 'Practical B2B sales and outbound prospecting insights.',
      publisher: { '@id': 'https://flynnjamespontino-porfolio.onrender.com/#person' },
    },
  });

  const featured = BLOG_POSTS[0];
  const posts = BLOG_POSTS.slice(1);

  return (
    <>
      <PageHeader
        index="07"
        eyebrow="B2B sales blog"
        title="Practical outbound,"
        titleAccent="without the fluff."
        description="Field-tested notes on cold calling, appointment setting, SDR metrics, qualification, show rates, and building an outbound motion that sales teams can actually use."
        photoClass="bg-photo-blog"
      />

      <Section className="pt-14 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70 min-h-[460px]"
          >
            <img
              src={featured.image}
              alt="B2B sales team discussing outbound strategy"
              className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/20" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-amber-400 mb-5">
                <span>{featured.category}</span><span className="text-slate-600">·</span><span>{featured.readTime}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-3xl">{featured.title}</h2>
              <p className="mt-5 max-w-2xl text-[14px] sm:text-[15px] text-slate-300 leading-7">{featured.excerpt}</p>
              <a
                href={`/blog/${featured.slug}`}
                onClick={(event) => { event.preventDefault(); onOpenPost(featured.slug); }}
                data-track-click="blog_featured_open"
                className="mt-7 inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-white hover:text-amber-400 transition-colors"
              >
                Read the playbook <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>

          <aside className="lg:col-span-4 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Free resource</div>
              <h2 className="mt-3 text-2xl font-bold text-white leading-tight">Find the leak in your outbound motion.</h2>
              <p className="mt-4 text-[13.5px] text-slate-400 leading-7">
                Bring your ICP, current script, activity numbers, and show rate. I’ll help you identify the first three places worth fixing.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <Button variant="primary" size="lg" onClick={onOpenContact} className="w-full">
                <Mail className="w-4 h-4" />
                Request a free pipeline audit
              </Button>
              <button type="button" onClick={() => onNavigate('samples')} className="w-full py-3 text-[12.5px] font-medium text-slate-400 hover:text-white transition-colors">
                Browse free sales playbooks →
              </button>
            </div>
          </aside>
        </div>
      </Section>

      <Section bordered className="section-photo bg-photo-blog-grid">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Latest field notes</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Build a cleaner outbound system.</h2>
          </div>
          <p className="max-w-md text-[13px] text-slate-400 leading-6">Short, actionable articles designed for founders, sales leaders, AEs, and SDR teams that want more qualified conversations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.04 }}
              className="group rounded-xl border border-slate-700/60 bg-slate-950/70 overflow-hidden hover:border-slate-600 transition-colors"
            >
              <a href={`/blog/${post.slug}`} onClick={(event) => { event.preventDefault(); onOpenPost(post.slug); }} className="block w-full text-left">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <img src={post.image} alt={`${post.title} — B2B sales article`} className="w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-amber-400">
                    <span>{post.category}</span><span className="text-slate-700">·</span><span className="inline-flex items-center gap-1 text-slate-500"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white leading-tight group-hover:text-amber-300 transition-colors">{post.title}</h3>
                  <p className="mt-3 text-[13px] text-slate-400 leading-6">{post.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-slate-300 group-hover:text-white">Read article <ArrowUpRight className="w-3.5 h-3.5" /></div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center rounded-2xl border border-slate-700/70 bg-slate-900/70 p-8 sm:p-12">
          <BookOpen className="w-6 h-6 text-amber-400 mx-auto" />
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-5">Turn insight into pipeline</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Need someone to run the outbound motion?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-[14px] text-slate-400 leading-7">If you already know the market but need consistent prospecting, qualification, and booked meetings, let’s map the workflow around your team.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="lg" onClick={onOpenContact}>Book a 20-minute strategy call</Button>
            <Button variant="secondary" size="lg" onClick={() => onNavigate('case-studies')}>See the case studies</Button>
          </div>
        </div>
      </Section>
    </>
  );
};
