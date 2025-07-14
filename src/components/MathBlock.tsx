// src/components/MathBlock.tsx
// src/components/MathBlock.tsx
import { BlockMath, InlineMath } from 'react-katex';

type MathProps = {
  latex: string;
};

export const MathBlock = ({ latex }: MathProps) => (
  <div className="prose max-w-none my-4">
    <BlockMath math={latex} />
  </div>
);

export const MathInline = ({ latex }: MathProps) => (
  <InlineMath math={latex} />
);

