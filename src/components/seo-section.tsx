"use client";

import React from 'react';

interface SEOSectionProps {
  title: string;
  description: string;
  keywords: string[];
  faqs: { q: string; a: string }[];
}

export const SEOSection: React.FC<SEOSectionProps> = ({ title, description, keywords, faqs }) => {
  return (
    <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
      <h2 className="font-outfit text-3xl font-bold mb-6">{title}</h2>
      
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-500 leading-relaxed text-lg mb-12">
        <p className="whitespace-pre-line">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
            <p className="text-sm text-slate-500">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {keywords.map((word, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            #{word}
          </span>
        ))}
      </div>
    </div>
  );
};
