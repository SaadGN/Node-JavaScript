console.log("*********************************")
console.log("      NUMBERS IN JS")
console.log("*********************************")

const num = new Number(100)
console.log(num)
console.log(typeof num)

console.log(num.toString().length)
console.log(num)
console.log(num.toFixed(3))

const num1 = 12.318
console.log(num1.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString())

console.log("*********************************")
console.log("      MATHS IN JS")
console.log("*********************************")

console.log(Math.abs(-333))
console.log(Math.round(316.339))
console.log(Math.ceil(4.1))
console.log(Math.floor(5.9))
console.log(Math.min(4,7,2,9,1))
console.log(Math.max(3,6,2,9,11))
console.log(Math.random())

// TASK : generate a random number between 30 and 40 

const min = 30
const max = 40

console.log(Math.floor( Math.random() * ( max - min + 1) ) + min)
console.log(Math.floor( Math.random() * ( max - min + 1) ) + min)
console.log(Math.floor( Math.random() * ( max - min + 1) ) + min)