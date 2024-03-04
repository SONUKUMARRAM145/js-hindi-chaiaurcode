// function addtwonum(number1,number2) {
//     console.log(number1+number2);
// }
// const result=addtwonum(3,4); // we can't store beacuse it depends on the return type of function 
// console.log("result is",result); // this will give u result is undefined

// see how we return 
function addtwonum(number1,number2) {
   // let result=number1+number2;
    //return result; // after return any lines will not execute ... so above return everything will get execute

    // or
    return number1+number2;
}
const result=addtwonum(3,4);  
//console.log("result is",result); 
 function loginuser(username) {
    if(username===undefined){
        console.log("please enter a valid username");
    }
    else{
        return `${username} just logged in`;
    }
    
 }
 console.log(loginuser()); // if u don't pass any arguments then it will give u (undefined just logged in) asked in interview


