//let [a,b,c,d]= ["10","20",'30','40']

const cor={
    cor1 : "branco",
    cor2 : "verde",
    cor3 : "amarelo",
    cor4 : "vermelho",
}

let{cor1,cor2,cor3,cor4} = cor

let [nu1,nu2 = 0,...nu3] = [10,20,30,40,50,60,70]

const cores = () =>{
    return["branco","verde","amarelo","vermelho"]
} 
let [c1,c2,c3,c4] = cores()

let texto = "hello world"
let[...t] = texto.split(" ")

console.log(t)

