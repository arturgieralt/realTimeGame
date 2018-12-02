import { Container, interfaces } from "inversify";
import { TYPES } from "./types";
import { IAreaConfiguration, ITowerConfiguration, IBallConfiguration, ICannonConfiguration } from "../Configurations/IConfiguration";
import { AreaConfiguration, TowerConfiguration, BallOneConfig, BallTwoConfig, CannonOneConfig, CannonTwoConfig } from "../Configurations/Configuration";
import { Area } from "../Models/Area/Area";
import { IArea } from "../Models/Area/IArea";
import { IBall } from "../Models/Ball/IBall";
import { Ball } from "../Models/Ball/Ball";
import { BallBuilder } from "../Builders/BallBuilder";
import { IBallBuilder } from "../Builders/IBallBuilder";
import { ITower } from "../Models/Tower/ITower";
import { Tower } from "../Models/Tower/Tower";
import { ITowerBuilder } from "../Builders/ITowerBuilder";
import { TowerBuilder } from "../Builders/TowerBuilder";
import { ICannon } from "../Models/Cannon/ICannon";
import { Cannon } from "../Models/Cannon/Cannon";
import { ICannonBuilder } from "../Builders/ICannonBuilder";
import { CannonBuilder } from "../Builders/CannonBuilder";
import { IRenderEngine } from "../Game/Render/IRenderEngine";
import { RenderEngine } from "../Game/Render/RenderEngine";
import { IGlobalStateManager } from "../Game/GlobalStateManager/IGlobalStateManager";
import { GlobalStateManager } from "../Game/GlobalStateManager/GlobalStateManager";
import { IPlayerState } from "../State/IPlayerState";
import { PlayerStateManager } from "../State/PlayerStateManager";
import { IPlayerStateManager } from "../State/IPlayerStateManager";
import { PlayerState } from "../State/PlayerState";

export const gameContainer = new Container();

gameContainer.bind<IAreaConfiguration>(TYPES.AreaConfig).to(AreaConfiguration);
gameContainer.bind<IArea>(TYPES.Area).to(Area);

gameContainer.bind<IBall>(TYPES.Ball).to(Ball);
gameContainer.bind<interfaces.Newable<IBall>>(TYPES.BallNewable).toConstructor<IBall>(Ball);
gameContainer.bind<IBallBuilder>(TYPES.BallBuilder).to(BallBuilder);

gameContainer.bind<IBallConfiguration>(TYPES.BallOneConfig).to(BallOneConfig);
gameContainer.bind<IBallConfiguration>(TYPES.BallTwoConfig).to(BallTwoConfig);

gameContainer.bind<ICannonConfiguration>(TYPES.CannonOneConfig).to(CannonOneConfig);
gameContainer.bind<ICannonConfiguration>(TYPES.CannonTwoConfig).to(CannonTwoConfig);

gameContainer.bind<interfaces.Newable<ICannon>>(TYPES.CannonNewable).toConstructor<ICannon>(Cannon);
gameContainer.bind<ICannon>(TYPES.Cannon).to(Cannon);
gameContainer.bind<ICannonBuilder>(TYPES.CannonBuilder).to(CannonBuilder);

gameContainer.bind<ITowerConfiguration>(TYPES.TowerConfig).to(TowerConfiguration);
gameContainer.bind<ITower>(TYPES.Tower).to(Tower);
gameContainer.bind<interfaces.Newable<ITower>>(TYPES.TowerNewable).toConstructor<ITower>(Tower);
gameContainer.bind<ITowerBuilder>(TYPES.TowerBuilder).to(TowerBuilder);

gameContainer.bind<IRenderEngine>(TYPES.RenderEngine).to(RenderEngine);
gameContainer.bind<IGlobalStateManager>(TYPES.GlobalStateManager).to(GlobalStateManager);

gameContainer.bind<IPlayerState>(TYPES.PlayerState).to(PlayerState);
gameContainer.bind<IPlayerStateManager>(TYPES.PlayerStateManager).to(PlayerStateManager);
gameContainer.bind<interfaces.Newable<IPlayerState>>(TYPES.PlayerStateNewable).toConstructor<IPlayerState>(PlayerState);
