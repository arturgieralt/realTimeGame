import { IAreaConfiguration } from "./IConfiguration";
import { injectable } from "inversify";

@injectable()
class AreaConfiguration implements IAreaConfiguration {
    public width = 480;
    public height = 640;
    public id = 'myCanvas';
}

export { AreaConfiguration } ;