import TreeNode from "./treeNode"

export default class BinaryTree {
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