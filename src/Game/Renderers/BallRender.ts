import { IArea } from "../../Models/Area/IArea";
import { IBallConfiguration } from "../../Configurations/IConfiguration";

class BallRender {
    public static draw (canvas: IArea, ball: IBallConfiguration) {
        canvas.context.beginPath();
        canvas.context.arc(ball.xStartingPosition, ball.yStartingPosition, ball.radius, 0, Math.PI*2, false);
        canvas.context.fillStyle = ball.color;
        canvas.context.fill();
        canvas.context.closePath();
    }
}

export { BallRender };