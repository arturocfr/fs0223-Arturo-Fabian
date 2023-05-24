abstract class Lavoratore {
    protected codredd: number = 60; 
    protected redditoAnnuoLordo: number;
    protected tasseINPS: number = 4009;
    protected tasseIRPEF: number = 21;

    constructor(reddito: number) {
        this.redditoAnnuoLordo = reddito;
    }

    abstract get getUtileTasse(): number; 
    abstract get getTasseINPS(): number; 
    abstract get getTasseIRPEF(): number; 
    abstract get getRedditoNetto(): number; 
}

class Calcolo extends Lavoratore {
    constructor(reddito: number) {
        super(reddito);
    }

    get getUtileTasse(): number {
        return (this.redditoAnnuoLordo * 78) / 100;
    }
    get getTasseINPS(): number {
        this.redditoAnnuoLordo > 46123
            ? (this.tasseINPS = (this.redditoAnnuoLordo * 24) / 100)
            : 0; // setta tassa inps
        return this.tasseINPS;
    }
    get getTasseIRPEF(): number {
        this.getUtileTasse < 15000 ? 0 : (this.tasseIRPEF = 27); 
        return (this.getUtileTasse * this.tasseIRPEF) / 100;
    }
}