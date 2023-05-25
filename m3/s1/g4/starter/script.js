"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_js_1 = require("./modules/functions.js");
var myArr = [];
var Capo = /** @class */ (function () {
    function Capo(_obj) {
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
    Object.defineProperty(Capo.prototype, "mostraPrezzo", {
        get: function () {
            return this.prezzoivainclusa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capo.prototype, "getsaldocapo", {
        get: function () {
            // ritorna il prezzo scontato
            return (this.prezzoivainclusa * this.saldo) / 100;
        },
        enumerable: false,
        configurable: true
    });
    Capo.prototype.creaCols = function () {
        // crea le cols dentro la row
        var row = document.querySelector(".row");
        var col = (0, functions_js_1.createEl)("div", [
            "col-4",
            "d-flex",
            "flex-column",
            "align-items-center",
            "border-2",
            "border-bottom",
            "border-success",
            "pb-3",
        ]);
        var p_1 = (0, functions_js_1.createEl)("p", ["m-0", "mb-2"], "Nome Capo: ".concat(this.capo));
        var p_2 = (0, functions_js_1.createEl)("p", ["m-0"], "Prezzo: ".concat(this.mostraPrezzo, "$"));
        var p_3 = (0, functions_js_1.createEl)("p", ["m-0"], "Prezzo scontato: ".concat(this.getsaldocapo, "$"));
        col.append(p_1, p_2, p_3);
        row === null || row === void 0 ? void 0 : row.appendChild(col);
    };
    Capo.prototype.CLogga = function () {
        // console logga
        console.log("Il capo > ".concat(this.capo, " < ha un prezzo di ").concat(this.mostraPrezzo, "$ ma con lo sconto del ").concat(this.saldo, "% lo paghi solo ").concat(this.getsaldocapo, "$!"));
    };
    return Capo;
}());
function istanziaClassi(obj) {
    var myIstance = new Capo(obj);
    myArr.push(myIstance);
}
window.onload = function () {
    fetch("assets/Abbigliamento.json")
        .then(function (res) {
        if (res.ok) {
            return res.json();
        }
        else {
            throw new Error("Errore nel leggere il JSON");
        }
    })
        .then(function (res) {
        console.log(res);
        res.forEach(function (el) { return istanziaClassi(el); });
        console.log(myArr);
    })
        .catch(function (err) { return console.log(err); });
};
