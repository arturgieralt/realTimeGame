import { injectable, inject } from "inversify";
import { IBall } from "../../Models/Ball/IBall";
import { IArea } from "../../Models/Area/IArea";
import { TYPES } from "../../IoC/types";
import  * as cannon  from './cannon.png';
import  * as tower  from './tower.png';
import { ITower } from "../../Models/Tower/ITower";
import { IRenderEngine } from "./IRenderEngine";
import { ICannon } from "../../Models/Cannon/ICannon";

@injectable()
export class RenderEngine implements IRenderEngine{
    public area: IArea;
    private cannonImg: HTMLImageElement;
    private towerImg: HTMLImageElement;
    constructor(@inject(TYPES.Area) area: IArea) {
        this.area = area;
        this.cannonImg = new Image();
        this.towerImg = new Image();
        this.cannonImg.src = cannon;
        this.towerImg.src = tower;
    }

    public drawBall(ball: IBall){
        this.area.context.beginPath();
        this.area.context.arc(ball.x, ball.y, ball.r, 0, Math.PI*2, false);
        this.area.context.fillStyle = ball.color;
        this.area.context.fill();
        this.area.context.closePath();
    }

    public drawCannon(cannon: ICannon) {
        this.area.context.save();
        this.area.context.translate(cannon.xPosition, cannon.yPosition);
        this.area.context.rotate(cannon.angle * Math.PI/180);
        this.area.context.drawImage(this.cannonImg, -25, -25, cannon.width, cannon.height);
        this.area.context.restore();
    }

    public drawTower(tower: ITower) {
        this.area.context.save();
        this.area.context.drawImage(this.towerImg, tower.xPosition, tower.yPosition, tower.width, tower.height);
        this.area.context.restore();
    }

    public clear() {
        this.area.context.clearRect(0,0, this.area.canvas.width, this.area.canvas.height);
    }
}