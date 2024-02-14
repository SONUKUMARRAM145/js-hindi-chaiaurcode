// data ko kis tarh se (store kiya jata hai in memory) and (access that data )based on these two we categorized data 
// (primitive) and (non primitive or refrence type)

// Js is statitically typed or dynamically typed language ? (reseacrh karo)

const id=Symbol('123');
const anotherId=Symbol('123');
// since u passed same number in symbol but it is still different from each other cause symbol used to uniquely identify value;
//console.log(id===anotherId); // will give false

// primitive => 7 types
// string , number, boolean , null , undefined, symbol(kisi bhi value ko unique banane k liye we use symbol ), BogInt

// refrence type or non primitive
 // Array, Objects, Funcitions 

 const heroes=["shaktiman","nagraj","doga"];
 // we can store a function in variable
 const myfunc=function(){
    console.log("hello world");
 }
 // data type of all non-primitive if checked gives object
 console.log(typeof(heroes)); // typeof function used to know data type.
// read documentation => ecmascript


//--------------------------x-----------------------------------------------
// memory in js
// stack(primitive data types -> here we get copy of variables),heap(nonprimitive datatype -> here we get the refrence for original value exact address of variable)
