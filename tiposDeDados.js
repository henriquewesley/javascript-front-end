/*
// 1. String -> Textos
// Como criar strings
const texto1 = "Texto com aspas duplas";
const texto2 = "Texto com aspas simples";
const texto3 = `Texto com crase outemplate string`;

console.log(texto1);
console.log(texto2);
console.log(texto3);

// Template String ou Template Literals

const myAge = 31;
const myCar = "Kicks";

const myString = `Minha idade é ${myAge}, estou ficando velho, 
mas pelos menos ando de ${myCar}`;

console.log(myString);

// 2. Number -> Números
const number1 = 32 / 2;
const fakeNumber = "32 / 2";

console.log(number1);
console.log(fakeNumber);

// 3. Boolean -> Booleanos
// true -> Verdadeiro
// false -> Falso

// 4. Object -> Objetos
const wesley = {
  name: "Wesley",
  age: 31,
  Anddress: {
    street: "Joinville",
    Number: 123,
    City: "Camaçari",
    State: "BA",
    Country: "Brazil",
  },
};

wesley.Anddress.Number = 321; // Mudando o number

console.log(wesley);
console.log(wesley.name);
console.log(wesley.Anddress.City);

// 5. Null & Undefined
const user = {
  name: "Wesley",
  age: 31,
  marriedWith: "Maria",
  children: "Analua",
  id: null,
};
console.log(user);
console.log(user.idded);


//Estrutura de dados
// 1. Array -> Vetores
const myArrray = [1, 2, 3, "Olá Henrique", { name: "Wesley", Age: 31 }];

const users = [
  {
    name: "Wesley",
    age: 31,
    marriedWith: "Maria",
    children: "Analua",
    id: null,
  },
  {
    name: "Henrique",
    age: 30,
    marriedWith: "Maria",
    children: "Analua",
    id: null,
  },
  {
    name: "Maria",
    age: 30,
    marriedWith: "Wesley",
    children: "Analua",
    id: null,
  },
];

const users = [20, 30, 490];

// console.log(users[0]);

users[0] = 30;

console.log(users[0]);
*/

const users = [
  {
    name: "Wesley",
    age: 31,
    marriedWith: "Maria",
    children: "Analua",
    id: null,
  },
  {
    name: "Henrique",
    age: 30,
    marriedWith: "Maria",
    children: "Analua",
    id: null,
  },
  {
    name: "Maria",
    age: 30,
    marriedWith: "Wesley",
    children: "Analua",
    id: null,
  },
];

users[0].age = 30;

console.log(users[0]);
