import { Container } from "inversify";
import { TYPES } from "./types";
import { IAreaConfiguration } from "../Configurations/IConfiguration";
import { AreaConfiguration } from "../Configurations/Configuration";
import { Area } from "../Models/Area/Area";
import { IArea } from "../Models/Area/IArea";

export const gameContainer = new Container();
gameContainer.bind<IAreaConfiguration>(TYPES.AreaConfig).to(AreaConfiguration);
gameContainer.bind<IArea>(TYPES.Area).to(Area);
