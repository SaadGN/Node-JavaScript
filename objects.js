console.log("*********************************")
console.log("         OBJECTS in JS")
console.log("*********************************")

let symb1 = Symbol("1");


const obj1 = {
    Name : "john",
    age : 20,
    [symb1] : "123"
}
console.log("Name : ",obj1.Name)
console.log("symbol : ",obj1[symb1])
console.log("Obj1 : ", obj1)

Object.freeze(obj1)         // value of object can't be changed

obj1.Name = "Edwards"

console.log("Obj1 : ", obj1)

const  obj2 = {
    Name : "shawn",
    age : 12,
    id : 1,
    msg : "nothing"
}
console.log("Obj2 : ",obj2)
obj2.msg = function()
{
    console.log(`this is the message from ${this.Name}`)
}
console.log(obj2.msg())

const obj3 = {1:'a',2:'b'}
const obj4 = {3:'c',4:'d'}
console.log("obj3 : ",obj3)
console.log("obj4 : ",obj4)

const obj5 = {obj3,obj4}
console.log("obj5 : ",obj5)

const obj6 = Object.assign({},obj3,obj4)  // first value is destination
console.log("obj6 : ",obj6)

//spread operator
const obj7 = {...obj3 , ...obj4}  // first value is destination
console.log("obj7 : ",obj7)


//      imp concept for database
console.log("Keys of obj7 : ",Object.keys(obj7))
console.log("values of obj7 : ",Object.values(obj7))  
console.log("Entries of obj7 : ",Object.entries(obj7))

console.log("if '1' is in obj7 : ",obj7.hasOwnProperty('1')) 
console.log("if '123' is in obj7 : ",obj7.hasOwnProperty("123")) 


const obj8 = {
    Name : "john",
    age : 20,
    id : "123"
}
console.log("Obj8 : ", obj8)
const {Name} = obj8
console.log("obj8 Name : ",Name) 