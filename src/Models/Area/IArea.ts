export interface IArea {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    clear(): void;
}