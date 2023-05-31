"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("../assets/module/module");
class Smartphone {
    constructor(_carica, _elementsHTML) {
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.registroChiamate = [];
        this.callCounter = 0;
        this.carica = _carica;
        this.elementsHTML = _elementsHTML;
        this.updateHTML();
        this.setupBtns();
    }
    ricarica(euro) {
        var _a;
        this.carica += euro;
        this.updateHTML();
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
    }
    get numero404() {
        return `Il tuo credito residuo è di: ${this.carica.toFixed(2)}€`;
    }
    get getNumeroChiamate() {
        return this.registroChiamate.length;
    }
    chiamata(min) {
        var _a, _b;
        let calcolaCosto = this.carica - this.costoMinuto * min;
        if (calcolaCosto > 0) {
            (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
            let now = `${new Date().getDay() + 1}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
            let callDetails = {
                id: this.callCounter,
                durata: min,
                date: now,
            };
            this.callCounter++;
            this.registroChiamate.push(callDetails);
            this.carica -= this.costoMinuto * min;
            this.updateHTML();
        }
        else {
            (_b = this.elementsHTML.errore) === null || _b === void 0 ? void 0 : _b.classList.remove("opacity-0");
        }
    }
    azzeraChiamate() {
        var _a;
        this.registroChiamate = [];
        this.callCounter = 0;
        this.updateHTML();
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
        this.elementsHTML.callsList.innerHTML = "";
    }
    get mostraRegistroChiamate() {
        return this.registroChiamate;
    }
    filtraChiamatePerDataOra(str) {
        var _a;
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
        return this.registroChiamate.filter((el) => {
            el.date === str;
        });
    }
    updateHTML() {
        this.elementsHTML.credito.innerText = this.numero404;
        this.elementsHTML.numCalls.innerText = `${this.registroChiamate.length}`;
    }
    setupBtns() {
        var _a, _b, _c, _d;
        (_a = this.elementsHTML.btnRicarica) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            this.ricarica(5);
        });
        (_b = this.elementsHTML.btnAzzeraChiamate) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            this.azzeraChiamate();
        });
        (_c = this.elementsHTML.btnEffettuaChiamata) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            this.chiamata(Number(this.elementsHTML.inputMin.value));
            this.elementsHTML.inputMin.value = "";
        });
        (_d = this.elementsHTML.btnMostraRegistro) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            this.elementsHTML.callsList.innerHTML = "";
            this.mostraRegistroChiamate.forEach((el) => {
                var _a;
                //
                let col = (0, module_1.createEl)("div", [
                    "col",
                    "text-center",
                    "pb-2",
                    "mb-2",
                    "border-bottom",
                    "border-1",
                    "border-black",
                ]);
                let primo_p = (0, module_1.createEl)("p", ["m-0"], `ID: ${el.id}`);
                let secondo_p = (0, module_1.createEl)("p", ["m-0", "mt-1"], `Durata: ${el.durata}`);
                let terzo_p = (0, module_1.createEl)("p", ["m-0"], `Data: ${el.date}`);
                col.append(primo_p, secondo_p, terzo_p);
                (_a = this.elementsHTML.callsList) === null || _a === void 0 ? void 0 : _a.append(col);
            });
        });
    }
}
window.onload = function () {
    let els_1 = {
        credito: (0, module_1.byid)("credito-one"),
        numCalls: (0, module_1.byid)("num-chiamate-one"),
        callsList: (0, module_1.byid)("dettagli-chiamate-one"),
        btnRicarica: (0, module_1.byid)("ric-one"),
        inputMin: (0, module_1.byid)("num-min-one"),
        btnEffettuaChiamata: (0, module_1.byid)("call-one"),
        btnMostraRegistro: (0, module_1.byid)("reg-one"),
        btnAzzeraChiamate: (0, module_1.byid)("reset-one"),
        errore: (0, module_1.byid)("err-one"),
    };
    let els_2 = {
        credito: (0, module_1.byid)("credito-two"),
        numCalls: (0, module_1.byid)("num-chiamate-two"),
        callsList: (0, module_1.byid)("dettagli-chiamate-two"),
        btnRicarica: (0, module_1.byid)("ric-two"),
        inputMin: (0, module_1.byid)("num-min-two"),
        btnEffettuaChiamata: (0, module_1.byid)("call-two"),
        btnMostraRegistro: (0, module_1.byid)("reg-two"),
        btnAzzeraChiamate: (0, module_1.byid)("reset-two"),
        errore: (0, module_1.byid)("err-one"),
    };
    let els_3 = {
        credito: (0, module_1.byid)("credito-three"),
        numCalls: (0, module_1.byid)("num-chiamate-three"),
        callsList: (0, module_1.byid)("dettagli-chiamate-three"),
        btnRicarica: (0, module_1.byid)("ric-three"),
        inputMin: (0, module_1.byid)("num-min-three"),
        btnEffettuaChiamata: (0, module_1.byid)("call-three"),
        btnMostraRegistro: (0, module_1.byid)("reg-three"),
        btnAzzeraChiamate: (0, module_1.byid)("reset-three"),
        errore: (0, module_1.byid)("err-three"),
    };
    new Smartphone(5, els_1);
    new Smartphone(15, els_2);
    new Smartphone(50, els_3);
};
