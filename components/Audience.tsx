import React from 'react';
import { Section } from './Section';
import { H2, H3 } from './Typography';

const AudienceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-l-2 border-stone-300 pl-6 py-2">
    <h4 className="font-serif text-lg font-medium text-ink mb-2">{title}</h4>
    <p className="font-sans text-stone-600 leading-relaxed text-sm">{description}</p>
  </div>
);

export const Audience: React.FC = () => {
  return (
    <Section>
      <H3>Primary Users</H3>
      <H2>Built for infrastructure.</H2>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <AudienceCard 
          title="Engineering Teams" 
          description="Track AWS/GCP spend approvals and software license purchases with strict version control." 
        />
        <AudienceCard 
          title="Growing SaaS" 
          description="Maintain financial discipline as you scale. Move from 'startup chaos' to 'enterprise auditability'." 
        />
        <AudienceCard 
          title="Consortiums" 
          description="Multi-party organizations where no single entity should hold the master keys to the financial record." 
        />
      </div>
    </Section>
  );
};