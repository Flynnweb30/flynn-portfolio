import React from 'react';
import { ArrowLeft, ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, getBlogPost } from '../data/blogData';
import { useSEO } from '../hooks/useSEO';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { PageId } from '../types';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (page: PageId) => void;
  onOpenPost: (slug: string) => void;
  onOpenContact: () => void;
}

const SITE_URL = 'https://flynnjamespontino-porfolio.onrender.com';

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate, onOpenPost, onOpenContact }) => {
  const post = getBlogPost(slug);

  useSEO(post ? {
    title: `${post.title} | Flynn James B2B Sales Blog`,
    description: post.metaDescription || post.excerpt,
    canonical: `/blog/${post.slug}`,
    ogImage: post.image,
    ogType: 'article',
    keywords: post.keywords.join(', '),
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${SITE_URL}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        image: [post.image],
        datePublished: post.published,
        dateModified: post.updated,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        author: { '@id': `${SITE_URL}/#person` },
        publisher: { '@id': `${SITE_URL}/#person` },
        articleSection: post.category,
        keywords: post.keywords.join(', '),
        inLanguage: 'en-US',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      },
      ...(post.faq?.length ? [{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }] : []),
    ],
  } : {
    title: 'Article Not Found | Flynn James B2B SDR Blog',
    description: 'The requested B2B sales article could not be found.',
    canonical: '/blog',
    noindex: true,
  });

  if (!post) {
    return (
      <Section className="pt-40 min-h-[70vh]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Article not found</div>
          <h1 className="mt-4 text-4xl font-bold text-white">Let’s get you back to the sales notes.</h1>
          <Button variant="primary" className="mt-7" onClick={() => onNavigate('blog')}>Back to blog</Button>
        </div>
      </Section>
    );
  }

  const related = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);
  const visualAfterSection = (sectionIndex: number) => {
    if (!post.visualSuggestions) return undefined;
    const visualIndex: Record<number, number> = { 2: 0, 6: 1, 9: 2 };
    const index = visualIndex[sectionIndex];
    return typeof index === 'number' ? post.visualSuggestions[index] : undefined;
  };

  return (
    <>
      <PageHeader
        index="07.1"
        eyebrow={post.category}
        title={post.title}
        description={`${post.readTime} · Updated ${new Date(post.updated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}. Practical field notes for B2B founders, sales leaders, SDRs, and AEs.`}
        photoClass="bg-photo-blog-post"
      />

      <Section className="pt-12 sm:pt-16">
        <article className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button type="button" onClick={() => onNavigate('blog')} className="inline-flex items-center gap-2 text-[12px] font-medium text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to all articles
            </button>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 aspect-[16/7] mb-10">
            <img
              src={post.image}
              alt={`${post.title} — Flynn James B2B sales blog`}
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/75 via-transparent to-transparent" />
          </div>

          <div className="prose-flynn">
            <p className="lead">{post.intro}</p>

            {post.sections.map((section, sectionIndex) => {
              const visual = visualAfterSection(sectionIndex);
              return (
                <section key={section.heading} className="mt-12">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}

                  {section.subsections?.map((subsection) => (
                    <div key={subsection.heading} className="mt-8">
                      <h3>{subsection.heading}</h3>
                      {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {subsection.bullets && (
                        <ul>
                          {subsection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}

                  {visual && (
                    <figure className="article-visual mt-8 rounded-2xl overflow-hidden border border-slate-700/70 bg-slate-900/70">
                      <img
                        src={visual.image}
                        alt={visual.alt}
                        className="w-full aspect-[16/7] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="px-5 py-4 text-[11px] text-slate-500 leading-6">
                        <strong className="text-slate-300">{visual.title}.</strong> {visual.description}
                      </figcaption>
                    </figure>
                  )}
                </section>
              );
            })}

            <div className="mt-14 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-7 sm:p-9">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Quick takeaways</div>
              <ul className="mt-5 space-y-3 list-none p-0">
                {post.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-[14px] text-slate-200 leading-7">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {post.faq?.length ? (
              <section className="mt-14 rounded-2xl border border-slate-700/70 bg-slate-900/60 p-7 sm:p-9" aria-labelledby="faq-heading">
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">FAQ</div>
                <h2 id="faq-heading" className="mt-3">B2B appointment setting questions</h2>
                <div className="mt-6 space-y-7">
                  {post.faq.map((item) => (
                    <div key={item.question}>
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>
      </Section>

      <Section bordered>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Keep going</div>
            <h2 className="mt-3 text-3xl font-bold text-white">More outbound notes worth saving.</h2>
            <div className="mt-6 grid gap-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  onClick={(event) => { event.preventDefault(); onOpenPost(item.slug); }}
                  className="group text-left rounded-xl border border-slate-700/60 bg-slate-900/60 p-5 hover:border-slate-500 transition-colors block"
                >
                  <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">{item.category}</div>
                  <div className="mt-2 text-[15px] font-semibold text-white group-hover:text-amber-300 transition-colors">{item.title}</div>
                  <div className="mt-2 text-[12px] text-slate-500 leading-6">{item.excerpt}</div>
                </a>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-7 sm:p-8">
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Apply it to your funnel</div>
            <h2 className="mt-3 text-2xl font-bold text-white">Want a second set of eyes on your outbound?</h2>
            <p className="mt-4 text-[13px] text-slate-400 leading-7">Book a free 20-minute pipeline audit. We’ll look at targeting, messaging, qualification, and the handoff to your closer.</p>
            <Button variant="primary" size="lg" onClick={onOpenContact} className="mt-7 w-full">Book a strategy call <ArrowUpRight className="w-4 h-4" /></Button>
          </aside>
        </div>
      </Section>
    </>
  );
};
