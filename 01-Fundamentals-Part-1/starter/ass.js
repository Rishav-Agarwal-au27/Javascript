// Values and variable
const countryName = "India";
const continentName = "Asia";
let countryPopulation = 10;
console.log(countryName);
console.log(continentName);
console.log(countryPopulation);

// Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof countryPopulation);
console.log(typeof countryName);
console.log(typeof language);

//let, const and var
language = "Hindi";

//Basic Opeartors
countryPopulation = countryPopulation / 2;
countryPopulation++;
console.log(countryPopulation);
let finlandPopulation = 6;
console.log(finlandPopulation > countryPopulation);
let averagePopulation = 33;
console.log(averagePopulation > countryPopulation);
let description =
  countryName +
  " " +
  "is in" +
  " " +
  continentName +
  ", " +
  "and its" +
  " " +
  countryPopulation +
  " " +
  "million people speak" +
  " " +
  language;
console.log(description);

console.log(
  `${countryName} is in ${continentName}, and its ${countryPopulation} million people speak ${language}`
);

if (countryPopulation > 33) {
  console.log(`${countryName}'s population is above average`);
} else {
  console.log(
    `${countryName}'s population is ${
      33 - countryPopulation
    } million below average`
  );
}

// let numNeighbours = Number(
//   prompt(`How many neighbour countries does your country have?`)
// );
// if (numNeighbours === 1) {
//   console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No border`);
// }

if (language === "English" && countryPopulation < 50 && !isIsland) {
  console.log(`You should live in ${countryName}`);
} else {
  console.log(`${countryName} does not meet your criteria`);
}

let Language = "hindi";

switch (Language) {
  case "chinese":
  case "mandarin":
    console.log(`Most Number of native speaker`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speaker`);
    break;
  case "english":
    console.log(`3rd place`);
    break;
  case "hindi":
    console.log(`Number 4`);
    break;
  case "arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`great language too!!`);
}

countryPopulation > 33
  ? console.log(`${countryName}'s population is above average`)
  : console.log(`${countryName}'s population is below average`);
