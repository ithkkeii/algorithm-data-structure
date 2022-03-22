class AVLNode {
  value: number;
  leftChild: AVLNode | null = null;
  rightChild: AVLNode | null = null;
  height: number = 0;
  balanceFactor: number = 1;

  constructor(value: number) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

class AVLTree {
  public root: AVLNode | null = null;

  insert(value: number) {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(root: AVLNode | null, value: number): AVLNode {
    if (root === null) return new AVLNode(value);

    if (value < root.value) {
      root.leftChild = this.insertNode(root.leftChild, value);
    } else {
      root.rightChild = this.insertNode(root.rightChild, value);
    }

    root.height =
      Math.max(this.height(root.leftChild), this.height(root.rightChild)) + 1;

    root = this.balance(root);

    return root;
  }

  private balance(node: AVLNode): AVLNode {
    // Note:
    // 10
    // 	20 ( 0 - 1 = -1)
    // 		30
    // -> leftRotate(10)
    // 10
    // 	30 ( 1 - 0 = 1)
    // 20
    // -> rightRotate(30)
    // -> leftRotate(10)
    if (this.isRightHeavy(node)) {
      const balanceFactor = this.balanceFactor(node.rightChild);
      if (balanceFactor > 0) {
        node.rightChild = this.rightRotate(node.rightChild!);
      }
      return this.leftRotate(node);
    }

    if (this.isLeftHeavy(node)) {
      const balanceFactor = this.balanceFactor(node.leftChild);
      if (balanceFactor >= 1) {
        console.log(`rightRotate(${node.value})`);
      } else {
        console.log(`leftRotate(${node.rightChild?.value})`);
        console.log(`rightRotate(${node.value})`);
      }
    }

    return node;
  }

  private leftRotate(root: AVLNode): AVLNode {
    // Note 2 cases:
    //10
    //	20
    //		30
    //---
    //	20
    //10	30
    // -> 20 become new root
    //---
    //10
    //	20
    //15	30
    //---
    //	 20
    //10		30
    //	15
    // -> 20 become new root
    // -> 15 become right child of 10
    // Finally remember reset prevRoot/newRoot height

    const newRoot = root.rightChild!;
    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  private rightRotate(root: AVLNode): AVLNode {
    const newRoot = root.leftChild!;
    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  private setHeight(node: AVLNode) {
    node.height =
      Math.max(this.height(node.leftChild) + this.height(node.rightChild)) + 1;
  }

  private isLeftHeavy(node: AVLNode | null) {
    return this.balanceFactor(node) > 1;
  }

  private isRightHeavy(node: AVLNode | null) {
    return this.balanceFactor(node) < -1;
  }

  private balanceFactor(node: AVLNode | null) {
    // balanceFactor = height(L) - height(R)
    // > 1 => left heavy
    // < -1 => right heavy
    return node === null
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  }

  private height(node: AVLNode | null) {
    return node !== null ? node.height : -1;
  }
}

const run = () => {
  const tree = new AVLTree();
  tree.insert(10);
  tree.insert(20);
  tree.insert(15);
  tree.insert(30);
};

run();
