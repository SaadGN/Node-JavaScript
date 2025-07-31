console.log("*********************************")
console.log("    CONTROL/LOGIC FLOW in JS")
console.log("*********************************")

const score =100

console.log("IF STATEMENT")
if(score == 100)
{
    console.log("values are equal")
}

// ******************************************************

console.log("")
console.log("IF-ELSE STATEMENT")
if(score === "100")
{
    console.log("values are equal")
}
else
{
    console.log("values or datatype is not equal")
}

// ******************************************************

console.log("")
console.log("IF ELSE-IF STATEMENT")
if(score == "100")
{
    console.log("your score is 100")
}
else if(score > 100)
{
    console.log("your score is greater than 100")
}
else
{
    console.log("your score is less than 100")
}

// ***********************************************************

let a= 10,b=20,c=30
if(a>b && a>c)
{
    console.log("a is greater")
}
else if(b>a && b>c)
{
    console.log("b is greater")
}
else
{
    console.log("c is greater")
}

console.log("")
// ***********************************************************

console.log("*********************************")
console.log("        SWITCH STATEMENT")
console.log("*********************************")
console.log("")
let day = 4
switch(day)
{
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid input")
        break;
}

// FALSY VALUES : 0,-0,0n,NaN , undefined , null
// TRUTHY VALUES : "0" , "false" , [] , {} , function (){} 

const arr = []
if(arr)
{
    console.log("Array is empty")
}

if(arr.length===0)      //(arr.length ===0) checks if the array is empty 
{
    console.log("Array is empty")
}

const obj = {}
if(Object.keys(obj).length===0)  //Object.keys(obj) return the array
{
    console.log("Object is empty")
}

console.log("")
console.log("*********************************")
console.log("  NULLISH COALESCING OPERATOR")
console.log("*********************************")

//?? : NULL , UNDEFINED

let num1;
num1 = null ?? 100  
//Impotance concept to avoid unwanted value i.e: eturn value from database 
console.log(num1)

console.log("")
console.log("*********************************")
console.log("        TERNARY OPERATOR")
console.log("*********************************")

let val1 = 10 , val2 = 20
val1 > val2 ? console.log("val1 is greater") : console.log("val2 is greater") 