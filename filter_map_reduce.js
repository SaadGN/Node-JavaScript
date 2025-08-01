console.log("*********************************")
console.log("      FILTER in JS")
console.log("*********************************")

const arr1 =
[
    {title : "book1" , author : "author1" ,publish : 1990},
    {title : "book2" , author : "author2" ,publish : 1991},
    {title : "book3" , author : "author3" ,publish : 1980},
    {title : "book4" , author : "author4" ,publish : 1989}
]

//filter checks the condtion
const detail = arr1.filter( (bk) => bk.publish > 1990 )
console.log("book : ",detail)

console.log("*********************************")
console.log("          MAP in JS")
console.log("*********************************")

const num = [1,2,3,4,5,6]
// map automatically returns
const res = num.map( (val) => val+10 )
console.log("result : ",res)


// Chaining
const num1 = [1,2,3,4,5,6]
const res1 = num1
            .map( (num) => num*10 )
            .map( (num) => num+1)
            .filter( (num) => num>30)

console.log("res1 : ",res1)



console.log("*********************************")
console.log("      REDUCE in JS")
console.log("*********************************")

const arr2 = [1,2,3]
const sum = arr2.reduce( (acc,currVal) => 
{
    console.log(`accumulator : ${acc} , Current Value : ${currVal}`)
    return acc + currVal
},0)
console.log("Total Sum : ",sum)

console.log("")
const obj = [
    {item :"jacket" , price : 1000},
    {item :"suit" , price : 6000},
    {item :"shirt" , price : 2000}
]

const total = obj.reduce( (acc,item) => acc + item.price,0)
console.log("Total price : ",total)