import TreeVisualizer from "./visualizer/tree";
import GraphVisualizer from "./visualizer/graph";

const simpleTree = [3, 9, 20, null, null, 15, 7];
const simpleGraph = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2]
];

const outputDir = "output/dot.svg";

// const tree = new TreeVisualizer(simpleTree);
// tree.visualize(outputDir);

const graph = new GraphVisualizer(simpleGraph);
graph.visualize(outputDir);
