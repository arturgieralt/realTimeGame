import { Game } from './Game';
import { Ball } from './Ball';
import { Area } from './Area';

const area = new Area();
const game = new Game(area);
const ball = new Ball(20, 20, 10, "green");
game.drawBall(ball);

game.drawCannon();

setInterval(() => {
    game.clearArea();
    game.drawCannon();
    game.recalculatePosition(ball);
    game.drawBall(ball);
}, 10);
