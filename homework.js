/*
MAP → Subtrair 10% de valor de mercado a todas as companhias
FILTER → Filtrar somente companhias fundadas depois de 1980
REDUCE → Somar o valor de mercado das restantes companhias */

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