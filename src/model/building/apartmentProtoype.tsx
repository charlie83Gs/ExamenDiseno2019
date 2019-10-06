import Apartment from "./apartment";


export default class ApartmentPrototype{
    private apartments : { [id: string] : Apartment; }
    
    constructor(){
        this.apartments = {}
    }

    public addApartment(key : string, apartment : Apartment) : void {
        this.apartments[key] = apartment;
    }

    public getApartment(key : string) : Apartment{
        return  this.apartments[key].clone() as Apartment;
    }

    public getKeys() : string[] {
        return Object.keys(this.apartments);
    }
}