//Value and Variable
/*
let js = "amazing";
if (js === "amazing") alert("javascript is fun");
console.log(40 + 8 + 23 - 10);
console.log("Rishav");
console.log(23);
let firstName = "Rishav";
let first = "Shahbaz";
let firstNamePerson;
let first_name_person;
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

// Data types

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Rishav");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);

console.log(typeof null);
*/

//let, const and var

/*
let age = 30;
age = 31;

const birthYear = 2000;

var job = "student";
job = "boy";

lastName = "Rishav";
console.log(lastName);
*/

//Basic Operator

/*
const now = 2022;
const ageRishav = now - 2000;
const ageSarah = now - 2018;
console.log(ageRishav, ageSarah);

console.log(ageRishav * 2, ageRishav / 10, 2 ** 3);

const firstName = "Rishav";
const lastName = "Agarwal";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageRishav > ageSarah);
console.log(ageSarah >= 18);
console.log(ageRishav >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

//Operator Precedence

/*
const now = 2022;
const ageRishav = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageRishav + ageSarah) / 2;
console.log(ageRishav, ageSarah);
console.log(averageAge);
*/

//String and Template Literals

/*
const firstName = "Rishav";
const job = "student";
const birthYear = 2000;
const year = 2022;

const rishav =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(rishav);

const rishavNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(rishavNew);

console.log(`just a regular string....`);

console.log(`string with 
multiple
lines`);
*/

//taking decision : if/else statements

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving licence 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// Type conversion and coercion

/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Rishav"));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("I am " + 23 + " Years old");
console.log("I am " + "23" + " Years old");
console.log("23" + "10" + 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

//Truthy and falsy values

/*
5 falsey values : 0, '' , undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Rishav"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log(`DOn't spend it all;`);
} else {
  console.log(`You should get a job!`);
}

let height = 0.000001;
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`height is undefined`);
}
*/

//Equality Operators: == vs ===

/*
const age = "18";
if (age === 18) console.log(`You just became an adult 😁("Strict")`);

if (age == 18) console.log(`You just became an adult 😁("loose")`);

const favourite = Number(prompt("What's Your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favourite !== 23) console.log(`Why not 23?`);
*/

//Logical operator

/*
const hasDrivorsLicence = true;
const hasGoodVision = true;

console.log(hasDrivorsLicence && hasGoodVision);
console.log(hasDrivorsLicence || hasGoodVision);
console.log(!hasDrivorsLicence);

const shouldDrive = hasDrivorsLicence && hasGoodVision;
if (shouldDrive) {
  console.log(`sarah is able to drive`);
} else {
  console.log(`someone else should drive`);
}

const isTired = false;
console.log(hasDrivorsLicence && hasGoodVision && isTired);

if (hasDrivorsLicence && hasGoodVision && !isTired) {
  console.log(`sarah is able to drive`);
} else {
  console.log(`someone else should drive`);
}
*/

//The Switch Statement

/*
const day = "friday";

switch (day) {
  case "monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`prepare theory video`);
    break;
  case "wednesday":
  case "thrusday":
    console.log(`write code examples`);
    break;
  case "friday":
    console.log(`Record the video`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === "monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`prepare theory video`);
} else if (day === "wednesday" || day === "thrusday") {
  console.log(`write code examples`);
} else if (day === "friday") {
  console.log(`Record the video`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day!`);
}
*/
