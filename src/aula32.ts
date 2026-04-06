namespace Veiculos{
      export class Carro{
        nome: string;
        motor: Motores.Motor
        constructor(nome:string){
            this.nome=nome
            this.motor = new Motores.Motor(3.5)
        }
    }
}

namespace Motores{

    class Turbo{
        pot: number
        constructor (pot:number){
            this.pot = pot
        }
    }

    export class Motor{
        pot: number
        constructor (pot:number){
            this.pot = pot
        }
    }
}


const m1 = new Motores.Motor(2.5)
const v1 = new Veiculos.Carro("rapit")

console.log(m1.pot)
console.log(v1.nome)