import { dfs } from '.';

it('should have path', () => {
  const res = dfs(
    [
      [
        { to: 1, weight: 1 },
        { to: 2, weight: 1 },
      ],
      [{ to: 4, weight: 1 }],
      [{ to: 4, weight: 1 }],
      [{ to: 1, weight: 1 }],
      [{ to: 2, weight: 1 }],
    ],
    0,
    4,
  );

  expect(res).toEqual([0, 1, 4]);
});
