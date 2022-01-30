import TreeNode from "./treeNode";

export default class BinaryTree {
  root: TreeNode;

  constructor(nodes: number[]) {
    if (!nodes) {
      throw Error("The tree must have at least 1 node.");
    }

    this.root = BinaryTree.buildTree(nodes);
  }

  static buildTree(nodes: number[]): TreeNode {
    let nodeIndex = 0;
    const root = new TreeNode(nodes[nodeIndex]);
    const queue = [root];

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const curNode = queue.shift();

        const leftVal = nodes[++nodeIndex];
        if (leftVal) {
          curNode.left = new TreeNode(leftVal);
          queue.push(curNode.left);
        }

        const rightVal = nodes[++nodeIndex];
        if (rightVal) {
          curNode.right = new TreeNode(rightVal);
          queue.push(curNode.right);
        }
      }
    }

    return root;
  }

  preorderTraversal() {
    const nodeVals: number[] = [];
    this.preorderHelper(this.root, nodeVals);

    return nodeVals;
  }

  inorderTraversal() {
    const nodeVals: number[] = [];
    this.inorderHelper(this.root, nodeVals);

    return nodeVals;
  }

  postorderTraversal() {
    const nodeVals: number[] = [];
    this.postorderHelper(this.root, nodeVals);

    return nodeVals;
  }

  private preorderHelper(node: TreeNode, current: number[]) {
    if (node) {
      current.push(node.val);
      this.preorderHelper(node.left, current);
      this.preorderHelper(node.right, current);
    }
  }

  private inorderHelper(node: TreeNode, current: number[]) {
    if (node) {
      this.preorderHelper(node.left, current);
      current.push(node.val);
      this.preorderHelper(node.right, current);
    }
  }

  private postorderHelper(node: TreeNode, current: number[]) {
    if (node) {
      this.preorderHelper(node.left, current);
      this.preorderHelper(node.right, current);
      current.push(node.val);
    }
  }
}
