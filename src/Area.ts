import { injectable, inject } from "inversify";
import { IAreaConfiguration } from "./Configurations/IConfiguration";
import { TYPES } from "./IoC/types";
import { IArea } from "./IArea";

@injectable()
class Area implements IArea{
    
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D ;

    constructor(@inject(TYPES.AreaConfig) areaConfig: IAreaConfiguration) {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d")!;
        this.canvas.width = areaConfig.width;
        this.canvas.height = areaConfig.height;
        this.canvas.id = areaConfig.id;
    }

    public clear () {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

}

export { Area };