import GraphNode from "./graphNode";

interface NodeMap {
  [key: string | number]: GraphNode;
}

export default class Graph {
  nodes: GraphNode[];
  root: GraphNode;

  constructor(nodes: number[][]) {
    if (!nodes) {
      throw Error("The tree must have at least 1 node.");
    }

    this.nodes = Graph.buildGraph(nodes);
    this.root = this.nodes[0];
  }

  static buildGraph(nodes: number[][]) {
    const nodeMap: NodeMap = {};

    for (let i = 0; i < nodes.length; i++) {
      const node = new GraphNode(i);
      nodeMap[i] = node;
    }

    for (let i = 0; i < nodes.length; i++) {
      const node = nodeMap[i];

      const neighborsVal = nodes[i];
      for (let j = 0; j < neighborsVal.length; j++) {
        node.neighbors.push(nodeMap[neighborsVal[j]]);
      }
    }

    return Object.values(nodeMap);
  }
}
