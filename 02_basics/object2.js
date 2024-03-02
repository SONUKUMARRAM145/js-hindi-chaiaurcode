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
//const obje3=Object.assign(obj1,obj2); // this will merge both the arrays; 
//const obje3=Object.assign({},obj1,obj2); if u can can pass balnk parenthesis while merging the arrays

// but we won't be using all of these previous methods

const obj3={...obj1,...obj2};// this is most useful we merge two objects using spread operator

//console.log(obj3); // read documentayion regarding assign

// but when data comes from database it usually comes in the form of array of objects
const users=[
    {
        email:"sonu"
    },
    {
        id:1
    }
]

//console.log(users[1].id); // we will first access like array then from there objects

// we can also store objects keys and value -> ****very usefull for projects
console.log(Object.keys(tinderuser)); // will give u the keys of tinderuser and store in array data type

// similary we can store value as well in array
console.log(Object.values(tinderuser));
// we can store both key and values together using entries ,where 1st one is key and second one values but this is not frequently used
console.log(Object.entries(tinderuser));

