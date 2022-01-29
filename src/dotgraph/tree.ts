import BaseDOTGraph from "./base";

export default class TreeDOTGraph extends BaseDOTGraph {
  constructor() {
    super(`digraph G {`);
  }

  addEdge(startNode: string | number, endNode: string | number): void {
    this.dotStr += `${startNode} -> ${endNode};`;
  }
  addNode(node: string | number): void {
    this.dotStr += `${node};`;
  }
}
