import { BinaryNode } from '../prepare';

//-----9-----
//---/---\---
//--22----6--
//-/-\---/-\-
//3---1-4---100
// response should be 3,22,1,9,4,6,100

const walk = (
  curr: BinaryNode<number> | undefined,
  path: number[]
): number[] => {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
};

export const pre_order_search = (head: BinaryNode<number>): number[] => {
  const path: number[] = [];
  walk(head, path);

  return path;
};
