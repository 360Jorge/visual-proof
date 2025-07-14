import React, { useState } from 'react';
import ProofWithSteps from './ProofWithSteps';

import { proofSteps as sqrt2Steps } from '../data/sqrt2Steps';
import { ftaSteps } from '../data/fundamentalTheorem';
import { pigeonholeSteps } from '../data/pigeonhole';

type ProofOption = 'sqrt2' | 'fta' | 'pigeonhole';

const proofMap: Record<ProofOption, { title: string; steps: typeof sqrt2Steps }> = {
  sqrt2: { title: '√2 is Irrational', steps: sqrt2Steps },
  fta: { title: 'Fundamental Theorem of Arithmetic', steps: ftaSteps },
  pigeonhole: { title: 'Pigeonhole Principle', steps: pigeonholeSteps },
};

export default function ProofSelector() {
  const [selectedProof, setSelectedProof] = useState<ProofOption | null>(null);

  if (!selectedProof) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-6">Choose a Proof to Explore</h1>
        <div className="space-y-4">
          {Object.entries(proofMap).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setSelectedProof(key as ProofOption)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const { title, steps } = proofMap[selectedProof];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <button
        onClick={() => setSelectedProof(null)}
        className="mb-4 text-blue-600 underline hover:text-blue-800"
      >
        ← Back to proof list
      </button>
      <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
      <ProofWithSteps steps={steps} />
    </div>
  );
}
