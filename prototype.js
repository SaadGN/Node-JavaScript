console.log("*****************************************");
console.log("            Prototype JS");
console.log("*****************************************");

const myArr = ["shawn","john"]

const myObj = {
    username : "Edward",
    id : 1,
     
    display : function(){
        console.log("username  : ",this.username)
    }
}

Object.prototype.add = function()
{
    console.log("Object : hi")
}

Array.prototype.name = function()
{
    console.log("Array : JavaScript")
}

myArr.add()
myArr.name()
myObj.add()
// myObj.name()  not possible 


// (***************** INHERITANCE ***********************)


const User = {
    name: "abc",
    email: "abc@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    assignment: 'JS',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

console.log("\n",TASupport.isAvailable)
console.log(Teacher.name)
console.log(User.fullTime,"\n")

// ********************** modern syntax ******************

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "\nJAVASCRIPT     "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"C++".trueLength()
"Python".trueLength()