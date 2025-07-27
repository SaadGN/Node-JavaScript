console.log("*********************************")
console.log("      DATATYPES in JS")
console.log("*********************************")

//           PRIMITIVE DATATYPES
//string :  "anything within quotes"
//numbers : 123
//undefined : variable whose value is not assigned
//NULL : null value / object
//symbol : unique
//object  : array,function
//bool : true/false
//bigInt : bigger numbers


let Name = "John"
let age = 20
let height = 7.2;
let address = null;
let region;
let pass = true;
let bigNumber = 31242342323413515n;
let specialId = Symbol("11123");

console.log("*********************************")
console.log("      PRIMITIVE DATATYPES")
console.log("*********************************")
console.log("datatype of ",Name," : ",typeof Name)
console.log("datatype of ",age," : ",typeof age)
console.log("datatype of ",height," : ",typeof height)
console.log("datatype of ",address," : ",typeof address)
console.log("datatype of ",region," : ",typeof region)
console.log("datatype of ",pass," : ",typeof pass)
console.log("datatype of ",bigNumber," : ",typeof bigNumber)
console.log("datatype of ",specialId," : ",typeof specialId)

console.log("*********************************")
console.log("      NON-PRIMITIVE DATATYPES")
console.log("*********************************")

let arr = ["john", " edward", " shawn"];

let myObj = {
    objName : "sean",
    objAge : 20
};

let myFunction = function()
{
    console.log("This is a function!!!")
}

console.log(arr)
console.log(myObj)
console.log(myFunction())

console.log("Type of array : ",typeof arr)
console.log("Type of object : ",typeof myObj)
console.log("Type of function : ",typeof myFunction)


console.log("*********************************")
console.log("      CONVERISON OF DATATYPES")
console.log("*********************************")

let num = 123; //number
let char = "abc"; //string
let isRight = true //bool

console.log("value of num : ",num)
console.log("Datatype : ",typeof num)

console.log("value of char : ",char)
console.log("Datatype :  ",typeof char)

console.log("value of isRight : ",isRight)
console.log("Datatype : ",typeof isRight)

console.log("************AFTER CONVERSION************")

let numToString = String(num);
console.log("value of num to string : ",numToString)
console.log("type of num to string ",typeof numToString)

let numToBool = Boolean(num)
console.log("value of num to boolean : ",numToBool)
console.log("type of num to boolean ",typeof numToBool)

let boolToNum = Number(isRight)
console.log("value of bool to num : ",boolToNum)
console.log("type of bool to num ",typeof boolToNum)

let boolToString = String(isRight)
console.log("value of bool to string : ",boolToString)
console.log("type of bool to string ",typeof boolToString)


console.log("*********************************")
console.log(" CONVERISON OPERATION of STRING")
console.log("*********************************")

console.log(" '1' + 2 + 3 : ","1"+2+3);
console.log("1 + '2' : ",1+"2");
console.log("1 + 2 + '3' : ",1+2+"3"); 


let str1 = "1"
console.log("++1 : ",++str1);
console.log("1++",str1++);


console.log("*********************************")
console.log("     COMPARISON DATATYPE")
console.log("*********************************")

console.log("null > 0 : ",null > 0)    //change null to number
console.log("null == 0 : ",null == 0)   //does not change datatype of null
console.log("null >= 0 : ",null >= 0)   //change null to number 
// [  comparison operators change datatype but equality check(==) does not ]


console.log("=== : (it checks datatype of value as well)")

let s1  = "1"
let num1 = 1

console.log(" '1' == 1 : ",s1==num1) //converts string to Number to check
console.log(" '1' === 1 : ",s1===num1)
