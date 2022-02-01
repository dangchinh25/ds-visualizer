// eslint-disable-next-line @typescript-eslint/no-var-requires
const Viz = require("viz.js");
import fs from "fs";

import { GraphDOTGraph } from "../../dotgraph";
import BaseVisualizer from "../base";
import GraphNode from "./graphNode";

interface NodeMap {
  [key: string | number]: GraphNode;
}

export default class Graph extends BaseVisualizer {
  // nodes: GraphNode[];
  // root: GraphNode;

  // constructor(nodes: number[][]) {
  //   if (!nodes) {
  //     throw Error("The tree must have at least 1 node.");
  //   }

  //   this.nodes = Graph.buildGraph(nodes);
  //   this.root = this.nodes[0];
  // }

  // static buildGraph(nodes: number[][]) {
  //   const nodeMap: NodeMap = {};

  //   for (let i = 0; i < nodes.length; i++) {
  //     const node = new GraphNode(i);
  //     nodeMap[i] = node;
  //   }

  //   for (let i = 0; i < nodes.length; i++) {
  //     const node = nodeMap[i];

  //     const neighborsVal = nodes[i];
  //     for (let j = 0; j < neighborsVal.length; j++) {
  //       node.neighbors.push(nodeMap[neighborsVal[j]]);
  //     }
  //   }

  //   return Object.values(nodeMap);
  //}
  nodes: number[][];

  constructor(nodes: number[][]) {
    super();
    this.nodes = nodes;
  }

  visualize(outputDir: string): void {
    const dotGraph = this.buildDOT();

    const outputContent = Viz(dotGraph, {
      format: "svg",
      engine: "dot"
    });
    fs.writeFileSync(outputDir, outputContent);
  }

  generateSVG(): string {
    const dotGraph = this.buildDOT();

    const outputContent = Viz(dotGraph, {
      format: "svg",
      engine: "dot"
    });

    return outputContent;
  }

  protected buildDOT() {
    const graphDOTgraph = new GraphDOTGraph();

    for (let i = 0; i < this.nodes.length; i++) {
      graphDOTgraph.addNode(i);

      const neighbors = this.nodes[i];
      for (let j = 0; j < neighbors.length; j++) {
        graphDOTgraph.addEdge(i, neighbors[j]);
      }
    }

    return graphDOTgraph.getDOTStr();
  }
}
