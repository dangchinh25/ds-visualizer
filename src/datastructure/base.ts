export default abstract class BaseVisualizer {
  abstract buildDOT(): string;
  abstract visualize(outputDir: string): void;
}
