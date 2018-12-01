import { IBall } from "../../Models/Ball/IBall";
import { injectable, inject } from "inversify";
import { TYPES } from "../../IoC/types";
import { ICannon } from "../../Models/Cannon/ICannon";
import { IAreaConfiguration } from "../../Configurations/IConfiguration";
import { IPhysicsEngine } from "./IPhysicsEngine";

@injectable()
export class PhysicsEngine implements IPhysicsEngine{
    private area: IAreaConfiguration;
    constructor(@inject(TYPES.AreaConfig) areaConfig: IAreaConfiguration) {
        this.area = areaConfig;
    }

    public recalculatePositionOfBall (ball: IBall) {
        const x = ball.x;
        const y = ball.y;
        const r = ball.r;

        if (x + r  + ball.xSpeed > this.area.width || x + ball.xSpeed < r) {
            ball.xSpeed = -ball.xSpeed;
        }

        if (y + r +  ball.ySpeed > this.area.height || y + ball.ySpeed < r) {
            ball.ySpeed = -ball.ySpeed;
        }

        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
    }

    public recalculatePositionOfCannon (cannon: ICannon, angleDelta: number) {
        if((angleDelta < 0 && cannon.angle > cannon.minAngle )|| (angleDelta > 0 && cannon.angle < cannon.maxAngle ) ) {
            cannon.angle += angleDelta;
        }
    }
}