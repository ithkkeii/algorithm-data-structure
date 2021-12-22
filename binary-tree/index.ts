export type NodeChild = TreeNode | null;

export class TreeNode {
  public value: string | number;
  public left: NodeChild;
  public right: NodeChild;

  constructor(
    value: string | number,
    left: NodeChild = null,
    right: NodeChild = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export const hasChild = (node: TreeNode): boolean => {
  if (node.left !== null || node.right !== null) {
    return true;
  }

  return false;
};
