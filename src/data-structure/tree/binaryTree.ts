// eslint-disable-next-line @typescript-eslint/no-var-requires
const Viz = require("viz.js");
import fs from "fs";

import { TreeDOTGraph } from "../../dotgraph";
import BaseVisualizer from "../base";
import TreeNode from "./treeNode";

export default class BinaryTree extends BaseVisualizer {
  root: TreeNode;

  constructor(nodes: number[]) {
    super();
    if (!nodes) {
      throw Error("The tree must have at least 1 node.");
    }

    this.root = BinaryTree.buildTree(nodes);
  }

  static buildTree(nodes: number[]): TreeNode {
    let nodeIndex = 0;
    let curNodeId = 1;

    const root = new TreeNode(curNodeId, nodes[nodeIndex]);
    const queue = [root];

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const curNode = queue.shift();

        const leftVal = nodes[++nodeIndex];
        if (leftVal) {
          curNode.left = new TreeNode(++curNodeId, leftVal);
          queue.push(curNode.left);
        }

        const rightVal = nodes[++nodeIndex];
        if (rightVal) {
          curNode.right = new TreeNode(++curNodeId, rightVal);
          queue.push(curNode.right);
        }
      }
    }

    return root;
  }

  buildDOT() {
    const queue = [this.root];
    const treeDOTGraph = new TreeDOTGraph();

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const curNode = queue.shift();

        treeDOTGraph.addNode(curNode);

        if (curNode.left) {
          treeDOTGraph.addEdge(curNode, curNode.left);
          queue.push(curNode.left);
        }

        if (curNode.right) {
          treeDOTGraph.addEdge(curNode, curNode.right);
          queue.push(curNode.right);
        }
      }
    }

    return treeDOTGraph.getDOTStr();
  }

  visualize(outputDir: string): void {
    const dotGraph = this.buildDOT();

    const outputContent = Viz(dotGraph, {
      format: "svg",
      engine: "dot"
    });
    fs.writeFileSync(outputDir, outputContent);
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
