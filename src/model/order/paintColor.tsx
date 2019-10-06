import Finish from "./finish";


export default class PaintColor extends Finish{
    private color : string;

    constructor(name : string,description : string, color : string){
        super(name,description);
        this.name = name;
        this.description = description;
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

}