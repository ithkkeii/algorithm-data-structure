import { quick_sort } from '.';

it('should be sorted', () => {
  const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const sortedArr = [...arr].sort((a, b) => a - b);

  quick_sort(arr);
  expect(arr).toEqual(sortedArr);
});

it('should be sorted', () => {
  const arr = [1, 10, 8, 7, 2, 3, 4, 1, 7, 2, 10];
  const sortedArr = [...arr].sort((a, b) => a - b);

  quick_sort(arr);
  expect(arr).toEqual(sortedArr);
});
