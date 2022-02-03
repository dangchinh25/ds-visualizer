import { TreeNode } from "../data-structure/tree";
import BaseDOTGraph from "./base";

export default class TreeDOTGraph extends BaseDOTGraph {
  constructor() {
    super(`digraph G {`);
  }

  addEdge(startNode: TreeNode, endNode: TreeNode): void {
    this.dotStr += `${startNode.id} -> ${endNode.id};`;
  }
  addNode(node: TreeNode): void {
    this.dotStr += `${node.id} [label="${node.val}"];`;
  }
}
