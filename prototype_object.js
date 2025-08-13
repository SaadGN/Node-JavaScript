console.log("*****************************************");
console.log("          Prototype Object in JS");
console.log("*****************************************");


function mul(num){
    return num*3;
}

mul.power = 2

console.log("num : ",mul(3))

console.log("num^2 : ",mul.power)

console.log("mul.prototype : ",mul.prototype,"\n")

function createUser(username , id){
    this.username = username
    this.id = id
}

createUser.prototype.increment = function(){
    this.id++
}

createUser.prototype.display = function(){
    console.log("\nusername : ",this.username)
}

const user1 = new createUser("John" , 1)

const user2 = new createUser("Shawn" , 2)

console.log("\nUser 1 : " , user1)
console.log("User 2 : " , user2)

user1.display()

user2.increment()
console.log("\nUser 2 id changed : " , user2)

