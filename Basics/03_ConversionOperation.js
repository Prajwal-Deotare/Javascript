let score = "33abc"   // this is not a number(NaN)
console.log(typeof(score))
console.log(typeof score)

let convert=Number(score)
console.log(convert)

let age = true // true is converted to 1 and false to 0
console.log(typeof(age))
let ageConvert = Number(age)
console.log(ageConvert)
console.log(typeof(ageConvert))

let gate= null // null is converted to 0
console.log(typeof(gate))
let gateConvert = Number(gate)
console.log(gateConvert)
console.log(typeof(gateConvert))

let name = undefined // undefined is converted to NaN
console.log(typeof(name))
let nameConvert = Number(name)
console.log(nameConvert)
console.log(typeof(nameConvert))

let bool = "string"
let boolConvert = Boolean(bool) 
console.log(boolConvert)
console.log(typeof(boolConvert))

let string = "Hello World" 
let stringConvert = String(string)
console.log(stringConvert)
console.log(typeof(stringConvert))


let strin = "Hello World" 
let stringConver = Boolean(strin)
console.log(stringConver)
console.log(typeof(stringConver))
