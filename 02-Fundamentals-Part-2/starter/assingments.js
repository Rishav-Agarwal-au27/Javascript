"use strict";

function describeCountry(country, population, capitalCity) {
  const statement = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return statement;
}

const countryOne = describeCountry("Indian", 130, "Delhi");
const countryTwo = describeCountry("Finland", 6, "Helsinki");
const countryThree = describeCountry("Nepal", 10, "Kathmandu");
console.log(countryOne);
console.log(countryTwo);
console.log(countryThree);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const india = percentageOfWorld1(1378);
const pakistan = percentageOfWorld1(221);
const nepal = percentageOfWorld1(30);
console.log(india, pakistan, nepal);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const india2 = percentageOfWorld2(1378);
const pakistan2 = percentageOfWorld2(221);
const nepal2 = percentageOfWorld2(30);
console.log(india2, pakistan2, nepal2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const india3 = percentageOfWorld3(1378);
const pakistan3 = percentageOfWorld3(221);
const nepal3 = percentageOfWorld3(30);
console.log(india3, pakistan3, nepal3);

function describePopulation(country, population) {
  const countryPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${countryPopulation}% of the world.`;
}
const countryIndia = describePopulation("India", 1378);
const countryChina = describePopulation("China", 1441);
const countryNepal = describePopulation("Nepal", 30);
console.log(countryIndia, countryChina, countryNepal);
