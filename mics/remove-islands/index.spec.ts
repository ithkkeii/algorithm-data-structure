import { removeIslands } from '.';

test('should match all test cases', () => {
  expect(
    removeIslands([
      [1, 0, 0, 1, 0],
      [0, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ])
  ).toMatchObject([
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ]);
});
