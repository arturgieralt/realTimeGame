import { Container } from "inversify";
import { TYPES } from "./types";
import { IAreaConfiguration } from "../Configurations/IConfiguration";
import { AreaConfiguration } from "../Configurations/Configuration";
import { Area } from "../Area";
import { IArea } from "../IArea";

export const gameContainer = new Container();
gameContainer.bind<IAreaConfiguration>(TYPES.AreaConfig).to(AreaConfiguration);
gameContainer.bind<IArea>(TYPES.Area).to(Area);
