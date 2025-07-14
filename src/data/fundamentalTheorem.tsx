export const ftaSteps = [
    {
      id: '1',
      content: '\\text{Every integer greater than 1 is either prime or can be factored into primes.}',
      hint: <p>This is the statement of the theorem. Start by assuming the contrary.</p>,
    },
    {
      id: '2',
      content: '\\text{Assume there exists a number with two distinct prime factorizations.}',
      hint: <p>This assumption leads to a contradiction using minimal counterexamples.</p>,
    },
    {
      id: '3',
      content: '\\text{Choose the smallest such number and compare its factorizations.}',
      hint: <p>The contradiction arises because prime factorizations must match in prime bases.</p>,
    },
    {
      id: '4',
      content: '\\text{Contradiction implies uniqueness. ∴ Prime factorization is unique.}',
      hint: <p>We’ve ruled out the possibility of two different factorizations.</p>,
    },
  ];
  