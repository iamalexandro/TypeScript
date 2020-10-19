"use strict";
// Verificando tipos de datos
var firstCourse = {
    name: 'React',
    identifier: 1
};
var stringCourse = "\n{\n  name: 'React',\n  identifier: 1\n}\n";
function getIdCourse(c) {
    var obj = JSON.parse(c);
    // return (obj as CourseObj).identifier; // "AS" syntax
    return obj.identifier; //casting
}
