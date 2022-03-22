"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
// 			A(1)
// 		 / \
//  B(2) C(3)
// 	 / \   \
//D(4) E(5) F(6)
// Answer
// -> 21
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
// Recursive sum
const sum = (node) => {
    if (node === null)
        return 0;
    return Number(node.value) + sum(node.left) + sum(node.right);
};
const run = (root) => {
    const result = sum(root);
    return result;
};
console.log(run(A));
