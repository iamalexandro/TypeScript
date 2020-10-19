//Enums
enum courseEnum {TypeScript, React, Laravel}

const courseEnumA: courseEnum = courseEnum.React;
console.log('Course Enum: ', courseEnumA, courseEnum[courseEnumA]);

enum workDay {
  Monday, // = 0
  Tuesday,
  Wednesday,
  Thursday,
  Friday
}

let practice: workDay = workDay.Wednesday;
console.log('Practice: ', practice, workDay[practice]);

enum workDay {
  Saturday = 5
}

let extraPractice = workDay.Saturday;
console.log('Practice: ', extraPractice, workDay[extraPractice]);

enum months {
  January = 'E',
  February = 'F',
  March = 'M',
  April = 'A'
}

const actualMonth: months = months.March;
console.log('Actual Month: ', actualMonth);

