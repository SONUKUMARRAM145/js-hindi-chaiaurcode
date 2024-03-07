// immediately invoked functions expression
function chai(){
    console.log(`hello dbms`);
}
chai(); // instead of using this for iife
//() write function inside this and then () for execution
(function chai(){
    // named iife cause yha pe function ka name define hai
    console.log(`hello dbms`);
})(); // and yes use ; after iife to stop the context there.. In interview bolna global scope k pollution se bachne k liye we used iife

// can we write arrow function inside iife??
(() =>{
    console.log(`hello coonected`);
})();
// now how to pass paramater in iife
((name)=>{
console.log(`hello ${name}`);
})('sonu');