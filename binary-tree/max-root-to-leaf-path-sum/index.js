"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
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
const A = new __1.TreeNode(1);
const B = new __1.TreeNode(2);
const C = new __1.TreeNode(3);
const D = new __1.TreeNode(4);
const E = new __1.TreeNode(5);
const F = new __1.TreeNode(6);
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;
// Recursive find max path
const maxPathSum = (node) => {
    if (node === null)
        return -Infinity;
    if (!(0, __1.hasChild)(node))
        return Number(node.value);
    const maxChildPathSum = Math.max(maxPathSum(node.left), maxPathSum(node.right));
    return Number(node.value) + maxChildPathSum;
};
const run = (root) => {
    const result = maxPathSum(root);
    return result;
};
console.log(run(A));
