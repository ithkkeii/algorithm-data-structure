"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasChild = exports.TreeNode = void 0;
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
exports.TreeNode = TreeNode;
const hasChild = (node) => {
    if (node.left !== null || node.right !== null) {
        return true;
    }
    return false;
};
exports.hasChild = hasChild;
