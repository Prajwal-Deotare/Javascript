// // if 

// if(true){

// }

// if(false){

// }

// const is_user_loggedIn = true;
// if(is_user_loggedIn){

// }

// if(2 ==="2"){   // strict equality check
//     console.log("2 ");
// }

// // temperature = 45;
// // if(temperature === 45){
// //     console.log(`Temperature is ${temperature}`);
// // }
// // else{
// // console.log("temperature is grater than 50")
// // }

// const score = 200
// if(score >= 100){
//     const power ="fly"
//     console.log(`You have the power to ${power}`);
// }
// console.log(`You have the power to ${power}`); // print if we use var instead of const


// const balance = 1000;
// if(balance >= 100) console.log("test"),console.log("test2");   // this is not good practise


// if(balance < 500) {
//     console.log("Low balance");
// }else if(balance < 1000) {
//     console.log("Balance is moderate");
// }else {
//     console.log("Balance is high");
// }


const is_user_loggedIn = false;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(is_user_loggedIn && debitCard){
    console.log("You can make a purchase");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("You can login");
}