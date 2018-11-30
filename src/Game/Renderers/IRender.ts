import { IBallConfiguration } from "../../Configurations/IConfiguration";
import { IArea } from "../../Models/Area/IArea";

export interface IRender {
     draw (canvas: IArea, ball: IBallConfiguration): void;
}