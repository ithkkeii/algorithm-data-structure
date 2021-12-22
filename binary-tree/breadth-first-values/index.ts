import { TreeNode } from '..';

// 			A
// 		 / \
// 		B   C
// 	 / \   \
// 	D   E   F

// Answer
// -> A, B, C, D, E, F

// Init binary tree;
const A = new TreeNode('A');
const B = new TreeNode('B');
const C = new TreeNode('C');
const D = new TreeNode('D');
const E = new TreeNode('E');
const F = new TreeNode('F');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;

const hasChild = (node: TreeNode): boolean => {
  if (node.left !== null || node.right !== null) {
    return true;
  }

  return false;
};

const run = (root: TreeNode): (string | number)[] => {
  // Queue of node
  const queue: TreeNode[] = [];
  const result: (string | number)[] = [];

  // Push root into queue first
  queue.push(root);

  while (queue.length !== 0) {
    const treeNode = queue.shift();
    result.push(treeNode.value);

    if (hasChild(treeNode)) {
      if (treeNode.left) {
        queue.push(treeNode.left);
      }

      if (treeNode.right) {
        queue.push(treeNode.right);
      }
    }
  }

  return result;
};

console.log(run(A));
