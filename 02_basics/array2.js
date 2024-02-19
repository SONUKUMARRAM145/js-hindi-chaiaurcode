const marvel_heros=["thor","spiderman","Ironman"];
const dc_heros=["batman","superman","flash"];

// push one array into another
//marvel_heros.push(dc_heros);// this will not merge both the arrays instead marvel_heros take dc_heros array as input
//console.log(marvel_heros);
// same things happen if we use concat
//marvel_heros.concat(dc_heros);
//console.log(marvel_heros);
// but to merge two arrays need to declare extra variable
//const allheros=marvel_heros.concat(dc_heros);
//console.log(allheros);

// but we don't use concat to merge both arrays 
// spread both arrays
//const all_newheros=[...marvel_heros,...dc_heros];// both arrays spreaded using three dots
//console.log(all_newheros);

const newarray=[1,2,3,[5,7,8],[5,[4,6]]];
//console.log(newarray.flat(Infinity)); // to flat many nested array
// important for interview
//console.log(Array.isArray("sonu")); //will check array or not
//console.log(Array.from("sonu")); // will change anything into arrry

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // will change 3 variable things into array