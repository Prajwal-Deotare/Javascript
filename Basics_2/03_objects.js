
// Object Literals

const mysymbol = Symbol("key1");

const jsuser = {
    name: "Prajwal",
    "lastName": "Deotare",
    [mysymbol]: "key1",  
    email: "prajwaldeotare673@gmail.com",
    age: 22,
    isAdmin: true
};

// console.log(jsuser.name);   // Accessing property using dot notation
// console.log(jsuser["lastName"]);   // Accessing property using bracket notation

// console.log(jsuser[mysymbol]);   // Accessing property using symbol key

//jsuser.name = "Vedant";   // Updating property value
//console.log(jsuser.name);   // Accessing updated property value

//Object.freeze(jsuser);   // Freezing the object to prevent further modifications
//jsuser.name = "Vedant2";   // This will not work as the object is frozen
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hi js user")
}

// jsuser.greeting()
// console.log(jsuser.greeting());   


jsuser.greeting2 = function(){
    console.log(`Hello JsUser ${this.name}`) // Using 'this' to access the object properties
}

jsuser.greeting2()