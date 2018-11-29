import { Ball } from "./Ball";

export class BallBuilder {

    private x: number;
    private y: number;
    private r: number;
    private a: number
    private color: string;

    constructor () {
    }

    public setPosition (x: number, y: number){
        this.x = x;
        this.y = y;
        return this;
    }

    public setColor (color: string){
        this.color = color;
        return this;
    }

    public setRadius (radius: number){
        this.r = radius;
        return this;
    }

    public setAngle (angle: number){
        this.a = angle;
        return this;
    }

    public build() {
        return new Ball(this.x, this.y, this.r, this.color, -2 * Math.cos(this.a * Math.PI/180), -2 *  Math.sin(this.a * Math.PI/180));
    }

}