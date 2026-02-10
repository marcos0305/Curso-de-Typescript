interface curso{
    titulo: string;
    des: string;
    aulas: number;
    maxAlunos: number;
}

let curso1 : curso
let curso2: curso 

curso1={titulo: "ts",des: "Curso de TypeScript",aulas: 15,maxAlunos: 25,}
curso2={titulo: "js",des: "Curso de JavaScript",aulas: 10,maxAlunos: 30,}

console.log(curso2)