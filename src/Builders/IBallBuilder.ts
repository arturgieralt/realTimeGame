import { IBall } from "../Models/Ball/IBall";

export interface IBallBuilder {
    setPosition (x: number, y: number):  IBallBuilder;
    setColor (color: string): IBallBuilder;
    setRadius (radius: number): IBallBuilder;
    setAngle (angle: number): IBallBuilder;
    build() : IBall;

}
