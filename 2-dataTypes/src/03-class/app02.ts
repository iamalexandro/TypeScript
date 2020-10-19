// Available courses: NodeJs, Laravel, React

// let purchasedCourse = 'Laravel';
// purchasedCourse = 'NodeJs';

type Course = 'NodeJs' | 'Laravel' | 'React';

let purchasedCourse: 'NodeJs' | 'Laravel' | 'React';
// purchasedCourse = 'Angular'; no se puede!!
purchasedCourse = 'React';
 
function purchaseCourse(course: Course){
  purchasedCourse = course;
}

purchaseCourse('React');
console.log('Curso Comprado: ' + purchasedCourse);

type functionPurchase = (course: Course) => void;

const purchaseCourseDiscount: functionPurchase = (course) => {
  purchasedCourse = course;
};

purchaseCourseDiscount('Laravel');
console.log('Curso Comprado con descuento: ' + purchasedCourse);
