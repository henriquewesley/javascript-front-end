# Análise e Manipulação de Dados com JavaScript

Este repositório contém exemplos de código JavaScript que demonstram a manipulação e análise de dados utilizando métodos de array como `map`, `filter` e `reduce`, além de conceitos básicos como funções, estruturas de controle de fluxo (`if/else`), e o objeto `Math`.

## Estrutura do Código

O código está organizado em blocos, cada um ilustrando um conceito ou um problema específico de manipulação de dados.

### 1. Operações Encadeadas em Array de Empresas

Este bloco demonstra como realizar múltiplas operações em um array de objetos representando empresas:

- **`map`**: Aplica uma função a cada elemento do array, neste caso, adicionando 10% ao `marketValue` de cada empresa.
- **`filter`**: Cria um novo array contendo apenas as empresas fundadas antes de 1990.
- **`reduce`**: Soma o `marketValue` de todas as empresas restantes no array filtrado.

```javascript
const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const add10Percent = company => {
  company.marketValue = company.marketValue + (company.marketValue / 10);
  return company;
}
const filterCompanies = company => company.foundedOn < 1990;
const sumMarketValue = (acc, company) => acc + company.marketValue;

const newCompanies = companies
  .map(add10Percent)
  .filter(filterCompanies)
  .reduce(sumMarketValue, 0);

console.log(newCompanies);
```

### 2. Explicação do Método filter()
Esta seção fornece uma explicação detalhada do método filter() em JavaScript, incluindo sua sintaxe e um exemplo prático de como ele funciona para selecionar elementos de um array com base em uma condição.

```javascript

const list = [101, 5, 246, 51, 88, 432, 59, 31, 509, 899, 1000];

const filteredList = list.filter(number => number > 100);

console.log(filteredList);
```

### 3. Exemplos Adicionais de filter() com Array de Objetos
Aqui são apresentados mais exemplos de como o filter() pode ser usado com arrays de objetos para selecionar elementos com base em múltiplas condições.

```JavaScript

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const filteredCompanies = companies.filter(company => company.marketValue < 200 && company.foundedOn > 2000);

console.log(filteredCompanies);
```

### 4. Loop for Simples em Array
Um exemplo básico de como iterar sobre os elementos de um array utilizando um loop for tradicional.

```JavaScript

const users = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Kate', 'Liam', 'Mia', 'Noah'];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

### 5. Explicação de Funções
Uma breve introdução ao conceito de funções em JavaScript, demonstrando como declarar e chamar uma função simples.

```JavaScript

const variavel = "Wesley";

console.log(variavel);

function nomeNaTela() {
  console.log("Henrique");
}

nomeNaTela();
nomeNaTela();
```
### 6. Outro Exemplo de Operações Encadeadas (com Subtração)
Similar ao primeiro exemplo, este bloco realiza operações encadeadas em um array de empresas, mas desta vez subtraindo 10% do marketValue e filtrando empresas fundadas após 1980.

```JavaScript

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const over10percent = company => {
  company.marketValue = company.marketValue - (company.marketValue / 10);
  return company;
}
const filterCompanies = company => company.foundedOn > 1980;
const sumMarketValue = (acc, company) => acc + company.marketValue;

const newCompanies = companies
  .map(over10percent)
  .filter(filterCompanies)
  .reduce(sumMarketValue, 0);

console.log(newCompanies);
```

### 7. Estruturas de Controle de Fluxo (if/else)
Um exemplo simples de como utilizar a estrutura condicional if/else para tomar decisões com base em uma condição (neste caso, a nota de um aluno).

```JavaScript

const notaDoAluno = 7;
const notaDeCorte = 5;

if (notaDoAluno > notaDeCorte) {
  console.log("Parabéns! Você está aprovado");
} else {
  console.log("Você foi Reprovado, se dedique mais");
}
```

### 8. Utilizando map() para Transformar Arrays
Exemplos de como o método map() pode ser usado para criar novos arrays a partir de um array existente, aplicando uma função de transformação a cada elemento.

```JavaScript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
JavaScript

const list = [
  { name: 'John', vip: true },
  { name: 'Jane', vip: false },
  { name: 'Bob', vip: true },
  { name: 'Alice', vip: false },
  { name: 'Charlie', vip: true },
  { name: 'Dave', vip: false },
  { name: 'Eve', vip: true },
  { name: 'Frank', vip: false },
  { name: 'Grace', vip: true },
  { name: 'Henry', vip: false },
  { name: 'Ivy', vip: true },
  { name: 'Jack', vip: false },
  { name: 'Kate', vip: true },
  { name: 'Liam', vip: false },
  { name: 'Mia', vip: true },
  { name: 'Noah', vip: false },
];

const newList = list.map(users => {
  return {
    name: users.name,
    vip: users.vip ? 'Black' : 'Green'
  }
})

console.log(newList);
```
```JavaScript

const students = [
  { name: 'John', grade: 8 },
  { name: 'Jane', grade: 9 },
  { name: 'Bob', grade: 7 },
  { name: 'Alice', grade: 6 },
  { name: 'Charlie', grade: 8 },
  { name: 'Dave', grade: 7 },
  { name: 'Eve', grade: 9 },
  { name: 'Frank', grade: 6 },
  { name: 'Grace', grade: 8 },
  { name: 'Henry', grade: 7 },
  { name: 'Ivy', grade: 9 },
  { name: 'Jack', grade: 6 },
  { name: 'Kate', grade: 8 },
  { name: 'Liam', grade: 7 },
  { name: 'Mia', grade: 9 },
  { name: 'Noah', grade: 6 },
];

const studentsStatus = students.map(student => {
  return {
    name: student.name,
    status: student.grade < 5 ? 'Reprovado' :
      student.grade >= 5 && student.grade < 7 ? 'Em recuperação' :
        student.grade >= 7 ? 'Aprovado' : 'Nota fornecida incorreta'
  }
})

console.log(studentsStatus);
```
### 9. O Objeto Math
Exemplos de como utilizar métodos do objeto Math para realizar operações matemáticas como potenciação, raiz quadrada, obter o valor de PI e arredondamento.

```JavaScript

const result = Math.pow(2, 2)
console.log(result)

const result2 = Math.sqrt(25, 2)
console.log(result2)

const PI = Math.PI
console.log(PI)

const ceil = Math.ceil(3.1)
console.log(ceil)

const floor = Math.floor(3.1)
console.log(floor)
```

### 10. Explicação e Exemplos do Método reduce()
Esta seção detalha o funcionamento do método reduce(), mostrando como ele pode ser usado para combinar os elementos de um array em um único valor (que pode ser de qualquer tipo).

```JavaScript

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = list.reduce((Acumulador, valorAtual) => {
  return Acumulador + valorAtual;
}, 0);

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const marketValue = companies.reduce((Acumulador, valorAtual) => {
  return Acumulador + valorAtual.marketValue;
}, 0);

const cart = [
  { product: 'Abobora', valuePerKg: 3.45, kg: 2 },
  { product: 'Banana', valuePerKg: 2.45, kg: 3 },
  { product: 'Maça', valuePerKg: 1.45, kg: 4 },
  { product: 'Pera', valuePerKg: 4.45, kg: 5 },
  { product: 'Uva', valuePerKg: 5.45, kg: 6 },
  { product: 'Melancia', valuePerKg: 6.45, kg: 7 },
  { product: 'Melão', valuePerKg: 7.45, kg: 8 },
];

const total = cart.reduce((Acumulador, value) => {
  return Acumulador + value.valuePerKg * value.kg;
}, 0);

console.log(total);
```

### 11. Tipos de Dados em JavaScript
Uma breve descrição dos tipos de dados primitivos (String, Number, Boolean, Null, Undefined) e do tipo Object em JavaScript, juntamente com exemplos de como declará-los.

```JavaScript

// 1. String -> Textos
const texto1 = "Texto com aspas duplas";
const texto2 = "Texto com aspas simples";
const texto3 = `Texto com crase outemplate string`;

const myAge = 31;
const myCar = "Kicks";

const myString = `Minha idade é ${myAge}, estou ficando velho,
mas pelos menos ando de ${myCar}`;

// 2. Number -> Números
const number1 = 32 / 2;
const fakeNumber = "32 / 2";

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
```

### 12. Estrutura de Dados: Array
Uma introdução à estrutura de dados Array em JavaScript, mostrando como criar arrays e acessar seus elementos.

```JavaScript

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

const usersNumbers = [20, 30, 490];

usersNumbers[0] = 30;

console.log(usersNumbers[0]);
```

### 13. Modificando Objetos Dentro de Arrays
Um exemplo de como modificar propriedades de objetos que estão dentro de um array.

```JavaScript

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
```
Este README fornece uma visão geral do código presente neste repositório, destacando os principais conceitos e exemplos de manipulação de dados em JavaScript.
