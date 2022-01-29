import TreeDOTGraph from "./tree";

export default function DOTGraphFactory(type: string) {
  if (type === "tree") {
    return new TreeDOTGraph(`digraph G {`);
  }
}
