import { Graph } from "../dataStructure/index";
import fs from "fs";

test("Binary Tree visualization", () => {
  const simpleGraph = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2]
  ];
  const outputDir = "src/tests/output/graph.svg";
  const graph = new Graph(simpleGraph);
  graph.visualize(outputDir);

  expect(fs.readFileSync(outputDir));
});
