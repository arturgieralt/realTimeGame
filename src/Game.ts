import { Ball } from './Models/Ball/Ball';
import { Player } from './Player';
import { Tower } from './Models/Tower/Tower';
import { IRenderEngine } from './Game/Render/IRenderEngine';
import { IPhysicsEngine } from './Game/Physics/IPhysicsEngine';
import { ITower } from './Models/Tower/ITower';
import { IBall } from './Models/Ball/IBall';

export class Game {
    
    constructor(private renderEngine: IRenderEngine, private physicsEngine: IPhysicsEngine,  public playerOne: Player, public playerTwo: Player){
        this.start();
        
    }

    public start () {
        document.body.insertBefore(this.renderEngine.area.canvas, document.body.childNodes[0]);
        this.attachKeyboardHandlers();
    }

    public attachKeyboardHandlers () {
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 68) {
                this.physicsEngine.recalculatePositionOfCannon(this.playerTwo.cannon, 3);
            }
            else if(e.keyCode === 65) {
                this.physicsEngine.recalculatePositionOfCannon(this.playerTwo.cannon, - 3);
            }
        });
        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 17) {
                this.playerTwo.onFireHandler();
            }
        });
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 39) {
                this.physicsEngine.recalculatePositionOfCannon(this.playerOne.cannon, 3);
            }
            else if(e.keyCode === 37) {
                this.physicsEngine.recalculatePositionOfCannon(this.playerOne.cannon,-3);
            }
        });
        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 32) {
                this.playerOne.onFireHandler();
            }
        });
    }

    public recalculatePosition(ball: IBall) {
        this.physicsEngine.recalculatePositionOfBall(ball);
    }

    public clearArea () {
        this.renderEngine.clear();
    }

    public drawTower() {
        this.playerOne.towers.forEach((tower: ITower) => {
            this.renderEngine.drawTower(tower);
        });
        this.playerTwo.towers.forEach((tower: ITower) => {
            this.renderEngine.drawTower(tower);
        });
    }

    public drawCannon () {
        this.renderEngine.drawCannon(this.playerOne.cannon);
        this.renderEngine.drawCannon(this.playerTwo.cannon);
    }


    public drawBall(ball: IBall) {
        this.renderEngine.drawBall(ball);
    }

    public detectCollisions () {
        this.playerOne.balls.forEach((ball: Ball, indexBall: number) => {
            let removeBall = false;

            this.playerTwo.balls.forEach((ballTwo:  Ball, indexBallTwo: number) => {
                const distance = Math.sqrt(Math.pow(Math.abs(ball.x - ballTwo.x), 2) + Math.pow(Math.abs(ball.y - ballTwo.y), 2));
                if (distance <= 10) {
                    removeBall = true;
                    this.playerTwo.balls.splice(indexBallTwo, 1);
                    
                }
            });

            if(!removeBall) {
                this.playerTwo.towers.forEach((tower: Tower, index: number) => {
                    const distance = Math.sqrt(Math.pow(Math.abs(ball.x - (tower.xPosition + (tower.height/2)) ), 2) + Math.pow(Math.abs(ball.y - (tower.yPosition + (tower.width /2))), 2));
                    if (distance < ball.r + (tower.width / 2) ) {
                        removeBall = true;
                        tower.lifes -= 1;
                        if(tower.lifes === 0){
                            this.playerTwo.towers.splice(index, 1);
                        } 
                    }
            });
            }            
            if (removeBall) this.playerOne.balls.splice(indexBall, 1);
        });

        this.playerTwo.balls.forEach((ball: Ball, indexBall: number) => {
            let removeBall = false;
            this.playerOne.towers.forEach((tower: Tower, index: number) => {
                    const distance = Math.sqrt(Math.pow(Math.abs(ball.x - (tower.xPosition + (tower.height/2)) ), 2) + Math.pow(Math.abs(ball.y - (tower.yPosition + (tower.width /2))), 2));
                    if (distance < ball.r + (tower.width / 2) ) {
                        removeBall = true;
                        tower.lifes -= 1;
                        if(tower.lifes === 0){
                            this.playerOne.towers.splice(index, 1);
                        } 
                    }
            });
            if (removeBall) this.playerTwo.balls.splice(indexBall, 1);
        })
    }
}




