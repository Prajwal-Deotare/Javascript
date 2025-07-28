const user = {
    username : "Prajwal",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} wellcome to website`)
    }
}


// user.welcomeMessage()

// user.username ="Vedant"
// user.welcomeMessage()


// console.log(this) 

// function chai(){
//     let username = "Vedant"
//     console.log(this.username)
// }
// chai ()

// const chai = function(){
//     let username = "Vedant"
//     console.log(this.username)
// }
const chai = () =>{
    let username = "Vedant"
    console.log(username)

}
// chai()


// const addtwo = (num1, num2) => { // explicit return
//     return num1 + num2
// }
// console.log(addtwo(2, 3))


// const addtwo = (num1, num2) => num1 + num2 // implicit return
// console.log(addtwo(2, 3))

const print = () => ({username :"Vedant"}) //  '()' is used to return an object literal
console.log(print())













