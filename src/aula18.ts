class Comuputador{
     nome:string;
     ram:number;
     cpu:number;
     ligado:boolean = false;

   constructor(nome:string, ram:number, cpu: number){
        this.nome=nome;
        this.ram=ram; 
        this.cpu=cpu;
   }

   info():void{
        console.log(`Nome..:${this.nome}`)
        console.log(`Ram...:${this.ram}`)
        console.log(`Cpu...:${this.cpu}`)
        console.log(`Ligado:${this.ligado?"sim":"não"}`)
        console.log("------------------------")
   }

   ligar():void{
    this.ligado = true;
   }

   desligar():void{
        this.ligado = false;
   }
}
 
//Instanciar
const c1 = new Comuputador("gamer",500,200);
const c2 = new Comuputador("idel", 325, 150);
const c3 = new Comuputador("lenovo", 450,350);

c1.desligar();
c2.ligar();
c3.desligar();


c1.info();
c2.info();
c3.info();