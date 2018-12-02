import { inject, interfaces, injectable } from "inversify";

import { TYPES } from "../IoC/types";

import { IBall } from "../Models/Ball/IBall";
import { ITowerBuilder } from "../Builders/ITowerBuilder";
import { IPlayerState } from "./IPlayerState";
import { IBallBuilder } from "../Builders/IBallBuilder";
import { ICannonBuilder } from "../Builders/ICannonBuilder";
import { IBallConfiguration, ICannonConfiguration } from "../Configurations/IConfiguration";
import { IPlayerStateManager } from "./IPlayerStateManager";

@injectable()
export class PlayerStateManager implements IPlayerStateManager {

    public playerState: IPlayerState;
    private towerPositions: number[][];
    private ballConfig: IBallConfiguration;
    private cannonConfig: ICannonConfiguration;

    constructor(@inject(TYPES.PlayerStateNewable) private playeStateNewable: interfaces.Newable<IPlayerState>,
                @inject(TYPES.TowerBuilder) private towerBuilder: ITowerBuilder,
                @inject(TYPES.BallBuilder) private ballBuilder: IBallBuilder,
                @inject(TYPES.CannonBuilder) private cannonBuilder: ICannonBuilder){

    }

    public setConfig (towerPositions: number[][], ballConfig: IBallConfiguration, cannonConfig: ICannonConfiguration) {
        this.towerPositions = towerPositions;
        this.ballConfig = ballConfig;
        this.cannonConfig = cannonConfig;
        return this;
    }

    public createState() {
        const towers = this.towerPositions.map((positions: number []) => {
            return this.towerBuilder.setPosition(positions[0], positions[1]).build();
        });
        const cannon = this.cannonBuilder.setConfig(this.cannonConfig).build();
        const balls: IBall[] = [];
        this.playerState = new this.playeStateNewable(balls, towers, cannon);
    }

    public removeTower(index: number) {
        this.playerState.towers.splice(index, 1);
    }

    public removeBall (index: number) {
        this.playerState.balls.splice(index, 1);
    }

    public addBall () {
        this.playerState.balls.push(this.ballBuilder.setConfig(this.ballConfig).setAngle(this.playerState.cannon.angle).build());
    }
}