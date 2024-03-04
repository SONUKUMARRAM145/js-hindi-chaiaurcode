// about scope 
// almost in every programming lang {} this is scope
if(true){
    // block scope
    let a=50;
    const b=30;
    var c=40;
}
//outside is global scope

//console.log(a);// not valid outside scope
//console.log(b); // not valid outside scope
console.log(c); // thats'why we don't use var
