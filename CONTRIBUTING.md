# How To Contribute

Thank you everyone for taking the time to contribute, any contributions is much appreciated.

1. Clone (<https://github.com/dangchinh25/ds-visualizer.git>).
2. Run `npm install` command to install dependencies.
3. Create a feature branch. Please follow the branch naming guide:
- `feat/<feature name>` for features branch
- `refactor/<part of the code>` for refactor branch
- `tests/<name of test suite>` for branch that add more tests
4. Commit your changes. Please write meaningful commit messages.
5. Run test suite with the `npm test` command and confirm that it passes.
7. Run `npm run format` to lint code.
8. Create new Pull Request and write short descriptive comment.

## Requirements

- Node.js >=10.x
- yarn >=1.17
- Graphviz >=2.40

## Code Walkthrough
- The core of the project is implemented in `src/dataStructure`
- E.g:
    - In `src/dataStructure/binaryTree.ts`, we implementes `Binary Tree ` class
    - `Binary Tree` class defines its own `buildDOT` method that return `DOT string`, which will be used by `visualize` and `generateSVG` method.
    - The `buildDOT` method goes through the data structure and utilizes the helper class defines in `src/dotGraph` to create the `DOT string`
- Every new data structure has to `extends` the `BaseVisualizer` class defined in `src/dataStructure/base.ts` and implements its own `buildDOT`, `visualize`, and `generateSVG`.

## Current Issues
- Add more data structure, e.g `Binary Search Tree`, `Directed Graph`, `Matrix`, etc.
- Utilize [this library](https://github.com/ts-graphviz/ts-graphviz) to create DOT String rather than create it from scratch.
- Make the DOT more symmetrical, check this [ref](https://stackoverflow.com/questions/23429600/how-do-i-make-a-dot-graph-representing-a-binary-tree-more-symmetric).
- Better testing.
- Setup CI/CD and github action to automatically run test on pull request and publish new version to `npm` on merge to `master`.