

console.log("*****************************************");
console.log("             CLASSES");
console.log("*****************************************");


class User1 {
    constructor(username,id,pwd){
        this.username = username
        this.id = id
        this.pwd = pwd
    }

    encryptPwd(){
        return `new password : ${this.pwd}abc`
    }

    changeName(){
    return `${this.username.toUpperCase()}`
    }
}

const user1 = new User1("John" , 1 , 123)
console.log(user1.changeName())
console.log(user1.encryptPwd())


console.log("")
// behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const user2 = new User2("Shawn", "shawn@example.com", "123")

console.log(user2.changeUsername());
console.log(user2.encryptPassword());
