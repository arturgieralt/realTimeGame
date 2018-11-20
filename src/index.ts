import { GameArea } from './Game';
import { Ball } from './Ball';
import { Area } from './Area';

const area = new Area();
const game = new GameArea(area);
const ball = new Ball(20, 20, 10, "green");
game.balls.push(ball);
game.balls.forEach((currball) => game.drawBall(currball));
game.drawCannon();

setInterval(() => {
    game.clearArea();
    game.drawCannon();
    game.balls.forEach((currball) => game.recalculatePosition(currball));
    game.balls.forEach((currball) => game.drawBall(currball));
}, 10);
