let str = "My name is yash"
console.log(str)

// Strings can be made using both double & single qoutes
let str1= 'My name is Yash Panwar'
console.log(str1)

// We can use forward slash \ to escape characters is js
let str2= 'My name is Yash\'s Panwar'
console.log(str2)

// In ECMA Script6 we can use back ticks for an array

let str4 = (`My nAmE iS YaSh PaNwAr`)
console.log (str4)

// By back ticks we can also make templates also in ECMA Script 6
// Let p = ("Chintu");
// Let b = (` This is ${a}'s naam`);
// console.log(b)


// How to use line brakes

let longstr = "This is \
yash \
the greatest \
legend of all time."
console.log(longstr)

// how to search in a string and find it's length 

let str6 = "My name is yash wardhan singh";
console.log(str6.length);
let key = "yash";
console.log(str6.indexOf(key));
console.log(str6.lastIndexOf(key));

let key1 = "chintu"; // if the key is not in the string then it will give us -1
console.log(str6.indexOf(key1));