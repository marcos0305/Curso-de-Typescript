function f_teste<T, U > (v:T, f: U): U{
    return f
}


console.log(f_teste<string, number>("40", 40))
console.log(f_teste<number, string>(40, "40"))
console.log(f_teste<boolean, boolean>(true, false))


class teste<t>{
    public valor: t
    constructor(valor: t){
        this.valor= valor
    }
}

let ct1 = new teste <string> ("40")

console.log(ct1.valor)