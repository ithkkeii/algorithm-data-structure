import { TreeNode } from '..';

// 			A
// 		 / \
// 		B   C
// 	 / \   \
// 	D   E   F

// Answer
// -> A, B, D, E, C, F

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
  // Stack of node
  const stack: TreeNode[] = [];
  const result: (string | number)[] = [];

  // Push root into stack first
  stack.push(root);

  while (stack.length !== 0) {
    const treeNode = stack.pop();
    result.push(treeNode.value);

    if (hasChild(treeNode)) {
      if (treeNode.right) {
        stack.push(treeNode.right);
      }

      if (treeNode.left) {
        stack.push(treeNode.left);
      }
    }
  }

  return result;
};

console.log(run(A));
