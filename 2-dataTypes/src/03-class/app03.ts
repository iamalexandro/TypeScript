// Verificando tipos de datos

type course = 'Angular' | 'Typescript';
type CourseObj = {
  name: string,
  identifier: number
}

const firstCourse: CourseObj = {
  name: 'React',
  identifier: 1
};

const stringCourse: string = `
{
  name: 'React',
  identifier: 1
}
`;

function getIdCourse (c: string): number {
  const obj = JSON.parse(c);
  // return (obj as CourseObj).identifier; // "AS" syntax
  return (<CourseObj>obj).identifier; //casting
}
