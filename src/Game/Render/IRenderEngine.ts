import { IBall } from "../../Models/Ball/IBall";
import { ICannon } from "../../Models/Cannon/ICannon";
import { ITower } from "../../Models/Tower/ITower";
import { IArea } from "../../Models/Area/IArea";

export interface IRenderEngine {
    area: IArea;
    drawBall(ball: IBall): void;
    drawCannon(cannon: ICannon): void;
    drawTower(tower: ITower): void;
    clear(): void;
}