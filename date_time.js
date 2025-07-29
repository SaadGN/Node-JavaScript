console.log("*********************************")
console.log("      DATE AND TIME in JS")
console.log("*********************************")    

let date1 = new Date();

console.log("Date1 : ",date1)
console.log("Date1 : ",date1.toString())
console.log("Date1 : ",date1.toDateString())
console.log("Date1 : ",date1.toLocaleDateString())
console.log("Type of Date1 : ",typeof date1)

let date2 = new Date(2024,0,12,3,18);
console.log("Date2 : ",date2.toDateString())
console.log("Date2: ",date2.toLocaleString())

let date3 = new Date("01-12-2013");
console.log("Date3 : ",date3.toDateString())
console.log("Date3: ",date3.toLocaleString())

console.log(Date.now())     //time from jan,1,1970 in millisec

//returns time from jan,1,1970 in millisec till the date entered
console.log(date3.getTime()) 

console.log("Date3 : ",date3.toDateString())
console.log("Date3 (day): ",date3.getDay())
console.log("Date3 (Month): ",date3.getMonth()+1)

