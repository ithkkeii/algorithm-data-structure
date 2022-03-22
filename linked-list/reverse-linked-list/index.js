"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
// A -> B -> C -> null
// Answer
// C -> B -> A -> null
// Init linked list
const C = new __1.LinkedListNode('C');
const B = new __1.LinkedListNode('B', C);
const A = new __1.LinkedListNode('A', B);
const reverseLinkedList = (head) => {
    let node = head;
    // temp pointer
    let tmp = null;
    // prev pointer
    let prev = null;
    while (node) {
        // swap
        tmp = node.next;
        node.next = prev;
        prev = node;
        // step forward in the list
        node = tmp;
    }
    return prev;
};
let recursiveLinkedListHead = null;
const reversedLinkedListRecursive = (node) => {
    // find the tail
    if (node.next === null) {
        // remember head for log
        recursiveLinkedListHead = node;
        return node;
    }
    let tmp = reversedLinkedListRecursive(node.next);
    tmp.next = node;
    tmp.next.next = null;
    return node;
};
// logLinkedList(reverseLinkedList(A));
console.log('recursive');
// reversedLinkedListRecursive(A);
// logLinkedList(recursiveLinkedListHead);
// O(n) time & O(n) space
// Example
function reverse(head) {
    if (!head.next) {
        return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
}
// console.log(reverse(A));
