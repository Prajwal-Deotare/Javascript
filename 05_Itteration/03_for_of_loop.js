// for of 

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr){
//     console.log(num)
// }

// const greetings = "Hello world !"
// for(const greet of greetings){
//     if(greet=== " "){
//         continue
//     }
//     console.log(`Each char is ${greet}`)
// }


// Map

const samp = new Map()
samp.set('IN',"India")
samp.set('USA'," United states of america")
samp.set('FR', "France")
samp.set('IN ',"India")

console.log(samp);

for(const key of samp){
    console.log(key)
}

for(const [key, value] of samp){
    console.log(key , `:- ${value}`)
}


const myobject ={
    "game1" : "NFS",
    "game2" : "spiderman"
}

for(const [key, value] of myobject){
    console.log(key, `:- ${value}`)

}