"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumero();
        this.titular = titular;
    }
    gerarNumero() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular : ${this.titular}`);
        console.log(`Numero : ${this.titular}`);
        console.log(`----------------------------`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
    }
}
const cont1 = new ContaPF(1234567910, "paulo");
const cont2 = new ContaPJ(4665454, "luis");
//const c1 = new Conta(2530, "marcos")
//cont1.info()
//cont2.info()
//# sourceMappingURL=aula22.js.map