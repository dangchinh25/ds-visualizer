import { GraphType } from "../common/enums";
import GraphDOTGraph from "./graph";
import TreeDOTGraph from "./tree";

export default function DOTGraphFactory(type: string) {
  if (type === GraphType.TREE) {
    return new TreeDOTGraph();
  } else if (type === GraphType.GRAPH) {
    return new GraphDOTGraph();
  }
}
