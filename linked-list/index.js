"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logLinkedList = exports.LinkedListNode = void 0;
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.LinkedListNode = LinkedListNode;
const logLinkedList = (head) => {
    let tmpHead = head;
    while (tmpHead) {
        console.log(tmpHead.value);
        tmpHead = tmpHead.next;
    }
    console.log(null);
};
exports.logLinkedList = logLinkedList;
