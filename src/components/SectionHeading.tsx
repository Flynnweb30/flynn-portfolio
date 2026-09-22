import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'left',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {(index || eyebrow) && (
        <div className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
          {index && <span className="text-[11px] font-mono text-amber-400/80 tracking-wider">{index}</span>}
          {index && eyebrow && <span className="h-px w-6 bg-slate-700" />}
          {eyebrow && (
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{eyebrow}</span>
          )}
        </div>
      )}

      <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white leading-[1.15] tracking-tight">
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="font-serif italic text-amber-400/90">{titleAccent}</span>
          </>
        )}
      </h2>

      {description && <p className="mt-4 text-[15px] text-slate-400 leading-relaxed">{description}</p>}
    </motion.div>
  );
};