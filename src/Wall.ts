interface Brick {
    x: number;
    y: number
}

export class Wall {
    public brickRowCount: number =  3;
    public brickColumnCount :number =  5;
    public brickWidth :number =  75;
    public brickHeight :number =  20;
    public brickPadding :number =  10;
    public brickOffsetTop :number =  30;
    public brickOffsetLeft :number =  30;
    public bricks: Brick[][] = [];
    
    constructor() {
    this.buildWall();
    }

    public buildWall () {
        for(let c=0; c< this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for(var r=0; r<this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0 };
            }
        }
    }
}