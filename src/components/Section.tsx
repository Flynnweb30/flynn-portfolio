import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, bordered = false }) => {
  return (
    <section id={id} className={`py-20 sm:py-28 ${bordered ? 'border-t border-slate-800/60' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
};