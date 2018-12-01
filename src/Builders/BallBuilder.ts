import { injectable, inject, interfaces} from "inversify";
import { TYPES } from "../IoC/types";
import { IBall } from "../Models/Ball/IBall";
import { IBallBuilder } from "./IBallBuilder";
import { IBallConfiguration } from "../Configurations/IConfiguration";

@injectable()
export class BallBuilder implements IBallBuilder {

    private config: IBallConfiguration;
    private ballNewable: interfaces.Newable<IBall>;
    private a: number;

    constructor (@inject(TYPES.BallNewable) ball: interfaces.Newable<IBall>) {
        this.ballNewable = ball;
    }

    public setConfig (config: IBallConfiguration){
        this.config = config;
        return this;
    }

    public setAngle (angle: number){
        this.a = angle;
        return this;
    }

    public build() {
        return new this.ballNewable(this.config.xStartingPosition, this.config.yStartingPosition, this.config.radius, this.config.color, this.config.xSpeed * Math.cos(this.a * Math.PI/180), this.config.ySpeed *  Math.sin(this.a * Math.PI/180));
    }

}