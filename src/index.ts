import 'reflect-metadata';
import { Game } from './Game';
import { Ball } from './Models/Ball/Ball';
import { Player } from './Player';
import { Cannon } from './Models/Cannon/Cannon';
import { gameContainer } from './IoC/inversify.config';
import { IArea } from './Models/Area/IArea';
import { TYPES } from './IoC/types';
import { IBallBuilder } from './Builders/IBallBuilder';
import { ITowerBuilder } from './Builders/ITowerBuilder';
import { playerTwoTowersPositions, playerOneTowersPositions } from './Configurations/Configuration';



const area = gameContainer.get<IArea>(TYPES.Area);
const ballFactory = gameContainer.get<IBallBuilder>(TYPES.BallBuilder);
const ballFactory2 = gameContainer.get<IBallBuilder>(TYPES.BallBuilder);
const ballBuilder = ballFactory.setPosition(240, 490).setRadius(10).setColor("yellow");
const ballBuilder2 = ballFactory2.setPosition(240, 145).setRadius(10).setColor("green");

const towerBuilder = gameContainer.get<ITowerBuilder>(TYPES.TowerBuilder);
const playerTwoTowers = playerTwoTowersPositions.map((positions: number []) => {
    return towerBuilder.setPosition(positions[0], positions[1]).build();
});
const playerOneTowers = playerOneTowersPositions.map((positions: number []) => {
    return towerBuilder.setPosition(positions[0], positions[1]).build();
});
const cannon = new Cannon(240, 520);
const cannon2 = new Cannon(240, 120);

const playerTwo = new Player(playerTwoTowers, cannon2, ballBuilder2, -90 );
const playerOne = new Player(playerOneTowers, cannon, ballBuilder );
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
