// Problem 1
// Data 1
const markweight = 78;
const markheight = 1.69;
const jhonweight = 92;
const jhonheight = 1.95;

const BMImark = markweight / markheight ** 2;
const BMIjhon = jhonweight / (jhonheight*jhonheight);

const markHigherBMI = BMImark > BMIjhon;

console.log(BMImark, BMIjhon)
console.log(markHigherBMI);
//Data2
const markweight1 = 78;
const markheight1 = 1.69;
const jhonweight1 = 92;
const jhonheight1 = 1.95;

const BMImark1 = markweight1 / markheight1 ** 2;
const BMIjhon1 = jhonweight1 / (jhonheight1*jhonheight1);

const markHigherBMI1 = BMImark1 > BMIjhon1;

console.log(BMImark1, BMIjhon1)
console.log(markHigherBMI1);  