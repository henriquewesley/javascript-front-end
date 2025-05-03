/* Reduce 

- Retorna um valor (pode ser um novo array, objeto, string, number, etc)
- Aceita 4 parâmetros
    - Acumulador
    - Valor atual
    - Index
    - Array completo */

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