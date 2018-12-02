import { IBall } from "../../Models/Ball/IBall";
import { ICannon } from "../../Models/Cannon/ICannon";
import { IPlayerStateManager } from "../PlayerState/IPlayerStateManager";

export interface IGlobalStateManager {
    playerManagerOne: IPlayerStateManager;
    playerManagerTwo: IPlayerStateManager
    setPlayerManagers(playerManagerOne: IPlayerStateManager, playerManagerTwo: IPlayerStateManager): void;
    recalculatePositionOfBall (ball: IBall): void;
    recalculatePositionOfCannon (cannon: ICannon, angleDelta: number): void;
    detectCollisions (): void;

}