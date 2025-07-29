console.log("*********************************")
console.log("      FUNCTIONS in JS")
console.log("*********************************")


//function syntax
function msg1()
{
    console.log("Javascript code !!!")
}
msg1();

console.log("")

// function to multiply two numbers
function table(num1,num2)
{
     console.log(num1 , " * " , num2 , " = ", num1*num2)
}
table(3,6)

console.log("")

// funtion to add two number wih return 
function sum(num1,num2)
{
    let res = num1+num2
    return res
}

console.log("Result (3 + 4): ",sum(3,4))

console.log("Result (3 + '4'): ",sum(3,'4'))       //concat string

console.log("")

function login(username)
{
    return `${username} just logged in!!!`
}
console.log("Login function : ",login("John"))

// empty string is passed
console.log("Login function (with empty string): ",login(""))

// no agument is passed
console.log("Login function (with no argument): ",login())


// function to check either correct value is entered

function userlogin(username)
{
    if(username === undefined)
    {
        return "Please enter a username!!!"
    }
    else
    {
        return `${username} just logged in!!!`
    }
}
console.log("")
console.log("User Login function : ",userlogin("John"))
console.log("User Login function (without argument) : ",userlogin())

console.log("")

function values(num1)
{
    return num1
}
console.log(values(100,200,300))


// rest operator
function values1(...num1)
{
    return num1
}
console.log(values1(100,200,300))

function obj(object)
{
    return `${object.username} has logged in with id ${object.id}`
}
console.log(obj( {username : "John" ,id : 123 } ) )