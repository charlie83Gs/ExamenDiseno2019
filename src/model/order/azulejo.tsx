import Finish from "./finish";


export default class Azulejo extends Finish{
    private patron : string;
    
    constructor(name : string,description : string, patron : string){
        super(name,description);
        this.name = name;
        this.description = description;
        this.patron = patron;
    }

    public getPatron(): string {
        return this.patron;
    }

    public setPatron(patron: string): void {
        this.patron = patron;
    }


}