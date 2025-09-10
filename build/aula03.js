"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.curso = curso;
        this.canal = canal;
    }
}
let c1 = new Curso("aula", "cbm");
console.log(c1.canal);
console.log(c1.curso);
//# sourceMappingURL=aula03.js.map