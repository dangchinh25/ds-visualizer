export default class TreeNode {
  id: number;
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(id?: number, val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.id = id === undefined ? -1 : id;
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
