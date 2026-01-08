import React from 'react';
import { Section } from './Section';
import { H2, Paragraph, H3 } from './Typography';

export const Disclaimer: React.FC = () => {
  return (
    <Section className="bg-white border-t border-b border-stone-200">
      <div className="max-w-3xl mx-auto text-center">
        <H3>Clarification</H3>
        <H2 className="mb-8">What poorbaya is not.</H2>
        
        <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-red-800 rounded-full"></span>
                        <span className="font-serif text-stone-700">Not a trading platform</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-red-800 rounded-full"></span>
                        <span className="font-serif text-stone-700">Not a DeFi application</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-red-800 rounded-full"></span>
                        <span className="font-serif text-stone-700">No token speculation</span>
                    </li>
                </ul>
            </div>
            <div>
                 <Paragraph className="text-base italic text-stone-500">
                    We do not facilitate the movement of speculative assets. 
                    Our focus is strictly on the recording of administrative and budgetary data.
                </Paragraph>
            </div>
        </div>
      </div>
    </Section>
  );
};