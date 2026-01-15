const teste = (txt?: string): void=>{
    console.log(txt);
}
teste()

const soma=(n1:number[]):number{
   let s: number = 0;
    n1.forEach((e)=>{
        s += e;
    })
    return s;
}
    let numer:number[]=[10,20,30,40]

console.log(soma(numer));