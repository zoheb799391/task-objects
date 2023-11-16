const bankacc = {
    balance: 300,
    accountholder: 'zoheb',
    deposit: function (a) {
        
        this.balance = this.balance + a;
        console.log(`deposit amount is`, this.balance);
    },
    withdraw: function (b) {

        this.balance = this.balance - b;
        console.log(`withdraw amount is `, this.balance)
    }
}
bankacc.deposit(20);
bankacc.withdraw(40);
bankacc.deposit(100);
console.log(bankacc.balance)