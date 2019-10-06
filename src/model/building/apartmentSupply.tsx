


export default class ApartmentSupply{
    private name : string;
    private supply : number;
  
    constructor(name : string , supply : number){
        this.name = name;
        this.supply = supply;
    }

    public isAvailable(): boolean{
        return this.supply > 0;
    }

    public decreaseSupply(){
        if(this.isAvailable)
            this.supply--;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSupply(): number {
        return this.supply;
    }

    public setSupply(supply: number): void {
        this.supply = supply;
    }




}