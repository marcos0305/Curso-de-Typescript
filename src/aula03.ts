class Curso{
    canal = null;
    curso = null;

    constructor(canal: any, curso: any){
        this.curso = curso;
        this.canal = canal;
    }
}

let c1 = new Curso("aula", "cbm");
console.log(c1.canal);
console.log(c1.curso);