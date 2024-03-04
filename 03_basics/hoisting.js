// scope level and mini hoisting
addone(5);
function addone(value) {
    console.log(value);
}
// but this will not work give u error

console.log(value);
const value=function (num) {
    return num+1;
}

