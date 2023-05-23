class SonAccount{
    protected balanceInit:number = 0;
    protected name:string;
    protected lastName:string;

    constructor(_name:string, _lastname:string, _balance?:number) {
        this.name = _name;
        this.lastName = _lastname;
        _balance ? this.balanceInit = _balance : 0
    }

    public actualBalance():number {
        return this.balanceInit;
    }

    public showAccountInfo():void {
        console.log(`Nome: ${this.name} <<>> Cognome: ${this.lastName}`);
    }

    public oneDeposit(amount:number):number {
        this.balanceInit += amount;
        return this.balanceInit;
    }
    public oneWithDraw(amount:number):number {
        if (this.balanceInit > amount) {
            this.balanceInit -= amount;
            console.log(`Tentativo di prelevare ${amount}$ \nOperazione eseguita con successo!`);
        } else {
            console.log(`Tentativo di prelevare ${amount}$ \nOperazione non consentita. Non si dispone di ${amount}$`);
        }
        return this.balanceInit;
    }
}

class MotherAccount extends SonAccount {
    
    constructor(_balance?:number) {
        super('Gianna', 'Spendacciona', _balance);
    }

    private setInterest():number {
        return (this.balanceInit * 10) / 100;
    }

    public oneDeposit(amount: number):number {
        return super.oneDeposit(amount) + this.setInterest();
    }

    public oneWithDraw(amount: number):number {
        super.oneWithDraw(amount);
        return this.balanceInit + this.setInterest();
    }
}

let childAcc = new SonAccount('Gino', 'Tirchio');
let motherAcc = new MotherAccount(1500);

console.log('---------------------------------------------');
console.log('Son Account test');
console.log('---------------------------------------------');

childAcc.showAccountInfo();
console.log(`Saldo attuale: ${childAcc.actualBalance()}$`);
console.log(`Saldo disponibile dopo il versamento: ${childAcc.oneDeposit(50)}$`);
console.log(`Saldo disponibile dopo il versamento: ${childAcc.oneDeposit(500)}$`);
childAcc.oneWithDraw(100);
console.log('Saldo disponibile: ' + childAcc.actualBalance() + '$');
childAcc.oneWithDraw(600);
console.log('Saldo disponibile: ' + childAcc.actualBalance() + '$');

console.log('---------------------------------------------');
console.log('Mother Account test');
console.log('---------------------------------------------');
motherAcc.showAccountInfo();
console.log(`Saldo attuale: ${motherAcc.actualBalance()}`);
console.log(`Saldo disponibile dopo il versamento: ${motherAcc.oneDeposit(250)}$`);
motherAcc.oneWithDraw(400);
console.log('Saldo disponibile: ' + motherAcc.actualBalance() + '$');
motherAcc.oneWithDraw(2500);
console.log('Saldo disponibile: ' + motherAcc.actualBalance() + '$');