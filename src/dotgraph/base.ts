export default abstract class BaseDOTGraph {
  dotStr: string;

  constructor(initialStr: string) {
    this.dotStr = initialStr;
  }

  abstract addEdge(startNode: any, endNode: any): void;
  abstract addNode(node: any): void;

  getDOTStr() {
    return this.dotStr + `}`;
  }
}
