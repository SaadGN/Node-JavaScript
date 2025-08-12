console.log("*********************************")
console.log("         OOP in JS")
console.log("*********************************")

const user = {
    username: "John",
    pwd: "123",
    signedIn: true,

    getUserDetail: function () {
        // console.log("Got Details")
        console.log(this, "\n");
    }
}

console.log(user.getUserDetail());

//console.log(user.username)

console.log(this, "\n");


//  ************ CONSTRUCTORS *********************



//****************** FUNCTION  Overwrites value ************

console.log("Limitations of Simple Function!!!")
function User(name, id, isLogged) {
    this.name = name;
    this.id = id;
    this.isLogged = isLogged;
    return this
}

let user1 = User("John", 1, true)
let user2 = User("Edward", 2, false)

console.log("User 1 : ", user1)
console.log("User 2 : ", user2)

// ******************* NEW **********************

function User(name, id, isLogged) {
    this.name = name;
    this.id = id;
    this.isLogged = isLogged;

    this.greet = function(){
        console.log(`Wekcome ${this.name}`)
    }
}

user1 = new User("\nJohn", 1, true)
user2 = new User("Edward", 2, false)

console.log("User 1 : ", user1)
console.log("User 2 : ", user2)

console.log(user1.constructor )


// ******************NOTES*******************

// new keyword :
// step 1 : empty object (instance) is created
// step 2 : construcyor function is called by new
// step 3 : arguments are injected in constructor /
//          The constructor function is called with this set to the new object
// step 4 : get in function [ that object is returned.]