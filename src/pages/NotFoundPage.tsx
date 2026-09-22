import React from 'react';
import { Button } from '../components/Button';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <div className="text-[11px] font-mono text-emerald-700 tracking-wider mb-6">404</div>
        <h1 className="text-[40px] sm:text-[56px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
          This page doesn't exist —
          <br />
          <span className="font-serif italic text-emerald-700">but your pipeline could.</span>
        </h1>
        <p className="text-[15px] text-slate-600 leading-relaxed mb-10 max-w-lg mx-auto">
          The link you followed is broken or the page has moved. Let's get you back to something useful.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" onClick={() => onNavigate('home')}>
            Back to home
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('services')} withArrow className="group">
            View services
          </Button>
        </div>
      </div>
    </div>
  );
};