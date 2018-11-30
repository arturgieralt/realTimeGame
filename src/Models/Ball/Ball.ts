import { Area } from "../Area/Area";
import { IBall } from "./IBall";

export class Ball implements IBall{
    constructor(public x: number, public y: number, public r: number, public color: string, public xSpeed: number = 2, public ySpeed: number = 2) {
    }

    public draw (canvasArea: Area) {
        canvasArea.context.beginPath();
        canvasArea.context.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        canvasArea.context.fillStyle = this.color;
        canvasArea.context.fill();
        canvasArea.context.closePath();
    }

    public recalculatePosition (width: number, height: number) {
        const x = this.x;
        const y = this.y;
        const r = this.r;

        if (x + r  + this.xSpeed > width || x + this.xSpeed < r) {
            this.xSpeed = -this.xSpeed;
        }

        if (y + r +  this.ySpeed > height || y + this.ySpeed < r) {
            this.ySpeed = -this.ySpeed;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}