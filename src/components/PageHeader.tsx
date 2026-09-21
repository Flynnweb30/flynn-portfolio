import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  align?: 'left' | 'center';
  photoClass?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  index,
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'left',
  photoClass,
}) => {
  return (
    <div
      className={`relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-slate-800/60 overflow-hidden ${
        photoClass ? `section-photo ${photoClass}` : ''
      } ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-3xl rounded-2xl px-0 sm:px-2 ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="text-[11px] font-mono text-amber-400/80 tracking-wider">{index}</span>
            <span className="h-px w-8 bg-slate-700" />
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{eyebrow}</span>
          </div>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] font-bold text-white leading-[1.05] tracking-tight">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="font-serif italic text-amber-400/90">{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 text-[15px] sm:text-[16.5px] text-slate-400 leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};