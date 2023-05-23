var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_name, _lastname, _balance) {
        this.balanceInit = 0;
        this.name = _name;
        this.lastName = _lastname;
        _balance ? this.balanceInit = _balance : 0;
    }
    SonAccount.prototype.actualBalance = function () {
        return this.balanceInit;
    };
    SonAccount.prototype.showAccountInfo = function () {
        console.log("Nome: ".concat(this.name, " <<>> Cognome: ").concat(this.lastName));
    };
    SonAccount.prototype.oneDeposit = function (amount) {
        this.balanceInit += amount;
        return this.balanceInit;
    };
    SonAccount.prototype.oneWithDraw = function (amount) {
        if (this.balanceInit > amount) {
            this.balanceInit -= amount;
            console.log("Tentativo di prelevare ".concat(amount, "$ \nOperazione eseguita con successo!"));
        }
        else {
            console.log("Tentativo di prelevare ".concat(amount, "$ \nOperazione non consentita. Non si dispone di ").concat(amount, "$"));
        }
        return this.balanceInit;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balance) {
        return _super.call(this, 'Gianna', 'Spendacciona', _balance) || this;
    }
    MotherAccount.prototype.setInterest = function () {
        return (this.balanceInit * 10) / 100;
    };
    MotherAccount.prototype.oneDeposit = function (amount) {
        return _super.prototype.oneDeposit.call(this, amount) + this.setInterest();
    };
    MotherAccount.prototype.oneWithDraw = function (amount) {
        _super.prototype.oneWithDraw.call(this, amount);
        return this.balanceInit + this.setInterest();
    };
    return MotherAccount;
}(SonAccount));
var childAcc = new SonAccount('Gino', 'Tirchio');
var motherAcc = new MotherAccount(1500);
console.log('---------------------------------------------');
console.log('Son Account test');
console.log('---------------------------------------------');
childAcc.showAccountInfo();
console.log("Saldo attuale: ".concat(childAcc.actualBalance(), "$"));
console.log("Saldo disponibile dopo il versamento: ".concat(childAcc.oneDeposit(50), "$"));
console.log("Saldo disponibile dopo il versamento: ".concat(childAcc.oneDeposit(500), "$"));
childAcc.oneWithDraw(100);
console.log('Saldo disponibile: ' + childAcc.actualBalance() + '$');
childAcc.oneWithDraw(600);
console.log('Saldo disponibile: ' + childAcc.actualBalance() + '$');
console.log('---------------------------------------------');
console.log('Mother Account test');
console.log('---------------------------------------------');
motherAcc.showAccountInfo();
console.log("Saldo attuale: ".concat(motherAcc.actualBalance()));
console.log("Saldo disponibile dopo il versamento: ".concat(motherAcc.oneDeposit(250), "$"));
motherAcc.oneWithDraw(400);
console.log('Saldo disponibile: ' + motherAcc.actualBalance() + '$');
motherAcc.oneWithDraw(2500);
console.log('Saldo disponibile: ' + motherAcc.actualBalance() + '$');
