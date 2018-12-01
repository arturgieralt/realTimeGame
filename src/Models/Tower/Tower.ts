import { ITower } from "./ITower";

export class Tower implements ITower {
    constructor(public xPosition: number, public yPosition: number, public height: number, public width: number, public lifes: number){
    }

}