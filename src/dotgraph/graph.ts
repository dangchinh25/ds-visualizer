import BaseDOTGraph from "./base";

interface EdgeMap {
  [key: string]: boolean;
}

export default class GraphDOTGraph extends BaseDOTGraph {
  edgeMap: EdgeMap;

  constructor() {
    super(`graph G {`);
    this.edgeMap = {};
  }

  addEdge(startNode: string | number, endNode: string | number): void {
    if (this.edgeMap[String([startNode, endNode])] || this.edgeMap[String([endNode, startNode])]) {
      return;
    }
    this.dotStr += `${startNode} -- ${endNode};`;
    this.edgeMap[String([startNode, endNode])] = true;
    this.edgeMap[String([endNode, startNode])] = true;
  }

  addNode(node: string | number): void {
    this.dotStr += `${node};`;
  }
}
