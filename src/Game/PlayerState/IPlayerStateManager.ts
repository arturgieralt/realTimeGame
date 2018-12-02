import { IBallConfiguration, ICannonConfiguration } from "../../Configurations/IConfiguration";
import { IPlayerState } from "./IPlayerState";

export interface IPlayerStateManager {
    playerState: IPlayerState;
    setConfig(towerPositions: number[][], ballConfig: IBallConfiguration, cannonConfig: ICannonConfiguration): IPlayerStateManager;
    createState(): void;
    removeTower(index:number): void;
    removeBall(index:number): void;
    addBall(): void;
}