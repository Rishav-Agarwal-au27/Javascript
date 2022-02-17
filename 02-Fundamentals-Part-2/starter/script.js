"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive`);

// const interface = "Audio";
// const private = 231;
*/

/*
function logger() {
  console.log(`My name is Rishav`);
}

//Calling or Running or invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//function declaratio

const age1 = calcAge1(2000);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
console.log(age1);
//function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(2000);

console.log(age1, age2);
*/

/*
//function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntillRetirment = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  //   return retirment;
  return `${firstName} retires in ${retirment} years`;
};
console.log(yearsUntillRetirment(2000, "Rishav"));
console.log(yearsUntillRetirment(1991, "Jhonas"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthyear) {
  return 2037 - birthyear;
};

const yearsUntillRetirment = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirment = 65 - age;
  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment} years`);
    return retirment;
  } else {
    console.log(`${firstName} has already retired 🎈`);
    return -1;
  }
};

console.log(yearsUntillRetirment(1991, "jhonas"));
console.log(yearsUntillRetirment(1970, "Mike"));
*/

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];

console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
