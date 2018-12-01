import { ICannonConfiguration } from "../Configurations/IConfiguration";
import { ICannon } from "../Models/Cannon/ICannon";

export interface ICannonBuilder {
    setConfig (config: ICannonConfiguration): ICannonBuilder;
    build(): ICannon;
}