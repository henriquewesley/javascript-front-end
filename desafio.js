const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

/* Adicionar 10% de valor de mercado a cada empresa
   Filtrar empresas que foram fundadas antes de 1990
   Somar o valor de mercado de todas as empresas restantes*/

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
