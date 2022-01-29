export default abstract class BaseDOTGraph {
  dotStr: string;

  constructor(initialStr: string) {
    this.dotStr = initialStr;
  }

  abstract addEdge(startNode: number | string, endNode: number | string): void;
  abstract addNode(node: number | string): void;

  getDOTStr() {
    return this.dotStr + `}`;
  }
}
