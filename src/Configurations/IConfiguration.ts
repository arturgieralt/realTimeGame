export interface IAreaConfiguration {
    width: number;
    height: number;
    id: string;
}

export interface IDrawCircleConfiguration {
    circleStartAngle: number;
    circleEndAngle: number;
    circleAnticlockwise: boolean;
}

export interface IBallConfiguration {
    xStartingPosition: number;
    yStartingPosition: number;
    radius: number;
    color: string;
    xSpeed: number;
    ySpeed: number;
}

export interface ICannonConfiguration {
    xStartingPosition: number;
    yStartingPosition: number;
    angleStarting: number;
    height: number;
    width: number;
    rotationFactor: number;
    minAngle: number;
    maxAngle: number;
}

export interface ITowerConfiguration {
    height: number;
    width: number;
    lifes: number;
}