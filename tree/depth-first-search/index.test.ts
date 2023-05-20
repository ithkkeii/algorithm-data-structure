import { pre_order_search } from '.';
import { BinaryNode } from '../prepare';

it('should be equal [3, 22, 1, 9, 4, 6, 100]', () => {
  const head: BinaryNode<number> = {
    value: 9,
    left: { value: 22, left: { value: 3 }, right: { value: 1 } },
    right: { value: 6, left: { value: 4 }, right: { value: 100 } },
  };

  expect(pre_order_search(head)).toEqual([3, 22, 1, 9, 4, 6, 100]);
});
