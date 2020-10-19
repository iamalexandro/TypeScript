"use strict";
//Enums
var courseEnum;
(function (courseEnum) {
    courseEnum[courseEnum["TypeScript"] = 0] = "TypeScript";
    courseEnum[courseEnum["React"] = 1] = "React";
    courseEnum[courseEnum["Laravel"] = 2] = "Laravel";
})(courseEnum || (courseEnum = {}));
var courseEnumA = courseEnum.React;
console.log('Course Enum: ', courseEnumA, courseEnum[courseEnumA]);
var workDay;
(function (workDay) {
    workDay[workDay["Monday"] = 0] = "Monday";
    workDay[workDay["Tuesday"] = 1] = "Tuesday";
    workDay[workDay["Wednesday"] = 2] = "Wednesday";
    workDay[workDay["Thursday"] = 3] = "Thursday";
    workDay[workDay["Friday"] = 4] = "Friday";
})(workDay || (workDay = {}));
var practice = workDay.Wednesday;
console.log('Practice: ', practice, workDay[practice]);
(function (workDay) {
    workDay[workDay["Saturday"] = 5] = "Saturday";
})(workDay || (workDay = {}));
var extraPractice = workDay.Saturday;
console.log('Practice: ', extraPractice, workDay[extraPractice]);
var months;
(function (months) {
    months["January"] = "E";
    months["February"] = "F";
    months["March"] = "M";
    months["April"] = "A";
})(months || (months = {}));
var actualMonth = months.March;
console.log('Actual Month: ', actualMonth);
