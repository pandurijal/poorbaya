import React from 'react';
import { Section } from './Section';
import { H2, Paragraph, H3 } from './Typography';

export const WhyBlockchain: React.FC = () => {
  return (
    <Section className="bg-stone-100/50">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <H3>Technology</H3>
          <H2>Why a blockchain ledger?</H2>
        </div>
        <div className="md:w-1/2">
          <Paragraph className="mb-6">
            We use blockchain solely for its properties as a distributed, tamper-evident database.
          </Paragraph>
          <Paragraph>
            Traditional databases rely on a single administrator who can modify records. 
            A blockchain ledger removes the "super-user" risk, ensuring that the financial record remains the single source of truth, regardless of administrative changes or internal politics.
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};