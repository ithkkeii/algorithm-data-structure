import { hasChild, TreeNode } from '..';

// 			A(1)
// 		 / \
//  B(2) C(3)
// 	 / \   \
//D(4) E(5) F(6)

// + A -> B -> D = 7
// + A -> B -> E = 8
// + A -> C -> F = 10
// Answer
// -> 10

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

// Recursive find max path
const maxPathSum = (node: TreeNode): number => {
  if (node === null) return -Infinity;

  if (!hasChild(node)) return Number(node.value);

  const maxChildPathSum = Math.max(
    maxPathSum(node.left),
    maxPathSum(node.right)
  );

  return Number(node.value) + maxChildPathSum;
};

const run = (root: TreeNode): number => {
  const result = maxPathSum(root);

  return result;
};

console.log(run(A));
