// eslint-disable-next-line @typescript-eslint/no-var-requires
const Viz = require("viz.js");
import * as fs from "fs";

import { GraphType } from "../common/enums";
import { buildDOT } from "../utils";
import BaseVisualizer from "./base";

export default class GraphVisualizer extends BaseVisualizer {
  nodes: number[][];

  constructor(nodes: number[][]) {
    super();
    this.nodes = nodes;
  }

  visualize(outputDir: string): void {
    const dotGraph = buildDOT(this.nodes, GraphType.GRAPH);

    const outputContent = Viz(dotGraph, {
      format: "svg",
      engine: "dot"
    });
    fs.writeFileSync(outputDir, outputContent);
  }
}
