"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumero();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumero() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular : ${this.titular}`);
        console.log(`Numero : ${this.numero}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        console.log(`Saldo insuficiente`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = this.gerarNumero();
    }
    info() {
        console.log(`Tipo: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`----------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('Valor muito grandre para a conta');
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = this.gerarNumero();
    }
    info() {
        console.log(`Tipo: PJ`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`----------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log('Valor muito grandre para a conta');
        }
        else {
            super.deposito(valor);
        }
    }
}
const cont1 = new ContaPF(1234567910, "paulo");
const cont2 = new ContaPJ(4665454, "luis");
cont1.deposito(800);
cont1.deposito(800);
cont1.deposito(800);
console.log(cont1.saldo());
//const c1 = new Conta(2530, "marcos")
//cont1.info()
//cont2.info()
//# sourceMappingURL=aula23.js.map