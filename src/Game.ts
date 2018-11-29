import { Ball } from './Models/Ball/Ball';
import { Area } from './Models/Area/Area';

import { Player } from './Player';
import { Tower } from './Models/Tower/Tower';

export class Game {
    
    constructor(private canvasArea: Area, public playerOne: Player, public playerTwo: Player){
        this.start();
        
    }

    public start () {
        document.body.insertBefore(this.canvasArea.canvas, document.body.childNodes[0]);
        this.attachKeyboardHandlers();
    }

    public attachKeyboardHandlers () {
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 68) {
                this.playerTwo.angle = - this.playerTwo.cannon.recalculatePosition(Math.abs(this.playerTwo.angle), 3);
            }
            else if(e.keyCode === 65) {
                this.playerTwo.angle = - this.playerTwo.cannon.recalculatePosition(Math.abs(this.playerTwo.angle), -3);
            }
        });
        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 17) {
                this.playerTwo.onFireHandler();
            }
        });
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 39) {
                this.playerOne.angle = this.playerOne.cannon.recalculatePosition(Math.abs(this.playerOne.angle), 3);
            }
            else if(e.keyCode === 37) {
                this.playerOne.angle = this.playerOne.cannon.recalculatePosition(Math.abs(this.playerOne.angle), -3);
            }
        });
        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 32) {
                this.playerOne.onFireHandler();
            }
        });
    }

    public recalculatePosition(ball: Ball) {
        ball.recalculatePosition(this.canvasArea.canvas.width, this.canvasArea.canvas.height );
    }

    public clearArea () {
        this.canvasArea.clear();
    }

    public drawTower() {
        this.playerOne.towers.forEach((tower: Tower) => {
            tower.draw(this.canvasArea);
        });
        this.playerTwo.towers.forEach((tower: Tower) => {
            tower.draw(this.canvasArea);
        });
    }

    public drawCannon () {
        this.playerOne.cannon.draw(this.canvasArea, this.playerOne);
        this.playerTwo.cannon.draw(this.canvasArea, this.playerTwo);
    }


    public drawBall(ball: Ball) {
        ball.draw(this.canvasArea);
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




