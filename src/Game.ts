import { IRenderEngine } from './Game/Render/IRenderEngine';
import { ITower } from './Models/Tower/ITower';
import { IBall } from './Models/Ball/IBall';
import { IGlobalStateManager } from './Game/GlobalStateManager/IGlobalStateManager';

export class Game {
    
    constructor(private renderEngine: IRenderEngine, private globalManager: IGlobalStateManager){
        this.setup();
        
    }

    private setup () {
        document.body.insertBefore(this.renderEngine.area.canvas, document.body.childNodes[0]);
        this.attachKeyboardHandlers();
    }

    public attachKeyboardHandlers () {
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 68) {
                this.globalManager.recalculatePositionOfCannon(this.globalManager.playerManagerTwo.playerState.cannon, 3);
            }
            else if(e.keyCode === 65) {
                this.globalManager.recalculatePositionOfCannon(this.globalManager.playerManagerTwo.playerState.cannon, - 3);
            }
        });
        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 17) {
                this.globalManager.playerManagerTwo.addBall();
            }
        });
        window.addEventListener('keydown', (e) => {
            if(e.keyCode === 39) {
                this.globalManager.recalculatePositionOfCannon(this.globalManager.playerManagerOne.playerState.cannon, 3);
            }
            else if(e.keyCode === 37) {
                this.globalManager.recalculatePositionOfCannon(this.globalManager.playerManagerOne.playerState.cannon,-3);
            }
        });
        window.addEventListener('keyup', (e) => {
            if(e.keyCode === 32) {
                this.globalManager.playerManagerOne.addBall();
            }
        });
    }

    public recalculatePosition(ball: IBall) {
        this.globalManager.recalculatePositionOfBall(ball);
    }

    public clearArea () {
        this.renderEngine.clear();
    }

    public drawTower() {
        this.globalManager.playerManagerOne.playerState.towers.forEach((tower: ITower) => {
            this.renderEngine.drawTower(tower);
        });
        this.globalManager.playerManagerTwo.playerState.towers.forEach((tower: ITower) => {
            this.renderEngine.drawTower(tower);
        });
    }

    public drawCannon () {
        this.renderEngine.drawCannon(this.globalManager.playerManagerOne.playerState.cannon);
        this.renderEngine.drawCannon(this.globalManager.playerManagerTwo.playerState.cannon);
    }


    public drawBall(ball: IBall) {
        this.renderEngine.drawBall(ball);
    }

    public detectCollisions () {
        this.globalManager.detectCollisions();
    }

    public repaint() {
        this.clearArea();
        this.drawCannon();
        this.drawTower();
        this.globalManager.playerManagerOne.playerState.balls.forEach((currball: IBall) => this.recalculatePosition(currball));
        this.globalManager.playerManagerOne.playerState.balls.forEach((currball: IBall) => this.drawBall(currball));
        this.globalManager.playerManagerTwo.playerState.balls.forEach((currball: IBall) => this.recalculatePosition(currball));
        this.globalManager.playerManagerTwo.playerState.balls.forEach((currball: IBall) => this.drawBall(currball));
        this.detectCollisions();
    }


}




