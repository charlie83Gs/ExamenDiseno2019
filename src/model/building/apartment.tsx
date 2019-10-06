import Prototype from "./prototype";
import Clone from "./clone"

export default class Apartment implements Prototype{
   
	private rooms : number;
	private dinningRooms : number;
	private bathRooms : number;
	private laundry : number;
	private balcone : number;
	private price : number;


	constructor(rooms : number,
				dinningRooms : number,
				bathRooms : number,
				laundry : number,
				balcone : number,
				price : number){
		this.rooms = rooms;
		this.dinningRooms = dinningRooms;
		this.bathRooms = bathRooms;
		this.laundry = laundry;
		this.balcone = balcone;
		this.price = price;
    }
    
    
    public getRooms(): number {
        return this.rooms;
    }

    public setRooms(rooms: number): void {
        this.rooms = rooms;
    }

    public getDinningRooms(): number {
        return this.dinningRooms;
    }

    public setDinningRooms(dinningRooms: number): void {
        this.dinningRooms = dinningRooms;
    }

    public getBathRooms(): number {
        return this.bathRooms;
    }

    public setBathRooms(bathRooms: number): void {
        this.bathRooms = bathRooms;
    }

    public getLaundry(): number {
        return this.laundry;
    }

    public setLaundry(laundry: number): void {
        this.laundry = laundry;
    }

    public getBalcone(): number {
        return this.balcone;
    }

    public setBalcone(balcone: number): void {
        this.balcone = balcone;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    clone(): Prototype {
        return Clone(this);
    }
}