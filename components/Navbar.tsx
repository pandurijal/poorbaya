import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 border-b border-border flex justify-between items-center bg-paper sticky top-0 z-50">
      <div className="font-serif font-bold text-xl tracking-tight text-ink">
        poorbaya
      </div>
      <div className="hidden md:flex space-x-8">
        <span className="font-mono text-xs text-subtle cursor-not-allowed opacity-50">DOCUMENTATION</span>
        <span className="font-mono text-xs text-subtle cursor-not-allowed opacity-50">GOVERNANCE</span>
        <span className="font-mono text-xs text-ink cursor-pointer hover:underline underline-offset-4">LOGIN</span>
      </div>
    </nav>
  );
};