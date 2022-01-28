const Viz = require("viz.js");
import * as fs from "fs";

const simpleTree = [3,9,20,null,null,15,7];

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

class BinaryTree {
  root: TreeNode

  constructor(nodes: number[]) {
    if (!nodes) {
      throw Error("The tree must have at least 1 node.")
    }

    this.root = BinaryTree.buildTree(nodes)
  }

  static buildTree(nodes: number[]): TreeNode {
    let nodeIndex = 0
    let root = new TreeNode(nodes[nodeIndex])
    let queue = [root]

    while (queue.length) {
      for (let i=0; i< queue.length; i++) {
        const curNode = queue.shift()

        const leftVal = nodes[++nodeIndex]
        if (leftVal) {
          curNode.left = new TreeNode(leftVal)
          queue.push(curNode.left)
        }

        const rightVal = nodes[++nodeIndex]
        if (rightVal) {
          curNode.right = new TreeNode(rightVal)
          queue.push(curNode.right)
        }
      }
    }

    return root
  }
}

function buildDOT(nodes: number[]) {
  let initialStr = `digraph G {`;

  const tree = new BinaryTree(nodes)
  const queue = [tree.root]

  while (queue.length) {
    for (let i=0; i< queue.length; i++) {
      const curNode = queue.shift()

      initialStr += `${curNode.val};`

      if (curNode.left) {
        initialStr += `${curNode.val} -> ${curNode.left.val};`
        queue.push(curNode.left)
      }

      if (curNode.right) {
        initialStr += `${curNode.val} -> ${curNode.right.val};`
        queue.push(curNode.right)
      }
    }
  }

  return initialStr + `}`; 
}

function dot(outputPath) {
  const outputContent = Viz(buildDOT(simpleTree), {
    format: "svg",
    engine: "dot",
  });
  fs.writeFileSync(outputPath, outputContent);
}

dot("output/dot.svg");
