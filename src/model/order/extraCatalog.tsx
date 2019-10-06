import Extra from "./extra";



export default class ExtraCatalog{
    private extras : Extra[];

    constructor(){
        this.extras = [];
    }

    public registerExtra(extra : Extra) : void {
        this.extras.push(extra);
    }

    public getExtras(): Extra[] {
        return this.extras;
    }

    public setExtras(extras: Extra[]): void {
        this.extras = extras;
    }

   
    
}