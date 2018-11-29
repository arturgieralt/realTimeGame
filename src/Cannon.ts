import { Area } from "./Area";
import { Player } from "./Player";
import  * as cannon  from './cannon.png';

export class Cannon {
    private img: HTMLImageElement;

    constructor(public xPosition: number = 240, public yPosition: number = 615, public height: number = 50, public width: number = 50){
        this.img = new Image();
        this.img.src = cannon;
    }

    public draw (canvasArea: Area, player: Player){
        canvasArea.context.save();
        canvasArea.context.translate(this.xPosition, this.yPosition);
        canvasArea.context.rotate(player.angle * Math.PI/180);
        canvasArea.context.drawImage(this.img, -25, -25, this.width, this.height);
        canvasArea.context.restore();

    }

    public recalculatePosition (angle: number, angleDelta: number) {
        if((angleDelta < 0 && angle> 0 )|| (angleDelta > 0 && angle < 180 ) ) {
            return  angle + angleDelta;
        }
        return angle;
    }

}