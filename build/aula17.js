"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comuputador {
    nome;
    ram;
    cpu;
    ligado = false;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
    }
}
//Instanciar
const c1 = new Comuputador("gamer", 500, 200);
const c2 = new Comuputador("idel", 325, 150);
const c3 = new Comuputador("lenovo", 450, 350);
console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);
//# sourceMappingURL=aula17.js.map