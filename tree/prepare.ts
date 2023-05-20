export class BinaryNode<T> {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;

  constructor(value: T) {
    this.value = value;
  }
}
