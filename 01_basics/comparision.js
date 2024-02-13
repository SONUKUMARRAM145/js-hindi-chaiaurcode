//console.log(2>1);
//console.log(2!=1);

//console.log("02">1);

//console.log(null>0); //=> false
//console.log(null==0); //=>false
//console.log(null>=0); //=> true
// this is because equality check == and comparsion >,<,>=,<=, works differently .
// comparisions convert (null) to a number, treating it as 0 thatswhy null>=0 gives true and null>0 gives false

// console.log(undefined==0); =>false
// console.log(undefined>0); =>false
// console.log(undefined>=0); =>false

// strict check => checks the value and as well as data ===
console.log("2"===2);