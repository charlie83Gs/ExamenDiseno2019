import Finish from "./finish";


export default class KitchenFurniture extends Finish{
    private image : string;
    
    constructor(name : string,description : string, image : string){
        super(name,description);
        this.name = name;
        this.description = description;
        this.image = image;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

}