"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//VALOR PADRÃO
function soma(n1 = 5, n2 = 0) {
    return n1 + n2;
}
console.log(soma(5, 10));
//VALOR OPCIONAIS
function user(nome, password, user) {
    console.log(`Nome: ${nome}`);
    console.log(`Password: ${password}`);
    console.log(`User: ${user}`);
}
user('marcos', '123');
//# sourceMappingURL=aula13.js.map