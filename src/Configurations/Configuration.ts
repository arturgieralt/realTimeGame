import { IAreaConfiguration, ITowerConfiguration, IBallConfiguration, ICannonConfiguration } from "./IConfiguration";
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

@injectable()
class BallOneConfig implements IBallConfiguration {
    public xStartingPosition = 240;
    public yStartingPosition = 490 ;
    public radius = 10;
    public color = "green";
    public xSpeed = -2;
    public ySpeed = -2;
}

@injectable()
class BallTwoConfig implements IBallConfiguration {
    public xStartingPosition = 240;
    public yStartingPosition = 145 ;
    public radius = 10;
    public color = "yellow";
    public xSpeed =-2;
    public ySpeed = -2;
}

@injectable()
class CannonOneConfig implements ICannonConfiguration {
    public xPosition = 240
    public yPosition = 520;
    public height = 50;
    public width = 50;
    public angle = 90;
    public minAngle = 0;
    public maxAngle = 180;
}

// minAngle: 0
// maxAngle: 180

@injectable()
class CannonTwoConfig implements ICannonConfiguration {
    public xPosition = 240
    public yPosition = 120;
    public height = 50;
    public width = 50;
    public angle = -90;
    public minAngle = -180;
    public maxAngle = 0;
}

// minAngle: -180
// maxAngle: 0

const playerOneTowersPositions = [[50,560], [150, 560], [250,560], [350, 560]];

const playerTwoTowersPositions = [[50,0], [150, 0], [250,0], [350, 0]];

export { AreaConfiguration, TowerConfiguration, playerOneTowersPositions, playerTwoTowersPositions, BallOneConfig, BallTwoConfig, CannonOneConfig, CannonTwoConfig } ;
