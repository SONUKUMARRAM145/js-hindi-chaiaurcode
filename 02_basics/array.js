// array
// const arr1=[1,2,3,4,5];
// console.log(arr1);

// const arr2=new Array(4,5,6,7);
// console.log(arr2);

// arr2.push(9);
// console.log(arr2);
// arr2.pop()
// console.log(arr2);

// arr1.unshift(4)// it adds element to the starting 
// console.log(arr1);

// arr1.shift();
// console.log(arr1);// it removes one element from starting


// join slice splice all are important give a read documentation from mdn
const myarr=[0,1,2,3,4,5];
const arrslice=myarr.slice(1,3); // last value doesnot included
console.log(arrslice);
console.log("A",myarr); // slice doesnot alter original array

const myarr2=[7,8,9,10,11];
const arr2splice=myarr2.splice(1,3);// first and last both included but it also bring change in main array as well
console.log(arr2splice);
console.log("B",myarr2);