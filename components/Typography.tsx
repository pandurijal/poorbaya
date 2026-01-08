import React from 'react';

export const H1: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-ink ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`font-serif text-2xl md:text-3xl font-medium tracking-tight text-ink mb-6 ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h3 className={`font-sans text-lg font-semibold tracking-normal text-ink mb-2 uppercase text-xs tracking-widest ${className}`}>
    {children}
  </h3>
);

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <p className={`font-serif text-lg leading-relaxed text-subtle ${className}`}>
    {children}
  </p>
);

export const MonoText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`font-mono text-sm text-subtle ${className}`}>
    {children}
  </span>
);