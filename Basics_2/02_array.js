const marval_heroes = ["thor", "ironman", "hulk", "captain america", "black widow", "spiderman"];
const dc_heroes = ["superman", "bat"];
const movies_heroes= ["green lantern", "flash", "aquaman"];

// dc_heroes.push(marval_heroes); // This will add the entire marval_heroes array as a single element to dc_heroes
// console.log(dc_heroes[2][1]);

// console.log(marval_heroes.concat(dc_heroes));// This will concatenate the two arrays and return a new array


const all_heroes = [...marval_heroes,...dc_heroes,...movies_heroes]; // This will spread the elements of both arrays into a new array
// console.log(all_heroes[8]);


const another_array = [1 , 2 , 3 , [ 4 , 5 , 6 ], 7 ,[ 6, 7 , [4 , 5]]]; // This is a nested arra
// console.log(another_array);
const simple_array = another_array.flat(Infinity); // This will flatten the nested array into a single-level array
// console.log(simple_array);



//console.log(Array.isArray("Prajwal"))
// console.log(Array.from("Prajwal"))
// console.log(Array.from({name: "Prajwal"})); // intresting case

let score = [10, 20, 30, 40, 50];
let score2 = [100, 200, 300, 400, 500];
// console.log((Array.of(...score,...score2))); 
// console.log(...score,...score2); 

let name = "Prajwal";
const a = Array.from(name)
console.log(Array.isArray(a))
