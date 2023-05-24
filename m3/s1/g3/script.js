"use strict";
class Lavoratore {
    constructor(reddito) {
        this.codredd = 60;
        this.tasseINPS = 4009;
        this.tasseIRPEF = 21;
        this.redditoAnnuoLordo = reddito;
    }
}
class Calcolo extends Lavoratore {
    constructor(reddito) {
        super(reddito);
    }
    get getUtileTasse() {
        return (this.redditoAnnuoLordo * 78) / 100;
    }
    get getTasseINPS() {
        this.redditoAnnuoLordo > 46123
            ? (this.tasseINPS = (this.redditoAnnuoLordo * 24) / 100)
            : 0; // setta tassa inps
        return this.tasseINPS;
    }
    get getTasseIRPEF() {
        this.getUtileTasse < 15000 ? 0 : (this.tasseIRPEF = 27);
        return (this.getUtileTasse * this.tasseIRPEF) / 100;
    }
}
