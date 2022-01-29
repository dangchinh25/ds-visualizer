import { GraphType } from "./common/enums";
import DOTGraphFactory from "./dotgraph";
import { BinaryTree } from "./tree";

export function buildGraphDOT(nodes: number[][]) {
  const edgeMap = {};
  let initialStr = `graph G {`;

  for (let i = 0; i < nodes.length; i++) {
    initialStr += `${i};`;

    const neighbors = nodes[i];
    for (let j = 0; j < neighbors.length; j++) {
      if (!(edgeMap[String([i, neighbors[j]])] || edgeMap[String([neighbors[j], i])])) {
        initialStr += `${i} -- ${neighbors[j]};`;
        edgeMap[String([i, neighbors[j]])] = true;
      }
    }
  }

  return initialStr + `}`;
}

export function buildDOT(nodes: any, type: GraphType) {
  if (type === GraphType.TREE) {
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
}
