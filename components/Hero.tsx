import React from 'react';
import { Paragraph, MonoText } from './Typography';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto py-20">
      <div className="mb-10">
        <MonoText className="block mb-6 text-xs tracking-widest uppercase text-stone-500">
          Established 2025
        </MonoText>
        
        <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tighter text-ink mb-8 -ml-1 md:-ml-2 leading-none uppercase">
          POORBAYA
        </h1>

        <h2 className="font-serif text-2xl md:text-4xl leading-tight text-ink mb-10 max-w-3xl font-medium">
          A web3 ledger for budgets, approvals, and accountability.
        </h2>

        <Paragraph className="max-w-2xl text-lg md:text-xl text-stone-600 border-l-4 border-stone-200 pl-6 py-1">
          Poorbaya provides an immutable record for infrastructure decision-making. 
          We replace informal agreements with cryptographic verification.
        </Paragraph>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-5 mt-12">
        <button className="px-8 py-4 bg-ink text-paper font-mono text-sm border border-ink hover:bg-transparent hover:text-ink transition-colors duration-200">
          READ THE TECHNICAL PAPER
        </button>
        <button className="px-8 py-4 bg-transparent text-ink font-mono text-sm border border-border hover:border-ink transition-colors duration-200">
          VIEW AUDIT LOGS
        </button>
      </div>
    </div>
  );
};
