import { IBall } from "../Models/Ball/IBall";
import { ITower } from "../Models/Tower/ITower";
import { ICannon } from "../Models/Cannon/ICannon";

export interface IPlayerState {
    balls: IBall[];
    towers: ITower[];
    cannon: ICannon;   
}