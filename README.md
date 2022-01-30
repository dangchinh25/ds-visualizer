# ds-visualizer

Generate visualization of complex datastructure on the fly

## Table of contents
- [Features](#features)
- [Installing](#installing)
- [Example](#example)

## Features
- Visualize complex data structure (currently only include `Tree` and `Undirected Graph`)

## Installing
Using npm:
```bash
$ npm install ds-visualizer
```

Using yarn:
```bash
$ yarn add ds-visualizer
```

## Example

### note: CommonJS usage
#### Tree
```js
const { TreeVisualizer } = require("ds-visualizer");

const simpleTree = [3, 9, 20, null, null, 15, 7, 8];

const tree = new TreeVisualizer(simpleTree);
tree.visualize("output/tree.svg");

// A tree.svg file will be generate with the visualization of the data structure
```
<img src="https://gist.githubusercontent.com/dangchinh25/0fe5ef3101daca1701084fb3af597f19/raw/39ebdc504d7170680c749b1d30a2363078ff2591/tree.svg">

#### Graph
```js
const { GraphVisualizer } = require("ds-visualizer");

const simpleGraph = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2]
];

const graph = new GraphVisualizer(simpleGraph);
graph.visualize("output/graph.svg");

// A graph.svg file will be generate with the visualization of the data structure
```
<img src="https://gist.githubusercontent.com/dangchinh25/0fe5ef3101daca1701084fb3af597f19/raw/b994638bff8b2b0a13777e8b2f15b07b08666bfa/graph.svg">
