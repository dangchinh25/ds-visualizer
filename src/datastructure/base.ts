export default abstract class BaseVisualizer {
  protected abstract buildDOT(): string;
  abstract visualize(outputDir: string): void;
  abstract generateSVG(): string;
}
