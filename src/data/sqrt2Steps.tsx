import { MathInline } from '../components/MathBlock';

export const proofSteps = [
  {
    id: '1',
    content: '\\text{ Assume } \\sqrt{2} = \\frac{a}{b} \\text{ with integers } a, b \\text{ in lowest terms.}',
    hint: (
      <p>
        This sets up our proof by contradiction. We’re assuming <MathInline latex="\sqrt{2}" /> is rational.
      </p>
    ),
  },
  {
    id: '2',
    content: '2 = \\frac{a^2}{b^2} \\Rightarrow a^2 = 2b^2',
    hint: <p>We square both sides to eliminate the radical.</p>,
  },
  {
    id: '3',
    content: 'a^2 \\text{ is even, so } a \\text{ is even } \\Rightarrow a = 2k',
    hint: (
      <p>
        Only even numbers square to even numbers. Thus, <MathInline latex="a" /> must be even.
      </p>
    ),
  },
  {
    id: '4',
    content: 'a^2 = 4k^2 = 2b^2 \\Rightarrow b^2 = 2k^2 \\Rightarrow b \\text{ is even.}',
    hint: (
      <p>
        Rewriting and simplifying shows <MathInline latex="b" /> must also be even.
      </p>
    ),
  },
  {
    id: '5',
    content: 'a \\text{ and } b \\text{ are both even — contradicting the lowest terms assumption!}',
    hint: (
      <p>
        A contradiction! <MathInline latex="a" /> and <MathInline latex="b" /> share a factor, breaking our assumption.
      </p>
    ),
  },
  {
    id: '6',
    content: '\\boxed{\\text{Therefore, }\\sqrt{2}\\text{ is irrational.}}',
    hint: <p>Q.E.D. 💥</p>,
  },
];
