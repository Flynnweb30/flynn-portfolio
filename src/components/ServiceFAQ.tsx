import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  serviceName: string;
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs, serviceName }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-200 py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-slate-300" />
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 id="faq-heading" className="text-[26px] sm:text-[32px] font-bold text-slate-900 leading-tight">
            Questions about {serviceName}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[14.5px] sm:text-[15.5px] font-semibold text-slate-900"
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-emerald-700 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-5 text-[13.5px] sm:text-[14px] text-slate-600 leading-[1.75] border-t border-slate-100 pt-4"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};