import { createEl } from "./modules/script.js";

type DatiCapo = {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
};

let myArr: DatiCapo[] = [];

class Capo implements DatiCapo {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(_obj: DatiCapo) {
        this.id = _obj.id;
        this.codprod = _obj.codprod;
        this.collezione = _obj.collezione;
        this.capo = _obj.capo;
        this.modello = _obj.modello;
        this.quantita = _obj.quantita;
        this.colore = _obj.colore;
        this.prezzoivaesclusa = _obj.prezzoivaesclusa;
        this.prezzoivainclusa = _obj.prezzoivainclusa;
        this.disponibile = _obj.disponibile;
        this.saldo = _obj.saldo;
        this.CLogga();
        this.creaCols();
    }

    get mostraPrezzo(): number {
        return this.prezzoivainclusa;
    }

    get getsaldocapo(): number {
        // ritorna il prezzo scontato
        return (this.prezzoivainclusa * this.saldo) / 100;
    }

    creaCols(): void {
        // crea le cols dentro la row
        let row: HTMLElement | null = document.querySelector(".row");
        let col: HTMLElement | null = createEl("div", [
            "col-4",
            "d-flex",
            "flex-column",
            "align-items-center",
            "border-2",
            "border-bottom",
            "border-success",
            "pb-3",
        ]);
        let p_1: HTMLElement = createEl(
            "p",
            ["m-0", "mb-2"],
            `Nome Capo: ${this.capo}`
        );
        let p_2: HTMLElement = createEl(
            "p",
            ["m-0"],
            `Prezzo: ${this.mostraPrezzo}$`
        );
        let p_3: HTMLElement = createEl(
            "p",
            ["m-0"],
            `Prezzo scontato: ${this.getsaldocapo}$`
        );
        col.append(p_1, p_2, p_3);
        row?.appendChild(col);
    }

    CLogga(): void {
        // console logga
        console.log(
            `Il capo > ${this.capo} < ha un prezzo di ${this.mostraPrezzo}$ ma con lo sconto del ${this.saldo}% lo paghi solo ${this.getsaldocapo}$!`
        );
    }
}

function istanziaClassi(obj: DatiCapo): void {
    let myIstance = new Capo(obj);
    myArr.push(myIstance);
}
