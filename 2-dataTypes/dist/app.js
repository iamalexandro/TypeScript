"use strict";
var msg = "Hellow World, I'm learning TypeScript 2";
var msgs = [
    {
        contenido: 'Hola'
    },
    {
        contenido: 'TypeScript'
    },
    {
        contenido: 'Hasta pronto'
    }
];
// traditional 
msgs.map(function (actualMsg) {
    console.log(actualMsg.contenido.toUpperCase());
    return actualMsg.contenido.toUpperCase();
});
// arrow function => ES6
msgs.map(function (actualMsg) { return actualMsg.contenido.toUpperCase(); });
//type: number
var students;
students = 10;
// students = 'Hello world'; --> error
function suma(a, b) {
    return a + b;
}
suma(2, 3);
var gestion = false;
// gestion = 'true'; --> error
//type: string
//first way
var first_name = 'Louis';
var last_name = 'Redfield';
//ES6. Template literals
var complete_name = first_name + " " + last_name;
console.log('My name is: ' + complete_name);
//strings con saltos de linea usando ``
var complete_name2 = "\n  <title>\n    Nicola\n    Di Candia\n  </title>\n";
console.log("My son's name is: " + complete_name2);
//type: boolean
var subscribe = true;
// msg = subscribe ? 'Welcome TypeScript course' : 'Subscribe now';
// console.log(msg);
//type: void
function showSubscription(subscribe) {
    msg = subscribe ? 'Welcome TypeScript course' : 'Subscribe now';
    console.log(msg);
}
var result = showSubscription(subscribe);
console.log('result: ' + result);
// type: undefined
var unknow;
unknow = undefined;
//type: null
var null_type;
null_type = null;
//type: any --> continue old js project (use)
var course_name = 'TypeScript course';
course_name = 5;
course_name = true;
course_name = null;
//using types in functions
function sayHello(name) {
    if (!name)
        return "Hello strange";
    return "Hello " + name;
}
console.log(sayHello('Nicola'));
console.log(sayHello());
function multiplePlus(a, b, c, d) {
    if (!c)
        c = 0;
    if (!d)
        d = 0;
    return a + b + c + d;
}
console.log("resultado " + multiplePlus(1, 2, 3, 4));
console.log("resultado " + multiplePlus(1, 2));
//Arrays
var names = ['Louis', 'Martha', 'Peter', 'Jhon'];
var last_names;
last_names = ['Brook', 'Taylor', 'Spears', 'Redfield'];
console.log(names);
console.log(last_names);
// Tuples
var purchase;
purchase = ['Pepsi', 2, true];
console.log(purchase);
