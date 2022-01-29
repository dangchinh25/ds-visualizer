import BaseDOTGraph from "./base";

export default class TreeDOTGraph extends BaseDOTGraph {
  addEdge(startNode: string | number, endNode: string | number): void {
    this.dotStr += `${startNode} -> ${endNode};`;
  }
  addNode(node: string | number): void {
    this.dotStr += `${node};`;
  }
}
