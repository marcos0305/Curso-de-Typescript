"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Cinza"] = 2] = "Cinza";
        Cores[Cores["Vermelho"] = 3] = "Vermelho";
        Cores[Cores["Azul"] = 4] = "Azul";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        liga() {
            this.motor.liga = true;
        }
        desliga() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "sim" : "nao");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 750), 0);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(pot, cilindros, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("car", 0);
console.log(`Nome............: ${carro1.meuNome}`);
console.log(`Cor.............: ${carro1.minhaCor}`);
console.log(`Potencia........: ${carro1.minhaPotencia}`);
console.log(`Ligado/Desligado: ${carro1.estouLigado}`);
//# sourceMappingURL=aula34.js.map