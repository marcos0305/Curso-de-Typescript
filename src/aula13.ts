//VALOR PADRÃO
function soma(n1:number=5, n2:number=0): number{
    return n1+n2
}

console.log(soma(5,10));

//VALOR OPCIONAIS
function user(nome: string, password: string, user?:string):void{

    console.log(`Nome: ${nome}`);
    console.log(`Password: ${password}`);
    console.log(`User: ${user}`);
}
user('marcos', '123');