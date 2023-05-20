import { bfs } from '.';
import { BinaryNode } from '../prepare';

it('should be exist with path equal [9, 22, 6, 3, 1, 4, 100]', () => {
  const head: BinaryNode<number> = {
    value: 9,
    left: { value: 22, left: { value: 3 }, right: { value: 1 } },
    right: { value: 6, left: { value: 4 }, right: { value: 100 } },
  };

  expect(bfs(head, 100)).toEqual({
    path: [9, 22, 6, 3, 1, 4, 100],
    isExist: true,
  });
});

it('should be exist with path equal [9, 22, 6, 3]', () => {
  const head: BinaryNode<number> = {
    value: 9,
    left: { value: 22, left: { value: 3 }, right: { value: 1 } },
    right: { value: 6, left: { value: 4 }, right: { value: 100 } },
  };

  expect(bfs(head, 3)).toEqual({
    path: [9, 22, 6, 3],
    isExist: true,
  });
});

it('should not exist', () => {
  const head: BinaryNode<number> = {
    value: 9,
    left: { value: 22, left: { value: 3 }, right: { value: 1 } },
    right: { value: 6, left: { value: 4 }, right: { value: 100 } },
  };

  expect(bfs(head, 10000)).toEqual({
    path: [],
    isExist: false,
  });
});
