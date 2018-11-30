import { IArea } from "../Area/IArea";

export interface IBall {
     x: number;
     y: number;
     r: number;
     color: string;
     xSpeed: number;
      ySpeed: number;
     draw(canvas: IArea): void;
     recalculatePosition(width: number, height: number): void
}