interface curso{
    titulo: string;
    des: string;
    aulas: number;
    maxAlunos?: number;
    iniciarCurso?(teste:string): void;
}

interface cursoMat extends curso{
    nota:number;
    descricao: string;
} 

let curso1 : curso
let curso2: curso 
let curso3: cursoMat

curso1={titulo: "ts",des: "Curso de TypeScript",aulas: 15,maxAlunos: 25}
curso2={titulo: "js",des: "Curso de JavaScript",aulas: 10,maxAlunos: 30 }
curso3= {titulo: "js",des: "Curso de JavaScript",aulas: 10,maxAlunos: 30, nota: 45, descricao:"Matemática"}


console.log(curso2)