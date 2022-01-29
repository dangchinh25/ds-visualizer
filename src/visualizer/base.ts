export default abstract class BaseVisualizer {
  abstract visualize(outputDir: string): void;

  abstract generateSVG(): string;
}
