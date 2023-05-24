"use strict";
class Lavoratore {
    constructor(reddito) {
        this.codredd = 78; //metto 78% perché non so nulla sulla finanza.. :')
        this.tasseINPS = 3599; //tassa fissa iniziale di 3599
        this.tasseIRPEF = 23; //fissa iniziale al 23%
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
}