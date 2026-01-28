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
    info() {
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado ? "sim" : "não"}`);
        console.log("------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(quantidade) {
        if (quantidade >= 0 && quantidade <= 500) {
            this.ram = quantidade;
        }
        else {
            console.log(` Valor ${quantidade} para o computador ${this.nome} não é permitido`);
        }
    }
}
//Instanciar
const c1 = new Comuputador("gamer", 500, 200);
const c2 = new Comuputador("idel", 325, 150);
const c3 = new Comuputador("lenovo", 450, 350);
c1.desligar();
c2.ligar();
c3.desligar();
c1.upRam(-100);
c1.info();
c2.info();
c3.info();
//# sourceMappingURL=aula19.js.map