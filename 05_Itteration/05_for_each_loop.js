const coding = ["js", "rubby", "python","cpp"]

// coding.forEach(  function (item){
//     console.log(item);
    
// })

// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


coding.forEach( (item, index , arr) => {
    console.log(item , index, arr);
    
})



const mycodeing = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
     {
        languageName : "java",
        languageFileName : "java"
    },
     {
        languageName : "python",
        languageFileName : "py"
    }
]

mycodeing.forEach(item => {

    console.log(item.languageName);
    
});
