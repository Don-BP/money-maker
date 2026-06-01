"use client";

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-black font-outfit tracking-tighter mb-2">
              DokiDoki<span className="text-indigo-600">.Tools</span>
            </div>
            <p className="text-sm text-slate-500">© 2026 DokiDoki.Tools. All rights reserved.</p>
          </div>
          
          <div className="flex gap-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="/legal/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="/legal/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="/#tools" className="hover:text-indigo-600 transition-colors">All Tools</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
