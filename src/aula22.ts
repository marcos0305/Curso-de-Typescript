class Conta{
    protected numero: number
    protected titular: string

    constructor(titular: string){
        this.numero = this.gerarNumero()
        this.titular = titular
    }

     private gerarNumero():number{
        return Math.floor(Math.random()*100000)+1

    }

    protected info(){
        console.log(`Titular : ${this.titular}`)
        console.log(`Numero : ${this.titular}`)
        console.log(`----------------------------`)
    }
} 

class ContaPF extends Conta{
    cpf: number

    constructor(cpf:number,titular: string){
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF criada: ${titular}`)
    }

}

class ContaPJ extends Conta{ 
    cnpj: number

    constructor(cnpj: number, titular:string){
        super(titular)
        this.cnpj = cnpj

                console.log(`Conta PJ criada: ${titular}`)

    }

}

const cont1  = new ContaPF(1234567910,"paulo")
const cont2  = new ContaPJ(4665454,"luis")

//const c1 = new Conta(2530, "marcos")
 //cont1.info()
 //cont2.info()