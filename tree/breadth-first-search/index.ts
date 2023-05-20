import { BinaryNode } from '../prepare';

//-----9-----
//---/---\---
//--22----6--
//-/-\---/-\-
//3---1-4---100
// response should be 9,22,6,3,1,4,100

export const bfs = (
  head: BinaryNode<number>,
  needle: number
): { path: number[]; isExist: boolean } => {
  const queue: BinaryNode<number>[] = [head];
  const path: number[] = [];

  while (queue.length !== 0) {
    // length !== 0, node should be exist
    const curr = queue.shift()!;

    path.push(curr.value);
    if (curr.value === needle) {
      return { path, isExist: true };
    }

    if (curr?.left) {
      queue.push(curr.left);
    }

    if (curr?.right) {
      queue.push(curr.right);
    }
  }

  return { path: [], isExist: false };
};
