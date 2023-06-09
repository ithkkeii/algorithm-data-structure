import { bfs } from '.';

it('should have path', () => {
  const res = bfs(
    [
      [0, 5, 0, 0, 0],
      [0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    0,
    4,
  );

  expect(res).toEqual([0, 1, 4]);
});

it('should not have path', () => {
  const res = bfs(
    [
      [0, 5, 0, 0, 0],
      [0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    0,
    2,
  );

  expect(res).toEqual(null);
});
