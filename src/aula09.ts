enum dias{
    domingo = 1,
    segunda = 2,
    terca = 3,
    quarta = 4,
    quinta = 5,
    sexta = 6,
    sabado = 7
}

console.log(dias.segunda);
console.log(dias['domingo']);
console.log(dias[1]);

const d = new Date();
console.log(d.getDate());
console.log(d.getDay()); 

enum cores{
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log (cores.branco);
console.log(cores['verde'])


enum tp{
    super,
    mega,
    power
}

console.log(tp.mega)