import { GraphType } from "../common/enums";
import TreeDOTGraph from "./tree";

export default function DOTGraphFactory(type: string) {
  if (type === GraphType.TREE) {
    return new TreeDOTGraph(`digraph G {`);
  }
}
