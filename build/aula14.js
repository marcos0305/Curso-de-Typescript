"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teste = (txt) => {
    console.log(txt);
};
teste();
const soma = (n1) => {
    let s = 0;
    n1.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40];
console.log(soma(numer));
//# sourceMappingURL=aula14.js.map