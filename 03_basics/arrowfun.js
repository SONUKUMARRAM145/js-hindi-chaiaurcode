// this keyword and arrow function
const user={
    username:"sonu",
    welcomemessage: function() {
        console.log(`${this.username},welcome to iit`); // this refers to current context
    }
}
// user.welcomemessage();
// user.username="ankit"; 
// user.welcomemessage(); // this keyword helps to access even if the context is changed

// so let's check the current context of global
//console.log(this); // will give u empty {}

function chai() {
    console.log(this);
}
//chai(); // will give u many functions
// this is not used with functions it is mainly used with objects

//**********arrow functions ******
// just remove the function keyword 
const code=()=>{
    let username="sonu"
    console.log(this.username);
}
//code(); // undefined hi ayyga

// now charcha on arrow functions
 // u can hold arrow functions in variable also
 const ani=(num1,num2)=>{
    return num1+num2;
 }
 console.log(ani(4,5));

 // implicit return arrow functions
 const addtwo=(num1,num2) => num1+num2;// ek hi line ka tha so no need to write return
 console.log(addtwo(7,6));
 // one more way to define arrow function
 // if u using {} braces then need to write return and if() no need to write return
 const add=(num1,num2)=>(num1+num2);
 console.log(add(4,9));