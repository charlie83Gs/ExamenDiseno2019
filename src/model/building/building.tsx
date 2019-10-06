import ApartmentSupply from "./apartmentSupply";
import ApartmentPrototype from "./apartmentProtoype";
import Apartment from "./apartment";

export default class Building{
    private supply : ApartmentSupply [];
    private name : string;
    private apartments : ApartmentPrototype;


    constructor(name : string, apartments : ApartmentPrototype){
        this.supply = [];
        this.name = name;
        this.apartments = apartments;
    }

    public addSupply(newSupply : ApartmentSupply) : void {
        this.supply.push(newSupply);
    }

    //returns one object for each apartment
    public getApartments() : Apartment []{
        var apartments : Apartment[] = [];
        var keys = this.apartments.getKeys();
        var myself : Building = this;
        
        this.supply.forEach(
            (sup : ApartmentSupply) =>{
                for (let index = 0; index < sup.getSupply(); index++) {
                    apartments.push(myself.apartments.getApartment(sup.getName()));
                    
                }
            }
        )
        return apartments;
    }


    
    public getApartmentPrototype(): ApartmentPrototype {
        return this.apartments;
    }

    public buy(name : string) : boolean {
        var sup = this.getSupply(name);
        if(sup){
            if(sup.isAvailable()){
                sup.decreaseSupply();
                return true;
            }
            return false;
        }

        return false;
    }


    private getSupply(name : string) : (ApartmentSupply | undefined) {
        var supply = undefined;
        this.supply.forEach(
            (sup) =>{
                if(sup.getName() == name) supply = sup;
            }
        )
        return supply;
    }


}