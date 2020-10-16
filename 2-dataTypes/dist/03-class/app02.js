"use strict";
// Available courses: NodeJs, Laravel, React
var purchasedCourse;
// purchasedCourse = 'Angular'; no se puede!!
purchasedCourse = 'React';
function purchaseCourse(course) {
    purchasedCourse = course;
}
purchaseCourse('React');
console.log('Curso Comprado: ' + purchasedCourse);
var purchaseCourseDiscount = function (course) {
    purchasedCourse = course;
};
purchaseCourseDiscount('Laravel');
console.log('Curso Comprado con descuento: ' + purchasedCourse);
