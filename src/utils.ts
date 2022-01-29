import { GraphType } from "./common/enums";
import DOTGraphFactory from "./dotgraph";
import { BinaryTree } from "./tree";

export function buildGraphDOT(nodes: number[][]) {
  const graphDOTgraph = DOTGraphFactory(GraphType.GRAPH);

  for (let i = 0; i < nodes.length; i++) {
    graphDOTgraph.addNode(i);

    const neighbors = nodes[i];
    for (let j = 0; j < neighbors.length; j++) {
      graphDOTgraph.addEdge(i, neighbors[j]);
    }
  }

  return graphDOTgraph.getDOTStr();
}

export function buildTreeDOT(nodes: number[]) {
  const tree = new BinaryTree(nodes);
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

  return treeDOTGraph.getDOTStr();
}

export function buildDOT(nodes: any, type: GraphType) {
  if (type === GraphType.TREE) {
    return buildTreeDOT(nodes);
  } else if (type === GraphType.GRAPH) {
    return buildGraphDOT(nodes);
  }
}
