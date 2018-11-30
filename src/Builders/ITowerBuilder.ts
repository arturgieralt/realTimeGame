import { ITower } from "../Models/Tower/ITower";

export interface ITowerBuilder {
    setPosition (x: number, y: number) : ITowerBuilder;
    build(): ITower;
}