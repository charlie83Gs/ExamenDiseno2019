import Order from "./order"


export default class Bill{
    private order : Order;

    constructor(order : Order) {
        this.order = order;
    }

    public getOrder(): Order {
        return this.order;
    }

    public setOrder(order: Order): void {
        this.order = order;
    }

    public toString(): string {
        return "not implemented";
    }
    
    public toJson(): any {
        return {text : "not implemented"};
    }
}