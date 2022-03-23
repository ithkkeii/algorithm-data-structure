export class Heap {
  private items: number[] = [...Array(10).keys()].map(() => 0);
  private size: number = 0;

  remove() {
    if (this.isEmpty()) throw new Error('Heap is empty');

    const removedItem = this.items[0];

    this.items[0] = this.items[this.size - 1];
    this.size -= 1;

    this.bubbleDown();

    return removedItem;
  }

  private bubbleDown() {
    let index = 0;
    while (index <= this.size && !this.isValidParent(index)) {
      const largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);

      index = largerChildIndex;
    }
  }

  private largerChildIndex(index: number) {
    // we always fill tree left to right
    if (!this.hasLeftChild(index)) return index;

    if (!this.hasRightChild(index)) return this.getLeftChildIndex(index);

    return this.leftChild(index) > this.rightChild(index)
      ? this.getLeftChildIndex(index)
      : this.getRightChildIndex(index);
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.size;
  }

  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.size;
  }

  private isValidParent(index: number) {
    if (!this.hasLeftChild(index)) return true;

    let isValid = this.items[index] >= this.leftChild(index);

    if (this.hasRightChild(index))
      isValid &&= this.items[index] >= this.rightChild(index);

    return isValid;
  }

  private leftChild(index: number) {
    return this.items[this.getLeftChildIndex(index)];
  }

  private rightChild(index: number) {
    return this.items[this.getRightChildIndex(index)];
  }

  private getLeftChildIndex(position: number) {
    return position * 2 + 1;
  }

  private getRightChildIndex(position: number) {
    return position * 2 + 2;
  }

  insert(value: number) {
    if (this.isFull()) throw new Error('Heap overflow');

    this.items[this.size] = value;
    this.size += 1;

    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this.size - 1;
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.items[index] > this.items[parentIndex]) {
      this.swap(index, parentIndex);

      // reset index
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  private getParentIndex(position: number) {
    return Math.floor((position - 1) / 2);
  }

  private swap(first: number, second: number) {
    const temp = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = temp;
  }

  isFull() {
    return this.size === this.items.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  info() {
    console.log(this.items.filter((_, index) => index < this.size));
  }
}

class PriorityQueueWithHeap {
  private heap: Heap = new Heap();

  enqueue(value: number) {
    this.heap.insert(value);
  }

  dequeue() {
    return this.heap.remove();
  }
}

const heapify = (arr: number[], index: number) => {
  console.log(arr);
  let largerIndex = index;

  const leftIndex = index * 2 + 1;
  if (leftIndex < arr.length && arr[leftIndex] > arr[largerIndex]) {
    largerIndex = leftIndex;
  }

  const rightIndex = index * 2 + 2;
  if (rightIndex < arr.length && arr[rightIndex] > arr[largerIndex]) {
    largerIndex = rightIndex;
  }

  if (largerIndex === index) return;

  const temp = arr[index];
  arr[index] = arr[largerIndex];
  arr[largerIndex] = temp;

  heapify(arr, largerIndex);
};

const runHeap = () => {
  let arr = [4, 5, 3, 10, 1, 4, 2, 1];
  const heap = new Heap();

  arr.forEach((value) => heap.insert(value));
  heap.info();

  // for (let index = 0; index < arr.length; index++) {
  //   arr[index] = heap.remove();
  // }

  for (let index = arr.length - 1; index >= 0; index--) {
    arr[index] = heap.remove();
  }

  const heapifyArr = [5, 3, 8, 4, 1, 2];
  for (let i = 0; i < heapifyArr.length; i++) {
    heapify(heapifyArr, i);
  }

  console.log(heapifyArr);
};

runHeap();
