// singleton objects jo constructor se banta hai , we will discuss in deep
//const tinderuser=new Object();// this is singleton objects
const tinderuser={};
tinderuser.name="yecko";
tinderuser.id="yecko09";
tinderuser.loggedin=false;
//console.log(tinderuser);

// nested objects
const regularuser={
    email:"she is very hot",
    fullname:{
        userfullname:{
            firstname:"sonu kumar",
            lastname:"ram"
        }
    }
}
//console.log(regularuser.fullname.userfullname);

// now how to merge two objects
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
// const obj3={obj1,obj2}; // this will just keep object inside objects just like we did in the array
const obje3=Object.assign(obj1,obj2); // this will merge both the arrays; 
//const obje3=Object.assign({},obj1,obj2); if u can can pass balnk parenthesis while merging the arrays
console.log(obje3); // read documentayion regarding assign


