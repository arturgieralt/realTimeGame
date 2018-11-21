import { Ball } from './Ball';
import { Area } from './Area';
import  cannon  from './cannon.png';

export class Game {
    
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

    public drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                bricks[c][r].x = 0;
                bricks[c][r].y = 0;
                ctx.beginPath();
                ctx.rect(0, 0, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    public drawBall(ball: Ball) {
        this.canvasArea.context.beginPath();
        this.canvasArea.context.arc(ball.x, ball.y, ball.r, 0, Math.PI*2, false);
        this.canvasArea.context.fillStyle = ball.color;
        this.canvasArea.context.fill();
        this.canvasArea.context.closePath();
    }

    public drawCannon (){
        this.clearArea();
        this.canvasArea.context.save();
        this.canvasArea.context.translate(240,615);
       this.canvasArea.context.rotate(this.angle*Math.PI/180);
        // this.canvasArea.context.translate(-240,-240);
        this.canvasArea.context.drawImage(this.img as HTMLImageElement, -25, -25, 50, 50);
        this.canvasArea.context.restore();

    }

    public attachKeyboardHandlers () {
        window.addEventListener('keydown', (e) => {
            if(e.keyCode == 39) {
                this.recalculateCannonPosition(3);
            }
            else if(e.keyCode == 37) {
                this.recalculateCannonPosition(-3);
            }
        }
        )
    }

    public recalculateCannonPosition (angleDelta: number) {
      if((angleDelta < 0 && this.angle > 0 )|| (angleDelta > 0 && this.angle < 180 ) ) {
          this.angle += angleDelta;
          this.canvasArea.context.save();
          this.canvasArea.context.translate(240,615);
          this.canvasArea.context.rotate(this.angle * Math.PI/180);
        //    this.canvasArea.context.translate(-240,-240);
        this.canvasArea.context.drawImage(this.img as HTMLImageElement, -25, -25, 50, 50);
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




