import 'reflect-metadata';
import { Game } from './Game';
import { gameContainer } from './IoC/inversify.config';
import { TYPES } from './IoC/types';
import { playerTwoTowersPositions, playerOneTowersPositions } from './Configurations/Configuration';
import { IBallConfiguration, ICannonConfiguration } from './Configurations/IConfiguration';
import { IRenderEngine } from './Game/Render/IRenderEngine';
import { IPlayerStateManager } from './Game/PlayerState/IPlayerStateManager';
import { IGlobalStateManager } from './Game/GlobalStateManager/IGlobalStateManager';


const ballOneConfig = gameContainer.get<IBallConfiguration>(TYPES.BallOneConfig);
const ballTwoConfig = gameContainer.get<IBallConfiguration>(TYPES.BallTwoConfig);
const cannonOneConfig = gameContainer.get<ICannonConfiguration>(TYPES.CannonOneConfig);
const cannonTwoConfig = gameContainer.get<ICannonConfiguration>(TYPES.CannonTwoConfig);
const playerStateOne = gameContainer.get<IPlayerStateManager>(TYPES.PlayerStateManager)
const playerStateTwo = gameContainer.get<IPlayerStateManager>(TYPES.PlayerStateManager)
const globalStateManager = gameContainer.get<IGlobalStateManager>(TYPES.GlobalStateManager);
const renderEngine = gameContainer.get<IRenderEngine>(TYPES.RenderEngine);

playerStateTwo.setConfig(playerTwoTowersPositions, ballTwoConfig, cannonTwoConfig).createState();
playerStateOne.setConfig(playerOneTowersPositions, ballOneConfig, cannonOneConfig).createState();
globalStateManager.setPlayerManagers(playerStateOne, playerStateTwo);

const game = new Game(renderEngine, globalStateManager);

setInterval(() => {
    game.repaint();
}, 10);
