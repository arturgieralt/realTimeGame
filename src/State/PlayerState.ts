import { IPlayerState } from "./IPlayerState";
import { IBall } from "../Models/Ball/IBall";
import { ICannon } from "../Models/Cannon/ICannon";
import { ITower } from "../Models/Tower/ITower";
import { injectable } from "inversify";

@injectable()
export class PlayerState implements IPlayerState{
    constructor (public balls: IBall[], public towers: ITower[], public cannon: ICannon) {
    }
}