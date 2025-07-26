// singaltons

const user = new Object(); // singalton object
user.name = "Prajwal"
user.age = 22;
user.isAdmin = true;
//console.log(user);

const r_user = {
    email : "user@gmail.com",
    full_name : {
        first_name : "Prajwal",
        Last_name : "Deotare"
    },
    is_active : true,
    age : 22
}

// console.log(r_user.full_name.first_name);



const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};

//const obj3 = Object.assign(obj1, obj2);
//onst obj3 = Object.assign({}, obj1, obj2); // Merging objects

const obj3 = {...obj1, ...obj2}; // Merging objects using spread operator
console.log(obj3);


const users = [
    {
        id : 1,
        name : "Prajwal"
    },
    {
        id : 2,
        name : "Deotare"
    },
    {
        id : 3,
        name : "Prajwal Deotare"
    }
]

// console.log(users[1].name)
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user)) // Returns an array of key-value pairs

console.log(user.hasOwnProperty("name")) // Checks if the property exists in the object