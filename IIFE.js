console.log("*****************************************");
console.log(" Immediately Invoked Function Expression");
console.log("*****************************************");

(function msg(){
    //named IIFE
     console.log(`INVOKED FUNCION`);
})();

//use semi colon for two IIFEs

( (num1,num2) => {
    //unanamed IIFE / for paramteres
    console.log("Sum : ",num1+num2)
} )(3,3);