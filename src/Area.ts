export class Area {
    
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D ;

    constructor(width: number = 480, height: number = 640, id: string = 'myCanvas') {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d")!;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.id = id;
    }

    public clear () {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

}