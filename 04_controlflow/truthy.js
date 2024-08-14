const useremail="sonu@40";
if(useremail){
    console.log("got user email");
    
}
else{
    console.log("didnot got user email");
    
}

// falsy values
//  false,0,-0,BigInt,"",null,undefined, Nan

// truthy values
// "0", 'false'," ",[],{}.function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 =5 ?? 10

console.log(val1);

// terniary operator
 // condition ?true:false

 const iceTeaPrice=100
 iceTeaPrice<=80?console.log("less than 80"): console.log("more than 80");
 
 
