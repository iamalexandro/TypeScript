console.log('Welcome to the third TypeScript Class');

//Progrmation Courses
//Typescript: 1, Angular: 2, Javascrip: 3

let course: string | number = 'TypeScript';
course = 1;

let courses: (string | number) [] = ['TypeScript', 2, 'Javascript'];
courses = [1, 2, 3];
courses = ['NodeJs', 'Laravel', 'React'];

//Tuplas
let courseA:[string, number] = ['TypeScript', 1];
courseA = ['Angular', 2];

console.log(courses);
console.log(courseA)
