//Definir una clase con TS

class EscuelaDigital {
  nombre: string;
  cursos: string [];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.cursos = [];
  }

  agregarCurso(curso: string): void {
    this.cursos.push(curso);
  }
}

let escuela: EscuelaDigital;
escuela = new EscuelaDigital('EDTeam');
// const escuela = new EscuelaDigital('EDTeam');
escuela.agregarCurso('TypeScript');
escuela.agregarCurso('Angular');

console.log('escuela: ', escuela);
