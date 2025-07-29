console.log("*********************************")
console.log("      ARRAYS in JS")
console.log("*********************************")

let arr1 = [11,23,4,5,6]
console.log(arr1[3])

// array methods

arr1.push(88)       //add value at last in array
arr1.push(99)
console.log(arr1)

arr1.pop()  //remove last value of array
console.log(arr1)

arr1.unshift(100)  // add value to the start of array
console.log(arr1)

arr1.shift()    //remove first value of array
console.log(arr1)

// Question for array   

console.log(arr1.includes(88))   // checks whether a value exists in array

console.log(arr1.indexOf(88))   // checks the index in array

console.log(arr1.indexOf(112))

    // JOIN in array

const arr2 =arr1.join();       // changes the array to string 
console.log("arr1 : ",arr1)
console.log("arr2 : ",arr2)
console.log("type of arr2 : ",typeof arr2)


//    SLICE AND SPLICE IN ARRAY


const arr3 = [1,2,3,4,5,6]
console.log("arr3 : ",arr3)

const arr4 = arr3.slice(1,3)        // slice add copy to arr4
console.log("arr4 (slice) : ",arr4)     
console.log("arr3 (after slice) : ",arr3)

const arr5 = arr3.splice(1,3)       //shift the value to arr5
console.log("arr5 (splice) : ",arr5)
console.log("arr3 (after splice) : ",arr3)


const charArr = ['a','b','c']
const numArr = [1,2,3]
console.log("char array : ",charArr)
console.log("num array : ",numArr)

charArr.push(numArr)
console.log("char array : ",charArr)    //add the value at last index

charArr.pop()
console.log("char array : ",charArr)

const newArr = charArr.concat(numArr)   //concat merge two arrays
console.log("new array : ",newArr)

// SPREAD OPERATORS
const newArr1 = [...charArr , ...numArr] //separates each value of array
console.log("spread operator : ",newArr1)


// flat method concats sub-array into a single array
const flatArr = [1,2,[3,4],[5,6,[7,8]]]
console.log("flatArr : ",flatArr)
console.log("flatArr : ",flatArr.flat(3))   

// checks if the value is array or not
console.log(Array.isArray("JavaScript"))

//converts the value into array
console.log(Array.from("JavaScript"))   

//clarify either to make keys or value an array
console.log(Array.from( {name : "JavaScript"} ) )

let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3))  //makes the set of values an array


