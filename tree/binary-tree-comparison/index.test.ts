import { compare } from '.';
import { BinaryNode } from '../prepare';

it('should be equal [3, 22, 1, 9, 4, 6, 100]', () => {
  const a: BinaryNode<number> = {
    value: 9,
    left: { value: 22 },
    right: { value: 6 },
  };

  const b: BinaryNode<number> = {
    value: 9,
    left: { value: 22, left: { value: 6 } },
  };

  expect(compare(a, b)).toEqual(false);
});
