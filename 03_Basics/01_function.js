function my_name (){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("j")
    console.log("A")
    console.log("W")
    console.log("A")
    console.log("L")
}

// my_name();

// function addtwo_numbers(num1 ,num2) { // parameters
//     num1 + num2;
//     console.log(num1 + num2);    
// }

// addtwo_numbers(10, 20); //arguments
// addtwo_numbers(2 , "A")


function addtwo_numbers(num1 ,num2) { // parameters
    // let result = num1 + num2
    // return result;   
    return
}

const sum = addtwo_numbers( 3, 5)
// console.log(sum); // 8


// function login_user(username){
//     return `${username} is loged in`
// }
// // console.log(login_user("Prajwal"));
// console.log(login_user());



// function login_user(username){
//     if(username === undefined){
//         return `Please enter username `
//     }
//     return `${username} is loged in`
// }
// console.log(login_user("Prajwal"));
// console.log(login_user());

// function login_user(username){
//     if(!username){
//         return `Please enter username `
//     }
//     return `${username} is loged in`
// }


// function login_user(username ="Vedant"){
//     if(!username){
//         return `Please enter username `
//     }
//     return `${username} is loged in`
// }
// console.log(login_user());

function calculate_cart_price(... num1){// rest operator
    return num1 
}

// console.log(calculate_cart_price(100,200,300));

const User ={
    name: "Prajwal",
    price : 100
}

function handle_object(anyobject) {
    console.log(`Username is ${anyobject.name} and  price is ${anyobject.price}`);
}

// handle_object(User)
// handle_object({
//     name: "Vedant",
//     price : 200
// })


const my_array = [1,2,3,4,5]
function return_second_element(getarray){
    return getarray[1];
}

console.log(return_second_element(my_array));