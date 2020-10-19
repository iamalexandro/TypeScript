"use strict";
//Definir una clase con TS
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre) {
        this.nombre = nombre;
        this.cursos = [];
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela;
escuela = new EscuelaDigital('EDTeam');
// const escuela = new EscuelaDigital('EDTeam');
escuela.agregarCurso('TypeScript');
escuela.agregarCurso('Angular');
console.log('escuela: ', escuela);
