import { IBall } from "../Models/Ball/IBall";
import { IBallConfiguration } from "../Configurations/IConfiguration";

export interface IBallBuilder {
    setConfig (config: IBallConfiguration): IBallBuilder;
    setAngle (angle: number): IBallBuilder;
    build() : IBall;

}
