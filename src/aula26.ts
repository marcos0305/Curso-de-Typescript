abstract class Conta{
    protected readonly numero: number
    protected titular: string
    private saldoconta: number

    constructor(titular: string){
        this.numero = this.gerarNumero()
        this.titular = titular
        this.saldoconta = 0  
    }

      gerarNumero():number{
        return Math.floor(Math.random()*100000)+1
    }

    protected info(){
        console.log(`Titular : ${this.titular}`)
        console.log(`Numero : ${this.numero}`)
    }

    get saldo():number{//getter
        return this.saldoconta
    }

    set saldo(saldoconta: number){//setter
        this.saldoconta = saldoconta
    }

    protected deposito(valor:number){

            if (valor < 0){
            console.log('Valor insuficiente')
            return
        }

        this.saldoconta += valor
    }

    protected saque(valor:number){

        if (valor < 0){
            console.log('Valor insuficiente')
            return
        }

        if(valor <= this.saldoconta){
            this.saldoconta -= valor
        }else{
        console.log(`Saldo insuficiente`)
        }
    }



} 

class ContaPF extends Conta{
    cpf: number

    constructor(cpf:number,titular: string){
        super(titular)
        this.cpf = this.gerarNumero()
        
    }

    info(){
        console.log(`Tipo: PF`)
        super.info()
        console.log(`CPF: ${this.cpf}`)
        console.log(`----------------------------`)

    }

    public deposito(valor: number): void {
        if(valor >= 1000){
            console.log('Valor muito grandre para a conta')
        }else{
            super.deposito(valor)
        }
    }

    public saque(valor: number):void{
         if(valor >= 1000){
            console.log('Valor de saque muito grande para este tipo de conta')
        }else{
            super.saque(valor)
        }
    }

}

class ContaPJ extends Conta{ 
    cnpj: number

    constructor(cnpj: number, titular:string){
        super(titular)
        this.cnpj = this.gerarNumero()

    }

    info(){
        console.log(`Tipo: PJ`)
        super.info()
        console.log(`CNPJ: ${this.cnpj}`)
        console.log(`----------------------------`)
    }

       public deposito(valor: number): void {
        if(valor > 1000){
            console.log('Valor muito grande para a conta')
        }else{
            super.deposito(valor)
        }

    }

    public saque(valor: number):void{
         if(valor >= 10000){
            console.log('Valor de saque muito grande para este tipo de conta')
        }else{
            super.saque(valor)
        }
    }

}

const cont1  = new ContaPF(1234567910,"paulo")
const cont2  = new ContaPJ(4665454,"luis")

cont2.deposito(800)
cont2.deposito(800)

cont1.saldo = 250
//cont2.saque(200)
console.log(cont1.saldo)

//cont2.saque(5)
//.log(cont2.saldo())

//const c1 = new Conta(2530, "marcos")
cont1.info()
//cont2.info() 