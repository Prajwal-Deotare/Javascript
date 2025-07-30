//for


// for (let i=0 ;i<=10;i++){
//     const element = i;
//     if(element==5){
//         console.log("5 is best number")
//     }
//     console.log(i)
// }


// for (let i=1 ;i<=10;i++){
//     console.log(`outerloop : ${i}`)
//   for(let j=1 ;j<=10;j++){
//    // console.log(`innerloop : ${j} outerloop : ${i}`);
//         console.log(i + "* " + j + " = " + (i * j));
//     }
// }

//array
// const arr = ["flash","spider","batman","superman","ironman"];
// console.log(arr.length);
// for (let i = 0; i <= arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// break and continue

for (let i = 0; i <= 20; i++) {
    if(i== 5){
        console.log("5 detected")
        // break;  // break exit 
        // continue // continue don't print detected value and print rest all values
    }
    console.log(`Value of i is : ${i}`);
}