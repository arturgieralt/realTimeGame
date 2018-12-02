import { IBall } from "../../Models/Ball/IBall";
import { injectable, inject } from "inversify";
import { TYPES } from "../../IoC/types";
import { ICannon } from "../../Models/Cannon/ICannon";
import { IAreaConfiguration } from "../../Configurations/IConfiguration";
import { IGlobalStateManager } from "./IGlobalStateManager";
import { ITower } from "../../Models/Tower/ITower";
import { IPlayerStateManager } from "../../State/IPlayerStateManager";

@injectable()
export class GlobalStateManager implements IGlobalStateManager{
    private area: IAreaConfiguration;
    public playerManagerOne: IPlayerStateManager;
    public playerManagerTwo: IPlayerStateManager
    constructor(@inject(TYPES.AreaConfig) areaConfig: IAreaConfiguration) {
        this.area = areaConfig;
    }

    public setPlayerManagers(playerManagerOne: IPlayerStateManager, playerManagerTwo: IPlayerStateManager){
        this.playerManagerOne = playerManagerOne;
        this.playerManagerTwo = playerManagerTwo;
    }

    public recalculatePositionOfBall (ball: IBall) {
        const x = ball.x;
        const y = ball.y;
        const r = ball.r;

        if (x + r  + ball.xSpeed > this.area.width || x + ball.xSpeed < r) {
            ball.xSpeed = -ball.xSpeed;
        }

        if (y + r +  ball.ySpeed > this.area.height || y + ball.ySpeed < r) {
            ball.ySpeed = -ball.ySpeed;
        }

        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
    }

    public recalculatePositionOfCannon (cannon: ICannon, angleDelta: number) {
        if((angleDelta < 0 && cannon.angle > cannon.minAngle )|| (angleDelta > 0 && cannon.angle < cannon.maxAngle ) ) {
            cannon.angle += angleDelta;
        }
    }

    public detectCollisions () {
        this.playerManagerOne.playerState.balls.forEach((ball: IBall, indexBall: number) => {
            let removeBall = false;

            this.playerManagerTwo.playerState.balls.forEach((ballTwo:  IBall, indexBallTwo: number) => {
                const distance = Math.sqrt(Math.pow(Math.abs(ball.x - ballTwo.x), 2) + Math.pow(Math.abs(ball.y - ballTwo.y), 2));
                if (distance <= 10) {
                    removeBall = true;
                    this.playerManagerTwo.removeBall(indexBallTwo);
                    
                }
            });

            if(!removeBall) {
                this.playerManagerTwo.playerState.towers.forEach((tower: ITower, index: number) => {
                    const distance = Math.sqrt(Math.pow(Math.abs(ball.x - (tower.xPosition + (tower.height/2)) ), 2) + Math.pow(Math.abs(ball.y - (tower.yPosition + (tower.width /2))), 2));
                    if (distance < ball.r + (tower.width / 2) ) {
                        removeBall = true;
                        tower.lifes -= 1;
                        if(tower.lifes === 0){
                            this.playerManagerTwo.removeTower(index);
                        } 
                    }
            });
            }            
            if (removeBall) this.playerManagerOne.removeBall(indexBall);
        });

        this.playerManagerTwo.playerState.balls.forEach((ball: IBall, indexBall: number) => {
            let removeBall = false;
            this.playerManagerOne.playerState.towers.forEach((tower: ITower, index: number) => {
                    const distance = Math.sqrt(Math.pow(Math.abs(ball.x - (tower.xPosition + (tower.height/2)) ), 2) + Math.pow(Math.abs(ball.y - (tower.yPosition + (tower.width /2))), 2));
                    if (distance < ball.r + (tower.width / 2) ) {
                        removeBall = true;
                        tower.lifes -= 1;
                        if(tower.lifes === 0){
                            this.playerManagerOne.removeTower(index);
                        } 
                    }
            });
            if (removeBall) this.playerManagerTwo.removeBall(indexBall);
        })
    }
}