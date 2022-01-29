const Viz = require("viz.js");
import * as fs from "fs";

import { buildDOT } from "./utils";

const simpleTree = [3, 9, 20, null, null, 15, 7];

function dot(outputPath) {
  const outputContent = Viz(buildDOT(simpleTree), {
    format: "svg",
    engine: "dot"
  });
  fs.writeFileSync(outputPath, outputContent);
}

dot("output/dot.svg");
