// array specific loops
// for of

// const arr=[1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings="hello world!";
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

// Maps is a object which conatins key value pair

const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
// dulpicate not allowed
map.set('IN',"India");

//console.log(map);
  // will give u array
for (const key of map) {
    //console.log(key);
    
}

// destructure of key and value using for of

for (const [key,value] of map) {
   // console.log(key,':-',value);
    
}

// for in loops apply in objects

const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:" swift by apple"
}
for (const key in myobject) {
  // console.log(key); // this will give u only keys
   //console.log(myobject[key]); // will give u objects
   // console.log(`${key} shortcut is for ${myobject[key]}`);
    
   
}
// for in loops for array

const programming=["js","rb","cpp"]
for (const key in programming) {
 // console.log(key); // will give u indiex value not the actual value
  // for actual value
 // console.log(`the value is ${programming[key]}`);
  
}
// for in loops is not applicable for maps because map is non iterable

// for each loops

const coding=["js","c","cpp","java","py"];

coding.forEach(function (val) {
   // console.log(val);
    
})
 // using arrow function
coding.forEach((item)=>{
 //   console.log(item);
    
})

// using printme function
// ------********--------
function printme(item){
    console.log(item);
    
}
coding.forEach(printme);


