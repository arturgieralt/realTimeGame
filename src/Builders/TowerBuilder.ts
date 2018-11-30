import { injectable, inject, interfaces} from "inversify";
import { TYPES } from "../IoC/types";
import { ITower } from "../Models/Tower/ITower";
import { ITowerConfiguration } from "../Configurations/IConfiguration";
import { ITowerBuilder } from "./ITowerBuilder";

@injectable()
export class TowerBuilder implements ITowerBuilder {

    private towerNewable: interfaces.Newable<ITower>;
    private towerConfig: ITowerConfiguration;
    private xPosition: number;
    private yPosition: number;

    constructor (@inject(TYPES.TowerNewable) tower: interfaces.Newable<ITower>, @inject(TYPES.TowerConfig) towerConfig: ITowerConfiguration) {
        this.towerNewable = tower;
        this.towerConfig = towerConfig;
    }

    public setPosition(x: number, y:number) {
        this.xPosition = x;
        this.yPosition = y;
        return this;
    }

    public build() {
        return new this.towerNewable(this.xPosition, this.yPosition, this.towerConfig.height, this.towerConfig.width, this.towerConfig.lifes);
    }
    
}