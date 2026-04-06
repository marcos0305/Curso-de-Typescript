"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3.5);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const m1 = new Motores.Motor(2.5);
const v1 = new Veiculos.Carro("rapit");
console.log(m1.pot);
console.log(v1.nome);
//# sourceMappingURL=aula32.js.map