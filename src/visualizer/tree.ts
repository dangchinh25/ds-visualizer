// eslint-disable-next-line @typescript-eslint/no-var-requires
const Viz = require("viz.js");
import * as fs from "fs";

import { GraphType } from "../common/enums";
import { buildDOT } from "../utils";
import BaseVisualizer from "./base";

export default class TreeVisualizer extends BaseVisualizer {
  nodes: number[];

  constructor(nodes: number[]) {
    super();
    this.nodes = nodes;
  }

  visualize(outputDir: string): void {
    const dotGraph = buildDOT(this.nodes, GraphType.TREE);

    const outputContent = Viz(dotGraph, {
      format: "svg",
      engine: "dot"
    });
    fs.writeFileSync(outputDir, outputContent);
  }

  generateSVG(): string {
    const dotGraph = buildDOT(this.nodes, GraphType.TREE);

    const outputContent = Viz(dotGraph, {
      format: "svg",
      engine: "dot"
    });

    return outputContent;
  }
}
