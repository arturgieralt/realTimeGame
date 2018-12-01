import { Ball } from "./Models/Ball/Ball";
import { Cannon } from "./Models/Cannon/Cannon";
import { IBallBuilder } from "./Builders/IBallBuilder";
import { ITower } from "./Models/Tower/ITower";

export class Player {
    public balls: Ball[] = [];
    constructor (public towers: ITower[], public cannon: Cannon, private ballBuilder: IBallBuilder, public angle: number = 90 ) {
    }

    public onFireHandler () {
        this.balls.push(this.ballBuilder.setAngle(this.cannon.angle).build());
    }
}