abstract class Lavoratore {
    protected codredd: number = 78; //metto 78% perché non so nulla sulla finanza.. :')
    protected redditoAnnuoLordo: number;
    protected tasseINPS: number = 3599; //tassa fissa iniziale di 3599
    protected tasseIRPEF: number = 23; //fissa iniziale al 23%

    constructor(reddito: number) {
        this.redditoAnnuoLordo = reddito;
    }

    abstract get getUtileTasse(): number; //ritornerà l'ammontare da cui si possono applicare le tasse
    abstract get getTasseINPS(): number; //ritornerà l'ammontare della tassa inps
    abstract get getTasseIRPEF(): number; //ritornerà l'ammontare della tassa irpef
    abstract get getRedditoNetto(): number; //ritornerà l'ammontare netto del reddito
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
        this.getUtileTasse < 15000 ? 0 : (this.tasseIRPEF = 27); // setta tassa irpef
        return (this.getUtileTasse * this.tasseIRPEF) / 100;
    }
    get getRedditoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseINPS - this.getTasseIRPEF;
    }
}

// test iniziale
// let dev = new Calcolo(35000);
// console.log("Utile tasse - " + dev.getUtileTasse);
// console.log("Tassa INPS - " + dev.getTasseINPS);
// console.log("Tassa IRPEF - " + dev.getTasseIRPEF);
// console.log("Reddito Netto - " + dev.getRedditoNetto);

window.onload = function (): void {
    document.getElementById("calc-btn")?.addEventListener("click", () => {
        let inputVal: HTMLInputElement | null = document.querySelector("input");
        let redd = new Calcolo(Number(inputVal?.value));
        document.getElementById("inps")!.textContent = `${String(
            redd.getTasseINPS
        )} $`;
        document.getElementById("irpef")!.textContent = `${String(
            redd.getTasseIRPEF
        )} $`;
        document.getElementById("netto")!.textContent = `${String(
            redd.getRedditoNetto
        )} $`;
    });
};