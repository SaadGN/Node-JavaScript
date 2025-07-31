console.log("*********************************")
console.log("         FOR LOOP")
console.log("*********************************")

for(let i=0 ; i<10 ; i++)
{
    console.log(i)
}



// for loop to display rigth triangle
console.log("")
console.log("NESTED FOR LOOP")
for(let i=1;i<=6;i++)
{
    let row =''
    for(let j=1;j<=i;j++)
    {   
        row += "*"  
    }
    console.log(row)
}


//************************************************************ */
// break and continue keywords
console.log("")
console.log("Break statement")
for(let i=1 ; i<=8 ; i++)
{
    if(i==5)
    {
        console.log("break!!!")
        break;
    }
    console.log("value of i is ",i)
}
console.log("")
console.log("Continue statement")
for(let i=1 ; i<=8 ; i++)
{
    if(i==5)
    {
        console.log("continue!!!")
        continue;
    }
    console.log("value of i is ",i)
}


console.log("*********************************")
console.log("         WHILE LOOP")
console.log("*********************************")

let i=0
while(i<10)
{
    console.log("Value of i : ",i)
    i+=2
}

let index=0
let arr = ['John', 'Shawn' , 'Edward']
while(index < arr.length)
{
    console.log("Value of array : ",arr[index])
    index++
}


console.log("*********************************")
console.log("       DO WHILE LOOP")
console.log("*********************************")
let score =1
do
{
    console.log("Score : ",score)
    score++
}while(score <= 3)

    