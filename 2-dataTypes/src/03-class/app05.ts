// Interfaces

interface ICourse {
  name: string,
  identifier?: number
}

let miniCourse: ICourse;
miniCourse = {
  name: 'React',
  identifier: 1
};

interface ICourses {
  items: ICourse[]
} 

let miniCourses: ICourses;

function createCourse(params: ICourse): ICourse {
  return {
    name: params.name,
    identifier: params.identifier
  };
}

const newCourse = createCourse({
  name: 'JavaScript',
  identifier: 2
});

console.log('new course: ', newCourse);

const angularCourse = createCourse({
  name: 'Angular'
});

console.log('Angular Course', angularCourse);


//Extends Interface
interface courseEDTeam extends ICourse {
  cost: number;
}

// Ejemplo CursoEDTeam

const firstCourseED: courseEDTeam = {
  cost: 20,
  name: 'Laravel',
  identifier: 10
}

console.log('EDTeam course: ', firstCourseED);
