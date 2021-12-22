import { LinkedListNode, logLinkedList } from '..';

// A -> B -> C -> null
// Answer
// C -> B -> A -> null

// Init linked list
const C = new LinkedListNode('C');
const B = new LinkedListNode('B', C);
const A = new LinkedListNode('A', B);

const reverseLinkedList = (head: LinkedListNode) => {
  let node = head;
  // temp pointer
  let tmp: null | LinkedListNode = null;
  // prev pointer
  let prev: null | LinkedListNode = null;

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
const reversedLinkedListRecursive = (node: LinkedListNode) => {
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
