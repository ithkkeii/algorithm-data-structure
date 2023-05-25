export class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  getData(): number[] {
    return this.data.filter((_, idx) => idx < this.length);
  }

  insert(value: number) {
    this.data[this.length] = value;
    this.heapifyUp(this.length);

    this.length += 1;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const headV = this.data[0];

    if (this.length === 1) {
      this.data = [];
      this.length -= 1;
      return headV;
    }

    // Move last item into head & heapify it down
    const lastV = this.data[this.length - 1];
    this.data[0] = lastV;
    this.length -= 1;
    this.heapifyDown(0);

    return headV;
  }

  private heapifyDown(idx: number): void {
    const lIdx = this.childLeft(idx);
    const rIdx = this.childRight(idx);

    const v = this.data[idx];
    const lV = this.data[lIdx];
    const rV = this.data[rIdx];

    if (idx >= this.length || lIdx >= this.length) {
      return;
    }

    if (lV < rV && v < lV) {
      this.data[lIdx] = v;
      this.data[idx] = lV;

      this.heapifyDown(lIdx);
      return;
    }

    if (rV < lV && v < rV) {
      this.data[rIdx] = v;
      this.data[idx] = rV;

      this.heapifyDown(rIdx);
      return;
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const pIdx = this.parent(idx);
    const pValue = this.data[pIdx];
    const value = this.data[idx];

    if (pValue > value) {
      this.data[idx] = pValue;
      this.data[pIdx] = value;

      this.heapifyUp(pIdx);
    }
  }

  private parent(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  private childLeft(idx: number): number {
    return 2 * idx + 1;
  }

  private childRight(idx: number): number {
    return 2 * idx + 2;
  }
}
