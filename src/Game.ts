import { Ball } from './Ball';
import { Area } from './Area';
import  cannon  from './cannon.png';

export class GameArea {
    
    private angle: number = 90;
    private img: HTMLImageElement;

    constructor(private canvasArea: Area){
        this.start();
        console.log(cannon);
        this.img = new Image();
        this.img.src = cannon;
    }

    private start () {
        document.body.insertBefore(this.canvasArea.canvas, document.body.childNodes[0]);
        this.attachKeyboardHandlers();
    }

    public buildElements() {
        this.canvasArea.context.beginPath();
        this.canvasArea.context.rect(0, 0, 50, 50);
        this.canvasArea.context.fillStyle = "#FF0000";
        this.canvasArea.context.fill();
        this.canvasArea.context.closePath();
        
        this.canvasArea.context.beginPath();
        this.canvasArea.context.rect(160, 10, 100, 40);
        this.canvasArea.context.strokeStyle = "rgba(0, 0, 255, 0.5)";
        this.canvasArea.context.stroke();
        this.canvasArea.context.closePath();
    }

    public drawBall(ball: Ball) {
        this.canvasArea.context.beginPath();
        this.canvasArea.context.arc(ball.x, ball.y, ball.r, 0, Math.PI*2, false);
        this.canvasArea.context.fillStyle = ball.color;
        this.canvasArea.context.fill();
        this.canvasArea.context.closePath();
    }

    public drawCannon (){
        this.canvasArea.context.save();
        this.canvasArea.context.rotate(this.angle*Math.PI/180);
        this.canvasArea.context.drawImage(this.img as HTMLImageElement,590,-265, 50, 50);
        this.canvasArea.context.restore();

    }

    public attachKeyboardHandlers () {
        window.addEventListener('keydown', (e) => {
            if(e.keyCode == 39) {
                this.recalculateCannonPosition(-1);
            }
            else if(e.keyCode == 37) {
                this.recalculateCannonPosition(1);
            }
        }
        )
    }

    public recalculateCannonPosition (angleDelta: number) {
      if((angleDelta < 0 && this.angle > 0 )|| (angleDelta > 0 && this.angle < 180 ) ) {
          this.angle += angleDelta;
          this.canvasArea.context.save();
          this.canvasArea.context.rotate(this.angle*Math.PI/180);
          this.canvasArea.context.drawImage(this.img as HTMLImageElement,590,-265, 50, 50);
          this.canvasArea.context.restore();
      }  
        
    }

    public recalculatePosition(ball: Ball) {
        let x = ball.x;
        let y = ball.y;
        let r = ball.r;
        const width = this.canvasArea.canvas.width;
        const height = this.canvasArea.canvas.height;

        if (x + r  + ball.xSpeed > width || x + ball.xSpeed < r) {
            ball.xSpeed = -ball.xSpeed;
        }

        if (y + r +  ball.ySpeed > height || y + ball.ySpeed < r) {
            ball.ySpeed = -ball.ySpeed;
        }

        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
    }

    public clearArea () {
        this.canvasArea.context.clearRect(0,0, this.canvasArea.canvas.width, this.canvasArea.canvas.height);
    }
}




