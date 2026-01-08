"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
console.log(dias.segunda);
console.log(dias['domingo']);
console.log(dias[1]);
const d = new Date();
console.log(d.getDate());
console.log(d.getDay());
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['verde']);
var tp;
(function (tp) {
    tp[tp["super"] = 0] = "super";
    tp[tp["mega"] = 1] = "mega";
    tp[tp["power"] = 2] = "power";
})(tp || (tp = {}));
console.log(tp.mega);
//# sourceMappingURL=aula09.js.map