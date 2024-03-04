// sometimes we don't know how many paramaters is gooing to be passed by user in that case we use rest operator
function calcartprice(...nums) { // triple dots is rest opeartor will take all the araguments passed by user in array 
    return nums;
}
//console.log(calcartprice(200,400,500)); //[200,400,500];

// object ko functions me kaise pass karenge and how to use objects in functions
const user={
    name:"sonu",
    age:22
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.name} and my age is ${anyobject.age}`);
}
//(handleobject(user));
// aisa baat nhi hai ki we need to first create object and then pass as argument
// we can also pass like this
handleobject({
    name:"ram",
    age:21
});
// similarly we can pass array like this