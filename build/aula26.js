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
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('Valor insuficiente');
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log('Valor insuficiente');
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
class ContaPF extends Conta {
    taxaCalculo = 10;
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = this.gerarNumero();
    }
    CalcularTributos(valor) {
        return valor * this.taxaCalculo;
    }
    info() {
        console.log(`Tipo: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`----------------------------`);
    }
    deposito(valor) {
        if (valor >= 1000) {
            console.log('Valor muito grandre para a conta');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor >= 1000) {
            console.log('Valor de saque muito grande para este tipo de conta');
        }
        else {
            super.saque(valor);
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
        if (valor > 1000) {
            console.log('Valor muito grande para a conta');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor >= 10000) {
            console.log('Valor de saque muito grande para este tipo de conta');
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPF(1234567910, "paulo");
const cont2 = new ContaPJ(4665454, "luis");
cont2.deposito(800);
cont2.deposito(800);
cont1.saldo = 250;
//cont2.saque(200)
console.log(cont1.saldo);
//cont2.saque(5)
//.log(cont2.saldo())
//const c1 = new Conta(2530, "marcos")
cont1.info();
//cont2.info() 
//# sourceMappingURL=aula26.js.map