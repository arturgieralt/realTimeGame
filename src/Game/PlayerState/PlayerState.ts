import { IPlayerState } from "./IPlayerState";
import { injectable } from "inversify";
import { IBall } from "../../Models/Ball/IBall";
import { ITower } from "../../Models/Tower/ITower";
import { ICannon } from "../../Models/Cannon/ICannon";

@injectable()
export class PlayerState implements IPlayerState{
    constructor (public balls: IBall[], public towers: ITower[], public cannon: ICannon) {
    }
}