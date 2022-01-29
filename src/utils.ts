import { BinaryTree } from "./tree";

export function buildDOT(nodes: number[]) {
  let initialStr = `digraph G {`;

  const tree = new BinaryTree(nodes);
  const queue = [tree.root];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const curNode = queue.shift();

      initialStr += `${curNode.val};`;

      if (curNode.left) {
        initialStr += `${curNode.val} -> ${curNode.left.val};`;
        queue.push(curNode.left);
      }

      if (curNode.right) {
        initialStr += `${curNode.val} -> ${curNode.right.val};`;
        queue.push(curNode.right);
      }
    }
  }

  return initialStr + `}`;
}
