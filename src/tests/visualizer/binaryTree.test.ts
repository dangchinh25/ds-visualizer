import TreeVisualizer from "../../visualizer/tree";
import fs from "fs";

test("Binary Tree visualization", () => {
  const simpleTree = [3, 9, 20, null, null, 15, 7, 8];

  const outputDir = "src/tests/output/tree.svg";
  const tree = new TreeVisualizer(simpleTree);
  tree.visualize(outputDir);

  expect(fs.readFileSync(outputDir));
});
