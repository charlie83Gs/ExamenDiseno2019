import Apartment from "../building/apartment";
import FinishCatalog from "./finishCatalog";
import ExtraCatalog from "./extraCatalog";
import Order from "./order";
import Bill from "./Bill";
import PaintColor from "./paintColor";
import Azulejo from "./azulejo";
import KitchenFurniture from "./kitchenFurniture";
import Extra from "./extra";



export default class OrderCointroller{
    private apartment : Apartment | undefined;
    private finishCatalog : FinishCatalog;
    private extraCatalog : ExtraCatalog;
    private order : Order | undefined;
    private static instance : OrderCointroller;

    private constructor(finishCatalog : FinishCatalog, extraCatalog : ExtraCatalog){
        this.apartment = undefined;
        this.order = undefined;
        this.finishCatalog = finishCatalog;
        this.extraCatalog = extraCatalog;
    }

    static getInstance(): OrderCointroller {
        if (!OrderCointroller.instance) {
            //create catalog
            var finishCatalog = new FinishCatalog();

            //create paints
            finishCatalog.registerFinish(new PaintColor("red" , "beautiful paint","#FF0000"));
            finishCatalog.registerFinish(new PaintColor("blue" , "beautiful paint","#000FF"));
            finishCatalog.registerFinish(new PaintColor("green" , "beautiful paint","#00DD00"));
            finishCatalog.registerFinish(new PaintColor("black" , "beautiful paint","#000000"));

            //create azulejos
            finishCatalog.registerFinish(new Azulejo("simple" , "beautiful azulejo","| | |"));
            finishCatalog.registerFinish(new Azulejo("triangles" , "beautiful azulejo","|/|/|"));

            //create kitchen furniture
            finishCatalog.registerFinish(new KitchenFurniture("wood" , "beautiful furniture","simple wood furniture"));
            finishCatalog.registerFinish(new KitchenFurniture("metal" , "beautiful furniture","simple metal furniture"));

            var extraCatalog = new ExtraCatalog();

            //create some extras
            extraCatalog.registerExtra(new Extra("cama 1", 20000));
            extraCatalog.registerExtra(new Extra("cama 2", 30000));
            extraCatalog.registerExtra(new Extra("cama 3", 35000));
            extraCatalog.registerExtra(new Extra("Juego comedor", 200000));
            extraCatalog.registerExtra(new Extra("Cocina", 70000));
            extraCatalog.registerExtra(new Extra("Refrigeradora", 12000));


            OrderCointroller.instance = new OrderCointroller(finishCatalog,extraCatalog);
        }
    
        return OrderCointroller.instance;
    }
    


    public checkIn() : any {
        if(this.order)
            return new Bill(this.order);
    }
    
    public getApartment(): Apartment | undefined {
        return this.apartment;
    }

    public setApartment(apartment: Apartment): void {
        this.apartment = apartment;
        this.order = new Order(apartment);
    }

    public getFinishCatalog(): FinishCatalog {
        return this.finishCatalog;
    }

    public setFinishCatalog(finishCatalog: FinishCatalog): void {
        this.finishCatalog = finishCatalog;
    }

    public getExtraCatalog(): ExtraCatalog {
        return this.extraCatalog;
    }

    public setExtraCatalog(extraCatalog: ExtraCatalog): void {
        this.extraCatalog = extraCatalog;
    }

    public getOrder(): Order | undefined{
        return this.order;
    }

    public setOrder(order: Order): void {
        this.order = order;
    }


}