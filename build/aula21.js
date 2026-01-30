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
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const cont1 = new ContaPF(1234567910, "paulo");
const cont2 = new ContaPJ(4665454, "luis");
console.log(cont1.titular, cont1.numero);
console.log(cont2.titular, cont2.numero);
//const c1 = new Conta(2530, "marcos")
//# sourceMappingURL=aula21.js.map