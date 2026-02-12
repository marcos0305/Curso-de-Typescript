"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f_teste(v, f) {
    return f;
}
console.log(f_teste("40", 40));
console.log(f_teste(40, "40"));
console.log(f_teste(true, false));
class teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
let ct1 = new teste("40");
console.log(ct1.valor);
//# sourceMappingURL=aula29.js.map