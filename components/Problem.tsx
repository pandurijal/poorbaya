import React from 'react';
import { Section } from './Section';
import { H2, Paragraph, H3 } from './Typography';
import { FileWarning, MessageSquareOff } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <H3>The Administrative Gap</H3>
          <H2>Informal spending lacks accountability.</H2>
        </div>
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <FileWarning className="w-6 h-6 text-stone-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-serif font-medium text-ink mb-2">Undocumented Approvals</p>
              <Paragraph className="text-base">
                Infrastructure budgets are often approved via ephemeral chat messages or verbal agreements. 
                These records are difficult to audit and easy to dispute.
              </Paragraph>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <MessageSquareOff className="w-6 h-6 text-stone-400 mt-1 flex-shrink-0" />
            <div>
              <p className="font-serif font-medium text-ink mb-2">Drift & Amnesia</p>
              <Paragraph className="text-base">
                Without a rigid ledger, organizations lose track of who authorized what. 
                Historical context erodes, leading to financial inefficiency.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};