class Conta{
    numero: number
    titular: string

    constructor(numero: number, titular: string){
        this.numero = numero
        this.titular = titular
    }
}

class ContaPF extends Conta{

}

class ContaPJ extends Conta{

}

const cont1  = new ContaPF(1234567910,"paulo")
const cont2  = new ContaPJ(112233445566,"luis")

console.log(cont1.titular, cont1.numero);
console.log(cont2.titular, cont2.numero);

//const c1 = new Conta(2530, "marcos")