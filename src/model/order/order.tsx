import Apartment from "../building/apartment";
import Finish from "./finish";
import Extra from "./extra";


export default class Order {
    private apartment : Apartment;
    private finish : Finish[];
    private extra : Extra[];

    constructor(apartment : Apartment){
        this.apartment = apartment;
        this.finish = [];
        this.extra= [];
    }

    public addFinish(finish : Finish){
        this.finish.push(finish);
    }

    public addExtra(extra : Extra){
        this.extra.push(extra);
    }

    public getApartment(): Apartment {
        return this.apartment;
    }

    public setApartment(apartment: Apartment): void {
        this.apartment = apartment;
    }

    public getFinish(): Finish[] {
        return this.finish;
    }

    public setFinish(finish: Finish[]): void {
        this.finish = finish;
    }

    public getExtra(): Extra[] {
        return this.extra;
    }

    public setExtra(extra: Extra[]): void {
        this.extra = extra;
    }


}