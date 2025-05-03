/* 
- Dobrando os números do array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);

- Desafio de array com lista de usuários criando nova lista com cor de pulseira 

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

console.log(newList); */

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