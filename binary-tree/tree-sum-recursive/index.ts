import { TreeNode } from '..';

// 			A(1)
// 		 / \
//  B(2) C(3)
// 	 / \   \
//D(4) E(5) F(6)

// Answer
// -> 21

// Init binary tree;
const A = new TreeNode(1);
const B = new TreeNode(2);
const C = new TreeNode(3);
const D = new TreeNode(4);
const E = new TreeNode(5);
const F = new TreeNode(6);

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;

// Recursive sum
const sum = (node: TreeNode): number => {
  if (node === null) return 0;

  return Number(node.value) + sum(node.left) + sum(node.right);
};

const run = (root: TreeNode): number => {
  const result = sum(root);

  return result;
};

console.log(run(A));
