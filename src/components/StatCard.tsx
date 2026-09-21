import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
  index?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, sublabel, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-lg hover:border-[var(--border-default)] transition-colors"
    >
      <div className="text-[28px] sm:text-[32px] font-semibold text-[var(--ink-primary)] tracking-tight tabular leading-none">
        {value}
      </div>
      <div className="mt-3 text-[12.5px] font-medium text-[var(--ink-secondary)]">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-[11px] text-[var(--ink-tertiary)] font-mono">
          {sublabel}
        </div>
      )}
      <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-[var(--accent-primary)]/40 group-hover:bg-[var(--accent-primary)] transition-colors" />
    </motion.div>
  );
};