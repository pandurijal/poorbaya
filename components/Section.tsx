import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, noBorder = false }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto ${noBorder ? '' : 'border-t border-border'} ${className}`}>
      {children}
    </section>
  );
};