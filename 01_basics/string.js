let name="sonu";
let repono=50;
//console.log(name+repono);
// but we don't use this technique in modern days to conacatenate

// we use backtiks
console.log(`hello my name is ${name} and my repocount is ${repono}`); // this is the good way called string intupulation.
 // another way of declaring string

 const gameName=new String('ranji'); // this stores key value pair which u can see in console
 //console.log(gameName[0]); // this will print (r) of ranji
 //console.log(gameName.charAt(2)); // this will give u char at particular index

 const newstring=gameName.substring(0,4); // 4 will not be included , it gives the result till last-1 index
 //console.log(newstring);
  const string2=gameName.slice(0,4);// here intersting thing is we can use negative index as well;
  //console.log(string2);

  const stringone="   sonu   "; // here we r having space in front and end of strings
  //console.log(stringone);
 // console.log(stringone.trim());// trim method use to eliminate front and end whitespaces 

 const url="sonu///space20%@gmail.com";
 //console.log(url.replace('20%','to')); // replce is use to replace any thing with some new value first value is what neede to be replced and second the new value

 // if i want to split string into array based on something we use split method to do so
 const college="government-college-of-engineering";
 console.log(college.split('-'));