import 'reflect-metadata';
import { Game } from './Game';
// import { Ball } from './Ball';
import { Ball } from './Ball';
import { Player } from './Player';
import { Cannon } from './Cannon';
import { Tower } from './Tower';
import { BallBuilder } from './BallBuilder';
import { gameContainer } from './IoC/inversify.config';
import { IArea } from './IArea';
import { TYPES } from './IoC/types';


const area = gameContainer.get<IArea>(TYPES.Area);
const towers = [new Tower(50, 0), new Tower(150, 0), new Tower(250, 0), new Tower(350, 0)];
const cannon = new Cannon(240, 520);
const ballBuilder = new BallBuilder().setPosition(240, 490).setRadius(10).setColor("yellow");
const towers2 = [new Tower(50, 560), new Tower(150, 560), new Tower(250, 560), new Tower(350, 560)];
const cannon2 = new Cannon(240, 120);
const ballBuilder2 = new BallBuilder().setPosition(240, 145).setRadius(10).setColor("green");
const playerTwo = new Player(towers, cannon2, ballBuilder2, -90 );
const playerOne = new Player(towers2, cannon, ballBuilder );
const game = new Game(area, playerOne, playerTwo);
game.drawCannon();

setInterval(() => {
    game.clearArea();
    game.drawCannon();
    game.drawTower();
    game.playerOne.balls.forEach((currball: Ball) => game.recalculatePosition(currball));
    game.playerOne.balls.forEach((currball: Ball) => game.drawBall(currball));
    game.playerTwo.balls.forEach((currball: Ball) => game.recalculatePosition(currball));
    game.playerTwo.balls.forEach((currball: Ball) => game.drawBall(currball));
    game.detectCollisions();
}, 10);
