// const userEmail = "prajwal@gmail.com"
// if(userEmail){
//     console.log("User email is present");
// }else{
//     console.log("User email is not present");
// }

// const userEmail = ""; // Empty string
// if(userEmail){
//     console.log("User email is present");
// }else{
//     console.log("User email is not present");
// }

const userEmail = []
if(userEmail){
    console.log("User email is present");
}else{
    console.log("User email is not present");
}


if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){ // Check if object is empty
    console.log("Object is empty");
}

// falsy values

// false,0,-0,"",null,undefined,NaN,BigInt(0)

// truthy values
// "0" , "false", [], {}, function(){}, BigInt(1), Symbol("symbol")


// Nullish coalescing operator(??) :null or undefined

let val1;
//val1 = val1 ?? "default value"; // If val1 is null or undefined, assign "default value"
// val1 = 5 ?? 10
// console.log(val1); // Output: 5

// val1 = null ?? 10
// console.log(val1); // Output: 10

// val1 = undefined ?? 15
// console.log(val1); // Output: 15

// val1 = null ?? 10 ?? 20
// console.log(val1); // Output: 10


// terniary operator

// condition ? expressionIfTrue : expressionIfFalse
const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");
