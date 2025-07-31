console.log("*********************************")
console.log("   GLOBAL & LOCAL SCOPE in JS")
console.log("*********************************")

let a = 10
const b = 20
var c = 30


{
    let a = 100
    const b = 200
    var c = 300         //var has global scope so the value is redefined 

    console.log("Block Scope")
    console.log("Inner a = ",a)
    console.log("Inner b = ",b)
    console.log("Inner c = ",c)

}
console.log("")
console.log("Global Scope")
console.log("outer a = ",a)
console.log("outer b = ",b)
console.log("outer c = ",c)

// nested scope 

console.log("")
console.log("NESTED SCOPE")
function one()
{
    const num1 = 1
    function two()
    {
        const num2 =2
        console.log("num1 = ",num1)
    }
    //  console.log("num2 = ",num2) 
    //  it will throw error as scope of num2 is block scope
    two()
}

one()


if(true)
{
    const name = "john"
    if(name== "john")
    {
        const id =1
        console.log(name+id)
    }
   // console.log(id)  scope of id is block scope (can't be accessed)
}
// console.log(name)  scope of id is block scope (can't be accessed)

console.log("")
console.log("HOISTING")

console.log("add one = ",addOne(3))
function addOne(num)
{
    return num+1
}

/* console.log("add two = ",addTwo(1))
  it will throw error
*/

  const addTwo = function(num)
{
    return num+2
}
console.log("add two = ",addTwo(1))