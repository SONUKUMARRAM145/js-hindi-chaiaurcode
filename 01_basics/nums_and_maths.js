//---------------------------Number---------------------------
const num1=200;
console.log(num1);

const balance=new Number(200); // this is the explicitly way of defining datatypes number , this will have some predefined prottype as well or methods
console.log(balance);
console.log(balance.toString().length); // now number changed to string in which we used string method .length
console.log(typeof(balance));
console.log(balance.toFixed(2));// to fixed method use to fix the number till decimal place passed in method.
console.log(balance);

const num2=44.456;
console.log(num2.toPrecision(3));// number passed in the toprecision must be within the range 1-21. // interview me poocha jata hai so be careful

const hund=10000000;
console.log(hund.toLocaleString('en-IN'));// this gives comma according to us number system , but if u add 'en-IN' inside the method it will give comma according to indian system

//------------------------------------Math-----------------------------------------
// console.log(Math); // this will give u all the methods of Math object when u write this in console
// console.log(Math.abs(-2));// gives u positive value
// console.log(Math.round(4.7));// it is used in round of number
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random());// this is what we will use most => gives number between 0 and 1 mostly decimal;
console.log(Math.random()*10);// this will help u to get the random number *10 baad me use karte karte seekh jaoge

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min))+min) // we made a formula to get a number between 10 and 20

