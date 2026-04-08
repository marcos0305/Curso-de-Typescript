namespace Veiculos{
    enum Cores{"Preto","Branco","Cinza","Vermelho","Azul",}
    abstract class Carro{
        private nome: string;
        private motor: Motores.Motor
        private cor: string
        constructor(nome:string, motor:Motores.Motor, cor:Cores){
            this.nome=nome
            this.motor = motor
            this.cor = Cores[cor]
        }
        public liga(){
            this.motor.liga = true
        }
        public desliga(){
            this.motor.liga = false
        }
        get minhaCor(){
            return this.cor
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
        return (this.motor.liga? "sim":"nao")
        }
        get minhaPotencia(){
            return this.motor.potencia
        }
    }

    export class CarroEsportivo extends Carro{
        constructor (nome:string, cor: Cores){
            super(nome, new Motores.Motor(6,750),0)
        }
    }
}

namespace Motores{
    class Turbo{
        public pot: number
        constructor (pot:number){
            this.pot = pot
        }

        get potencia(){
           return this.pot
        }
    }

    export class Motor{
        private ligado: boolean
        private cilindros: number
        private pot: number
        constructor (pot:number, cilindros: number,turbo?: Turbo){
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turbo? turbo.potencia:0)
        }
        set liga(ligado:boolean){
            this.ligado = ligado
        }
        get liga(){
            return this.ligado
        }
        get potencia(){
            return this.pot
        }
    }
}

const carro1 = new Veiculos.CarroEsportivo("car", 0)

console.log(`Nome............: ${carro1.meuNome}`)
console.log(`Cor.............: ${carro1.minhaCor}`)
console.log(`Potencia........: ${carro1.minhaPotencia}`)
console.log(`Ligado/Desligado: ${carro1.estouLigado}`)