import  * as tower  from './TowerBorder.png';
import { ITower } from "./ITower";
import { IArea } from "../Area/IArea";

export class Tower implements ITower {
    private img: HTMLImageElement;

    constructor(public xPosition: number, public yPosition: number, public height: number = 80, public width: number = 80, public lifes: number = 10){
        this.img = new Image();
        this.img.src = tower;
    }

    public draw (canvasArea: IArea){
        canvasArea.context.save();
        canvasArea.context.drawImage(this.img, this.xPosition, this.yPosition, this.width, this.height);
        canvasArea.context.restore();
    }

}