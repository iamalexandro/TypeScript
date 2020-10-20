//Definir una clase con TS

class Curso {
  private id: number;
  private nombre: string;

  constructor (id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

class EscuelaDigital {
  private nombre: string;
  private cursos: Curso [];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.cursos = [];
  }

  agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
  }
}

let escuela: EscuelaDigital;
escuela = new EscuelaDigital('EDTeam');
// const escuela = new EscuelaDigital('EDTeam');
escuela.agregarCurso(new Curso(1, 'React'));
escuela.agregarCurso(new Curso(2, 'Angular'));

// console.log('nombre: ', escuela.nombre); // no valido
console.log('escuela: ', escuela);
