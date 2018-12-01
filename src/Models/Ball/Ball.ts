import { IBall } from "./IBall";

export class Ball implements IBall{
    constructor(public x: number, public y: number, public r: number, public color: string, public xSpeed: number, public ySpeed: number) {
    }
}