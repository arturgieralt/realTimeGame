import { IBall } from "../../Models/Ball/IBall";
import { ICannon } from "../../Models/Cannon/ICannon";

export interface IPhysicsEngine {
    recalculatePositionOfBall (ball: IBall): void;
    recalculatePositionOfCannon (cannon: ICannon, angleDelta: number): void;

}