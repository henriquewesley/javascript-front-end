/* Filter

O método filter() é usado para criar um novo array a partir de um array existente,
filtrando os elementos que atendem a uma determinada condição.
Aceita 3 parâmetros:
  array.filter(function(currentValue, index, arr), thisValue)
  currentValue: O elemento atual sendo processado no array.
  index (opcional): O índice do elemento atual no array.

O método filter() é como um detetive que examina cada item em um array e decide se ele deve ou não permanecer no array com base em uma 
condição que você define. Ele cria um novo array contendo apenas os elementos que passaram nesse "teste" da sua condição.

Imagine que você tem uma lista de frutas e quer apenas as vermelhas. 
O filter() passaria por cada fruta e só adicionaria as vermelhas a uma nova lista.

Em termos técnicos:

O método filter() é chamado em um array e recebe como argumento uma função de callback. 
Essa função de callback é executada para cada elemento do array original. A função de callback recebe três argumentos 
(embora geralmente usemos apenas o primeiro):

Elemento atual: O item que está sendo processado no momento.
Índice: A posição desse elemento no array.
Array original: O array no qual filter() foi chamado.
A função de callback deve retornar um valor booleano (true ou false). 
Se a função retornar true para um elemento, esse elemento será incluído no novo array que filter() retorna. 
 Se retornar false, o elemento será ignorado.

*/


const list = [101, 5, 246, 51, 88, 432, 59, 31, 509, 899, 1000];

const filteredList = list.filter(number => number > 100);

console.log(filteredList);

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