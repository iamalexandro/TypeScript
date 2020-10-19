"use strict";
// Interfaces
var miniCourse;
miniCourse = {
    name: 'React',
    identifier: 1
};
var miniCourses;
function createCourse(params) {
    return {
        name: params.name,
        identifier: params.identifier
    };
}
var newCourse = createCourse({
    name: 'JavaScript',
    identifier: 2
});
console.log('new course: ', newCourse);
var angularCourse = createCourse({
    name: 'Angular'
});
console.log('Angular Course', angularCourse);
// Ejemplo CursoEDTeam
var firstCourseED = {
    cost: 20,
    name: 'Laravel',
    identifier: 10
};
console.log('EDTeam course: ', firstCourseED);
