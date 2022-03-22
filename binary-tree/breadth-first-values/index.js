"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
// 			A
// 		 / \
// 		B   C
// 	 / \   \
// 	D   E   F
// Answer
// -> A, B, C, D, E, F
// Init binary tree;
const A = new __1.TreeNode('A');
const B = new __1.TreeNode('B');
const C = new __1.TreeNode('C');
const D = new __1.TreeNode('D');
const E = new __1.TreeNode('E');
const F = new __1.TreeNode('F');
A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;
const hasChild = (node) => {
    if (node.left !== null || node.right !== null) {
        return true;
    }
    return false;
};
const run = (root) => {
    // Queue of node
    const queue = [];
    const result = [];
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
