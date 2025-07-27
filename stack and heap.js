console.log("*********************************")
console.log("      STACK MEMORY")
console.log("*********************************")

//  PASS BY VALUE

let str1 = "john";
let str2 = str1;
// a copy of str1 is stored in str2 (Pass by value)

console.log("str1 : ",str1);
console.log("str2 : ",str2);

str2 = "shawn"

console.log("str1 : ",str1);  
console.log("str2 : ",str2);

console.log("*********************************")
console.log("      HEAP MEMORY")
console.log("*********************************")

//  PASS BY REFRENCE

let obj1 = {
    Name : "Phill",
    id : 1
};

let obj2 = obj1;
// the address of obj1 is assigned to obj2 (Pass by refrence)

console.log("obj1 : ",obj1);
console.log("obj2 : ",obj2);

obj1.Name = "Jey";
obj2.id=3;

console.log("obj1 : ",obj1);
console.log("obj2 : ",obj2);
//both obj1 and obj2 points to the same address