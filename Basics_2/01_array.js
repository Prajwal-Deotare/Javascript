const arr = [1,2,3,4,5];
// console.log(arr[2]);

const arr2 = new Array(1,"Prajwal",3,true,5);
// console.log(arr2[3]);
// console.log(arr2[1]);

//array methods

// arr.push(6);
// arr.push(7);
// arr.pop();// removes the last element
// arr.unshift(9); // adds an element at the beginning
// arr.shift(); // removes the first element
// console.log(arr);

// console.log(arr.includes(4)); 
// console.log(arr.indexOf(3)); // returns the index of the element


//  **************   Time pass  **************************************************************

// include = arr.includes(4); 
// if(include){
//     console.log("4 is present in the array");
// }
// else{
//     console.log("4 is not present in the array");
// }


// **********************************************************************************************


const newArr = arr.join();
//console.log(newArr); // converts the array to a string

// Slice and Splice

const Narr = arr.slice(1,3); // returns a new array from index 1 to 2
console.log("A   "+ arr);
console.log(Narr);

const Narr2 = arr.splice(1,3); // removes elements from index 1 to 3 and returns them
console.log("B   " + arr);
console.log(Narr2); // [2, 3, 4]
