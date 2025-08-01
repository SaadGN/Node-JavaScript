console.log("*********************************")
console.log("         FOR-OF LOOP")
console.log("*********************************")

console.log("")
const arr1 = [1,2,3,4]
console.log("Array using for-of loop")
for (const i of arr1)   ////for-of loop displays the values
{
    console.log(i)
}

console.log("")
console.log("String using for-of loop")
const name = "JavaScript"
for ( const char of name)
{
    console.log("Char : ",char)
}
console.log("")
console.log("Map using for-of loop")

const newMap = new Map()
newMap.set('js' , "Javascript")
newMap.set('cpp' , "C++")
newMap.set('py' , "Python")
newMap.set('swift' , "Swift by Apple")

for(const [i,j] of newMap)
{
    console.log(i," : ",j)
}

// const obj = 
// {
//     name : "John",
//     id : 1,
//     email : "abc@gmail.com"
// }

// for (const i of obj)
// {
//     console.log(i)
// }
// object is not iterateable in for-of loop

console.log("")
console.log("*********************************")
console.log("         FOR-IN LOOP")
console.log("*********************************")

const obj = 
{
    name : "John",
    id : 1,
    email : "abc@gmail.com"
}

for (const i in obj)
{
    console.log(i , " : ",obj[i])
}
console.log("")

const arr2 = ['a','b','c','d']
for (const i in arr2)   //for-in loop displays the keys
{
    console.log("arr2 : ",i)
}

console.log("")

for (const i in arr2)
{
    console.log("arr2 : ",arr2[i])
}

const map1 = new Map()
map1.set('js' , "Javascript")
map1.set('cpp' , "C++")
map1.set('py' , "Python")
map1.set('swift' , "Swift by Apple")

// for (const i in map1)
// {
//     console.log(map1)
// }
//Map is not iterable in for-in loop 


console.log("")
console.log("*********************************")
console.log("         FOR-EACH LOOP")
console.log("*********************************")

const arr3 = ["javascript" , "pyhton" , "C++" , "ruby" , "swift" , "java"]

// for-each loop for function 
arr3.forEach( function  (i) 
{
    console.log("arr3 : ",i)
} )


// for-each loop for arro1 function 
console.log("")
console.log("For-each loop by arrow function")
arr3.forEach( (i) => 
{
 console.log("arr3 : ",i)
})


// for-each loop for already defined function 
console.log("")
function code (item)
{
    console.log("code : ",item)
}

arr3.forEach( code )

console.log("")
arr3.forEach( (item , index , arr) => 
{
    console.log(item , index , arr)
})

console.log("")
const myObj = [
    {
        name : "john",
        id : 1
    },
    {
        name : "Edward",
        id : 2
    },
    {
        name : "Shawn",
        id : 3
    }
]
myObj.forEach( function (item) {
    console.log("object : ",item)
})

const arr4 = [1,2,3,4,5,6]

// forEach does not return any value
let num = arr4.forEach( (item) => {
    return item;
})
console.log(num)

console.log("")
const digit = arr4.filter( (item) =>    item > 2 )
console.log("digits : ",digit)

console.log("")


let numArr = []
const digit2 = arr4.forEach( (num) =>
    {
        if(num>2)
        {
            numArr.push(num)
        }
    }
)
console.log("Num array : ", numArr)

