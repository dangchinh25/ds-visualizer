import { BinaryTree } from "../dataStructure";
import fs from "fs";

test("Binary Tree visualization", () => {
  const simpleTree = [3, 9, 20, null, null, 15, 7, 8];

  const outputDir = "src/tests/output/tree.svg";
  const tree = new BinaryTree(simpleTree);
  tree.visualize(outputDir);

  expect(fs.readFileSync(outputDir));
});
