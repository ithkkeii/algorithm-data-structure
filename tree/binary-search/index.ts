export function bs_list(haystack: number[], needle: number): boolean {
  // Include lo, Exclude hi

  let lo = 0;
  let hi = haystack.length;

  while (lo < hi) {
    // also works: const middle = Math.floor(lo + (hi - lo) / 2);
    const middle = Math.floor((lo + hi) / 2);
    const value = haystack[middle];

    if (value === needle) {
      return true;
    }

    if (value > needle) {
      hi = middle;
    }

    if (value < needle) {
      lo = middle + 1;
    }
  }

  return false;
}
