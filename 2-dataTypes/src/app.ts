let msg = `Hellow World, I'm learning TypeScript 2`;
let msgs = [
  {
    contenido: 'Hola'
  },
  {
    contenido: 'TypeScript'
  },
  {
    contenido: 'Hasta pronto'
  }
]

// traditional 
msgs.map(function(actualMsg){
  console.log(actualMsg.contenido.toUpperCase());
  return actualMsg.contenido.toUpperCase();
})

// arrow function => ES6
msgs.map((actualMsg) => actualMsg.contenido.toUpperCase());

//type: number
let students: number;
students = 10;
// students = 'Hello world'; --> error

function suma(a:number, b:number) {
  return a + b;
}

suma(2, 3);

let gestion = false;

// gestion = 'true'; --> error

//type: string
//first way
let first_name = 'Louis';
let last_name: string = 'Redfield';

//ES6. Template literals
let complete_name = `${first_name} ${last_name}`
console.log('My name is: ' + complete_name);

//strings con saltos de linea usando ``
let complete_name2: string = `
  <title>
    Nicola
    Di Candia
  </title>
`;

console.log(`My son's name is: ${complete_name2}`);

//type: boolean
let subscribe: boolean = true;
// msg = subscribe ? 'Welcome TypeScript course' : 'Subscribe now';
// console.log(msg);

//type: void

function showSubscription (subscribe: boolean): void {
  msg = subscribe ? 'Welcome TypeScript course' : 'Subscribe now';
  console.log(msg);
}

let result = showSubscription(subscribe);
console.log('result: ' + result);

// type: undefined
let unknow: undefined;
unknow = undefined;

//type: null
let null_type: null;
null_type = null;

//type: any --> continue old js project (use)
let course_name: any = 'TypeScript course';
course_name = 5;
course_name = true;
course_name = null;

//using types in functions

function sayHello(name?: string): string {
  if(!name) return `Hello strange`;
  return `Hello ${name}`;
}

console.log(sayHello('Nicola'));
console.log(sayHello());

function multiplePlus(a: number, b:number, c?:number, d?:number): number {
  if(!c) c=0;
  if(!d) d=0;
  return a + b + c + d;
}

console.log(`resultado ${multiplePlus(1, 2, 3, 4)}`);
console.log(`resultado ${multiplePlus(1, 2)}`);

//Arrays
let names: string[] = ['Louis', 'Martha', 'Peter', 'Jhon'];
let last_names: Array<string>;
last_names = ['Brook', 'Taylor', 'Spears', 'Redfield'];

console.log(names);
console.log(last_names);

// Tuples
let purchase:[string, number, boolean];
purchase = ['Pepsi', 2, true];

console.log(purchase);
