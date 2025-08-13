console.log("*********************************")
console.log("           CALL in JS")
console.log("*********************************")

// function setName(username){
//     this.username=username
// }

// function createUser(username , id , isLogged){
//     setName(username)   [DOES NOT HOLD THE VALUE OF USERNAME]
//     this.id = id
//     this.isLogged = isLogged
// }

// const user1 = new createUser("John" , 1 ,true)

// console.log(user1)


function setName(username){
    this.username=username
}

function createUser(username , id , isLogged){
    setName.call(this,username)
    this.id = id
    this.isLogged = isLogged
}

const user1 = new createUser("John" , 1 ,true)

console.log(user1)