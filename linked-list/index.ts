export type LinkedListNodeValue = string | number;

export class LinkedListNode {
  value: LinkedListNodeValue;
  next: LinkedListNode | null;

  constructor(value: LinkedListNodeValue, next: LinkedListNode = null) {
    this.value = value;
    this.next = next;
  }
}

export const logLinkedList = (head: LinkedListNode) => {
  let tmpHead = head;

  while (tmpHead) {
    console.log(tmpHead.value);

    tmpHead = tmpHead.next;
  }

  console.log(null);
};
