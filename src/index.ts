// eslint-disable-next-line @typescript-eslint/no-var-requires
const Viz = require("viz.js");
import * as fs from "fs";

import { buildDOT, buildGraphDOT } from "./utils";

const simpleTree = [3, 9, 20, null, null, 15, 7];
const simpleGraph = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2]
];

console.log(buildGraphDOT(simpleGraph));

function dot(outputPath) {
  const outputContent = Viz(buildDOT(simpleTree), {
    format: "svg",
    engine: "dot"
  });
  fs.writeFileSync(outputPath, outputContent);
}

dot("output/dot.svg");
