import { Ball } from "./Models/Ball/Ball";
import { Cannon } from "./Models/Cannon/Cannon";
import { Tower } from "./Models/Tower/Tower";
import { BallBuilder } from "./Models/Ball/BallBuilder";

export class Player {
    public balls: Ball[] = [];
    constructor (public towers: Tower[], public cannon: Cannon, private ballBuilder: BallBuilder, public angle: number = 90 ) {
    }

    /// I can add ball factory here so I just inject ball factory with settings but angle is dynamic

    public onFireHandler () {
        this.balls.push(this.ballBuilder.setAngle(this.angle).build());
    }
}