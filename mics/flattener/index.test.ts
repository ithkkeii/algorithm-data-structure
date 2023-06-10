import { flattener, rFlattener } from '.';

it('[flattener] should return proper flattened array', () => {
  const arr = [1, 2, 3, 4];
  const result = flattener([...arr]);

  expect(result).toEqual([...arr]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([[1, 2], 3, 4, 5]);

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([[1, 2], [3, 4], 5, 6]);

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([[1, 2], [3, 4], 5, [6, 7, 8]]);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([[1, 2], [3, 4], 5, [6, 7, 8, [9, 10]]]);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([[1, 2], [3, 4], 5, [[6, 7], 8, [9, 10]]]);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([
    [1, 2],
    [3, 4],
    5,
    [
      [6, 7, 8],
      [9, 10],
    ],
  ]);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('[flattener] should return proper flattened array', () => {
  const result = flattener([
    [1, 2],
    [3, 4],
    5,
    [
      [6, 7, 8],
      [9, [10, 11]],
    ],
  ]);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result: number[] = [];
  const arr = [1, 2, 3, 4];
  rFlattener([...arr], result);

  expect(result).toEqual([...arr]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener([[1, 2], 3, 4, 5], result);

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener([[1, 2], [3, 4], 5, 6], result);

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener([[1, 2], [3, 4], 5, [6, 7, 8]], result);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener([[1, 2], [3, 4], 5, [6, 7, 8, [9, 10]]], result);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener([[1, 2], [3, 4], 5, [[6, 7], 8, [9, 10]]], result);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener(
    [
      [1, 2],
      [3, 4],
      5,
      [
        [6, 7, 8],
        [9, 10],
      ],
    ],
    result,
  );

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('[r-flattener] should return proper flattened array', () => {
  const result = [] as number[];
  rFlattener(
    [
      [1, 2],
      [3, 4],
      5,
      [
        [6, 7, 8],
        [9, [10, 11]],
      ],
    ],
    result,
  );

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});
