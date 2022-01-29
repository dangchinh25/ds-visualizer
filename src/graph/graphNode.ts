export default class GraphNode {
    val: number
    neighbors: GraphNode[]

    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}