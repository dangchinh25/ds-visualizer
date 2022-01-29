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
