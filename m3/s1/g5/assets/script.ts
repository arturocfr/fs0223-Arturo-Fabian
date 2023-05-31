import { byid, createEl } from "../assets/module/module";

type Registry = {
    id: number;
    durata: number;
    date: string;
};

type Elements = {
    credito: HTMLElement | null;
    numCalls: HTMLElement | null;
    callsList: HTMLElement | null;
    btnRicarica: HTMLButtonElement | null;
    inputMin: HTMLInputElement | null;
    btnEffettuaChiamata: HTMLButtonElement | null;
    errore: HTMLElement | null;
    btnMostraRegistro: HTMLButtonElement | null;
    btnAzzeraChiamate: HTMLButtonElement | null;
};

interface ISmartPhone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    registroChiamate: Registry[];

    ricarica(euro: number): void;
    get numero404(): string;
    get getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
    get mostraRegistroChiamate(): Registry[];
    filtraChiamatePerDataOra(str: string): Registry[];
}

class Smartphone implements ISmartPhone {
    carica: number;
    numeroChiamate: number = 0;
    costoMinuto: number = 0.2;
    registroChiamate: Registry[] = [];
    private callCounter: number = 0;
    protected elementsHTML: Elements;

    constructor(_carica: number, _elementsHTML: Elements) {
        this.carica = _carica;
        this.elementsHTML = _elementsHTML;
        this.updateHTML();
        this.setupBtns();
    }

    ricarica(euro: number): void {
        this.carica += euro;
        this.updateHTML();
        this.elementsHTML.errore?.classList.add("opacity-0");
    }

    get numero404(): string {
        return `Il tuo credito residuo è di: ${this.carica.toFixed(2)}€`;
    }

    get getNumeroChiamate(): number {
        return this.registroChiamate.length;
    }

    chiamata(min: number): void {
        let calcolaCosto = this.carica - this.costoMinuto * min;
        if (calcolaCosto > 0) {
            
            this.elementsHTML.errore?.classList.add("opacity-0");
            let now = `${new Date().getDay() + 1}/${
                new Date().getMonth() + 1
            }/${new Date().getFullYear()}`;
            let callDetails: Registry = {
                id: this.callCounter,
                durata: min,
                date: now,
            };
            this.callCounter++;
            this.registroChiamate.push(callDetails);

           
            this.carica -= this.costoMinuto * min;
            this.updateHTML();
        } else {
           
            this.elementsHTML.errore?.classList.remove("opacity-0");
        }
    }

    azzeraChiamate(): void {
        this.registroChiamate = [];
        this.callCounter = 0;
        this.updateHTML();
        this.elementsHTML.errore?.classList.add("opacity-0");
        this.elementsHTML.callsList!.innerHTML = "";
    }

    get mostraRegistroChiamate(): Registry[] {
        return this.registroChiamate;
    }

    filtraChiamatePerDataOra(str: string): Registry[] {
        this.elementsHTML.errore?.classList.add("opacity-0");
        return this.registroChiamate.filter((el) => {
            el.date === str;
        });
    }

    updateHTML(): void {
        this.elementsHTML.credito!.innerText = this.numero404;
        this.elementsHTML.numCalls!.innerText = `${this.registroChiamate.length}`;
    }

    setupBtns(): void {
            this.elementsHTML.btnRicarica?.addEventListener("click", () => {
            this.ricarica(5);
        });
        this.elementsHTML.btnAzzeraChiamate?.addEventListener("click", () => {
            this.azzeraChiamate();
        });
        this.elementsHTML.btnEffettuaChiamata?.addEventListener("click", () => {
            this.chiamata(Number(this.elementsHTML.inputMin!.value));
            this.elementsHTML.inputMin!.value = "";
        });
        this.elementsHTML.btnMostraRegistro?.addEventListener("click", () => {
            this.elementsHTML.callsList!.innerHTML = "";
            this.mostraRegistroChiamate.forEach((el) => {
                //
                let col: HTMLElement = createEl("div", [
                    "col",
                    "text-center",
                    "pb-2",
                    "mb-2",
                    "border-bottom",
                    "border-1",
                    "border-black",
                ]);
                let primo_p = createEl("p", ["m-0"], `ID: ${el.id}`);
                let secondo_p = createEl(
                    "p",
                    ["m-0", "mt-1"],
                    `Durata: ${el.durata}`
                );
                let terzo_p = createEl("p", ["m-0"], `Data: ${el.date}`);
                col.append(primo_p, secondo_p, terzo_p);
                this.elementsHTML.callsList?.append(col);
            });
        });
    }
}

window.onload = function (): void {
    let els_1: Elements = {
        credito: byid("credito-one"),
        numCalls: byid("num-chiamate-one"),
        callsList: byid("dettagli-chiamate-one"),
        btnRicarica: <HTMLButtonElement>byid("ric-one"),
        inputMin: <HTMLInputElement>byid("num-min-one"),
        btnEffettuaChiamata: <HTMLButtonElement>byid("call-one"),
        btnMostraRegistro: <HTMLButtonElement>byid("reg-one"),
        btnAzzeraChiamate: <HTMLButtonElement>byid("reset-one"),
        errore: byid("err-one"),
    };
    let els_2: Elements = {
        credito: byid("credito-two"),
        numCalls: byid("num-chiamate-two"),
        callsList: byid("dettagli-chiamate-two"),
        btnRicarica: <HTMLButtonElement>byid("ric-two"),
        inputMin: <HTMLInputElement>byid("num-min-two"),
        btnEffettuaChiamata: <HTMLButtonElement>byid("call-two"),
        btnMostraRegistro: <HTMLButtonElement>byid("reg-two"),
        btnAzzeraChiamate: <HTMLButtonElement>byid("reset-two"),
        errore: byid("err-one"),
    };
    let els_3: Elements = {
        credito: byid("credito-three"),
        numCalls: byid("num-chiamate-three"),
        callsList: byid("dettagli-chiamate-three"),
        btnRicarica: <HTMLButtonElement>byid("ric-three"),
        inputMin: <HTMLInputElement>byid("num-min-three"),
        btnEffettuaChiamata: <HTMLButtonElement>byid("call-three"),
        btnMostraRegistro: <HTMLButtonElement>byid("reg-three"),
        btnAzzeraChiamate: <HTMLButtonElement>byid("reset-three"),
        errore: byid("err-three"),
    };
    new Smartphone(5, els_1);
    new Smartphone(15, els_2);
    new Smartphone(50, els_3);
};