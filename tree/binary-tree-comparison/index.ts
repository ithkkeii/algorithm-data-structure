//-----9-----
//---/---\---
//--22----6--

import { BinaryNode } from '../prepare';

//-----9-----
//---/-------
//--22-------
//-/--------
//6---------

// NOTE: depth-first-search preserve the shape of traversal, breadth-first-search not

export const compare = (
  a: BinaryNode<number> | undefined,
  b: BinaryNode<number> | undefined,
): boolean => {
  // structure
  if (a === undefined && b === undefined) {
    return true;
  }

  // structure 1 of theme is undefined
  if (a === undefined || b === undefined) {
    return false;
  }

  // value compare
  if (a?.value !== b?.value) {
    return false;
  }

  // structure
  if (a === undefined && b === undefined) {
    return true;
  }

  return compare(a?.left, b?.left) && compare(a?.right, b?.right);
};
