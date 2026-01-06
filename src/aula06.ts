let numeros: number[] = [20,30,40];
//let numeros: Array <number | string>=[20,30,40,"Marcos"];
//let numeros: (number | string)[] = [20,10,30, "Paulo"];
numeros.push(10);
numeros.unshift(60); 
numeros.pop();
numeros.shift();
console.log(numeros)


let numeros_on: ReadonlyArray<number> = [100,200,300];
console.log(numeros_on)