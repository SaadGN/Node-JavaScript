console.log("*********************************")
console.log("     THIS & ARROW FUNCTION")
console.log("*********************************")

// refer to current context [this keyword]

const obj = {
    name : "john",
    id : 1,
    msg : function()
    {
        console.log(`${this.name} , has id ${this.id}`)
        console.log("Value if [this] inside object : ",this)
    }
}

obj.msg()
obj.name="Shawn"
obj.msg()
console.log("")
console.log("Value if [this] outside object : ",this)

//******************************************************
console.log("")
console.log("this inside function")

function one()
{
    console.log("Name : ",this.name)
    console.log(this)
}
one()

//*****************************************************
console.log("")
console.log("Implicit return")

const sum = (num1 , num2) => (num1 + num2)  //implicit return
console.log("Sum : ",sum(3,4))

const display = () => ( { name : "john" , id :1})  //implicit return
console.log("Sum : ",display())

const sum2 = (num1 , num2) => 
{
    return num1 + num2
}  //explicit return


console.log("Sum2 : ",sum2(3,3))

