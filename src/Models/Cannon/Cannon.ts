import { ICannon } from "./ICannon";

export class Cannon implements ICannon{
    constructor(public xPosition: number, public yPosition: number, public angle: number, public height: number, public width: number, public minAngle: number, public maxAngle: number){
    }
}