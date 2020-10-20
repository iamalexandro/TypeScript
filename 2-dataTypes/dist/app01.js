"use strict";
//Definir una clase con TS
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
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
escuela.agregarCurso(new Curso(1, 'React'));
escuela.agregarCurso(new Curso(2, 'Angular'));
// console.log('nombre: ', escuela.nombre); // no valido
console.log('escuela: ', escuela);
