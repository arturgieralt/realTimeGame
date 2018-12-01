import { ICannonConfiguration } from "../Configurations/IConfiguration";
import { ICannon } from "../Models/Cannon/ICannon";
import { injectable , interfaces, inject} from "inversify";
import { TYPES } from "../IoC/types";
import { ICannonBuilder } from "./ICannonBuilder";

@injectable()
export class CannonBuilder implements ICannonBuilder {

    private cannonNewable: interfaces.Newable<ICannon>;
    private cannonConfig: ICannonConfiguration;

    constructor (@inject(TYPES.CannonNewable) cannon: interfaces.Newable<ICannon>) {
        this.cannonNewable = cannon;
    }

    public setConfig(config: ICannonConfiguration) {
        this.cannonConfig = config;
        return this;
    }

    public build() {
        return new this.cannonNewable(this.cannonConfig.xPosition, this.cannonConfig.yPosition, this.cannonConfig.angle, this.cannonConfig.height, this.cannonConfig.width, this.cannonConfig.minAngle, this.cannonConfig.maxAngle);
    }
    
}