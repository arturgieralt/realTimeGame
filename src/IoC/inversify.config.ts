import { Container, interfaces } from "inversify";
import { TYPES } from "./types";
import { IAreaConfiguration, ITowerConfiguration } from "../Configurations/IConfiguration";
import { AreaConfiguration, TowerConfiguration } from "../Configurations/Configuration";
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

export const gameContainer = new Container();

gameContainer.bind<IAreaConfiguration>(TYPES.AreaConfig).to(AreaConfiguration);
gameContainer.bind<IArea>(TYPES.Area).to(Area);

gameContainer.bind<IBall>(TYPES.Ball).to(Ball);
gameContainer.bind<interfaces.Newable<IBall>>(TYPES.BallNewable).toConstructor<IBall>(Ball);
gameContainer.bind<IBallBuilder>(TYPES.BallBuilder).to(BallBuilder);

gameContainer.bind<ITowerConfiguration>(TYPES.TowerConfig).to(TowerConfiguration);
gameContainer.bind<ITower>(TYPES.Tower).to(Tower);
gameContainer.bind<interfaces.Newable<ITower>>(TYPES.TowerNewable).toConstructor<ITower>(Tower);
gameContainer.bind<ITowerBuilder>(TYPES.TowerBuilder).to(TowerBuilder);