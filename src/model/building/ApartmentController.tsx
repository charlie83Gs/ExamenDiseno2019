import Building from "./building";
import Apartment from "./apartment";
import ConcreteApartmentBuilder from "./concreteApartmentBuilder";
import ApartmentPrototype from "./apartmentProtoype";
import ApartmentSupply from "./apartmentSupply";



//singleton from 
// https://medium.com/javascript-everyday/singleton-made-easy-with-typescript-6ad55a7ba7ff
export default class ApartmentController{
    private building : Building;
    private static instance : ApartmentController;

    static getInstance(): ApartmentController {
        if (!ApartmentController.instance) {
            //create building in real code must be loade from file or db
            // model A
            var builder : ConcreteApartmentBuilder = new ConcreteApartmentBuilder();
            builder.buildRooms(1);
            builder.buildRooms(1);//la sala
            builder.buildDinningRooms(1);
            builder.buildBathRooms(1);
            builder.setPrice(50000);
            var apartmentA = builder.getResult();
            
            //model B
            builder = new ConcreteApartmentBuilder();
            builder.buildRooms(2);
            builder.buildRooms(1);//la sala
            builder.buildDinningRooms(1);
            builder.buildBathRooms(1);
            builder.buildBalcone(1);
            builder.setPrice(100000);
            var apartmentB = builder.getResult();

            //model C
            builder = new ConcreteApartmentBuilder();
            builder.buildRooms(3);
            builder.buildRooms(1);//la sala
            builder.buildDinningRooms(1);
            builder.buildBathRooms(2);
            builder.buildBalcone(1);
            builder.buildLaundry(1);
            builder.setPrice(150000);
            var apartmentC = builder.getResult();
            
            //register apartments in prototype
            var apartmentPrototype : ApartmentPrototype = new ApartmentPrototype();
            apartmentPrototype.addApartment("A",apartmentA);
            apartmentPrototype.addApartment("B",apartmentB);
            apartmentPrototype.addApartment("C",apartmentC);

            var building = new Building("Building 1", apartmentPrototype);
            
            //add supply to building
            building.addSupply(new ApartmentSupply("A",10));
            building.addSupply(new ApartmentSupply("B",10));
            building.addSupply(new ApartmentSupply("C",10));

            ApartmentController.instance = new ApartmentController(building);
            
        }
    
        return ApartmentController.instance;
    }

    private constructor(building : Building){
        this.building = building;
    }

    public buyApartment(name : string) : boolean{
        return this.building.buy(name);
    }

    public buyByApartment(apartment : Apartment) : boolean{
        //QUICK FIX, mut use a more reliable metric
        if(apartment.getPrice() == 50000){
            return this.building.buy("A");
        }
        if(apartment.getPrice() == 100000){
            return this.building.buy("B");
        }
        if(apartment.getPrice() == 150000){
            return this.building.buy("C");
        }

        return false;
        
    }


    public getApartment(name : string) : Apartment {
        return this.building.getApartmentPrototype().getApartment(name);
    }

    public getBuilding(): Building {
        return this.building;
    }

    public setBuilding(building: Building): void {
        this.building = building;
    }

    public createOrder(){
        throw new Error(
            "Create order is not implement must be implement in src/model/order/ApartmentController.tsx"
        )
    }

}