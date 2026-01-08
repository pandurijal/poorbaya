import React from 'react';
import { MonoText } from './Typography';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-paper border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
        <div>
          <div className="font-serif font-bold text-lg text-ink mb-2">poorbaya</div>
          <MonoText className="text-xs text-stone-400">
            © 2024 Poorbaya Ledger Systems.<br/>
            All rights reserved.
          </MonoText>
        </div>
        
        <div className="flex gap-8">
            <a href="#" className="font-mono text-xs text-stone-500 hover:text-ink transition-colors">PRIVACY</a>
            <a href="#" className="font-mono text-xs text-stone-500 hover:text-ink transition-colors">TERMS</a>
            <a href="#" className="font-mono text-xs text-stone-500 hover:text-ink transition-colors">CONTACT</a>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-stone-100 text-center md:text-left">
        <p className="font-serif text-xl md:text-2xl text-stone-800 leading-normal max-w-2xl">
            Accountability is not a feature.<br/>
            It is a discipline.
        </p>
      </div>
    </footer>
  );
};