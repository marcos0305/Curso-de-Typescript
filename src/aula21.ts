class Conta{
    numero: number
    titular: string

    constructor(titular: string){
        this.numero = this.gerarNumero()
        this.titular = titular
    }

    gerarNumero():number{
        return Math.floor(Math.random()*100000)+1
    }
}

class ContaPF extends Conta{
    cpf: number

    constructor(cpf:number,titular: string){
        super(titular)
        this.cpf = cpf
    }

}

class ContaPJ extends Conta{ 
    cnpj: number

    constructor(cnpj: number, titular:string){
        super(titular)
        this.cnpj = cnpj
    }

}

const cont1  = new ContaPF(1234567910,"paulo")
const cont2  = new ContaPJ(4665454,"luis")

console.log(cont1.titular, cont1.numero);
console.log(cont2.titular, cont2.numero);

//const c1 = new Conta(2530, "marcos")