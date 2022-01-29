// eslint-disable-next-line @typescript-eslint/no-var-requires
const Viz = require("viz.js");
import * as fs from "fs";

import { GraphType } from "../common/enums";
import DOTGraphFactory from "../dotgraph";
import { BinaryTree } from "../tree";
import BaseVisualizer from "./base";

export default class TreeVisualizer extends BaseVisualizer {
  nodes: number[];

  constructor(nodes: number[]) {
    super();
    this.nodes = nodes;
  }

  visualize(outputDir: string): void {
    const tree = new BinaryTree(this.nodes);
    const queue = [tree.root];
    const treeDOTGraph = DOTGraphFactory(GraphType.TREE);

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const curNode = queue.shift();

        treeDOTGraph.addNode(curNode.val);

        if (curNode.left) {
          treeDOTGraph.addEdge(curNode.val, curNode.left.val);
          queue.push(curNode.left);
        }

        if (curNode.right) {
          treeDOTGraph.addEdge(curNode.val, curNode.right.val);
          queue.push(curNode.right);
        }
      }
    }

    const outputContent = Viz(treeDOTGraph.getDOTStr(), {
      format: "svg",
      engine: "dot"
    });
    fs.writeFileSync(outputDir, outputContent);
  }
}
