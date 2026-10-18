 let js = 'cool';
console.log(2007+25+5);
// this is a single line comment
/* this is a 
      multi line 
          comment */
// data types
let num = 20; // this is number data type
let str = "javascript"; // this is string data type 
let bool = true; // this is boolean data type 
let week; //this is undefined data type
console.log(num);
console.log(str);
console.log(bool);
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(week));

//----------------------------
// operator precedence
//----------------------------

let now = 2026;
const age1 = now - 2007;
const age2 = now - 2010;
console.log(now - 2007 > now - 2010);
let x, y;
x = y = 25 - 5 - 10;//x=y=10
console.log(x, y);
const avg = (age1 + age2) / 2
console.log(age1, age2, avg);

//----------------------------
// strings and template literals
//----------------------------

const name1 = "mohan";
const job = "developer";
const dob = 2007;
const year = 2036;

const mohan = "I'm" + name1 + ", a " + (year - dob) + " years old " + job + "!";
console.log(mohan);
//this kind task is complicated, so we can use template literals to make it easier

const mohannew = `I'm ${name1}, a ${year - dob} years old ${job}!`;
console.log(mohannew);
console.log(`we can backtick instead of using the quotes`);
console.log("to create \n\
new line in quotes \n\
we use backslash \n\
which is complicated");
console.log(`to create
new line in backticks
is much easier`);