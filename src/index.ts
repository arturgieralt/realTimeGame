import 'reflect-metadata';
import { Game } from './Game';
import { Ball } from './Models/Ball/Ball';
import { Player } from './Player';
import { gameContainer } from './IoC/inversify.config';
import { TYPES } from './IoC/types';
import { IBallBuilder } from './Builders/IBallBuilder';
import { ITowerBuilder } from './Builders/ITowerBuilder';
import { playerTwoTowersPositions, playerOneTowersPositions } from './Configurations/Configuration';
import { IBallConfiguration, ICannonConfiguration } from './Configurations/IConfiguration';
import { ICannonBuilder } from './Builders/ICannonBuilder';
import { IPhysicsEngine } from './Game/Physics/IPhysicsEngine';
import { IRenderEngine } from './Game/Render/IRenderEngine';


// BALL SETUP 
const ballFactory = gameContainer.get<IBallBuilder>(TYPES.BallBuilder);
const ballFactory2 = gameContainer.get<IBallBuilder>(TYPES.BallBuilder);
const ballOneConfig = gameContainer.get<IBallConfiguration>(TYPES.BallOneConfig);
const ballTwoConfig = gameContainer.get<IBallConfiguration>(TYPES.BallTwoConfig);
ballFactory.setConfig(ballOneConfig);
ballFactory2.setConfig(ballTwoConfig);

// TOWER SETUP
const towerBuilder = gameContainer.get<ITowerBuilder>(TYPES.TowerBuilder);
const playerTwoTowers = playerTwoTowersPositions.map((positions: number []) => {
    return towerBuilder.setPosition(positions[0], positions[1]).build();
});
const playerOneTowers = playerOneTowersPositions.map((positions: number []) => {
    return towerBuilder.setPosition(positions[0], positions[1]).build();
});

// CANNON SETUP
const cannonOneConfig = gameContainer.get<ICannonConfiguration>(TYPES.CannonOneConfig);
const cannonTwoConfig = gameContainer.get<ICannonConfiguration>(TYPES.CannonTwoConfig);
const cannonBuilder = gameContainer.get<ICannonBuilder>(TYPES.CannonBuilder);
const cannon = cannonBuilder.setConfig(cannonOneConfig).build();
const cannon2 = cannonBuilder.setConfig(cannonTwoConfig).build();

// STATE SETUP
const physicsEngine = gameContainer.get<IPhysicsEngine>(TYPES.PhysicsEngine);
const renderEngine = gameContainer.get<IRenderEngine>(TYPES.RenderEngine);
const playerTwo = new Player(playerTwoTowers, cannon2, ballFactory2, -90 );
const playerOne = new Player(playerOneTowers, cannon, ballFactory );
const game = new Game(renderEngine, physicsEngine, playerOne, playerTwo);
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
