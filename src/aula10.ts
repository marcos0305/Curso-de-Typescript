//NULL - Tipo nulo
let vnome: string|null;
vnome = null
console.log(vnome);

//UNDEFIND - Indefinido
let vnome2:any;
console.log(vnome2);

//UNKNOWN - Desconhecido
let vnome3:unknown=10 //unknown so pode ser atribuído em tipos de UNKNOWN ou ANY
let vnome4:any= vnome3;
console.log(vnome4);
