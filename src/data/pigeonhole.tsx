import { MathInline } from '../components/MathBlock';

export const pigeonholeSteps = [
  {
    id: '1',
    content: '\\text{Suppose we have } 10 \\text{ pigeons and } 9 \\text{ pigeonholes.}',
    hint: (
      <p>
        Think of each pigeon needing a hole. But there are more pigeons than holes!
      </p>
    ),
  },
  {
    id: '2',
    content: '\\text{Each pigeon must be placed into a pigeonhole.}',
    hint: (
      <p>
        The principle applies only if every pigeon is assigned to a hole.
      </p>
    ),
  },
  {
    id: '3',
    content: '\\text{By the pigeonhole principle, at least one hole must contain more than one pigeon.}',
    hint: (
      <p>
        Formally: if you place <MathInline latex="n + 1" /> items into <MathInline latex="n" /> containers, one container gets more than one item.
      </p>
    ),
  },
  {
    id: '4',
    content: '\\therefore \\text{At least one pigeonhole contains at least two pigeons.}',
    hint: (
      <p>
        This concludes the argument — the contradiction proves the principle.
      </p>
    ),
  },
];
