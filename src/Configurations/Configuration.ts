import { IAreaConfiguration, ITowerConfiguration } from "./IConfiguration";
import { injectable } from "inversify";

@injectable()
class AreaConfiguration implements IAreaConfiguration {
    public width = 480;
    public height = 640;
    public id = 'myCanvas';
}

@injectable()
class TowerConfiguration implements ITowerConfiguration {
    public height = 80;
    public width = 80;
    public lifes = 10;
}

const playerOneTowersPositions = [[50,560], [150, 560], [250,560], [350, 560]];

const playerTwoTowersPositions = [[50,0], [150, 0], [250,0], [350, 0]];

export { AreaConfiguration, TowerConfiguration, playerOneTowersPositions, playerTwoTowersPositions } ;
