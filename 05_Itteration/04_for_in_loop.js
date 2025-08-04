// const myobject = {
//     js : 'javascript',
//     cpp : 'C++',
//     rb : 'rubby',
//     swift : 'swift by apple'
// }

// for (const key in myobject) {
//     console.log(`${key} shortcut is for ${myobject[key]}`);
    
// }


// const programming = ["js","rb","py","java","cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }



const samp = new Map()  // map is not itterable
samp.set('IN',"India")
samp.set('USA'," United states of america")
samp.set('FR', "France")
samp.set('IN ',"India")
for (const key in samp) {
    console.log(key); 
}