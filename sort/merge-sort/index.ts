function merge(arr1: number[], arr2: number[]): number[] {
  if (arr1.length === 0) return arr2;

  if (arr2.length === 0) return arr1;

  const result = [] as number[];

  while (arr1.length && arr2.length) {
    if (arr1[0] >= arr2[0]) {
      result.push(arr2.shift() as number);
    } else {
      result.push(arr1.shift() as number);
    }
  }

  return [...result, ...arr1, ...arr2];
}

export function merge_sort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const m = Math.floor(arr.length / 2);

  const arr1 = merge_sort(arr.filter((_, idx) => idx < m));
  const arr2 = merge_sort(arr.filter((_, idx) => idx >= m));

  return merge(arr1, arr2);
}
