import PaintColor from "./paintColor";
import Azulejo from "./azulejo";
import KitchenFurniture from "./kitchenFurniture";


export default class FinshFactory{
    
    constructor(){}

    createPaintColor(name : string,description : string,color : string) : PaintColor{
        return new PaintColor(name,description,color)
    }
    
    createAzulejo(name : string,description : string,patron : string) : Azulejo{
        return new Azulejo(name,description,patron)
    }
    
    createKitchenFurniture(name : string,description : string, image : string) : KitchenFurniture{
        return new KitchenFurniture(name,description,image)
    }

}