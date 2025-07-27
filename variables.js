console.log("*********************************")
console.log("     LET/VAR/CONST VARIABLES")
console.log("*********************************")

const studentId = 123;
var studentName = "Edwards";
let studentAdd = "England";
studentAge = 20;
let course;

console.log("Student ID : ",studentId);
console.log("Student Name : ",studentName);
console.log("Student Address : ",studentAdd);
console.log("Student Age : ",studentAge);
console.log("Student course : ",course);

// studentId = 111; 
// cannot change a const variable

// let studentAdd = 123;
// cannot redeclare a let variable

console.table([studentId,studentName,studentAdd,studentAge,course]);


// SCOPE OF VARIABLES

// let : block scope
// const : block scope
// var : global scope

console.log("*********************************")
console.log("      SCOPE OF VARIABLES")
console.log("*********************************")
{
    let letScope = 1;
    const constScope = 2;
    var varScope = 3;
    console.log("scope of let (in local) : ",letScope);
    console.log("scope of const (in local) : ",constScope);
    console.log("scope of var (in local) : ",varScope);
}

//  console.log("scope of let : ",letScope);
//  console.log("scope of const : ",constScope);
//              NOT POSSIBLE

console.log("scope of var (in global) : ",varScope);