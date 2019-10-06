import Apartment from "./apartment";

export default interface ApartmentBuilder{
    getResult() : Apartment;
    buildRooms(amount : number) : void;
    buildDinningRooms(amount : number) : void;
    buildBathRooms(amount : number) : void;
    buildLaundry(amount : number) : void;
    buildBalcone(amount : number) : void;
    setPrice(amount : number) : void;
}