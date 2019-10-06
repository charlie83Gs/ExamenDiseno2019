import PaintColor from "./paintColor";
import Azulejo from "./azulejo";
import KitchenFurniture from "./kitchenFurniture";
import Finish from "./finish";


export default class FinishCatalog{
    private paintColors : PaintColor[];
    private azulejos : Azulejo[];
    private kitchenFurnitures : KitchenFurniture[];

    constructor(){
        this.paintColors = [];
        this.azulejos = [];
        this.kitchenFurnitures = [];
    }
    public registerFinish(finish : Finish){
        if(finish instanceof PaintColor){
            this.paintColors.push(finish);
        }else if(finish instanceof Azulejo){
            this.azulejos.push(finish);
        }else if(finish instanceof KitchenFurniture){
            this.kitchenFurnitures.push(finish);
        }
    }

    public getPaintColors(): PaintColor[] {
        return this.paintColors;
    }

    public setPaintColors(paintColors: PaintColor[]): void {
        this.paintColors = paintColors;
    }

    public getAzulejos(): Azulejo[] {
        return this.azulejos;
    }

    public setAzulejos(azulejos: Azulejo[]): void {
        this.azulejos = azulejos;
    }

    public getKitchenFurnitures(): KitchenFurniture[] {
        return this.kitchenFurnitures;
    }

    public setKitchenFurnitures(kitchenFurnitures: KitchenFurniture[]): void {
        this.kitchenFurnitures = kitchenFurnitures;
    }

}