import React from 'react';
import { Section } from './Section';
import { H2, Paragraph, H3, MonoText } from './Typography';
import { ShieldCheck, Clock, FileText } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <Section>
      <div className="mb-12">
        <H3>The Mechanism</H3>
        <H2>Record decisions on-chain.</H2>
        <Paragraph className="max-w-2xl">
          Poorbaya utilizes blockchain technology strictly as a permanent, append-only database. 
          Every budget request and approval is cryptographically signed and timestamped.
        </Paragraph>
      </div>

      <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-8">
        <div className="space-y-4">
          <ShieldCheck className="w-8 h-8 text-stone-800" strokeWidth={1.5} />
          <h4 className="font-serif text-lg font-medium">Immutability</h4>
          <p className="text-stone-600 font-sans text-sm leading-relaxed">
            Once a budget is recorded, it cannot be altered or deleted. The history of the organization is preserved exactly as it occurred.
          </p>
        </div>
        
        <div className="space-y-4">
          <Clock className="w-8 h-8 text-stone-800" strokeWidth={1.5} />
          <h4 className="font-serif text-lg font-medium">Verifiable Timestamps</h4>
          <p className="text-stone-600 font-sans text-sm leading-relaxed">
            Every action is time-bound to the block it was included in. This creates an indisputable timeline of events for audits.
          </p>
        </div>

        <div className="space-y-4">
          <FileText className="w-8 h-8 text-stone-800" strokeWidth={1.5} />
          <h4 className="font-serif text-lg font-medium">Cryptographic Signatures</h4>
          <p className="text-stone-600 font-sans text-sm leading-relaxed">
            Approvals are signed by private keys held by authorized personnel. Identity is mathematical, not just a username.
          </p>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-stone-100 border border-stone-200 rounded-sm">
        <MonoText className="block text-xs text-stone-500 mb-2">SAMPLE LEDGER ENTRY</MonoText>
        <div className="font-mono text-sm text-stone-800 overflow-x-auto">
          <p>{`{`}</p>
          <p className="pl-4">{`"id": "0x7a2...3f9",`}</p>
          <p className="pl-4">{`"type": "BUDGET_APPROVAL",`}</p>
          <p className="pl-4">{`"timestamp": "2024-10-24T08:42:11Z",`}</p>
          <p className="pl-4">{`"amount": 50000.00,`}</p>
          <p className="pl-4">{`"currency": "USD",`}</p>
          <p className="pl-4">{`"approver": "0x12c...9e2",`}</p>
          <p className="pl-4">{`"department": "INFRASTRUCTURE_CORE"`}</p>
          <p>{`}`}</p>
        </div>
      </div>
    </Section>
  );
};