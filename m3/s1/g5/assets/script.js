"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_js_1 = require("./module/module.js");
var Smartphone = /** @class */ (function () {
    function Smartphone(_carica, _elementsHTML) {
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.registroChiamate = [];
        this.callCounter = 0;
        this.carica = _carica;
        this.elementsHTML = _elementsHTML;
        this.updateHTML();
        this.setupBtns();
    }
    Smartphone.prototype.ricarica = function (euro) {
        var _a;
        this.carica += euro;
        this.updateHTML();
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
    };
    Object.defineProperty(Smartphone.prototype, "numero404", {
        get: function () {
            return "Il tuo credito residuo \u00E8 di: ".concat(this.carica.toFixed(2), "\u20AC");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Smartphone.prototype, "getNumeroChiamate", {
        get: function () {
            return this.registroChiamate.length;
        },
        enumerable: false,
        configurable: true
    });
    Smartphone.prototype.chiamata = function (min) {
        var _a, _b;
        var calcolaCosto = this.carica - this.costoMinuto * min;
        if (calcolaCosto > 0) {
            (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
            var now = "".concat(new Date().getDay() + 1, "/").concat(new Date().getMonth() + 1, "/").concat(new Date().getFullYear());
            var callDetails = {
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
    };
    Smartphone.prototype.azzeraChiamate = function () {
        var _a;
        this.registroChiamate = [];
        this.callCounter = 0;
        this.updateHTML();
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
        this.elementsHTML.callsList.innerHTML = "";
    };
    Object.defineProperty(Smartphone.prototype, "mostraRegistroChiamate", {
        get: function () {
            return this.registroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    Smartphone.prototype.filtraChiamatePerDataOra = function (str) {
        var _a;
        (_a = this.elementsHTML.errore) === null || _a === void 0 ? void 0 : _a.classList.add("opacity-0");
        return this.registroChiamate.filter(function (el) {
            el.date === str;
        });
    };
    Smartphone.prototype.updateHTML = function () {
        this.elementsHTML.credito.innerText = this.numero404;
        this.elementsHTML.numCalls.innerText = "".concat(this.registroChiamate.length);
    };
    Smartphone.prototype.setupBtns = function () {
        var _this = this;
        var _a, _b, _c, _d;
        (_a = this.elementsHTML.btnRicarica) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            _this.ricarica(5);
        });
        (_b = this.elementsHTML.btnAzzeraChiamate) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            _this.azzeraChiamate();
        });
        (_c = this.elementsHTML.btnEffettuaChiamata) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
            _this.chiamata(Number(_this.elementsHTML.inputMin.value));
            _this.elementsHTML.inputMin.value = "";
        });
        (_d = this.elementsHTML.btnMostraRegistro) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
            _this.elementsHTML.callsList.innerHTML = "";
            _this.mostraRegistroChiamate.forEach(function (el) {
                var _a;
                //
                var col = (0, function_js_1.createEl)("div", [
                    "col",
                    "text-center",
                    "pb-2",
                    "mb-2",
                    "border-bottom",
                    "border-1",
                    "border-black",
                ]);
                var primo_p = (0, function_js_1.createEl)("p", ["m-0"], "ID: ".concat(el.id));
                var secondo_p = (0, function_js_1.createEl)("p", ["m-0", "mt-1"], "Durata: ".concat(el.durata));
                var terzo_p = (0, function_js_1.createEl)("p", ["m-0"], "Data: ".concat(el.date));
                col.append(primo_p, secondo_p, terzo_p);
                (_a = _this.elementsHTML.callsList) === null || _a === void 0 ? void 0 : _a.append(col);
            });
        });
    };
    return Smartphone;
}());
window.onload = function () {
    var els_1 = {
        credito: (0, function_js_1.byid)("credito-one"),
        numCalls: (0, function_js_1.byid)("num-chiamate-one"),
        callsList: (0, function_js_1.byid)("dettagli-chiamate-one"),
        btnRicarica: (0, function_js_1.byid)("ric-one"),
        inputMin: (0, function_js_1.byid)("num-min-one"),
        btnEffettuaChiamata: (0, function_js_1.byid)("call-one"),
        btnMostraRegistro: (0, function_js_1.byid)("reg-one"),
        btnAzzeraChiamate: (0, function_js_1.byid)("reset-one"),
        errore: (0, function_js_1.byid)("err-one"),
    };
    var els_2 = {
        credito: (0, function_js_1.byid)("credito-two"),
        numCalls: (0, function_js_1.byid)("num-chiamate-two"),
        callsList: (0, function_js_1.byid)("dettagli-chiamate-two"),
        btnRicarica: (0, function_js_1.byid)("ric-two"),
        inputMin: (0, function_js_1.byid)("num-min-two"),
        btnEffettuaChiamata: (0, function_js_1.byid)("call-two"),
        btnMostraRegistro: (0, function_js_1.byid)("reg-two"),
        btnAzzeraChiamate: (0, function_js_1.byid)("reset-two"),
        errore: (0, function_js_1.byid)("err-one"),
    };
    var els_3 = {
        credito: (0, function_js_1.byid)("credito-three"),
        numCalls: (0, function_js_1.byid)("num-chiamate-three"),
        callsList: (0, function_js_1.byid)("dettagli-chiamate-three"),
        btnRicarica: (0, function_js_1.byid)("ric-three"),
        inputMin: (0, function_js_1.byid)("num-min-three"),
        btnEffettuaChiamata: (0, function_js_1.byid)("call-three"),
        btnMostraRegistro: (0, function_js_1.byid)("reg-three"),
        btnAzzeraChiamate: (0, function_js_1.byid)("reset-three"),
        errore: (0, function_js_1.byid)("err-three"),
    };
    new Smartphone(5, els_1);
    new Smartphone(15, els_2);
    new Smartphone(50, els_3);
};
