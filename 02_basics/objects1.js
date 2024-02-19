//Singleton(jo constructor se banta hai) (literal se nhi bnta singleton)
//Object.create  -> this is the way to desing singleton objects

// object literals
const mysym=Symbol("key1");
const jsuser={
    name:"sonu", // where name is key and sonu is value and alawys remember key is tracked as string
    age:20,
    [mysym]:"mykey", // to add any symbol in objevts, first u need to define it outside then use inside objects
    "full name":"sonu kumar ram",// u can;t access this using dot need to use best way
    isloggedin:false,
    email:"sonu@4545",
    location:"bihar",
    pincode:[7,10]

}
console.log(jsuser.email); // but this is the wrong way to call objects
console.log(jsuser["email"]);// good way to call objects
console.log(jsuser["pincode"]);
console.log(jsuser["full name"]);
console.log([mysym]);

