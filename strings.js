console.log("*********************************")
console.log("      STIRNG FUNCTIONS IN JS")
console.log("*********************************")

let str1 = "Edwards";
let id =1;
 console.log(`My name is ${str1} and my id is ${id} `)

const str2 = new String("Mountains");
console.log(str2.length);
console.log(str2.toUpperCase());
console.log(str2.charAt(3));
console.log(str2.indexOf('t'));


const str3 = str2.substring(0,5)
console.log(str3)

const str4 = str2.slice(-8,5)
console.log(str4)

const str5 = "      abc    ";
console.log(str5)
console.log(str5.trim())

let str6 = "ID = 2123"
console.log(str6)
console.log(str6.replace("12","88"))

console.log(str6.includes("ID"))

let str7 = "this is the code for javascript"
console.log(str7.split(" "));
